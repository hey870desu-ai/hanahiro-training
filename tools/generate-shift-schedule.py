#!/usr/bin/env python3
"""勤務形態一覧表（28日分・1シートで月単位入力）を生成するスクリプト。

1シートで「No・職種・雇用形態・氏名 + 28日分の勤務時間 + 月合計・月平均・常勤換算」
を入力できる、横長の月単位ビュー。

セル保護なし、すべて自由に編集可能。
"""
import os
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from openpyxl.utils import get_column_letter

OUTPUT = '/Users/hanawahiroyuki/hanahiro-training/docs/poem-asaka-shift-schedule.xlsx'
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)

# === 色 / 罫線 / フォント ===
INK = '1F2933'
GOLD = 'A87827'
GOLD_PALE = 'F4EAD6'
LINE_LIGHT = 'E3DCCC'
WEEKEND_FILL = 'FFF4EC'  # 週末カラム用
WEEK_BG = ['FBF9F4', 'FFFFFF', 'FBF9F4', 'FFFFFF']  # 週交互で薄く差別化

HEADER_FILL = PatternFill(start_color=INK, end_color=INK, fill_type='solid')
GOLD_FILL = PatternFill(start_color=GOLD_PALE, end_color=GOLD_PALE, fill_type='solid')

THIN_GREY = Side(border_style='thin', color=LINE_LIGHT)
THIN_DARK = Side(border_style='thin', color='888888')
BORDER_ALL = Border(left=THIN_GREY, right=THIN_GREY, top=THIN_GREY, bottom=THIN_GREY)
BORDER_DARK = Border(left=THIN_DARK, right=THIN_DARK, top=THIN_DARK, bottom=THIN_DARK)
WEEK_DIVIDER = Side(border_style='medium', color=GOLD)

WHITE_BOLD_10 = Font(name='Yu Gothic', size=10, bold=True, color='FFFFFF')
WHITE_BOLD_9 = Font(name='Yu Gothic', size=9, bold=True, color='FFFFFF')
INK_NORMAL_10 = Font(name='Yu Gothic', size=10, color=INK)
INK_BOLD_10 = Font(name='Yu Gothic', size=10, bold=True, color=INK)
INK_NORMAL_9 = Font(name='Yu Gothic', size=9, color=INK)
INK_BOLD_12 = Font(name='Yu Gothic', size=12, bold=True, color=INK)
SMALL_GREY = Font(name='Yu Gothic', size=9, color='8B8E95')

CENTER = Alignment(horizontal='center', vertical='center', wrap_text=True)
LEFT = Alignment(horizontal='left', vertical='center', wrap_text=True)

NUM_ROWS = 15
SAMPLE_JOBS = [
    ('管理者', '常勤専従', ''),
    ('生活相談員', '常勤専従', ''),
    ('看護職員', '常勤専従', ''),
    ('機能訓練指導員', '常勤専従', '柔道整復師'),
    ('介護職員', '常勤専従', ''),
    ('介護職員', '常勤専従', ''),
    ('介護職員', '非常勤専従', ''),
    ('介護職員', '非常勤専従', ''),
]

DAY_LABELS = ['月', '火', '水', '木', '金', '土', '日']


def main():
    wb = Workbook()
    ws = wb.active
    ws.title = '勤務形態一覧表'

    # === タイトル ===
    ws['A1'] = '勤務形態一覧表（月単位 / 28日分）'
    ws['A1'].font = Font(name='Yu Mincho', size=18, bold=True, color=INK)
    ws['A1'].alignment = CENTER
    ws.row_dimensions[1].height = 32
    ws.merge_cells('A1:AJ1')

    # === 事業所情報（行3-5） ===
    info = [
        (3, '事業所名', 'poem de riha 安積店', 'サービス種別', '地域密着型通所介護（3時間以上4時間未満）／ 介護予防・日常生活支援総合事業'),
        (4, '所在地', '福島県郡山市安積町笹川字四角担3-1', '基準年月', '令和8年（2026年）6月'),
        (5, 'サービス提供時間', '午前 9:00〜12:05 ／ 午後 13:25〜16:30', '営業日', '月〜金（祝日も営業）／ 休：土日・年末年始'),
    ]
    for row, lbl1, val1, lbl2, val2 in info:
        ws[f'A{row}'] = lbl1
        ws[f'A{row}'].font = INK_BOLD_10
        ws[f'A{row}'].fill = GOLD_FILL
        ws[f'A{row}'].alignment = CENTER
        ws[f'A{row}'].border = BORDER_ALL
        ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=4)

        ws[f'E{row}'] = val1
        ws[f'E{row}'].font = INK_NORMAL_10
        ws[f'E{row}'].alignment = LEFT
        ws[f'E{row}'].border = BORDER_ALL
        ws.merge_cells(start_row=row, start_column=5, end_row=row, end_column=18)

        ws[f'S{row}'] = lbl2
        ws[f'S{row}'].font = INK_BOLD_10
        ws[f'S{row}'].fill = GOLD_FILL
        ws[f'S{row}'].alignment = CENTER
        ws[f'S{row}'].border = BORDER_ALL
        ws.merge_cells(start_row=row, start_column=19, end_row=row, end_column=22)

        ws[f'W{row}'] = val2
        ws[f'W{row}'].font = INK_NORMAL_10
        ws[f'W{row}'].alignment = LEFT
        ws[f'W{row}'].border = BORDER_ALL
        ws.merge_cells(start_row=row, start_column=23, end_row=row, end_column=36)

    # === 列幅設定 ===
    # 4列の固定情報 + 28日 + 月合計 + 月平均 + 常勤換算 + 備考 = 36列
    ws.column_dimensions['A'].width = 4   # No.
    ws.column_dimensions['B'].width = 14  # 職種
    ws.column_dimensions['C'].width = 11  # 雇用形態
    ws.column_dimensions['D'].width = 13  # 氏名
    # 28日（E〜AF）を狭く
    for col in range(5, 33):
        ws.column_dimensions[get_column_letter(col)].width = 4.5
    ws.column_dimensions[get_column_letter(33)].width = 9  # 月合計
    ws.column_dimensions[get_column_letter(34)].width = 9  # 月平均
    ws.column_dimensions[get_column_letter(35)].width = 9  # 常勤換算
    ws.column_dimensions[get_column_letter(36)].width = 14 # 備考

    # === ヘッダー（2段組） ===
    HEADER_ROW1 = 7
    HEADER_ROW2 = 8
    FIRST_DATA = 9
    LAST_DATA = FIRST_DATA + NUM_ROWS - 1

    ws.row_dimensions[HEADER_ROW1].height = 22
    ws.row_dimensions[HEADER_ROW2].height = 22

    # 上段：固定情報のヘッダー（縦結合）
    fixed_headers = [('A', 'No.'), ('B', '職種'), ('C', '雇用形態'), ('D', '氏名')]
    for col, label in fixed_headers:
        ws.merge_cells(f'{col}{HEADER_ROW1}:{col}{HEADER_ROW2}')
        c = ws[f'{col}{HEADER_ROW1}']
        c.value = label
        c.font = WHITE_BOLD_10
        c.fill = HEADER_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK

    # 上段：第1週〜第4週ラベル
    for w in range(4):
        start_col = 5 + w * 7
        end_col = start_col + 6
        ws.merge_cells(start_row=HEADER_ROW1, start_column=start_col, end_row=HEADER_ROW1, end_column=end_col)
        c = ws.cell(row=HEADER_ROW1, column=start_col)
        c.value = f'第{w+1}週'
        c.font = WHITE_BOLD_10
        c.fill = HEADER_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK

    # 下段：曜日ラベル（4週分）
    for w in range(4):
        for d, day in enumerate(DAY_LABELS):
            col = 5 + w * 7 + d
            c = ws.cell(row=HEADER_ROW2, column=col)
            c.value = day
            c.font = WHITE_BOLD_9
            c.fill = HEADER_FILL
            c.alignment = CENTER
            c.border = BORDER_DARK

    # 上段：右側のサマリー列（縦結合）
    summary_headers = [
        (33, '月合計\n(時間)'),
        (34, '月平均\n(h/週)'),
        (35, '常勤換算\n(月/160h)'),
        (36, '備考'),
    ]
    for col, label in summary_headers:
        col_letter = get_column_letter(col)
        ws.merge_cells(f'{col_letter}{HEADER_ROW1}:{col_letter}{HEADER_ROW2}')
        c = ws[f'{col_letter}{HEADER_ROW1}']
        c.value = label
        c.font = WHITE_BOLD_9
        c.fill = HEADER_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK

    # === 入力行（職員 NUM_ROWS 行） ===
    for i in range(NUM_ROWS):
        r = FIRST_DATA + i
        # No.
        c = ws.cell(row=r, column=1, value=i + 1)
        c.font = INK_NORMAL_10
        c.alignment = CENTER
        c.border = BORDER_ALL

        # 職種・雇用形態・氏名（サンプルあれば入力）
        if i < len(SAMPLE_JOBS):
            job, kind, note = SAMPLE_JOBS[i]
            ws.cell(row=r, column=2, value=job)
            ws.cell(row=r, column=3, value=kind)
            ws.cell(row=r, column=36, value=note)

        for col in [2, 3, 4]:
            c = ws.cell(row=r, column=col)
            c.font = INK_NORMAL_10
            c.alignment = LEFT
            c.border = BORDER_ALL

        # 28日分の入力欄（週ごとに背景色を交互）
        for w in range(4):
            week_fill = PatternFill(start_color=WEEK_BG[w], end_color=WEEK_BG[w], fill_type='solid')
            weekend_fill = PatternFill(start_color=WEEKEND_FILL, end_color=WEEKEND_FILL, fill_type='solid')
            for d in range(7):
                col = 5 + w * 7 + d
                c = ws.cell(row=r, column=col)
                c.font = INK_NORMAL_9
                c.alignment = CENTER
                # 土日（d=5,6）はやや色を変える
                c.fill = weekend_fill if d >= 5 else week_fill
                # 週の境界に太罫線
                if d == 6 and w < 3:
                    c.border = Border(left=THIN_GREY, right=WEEK_DIVIDER, top=THIN_GREY, bottom=THIN_GREY)
                elif d == 0 and w > 0:
                    c.border = Border(left=WEEK_DIVIDER, right=THIN_GREY, top=THIN_GREY, bottom=THIN_GREY)
                else:
                    c.border = BORDER_ALL

        # 月合計（=SUM(E:AF)）
        last_day_col = get_column_letter(32)  # AF
        first_day_col = get_column_letter(5)  # E
        c = ws.cell(row=r, column=33, value=f'=SUM({first_day_col}{r}:{last_day_col}{r})')
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_ALL
        c.number_format = '0.0'

        # 月平均（h/週）= 月合計 / 4
        c = ws.cell(row=r, column=34, value=f'={get_column_letter(33)}{r}/4')
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_ALL
        c.number_format = '0.0'

        # 常勤換算（月/160h）
        c = ws.cell(row=r, column=35, value=f'={get_column_letter(33)}{r}/160')
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_ALL
        c.number_format = '0.00'

        # 備考
        c = ws.cell(row=r, column=36)
        c.font = INK_NORMAL_10
        c.alignment = LEFT
        c.border = BORDER_ALL

        ws.row_dimensions[r].height = 22

    # === 合計行 ===
    SR = LAST_DATA + 1
    ws.cell(row=SR, column=1, value='合計').font = INK_BOLD_10
    ws.cell(row=SR, column=1).fill = GOLD_FILL
    ws.cell(row=SR, column=1).alignment = CENTER
    ws.cell(row=SR, column=1).border = BORDER_DARK
    ws.merge_cells(start_row=SR, start_column=1, end_row=SR, end_column=4)
    for col in range(1, 5):
        ws.cell(row=SR, column=col).fill = GOLD_FILL
        ws.cell(row=SR, column=col).border = BORDER_DARK

    # 各日の合計
    for col in range(5, 33):
        col_letter = get_column_letter(col)
        c = ws.cell(row=SR, column=col, value=f'=SUM({col_letter}{FIRST_DATA}:{col_letter}{LAST_DATA})')
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK
        c.number_format = '0.0'

    # 月合計、月平均、常勤換算の総合計
    for col in [33, 34, 35]:
        col_letter = get_column_letter(col)
        c = ws.cell(row=SR, column=col, value=f'=SUM({col_letter}{FIRST_DATA}:{col_letter}{LAST_DATA})')
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK
        c.number_format = '0.00' if col == 35 else '0.0'

    ws.cell(row=SR, column=36).fill = GOLD_FILL
    ws.cell(row=SR, column=36).border = BORDER_DARK
    ws.row_dimensions[SR].height = 24

    # === 配置基準（参考） ===
    R = SR + 3
    ws.cell(row=R, column=1, value='【人員配置基準】（地域密着型通所介護・利用定員18名）').font = INK_BOLD_12
    ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=36)
    R += 1
    standards = [
        ('管理者', '常勤専従1名（他の職務との兼務可）'),
        ('生活相談員', 'サービス提供時間帯を通じて専従1名以上'),
        ('看護職員', 'サービス提供時間帯を通じて専従1名以上'),
        ('機能訓練指導員', '1名以上（PT・OT・ST・看護職員・柔道整復師等）'),
        ('介護職員', '利用者15人まで1名以上、15人超は5名増ごとに+1名（定員18名→2名以上）'),
    ]
    for label, val in standards:
        c = ws.cell(row=R, column=1, value=label)
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_ALL
        ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=4)
        c2 = ws.cell(row=R, column=5, value=val)
        c2.font = INK_NORMAL_10
        c2.alignment = LEFT
        c2.border = BORDER_ALL
        ws.merge_cells(start_row=R, start_column=5, end_row=R, end_column=36)
        ws.row_dimensions[R].height = 22
        R += 1

    # === 入力の注意 ===
    R += 1
    ws.cell(row=R, column=1, value='【入力の注意】').font = INK_BOLD_10
    ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=36)
    R += 1
    notes = [
        '・各日のセル（28日分）に勤務時間を「時間」単位（小数可、例：8、7.5、4）で入力してください。',
        '・月合計、月平均（h/週）、常勤換算（月/160h）は自動計算されます。',
        '・常勤換算の分母は週40h × 4週 = 160h を基準にしています。事業所の常勤所定労働時間が異なる場合は数式（=月合計/160）を変更してください。',
        '・雇用形態は「常勤専従」「常勤兼務」「非常勤専従」「非常勤兼務」のいずれかを記入。',
        '・行が足りない場合は最終行（職員）を選択してコピー＆挿入してください（数式も追従します）。',
        '・基準年月を変更する場合は、F4のセルを上書きしてください。',
    ]
    for note in notes:
        c = ws.cell(row=R, column=1, value=note)
        c.font = SMALL_GREY
        c.alignment = LEFT
        ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=36)
        R += 1

    # === 印刷設定 ===
    ws.print_options.horizontalCentered = True
    ws.page_setup.orientation = ws.ORIENTATION_LANDSCAPE
    ws.page_setup.paperSize = ws.PAPERSIZE_A3  # A3横が見やすい（A4印刷時は縮小される）
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    ws.page_margins.left = 0.4
    ws.page_margins.right = 0.4
    ws.page_margins.top = 0.5
    ws.page_margins.bottom = 0.5

    # フリーズペイン（D列まで＋ヘッダー2段固定）
    ws.freeze_panes = f'E{FIRST_DATA}'

    wb.save(OUTPUT)
    print(f'保存: {OUTPUT}  ({os.path.getsize(OUTPUT)//1024} KB)')


if __name__ == '__main__':
    main()
