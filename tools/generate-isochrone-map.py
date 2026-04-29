#!/usr/bin/env python3
"""送迎エリアマップ（等時間到達範囲・isochrone）を生成するスクリプト。

OpenRouteService の isochrone API を使用して、実際の道路ベースで
車での到達時間を3層（10分/15分/20分）の色分け多角形で可視化する。

使い方:
  ORS_API_KEY=eyJ... python3 tools/generate-isochrone-map.py
"""
import os
import sys
import json
import ssl
import math
import urllib.request
from staticmap import StaticMap, CircleMarker, Polygon
from PIL import Image, ImageDraw, ImageFont

API_KEY = os.environ.get('ORS_API_KEY')
if not API_KEY:
    print("ERROR: 環境変数 ORS_API_KEY を設定してください", file=sys.stderr)
    sys.exit(1)

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# 4事業所の座標
FACILITIES = [
    {
        'name': 'poem de riha 安積店',
        'slug': 'asaka',
        'lat': 37.349490, 'lng': 140.362112,
        'labels': [
            ('郡山市', 37.4003, 140.3596, 'big'),
            ('須賀川市', 37.2868, 140.3727, 'big'),
            ('安積町', 37.3505, 140.3613, 'med'),
            ('富田町', 37.3782, 140.3257, 'med'),
            ('大槻町', 37.3772, 140.3027, 'med'),
            ('日和田町', 37.4490, 140.3837, 'small'),
            ('長沼', 37.3300, 140.2300, 'small'),
            ('安積永盛', 37.3325, 140.3717, 'small'),
        ],
    },
    {
        'name': 'デイサービスセンターポエム郡山賀庄',
        'slug': 'kasho',
        'lat': 37.371613, 'lng': 140.368108,
        'labels': [
            ('郡山市', 37.4003, 140.3596, 'big'),
            ('賀庄', 37.371613, 140.368108, 'med'),
            ('安積町', 37.3505, 140.3613, 'med'),
            ('富田町', 37.3782, 140.3257, 'med'),
            ('日和田町', 37.4490, 140.3837, 'med'),
            ('喜久田町', 37.4250, 140.2937, 'small'),
            ('大槻町', 37.3772, 140.3027, 'small'),
        ],
    },
    {
        'name': 'リハビリ専門デイサービス ポエム開成',
        'slug': 'kaisei',
        'lat': 37.393652, 'lng': 140.345112,
        'labels': [
            ('郡山市', 37.4003, 140.3596, 'big'),
            ('台新', 37.393652, 140.345112, 'med'),
            ('開成', 37.398, 140.343, 'med'),
            ('富田町', 37.3782, 140.3257, 'med'),
            ('大槻町', 37.3772, 140.3027, 'med'),
            ('喜久田町', 37.4250, 140.2937, 'small'),
            ('日和田町', 37.4490, 140.3837, 'small'),
            ('安積町', 37.3505, 140.3613, 'small'),
        ],
    },
    {
        'name': '矢祭町デイサービスセンター舘山荘',
        'slug': 'tateyama',
        'lat': 36.875226, 'lng': 140.428018,
        'labels': [
            ('矢祭町', 36.875, 140.428, 'big'),
            ('塙町', 36.951, 140.460, 'big'),
            ('棚倉町', 37.029, 140.376, 'big'),
            ('東舘', 36.875, 140.428, 'small'),
            ('大子町', 36.768, 140.358, 'med'),
        ],
    },
]


def fetch_isochrones(lat, lng):
    """OpenRouteService から isochrone (10/15/20分) を取得"""
    url = "https://api.openrouteservice.org/v2/isochrones/driving-car"
    body = json.dumps({
        "locations": [[lng, lat]],
        "range": [600, 900, 1200],
        "range_type": "time",
    }).encode('utf-8')
    req = urllib.request.Request(url, data=body, headers={
        "Authorization": API_KEY,
        "Content-Type": "application/json",
    })
    with urllib.request.urlopen(req, timeout=60, context=ctx) as r:
        return json.loads(r.read().decode('utf-8'))


# ----- フォント -----
FONT_CANDIDATES = [
    '/System/Library/Fonts/Hiragino Mincho ProN.ttc',
    '/System/Library/Fonts/ヒラギノ明朝 ProN.ttc',
    '/System/Library/Fonts/Hiragino Sans GB.ttc',
]

def get_font(size):
    for fp in FONT_CANDIDATES:
        if os.path.exists(fp):
            try:
                return ImageFont.truetype(fp, size)
            except Exception:
                pass
    return ImageFont.load_default()


def latlng_to_xy(lat, lng, c_lat, c_lng, w, h, zoom):
    """Web Mercator 座標変換"""
    def mercator_x(_lng):
        return (_lng + 180) / 360 * (256 * (2 ** zoom))
    def mercator_y(_lat):
        s = math.sin(math.radians(_lat))
        return (0.5 - math.log((1 + s) / (1 - s)) / (4 * math.pi)) * (256 * (2 ** zoom))
    cx_px = mercator_x(c_lng)
    cy_px = mercator_y(c_lat)
    px = mercator_x(lng) - cx_px + w / 2
    py = mercator_y(lat) - cy_px + h / 2
    return int(px), int(py)


def render_facility(fac, output_dir, zoom=12, w=1400, h=900):
    """1事業所のマップを生成"""
    print(f"--- {fac['name']} ---")
    geo = fetch_isochrones(fac['lat'], fac['lng'])
    features = sorted(geo['features'], key=lambda f: -f['properties']['value'])

    m = StaticMap(w, h, url_template='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                  padding_x=20, padding_y=20)

    # isochrone polygons (外→内、薄→濃)
    # alpha値を高めにして視認性UP（aa=170/ff=85, b3=180, c8=200）
    fills = {1200: '#b8883540', 900: '#b8883570', 600: '#b88835a0'}
    for f in features:
        coords = f['geometry']['coordinates'][0]
        v = f['properties']['value']
        color = fills.get(v, '#b8883540')
        m.add_polygon(Polygon(coords, color, '#b88835', simplify=False))

    # 中心マーカー
    m.add_marker(CircleMarker((fac['lng'], fac['lat']), '#1f2933', 30))
    m.add_marker(CircleMarker((fac['lng'], fac['lat']), '#fff', 24))
    m.add_marker(CircleMarker((fac['lng'], fac['lat']), '#b88835', 14))

    img = m.render(zoom=zoom).convert('RGB')
    draw = ImageDraw.Draw(img)

    font_title = get_font(38)
    font_big = get_font(28)
    font_med = get_font(22)
    font_small = get_font(18)
    font_legend = get_font(20)
    font_note = get_font(17)

    # 地名ラベル（白半透明背景）
    for name, lat, lng, sz in fac.get('labels', []):
        x, y = latlng_to_xy(lat, lng, fac['lat'], fac['lng'], w, h, zoom)
        if x < 30 or x > w - 30 or y < 30 or y > h - 30:
            continue
        if sz == 'big':
            f = font_big; alpha = 220; color = '#1f2933'; pad = (20, 12)
        elif sz == 'med':
            f = font_med; alpha = 180; color = '#3a414d'; pad = (14, 8)
        else:
            f = font_small; alpha = 160; color = '#4a5260'; pad = (10, 6)
        bbox = draw.textbbox((0, 0), name, font=f)
        bw, bh = bbox[2] - bbox[0], bbox[3] - bbox[1]
        bg = Image.new('RGBA', (bw + pad[0], bh + pad[1]), (255, 255, 255, alpha))
        img.paste(bg, (x - (bw + pad[0]) // 2, y - (bh + pad[1]) // 2), bg)
        draw = ImageDraw.Draw(img)
        draw.text((x - bw // 2, y - bh // 2 - 3), name, fill=color, font=f)

    # 中心の施設名ラベル
    cx, cy = w // 2, h // 2
    label = fac['name']
    bbox = draw.textbbox((0, 0), label, font=font_big)
    lw = bbox[2] - bbox[0]
    lh = bbox[3] - bbox[1]
    lx = cx + 35
    ly = cy - 18
    draw.rectangle([lx - 10, ly - 8, lx + lw + 12, ly + lh + 10], fill='#1f2933')
    draw.text((lx, ly - 3), label, fill='#fff', font=font_big)

    # タイトル
    title = '送迎エリアマップ'
    bbox = draw.textbbox((0, 0), title, font=font_title)
    tw = bbox[2] - bbox[0]
    draw.rectangle([22, 22, tw + 60, 84], fill='#1f2933')
    draw.text((40, 30), title, fill='#fff', font=font_title)

    # 凡例
    lx, ly = w - 320, h - 200
    lw, lh = 300, 180
    draw.rectangle([lx, ly, lx + lw, ly + lh], fill='#fff', outline='#b88835', width=2)
    draw.text((lx + 16, ly + 14), '車での実際の到達時間', fill='#1f2933', font=font_legend)
    items = [('約10分以内', '#b88835a0'), ('約15分以内', '#b8883570'), ('約20分以内', '#b8883540')]
    for i, (lbl, c) in enumerate(items):
        cy_ = ly + 60 + i * 32
        draw.ellipse([lx + 20, cy_, lx + 40, cy_ + 20], fill=c, outline='#b88835')
        draw.text((lx + 50, cy_ - 1), lbl, fill='#1f2933', font=font_note)
    draw.text((lx + 16, ly + lh - 28), '※ OpenStreetMap道路網ベース', fill='#8b8e95', font=font_small)

    out = os.path.join(output_dir, f"sougei-area-{fac['slug']}.png")
    img.save(out, 'PNG', optimize=True)
    print(f"  保存: {out}  ({os.path.getsize(out)//1024} KB)")
    return out


def main():
    output_dir = '/Users/hanawahiroyuki/hanahiro-training/photos'
    os.makedirs(output_dir, exist_ok=True)
    for fac in FACILITIES:
        try:
            render_facility(fac, output_dir)
        except Exception as e:
            print(f"  エラー {fac['name']}: {e}")
        import time
        time.sleep(2)


if __name__ == '__main__':
    main()
