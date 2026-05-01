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
        'range_sec': 420,  # 片道7分
        'tile_url': 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',  # 国土地理院 標準地図
        'tile_attribution': '地図：国土地理院',
        'labels': [
            ('郡山駅', 37.3963, 140.3873, 'big'),
            ('須賀川市', 37.2868, 140.3727, 'big'),
            ('安積町', 37.3505, 140.3613, 'med'),
            ('富田町', 37.3782, 140.3257, 'med'),
            ('大槻町', 37.3772, 140.3027, 'med'),
            ('安積永盛', 37.3325, 140.3717, 'med'),
            ('田村町', 37.3500, 140.4350, 'med'),
            ('日和田町', 37.4490, 140.3837, 'small'),
            ('長沼', 37.3300, 140.2300, 'small'),
            ('喜久田町', 37.4250, 140.2937, 'small'),
            ('阿久津', 37.3580, 140.3870, 'small'),
        ],
    },
    {
        'name': 'デイサービスセンターポエム郡山賀庄',
        'slug': 'kasho',
        'lat': 37.371613, 'lng': 140.368108,
        'labels': [
            ('郡山駅', 37.3963, 140.3873, 'big'),
            ('安積町', 37.3505, 140.3613, 'med'),
            ('富田町', 37.3782, 140.3257, 'med'),
            ('富久山町', 37.4115, 140.3870, 'med'),
            ('日和田町', 37.4490, 140.3837, 'med'),
            ('喜久田町', 37.4250, 140.2937, 'med'),
            ('田村町', 37.3500, 140.4350, 'med'),
            ('大槻町', 37.3772, 140.3027, 'small'),
            ('安積永盛', 37.3325, 140.3717, 'small'),
        ],
    },
    {
        'name': 'リハビリ専門デイサービス ポエム開成',
        'slug': 'kaisei',
        'lat': 37.393652, 'lng': 140.345112,
        'labels': [
            ('郡山駅', 37.3963, 140.3873, 'big'),
            ('開成山公園', 37.4015, 140.3590, 'med'),
            ('富田町', 37.3782, 140.3257, 'med'),
            ('喜久田町', 37.4250, 140.2937, 'med'),
            ('日和田町', 37.4490, 140.3837, 'med'),
            ('大槻町', 37.3772, 140.3027, 'med'),
            ('安積町', 37.3505, 140.3613, 'med'),
            ('富久山町', 37.4115, 140.3870, 'small'),
            ('田村町', 37.3700, 140.4250, 'small'),
        ],
    },
    {
        'name': '矢祭町デイサービスセンター舘山荘',
        'slug': 'tateyama',
        'lat': 36.875226, 'lng': 140.428018,
        'labels': [
            ('矢祭町中心部', 36.876, 140.392, 'big'),
            ('塙町', 36.951, 140.413, 'big'),
            ('大子町', 36.768, 140.358, 'big'),
            ('東舘', 36.875, 140.428, 'med'),
            ('内川', 36.910, 140.420, 'small'),
            ('関岡', 36.840, 140.420, 'small'),
            ('下関河内', 36.860, 140.470, 'small'),
        ],
    },
]


def fetch_isochrones(lat, lng, range_sec=600):
    """OpenRouteService から isochrone を取得（デフォルト片道10分）"""
    url = "https://api.openrouteservice.org/v2/isochrones/driving-car"
    body = json.dumps({
        "locations": [[lng, lat]],
        "range": [range_sec],
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
    range_sec = fac.get('range_sec', 600)
    tile_url = fac.get('tile_url', 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png')
    tile_attr = fac.get('tile_attribution', '地図：OpenStreetMap')
    print(f"--- {fac['name']} （片道 {range_sec // 60}分）---")
    geo = fetch_isochrones(fac['lat'], fac['lng'], range_sec)
    features = sorted(geo['features'], key=lambda f: -f['properties']['value'])

    m = StaticMap(w, h, url_template=tile_url, padding_x=20, padding_y=20)

    # 送迎範囲ポリゴン（単色塗り）
    for f in features:
        coords = f['geometry']['coordinates'][0]
        m.add_polygon(Polygon(coords, '#b8883560', '#a87827', simplify=False))

    # 中心マーカーは後でPILで📍ピンとして描画する
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

    # 中心の📍ピン（PILで描画）
    cx, cy = w // 2, h // 2
    pin_size = 56
    # ティアドロップ型のピン（楕円＋三角）
    pin_top = cy - pin_size
    # ピン外側（ダーク）
    draw.ellipse([cx - pin_size // 2 - 2, pin_top - 2, cx + pin_size // 2 + 2, pin_top + pin_size + 2],
                 fill='#1f2933', outline=None)
    # 三角の足を描く（黒）
    foot = [(cx - 14, pin_top + pin_size - 6), (cx + 14, pin_top + pin_size - 6), (cx, cy + 6)]
    draw.polygon(foot, fill='#1f2933')
    # ピン内側（ゴールド）
    draw.ellipse([cx - pin_size // 2 + 4, pin_top + 4, cx + pin_size // 2 - 4, pin_top + pin_size - 4],
                 fill='#a87827', outline=None)
    # 中心の白い丸
    draw.ellipse([cx - 8, pin_top + pin_size // 2 - 8, cx + 8, pin_top + pin_size // 2 + 8],
                 fill='#fff', outline=None)

    # 施設名ラベル（ピンの右）
    label = fac['name']
    bbox = draw.textbbox((0, 0), label, font=font_big)
    lw = bbox[2] - bbox[0]
    lh = bbox[3] - bbox[1]
    lx = cx + 38
    ly = cy - pin_size + 12
    draw.rectangle([lx - 10, ly - 8, lx + lw + 12, ly + lh + 10], fill='#1f2933')
    draw.text((lx, ly - 3), label, fill='#fff', font=font_big)

    # タイトル
    title = '送迎エリアマップ'
    bbox = draw.textbbox((0, 0), title, font=font_title)
    tw = bbox[2] - bbox[0]
    draw.rectangle([22, 22, tw + 60, 84], fill='#1f2933')
    draw.text((40, 30), title, fill='#fff', font=font_title)

    # 凡例（送迎範囲のみ）
    lx, ly = w - 320, h - 110
    lw, lh = 300, 88
    draw.rectangle([lx, ly, lx + lw, ly + lh], fill='#fff', outline='#b88835', width=2)
    draw.ellipse([lx + 18, ly + 18, lx + 38, ly + 38], fill='#b8883560', outline='#a87827', width=2)
    draw.text((lx + 50, ly + 16), '送迎範囲', fill='#1f2933', font=font_legend)
    draw.text((lx + 18, ly + 50), f'※ OpenStreetMap道路網ベース', fill='#8b8e95', font=font_small)

    # タイル出典（地図右下）
    bbox = draw.textbbox((0, 0), tile_attr, font=font_note)
    aw = bbox[2] - bbox[0]
    ah = bbox[3] - bbox[1]
    bg = Image.new('RGBA', (aw + 16, ah + 8), (255, 255, 255, 200))
    img.paste(bg, (10, h - ah - 18), bg)
    draw = ImageDraw.Draw(img)
    draw.text((18, h - ah - 14), tile_attr, fill='#3a414d', font=font_note)

    out = os.path.join(output_dir, f"sougei-area-{fac['slug']}.png")
    img.save(out, 'PNG', optimize=True)
    print(f"  保存: {out}  ({os.path.getsize(out)//1024} KB)")
    return out


def main():
    output_dir = '/Users/hanawahiroyuki/hanahiro-training/photos'
    os.makedirs(output_dir, exist_ok=True)
    # コマンドライン引数で slug を指定すると、その事業所だけ生成
    only = sys.argv[1] if len(sys.argv) > 1 else None
    for fac in FACILITIES:
        if only and fac['slug'] != only:
            continue
        try:
            render_facility(fac, output_dir)
        except Exception as e:
            print(f"  エラー {fac['name']}: {e}")
        import time
        time.sleep(2)


if __name__ == '__main__':
    main()
