#!/usr/bin/env python3
"""勤務形態一覧表 + シフトパターン登録（Excel）を生成するスクリプト。

【シート構成】
1. シフトパターン  ─ 早番／日勤／遅番 等のシフトを登録するマスタ
2. 勤務形態一覧表  ─ 28日分のセルにシフトコードを選択するだけで時間自動計算

【ポイント】
- 各日のセルはドロップダウン（データ検証）で「シフトパターン」シートのコードから選択
- 月合計は SUMPRODUCT + VLOOKUP で自動計算
- セル保護なし、自由に編集・行追加可能
"""
import os
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.workbook.defined_name import DefinedName

OUTPUT = '/Users/hanawahiroyuki/hanahiro-training/docs/poem-asaka-shift-schedule.xlsx'
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)

# === 色 ===
INK = '1F2933'
GOLD = 'A87827'
GOLD_PALE = 'F4EAD6'
LINE_LIGHT = 'E3DCCC'
WEEKEND_FILL = 'FFF4EC'
WEEK_BG = ['FBF9F4', 'FFFFFF', 'FBF9F4', 'FFFFFF']

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

DAY_LABELS = ['月', '火', '水', '木', '金', '土', '日']

# === シフトパターンの初期登録（ユーザーが自由に編集可能） ===
SHIFT_PATTERNS = [
    # コード, シフト名, 開始, 終了, 休憩, 実働(h), 備考
    ('早',   '早番',         '7:30',  '16:30', '1:00', 8.0,  ''),
    ('日',   '日勤',         '9:00',  '18:00', '1:00', 8.0,  ''),
    ('遅',   '遅番',         '11:00', '20:00', '1:00', 8.0,  ''),
    ('A',   '午前の部担当',  '8:30',  '13:00', '',     4.5,  'poem de riha 想定'),
    ('B',   '午後の部担当',  '13:00', '17:00', '',     4.0,  'poem de riha 想定'),
    ('通',  '通し勤務',     '8:30',  '17:30', '1:00', 8.0,  ''),
    ('半早','半日早番',     '8:30',  '13:00', '',     4.5,  ''),
    ('半遅','半日遅番',     '13:00', '17:30', '',     4.5,  ''),
    ('夜',  '夜勤',          '17:00', '翌9:00','2:00', 14.0, ''),
    ('短',  '短時間',        '9:00',  '13:00', '',     4.0,  ''),
    ('有',  '有給休暇',     '',       '',      '',     8.0,  '所定労働時間で計上'),
    ('特',  '特別休暇',     '',       '',      '',     0.0,  ''),
    ('公',  '公休（休日）', '',       '',      '',     0.0,  ''),
    ('休',  '休み',         '',       '',      '',     0.0,  ''),
]

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


# ============================================================
# シフトパターン シート
# ============================================================
def build_shift_patterns(wb):
    ws = wb.create_sheet('シフトパターン', 0)

    # タイトル
    ws['A1'] = 'シフトパターン マスタ'
    ws['A1'].font = Font(name='Yu Mincho', size=18, bold=True, color=INK)
    ws['A1'].alignment = CENTER
    ws.merge_cells('A1:G1')
    ws.row_dimensions[1].height = 32

    ws['A2'] = '※ シフト追加・編集する場合はここに行を追加してください。「勤務形態一覧表」のドロップダウンに自動反映されます。'
    ws['A2'].font = SMALL_GREY
    ws['A2'].alignment = LEFT
    ws.merge_cells('A2:G2')

    # ヘッダー
    HEADER_ROW = 4
    headers = [
        ('A', 'コード', 8),
        ('B', 'シフト名', 18),
        ('C', '開始時刻', 11),
        ('D', '終了時刻', 11),
        ('E', '休憩', 9),
        ('F', '実働時間\n(h)', 11),
        ('G', '備考', 26),
    ]
    for col, label, width in headers:
        ws.column_dimensions[col].width = width
        c = ws[f'{col}{HEADER_ROW}']
        c.value = label
        c.font = WHITE_BOLD_10
        c.fill = HEADER_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK
    ws.row_dimensions[HEADER_ROW].height = 28

    # データ
    for i, (code, name, start, end, brk, hours, note) in enumerate(SHIFT_PATTERNS):
        r = HEADER_ROW + 1 + i
        ws.cell(row=r, column=1, value=code).font = INK_BOLD_10
        ws.cell(row=r, column=2, value=name).font = INK_NORMAL_10
        ws.cell(row=r, column=3, value=start).font = INK_NORMAL_10
        ws.cell(row=r, column=4, value=end).font = INK_NORMAL_10
        ws.cell(row=r, column=5, value=brk).font = INK_NORMAL_10
        c_h = ws.cell(row=r, column=6, value=hours)
        c_h.font = INK_BOLD_10
        c_h.fill = GOLD_FILL
        c_h.number_format = '0.0'
        ws.cell(row=r, column=7, value=note).font = SMALL_GREY

        for col in range(1, 8):
            cc = ws.cell(row=r, column=col)
            cc.alignment = CENTER if col != 7 else LEFT
            cc.border = BORDER_ALL
        ws.row_dimensions[r].height = 22

    # 余分な行（カスタム追加用）に空行を5つ
    for i in range(len(SHIFT_PATTERNS), len(SHIFT_PATTERNS) + 5):
        r = HEADER_ROW + 1 + i
        for col in range(1, 8):
            cc = ws.cell(row=r, column=col)
            cc.alignment = CENTER if col != 7 else LEFT
            cc.border = BORDER_ALL
            cc.font = INK_NORMAL_10
        ws.row_dimensions[r].height = 22

    # 名前付き範囲は Numbers が苦手なので、直接範囲を返す関数で代用する設計
    last_row = HEADER_ROW + len(SHIFT_PATTERNS) + 5

    # 印刷設定
    ws.print_options.horizontalCentered = True
    ws.page_setup.orientation = ws.ORIENTATION_PORTRAIT
    ws.page_setup.paperSize = ws.PAPERSIZE_A4
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True

    return last_row


# ============================================================
# 勤務形態一覧表 シート
# ============================================================
def build_main_sheet(wb, shift_last_row):
    ws = wb.create_sheet('勤務形態一覧表')

    # タイトル
    ws['A1'] = '勤務形態一覧表（月単位 / 28日分）'
    ws['A1'].font = Font(name='Yu Mincho', size=18, bold=True, color=INK)
    ws['A1'].alignment = CENTER
    ws.row_dimensions[1].height = 32
    ws.merge_cells('A1:AJ1')

    # 事業所情報
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

    # 列幅
    ws.column_dimensions['A'].width = 4
    ws.column_dimensions['B'].width = 14
    ws.column_dimensions['C'].width = 11
    ws.column_dimensions['D'].width = 13
    for col in range(5, 33):
        ws.column_dimensions[get_column_letter(col)].width = 5
    ws.column_dimensions[get_column_letter(33)].width = 9
    ws.column_dimensions[get_column_letter(34)].width = 9
    ws.column_dimensions[get_column_letter(35)].width = 10
    ws.column_dimensions[get_column_letter(36)].width = 14

    # ヘッダー（2段）
    HEADER_ROW1 = 7
    HEADER_ROW2 = 8
    FIRST_DATA = 9
    LAST_DATA = FIRST_DATA + NUM_ROWS - 1

    ws.row_dimensions[HEADER_ROW1].height = 22
    ws.row_dimensions[HEADER_ROW2].height = 22

    # 固定情報ヘッダー（縦結合）
    for col, label in [('A', 'No.'), ('B', '職種'), ('C', '雇用形態'), ('D', '氏名')]:
        ws.merge_cells(f'{col}{HEADER_ROW1}:{col}{HEADER_ROW2}')
        c = ws[f'{col}{HEADER_ROW1}']
        c.value = label
        c.font = WHITE_BOLD_10
        c.fill = HEADER_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK

    # 第1〜4週
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

    # 曜日（4週分）
    for w in range(4):
        for d, day in enumerate(DAY_LABELS):
            col = 5 + w * 7 + d
            c = ws.cell(row=HEADER_ROW2, column=col)
            c.value = day
            c.font = WHITE_BOLD_9
            c.fill = HEADER_FILL
            c.alignment = CENTER
            c.border = BORDER_DARK

    # サマリー列ヘッダー
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

    # ドロップダウン用データ検証（インラインリストで最大互換性確保）
    # Google Sheets / Numbers / Excel すべてで動作するよう、選択肢を直接埋め込む
    inline_codes = ','.join(p[0] for p in SHIFT_PATTERNS)
    dv = DataValidation(type='list', formula1=f'"{inline_codes}"', allow_blank=True)
    dv.error = 'シフトパターンに登録されたコードを選択してください'
    dv.errorTitle = '無効なシフトコード'
    dv.prompt = 'シフトコードを選択'
    dv.showInputMessage = True
    dv.promptTitle = 'シフト入力'
    ws.add_data_validation(dv)

    # 入力行
    weekend_fill = PatternFill(start_color=WEEKEND_FILL, end_color=WEEKEND_FILL, fill_type='solid')
    for i in range(NUM_ROWS):
        r = FIRST_DATA + i
        ws.cell(row=r, column=1, value=i + 1)
        c = ws.cell(row=r, column=1)
        c.font = INK_NORMAL_10
        c.alignment = CENTER
        c.border = BORDER_ALL

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

        # 28日のセル（ドロップダウン適用）
        for w in range(4):
            week_fill = PatternFill(start_color=WEEK_BG[w], end_color=WEEK_BG[w], fill_type='solid')
            for d in range(7):
                col = 5 + w * 7 + d
                c = ws.cell(row=r, column=col)
                c.font = INK_NORMAL_9
                c.alignment = CENTER
                c.fill = weekend_fill if d >= 5 else week_fill
                if d == 6 and w < 3:
                    c.border = Border(left=THIN_GREY, right=WEEK_DIVIDER, top=THIN_GREY, bottom=THIN_GREY)
                elif d == 0 and w > 0:
                    c.border = Border(left=WEEK_DIVIDER, right=THIN_GREY, top=THIN_GREY, bottom=THIN_GREY)
                else:
                    c.border = BORDER_ALL

        # ドロップダウンを行全体（28日分）に適用
        first_day_col = get_column_letter(5)
        last_day_col = get_column_letter(32)
        dv.add(f'{first_day_col}{r}:{last_day_col}{r}')

        # 月合計：Numbers互換のため SUMPRODUCT(COUNTIF * 実働時間) 方式
        # 各シフトコードの出現回数 × そのシフトの実働時間 を合計
        formula = (f'=SUMPRODUCT(COUNTIF({first_day_col}{r}:{last_day_col}{r},'
                   f'シフトパターン!$A$5:$A${shift_last_row}),'
                   f'シフトパターン!$F$5:$F${shift_last_row})')
        c = ws.cell(row=r, column=33, value=formula)
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_ALL
        c.number_format = '0.0'

        # 月平均（=月合計/4）
        c = ws.cell(row=r, column=34, value=f'={get_column_letter(33)}{r}/4')
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_ALL
        c.number_format = '0.0'

        # 常勤換算（=月合計/160）
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

    # 各列のサマリー（数値セルのみ集計：33-35列）
    for col in [33, 34, 35]:
        col_letter = get_column_letter(col)
        c = ws.cell(row=SR, column=col, value=f'=SUM({col_letter}{FIRST_DATA}:{col_letter}{LAST_DATA})')
        c.font = INK_BOLD_10
        c.fill = GOLD_FILL
        c.alignment = CENTER
        c.border = BORDER_DARK
        c.number_format = '0.00' if col == 35 else '0.0'

    # 28日のセルは集計不要（コードのため）
    for col in range(5, 33):
        c = ws.cell(row=SR, column=col)
        c.fill = GOLD_FILL
        c.border = BORDER_DARK

    ws.cell(row=SR, column=36).fill = GOLD_FILL
    ws.cell(row=SR, column=36).border = BORDER_DARK
    ws.row_dimensions[SR].height = 24

    # 配置基準
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

    # 入力の流れ
    R += 1
    ws.cell(row=R, column=1, value='【使い方】').font = INK_BOLD_10
    ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=36)
    R += 1
    notes = [
        '1. 「シフトパターン」シートで使うシフトを登録（早／日／遅／A／B／休 等）。実働時間も入力。',
        '2. このシート（勤務形態一覧表）の各日のセルをクリック → ドロップダウンからシフトコードを選択。',
        '3. 月合計・月平均・常勤換算は、シフトパターンの実働時間から自動で計算されます。',
        '4. シフトを追加したい場合は「シフトパターン」シートに行を追加するだけで、ドロップダウンに反映されます。',
        '※ 常勤換算は週40h × 4週 = 月160h を分母としています（=月合計/160）。',
    ]
    for note in notes:
        c = ws.cell(row=R, column=1, value=note)
        c.font = SMALL_GREY
        c.alignment = LEFT
        ws.merge_cells(start_row=R, start_column=1, end_row=R, end_column=36)
        R += 1

    # 印刷
    ws.print_options.horizontalCentered = True
    ws.page_setup.orientation = ws.ORIENTATION_LANDSCAPE
    ws.page_setup.paperSize = ws.PAPERSIZE_A3
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    ws.page_margins.left = 0.4
    ws.page_margins.right = 0.4
    ws.page_margins.top = 0.5
    ws.page_margins.bottom = 0.5
    ws.freeze_panes = f'E{FIRST_DATA}'


def main():
    wb = Workbook()
    # デフォルトシートを削除（後でシフトパターンを最初に作成）
    default = wb.active
    wb.remove(default)

    last_row = build_shift_patterns(wb)
    build_main_sheet(wb, last_row)

    wb.save(OUTPUT)
    print(f'保存: {OUTPUT}  ({os.path.getsize(OUTPUT)//1024} KB)')


if __name__ == '__main__':
    main()
