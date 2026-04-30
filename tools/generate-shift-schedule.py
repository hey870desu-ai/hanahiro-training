#!/usr/bin/env python3
"""勤務形態一覧表（4週分・Excel）を生成するスクリプト。

シート構成：
- 集計（Summary）：職員一覧を入力するメインシート、4週分の合計と常勤換算が自動表示
- 第1週／第2週／第3週／第4週：各週の月〜日の勤務時間を入力するシート

職員情報（職種・氏名）は「集計」シートに1度だけ入力すれば、
全週シートに自動で反映される設計。
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

HEADER_FILL = PatternFill(start_color=INK, end_color=INK, fill_type='solid')
GOLD_FILL = PatternFill(start_color=GOLD_PALE, end_color=GOLD_PALE, fill_type='solid')
LIGHT_FILL = PatternFill(start_color='FBF9F4', end_color='FBF9F4', fill_type='solid')

THIN_GREY = Side(border_style='thin', color=LINE_LIGHT)
THIN_DARK = Side(border_style='thin', color='888888')
BORDER_ALL = Border(left=THIN_GREY, right=THIN_GREY, top=THIN_GREY, bottom=THIN_GREY)
BORDER_DARK = Border(left=THIN_DARK, right=THIN_DARK, top=THIN_DARK, bottom=THIN_DARK)

WHITE_BOLD_11 = Font(name='Yu Gothic', size=11, bold=True, color='FFFFFF')
INK_NORMAL_10 = Font(name='Yu Gothic', size=10, color=INK)
INK_BOLD_10 = Font(name='Yu Gothic', size=10, bold=True, color=INK)
INK_BOLD_12 = Font(name='Yu Gothic', size=12, bold=True, color=INK)
SMALL_GREY = Font(name='Yu Gothic', size=9, color='8B8E95')

CENTER = Alignment(horizontal='center', vertical='center', wrap_text=True)
LEFT = Alignment(horizontal='left', vertical='center', wrap_text=True)

NUM_ROWS = 15
HEADER_ROW = 7
FIRST_DATA = HEADER_ROW + 1
LAST_DATA = HEADER_ROW + NUM_ROWS

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


def write_business_info(ws):
    """事業所基本情報（行3-5）"""
    info = [
        (3, '事業所名', 'poem de riha 安積店', 'サービス種別', '地域密着型通所介護（3時間以上4時間未満）／ 介護予防・日常生活支援総合事業'),
        (4, '所在地', '福島県郡山市安積町笹川字四角担3-1', '基準年月', '令和8年（2026年）6月'),
        (5, 'サービス提供時間', '午前 9:00〜12:05 ／ 午後 13:25〜16:30', '営業日', '月〜金（祝日も営業）／ 休：土日・年末年始'),
    ]
    for row, label_a, val_a, label_g, val_g in info:
        ws[f'A{row}'] = label_a
        ws[f'A{row}'].font = INK_BOLD_10
        ws[f'A{row}'].fill = GOLD_FILL
        ws[f'A{row}'].alignment = CENTER
        ws[f'A{row}'].border = BORDER_ALL

        ws[f'B{row}'] = val_a
        ws[f'B{row}'].font = INK_NORMAL_10
        ws[f'B{row}'].alignment = LEFT
        ws[f'B{row}'].border = BORDER_ALL
        ws.merge_cells(f'B{row}:F{row}')

        ws[f'G{row}'] = label_g
        ws[f'G{row}'].font = INK_BOLD_10
        ws[f'G{row}'].fill = GOLD_FILL
        ws[f'G{row}'].alignment = CENTER
        ws[f'G{row}'].border = BORDER_ALL

        ws[f'H{row}'] = val_g
        ws[f'H{row}'].font = INK_NORMAL_10
        ws[f'H{row}'].alignment = LEFT
        ws[f'H{row}'].border = BORDER_ALL
        ws.merge_cells(f'H{row}:N{row}')


def make_header(ws, columns):
    """ヘッダー行をまとめて作成"""
    for col, label, width in columns:
        ws.column_dimensions[col].width = width
        c = ws[f'{col}{HEADER_ROW}']
        c.value = label
        c.font = WHITE_BOLD_11
        c.fill = HEADER_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK
    ws.row_dimensions[HEADER_ROW].height = 30


def fmt_data_cell(cell, fill=None, fmt=None, bold=False, align=CENTER):
    cell.font = INK_BOLD_10 if bold else INK_NORMAL_10
    cell.alignment = align
    cell.border = BORDER_ALL
    if fill: cell.fill = fill
    if fmt: cell.number_format = fmt


def add_title(ws, text):
    ws['A1'] = text
    ws['A1'].font = Font(name='Yu Mincho', size=18, bold=True, color=INK)
    ws['A1'].alignment = CENTER
    ws.merge_cells('A1:N1')
    ws.row_dimensions[1].height = 32


# ============================================================
# 集計シート（メイン）
# ============================================================
def build_summary_sheet(ws):
    add_title(ws, '勤務形態一覧表（4週分・集計）')
    write_business_info(ws)

    # ヘッダー
    cols = [
        ('A', 'No.', 6),
        ('B', '職種', 18),
        ('C', '雇用形態', 14),
        ('D', '氏名', 16),
        ('E', '第1週\n合計(h)', 11),
        ('F', '第2週\n合計(h)', 11),
        ('G', '第3週\n合計(h)', 11),
        ('H', '第4週\n合計(h)', 11),
        ('I', '4週合計\n(h)', 11),
        ('J', '月平均\n(h/週)', 11),
        ('K', '常勤換算\n(月/160h)', 12),
        ('L', '備考', 18),
    ]
    make_header(ws, cols)
    # 残りの空列
    for col in ['M', 'N']:
        ws.column_dimensions[col].width = 4
        c = ws[f'{col}{HEADER_ROW}']
        c.fill = HEADER_FILL
        c.border = BORDER_DARK

    for i in range(NUM_ROWS):
        r = FIRST_DATA + i
        ws.cell(row=r, column=1, value=i + 1)
        fmt_data_cell(ws.cell(row=r, column=1))

        # 職種・雇用形態・氏名・備考は手入力
        if i < len(SAMPLE_JOBS):
            job, kind, note = SAMPLE_JOBS[i]
            ws.cell(row=r, column=2, value=job)
            ws.cell(row=r, column=3, value=kind)
            ws.cell(row=r, column=12, value=note)
        for col in [2, 3, 4, 12]:
            fmt_data_cell(ws.cell(row=r, column=col), align=LEFT if col != 1 else CENTER)

        # 第1週〜第4週の合計（各週シートのL列を参照）
        for w_idx, week_col in enumerate([5, 6, 7, 8], start=1):
            cell = ws.cell(row=r, column=week_col, value=f"='第{w_idx}週'!L{r}")
            fmt_data_cell(cell, fill=LIGHT_FILL, fmt='0.0')

        # 4週合計
        c = ws.cell(row=r, column=9, value=f'=SUM(E{r}:H{r})')
        fmt_data_cell(c, fill=GOLD_FILL, fmt='0.0', bold=True)

        # 月平均（=4週合計/4）
        c = ws.cell(row=r, column=10, value=f'=I{r}/4')
        fmt_data_cell(c, fill=GOLD_FILL, fmt='0.0', bold=True)

        # 常勤換算（=4週合計/160 月160時間ベース）
        c = ws.cell(row=r, column=11, value=f'=I{r}/160')
        fmt_data_cell(c, fill=GOLD_FILL, fmt='0.00', bold=True)

        ws.row_dimensions[r].height = 22

    # 合計行
    SR = LAST_DATA + 1
    ws.cell(row=SR, column=1, value='合計').font = INK_BOLD_10
    ws.cell(row=SR, column=1).fill = GOLD_FILL
    ws.cell(row=SR, column=1).alignment = CENTER
    ws.cell(row=SR, column=1).border = BORDER_DARK
    ws.merge_cells(start_row=SR, start_column=1, end_row=SR, end_column=4)
    for col in range(1, 5):
        ws.cell(row=SR, column=col).fill = GOLD_FILL
        ws.cell(row=SR, column=col).border = BORDER_DARK

    for col in range(5, 12):
        col_letter = get_column_letter(col)
        c = ws.cell(row=SR, column=col, value=f'=SUM({col_letter}{FIRST_DATA}:{col_letter}{LAST_DATA})')
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK
        c.number_format = '0.0' if col != 11 else '0.00'
    ws.cell(row=SR, column=12).fill = GOLD_FILL
    ws.cell(row=SR, column=12).border = BORDER_DARK

    # 配置基準
    R = SR + 3
    ws.cell(row=R, column=1, value='【人員配置基準】（地域密着型通所介護・利用定員18名）').font = INK_BOLD_12
    ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=12)
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
        c.font = INK_BOLD_10; c.fill = GOLD_FILL; c.alignment = CENTER; c.border = BORDER_ALL
        ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=3)
        c2 = ws.cell(row=R, column=4, value=val)
        c2.font = INK_NORMAL_10; c2.alignment = LEFT; c2.border = BORDER_ALL
        ws.merge_cells(start_row=R, start_column=4, end_row=R, end_column=12)
        ws.row_dimensions[R].height = 22
        R += 1

    R += 1
    ws.cell(row=R, column=1, value='【入力の流れ】').font = INK_BOLD_10
    ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=12)
    R += 1
    notes = [
        '1. このシートの「職種」「雇用形態」「氏名」「備考」を入力します（各週シートには自動反映されます）。',
        '2. シート下部の「第1週」〜「第4週」タブを開き、各曜日の勤務時間を入力します。',
        '3. このシートの「4週合計」「月平均」「常勤換算（月/160h）」が自動計算されます。',
        '※ 月の所定労働時間が160h（週40h×4週）と異なる場合は、K列の数式 =I/160 を変更してください。',
    ]
    for note in notes:
        c = ws.cell(row=R, column=1, value=note)
        c.font = SMALL_GREY; c.alignment = LEFT
        ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=12)
        R += 1

    ws.print_options.horizontalCentered = True
    ws.page_setup.orientation = ws.ORIENTATION_LANDSCAPE
    ws.page_setup.paperSize = ws.PAPERSIZE_A4
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    ws.freeze_panes = f'E{FIRST_DATA}'


# ============================================================
# 各週シート
# ============================================================
def build_week_sheet(ws, week_num):
    add_title(ws, f'勤務形態一覧表　第{week_num}週')
    write_business_info(ws)

    cols = [
        ('A', 'No.', 6),
        ('B', '職種', 18),
        ('C', '雇用形態', 14),
        ('D', '氏名', 16),
        ('E', '月', 7),
        ('F', '火', 7),
        ('G', '水', 7),
        ('H', '木', 7),
        ('I', '金', 7),
        ('J', '土', 7),
        ('K', '日', 7),
        ('L', '週合計\n(h)', 10),
        ('M', '常勤換算\n(/40h)', 10),
        ('N', '備考', 18),
    ]
    make_header(ws, cols)

    for i in range(NUM_ROWS):
        r = FIRST_DATA + i
        # No.
        ws.cell(row=r, column=1, value=i + 1)
        fmt_data_cell(ws.cell(row=r, column=1))

        # 集計シートから自動参照（職種・雇用形態・氏名・備考）
        for src_col, dst_col in [(2, 2), (3, 3), (4, 4), (12, 14)]:
            src_letter = get_column_letter(src_col)
            cell = ws.cell(row=r, column=dst_col, value=f"=IF(集計!{src_letter}{r}=\"\",\"\",集計!{src_letter}{r})")
            fmt_data_cell(cell, align=LEFT if dst_col != 1 else CENTER)

        # 各曜日の入力欄
        for col in range(5, 12):
            cell = ws.cell(row=r, column=col)
            fmt_data_cell(cell, fill=LIGHT_FILL)

        # 週合計
        c = ws.cell(row=r, column=12, value=f'=SUM(E{r}:K{r})')
        fmt_data_cell(c, fill=GOLD_FILL, fmt='0.0', bold=True)

        # 常勤換算 (週/40)
        c = ws.cell(row=r, column=13, value=f'=L{r}/40')
        fmt_data_cell(c, fill=GOLD_FILL, fmt='0.00', bold=True)

        ws.row_dimensions[r].height = 22

    # 合計行
    SR = LAST_DATA + 1
    ws.cell(row=SR, column=1, value='合計').font = INK_BOLD_10
    ws.cell(row=SR, column=1).fill = GOLD_FILL
    ws.cell(row=SR, column=1).alignment = CENTER
    ws.cell(row=SR, column=1).border = BORDER_DARK
    ws.merge_cells(start_row=SR, start_column=1, end_row=SR, end_column=4)
    for col in range(1, 5):
        ws.cell(row=SR, column=col).fill = GOLD_FILL
        ws.cell(row=SR, column=col).border = BORDER_DARK
    for col in range(5, 14):
        col_letter = get_column_letter(col)
        c = ws.cell(row=SR, column=col, value=f'=SUM({col_letter}{FIRST_DATA}:{col_letter}{LAST_DATA})')
        c.font = INK_BOLD_10; c.fill = GOLD_FILL; c.alignment = CENTER; c.border = BORDER_DARK
        c.number_format = '0.00' if col == 13 else '0.0'
    ws.cell(row=SR, column=14).fill = GOLD_FILL
    ws.cell(row=SR, column=14).border = BORDER_DARK

    # 注意事項
    R = SR + 2
    ws.cell(row=R, column=1, value='※ 各曜日の勤務時間を「時間」単位（例：8、7.5、4）で入力してください。').font = SMALL_GREY
    ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=14)
    R += 1
    ws.cell(row=R, column=1, value='※ 職種・雇用形態・氏名は「集計」シートから自動表示されます（直接編集も可能）。').font = SMALL_GREY
    ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=14)

    ws.print_options.horizontalCentered = True
    ws.page_setup.orientation = ws.ORIENTATION_LANDSCAPE
    ws.page_setup.paperSize = ws.PAPERSIZE_A4
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    ws.freeze_panes = f'E{FIRST_DATA}'


def main():
    wb = Workbook()
    # デフォルトシートを集計に
    summary = wb.active
    summary.title = '集計'
    build_summary_sheet(summary)

    # 第1週〜第4週
    for w in range(1, 5):
        ws = wb.create_sheet(f'第{w}週')
        build_week_sheet(ws, w)

    wb.save(OUTPUT)
    print(f'保存: {OUTPUT}  ({os.path.getsize(OUTPUT)//1024} KB)')


if __name__ == '__main__':
    main()
