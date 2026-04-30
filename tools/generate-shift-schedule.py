#!/usr/bin/env python3
"""勤務形態一覧表（Excel）を生成するスクリプト。

行政指定の様式は入力しにくいため、シンプルで入力しやすい形式に。
- セル保護なし、自由に編集可能
- 数式は最小限（週合計、常勤換算）
- 各曜日の勤務時間を入力するだけで自動計算
- poem de riha 安積店の基本情報をプリセット
"""
import os
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side, NamedStyle
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
INK_BOLD_12 = Font(name='Yu Gothic', size=12, bold=True, color=INK)
INK_NORMAL_10 = Font(name='Yu Gothic', size=10, color=INK)
INK_BOLD_10 = Font(name='Yu Gothic', size=10, bold=True, color=INK)
GOLD_BOLD_11 = Font(name='Yu Gothic', size=11, bold=True, color=GOLD)
SMALL_GREY = Font(name='Yu Gothic', size=9, color='8B8E95')

CENTER = Alignment(horizontal='center', vertical='center', wrap_text=True)
LEFT = Alignment(horizontal='left', vertical='center', wrap_text=True)


def main():
    wb = Workbook()
    ws = wb.active
    ws.title = '勤務形態一覧表'

    # === タイトル ===
    ws['A1'] = '勤務形態一覧表'
    ws['A1'].font = Font(name='Yu Mincho', size=18, bold=True, color=INK)
    ws['A1'].alignment = CENTER
    ws.merge_cells('A1:N1')
    ws.row_dimensions[1].height = 32

    # === 事業所情報 ===
    ws['A3'] = '事業所名'
    ws['B3'] = 'poem de riha 安積店'
    ws['G3'] = 'サービス種別'
    ws['H3'] = '地域密着型通所介護（3時間以上4時間未満）／ 介護予防・日常生活支援総合事業'

    ws['A4'] = '所在地'
    ws['B4'] = '福島県郡山市安積町笹川字四角担3-1'
    ws['G4'] = '基準年月'
    ws['H4'] = '令和8年（2026年）6月'

    ws['A5'] = 'サービス提供時間'
    ws['B5'] = '午前 9:00〜12:05 ／ 午後 13:25〜16:30'
    ws['G5'] = '営業日'
    ws['H5'] = '月〜金（祝日も営業）／ 休：土日・年末年始'

    for r in range(3, 6):
        ws[f'A{r}'].font = INK_BOLD_10
        ws[f'A{r}'].fill = GOLD_FILL
        ws[f'A{r}'].alignment = CENTER
        ws[f'G{r}'].font = INK_BOLD_10
        ws[f'G{r}'].fill = GOLD_FILL
        ws[f'G{r}'].alignment = CENTER
        ws[f'B{r}'].font = INK_NORMAL_10
        ws[f'B{r}'].alignment = LEFT
        ws[f'H{r}'].font = INK_NORMAL_10
        ws[f'H{r}'].alignment = LEFT
        ws.merge_cells(f'B{r}:F{r}')
        ws.merge_cells(f'H{r}:N{r}')
        for col in ['A','B','G','H']:
            ws[f'{col}{r}'].border = BORDER_ALL

    # === 一覧表ヘッダー ===
    HEADER_ROW = 7
    headers = [
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
        ('L', '週合計\n(時間)', 10),
        ('M', '常勤換算\n(/40h)', 10),
        ('N', '備考', 18),
    ]
    for col, label, width in headers:
        ws.column_dimensions[col].width = width
        c = ws[f'{col}{HEADER_ROW}']
        c.value = label
        c.font = WHITE_BOLD_11
        c.fill = HEADER_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK
    ws.row_dimensions[HEADER_ROW].height = 30

    # === 入力行（15行用意） ===
    NUM_ROWS = 15
    sample_jobs = [
        ('管理者', '常勤専従', ''),
        ('生活相談員', '常勤専従', ''),
        ('看護職員', '常勤専従', ''),
        ('機能訓練指導員', '常勤専従', '柔道整復師'),
        ('介護職員', '常勤専従', ''),
        ('介護職員', '常勤専従', ''),
        ('介護職員', '非常勤専従', ''),
        ('介護職員', '非常勤専従', ''),
    ]
    for i in range(NUM_ROWS):
        r = HEADER_ROW + 1 + i
        # No.
        ws.cell(row=r, column=1, value=i + 1).font = INK_NORMAL_10
        # サンプル職種等
        if i < len(sample_jobs):
            job, kind, note = sample_jobs[i]
            ws.cell(row=r, column=2, value=job)
            ws.cell(row=r, column=3, value=kind)
            ws.cell(row=r, column=14, value=note)

        # 各曜日の入力欄（薄い色付け）
        for col in range(5, 12):
            cell = ws.cell(row=r, column=col)
            cell.fill = LIGHT_FILL
            cell.alignment = CENTER
            cell.font = INK_NORMAL_10
            cell.border = BORDER_ALL

        # 週合計（=SUM(E:K)）
        sum_cell = ws.cell(row=r, column=12, value=f'=SUM(E{r}:K{r})')
        sum_cell.font = INK_BOLD_10
        sum_cell.fill = GOLD_FILL
        sum_cell.alignment = CENTER
        sum_cell.border = BORDER_ALL
        sum_cell.number_format = '0.0'

        # 常勤換算（=L/40）
        conv_cell = ws.cell(row=r, column=13, value=f'=L{r}/40')
        conv_cell.font = INK_BOLD_10
        conv_cell.fill = GOLD_FILL
        conv_cell.alignment = CENTER
        conv_cell.border = BORDER_ALL
        conv_cell.number_format = '0.00'

        # その他のセル整形
        for col in range(1, 5):
            c = ws.cell(row=r, column=col)
            c.alignment = CENTER if col == 1 else LEFT
            c.border = BORDER_ALL
            if c.font is None or c.font.size != 10:
                c.font = INK_NORMAL_10
        ws.cell(row=r, column=14).alignment = LEFT
        ws.cell(row=r, column=14).border = BORDER_ALL
        ws.row_dimensions[r].height = 22

    # === 集計行 ===
    SUM_ROW = HEADER_ROW + 1 + NUM_ROWS
    ws.cell(row=SUM_ROW, column=1, value='合計').font = INK_BOLD_10
    ws.cell(row=SUM_ROW, column=1).fill = GOLD_FILL
    ws.cell(row=SUM_ROW, column=1).alignment = CENTER
    ws.cell(row=SUM_ROW, column=1).border = BORDER_DARK
    ws.merge_cells(start_row=SUM_ROW, start_column=1, end_row=SUM_ROW, end_column=4)
    for col in range(1, 5):
        ws.cell(row=SUM_ROW, column=col).fill = GOLD_FILL
        ws.cell(row=SUM_ROW, column=col).border = BORDER_DARK

    # 各曜日合計
    first_data = HEADER_ROW + 1
    last_data = HEADER_ROW + NUM_ROWS
    for col in range(5, 12):
        col_letter = get_column_letter(col)
        c = ws.cell(row=SUM_ROW, column=col, value=f'=SUM({col_letter}{first_data}:{col_letter}{last_data})')
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK
        c.number_format = '0.0'

    # 週合計の総合計
    c = ws.cell(row=SUM_ROW, column=12, value=f'=SUM(L{first_data}:L{last_data})')
    c.font = INK_BOLD_10
    c.fill = GOLD_FILL
    c.alignment = CENTER
    c.border = BORDER_DARK
    c.number_format = '0.0'

    # 常勤換算の総合計
    c = ws.cell(row=SUM_ROW, column=13, value=f'=SUM(M{first_data}:M{last_data})')
    c.font = INK_BOLD_10
    c.fill = GOLD_FILL
    c.alignment = CENTER
    c.border = BORDER_DARK
    c.number_format = '0.00'

    ws.cell(row=SUM_ROW, column=14).fill = GOLD_FILL
    ws.cell(row=SUM_ROW, column=14).border = BORDER_DARK

    # === 配置基準（参考） ===
    R = SUM_ROW + 3
    ws.cell(row=R, column=1, value='【人員配置基準】（地域密着型通所介護・利用定員18名）').font = INK_BOLD_12
    ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=14)
    R += 1

    standards = [
        ('管理者', '常勤専従1名（他の職務との兼務可）'),
        ('生活相談員', 'サービス提供時間帯を通じて専従1名以上'),
        ('看護職員', 'サービス提供時間帯を通じて専従1名以上'),
        ('機能訓練指導員', '1名以上（PT・OT・ST・看護職員・柔道整復師等）'),
        ('介護職員', '利用者15人まで1名以上、15人を超えて5又はその端数増ごとに+1名（定員18名→2名以上）'),
    ]
    for label, val in standards:
        c = ws.cell(row=R, column=1, value=label)
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_ALL
        ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=3)

        c2 = ws.cell(row=R, column=4, value=val)
        c2.font = INK_NORMAL_10
        c2.alignment = LEFT
        c2.border = BORDER_ALL
        ws.merge_cells(start_row=R, start_column=4, end_row=R, end_column=14)

        ws.row_dimensions[R].height = 22
        R += 1

    # 注意事項
    R += 1
    ws.cell(row=R, column=1, value='【入力の注意】').font = INK_BOLD_10
    ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=14)
    R += 1
    notes = [
        '・各曜日の勤務時間を「時間」単位（小数可、例：8、7.5、4）で入力してください。週合計と常勤換算は自動計算されます。',
        '・常勤換算の分母は「週40時間」です。事業所の常勤所定労働時間が異なる場合は M列の数式（=L/40）を変更してください。',
        '・雇用形態は「常勤専従」「常勤兼務」「非常勤専従」「非常勤兼務」のいずれかを記入。',
        '・1名で複数職種を兼ねる場合は、職種ごとに行を分け、勤務時間を分割して記入してください。',
        '・行が足りない場合は最終行を選択してコピー＆挿入してください（数式も追従します）。',
    ]
    for note in notes:
        c = ws.cell(row=R, column=1, value=note)
        c.font = SMALL_GREY
        c.alignment = LEFT
        ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=14)
        R += 1

    # 印刷設定
    ws.print_options.horizontalCentered = True
    ws.page_setup.orientation = ws.ORIENTATION_LANDSCAPE
    ws.page_setup.paperSize = ws.PAPERSIZE_A4
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    ws.page_margins.left = 0.5
    ws.page_margins.right = 0.5
    ws.page_margins.top = 0.6
    ws.page_margins.bottom = 0.6

    # フリーズペイン（ヘッダー固定）
    ws.freeze_panes = f'E{HEADER_ROW + 1}'

    wb.save(OUTPUT)
    print(f'保存: {OUTPUT}  ({os.path.getsize(OUTPUT)//1024} KB)')


if __name__ == '__main__':
    main()
