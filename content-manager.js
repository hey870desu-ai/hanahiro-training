// ===== リーダーの学び（管理者コース・親しみやすい版） =====
const MANAGER_COURSE = {
  title: 'リーダーの学び',
  subtitle: '&#x1F3AF; 数字とチームで、もっと良い事業所にしよう！',
  password: 'hanahiro2026',
  modules: [

    // ========================================
    // モジュール1: 収益の最適化（5ページ・10問）
    // ========================================
    {
      id: 'mgr-m1',
      number: 'ステップ 1',
      title: 'うちの事業所のお金の仕組み',
      description: '売上・利益・稼働率の関係をつかもう',
      lessons: [
        // --- M1 P1 ---
        {
          title: '利益の方程式 P = (R - E) / T',
          content: `
            <h2>利益の方程式を理解する</h2>
            <p>経営の成果は、以下のシンプルな方程式に集約されます。</p>
            <div class="formula-box">
              P = ( R - E ) / T
              <small>時間あたり利益 = （売上 - 経費）/ 時間</small>
            </div>
            <h3>3つの変数</h3>
            <ul>
              <li><strong>R（Revenue）</strong>：売上を最大化する</li>
              <li><strong>E（Expense）</strong>：経費を最小化する</li>
              <li><strong>T（Time）</strong>：時間を短縮する（生産性向上）</li>
            </ul>
            <div class="diagram-box">
              <div class="diagram-title">利益を増やす3つのレバー</div>
              <div class="stat-row">
                <div class="stat-card"><div class="stat-num">R &#8593;</div><div class="stat-label">売上を上げる</div></div>
                <div class="stat-card yellow"><div class="stat-num">E &#8595;</div><div class="stat-label">経費を下げる</div></div>
                <div class="stat-card green"><div class="stat-num">T &#8595;</div><div class="stat-label">時間を短縮</div></div>
              </div>
            </div>
            <div class="key-point">
              <strong>介護事業への応用</strong><br>
              R = 稼働率 × 単価 × 営業日数<br>
              E = 人件費 + 家賃 + 消耗品 + その他<br>
              T = 業務効率化、ICT活用、記録の時短<br><br>
              この3つを<strong>同時に</strong>改善することで、持続可能な経営が実現します。1つだけ突出させてもバランスが崩れます。
            </div>
          `
        },
        // --- M1 P2 ---
        {
          title: '売上の基本方程式（オプティマイゼーション）',
          content: `
            <h2>売上の方程式</h2>
            <p>マーケティングの世界的権威ジェイ・エイブラハムは、売上を上げる方法は3つしかないと提唱しました。</p>
            <div class="formula-box">
              売上 = 顧客数 × 単価 × 購入頻度
            </div>
            <div class="diagram-box">
              <div class="diagram-title">各要素を25%ずつ伸ばすと売上は約2倍に</div>
              <div class="stat-row">
                <div class="stat-card"><div class="stat-num">1.25</div><div class="stat-label">顧客数 ×</div></div>
                <div class="stat-card"><div class="stat-num">1.25</div><div class="stat-label">単価 ×</div></div>
                <div class="stat-card"><div class="stat-num">1.25</div><div class="stat-label">頻度 =</div></div>
                <div class="stat-card green"><div class="stat-num">1.95</div><div class="stat-label">約2倍!</div></div>
              </div>
            </div>
            <h3>介護事業に当てはめると</h3>
            <table class="compare-table">
              <tr><th>要素</th><th>介護事業での意味</th><th>改善の方向性</th></tr>
              <tr><td>顧客数</td><td>実利用者数</td><td>新規獲得、流出防止</td></tr>
              <tr><td>単価</td><td>一人あたり介護報酬</td><td>加算算定の最適化</td></tr>
              <tr><td>頻度</td><td>週あたり利用日数</td><td>週2→3日の提案</td></tr>
            </table>
            <div class="key-point">
              <strong>ポイント</strong><br>
              「売上を上げろ」と漠然と考えるのではなく、<strong>3つのどれを改善するか</strong>を明確にすることで、具体的な施策が見えてきます。
            </div>
          `
        },
        // --- M1 P3 ---
        {
          title: 'シックスファクター（売上の6要素）',
          content: `
            <h2>売上をあげる6つの要素</h2>
            <p>3要素をさらに分解した上級版が「シックスファクター」です。</p>
            <div class="formula-box">
              売上 = (E - C + N) × (UP × # × F)
              <small>購買顧客数(3要素) × 平均顧客単価(3要素)</small>
            </div>
            <h3>購買顧客数の3要素</h3>
            <div class="diagram-box">
              <div class="flow-row">
                <div class="flow-step">E 既存利用者</div>
                <div class="flow-step danger">- C 流出</div>
                <div class="flow-step alt">+ N 新規</div>
              </div>
            </div>
            <ul>
              <li><strong>E（Existing）既存利用者</strong>：現在通っている方を大切にする</li>
              <li><strong>C（Churn）流出利用者</strong>：休みがち・退所の方を減らす</li>
              <li><strong>N（New）新規利用者</strong>：新たな利用者を獲得する</li>
            </ul>
            <h3>平均顧客単価の3要素</h3>
            <div class="diagram-box">
              <div class="flow-row">
                <div class="flow-step">UP 単価</div>
                <div class="flow-step">× # 利用回数</div>
                <div class="flow-step">× F 頻度</div>
              </div>
            </div>
            <ul>
              <li><strong>UP（Unit Price）</strong>：介護報酬単価+加算</li>
              <li><strong>#（Number）</strong>：1回あたりの提供内容（加算の種類数）</li>
              <li><strong>F（Frequency）</strong>：月間の利用日数</li>
            </ul>
            <div class="think-box">
              <strong>考えてみよう</strong><br>
              あなたの事業所で「6つの要素」のうち、最もボトルネックになっているのはどれですか？
            </div>
          `
        },
        // --- M1 P4 ---
        {
          title: '41の最適化ポイント（介護事業版・抜粋）',
          content: `
            <h2>売上アップ 施策一覧（介護事業版）</h2>
            <h3>①既存利用者を維持する</h3>
            <ol>
              <li>満足度アンケートを定期実施し、改善に活かす</li>
              <li>ご家族への連絡帳・写真共有を丁寧に行う</li>
              <li>誕生日やイベントで特別感を演出する</li>
              <li>個別機能訓練の目標達成をお祝いする</li>
              <li>フォロー電話で休み明けの様子を確認する</li>
            </ol>
            <h3>②流出利用者を減らす</h3>
            <ol>
              <li>休みが続く方にはすぐ電話でフォローする</li>
              <li>退所理由を必ず記録・分析する</li>
              <li>ご本人・ご家族の変化（入院、体調等）を早期把握する</li>
              <li>ケアマネへ定期的に利用状況を報告する</li>
            </ol>
            <h3>③新規利用者を増やす</h3>
            <ol>
              <li>ケアマネへの定期訪問（月1回以上）</li>
              <li>地域包括支援センターとの連携強化</li>
              <li>見学・体験利用のハードルを下げる</li>
              <li>既存利用者・ご家族からの口コミを促進する</li>
              <li>地域のイベントや講座に参加・開催する</li>
            </ol>
            <div class="diagram-box">
              <div class="diagram-title">施策の優先順位</div>
              <div class="bar-chart">
                <div class="bar-row"><div class="bar-label">①既存維持</div><div class="bar-track"><div class="bar-fill green" style="width:90%">最優先</div></div></div>
                <div class="bar-row"><div class="bar-label">②流出防止</div><div class="bar-track"><div class="bar-fill blue" style="width:75%">高</div></div></div>
                <div class="bar-row"><div class="bar-label">③新規獲得</div><div class="bar-track"><div class="bar-fill yellow" style="width:60%">中</div></div></div>
              </div>
              <p style="font-size:12px;color:#888;margin-top:8px">新規獲得のコストは既存維持の5〜10倍。まず今いる方を大切に。</p>
            </div>
            <div class="key-point">
              <strong>ポイント</strong><br>
              多くの事業所は③新規獲得ばかりに注力しますが、実は①②の方がコスト効率が高く、効果も早く出ます。
            </div>
          `
        },
        // --- M1 P5 ---
        {
          title: '稼働率経営と価格の最適化',
          content: `
            <h2>稼働率が経営を決める</h2>
            <div class="formula-box">
              稼働率 = 実利用者数 / 定員 × 100%
              <small>目標: 90%以上を安定維持</small>
            </div>
            <h3>稼働率1%の重み</h3>
            <div class="diagram-box">
              <div class="diagram-title">定員別：稼働率5%向上の年間売上インパクト</div>
              <table class="compare-table">
                <tr><th>事業所</th><th>定員</th><th>5%の人数</th><th>年間売上増（概算）</th></tr>
                <tr><td>ポエム賀庄</td><td>10名</td><td>0.5人/日</td><td class="highlight-cell">約132万円</td></tr>
                <tr><td>舘山荘</td><td>18名</td><td>0.9人/日</td><td class="highlight-cell">約238万円</td></tr>
                <tr><td>ポエム開成</td><td>36名</td><td>1.8人/日</td><td class="highlight-cell">約475万円</td></tr>
              </table>
              <p style="font-size:12px;color:#888;margin-top:6px">※単価10,000円、月22日稼働で計算</p>
            </div>
            <h3>加算による単価の最適化</h3>
            <p>介護報酬は公定価格ですが、加算で実質単価を上げられます。</p>
            <div class="diagram-box">
              <div class="diagram-title">主な加算とその効果</div>
              <table class="compare-table">
                <tr><th>加算名</th><th>単位数（目安）</th><th>ポイント</th></tr>
                <tr><td>個別機能訓練加算(I)イ</td><td>56単位/日</td><td>計画書の作成と実施記録</td></tr>
                <tr><td>個別機能訓練加算(I)ロ</td><td>85単位/日</td><td>LIFEへのデータ提出</td></tr>
                <tr><td>口腔機能向上加算</td><td>150単位/回</td><td>歯科衛生士等の配置</td></tr>
                <tr><td>入浴介助加算(II)</td><td>60単位/日</td><td>自宅での入浴を想定した計画</td></tr>
                <tr><td>科学的介護推進体制加算</td><td>40単位/月</td><td>LIFEへのデータ提出</td></tr>
              </table>
            </div>
            <div class="key-point">
              <strong>管理者が毎日見るべき数字</strong><br>
              ・当日の延べ利用者数と稼働率<br>
              ・翌日〜1週間の予約状況<br>
              ・休みの連絡があった方とその理由<br>
              ・新規問い合わせの進捗<br>
              ・月間の累計売上と目標との差
            </div>
          `
        }
      ],
      quiz: [
        { question: '利益の方程式「P = (R - E) / T」で「T」が意味するものは？',
          options: ['Tax（税金）','Time（時間）','Total（合計）','Target（目標）'],
          correct: 1, explanation: 'Tは「Time（時間）」です。同じ利益でも短い時間で達成できれば生産性が高いと言えます。' },
        { question: '売上の方程式「売上 = 顧客数 × 単価 × 購入頻度」で、各要素を25%ずつ伸ばすと売上はおよそ何倍になりますか？',
          options: ['約1.5倍','約1.75倍','約2倍','約3倍'],
          correct: 2, explanation: '1.25 × 1.25 × 1.25 = 1.953...で約2倍になります。各要素の小さな改善が掛け算で大きな効果を生みます。' },
        { question: 'シックスファクターで「C（Churn）」が意味するものは？',
          options: ['新規利用者','既存利用者','流出利用者','紹介利用者'],
          correct: 2, explanation: 'C（Churn）は流出利用者です。休みがち・退所の方を減らすことが売上維持の鍵です。' },
        { question: '新規利用者の獲得コストは、既存利用者の維持コストの何倍と言われていますか？',
          options: ['2〜3倍','3〜5倍','5〜10倍','10〜20倍'],
          correct: 2, explanation: '新規獲得は既存維持の5〜10倍のコストがかかると言われています。まず今いる方を大切にすることが最も効率的です。' },
        { question: '流出利用者を減らすための施策として最も適切なものは？',
          options: ['チラシを増やす','加算の算定を見直す','休みが続く方にすぐフォロー電話する','スタッフを増員する'],
          correct: 2, explanation: '休みが続く方への早期フォローが流出防止の最も効果的な施策です。理由を把握し、対応することで離脱を防げます。' },
        { question: '定員18名の事業所で稼働率が5%向上した場合の年間売上増はおよそいくら？（単価10,000円、月22日稼働）',
          options: ['約100万円','約240万円','約400万円','約500万円'],
          correct: 1, explanation: '18×5%=0.9人/日。0.9×10,000×22日×12ヶ月≒約238万円です。稼働率の小さな改善が大きな差を生みます。' },
        { question: '介護事業で「実質的な単価」を向上させる主な方法は？',
          options: ['利用料を独自に値上げする','各種加算を適正に算定する','利用時間を短くする','定員を増やす'],
          correct: 1, explanation: '介護報酬は公定価格ですが、加算の適正算定で実質単価を上げることができます。' },
        { question: '売上アップの施策で最も優先すべきものは？',
          options: ['新規利用者の獲得','既存利用者の満足度向上と維持','広告宣伝の強化','新サービスの開発'],
          correct: 1, explanation: '既存利用者の維持が最もコスト効率が高く、効果も早く出ます。満足度の高いサービスは口コミにもつながります。' },
        { question: '管理者が「毎日」確認すべき数字はどれですか？',
          options: ['年間の損益計算書','当日の延べ利用者数と稼働率','月間の人件費率','四半期の売上推移'],
          correct: 1, explanation: '管理者は毎日の稼働率を把握し、翌日以降の予約状況や休みの動向を確認する習慣が重要です。' },
        { question: '「個別機能訓練加算(I)ロ」の算定に必要なものは？',
          options: ['医師の指示書','LIFEへのデータ提出','看護師の配置','家族の同意書'],
          correct: 1, explanation: '個別機能訓練加算(I)ロは、LIFEへのデータ提出が要件に含まれます。計画の作成・実施に加え、科学的介護の推進が求められます。' }
      ]
    },

    // ========================================
    // モジュール2: 経費の最適化（5ページ・10問）
    // ========================================
    {
      id: 'mgr-m2',
      number: 'ステップ 2',
      title: '経費をかしこく管理する',
      description: '損益分岐点と、ムダを減らすコツを学ぼう',
      lessons: [
        // --- M2 P1 ---
        {
          title: '損益分岐点とは何か',
          content: `
            <h2>損益分岐点（Break Even Point）</h2>
            <p>損益分岐点とは、<strong>売上と費用が同額になるポイント</strong>です。これを下回ると赤字、上回ると黒字になります。</p>
            <div class="diagram-box">
              <div class="diagram-title">損益分岐点のイメージ</div>
              <div class="bar-chart">
                <div class="bar-row"><div class="bar-label">売上高</div><div class="bar-track"><div class="bar-fill blue" style="width:100%">100%</div></div></div>
                <div class="bar-row"><div class="bar-label">変動費</div><div class="bar-track"><div class="bar-fill yellow" style="width:30%">30%</div></div></div>
                <div class="bar-row"><div class="bar-label">固定費</div><div class="bar-track"><div class="bar-fill red" style="width:60%">60%</div></div></div>
                <div class="bar-row"><div class="bar-label">利益</div><div class="bar-track"><div class="bar-fill green" style="width:10%">10%</div></div></div>
              </div>
            </div>
            <h3>固定費と変動費の違い</h3>
            <table class="compare-table">
              <tr><th>区分</th><th>特徴</th><th>介護事業の例</th></tr>
              <tr><td><strong>固定費</strong></td><td>売上に関係なく一定</td><td>人件費、家賃、リース料、保険料</td></tr>
              <tr><td><strong>変動費</strong></td><td>利用者数に連動</td><td>食材費、消耗品、送迎燃料費</td></tr>
            </table>
            <div class="key-point">
              <strong>介護事業の特徴</strong><br>
              介護事業は<strong>固定費比率が非常に高い</strong>ビジネスです。特に人件費は売上の60〜70%を占めます。だからこそ、稼働率を上げて固定費を「薄く広く」カバーすることが重要です。
            </div>
          `
        },
        // --- M2 P2 ---
        {
          title: '介護事業の損益構造',
          content: `
            <h2>介護事業のお金の流れ</h2>
            <p>売上100%が入ったとき、何にどれだけ使われるかを理解しましょう。</p>
            <div class="diagram-box">
              <div class="diagram-title">デイサービスの一般的な損益構造</div>
              <div class="bar-chart">
                <div class="bar-row"><div class="bar-label">人件費</div><div class="bar-track"><div class="bar-fill red" style="width:65%">60〜70%</div></div></div>
                <div class="bar-row"><div class="bar-label">家賃等</div><div class="bar-track"><div class="bar-fill yellow" style="width:12%">10〜15%</div></div></div>
                <div class="bar-row"><div class="bar-label">食材費</div><div class="bar-track"><div class="bar-fill blue" style="width:5%">3〜5%</div></div></div>
                <div class="bar-row"><div class="bar-label">車両費</div><div class="bar-track"><div class="bar-fill blue" style="width:4%">3〜5%</div></div></div>
                <div class="bar-row"><div class="bar-label">その他</div><div class="bar-track"><div class="bar-fill blue" style="width:8%">5〜10%</div></div></div>
                <div class="bar-row"><div class="bar-label">利益</div><div class="bar-track"><div class="bar-fill green" style="width:6%">3〜8%</div></div></div>
              </div>
            </div>
            <h3>労働分配率の管理</h3>
            <div class="formula-box">
              労働分配率 = 人件費 / 粗利益 × 100%
              <small>デイサービスの目安: 70%以下が健全</small>
            </div>
            <div class="example-box">
              <strong>人件費率が1%変わると？</strong><br>
              月商300万円の事業所の場合、人件費率1%＝月3万円、年間36万円。<br>
              5%なら年間180万円の差。これは賞与原資やスタッフ1人の研修費に相当します。
            </div>
            <div class="key-point">
              <strong>ポイント</strong><br>
              人件費削減＝給料カットではありません。<strong>稼働率を上げれば、同じ人件費でも人件費「率」は下がります</strong>。売上を増やすことが最良の人件費対策です。
            </div>
          `
        },
        // --- M2 P3 ---
        {
          title: '損益分岐点を下げる7つのアイデア',
          content: `
            <h2>損益分岐点を下げる7つのアイデア</h2>
            <div class="diagram-box">
              <div class="diagram-title">7つのアイデア</div>
              <div class="flow-col">
                <div class="flow-step" style="width:90%">1. 原価（仕入れ）を下げる</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step" style="width:90%">2. 販管費を下げる</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step alt" style="width:90%">3. 粗利率を高くする</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step alt" style="width:90%">4. 販売量を圧倒的に増やす</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step" style="width:90%">5. 商品ラインナップを最適化する</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step" style="width:90%">6. 販売効率を最適化する</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step warn" style="width:90%">7. オンライン化する</div>
              </div>
            </div>
            <h3>介護事業での具体策</h3>
            <table class="compare-table">
              <tr><th>アイデア</th><th>介護事業での実践例</th></tr>
              <tr><td>1. 原価を下げる</td><td>食材・消耗品の一括購入、複数事業所での共同仕入れ</td></tr>
              <tr><td>2. 販管費を下げる</td><td>光熱費の見直し、不要なサブスク解約、業務のムダ排除</td></tr>
              <tr><td>3. 粗利率UP</td><td>加算の適正算定、要介護度に応じたサービス提供</td></tr>
              <tr><td>4. 販売量UP</td><td>稼働率90%以上の安定維持</td></tr>
              <tr><td>5. ラインナップ</td><td>短時間型と通常型の併用、入浴サービスの充実</td></tr>
              <tr><td>6. 販売効率</td><td>ケアマネ営業の仕組み化、見学→契約の転換率向上</td></tr>
              <tr><td>7. オンライン化</td><td>記録のICT化、請求業務の自動化、Notion等の活用</td></tr>
            </table>
          `
        },
        // --- M2 P4 ---
        {
          title: '経費を下げる12の視点',
          content: `
            <h2>本気になれば経費は下がる</h2>
            <p>経費削減で大切な12の視点を確認しましょう。</p>
            <ol>
              <li><strong>経費の削減は手段</strong>であり、目的ではない</li>
              <li>経営者と社員は経費削減の<strong>動機が異なる</strong></li>
              <li>経費削減の<strong>意欲が低い社員の気持ち</strong>を理解する</li>
              <li>経費削減の<strong>目標値を設定</strong>する</li>
              <li>経費削減は売上増加より<strong>利益貢献が大きい</strong></li>
              <li><strong>一律の経費削減を避ける</strong>（必要な投資は削らない）</li>
              <li><strong>アウトソーシング</strong>で固定費を変動費化する</li>
              <li><strong>税理士に相談</strong>して節税する</li>
              <li>事業の<strong>統合・集約</strong>で経費削減する</li>
              <li>不良在庫、長期不動在庫を<strong>早期処分</strong>する</li>
              <li><strong>残業をさせない</strong>（社員を守る、労務リスク回避）</li>
              <li>とにかく<strong>数字を見る</strong>習慣を持つ</li>
            </ol>
            <div class="key-point">
              <strong>特に重要な3つ</strong><br>
              <strong>5番</strong>：売上が300万円、営利5%（15万円）の事業所で10万円の経費削減をすると、利益は15万→25万円で<strong>67%増</strong>。同じ効果を売上増で得るには200万円の売上増が必要。<br><br>
              <strong>11番</strong>：残業は人件費増だけでなく、疲労→事故→離職のリスクも。業務効率化で残業を減らすことは経費削減であり、スタッフを守ることでもある。<br><br>
              <strong>12番</strong>：数字を見ない経営は、暗闇で車を運転するのと同じ。
            </div>
          `
        },
        // --- M2 P5 ---
        {
          title: '収益の質（Quality of Earning）',
          content: `
            <h2>収益の質を高める</h2>
            <p>売上が大きいだけでは不十分。大切なのは「収益の質」です。</p>
            <div class="diagram-box">
              <div class="diagram-title">収益の質が高い事業所 vs 低い事業所</div>
              <table class="compare-table">
                <tr><th>項目</th><th>質が高い</th><th>質が低い</th></tr>
                <tr><td>稼働率</td><td class="highlight-cell">90%以上で安定</td><td>70%台で不安定</td></tr>
                <tr><td>人件費率</td><td class="highlight-cell">65%以下</td><td>75%以上</td></tr>
                <tr><td>加算算定</td><td class="highlight-cell">適正に複数算定</td><td>基本報酬のみ</td></tr>
                <tr><td>業務</td><td class="highlight-cell">仕組み化、誰でもできる</td><td>属人的、特定の人に依存</td></tr>
                <tr><td>利用者</td><td class="highlight-cell">長期利用、満足度高</td><td>入退所が激しい</td></tr>
                <tr><td>スタッフ</td><td class="highlight-cell">定着率高、成長意欲</td><td>離職率高、疲弊</td></tr>
              </table>
            </div>
            <div class="example-box">
              <strong>「膨張」と「成長」の違い</strong><br>
              ・売上2倍をスタッフ2倍で達成 → <strong>膨張</strong>（利益率は変わらない）<br>
              ・売上2倍をスタッフ1.3倍で達成 → <strong>成長</strong>（生産性が向上）<br><br>
              「倒産のほぼ半分は、記録的な売上のあがった翌年に起きる」（ジム・コリンズ）<br>
              急成長に組織がついていけず崩壊するケースが多いのです。
            </div>
            <div class="key-point">
              <strong>はなひろケアが目指す「絆徳の経営」</strong><br>
              利益と道徳を両立し、スタッフが幸せを実感しながら、ご利用者さまをより良い未来に導く。<br>
              「中小企業と『おでき』は、すぐ潰れる」（稲盛和夫）── 堅実で質の高い経営を。
            </div>
          `
        }
      ],
      quiz: [
        { question: '介護事業の固定費で最も大きな割合を占めるものは？',
          options: ['食材費','人件費','家賃','車両費'],
          correct: 1, explanation: '人件費は売上の60〜70%を占める最大の固定費です。適切な管理が経営の鍵となります。' },
        { question: '「労働分配率」の計算式はどれですか？',
          options: ['人件費÷売上×100%','人件費÷粗利益×100%','人件費÷経費×100%','人件費÷利用者数×100%'],
          correct: 1, explanation: '労働分配率＝人件費÷粗利益×100%です。デイサービスでは70%以下が健全な目安とされています。' },
        { question: '人件費「率」を下げる最良の方法は？',
          options: ['スタッフの給料をカットする','パートの比率を増やす','稼働率を上げて売上を増やす','残業を増やして対応する'],
          correct: 2, explanation: '稼働率を上げて売上を増やせば、同じ人件費でも人件費率は下がります。給料カットはスタッフのモチベーション低下と離職を招きます。' },
        { question: '月商300万円（営利5%）の事業所で10万円の経費削減をすると、利益はどう変化しますか？',
          options: ['3%増加','30%増加','67%増加','100%増加'],
          correct: 2, explanation: '利益15万円→25万円で約67%の増加です。売上で同じ利益増を得るには200万円の売上増が必要なため、経費削減の効果は非常に大きいのです。' },
        { question: '「固定費を変動費化する」具体例はどれですか？',
          options: ['スタッフの正社員化','自社ビルの購入','清掃業務のアウトソーシング','車両の購入'],
          correct: 2, explanation: '清掃業務のアウトソーシングは、固定費（正社員の人件費）を変動費（外注費、必要時のみ発生）に変える例です。' },
        { question: '「経費削減は○○であり、目的ではない」。○○に入る言葉は？',
          options: ['義務','手段','趣味','責任'],
          correct: 1, explanation: '経費削減は手段です。目的は良いサービスを持続的に提供すること。質を落とす経費削減は本末転倒です。' },
        { question: '残業を減らすことの効果として正しくないものは？',
          options: ['人件費の削減','スタッフの疲労防止','事故リスクの低減','サービスの質低下'],
          correct: 3, explanation: '残業削減は人件費減・疲労防止・事故防止に効果的です。業務効率化による残業削減は、サービスの質を下げるのではなく、むしろ向上させます。' },
        { question: '「収益の質が高い」事業所の特徴はどれですか？',
          options: ['売上が業界トップ','スタッフ数が多い','稼働率が安定し、業務が仕組み化されている','新規事業を次々に展開している'],
          correct: 2, explanation: '収益の質が高いとは、稼働率が安定し、業務が仕組み化され、利用者・スタッフの満足度が高い状態です。' },
        { question: 'ジム・コリンズの言葉「倒産のほぼ半分は○○に起きる」。○○は？',
          options: ['創業3年以内','不景気の年','記録的な売上の翌年','社長交代の年'],
          correct: 2, explanation: '急成長に組織がついていけず崩壊するケースが多いのです。堅実で質の高い成長が重要です。' },
        { question: '「膨張」と「成長」の違いとして正しいものは？',
          options: ['売上が増えれば全て成長','スタッフ数に関わらず売上が増えれば成長','同じ人数で売上が増えるのが成長、人数比例は膨張','利益率が下がっても売上が増えれば成長'],
          correct: 2, explanation: '生産性の向上を伴う売上増が「成長」。人員を比例で増やしただけの売上増は「膨張」であり、質の向上がありません。' }
      ]
    },

    // ========================================
    // モジュール3: 集客と販売の仕組み（5ページ・10問）
    // ========================================
    {
      id: 'mgr-m3',
      number: 'ステップ 3',
      title: '選ばれる事業所になるには？',
      description: '集客の仕組みとケアマネ営業のコツ',
      lessons: [
        {
          title: '販売システムの設計図',
          content: `
            <h2>販売システムとは？</h2>
            <p>見込み客が顧客になるまでの流れを<strong>3つのレベル</strong>で体系化したものです。</p>
            <div class="diagram-box">
              <div class="diagram-title">販売システムの3層構造</div>
              <div class="pyramid">
                <div class="pyramid-level" style="width:60%;background:#1a5276">プロセス（全体の流れ）</div>
                <div class="pyramid-level" style="width:80%;background:#2e86c1">プロシージャ（具体的な手続き）</div>
                <div class="pyramid-level" style="width:100%;background:#5dade2;color:#fff">トーク（話す内容・スクリプト）</div>
              </div>
            </div>
            <h3>プロセス</h3>
            <p>営業や集客活動における主要なステップの全体像。</p>
            <h3>プロシージャ</h3>
            <p>各ステップにおける詳細な手続き、使う資料、入力する書類。</p>
            <h3>トーク</h3>
            <p>お客さまや関係者への声かけ、話すべき内容の台本。</p>
            <div class="key-point">
              <strong>なぜ言語化が必要か？</strong><br>
              ほとんどの事業所は、集客の流れが言語化されていません。「なんとなく」やっている状態から「仕組みとして回る」状態にすることが管理者の仕事です。言語化すれば、誰がやっても同じ品質で営業できるようになります。
            </div>
          `
        },
        {
          title: 'はなひろケアの販売プロセス',
          content: `
            <h2>デイサービスの販売プロセス</h2>
            <div class="diagram-box">
              <div class="diagram-title">利用開始までのプロセス</div>
              <div class="flow-row">
                <div class="flow-step">認知</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step">問合せ</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step alt">見学</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step alt">体験</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step warn">契約</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step" style="background:#27ae60">定着</div>
              </div>
            </div>
            <table class="compare-table">
              <tr><th>ステップ</th><th>プロシージャ（手続き）</th><th>トーク例</th></tr>
              <tr><td>認知</td><td>ケアマネ訪問、地域包括連携、チラシ</td><td>「○○な方でお困りでしたらお手伝いできます」</td></tr>
              <tr><td>問合せ</td><td>電話受付、日程調整、事前情報確認</td><td>「まずは見学だけでもいかがですか？」</td></tr>
              <tr><td>見学</td><td>施設案内、スタッフ紹介、プログラム説明</td><td>「実際の雰囲気を見て安心していただけます」</td></tr>
              <tr><td>体験</td><td>1日体験利用、ご本人の反応観察</td><td>「お食事も体験できますよ」</td></tr>
              <tr><td>契約</td><td>契約書作成、担当者会議、ケアマネ連絡</td><td>「何でもご不安な点はおっしゃってください」</td></tr>
              <tr><td>定着</td><td>初回フォロー電話、定期報告、満足度確認</td><td>「初日のご様子をお伝えしますね」</td></tr>
            </table>
            <div class="key-point">
              <strong>ポイント</strong><br>
              各ステップの<strong>転換率</strong>（次のステップに進む割合）を測定しましょう。例えば「見学→体験」の転換率が低ければ、見学時の案内に改善の余地があります。
            </div>
          `
        },
        {
          title: '新販売形態（信頼関係構築型）',
          content: `
            <h2>信頼の関係性モデル</h2>
            <p>販売心理学の権威ブライアン・トレーシーが提唱する「新販売形態」は、従来の売り込み型とは正反対のアプローチです。</p>
            <div class="diagram-box">
              <div class="diagram-title">新販売形態 vs 古い販売形態</div>
              <table class="compare-table">
                <tr><th>配分</th><th>新販売形態</th><th>古い販売形態</th></tr>
                <tr><td><strong>40%</strong></td><td class="highlight-cell">信頼関係構築</td><td>クロージング</td></tr>
                <tr><td><strong>30%</strong></td><td class="highlight-cell">ニーズの把握</td><td>プレゼン</td></tr>
                <tr><td><strong>20%</strong></td><td>プレゼン</td><td>ニーズ把握</td></tr>
                <tr><td><strong>10%</strong></td><td>クロージング</td><td>信頼構築</td></tr>
              </table>
            </div>
            <h3>ケアマネ営業への応用</h3>
            <p><strong>信頼構築（40%）</strong></p>
            <ul>
              <li>定期訪問で顔を覚えてもらう</li>
              <li>利用者の近況を丁寧に報告する</li>
              <li>急な依頼にも柔軟に対応する</li>
              <li>ケアマネの仕事を理解し、負担を減らす提案をする</li>
            </ul>
            <p><strong>ニーズ把握（30%）</strong></p>
            <ul>
              <li>「今、どんな方のお困りが多いですか？」と質問する</li>
              <li>地域の課題や傾向を共有し合う</li>
            </ul>
            <div class="key-point">
              <strong>ポイント</strong><br>
              まず信頼を構築し、相手のニーズを深く理解してから提案する。この順番を守れば「売り込まなくても選ばれる事業所」になります。
            </div>
          `
        },
        {
          title: '影響力の6つの原則（チャルディーニ博士）',
          content: `
            <h2>人を動かす6つの原則</h2>
            <p>社会心理学者ロバート・チャルディーニ博士が提唱する、人の行動に影響を与える6つの原則です。</p>
            <div class="diagram-box">
              <div class="diagram-title">6つの原則と介護営業への応用</div>
              <table class="compare-table">
                <tr><th>原則</th><th>内容</th><th>介護営業での活用</th></tr>
                <tr><td><strong>返報性</strong></td><td>受けた恩は返したくなる</td><td>有益情報を先に提供する</td></tr>
                <tr><td><strong>希少性</strong></td><td>手に入りにくいほど欲しくなる</td><td>「残り枠○名」を正直に伝える</td></tr>
                <tr><td><strong>権威</strong></td><td>専門家の意見を信頼する</td><td>実績や資格をさりげなく伝える</td></tr>
                <tr><td><strong>一貫性</strong></td><td>約束を守る人を信頼する</td><td>報告を必ず期日通りに行う</td></tr>
                <tr><td><strong>好意</strong></td><td>好きな人の言葉は響く</td><td>笑顔、共感、相手を褒める</td></tr>
                <tr><td><strong>社会的証明</strong></td><td>皆がやっていると安心</td><td>「他のケアマネさんにも好評」</td></tr>
              </table>
            </div>
            <div class="example-box">
              <strong>「返報性」の実践例</strong><br>
              ケアマネに「困難ケースの情報」や「制度改正のポイント」などを先に提供する。すると「お返しにうちの利用者さんを紹介しよう」という心理が自然に働きます。<br><br>
              ただし、見返りを期待して与えるのではなく、純粋に相手の役に立つことが大切です。これが「絆徳」の考え方です。
            </div>
          `
        },
        {
          title: '集客フォーミュラとレポーティング',
          content: `
            <h2>集客フォーミュラ</h2>
            <p>集客に困ったときに考えるべき3つのポイントです。</p>
            <div class="formula-box">
              集客 = &Sigma; CR &times; V
              <small>施策の数 × 反応率 × 接触量</small>
            </div>
            <div class="diagram-box">
              <div class="diagram-title">3つのレバー</div>
              <div class="stat-row">
                <div class="stat-card"><div class="stat-num">CR</div><div class="stat-label">反応率を高める</div></div>
                <div class="stat-card"><div class="stat-num">V</div><div class="stat-label">接触量を増やす</div></div>
                <div class="stat-card yellow"><div class="stat-num">&Sigma;</div><div class="stat-label">施策の種類を増やす</div></div>
              </div>
            </div>
            <h3>レポーティングで改善を回す</h3>
            <p>定期会議で以下のKPIを確認し、PDCAを回しましょう。</p>
            <table class="compare-table">
              <tr><th>KPI</th><th>目標例</th><th>確認頻度</th></tr>
              <tr><td>稼働率</td><td>90%以上</td><td>毎日</td></tr>
              <tr><td>新規問い合わせ数</td><td>月5件以上</td><td>毎週</td></tr>
              <tr><td>見学→契約の転換率</td><td>70%以上</td><td>毎月</td></tr>
              <tr><td>退所率</td><td>月3%以下</td><td>毎月</td></tr>
              <tr><td>ケアマネ訪問数</td><td>月20件以上</td><td>毎週</td></tr>
            </table>
            <div class="key-point">
              <strong>PDCA会議のポイント</strong><br>
              1. <strong>C（Check）</strong>に最も時間をかける：何が良くて何が悪かったか<br>
              2. <strong>A（Adjust）</strong>で具体的な改善策を決める<br>
              3. 次回までの<strong>コミットメント</strong>（約束）を明確にする<br>
              4. 「無責」「免責」を排除する
            </div>
          `
        }
      ],
      quiz: [
        { question: '販売システムの3つのレベルに含まれないものは？',
          options: ['プロセス','プロシージャ','トーク','プロフィット'],
          correct: 3, explanation: '販売システムは「プロセス」「プロシージャ」「トーク」の3つで構成されます。' },
        { question: '新販売形態で最も時間をかけるべきステップは？',
          options: ['クロージング（10%）','プレゼン（20%）','ニーズ把握（30%）','信頼関係構築（40%）'],
          correct: 3, explanation: '新販売形態では信頼関係構築に40%の時間をかけます。信頼なくして成約はありません。' },
        { question: 'チャルディーニ博士の「返報性」を営業に活かす方法は？',
          options: ['しつこく訪問する','先に有益な情報提供をしてからPRする','割引する','競合の悪口を言う'],
          correct: 1, explanation: '先に相手に価値を提供することで、自然と「お返し」が生まれます。これが返報性の原則です。' },
        { question: '集客フォーミュラの「CR」が意味するものは？',
          options: ['コスト比率','反応率','顧客ランク','クレーム率'],
          correct: 1, explanation: 'CRはConversion Rate（反応率・転換率）です。同じ接触量でもCRが高ければ多くの契約に結びつきます。' },
        { question: 'デイサービスの販売プロセスで「体験利用」の次のステップは？',
          options: ['見学','認知','契約','問い合わせ'],
          correct: 2, explanation: '認知→問合せ→見学→体験→契約→定着の順です。体験の次は契約です。' },
        { question: '見学→契約の転換率が低い場合、改善すべきは主にどこですか？',
          options: ['チラシのデザイン','ケアマネへの訪問頻度','見学時の案内内容や施設の雰囲気','スタッフの人数'],
          correct: 2, explanation: '見学→契約の転換率が低い場合、見学時の対応や施設の印象に改善の余地がある可能性が高いです。' },
        { question: 'PDCA会議で最も時間をかけるべきステップは？',
          options: ['P（計画）','D（実行）','C（検証）','A（改善）'],
          correct: 2, explanation: 'C（Check）に最も時間をかけます。何が良くて何が悪かったかを数字で検証することが改善の出発点です。' },
        { question: '「社会的証明」の原則を活用したトーク例はどれですか？',
          options: ['「今だけの特別価格です」','「私の資格は○○です」','「他のケアマネさんにも好評です」','「来月から値上がりします」'],
          correct: 2, explanation: '「他のケアマネさんにも好評」は社会的証明です。周りの人がやっていると安心する心理を活用しています。' },
        { question: '稼働率のKPIはどの頻度で確認すべきですか？',
          options: ['年に1回','四半期に1回','毎月','毎日'],
          correct: 3, explanation: '稼働率は毎日確認するべきKPIです。日々の変動を把握し、即座に対応することが重要です。' },
        { question: '「ケアマネの仕事を理解し負担を減らす提案をする」はどの原則の活用ですか？',
          options: ['希少性','権威','好意と返報性','一貫性'],
          correct: 2, explanation: '相手の負担を減らすことは「好意」を持ってもらうことにつながり、同時に「返報性」も働きます。' }
      ]
    },

    // ========================================
    // モジュール4: 組織マネジメント（5ページ・10問）
    // ========================================
    {
      id: 'mgr-m4',
      number: 'ステップ 4',
      title: 'チームを強くする',
      description: '管理者の8つの仕事と、いい組織のつくり方',
      lessons: [
        {
          title: 'リーダーシップとマネジメントの違い',
          content: `
            <h2>リーダーとマネジャーの違い</h2>
            <p>ウォレン・ベニスによる有名な比較です。管理者には<strong>両方の力</strong>が求められます。</p>
            <div class="diagram-box">
              <div class="diagram-title">リーダー vs マネジャー</div>
              <table class="compare-table">
                <tr><th>マネジャー</th><th>リーダー</th></tr>
                <tr><td>管理する</td><td class="highlight-cell">革新する</td></tr>
                <tr><td>前例の模倣</td><td class="highlight-cell">常に自らがオリジナル</td></tr>
                <tr><td>維持する</td><td class="highlight-cell">発展させる</td></tr>
                <tr><td>短期的視点</td><td class="highlight-cell">長期的ビジョン</td></tr>
                <tr><td>「いつ、どのように」を問う</td><td class="highlight-cell">「何を、なぜ」を問う</td></tr>
                <tr><td>損得に目を向ける</td><td class="highlight-cell">善悪に目を向ける</td></tr>
                <tr><td>現状を受け入れる</td><td class="highlight-cell">現状に挑戦する</td></tr>
              </table>
            </div>
            <div class="key-point">
              <strong>ドラッカーの定義</strong><br>
              「マネジメントとは、<strong>物事を正しく行うこと</strong>」<br>
              「リーダーシップとは、<strong>正しい事を行うこと</strong>」<br><br>
              日々のオペレーション管理（マネジメント）と、チームの方向性を示す力（リーダーシップ）の両方が必要です。
            </div>
          `
        },
        {
          title: 'マネジャーの8つの責任',
          content: `
            <h2>マネジャーの8つの責任</h2>
            <p>「何とかしてやるのがマネジャー」── この心構えで取り組みましょう。</p>
            <div class="diagram-box">
              <div class="diagram-title">8つの責任</div>
              <table class="compare-table">
                <tr><th>#</th><th>責任</th><th>具体的な行動</th></tr>
                <tr><td>1</td><td><strong>業績向上</strong></td><td>目標設定、KPI監視、達成への働きかけ</td></tr>
                <tr><td>2</td><td><strong>業務改善</strong></td><td>改善、マニュアル化、仕組みづくり</td></tr>
                <tr><td>3</td><td><strong>稟議提言</strong></td><td>企画立案、書面での提案、上への提言</td></tr>
                <tr><td>4</td><td><strong>神経伝達</strong></td><td>報連相、レポーティング、情報共有</td></tr>
                <tr><td>5</td><td><strong>経営代理</strong></td><td>社長と現場の翻訳、権限内での決裁</td></tr>
                <tr><td>6</td><td><strong>対外渉外</strong></td><td>ケアマネ・行政・地域との関係構築</td></tr>
                <tr><td>7</td><td><strong>組織活性</strong></td><td>モチベーション向上、雰囲気づくり</td></tr>
                <tr><td>8</td><td><strong>人財育成</strong></td><td>採用、教育、配置、評価</td></tr>
              </table>
            </div>
            <div class="think-box">
              <strong>自己採点してみよう</strong><br>
              8つの責任を4段階（4:よくできている〜1:全くできていない）で自己評価してください。合計点が24点未満なら改善の余地があります。最も低い項目が、あなたの最大の伸びしろです。
            </div>
          `
        },
        {
          title: '組織図と職務分掌の5原則',
          content: `
            <h2>組織を最適化する5つの原則</h2>
            <h3>原則1：組織図で責任区分を定義する</h3>
            <p>部下の結果は上司の責任。部下全員の予算合計が上司の予算です。</p>
            <h3>原則2：職務分掌で責任範囲を共有する</h3>
            <p>雇用契約書や明確な文書で共有し、半年〜1年で内容を更新。</p>
            <h3>原則3：兼務・重複をさける</h3>
            <div class="diagram-box">
              <div class="diagram-title">避けるべき3つの状態</div>
              <div class="stat-row">
                <div class="stat-card red"><div class="stat-num">&#10007;</div><div class="stat-label">ひとつ飛ばし<br>(中間管理職の無視)</div></div>
                <div class="stat-card red"><div class="stat-num">&#10007;</div><div class="stat-label">役割重複<br>(責任が曖昧)</div></div>
                <div class="stat-card red"><div class="stat-num">&#10007;</div><div class="stat-label">ふたり上司<br>(指示が矛盾)</div></div>
              </div>
            </div>
            <h3>原則4：期待と報酬を明確にする</h3>
            <p>期待値を明文化し、給与テーブルを共有する。</p>
            <h3>原則5：密なフォローが必要</h3>
            <p>直属の部下は<strong>7名以内</strong>。放置にしない、定期的に話し合う。</p>
            <div class="key-point">
              <strong>介護事業所では特に重要</strong><br>
              シフト制で全員が同時に揃わないため、情報共有の仕組みが不可欠です。連絡ノート、申し送りシステム、定期ミーティングを整備しましょう。
            </div>
          `
        },
        {
          title: 'フォロワーシップと組織活性化',
          content: `
            <h2>フォロワーシップの3つの要件</h2>
            <p>良きリーダーになるために、まず良きフォロワーである必要があります。管理者自身も、経営者のフォロワーとしての役割があります。</p>
            <div class="diagram-box">
              <div class="diagram-title">フォロワーシップの3要件</div>
              <div class="stat-row">
                <div class="stat-card"><div class="stat-num">&#9312;</div><div class="stat-label">組織への<br>主体的貢献</div></div>
                <div class="stat-card"><div class="stat-num">&#9313;</div><div class="stat-label">リーダーへの<br>支援</div></div>
                <div class="stat-card green"><div class="stat-num">&#9314;</div><div class="stat-label">いつも<br>ポジティブ</div></div>
              </div>
            </div>
            <h3>6つのタイプのフォロワー</h3>
            <table class="compare-table">
              <tr><th></th><th>目標達成意欲が低い</th><th>目標達成意欲が高い</th></tr>
              <tr><td><strong>組織方針に合わせられる</strong></td><td>柔軟だが貢献は低い</td><td class="highlight-cell">早くリーダーにすべき人</td></tr>
              <tr><td><strong>自分の意見が強い</strong></td><td>組織で扱いに困る</td><td>優秀だが周りが苦労</td></tr>
              <tr><td><strong>意見が少ない</strong></td><td>基準を下げてしまう</td><td>縁の下の力持ち</td></tr>
            </table>
            <div class="key-point">
              <strong>管理者として意識すべきこと</strong><br>
              ・社長の悪口を部下の前で言わない（フォロワーとして最悪の行為）<br>
              ・問題があれば<strong>愚痴ではなく対策を提案</strong>する<br>
              ・部下に対しては「ポジティブな雰囲気」をつくる責任がある<br>
              ・「美点凝視」で相手の良いところに目を向ける
            </div>
          `
        },
        {
          title: '精鋭集団を目指す',
          content: `
            <h2>精鋭集団をつくる</h2>
            <p>仕事の厳しさがありつつも、仕事への意欲が高い職場を目指しましょう。</p>
            <div class="diagram-box">
              <div class="diagram-title">4つの組織タイプ</div>
              <table class="compare-table">
                <tr><th></th><th>仕事の厳しさ 低い</th><th>仕事の厳しさ 高い</th></tr>
                <tr><td><strong>意欲が高い</strong></td><td>仲良し集団（楽だが成長なし）</td><td class="highlight-cell">精鋭集団（目指すべき姿）</td></tr>
                <tr><td><strong>意欲が低い</strong></td><td>放置・無気力集団</td><td>酷使集団（離職が多い）</td></tr>
              </table>
            </div>
            <h3>精鋭集団になるためのステップ</h3>
            <ol>
              <li><strong>定期会議</strong>を開催し、PDCAを回す</li>
              <li>「<strong>課題の認識</strong>」と「<strong>改善の可視化</strong>」を促す</li>
              <li>コミットメント（約束）を明確にし、実行を検証する</li>
              <li>「<strong>無責</strong>」（誰も責任を負わない）「<strong>免責</strong>」（責任を免除される）を排除</li>
              <li>部下を<strong>信じて任せる</strong>（失敗は上司の責任という文化）</li>
            </ol>
            <div class="key-point">
              <strong>人財育成の基本</strong><br>
              「不足の認識」（課題の認識）がなければ、人は改善の必要性を感じません。定期会議でデータに基づくフィードバックを行い、「改善の可視化」と「改善の可能化」を進めましょう。
            </div>
          `
        }
      ],
      quiz: [
        { question: 'ドラッカーの定義で「マネジメント」とは？',
          options: ['正しい事を行うこと','物事を正しく行うこと','部下を管理すること','利益を最大化すること'],
          correct: 1, explanation: '「物事を正しく行うこと」がマネジメント。「正しい事を行うこと」がリーダーシップです。' },
        { question: 'マネジャーの8つの責任のうち「経営代理」が意味するものは？',
          options: ['目標設定とKPI管理','報連相と情報共有','社長と現場の翻訳、権限内での決裁','採用と教育'],
          correct: 2, explanation: '経営代理は「社長と現場の間に立ち、翻訳し、権限の範囲で判断・決裁する」責任です。' },
        { question: '組織の最適化原則で「避けるべき状態」に含まれないものは？',
          options: ['ひとつ飛ばし','役割重複','ふたり上司','権限委譲'],
          correct: 3, explanation: '権限委譲は推奨される行為です。避けるべきは「ひとつ飛ばし」「役割重複」「ふたり上司」です。' },
        { question: '直属の部下は何名以内が望ましいですか？',
          options: ['3名以内','5名以内','7名以内','10名以内'],
          correct: 2, explanation: '7名以内が望ましいです。これ以上になると丁寧なフォローが難しくなります。' },
        { question: '管理者が社長の悪口を部下の前で言うことは、何の観点から最悪の行為ですか？',
          options: ['マネジメント','リーダーシップ','フォロワーシップ','経費削減'],
          correct: 2, explanation: 'フォロワーシップの観点から最悪の行為です。管理者は経営者のフォロワーとして組織をポジティブに導く責任があります。' },
        { question: '「精鋭集団」の特徴はどれですか？',
          options: ['仕事が楽で皆仲良し','仕事は厳しいが意欲が高い','長時間労働が当たり前','社員の入れ替わりが激しい'],
          correct: 1, explanation: '精鋭集団は「仕事の厳しさがありつつ、意欲も高い」職場です。厳しさと意欲の両立が重要です。' },
        { question: '組織から排除すべき「無責」とはどういう状態ですか？',
          options: ['責任を果たした状態','誰も責任を負わない状態','責任が明確な状態','責任を分担した状態'],
          correct: 1, explanation: '「無責」は誰も責任を負わない状態です。コミットメントを明確にし、無責を排除することが組織の成長を促します。' },
        { question: 'フォロワーのタイプで「早くリーダーにすべき人」はどんな人ですか？',
          options: ['自分の意見が強く目標達成意欲も高い人','組織方針に合わせられ目標達成意欲が高い人','意見が少ないが目標達成意欲が高い人','組織方針に合わせられるが意欲が低い人'],
          correct: 1, explanation: '組織の方針に合わせつつ、目標達成意欲が高い人が「早くリーダーにすべき人」です。' },
        { question: '人財育成で「改善の必要性を感じてもらう」ために必要なものは？',
          options: ['厳しい叱責','不足の認識（課題の認識）','長時間の研修','外部コンサルタント'],
          correct: 1, explanation: '人は「不足の認識」がなければ改善の必要性を感じません。データに基づくフィードバックで課題を可視化しましょう。' },
        { question: '「美点凝視」の意味はどれですか？',
          options: ['問題点を厳しく指摘すること','相手の良いところに目を向けること','自分の良いところをアピールすること','美しいものを見て癒されること'],
          correct: 1, explanation: '美点凝視とは「相手の良いところに目を向けること」です。完璧な人はいません。お互いの強みを認め合う文化が大切です。' }
      ]
    },

    // ========================================
    // モジュール5: 経営者意識と仕事の最適化（5ページ・10問）
    // ========================================
    {
      id: 'mgr-m5',
      number: 'ステップ 5',
      title: '経営者マインドを身につける',
      description: '5つの責任と、未来から逆算する考え方',
      lessons: [
        {
          title: '責任と時間の関係',
          content: `
            <h2>責任のレベルで見る時間軸</h2>
            <p>高い責任を持つ人ほど、遠い未来を見ています。</p>
            <div class="diagram-box">
              <div class="diagram-title">立場による時間軸の違い</div>
              <div class="pyramid">
                <div class="pyramid-level" style="width:50%;background:#1a5276">経営者<br>数ヶ月〜数十年先</div>
                <div class="pyramid-level" style="width:75%;background:#2e86c1">マネジャー<br>数週間〜数年先</div>
                <div class="pyramid-level" style="width:100%;background:#5dade2;color:#fff">スタッフ<br>数日〜数ヶ月先</div>
              </div>
            </div>
            <h3>よくある「誤解」を解消する</h3>
            <table class="compare-table">
              <tr><th>立場</th><th>誤解の内容</th><th>本質</th></tr>
              <tr><td>経営者</td><td>「現場もやらなければ」</td><td>関わりすぎ。委任すべき</td></tr>
              <tr><td>経営者</td><td>「現場は知らなくていい」</td><td>放置しすぎ。信じて確認を</td></tr>
              <tr><td>管理者</td><td>「社長が細かいことを言う」</td><td>レポーティングの質を上げる</td></tr>
              <tr><td>管理者</td><td>「社長が助けてくれない」</td><td>責任の所在の誤解</td></tr>
              <tr><td>スタッフ</td><td>「上は現場をわかっていない」</td><td>コミュニケーションの質</td></tr>
            </table>
            <div class="key-point">
              <strong>管理者に求められること</strong><br>
              経営者の視点（長期）と現場の視点（短期）の<strong>両方を理解し、翻訳する</strong>こと。これが「経営代理」の責任です。
            </div>
          `
        },
        {
          title: 'タイムリバーサル（逆算思考）',
          content: `
            <h2>タイムリバーサル</h2>
            <p>「現在」を「未来」の<strong>原因</strong>にすること。未来から逆算して今日を決める考え方です。</p>
            <div class="diagram-box">
              <div class="diagram-title">フォーキャスト vs バックキャスト</div>
              <div class="flow-row">
                <div class="flow-step gray">過去</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step warn">現在</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step alt">未来</div>
              </div>
              <p style="margin-top:10px;font-size:13px">
                <strong>フォーキャスト</strong>（多くの人）：現在→未来（今の延長で未来を予測）<br>
                <strong>バックキャスト</strong>（成功者）：未来→現在（理想から逆算して今を決める）
              </p>
            </div>
            <h3>チェックポイント</h3>
            <ul>
              <li>今日やることは、理想の未来や目標達成の<strong>原因</strong>になるか？</li>
              <li>成果に直結すること以外は外せないか？</li>
              <li>去年と同じ仕事を同じスピードでやっていないか？（成長の証明がない）</li>
              <li>去年の<strong>半分以下の時間</strong>で完了できないか？</li>
            </ul>
            <div class="example-box">
              <strong>実践例</strong><br>
              「3年後に稼働率95%・スタッフ定着率90%の事業所にする」<br>
              → 1年後は？→ 半年後は？→ 今月は？→ <strong>今週は何をする？</strong>
            </div>
          `
        },
        {
          title: '5つの責任で経営者意識を醸成する',
          content: `
            <h2>経営者意識 5つの責任</h2>
            <p>この5つの責任を全員が持つことで、組織は格段に強くなります。</p>
            <div class="diagram-box">
              <div class="diagram-title">5つの責任（下から積み上げる）</div>
              <div class="pyramid">
                <div class="pyramid-level" style="width:40%;background:#1a5276">5. 決定責任</div>
                <div class="pyramid-level" style="width:55%;background:#2e86c1">4. 解決責任</div>
                <div class="pyramid-level" style="width:70%;background:#2e86c1">3. 説明責任</div>
                <div class="pyramid-level" style="width:85%;background:#5dade2;color:#fff">2. 結果責任</div>
                <div class="pyramid-level" style="width:100%;background:#85c1e9;color:#1a5276">1. 実行責任</div>
              </div>
            </div>
            <table class="compare-table">
              <tr><th>責任</th><th>内容</th><th>介護現場での例</th></tr>
              <tr><td>1. 実行</td><td>やるべきことをやりきる</td><td>ケアプラン通りのサービス提供</td></tr>
              <tr><td>2. 結果</td><td>求められる成果を達成</td><td>稼働率目標の達成</td></tr>
              <tr><td>3. 説明</td><td>状況を正直に説明できる</td><td>稼働率が下がった理由を報告</td></tr>
              <tr><td>4. 解決</td><td>問題を解決に導ける</td><td>稼働率改善の対策を立案・実行</td></tr>
              <tr><td>5. 決定</td><td>自分で判断し意思決定</td><td>新規受入れの可否を自ら判断</td></tr>
            </table>
            <div class="key-point">
              <strong>ポイント</strong><br>
              まず「1. 実行責任」から確実に。それができたら「2. 結果」「3. 説明」と、一段ずつステップアップしていきましょう。管理者は最低でも「4. 解決責任」まで持つことが期待されています。
            </div>
          `
        },
        {
          title: '欲求の質を高める（円形欲求モデル）',
          content: `
            <h2>仕事の原動力を理解する</h2>
            <p>人間の行動は、すべてニーズ（欲求）を満たすための行為です（アンソニー・ロビンズ）。</p>
            <div class="diagram-box">
              <div class="diagram-title">4つのレベルの欲求</div>
              <div class="pyramid">
                <div class="pyramid-level" style="width:45%;background:#27ae60">第四レベル：社会貢献</div>
                <div class="pyramid-level" style="width:60%;background:#2ecc71;color:#fff">第三レベル：進化成長</div>
                <div class="pyramid-level" style="width:80%;background:#f39c12;color:#fff">第二レベル：安定/変化/特別感/親密感</div>
                <div class="pyramid-level" style="width:100%;background:#e74c3c;color:#fff">第一レベル：苦痛回避/本能充足</div>
              </div>
            </div>
            <h3>各レベルの仕事の原動力</h3>
            <ul>
              <li><strong>第一（衝動的）</strong>：怒られたくない、お金がほしい</li>
              <li><strong>第二（矛盾的）</strong>：安定したい/変化したい、認められたい/つながりたい</li>
              <li><strong>第三（自己的）</strong>：自分を高めたい、能力を向上させたい</li>
              <li><strong>第四（利他的）</strong>：世の中を良くしたい、人の役に立ちたい</li>
            </ul>
            <div class="key-point">
              <strong>松下幸之助の言葉</strong><br>
              「世の為、人の為になり、ひいては自分の為になるということをやったら、必ず成就します」<br><br>
              第一・第二レベルの欲求は自然なもの。しかし仕事の原動力を<strong>第三・第四レベルに置く</strong>ことで、仕事の質も人生の質も向上します。
            </div>
          `
        },
        {
          title: '絆徳の経営 〜善因善果〜',
          content: `
            <h2>人生と仕事を最適化する</h2>
            <h3>Give & Take（アダム・グラント）</h3>
            <p>いま「与える人」こそ、幸せな成功者となる時代です。</p>
            <div class="diagram-box">
              <div class="diagram-title">3つのタイプ</div>
              <table class="compare-table">
                <tr><th>タイプ</th><th>特徴</th><th>結果</th></tr>
                <tr><td><strong>テイカー</strong></td><td>自分の利益を優先</td><td>短期的に得するが長期的に人が離れる</td></tr>
                <tr><td><strong>マッチャー</strong></td><td>損得のバランスを考える</td><td>公平だが突出した成果は出にくい</td></tr>
                <tr><td class="highlight-cell"><strong>ギバー</strong></td><td>惜しみなく与える</td><td>長期的に最も成功する</td></tr>
              </table>
            </div>
            <h3>善因善果（ぜんいんぜんか）</h3>
            <p>これからも、常に<strong>良いことを考え、人に良いことをしよう</strong>。与える人になろう。</p>
            <h3>刻石流水（こくせきりゅうすい）</h3>
            <p>「情を懸けしは<strong>水に流し</strong>、恩を受けしは<strong>石に刻むべし</strong>」<br>
            自分が与えたことは忘れ、受けた恩は忘れない。</p>
            <div class="key-point">
              <strong>絆徳の心得</strong><br>
              ・毎日、丁寧に明るい挨拶をする<br>
              ・感謝の心で「ありがとうございます」を10回以上言う<br>
              ・笑顔で話しかけることを心がける<br>
              ・美点凝視でネガティブなことを言わない<br>
              ・いるだけで雰囲気がよくなる存在を目指す<br><br>
              <strong>はなひろケアの経営理念</strong>は、この「絆徳の経営」の実践です。利益と道徳を両立し、スタッフとご利用者さまの幸せを追求し続けましょう。
            </div>
          `
        }
      ],
      quiz: [
        { question: '「タイムリバーサル」の意味は？',
          options: ['過去の失敗を振り返ること','現在を未来の原因にすること','時間を節約すること','残業を減らすこと'],
          correct: 1, explanation: 'タイムリバーサルとは「現在を未来の原因にすること」。理想の未来から逆算して今日を決めます。' },
        { question: '5つの責任のうち最も高いレベルは？',
          options: ['実行責任','結果責任','説明責任','決定責任'],
          correct: 3, explanation: '決定責任が最も高いレベルです。自分で判断し意思決定できることは経営者に最も近い責任です。' },
        { question: '管理者に最低限期待される責任のレベルは？',
          options: ['1. 実行責任','2. 結果責任','3. 説明責任','4. 解決責任'],
          correct: 3, explanation: '管理者は最低でも「4. 解決責任」まで持つことが期待されます。問題を認識するだけでなく、解決策を立案・実行する力が必要です。' },
        { question: '仕事の原動力として最も質が高い欲求は？',
          options: ['苦痛回避（怒られたくない）','安定（経済的に安定したい）','特別感（認められたい）','社会貢献（人の役に立ちたい）'],
          correct: 3, explanation: '第四レベルの社会貢献が最も質の高い欲求です。利他的な原動力は仕事の質と人生の質の両方を向上させます。' },
        { question: '「バックキャスト」思考とは？',
          options: ['過去の実績から未来を予測すること','理想の未来から逆算して今を決めること','現在の問題を分析すること','他社の成功例を真似ること'],
          correct: 1, explanation: 'バックキャストは理想の未来から逆算して今の行動を決める思考法です。成功者はこの考え方を持っています。' },
        { question: 'Give & Takeで長期的に最も成功するタイプは？',
          options: ['テイカー','マッチャー','ギバー','フリーライダー'],
          correct: 2, explanation: 'ギバー（与える人）が長期的に最も成功するとアダム・グラントの研究で示されています。ただし自己犠牲ではなく他者志向のギバーであることが重要です。' },
        { question: '「刻石流水」の意味は？',
          options: ['石に水を流すこと','自分が与えたことは水に流し、受けた恩は石に刻むべし','石のように固い意志を持つこと','水のように柔軟に対応すること'],
          correct: 1, explanation: '与えたことは忘れ（水に流し）、受けた恩は忘れない（石に刻む）という教えです。' },
        { question: '責任と時間の関係で、管理者が見るべき時間軸は？',
          options: ['数日〜数ヶ月先','数週間〜数年先','数ヶ月〜数十年先','今日の業務のみ'],
          correct: 1, explanation: '管理者は「数週間〜数年先」を見る時間軸が求められます。日々の業務だけでなく、中長期的な計画と改善を推進する役割です。' },
        { question: '「去年と同じ仕事を同じスピードでやっている」のは何を意味しますか？',
          options: ['安定した経営','確実な業務遂行','成長していない証拠','効率的な働き方'],
          correct: 2, explanation: 'タイムリバーサルの観点では、去年と同じペースは「成長していない証拠」です。常に改善し、より短い時間で高い成果を出すことを目指しましょう。' },
        { question: 'はなひろケアが目指す「絆徳の経営」とは？',
          options: ['利益を最優先にする経営','利益と道徳を両立しスタッフと利用者の幸せを追求する経営','コスト削減を徹底する経営','規模拡大を最優先にする経営'],
          correct: 1, explanation: '絆徳の経営は「利益と道徳を両立し、スタッフが幸せを実感しながら、ご利用者さまをより良い未来に導く」経営です。' }
      ]
    }
  ]
};
