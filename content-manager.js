// ===== リーダーの学び（管理者コース・親しみやすい版） =====
const MANAGER_COURSE = {
  title: 'リーダーの学び',
  subtitle: '&#x1F3AF; 数字とチームで、もっと良い事業所にしよう！',
  password: 'hanahiro2026',
  modules: [

    // ========================================
    // ステップ1: マネジャーってどんな仕事？（新規追加・5ページ・10問）
    // ========================================
    {
      id: 'mgr-m0',
      number: 'ステップ 1',
      title: 'マネジャーってどんな仕事？',
      description: 'リーダーとマネジャーの違い、管理者に求められる役割を知ろう',
      lessons: [
        {
          title: 'ボスとリーダーのちがい',
          content: `
            <h2>&#x1F451; あなたは「ボス」？ それとも「リーダー」？</h2>
            <p>管理者になったとき、こんなこと思いませんでしたか？</p>
            <div class="chat-bubble">
              <div class="speaker">&#x1F4AC; よくある不安</div>
              「管理者って何をすればいいんだろう…」<br>
              「指示を出すのが仕事？」<br>
              「自分がいないと現場が回らない…」
            </div>
            <p>まず、とても大事な区別を知りましょう。</p>
            <div class="diagram-box">
              <div class="diagram-title">ボス vs リーダー</div>
              <table class="compare-table">
                <tr><th>ボス</th><th>リーダー</th></tr>
                <tr><td>上から指示だけ出す</td><td class="highlight-cell">先頭に立って一緒に動く</td></tr>
                <tr><td>「やれ」と命令する</td><td class="highlight-cell">「一緒にやろう」と導く</td></tr>
                <tr><td>恐れで人を動かす</td><td class="highlight-cell">信頼で人を動かす</td></tr>
                <tr><td>自分の手柄にする</td><td class="highlight-cell">チームの成果を喜ぶ</td></tr>
                <tr><td>問題が起きたら部下を責める</td><td class="highlight-cell">問題が起きたら自分が責任を取る</td></tr>
              </table>
            </div>
            <div class="key-point">
              <strong>&#x1F4A1; 大切なこと</strong><br>
              管理者は「偉い人」じゃない。<strong>チームが成果を出せるように支える人</strong>です。<br><br>
              見えないところで努力しているのに「ボス」に見られてしまうこともある。だからこそ、意識的に「リーダー」としての振る舞いをすることが大切です。
            </div>
          `
        },
        {
          title: 'リーダーシップとマネジメントの違い',
          content: `
            <h2>&#x1F3AF; 管理者には2つの力が必要</h2>
            <p>「リーダーシップ」と「マネジメント」── よく聞く言葉ですが、実は全然違うものなんです。</p>
            <div class="diagram-box">
              <div class="diagram-title">リーダーシップ vs マネジメント</div>
              <table class="compare-table">
                <tr><th>マネジメント</th><th>リーダーシップ</th></tr>
                <tr><td>物事を<strong>正しく</strong>行う</td><td class="highlight-cell">物事を正しく行う</td></tr>
                <tr><td>管理・維持する</td><td class="highlight-cell">革新・発展させる</td></tr>
                <tr><td>「いつ・どのように」を考える</td><td class="highlight-cell">「何を・なぜ」を考える</td></tr>
                <tr><td>短期的な視点</td><td class="highlight-cell">長期的なビジョン</td></tr>
                <tr><td>現状を受け入れる</td><td class="highlight-cell">現状に挑戦する</td></tr>
                <tr><td>規則通りに行動する</td><td class="highlight-cell">より良い結果のために規則を変える</td></tr>
              </table>
            </div>
            <div class="example-box">
              <strong>&#x1F3E0; 介護の現場で言うと</strong><br>
              <strong>マネジメント</strong>：シフト管理、記録の確認、稼働率のチェック、ルールの徹底<br>
              <strong>リーダーシップ</strong>：「うちの事業所をこんな場所にしたい」というビジョンを示す、新しいケアの方法を提案する、チームの雰囲気をつくる
            </div>
            <div class="key-point">
              <strong>&#x2728; ドラッカーの言葉</strong><br>
              「マネジメントとは、<strong>物事を正しく行うこと</strong>」<br>
              「リーダーシップとは、<strong>正しい事を行うこと</strong>」<br><br>
              管理者には<strong>両方</strong>が必要です。日々のオペレーション管理（マネジメント）をしながら、チームの方向性を示す力（リーダーシップ）を持ちましょう。
            </div>
          `
        },
        {
          title: 'マネジャーの8つの仕事',
          content: `
            <h2>&#x1F4CB; 「なんとかしてやる」のがマネジャー</h2>
            <p>マネジメントの父ドラッカーは、マネジメントを<strong>「組織をして成果をあげさせること」</strong>と定義しました。</p>
            <p>では具体的に、管理者にはどんな仕事があるのでしょうか？</p>
            <div class="diagram-box">
              <div class="diagram-title">&#x1F3C6; マネジャーの8つの責任</div>
              <table class="compare-table">
                <tr><th>#</th><th>責任</th><th>具体的には</th></tr>
                <tr><td>1</td><td><strong>業績向上</strong></td><td>目標を決めて、数字を追いかけ、達成に導く</td></tr>
                <tr><td>2</td><td><strong>業務改善</strong></td><td>もっと良いやり方を考え、仕組みにする</td></tr>
                <tr><td>3</td><td><strong>稟議提言</strong></td><td>企画や提案を書面にして上に出す</td></tr>
                <tr><td>4</td><td><strong>神経伝達</strong></td><td>報連相、情報共有、社内の「神経」になる</td></tr>
                <tr><td>5</td><td><strong>経営代理</strong></td><td>社長の考えを現場に翻訳、現場の声を上に届ける</td></tr>
                <tr><td>6</td><td><strong>対外渉外</strong></td><td>ケアマネ・行政・地域との関係づくり</td></tr>
                <tr><td>7</td><td><strong>組織活性</strong></td><td>スタッフのやる気を引き出す、明るい職場をつくる</td></tr>
                <tr><td>8</td><td><strong>人財育成</strong></td><td>採用、教育、適材適所の配置、評価</td></tr>
              </table>
            </div>
            <div class="think-box">
              <strong>&#x1F4AD; 自己チェックしてみよう</strong><br>
              8つの責任を4段階（4:よくできている〜1:全くできていない）で自己評価してみてください。<br>
              最も低い項目が、あなたの<strong>最大の伸びしろ</strong>です。
            </div>
          `
        },
        {
          title: 'フォロワーシップ ─ 管理者にも必要な力',
          content: `
            <h2>&#x1F91D; 管理者にもフォロワーシップが必要</h2>
            <p>「管理者なのにフォロワー？」と思うかもしれません。でも管理者は<strong>経営者のフォロワー</strong>でもあるのです。</p>
            <div class="diagram-box">
              <div class="diagram-title">フォロワーシップの3要件</div>
              <div class="stat-row">
                <div class="stat-card"><div class="stat-num">&#9312;</div><div class="stat-label"><strong>主体的に<br>貢献する</strong></div></div>
                <div class="stat-card"><div class="stat-num">&#9313;</div><div class="stat-label"><strong>上司（社長）を<br>助ける</strong></div></div>
                <div class="stat-card green"><div class="stat-num">&#9314;</div><div class="stat-label"><strong>いつも<br>ポジティブ</strong></div></div>
              </div>
            </div>
            <h3>管理者としてやってはいけないこと</h3>
            <div class="chat-bubble">
              <div class="speaker">&#x1F6AB; これは絶対NG</div>
              ・部下の前で社長や会社の悪口を言う<br>
              ・問題があっても愚痴だけ言って対策を出さない<br>
              ・「上が決めたことだから」と投げやりに伝える
            </div>
            <div class="example-box">
              <strong>&#x2705; こうしよう</strong><br>
              ・問題があれば<strong>対策をセットで社長に提案</strong>する<br>
              ・会社の方針を<strong>自分の言葉に翻訳</strong>して部下に伝える<br>
              ・部下に対しては<strong>ポジティブな雰囲気</strong>をつくる責任がある
            </div>
            <div class="key-point">
              <strong>&#x2728; 覚えておこう</strong><br>
              「リーダーは、いつもポジティブでいる責任がある」<br><br>
              ネガティブになりそうなとき、会社の良くないところが気になるとき、ぐっとこらえて前向きな方向に導く。それが管理者に求められるスキルです。
            </div>
          `
        },
        {
          title: '精鋭集団を目指そう',
          content: `
            <h2>&#x1F4AA; どんな職場を目指す？</h2>
            <p>職場には4つのタイプがあります。あなたの事業所はどこにいますか？</p>
            <div class="diagram-box">
              <div class="diagram-title">4つの組織タイプ</div>
              <table class="compare-table">
                <tr><th></th><th>仕事のきびしさ 低い</th><th>仕事のきびしさ 高い</th></tr>
                <tr><td><strong>やる気が高い</strong></td><td>仲良し集団<br>（楽しいけど成長がない）</td><td class="highlight-cell">&#x1F31F; 精鋭集団<br>（目指すべき姿！）</td></tr>
                <tr><td><strong>やる気が低い</strong></td><td>放置・無気力集団<br>（何も起きない）</td><td>酷使集団<br>（離職が多い）</td></tr>
              </table>
            </div>
            <h3>精鋭集団になるには？</h3>
            <ol>
              <li><strong>定期会議</strong>でPDCAを回す（「なあなあ」にしない）</li>
              <li>課題を<strong>数字で見える化</strong>して共有する</li>
              <li>次の会議までの<strong>約束（コミットメント）</strong>を明確にする</li>
              <li>「誰も責任を取らない」状態を<strong>排除</strong>する</li>
              <li>失敗しても大丈夫という<strong>安心感</strong>をつくる（失敗は上司の責任）</li>
            </ol>
            <div class="key-point">
              <strong>&#x1F4A1; このコースでこれから学ぶこと</strong><br>
              ステップ2以降では、マネジャーとして必要な<strong>具体的なスキル</strong>を学びます。<br><br>
              ・お金の仕組み（売上・利益・稼働率）<br>
              ・経費のかしこい管理<br>
              ・選ばれる事業所になる集客の仕組み<br>
              ・チームを強くする組織づくり<br>
              ・経営者マインド<br><br>
              まずはこのステップ1で<strong>「管理者とは何か」</strong>の土台をしっかり固めましょう！
            </div>
          `
        }
      ],
      quiz: [
        { question: '「ボス」と「リーダー」の違いで正しいのは？',
          options: ['ボスは先頭に立って動く','リーダーは恐れで人を動かす','リーダーは信頼で人を動かす','ボスもリーダーも同じ'],
          correct: 2, explanation: 'リーダーは信頼で人を動かし、ボスは恐れで人を動かすと言われます。管理者は「リーダー」であるべきです。' },
        { question: 'ドラッカーの定義で「マネジメント」とは？',
          options: ['正しい事を行うこと','物事を正しく行うこと','部下に指示を出すこと','お金を管理すること'],
          correct: 1, explanation: '「物事を正しく行うこと」がマネジメント。「正しい事を行うこと」がリーダーシップです。' },
        { question: 'マネジャーの8つの責任のうち「神経伝達」が指すのは？',
          options: ['目標設定とKPI管理','報連相・情報共有・社内の神経になること','スタッフのモチベーション向上','ケアマネとの関係づくり'],
          correct: 1, explanation: '「神経伝達」は組織の中で情報を正確に伝える責任です。報連相やレポーティングが含まれます。' },
        { question: '「経営代理」の責任とは？',
          options: ['社長の代わりに出勤すること','社長の考えを現場に翻訳し、現場の声を上に届けること','経費の管理をすること','新しい事業を立ち上げること'],
          correct: 1, explanation: '経営者と現場の間に立ち、双方の「通訳」をすることが経営代理の責任です。' },
        { question: '管理者がやってはいけないことは？',
          options: ['部下に仕事を任せること','部下の前で社長や会社の悪口を言うこと','部下の失敗を自分の責任とすること','チームの目標を設定すること'],
          correct: 1, explanation: '部下の前で社長や会社の悪口を言うのはフォロワーシップの観点から最悪の行為です。チーム全体のモチベーションが下がります。' },
        { question: 'フォロワーシップの3要件に含まれないものは？',
          options: ['主体的に貢献する','上司を助ける','いつもポジティブ','上司の言うことにすべて従う'],
          correct: 3, explanation: '「すべて従う」のではなく、主体的に考えて行動し、上司を支え、前向きな姿勢を保つことが求められます。' },
        { question: '「精鋭集団」の特徴はどれ？',
          options: ['仕事が楽で皆仲良し','仕事はきびしいがやる気も高い','長時間労働が当たり前','上下関係がきびしい'],
          correct: 1, explanation: '精鋭集団は「きびしさとやる気の両立」がある職場です。ただきびしいだけでは酷使集団になってしまいます。' },
        { question: '職場を精鋭集団にするためにまず必要なことは？',
          options: ['給料を上げる','定期会議でPDCAを回し課題を数字で見える化する','スタッフを入れ替える','ルールを厳しくする'],
          correct: 1, explanation: '定期会議で課題を数字で共有し、約束を明確にして検証することが精鋭集団への第一歩です。' },
        { question: '介護の現場で「リーダーシップ」にあたるのは？',
          options: ['シフト管理','記録の確認','「うちの事業所をこんな場所にしたい」というビジョンを示すこと','稼働率のチェック'],
          correct: 2, explanation: 'ビジョンを示し方向性を決めるのがリーダーシップ。シフト管理や記録確認はマネジメントです。' },
        { question: '会社の方針に納得いかないとき、管理者がとるべき行動は？',
          options: ['部下に「上が決めたことだから」と伝える','部下と一緒に会社の愚痴を言う','社長に対策をセットで提案し、部下には自分の言葉で前向きに伝える','黙って従う'],
          correct: 2, explanation: '問題があれば対策をセットで提案。部下には自分の言葉で前向きに翻訳して伝えるのが管理者の役割です。' }
      ]
    },

    // ========================================
    // ステップ2: うちの事業所のお金の仕組み（旧ステップ1）
    // ========================================
    {
      id: 'mgr-m1',
      number: 'ステップ 2',
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
      number: 'ステップ 3',
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
                <div class="bar-row"><div class="bar-label">利益</div><div class="bar-track"><div class="bar-fill green" style="width:4%">3〜5%</div></div></div>
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
              <strong>5番</strong>：売上が300万円、営利3%（9万円）の事業所で5万円の経費削減をすると、利益は9万→14万円で<strong>56%増</strong>。同じ効果を売上増で得るには約170万円の売上増が必要。食材・光熱費高騰の今、経費削減の効果はさらに大きい。<br><br>
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
              <strong>はなひろの介護が目指す「絆徳の経営」</strong><br>
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
        { question: '月商300万円（営利3%）の事業所で5万円の経費削減をすると、利益はどう変化しますか？',
          options: ['約10%増加','約30%増加','約56%増加','約100%増加'],
          correct: 2, explanation: '利益9万円→14万円で約56%の増加です。売上で同じ効果を得るには約170万円の売上増が必要。経費削減の効果は非常に大きいのです。' },
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
      number: 'ステップ 4',
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
          title: 'はなひろの介護の販売プロセス',
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
      number: 'ステップ 5',
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
    // ステップ6: 責任を認識する（3ページ・10問）
    // ========================================
    {
      id: 'mgr-m6',
      number: 'ステップ 6',
      title: '責任を認識する',
      description: '責任・権限・能力のバランスと、非他責の文化をつくる',
      lessons: [
        {
          title: '仕事の「等価」原則',
          content: `
            <h2>&#x1F3AF; 責任・権限・能力のバランス</h2>
            <p>組織が機能するためには、「責任」「権限」「能力」の3つが釣り合っている必要があります。<br>
            <strong>バランスが崩れると、組織は機能しなくなる</strong>のです。</p>
            <div class="diagram-box">
              <div class="diagram-title">仕事の「等価」原則（3つの要素）</div>
              <table class="compare-table">
                <tr><th>要素</th><th>意味</th><th>介護現場での例</th></tr>
                <tr><td><strong>能力</strong></td><td>やり遂げるスキル・経験</td><td>記録の知識、介助の技術</td></tr>
                <tr><td><strong>責任</strong></td><td>任された役割・結果</td><td>シフト作成、利用者対応</td></tr>
                <tr><td><strong>権限</strong></td><td>判断・決定できる範囲</td><td>スタッフ配置、備品発注</td></tr>
              </table>
            </div>
            <h3>立場による三角形のサイズ</h3>
            <p>経営者・マネジャー・スタッフで三角形の大きさは異なりますが、<strong>3辺のバランスは同じ</strong>です。</p>
            <div class="diagram-box">
              <div class="diagram-title">立場が上がるほど三角形は大きくなる</div>
              <div class="pyramid">
                <div class="pyramid-level" style="width:50%;background:#1a5276">経営者<br>大きな責任・権限・能力</div>
                <div class="pyramid-level" style="width:75%;background:#2e86c1">マネジャー<br>中くらいの責任・権限・能力</div>
                <div class="pyramid-level" style="width:100%;background:#5dade2;color:#fff">スタッフ<br>担当領域の責任・権限・能力</div>
              </div>
            </div>
            <div class="key-point">
              <strong>&#x1F4A1; 大切なポイント</strong><br>
              ・「<strong>能力</strong>」が十分にあるから「<strong>責任</strong>」を任され、「<strong>権限</strong>」が与えられる<br>
              ・逆に、「責任」を任されることによって「能力」が開発されることもある<br>
              ・だから、<strong>ときおりチャレンジを与えてストレッチさせる</strong>ことも必要！
            </div>
          `
        },
        {
          title: '責任を任された時の4つの反応',
          content: `
            <h2>&#x1F504; 責任を任されたとき、人はどう反応する？</h2>
            <p>責任を任されたとき、人の反応は大きく4つに分かれます。<br>
            <strong>多くの組織では、責任への意識が最適化されていません。</strong></p>
            <div class="diagram-box">
              <div class="diagram-title">4つの反応マトリクス</div>
              <table class="compare-table">
                <tr>
                  <th></th>
                  <th>責任を負わない<br>（成果が出ない）</th>
                  <th>責任を負う<br>（成果が出る）</th>
                </tr>
                <tr>
                  <td><strong>ポジティブ</strong><br>（人を責めない）</td>
                  <td>免責／無責<br><small>責任は決まっているのに、まぬがれてしまう</small></td>
                  <td class="highlight-cell"><strong>非他責</strong> &#x2B50;<br><small>わたしに任せてくれてありがとう<br>精鋭集団に向かう姿勢</small></td>
                </tr>
                <tr>
                  <td><strong>ネガティブ</strong><br>（人を責める）</td>
                  <td>他責<br><small>人のせいにする</small></td>
                  <td>自責<br><small>自分を責めてしまう</small></td>
                </tr>
              </table>
            </div>
            <h3>目指すのは「非他責」</h3>
            <ul>
              <li><strong>非他責</strong>：ポジティブに責任を負う。「任せてくれてありがとう」の精神で結果を出す</li>
              <li><strong>他責</strong>：「〇〇さんのせい」「会社が悪い」と人のせいにして動かない</li>
              <li><strong>自責</strong>：自分を責めすぎてしまう。前向きなエネルギーが出ない</li>
              <li><strong>免責／無責</strong>：責任が決まっているのに「それは私の仕事じゃない」と逃げる</li>
            </ul>
            <div class="key-point">
              <strong>&#x1F3AF; リーダーの役割</strong><br>
              スタッフを「非他責」に導くには、<strong>指示と支援のバランス</strong>が重要です。<br>
              ・指示だけ &#x2192; 受け身になる（無責・他責）<br>
              ・支援だけ &#x2192; 基準があいまいになる（免責）<br>
              ・<strong>指示＋支援</strong>の両輪で、ポジティブに責任を引き受ける文化を育てましょう。
            </div>
          `
        },
        {
          title: '責任が偏る組織を変える',
          content: `
            <h2>&#x1F3DB; 非他責の文化をつくる4つの方法</h2>
            <p>多くの組織では、責任が偏っています。<br>
            <strong>責任を負わない仕組みや構造</strong>を排除することが、組織を強くする第一歩です。</p>
            <h3>① 「他責」の人材を採用しない</h3>
            <p>他責の人材は、組織を壊す要因になります。<br>
            面接の段階で「過去の失敗を誰のせいにしているか」を見極めることが大切です。</p>
            <h3>② 非他責の「模範」を示す</h3>
            <p>リーダー自身が非他責の姿勢を見せることが、文化の起点になります。</p>
            <ul>
              <li><strong>結果責任</strong>：求められる結果は出さなければならない</li>
              <li><strong>実行責任</strong>：やるべきことをやるのは本人の責任</li>
              <li>ただし、<strong>「それを守った上での失敗はしてもよい。失敗は上司の責任」</strong>という文化を醸成する</li>
            </ul>
            <h3>③ 「無責」「免責」状態を排除する</h3>
            <p>組織的に責任を負わなくてよい状態を作らないことが重要です。</p>
            <div class="example-box">
              <strong>具体的には</strong><br>
              <strong>定期会議</strong>にて、担当者に以下の2つを担ってもらうことが組織の成長を促す：<br>
              ・<strong>説明責任</strong>：状況を正直に説明する<br>
              ・<strong>解決責任</strong>：課題を解決に向けて動く
            </div>
            <h3>④ 部下を「信じて」任せる</h3>
            <p>会社の存続に関わるようなダメージにならないなら、ある程度の度量をもって、<strong>信じて任せる</strong>ことが部下の進化成長を促します。</p>
            <ul>
              <li>ただし、<strong>見えない部分での細かいサポート</strong>も忘れずに</li>
              <li>部下の<strong>意向</strong>（やりたいこと）や<strong>力量</strong>（できること）の見極めも重要</li>
            </ul>
            <div class="key-point">
              <strong>&#x1F4A1; 「信じて、信ぜず」</strong><br>
              信頼しているからこそ、任せる。<br>
              でも、信じきって丸投げするのではなく、<strong>見えないところで見守り、必要なサポートを入れる</strong>。<br>
              この絶妙なバランスが、非他責な組織を育てます。
            </div>
          `
        }
      ],
      quiz: [
        { question: '仕事の「等価」原則とは、どの3つの要素のバランスを指しますか？',
          options: ['責任・権限・能力', '理想・現実・手段', '報連相・指示・支援', '時間・お金・人材'],
          correct: 0, explanation: '仕事の等価原則は「責任」「権限」「能力」の3つが釣り合っていることを指します。どれかが欠けると組織は機能しません。' },
        { question: '経営者・マネジャー・スタッフの三角形について、正しいのは？',
          options: ['経営者だけが大きな三角形を持つ', 'サイズは違うが3辺のバランスは同じ', 'スタッフは責任を持たない', 'マネジャーは権限だけ大きい'],
          correct: 1, explanation: '立場によって三角形のサイズは違いますが、責任・権限・能力のバランス（形）は同じです。' },
        { question: '「能力」「責任」「権限」の関係として正しいのは？',
          options: ['権限を与えれば能力が伸びる', '責任を避けるほど能力が伸びる', '能力があるから責任を任され、権限が与えられる', '権限がないと責任も持てない'],
          correct: 2, explanation: '原則は「能力→責任→権限」の順。ただし、責任を任されることで能力が開発されることもあるので、ストレッチさせることも必要です。' },
        { question: '責任を任された時の4つの反応のうち、目指すべき姿は？',
          options: ['他責', '自責', '免責', '非他責'],
          correct: 3, explanation: '「非他責」はポジティブに責任を引き受ける姿勢。「任せてくれてありがとう」の精神で、精鋭集団に向かえます。' },
        { question: '「他責」とは、どんな反応ですか？',
          options: ['自分を責める', '人のせいにする', '責任から逃げる', '責任を引き受ける'],
          correct: 1, explanation: '「他責」は人のせいにしてしまう反応。ネガティブに責任を負わない状態です。' },
        { question: '「免責」状態とは？',
          options: ['責任が決まっているのに、まぬがれてしまう', '責任を自分で引き受ける', '責任を上司に押しつける', '責任が明確に分かれている'],
          correct: 0, explanation: '「免責」は、責任が決まっているにもかかわらず、まぬがれてしまう状態。組織の成長を妨げます。' },
        { question: '非他責の組織を作るために、まず採用しないほうがよい人材は？',
          options: ['能力不足の人材', '他責の人材', '自責が強い人材', '若手の人材'],
          correct: 1, explanation: '他責の人材は組織を壊す要因になります。採用段階で見極めることが大切です。' },
        { question: '非他責の「模範」を示すとき、醸成すべき文化は？',
          options: ['失敗は絶対に許さない', 'やるべきことを守った上での失敗は上司の責任', '失敗を隠す', '成功した人だけが評価される'],
          correct: 1, explanation: 'やるべきことをやった上での失敗は上司の責任。この文化が挑戦を生み、組織を強くします。' },
        { question: '「無責」「免責」状態を排除するために、定期会議で担ってもらうべき2つの責任は？',
          options: ['実行責任と結果責任', '説明責任と解決責任', '報告責任と連絡責任', '管理責任と指導責任'],
          correct: 1, explanation: '定期会議で「説明責任」と「解決責任」を担ってもらうことが、組織の成長を促します。' },
        { question: '「信じて任せる」実践で、忘れてはいけないことは？',
          options: ['まったく口出ししない', '全ての判断を部下に委ねる', '見えない部分での細かいサポート', '失敗したら厳しく叱る'],
          correct: 2, explanation: '信じて任せつつも、見えないところでの細かいサポートが必要。また、部下の意向や力量の見極めも重要なポイントです。' }
      ]
    },

    // ========================================
    // ステップ7: 経営者マインドを身につける（5ページ・10問）
    // ========================================
    {
      id: 'mgr-m5',
      number: 'ステップ 7',
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
              <strong>はなひろの介護の経営理念</strong>は、この「絆徳の経営」の実践です。利益と道徳を両立し、スタッフとご利用者さまの幸せを追求し続けましょう。
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
        { question: 'はなひろの介護が目指す「絆徳の経営」とは？',
          options: ['利益を最優先にする経営','利益と道徳を両立しスタッフと利用者の幸せを追求する経営','コスト削減を徹底する経営','規模拡大を最優先にする経営'],
          correct: 1, explanation: '絆徳の経営は「利益と道徳を両立し、スタッフが幸せを実感しながら、ご利用者さまをより良い未来に導く」経営です。' }
      ]
    },

    // ========================================
    // ステップ8: 組織と職務分掌（4ページ・10問）
    // ========================================
    {
      id: 'mgr-m7',
      number: 'ステップ 8',
      title: '組織と職務分掌',
      description: 'はなひろの組織構造と、役職ごとの責任・権限を理解する',
      lessons: [
        {
          title: 'はなひろの5階層と組織構造',
          content: `
            <h2>&#x1F3DB; 組織は「5つの階層」でできている</h2>
            <p>はなひろの組織は、大きく <strong>5つの階層</strong> に分かれています。それぞれの階層には違う責任と時間軸があります。</p>
            <div class="diagram-box">
              <div class="diagram-title">はなひろの5階層</div>
              <div class="pyramid">
                <div class="pyramid-level" style="width:40%;background:#c0392b">役員層<br><small>代表・専務</small></div>
                <div class="pyramid-level" style="width:55%;background:#d35400">事業推進マネジャー層</div>
                <div class="pyramid-level" style="width:70%;background:#b7950b">管理者層<br><small>事業所管理者</small></div>
                <div class="pyramid-level" style="width:85%;background:#1e8449">リーダー層</div>
                <div class="pyramid-level" style="width:100%;background:#1a5276;color:#fff">スタッフ層<br><small>介護・看護・相談員・調理・送迎 など</small></div>
              </div>
            </div>
            <h3>階層は「えらい / えらくない」ではない</h3>
            <p>階層の違いは、<strong>責任と時間軸の違い</strong>です。上の階層ほど先の未来を見て、広い範囲の責任を持ちます。</p>
            <table class="compare-table">
              <tr><th>階層</th><th>時間軸</th><th>主な役割</th></tr>
              <tr><td>役員</td><td>数ヶ月〜数十年</td><td>経営方針・最終意思決定</td></tr>
              <tr><td>事業推進マネジャー</td><td>数週間〜数年</td><td>経営代理・事業全体の推進</td></tr>
              <tr><td>管理者</td><td>数週間〜1年</td><td>事業所運営・稼働率管理</td></tr>
              <tr><td>リーダー</td><td>数日〜数ヶ月</td><td>現場運営・OJT・雰囲気づくり</td></tr>
              <tr><td>スタッフ</td><td>数日〜数週間</td><td>日々のケア・業務の実行</td></tr>
            </table>
            <div class="key-point">
              <strong>&#x1F4A1; ポイント</strong><br>
              どの階層にいても、<strong>非他責の姿勢</strong>（ポジティブに責任を引き受ける姿勢）が求められます。階層ごとの責任範囲を知ることで、「自分がすべきこと」と「自分の権限を超えること」の区別がつき、無駄なストレスや衝突が減ります。
            </div>
          `
        },
        {
          title: '経営層の職務分掌（役員〜管理者）',
          content: `
            <h2>&#x1F451; 経営に近い3階層の責任</h2>
            <p>経営層は、未来のビジョンを描き、組織全体の進化成長に責任を持ちます。</p>
            <h3>役員層（代表・専務）</h3>
            <div class="example-box">
              <strong>8つの責任：すべて</strong><br>
              <strong>5つの責任レベル：実行 → 結果 → 説明 → 解決 → 決定（全範囲）</strong><br><br>
              ・経営理念・ビジョン策定／中長期戦略立案<br>
              ・事業全体の統括、最終意思決定<br>
              ・金融機関・行政・重要取引先との対外対応<br>
              ・幹部育成・後継者育成<br>
              ・絆徳経営の実践と浸透
            </div>
            <h3>事業推進マネジャー層</h3>
            <div class="example-box">
              <strong>8つの責任：すべて / 責任レベル：実行〜解決</strong><br><br>
              ・事業所管理者のサポート・指導<br>
              ・業績向上施策の展開、経営と現場の翻訳<br>
              ・稼働率・収益改善の実行<br>
              ・管理者候補の育成<br>
              <em>※「経営代理」として機能する重要ポジション</em>
            </div>
            <h3>管理者層（事業所管理者）</h3>
            <div class="example-box">
              <strong>責任範囲：業績向上・業務改善・稟議提言・神経伝達・組織活性・人財育成</strong><br>
              <strong>責任レベル：実行 → 結果 → 説明 → 解決</strong><br><br>
              ・事業所運営全般、稼働率管理<br>
              ・スタッフ配置・シフト承認<br>
              ・運営基準遵守、実地指導対応<br>
              ・ケアマネ・家族・地域との連携<br>
              ・事業所の文化・雰囲気づくり
            </div>
            <div class="key-point">
              <strong>&#x1F3AF; 経営層に求められること</strong><br>
              現場の具体と経営の抽象を <strong>翻訳する力</strong>。上からのビジョンを現場の言葉に、現場の声を経営の視点に、両方向に翻訳して、組織を動かします。
            </div>
          `
        },
        {
          title: '現場層の職務分掌（リーダー〜スタッフ）',
          content: `
            <h2>&#x1F331; 現場こそが、はなひろの顔</h2>
            <p>利用者さまに直接サービスを届けるのは、リーダーとスタッフです。ここで生まれる「また来たい」「ありがとう」が、事業所の稼働率を支えています。</p>
            <h3>リーダー層</h3>
            <div class="example-box">
              <strong>責任範囲：業績向上・業務改善・神経伝達・組織活性・人財育成</strong><br>
              <strong>責任レベル：実行 → 結果 → 説明</strong><br><br>
              ・現場スタッフのリーダー、新人・既存スタッフのOJT<br>
              ・日々の勤務調整、業務分担<br>
              ・ケアの質管理<br>
              ・現場課題の吸い上げと改善提案<br>
              ・明るい雰囲気づくり（フォロワーシップの模範）
            </div>
            <h3>スタッフ層（7職種）</h3>
            <table class="compare-table">
              <tr><th>職種</th><th>主な役割</th></tr>
              <tr><td><strong>介護職員</strong></td><td>食事・入浴・排泄介助／レクリエーション／記録／ご家族対応</td></tr>
              <tr><td><strong>看護師</strong></td><td>健康管理／医療的ケア／医療機関連携／感染症対策</td></tr>
              <tr><td><strong>生活相談員</strong></td><td>相談対応／契約業務／ケアマネ連携／新規獲得／稼働率向上</td></tr>
              <tr><td><strong>機能訓練指導員</strong></td><td>機能訓練計画・実施／個別機能訓練加算支援</td></tr>
              <tr><td><strong>事務員</strong></td><td>介護報酬請求／経理／勤怠管理／書類管理</td></tr>
              <tr><td><strong>調理員</strong></td><td>調理・献立／衛生管理／食材発注／食事形態対応</td></tr>
              <tr><td><strong>送迎スタッフ</strong></td><td>利用者送迎／車両管理／安全運転／乗降介助</td></tr>
            </table>
            <div class="key-point">
              <strong>&#x1F4A1; それぞれの役割が欠かせない</strong><br>
              どの職種も、「利用者さまのより良い毎日をつくる」という同じゴールに向かっています。自分の担当だけでなく、<strong>他職種の役割と苦労を理解する</strong>ことが、強いチームをつくります。
            </div>
          `
        },
        {
          title: '職務分掌を活かす実践',
          content: `
            <h2>&#x1F4D6; 職務分掌は、組織を強くする「地図」</h2>
            <p>職務分掌を作って終わりではありません。日々の実務で活かすことで、組織が本当に強くなります。</p>
            <h3>管理者として活かす4つのポイント</h3>
            <ul>
              <li><strong>1. 採用・育成の基準</strong>：新しいスタッフに「この役職は何を期待されているか」を明確に伝える</li>
              <li><strong>2. 面談の指針</strong>：期末面談で「5つの責任レベル」を自己評価 → 上司評価 → ギャップを話し合う</li>
              <li><strong>3. 兼任・役割重複の防止</strong>：誰がどこまでやるかを明確にし、「責任の所在」を曖昧にしない</li>
              <li><strong>4. 権限委譲の基準</strong>：部下を「信じて任せる」ときも、範囲を明確にすれば安心して任せられる</li>
            </ul>
            <h3>「仕事の等価原則」を忘れない</h3>
            <div class="diagram-box">
              <div class="diagram-title">責任・権限・能力のバランス</div>
              <table class="compare-table">
                <tr><th>よくある失敗</th><th>本来の姿</th></tr>
                <tr><td>責任だけ重くて、権限がない</td><td class="highlight-cell">責任に見合う権限を与える</td></tr>
                <tr><td>権限はあるが、能力が追いついていない</td><td class="highlight-cell">ストレッチさせつつ育成する</td></tr>
                <tr><td>能力があるのに、責任を任せていない</td><td class="highlight-cell">チャレンジを与える</td></tr>
              </table>
            </div>
            <h3>定期会議で「説明責任」と「解決責任」を回す</h3>
            <p>職務分掌で定めた責任範囲について、定期会議で：</p>
            <ul>
              <li>各自が状況を <strong>説明</strong>する（「無責・免責」の排除）</li>
              <li>課題が出たら、解決策を <strong>提案・実行</strong>する</li>
              <li>次回までの <strong>コミットメント</strong>を共有する</li>
            </ul>
            <div class="key-point">
              <strong>&#x1F3AF; 精鋭集団への道</strong><br>
              職務分掌 ＋ 定期会議 ＋ 非他責の文化 = <strong>精鋭集団</strong>。<br>
              一人ひとりが自分の責任を認識し、ポジティブに引き受け、お互いを支え合う。はなひろが目指すのは、そんな組織です。
            </div>
            <div class="example-box">
              <strong>&#x1F4CB; 全社の職務分掌マップ</strong><br>
              全役職の詳細は、アプリトップの「&#x1F5FA;&#xFE0F; 組織マップ」からいつでも確認できます。印刷やPDF保存も可能です。
            </div>
          `
        }
      ],
      quiz: [
        { question: 'はなひろの組織は何階層で構成されている？',
          options: ['3階層', '4階層', '5階層', '6階層'],
          correct: 2, explanation: '役員層・事業推進マネジャー層・管理者層・リーダー層・スタッフ層の5階層です。' },
        { question: '階層が上がるほど何が変わる？',
          options: ['給料だけが変わる', '責任の重さと見る時間軸が変わる', 'えらさが変わる', 'やる仕事の種類が減る'],
          correct: 1, explanation: '階層は「えらい/えらくない」ではなく、責任範囲と時間軸の違いです。上の階層ほど先の未来を見て、広い範囲の責任を持ちます。' },
        { question: '管理者層が見るべき時間軸として適切なのは？',
          options: ['数日〜数週間先', '数週間〜1年先', '数ヶ月〜数十年先', '今日のみ'],
          correct: 1, explanation: '事業所管理者は「数週間〜1年先」を見据え、事業所運営と稼働率管理に責任を持ちます。' },
        { question: '「事業推進マネジャー」の中心的な役割は？',
          options: ['現場でケアをする', '経営と現場の翻訳・事業全体の推進', '書類整理をする', '新人のOJT'],
          correct: 1, explanation: '事業推進マネジャーは「経営代理」として機能し、経営層と事業所管理者の橋渡しをする重要ポジションです。' },
        { question: '事業所管理者の主な責任に含まれないのは？',
          options: ['稼働率管理', 'スタッフ配置', '最終的な経営方針の決定', '運営基準遵守'],
          correct: 2, explanation: '最終的な経営方針の決定は役員層の責任です。事業所管理者は事業所運営の範囲で意思決定します。' },
        { question: 'リーダー層に特に期待される役割は？',
          options: ['経営方針の策定', '現場のOJTと雰囲気づくり', '金融機関との交渉', '最終意思決定'],
          correct: 1, explanation: 'リーダーは現場スタッフの模範となり、OJTと明るい雰囲気づくりでフォロワーシップを発揮する役割です。' },
        { question: '生活相談員が特に担う責任は？',
          options: ['医療的ケア', '業績向上（新規獲得・稼働率向上）', '食事提供', '送迎業務'],
          correct: 1, explanation: '生活相談員は、新規利用者の獲得や稼働率向上の営業活動など「業績向上責任」を担う重要ポジションです。' },
        { question: '「仕事の等価原則」で大切にすべきバランスは？',
          options: ['責任・権限・能力', '収入・支出・貯金', '計画・実行・評価', '過去・現在・未来'],
          correct: 0, explanation: '責任・権限・能力の3つが釣り合っていることが、組織が機能する条件です。' },
        { question: '職務分掌を日々の実務に活かす使い方として適切なのは？',
          options: ['作ったら机にしまっておく', '面談・採用・育成の基準として使う', '新人だけに見せる', '経営層だけで共有する'],
          correct: 1, explanation: '職務分掌は、面談・採用・育成・権限委譲の基準として日常的に活用してこそ、組織を強くします。' },
        { question: '精鋭集団をつくる3つの要素の組み合わせは？',
          options: ['給料＋規則＋監視', '職務分掌＋定期会議＋非他責の文化', '拘束時間＋罰則＋階層', '個人成果主義＋競争＋ランキング'],
          correct: 1, explanation: '職務分掌で責任を明確に、定期会議で説明責任と解決責任を回し、非他責の文化を育てる。この3つが精鋭集団をつくります。' }
      ]
    }
  ]
};
