#!/usr/bin/env python3
"""poem de riha 安積店 運営規程（地域密着型通所介護・3時間以上4時間未満）の Word 文書を生成。

近年（2024年改正）のコンプライアンス要件をすべて含めた標準的な運営規程テンプレート。
- 業務継続計画（BCP）
- 感染症対策
- 高齢者虐待の防止
- 身体的拘束等の適正化
- ハラスメント対策
- 個人情報保護
- 衛生管理
- 苦情処理
- 事故発生時の対応 等

使い方:
  python3 tools/generate-operations-manual.py
  → /Users/hanawahiroyuki/hanahiro-training/docs/poem-asaka-operations-manual.docx
"""
import os
from docx import Document
from docx.shared import Pt, Mm, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.style import WD_STYLE_TYPE
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

OUTPUT = '/Users/hanawahiroyuki/hanahiro-training/docs/poem-asaka-operations-manual.docx'
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)


def set_japanese_font(run, size=10.5, bold=False):
    run.font.name = 'Yu Mincho'
    rPr = run._element.get_or_add_rPr()
    rFonts = rPr.find(qn('w:rFonts'))
    if rFonts is None:
        rFonts = OxmlElement('w:rFonts')
        rPr.append(rFonts)
    rFonts.set(qn('w:eastAsia'), 'Yu Mincho')
    run.font.size = Pt(size)
    run.bold = bold


def add_heading_centered(doc, text, size=18, bold=True, after=12):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_after = Pt(after)
    r = p.add_run(text)
    set_japanese_font(r, size=size, bold=bold)


def add_article(doc, num, title, paragraphs):
    """第N条 タイトル + 本文段落"""
    h = doc.add_paragraph()
    h.paragraph_format.space_before = Pt(10)
    h.paragraph_format.space_after = Pt(4)
    rh = h.add_run(f'第{num}条　{title}')
    set_japanese_font(rh, size=11.5, bold=True)

    for para in paragraphs:
        p = doc.add_paragraph()
        p.paragraph_format.first_line_indent = Mm(4)
        p.paragraph_format.space_after = Pt(4)
        r = p.add_run(para)
        set_japanese_font(r, size=10.5)


def add_list_items(doc, items, indent_level=1):
    """箇条書き（一、二、三 もしくは (1)(2)(3) 形式）"""
    for i, item in enumerate(items, 1):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Mm(8 * indent_level)
        p.paragraph_format.space_after = Pt(2)
        r = p.add_run(f'　{kansuji(i)}　{item}' if indent_level == 1 else f'　({i})　{item}')
        set_japanese_font(r, size=10.5)


def add_paren_list(doc, items):
    """(1)(2) 形式"""
    for i, item in enumerate(items, 1):
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Mm(10)
        p.paragraph_format.space_after = Pt(2)
        r = p.add_run(f'　({i})　{item}')
        set_japanese_font(r, size=10.5)


def kansuji(n):
    table = ['一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十']
    return table[n-1] if 1 <= n <= len(table) else str(n)


def main():
    doc = Document()

    # ページ設定 A4
    section = doc.sections[0]
    section.page_height = Mm(297)
    section.page_width = Mm(210)
    section.top_margin = Mm(25)
    section.bottom_margin = Mm(25)
    section.left_margin = Mm(25)
    section.right_margin = Mm(25)

    # 標準フォントを Yu Mincho に
    style = doc.styles['Normal']
    style.font.name = 'Yu Mincho'
    rPr = style.element.get_or_add_rPr()
    rFonts = OxmlElement('w:rFonts')
    rFonts.set(qn('w:eastAsia'), 'Yu Mincho')
    rPr.append(rFonts)
    style.font.size = Pt(10.5)

    # =============== 表紙的タイトル ===============
    add_heading_centered(doc, 'poem de riha 安積店', size=14, after=4)
    add_heading_centered(doc, '運営規程', size=20, after=24)

    # =============== 第1条 事業の目的 ===============
    add_article(doc, 1, '事業の目的', [
        '株式会社はなひろ（以下「事業者」という。）が開設する poem de riha 安積店（以下「事業所」という。）が行う指定地域密着型通所介護（以下「通所介護」という。）の事業（以下「本事業」という。）の適正な運営を確保するために、人員及び管理運営に関する事項を定め、要介護状態にある高齢者及び介護予防・日常生活支援総合事業の対象者に対し、適正な通所介護を提供することを目的とする。',
    ])

    # =============== 第2条 運営の方針 ===============
    add_article(doc, 2, '運営の方針', [
        '事業所の従業者は、要介護状態又は要支援状態にあっても、利用者がその有する能力に応じ自立した日常生活を営むことができるよう、必要なリハビリテーション、機能訓練、健康状態の確認その他必要な日常生活上の世話を、利用者の心身の状況に応じて適切に行う。',
        '本事業の実施に当たっては、関係市町村、地域の保健・医療・福祉サービスを提供する者との密接な連携に努める。',
        '事業所は、利用者の意思及び人格を尊重し、利用者の立場に立ったサービスの提供に努めるとともに、利用者の要介護状態の軽減又は悪化の防止に資するよう、目標を設定し、計画的に行う。',
        '提供するサービスの質の評価を定期的に行い、常にその改善を図る。',
    ])

    # =============== 第3条 事業所の名称等 ===============
    add_article(doc, 3, '事業所の名称等', [
        '事業所の名称及び所在地は、次のとおりとする。',
    ])
    add_paren_list(doc, [
        '名称　poem de riha 安積店',
        '所在地　〒963-0102　福島県郡山市安積町笹川字四角担3-1',
        '電話番号　080-2848-2881（開設準備室）',
    ])
    p = doc.add_paragraph()
    p.paragraph_format.first_line_indent = Mm(4)
    p.paragraph_format.space_after = Pt(4)
    r = p.add_run('2　事業者の名称等は、次のとおりとする。')
    set_japanese_font(r, size=10.5)
    add_paren_list(doc, [
        '名称　株式会社はなひろ',
        '所在地　〒962-0015　福島県須賀川市日向町22　サンディアスB102号室',
        '代表者　代表取締役　塙　啓之',
        '法人番号　6380001023295',
    ])

    # =============== 第4条 職員の職種、員数及び職務内容 ===============
    add_article(doc, 4, '職員の職種、員数及び職務内容', [
        '事業所に置く職員の職種、員数及び職務内容は、次のとおりとする。',
    ])
    add_paren_list(doc, [
        '管理者　1名（常勤専従）　事業所の従業者の管理及び業務の管理を一元的に行うとともに、従業者に運営規程を遵守させるために必要な指揮命令を行う。',
        '生活相談員　1名以上（提供時間帯を通じて専従1名以上を配置）　利用申込みの調整、利用者及びその家族からの相談対応、関係機関との連絡調整、サービス計画作成への協力等を行う。',
        '看護職員　1名以上（提供時間帯を通じて専従1名以上を配置）　利用者の健康管理、医療的処置、感染症予防、衛生管理等を行う。',
        '機能訓練指導員　1名以上（柔道整復師、理学療法士、作業療法士、言語聴覚士、看護職員、あん摩マッサージ指圧師等）　利用者の心身の機能の維持・向上を図るため、利用者の状態に応じた個別機能訓練計画を作成し、機能訓練を提供する。',
        '介護職員　提供時間帯を通じて利用者の数が15人までの場合は1人以上、利用者の数が15人を超える場合は1に利用者の数が15人を超えて5又はその端数を増すごとに1を加えて得た数以上を専従で配置する。利用者の食事、入浴、排せつ、レクリエーション、機能訓練の補助等の介護全般を行う。',
    ])

    # =============== 第5条 営業日及び営業時間 ===============
    add_article(doc, 5, '営業日及び営業時間', [
        '事業所の営業日及び営業時間は、次のとおりとする。',
    ])
    add_paren_list(doc, [
        '営業日　月曜日から金曜日まで（祝日も営業）',
        '休業日　土曜日、日曜日及び年末年始（12月31日から翌年1月3日まで）',
        '営業時間　午前8時30分から午後5時30分まで',
        'サービス提供時間　午前の部　午前9時00分から午後12時05分まで（3時間5分）　／　午後の部　午後1時25分から午後4時30分まで（3時間5分）',
    ])

    # =============== 第6条 利用定員 ===============
    add_article(doc, 6, '指定地域密着型通所介護の利用定員', [
        '事業所の利用定員は、1日あたり18名（午前の部・午後の部それぞれ18名）とする。',
    ])

    # =============== 第7条 サービス内容及び利用料 ===============
    add_article(doc, 7, '指定地域密着型通所介護の内容及び利用料その他の費用の額', [
        '事業所が提供するサービスの内容は、次のとおりとする。',
    ])
    add_paren_list(doc, [
        '個別機能訓練（理学療法士監修プログラム、マシーントレーニング、平行棒・歩行訓練等）',
        '健康状態の確認（バイタルチェック、医療的観察）',
        '日常生活の支援（送迎、入浴介助は実施しない、必要に応じた排せつ介助）',
        '認知症予防のための脳活性化プログラム（脳トレ、デュアルタスク課題）',
        'レクリエーション・口腔機能向上のための支援',
    ])
    p = doc.add_paragraph()
    p.paragraph_format.first_line_indent = Mm(4)
    p.paragraph_format.space_after = Pt(4)
    r = p.add_run('2　通所介護の利用料は、介護保険法令に定める当該指定地域密着型通所介護費用基準額（介護報酬告示により定められた額）に基づくものとし、利用者からは、当該費用の1割、2割又は3割（負担割合証に基づく）を徴収する。なお、法定代理受領サービスでない場合は、当該費用の全額を一旦徴収する。')
    set_japanese_font(r, size=10.5)
    p = doc.add_paragraph()
    p.paragraph_format.first_line_indent = Mm(4)
    p.paragraph_format.space_after = Pt(4)
    r = p.add_run('3　介護予防・日常生活支援総合事業（第1号通所事業）における利用料は、郡山市が定める基準に基づく。')
    set_japanese_font(r, size=10.5)
    p = doc.add_paragraph()
    p.paragraph_format.first_line_indent = Mm(4)
    p.paragraph_format.space_after = Pt(4)
    r = p.add_run('4　前項のほか、利用者から次に掲げる費用の支払いを受けることができる。')
    set_japanese_font(r, size=10.5)
    add_paren_list(doc, [
        '食事の提供に要する費用（実費相当額）　※提供する場合のみ',
        '日常生活において通常必要となる費用であって、利用者に負担させることが適当と認められる費用',
        'おむつ代（実費相当額）',
        'その他のサービス利用に伴う実費',
    ])

    # =============== 第8条 通常の事業の実施地域 ===============
    add_article(doc, 8, '通常の事業の実施地域', [
        '通常の事業の実施地域は、福島県郡山市の区域内とする。',
        'なお、本事業は地域密着型サービスとして、原則として郡山市内に住所を有する被保険者を対象とする。市外の被保険者に対するサービス提供は、関係市町村との協議に基づき郡山市長の同意を得た場合に限り行うものとする。',
        '前2項の地域を超えて行う送迎については、事業者と利用者との協議により定める。',
    ])

    # =============== 第9条 留意事項 ===============
    add_article(doc, 9, 'サービス利用に当たっての留意事項', [
        '利用者は、サービスの提供を受けるに当たっては、次の事項に留意するものとする。',
    ])
    add_paren_list(doc, [
        '事業所内では、他の利用者の迷惑となる行為、危険な行為を行わないこと。',
        '事業所内の設備、備品等を破損し、又は滅失したときは、その損害を賠償すること。ただし、利用者の故意又は重大な過失によらない場合はこの限りでない。',
        '所定の利用時間を厳守すること。',
        '健康状態に変化があった場合は、速やかに事業所職員に申し出ること。',
    ])

    # =============== 第10条 緊急時等における対応方法 ===============
    add_article(doc, 10, '緊急時等における対応方法', [
        'サービス提供中に、利用者に病状の急変その他緊急の事態が生じたときは、速やかに主治医又は協力医療機関への連絡を行う等必要な措置を講ずるとともに、管理者及び利用者の家族へ連絡する。',
        '事業所は、あらかじめ協力医療機関を定め、緊急時の対応について連携を確保する。',
    ])

    # =============== 第11条 非常災害対策 ===============
    add_article(doc, 11, '非常災害対策', [
        '非常災害（火災、地震、風水害等）に備え、防災計画及び避難経路を定め、定期的に訓練を実施する。',
        '消防計画を作成し、消防署への届出を行うとともに、消防設備の点検を定期的に実施する。',
        '避難・救出・通報訓練を年2回以上実施し、地域住民との連携体制を構築する。',
    ])

    # =============== 第12条 業務継続計画（BCP） ===============
    add_article(doc, 12, '業務継続計画（BCP）', [
        '感染症又は非常災害の発生時において、利用者に対する通所介護の提供を継続的に実施するため、及び非常時の体制で早期の業務再開を図るため、業務継続計画を策定し、当該業務継続計画に従い必要な措置を講ずる。',
        '従業者に対し、業務継続計画について周知するとともに、必要な研修及び訓練を年2回以上実施する。',
        '定期的に業務継続計画の見直しを行い、必要に応じて変更を行う。',
    ])

    # =============== 第13条 感染症対策 ===============
    add_article(doc, 13, '感染症及び食中毒の予防及びまん延の防止', [
        '感染症及び食中毒の予防及びまん延の防止のための対策を検討する委員会（以下「感染対策委員会」という。）を概ね6月に1回以上開催するとともに、その結果について従業者に周知徹底する。',
        '感染症及び食中毒の予防及びまん延の防止のための指針を整備する。',
        '従業者に対し、感染症及び食中毒の予防及びまん延の防止のための研修及び訓練を定期的（年2回以上）に実施する。',
        '感染症が発生し、又はまん延しないよう、必要に応じ保健所等の関係機関と連携し、感染拡大防止策を講ずる。',
    ])

    # =============== 第14条 衛生管理 ===============
    add_article(doc, 14, '衛生管理等', [
        '利用者の使用する施設、食器その他の設備又は飲用に供する水について、衛生的な管理に努め、衛生上必要な措置を講ずるとともに、医薬品及び医療機器の管理を適正に行う。',
        '従業者の清潔の保持及び健康状態について、必要な管理を行う。',
        '感染症対策と連動し、手指衛生・換気・清掃・消毒の励行を徹底する。',
    ])

    # =============== 第15条 高齢者虐待の防止 ===============
    add_article(doc, 15, '高齢者虐待の防止のための措置', [
        '虐待の発生又はその再発を防止するための対策を検討する委員会（以下「虐待防止委員会」という。）を定期的（概ね6月に1回以上）に開催するとともに、その結果について従業者に周知徹底する。',
        '高齢者虐待の防止のための指針を整備する。',
        '従業者に対し、高齢者虐待の防止のための研修を定期的（年2回以上）に実施する。',
        '前各号の措置を適切に実施するための担当者を置く。',
        '万一、虐待が発生した場合は、速やかに市町村に報告するとともに、その原因の分析を行い、再発防止に努める。',
    ])

    # =============== 第16条 身体的拘束等の適正化 ===============
    add_article(doc, 16, '身体的拘束等の適正化', [
        '利用者又は他の利用者等の生命又は身体を保護するため、緊急やむを得ない場合を除き、身体的拘束その他利用者の行動を制限する行為（以下「身体的拘束等」という。）を行わない。',
        '身体的拘束等を行う場合には、その態様及び時間、その際の利用者の心身の状況並びに緊急やむを得ない理由を記録する。',
        '身体的拘束等の適正化のための対策を検討する委員会を3月に1回以上開催し、その結果について従業者に周知徹底する。',
        '身体的拘束等の適正化のための指針を整備する。',
        '従業者に対し、身体的拘束等の適正化のための研修を定期的（年2回以上）に実施する。',
    ])

    # =============== 第17条 ハラスメント対策 ===============
    add_article(doc, 17, 'ハラスメント対策', [
        '事業所は、職場におけるパワーハラスメント、セクシュアルハラスメント、妊娠・出産・育児休業等に関するハラスメント並びに利用者及びその家族からの著しい迷惑行為を防止するため、雇用管理上必要な措置を講ずる。',
        'ハラスメント防止に関する方針を明確化し、従業者に周知・啓発するとともに、相談窓口を設置する。',
        '従業者からの相談があった場合には、迅速かつ適切に対応する。',
    ])

    # =============== 第18条 個人情報の保護 ===============
    add_article(doc, 18, '個人情報の保護', [
        '事業所は、利用者及びその家族に関する個人情報について、個人情報の保護に関する法律その他関係法令を遵守し、適正に取り扱う。',
        '利用者及びその家族の個人情報を、サービス担当者会議その他のサービス提供以外の目的で利用する場合は、あらかじめ文書により本人の同意を得る。',
        '従業者は、業務上知り得た利用者又はその家族の秘密を漏らさないものとし、退職後においてもその守秘義務を負う。',
    ])

    # =============== 第19条 苦情処理 ===============
    add_article(doc, 19, '苦情処理', [
        '利用者及びその家族からの苦情に対して迅速かつ適切に対応するため、苦情を受け付けるための窓口を設置する。',
    ])
    add_paren_list(doc, [
        '苦情受付窓口　poem de riha 安積店　管理者',
        '電話番号　080-2848-2881（開設後変更予定）',
        '受付時間　営業時間内',
    ])
    p = doc.add_paragraph()
    p.paragraph_format.first_line_indent = Mm(4)
    p.paragraph_format.space_after = Pt(4)
    r = p.add_run('2　提供したサービスに関する利用者からの苦情に関して、市町村が行う調査に協力するとともに、市町村から指導又は助言を受けた場合は、当該指導又は助言に従って必要な改善を行う。')
    set_japanese_font(r, size=10.5)
    p = doc.add_paragraph()
    p.paragraph_format.first_line_indent = Mm(4)
    p.paragraph_format.space_after = Pt(4)
    r = p.add_run('3　国民健康保険団体連合会が行う調査にも協力する。')
    set_japanese_font(r, size=10.5)

    # =============== 第20条 事故発生時の対応 ===============
    add_article(doc, 20, '事故発生時の対応', [
        '利用者に対するサービスの提供により事故が発生した場合は、速やかに市町村、利用者の家族及び居宅介護支援事業所等に連絡を行うとともに、必要な措置を講ずる。',
        '事故の状況及び事故に際して採った処置について記録する。',
        '事故により損害が生じたときは、損害賠償を速やかに行う。',
        '事故が生じた際にはその原因を解明し、再発生を防ぐための対策を講ずる。',
    ])

    # =============== 第21条 研修 ===============
    add_article(doc, 21, '従業者の研修', [
        '従業者の資質の向上を図るため、就業時及び年間計画に基づく研修を実施する。',
        '本規程に定める各種研修（業務継続計画、感染症対策、高齢者虐待防止、身体的拘束等適正化、ハラスメント対策等）を計画的に実施する。',
        '研修の実施記録を作成し、保存する。',
    ])

    # =============== 第22条 記録の整備 ===============
    add_article(doc, 22, '記録の整備', [
        '従業者、設備、会計及び利用者に対する指定地域密着型通所介護の提供に関する諸記録を整備する。',
        '利用者に対するサービスの提供に関する記録は、その完結の日から5年間保存する。',
        '電磁的記録による作成・保存も認める。',
    ])

    # =============== 第23条 その他運営に関する重要事項 ===============
    add_article(doc, 23, 'その他運営に関する重要事項', [
        '事業所は、利用者に対し適切なサービスを提供できるよう、従業者の勤務体制を定める。',
        '事業所は、業務に当たり、当該従業者と利用者との関係において必要な場合を除き、当該従業者と利用者との金銭の貸借又は預り金等を行わない。',
        '事業所は、当該事業所の現況、提供する通所介護の内容、利用料その他のサービスを利用しようとする者の選択に資すると認められる重要事項を、事業所の見やすい場所に掲示する。',
        '本規程に定めるもののほか、運営に関する重要事項については、株式会社はなひろと事業所管理者の協議に基づき定めるものとする。',
    ])

    # =============== 附則 ===============
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(20)
    r = p.add_run('附　則')
    set_japanese_font(r, size=12, bold=True)
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER

    p = doc.add_paragraph()
    p.paragraph_format.first_line_indent = Mm(4)
    r = p.add_run('この規程は、令和8年（2026年）6月1日から施行する。')
    set_japanese_font(r, size=10.5)

    # 末尾署名
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(36)
    p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    r = p.add_run('株式会社はなひろ')
    set_japanese_font(r, size=11, bold=True)
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    r = p.add_run('代表取締役　塙　啓之')
    set_japanese_font(r, size=11)

    doc.save(OUTPUT)
    print(f'保存: {OUTPUT}  ({os.path.getsize(OUTPUT)//1024} KB)')


if __name__ == '__main__':
    main()
