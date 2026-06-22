// ===== みんなの学び（全社員コース・親しみやすい版） =====
const STAFF_COURSE = {
  title: 'みんなの学び',
  subtitle: '&#x1F331; 一歩ずつ、一緒に成長しよう！',
  modules: [

    // ========================================
    // ステップ1: わたしたちの仕事ってすごい！
    // ========================================
    {
      id: 'staff-m1',
      number: 'ステップ 1',
      title: 'わたしたちの仕事ってすごい！',
      description: '介護の仕事が生み出す価値と、会社のお金の仕組みを知ろう',
      lessons: [
        {
          title: 'こんなにすごい！介護の仕事',
          content: `
            <h2>&#x1F33B; わたしたちの仕事、実はすごいんです</h2>
            <p>毎日のお仕事、おつかれさまです！</p>
            <p>「介護の仕事ってたいへんだよね…」とよく言われますよね。でも、ちょっと立ち止まって考えてみてください。</p>

            <div class="chat-bubble">
              <div class="speaker">&#x1F4AC; ちょっと想像してみて</div>
              もし、はなひろの介護がなかったら…<br>
              ・利用者さまは、一日中家でひとりぼっち？<br>
              ・ご家族は、仕事を辞めないといけない？<br>
              ・体の機能が、どんどん落ちてしまう？
            </div>

            <p>わたしたちの仕事があるから、こんな価値が生まれています。</p>

            <div class="diagram-box">
              <div class="diagram-title">わたしたちが生み出している4つの価値</div>
              <div class="stat-row">
                <div class="stat-card"><div class="stat-num">&#x1F60A;</div><div class="stat-label">利用者さまの<br>笑顔と安心</div></div>
                <div class="stat-card"><div class="stat-num">&#x1F4BC;</div><div class="stat-label">ご家族が<br>仕事を続けられる</div></div>
                <div class="stat-card green"><div class="stat-num">&#x1F4AA;</div><div class="stat-label">体の機能を<br>維持・改善</div></div>
                <div class="stat-card yellow"><div class="stat-num">&#x1F91D;</div><div class="stat-label">人とのつながり<br>生きがい</div></div>
              </div>
            </div>

            <div class="key-point">
              <strong>&#x2728; 大切なこと</strong><br>
              わたしたちの仕事は「お世話をする仕事」じゃない。<br>
              <strong>「利用者さまのより良い毎日を、一緒につくる仕事」</strong>です。
            </div>
          `
        },
        {
          title: '会社のお金って、どうなってるの？',
          content: `
            <h2>&#x1F4B0; 会社のお金の話をしよう</h2>
            <p>「お金の話はちょっと苦手…」という方も安心してください。かんたんに説明しますね。</p>

            <div class="chat-bubble">
              <div class="speaker">&#x1F914; こんな疑問、ありませんか？</div>
              「会社はもうかってるのかな？」<br>
              「利用者さんが来ると、いくらくらい入るの？」<br>
              「わたしの給料ってどこから出てるの？」
            </div>

            <h3>月の売上300万円の使い道</h3>
            <p>たとえば月の売上が300万円だとしたら、こんなふうに使われています。</p>
            <div class="diagram-box">
              <div class="diagram-title">&#x1F4CA; 月商300万円の内訳</div>
              <div class="bar-chart">
                <div class="bar-row"><div class="bar-label">みんなの給料</div><div class="bar-track"><div class="bar-fill red" style="width:65%">約195万円</div></div></div>
                <div class="bar-row"><div class="bar-label">建物・家賃</div><div class="bar-track"><div class="bar-fill yellow" style="width:12%">約36万円</div></div></div>
                <div class="bar-row"><div class="bar-label">食材・消耗品</div><div class="bar-track"><div class="bar-fill blue" style="width:10%">約30万円</div></div></div>
                <div class="bar-row"><div class="bar-label">車・光熱費</div><div class="bar-track"><div class="bar-fill blue" style="width:9%">約27万円</div></div></div>
                <div class="bar-row"><div class="bar-label">残り（利益）</div><div class="bar-track"><div class="bar-fill green" style="width:4%">約9〜15万円</div></div></div>
              </div>
            </div>

            <p>&#x1F631; <strong>300万円の売上があっても、手元に残る利益はたった9〜15万円</strong>。食材や光熱費の高騰で、今は利益率3〜5%が現実です。</p>

            <div class="key-point">
              <strong>&#x1F4A1; これ、どういうこと？</strong><br>
              利益率3%ということは、<strong>100万円のサービスを提供して、やっと3万円の利益</strong>。<br><br>
              もし1万円ムダ遣いしたら、その1万円の利益を取り戻すのに<strong>利用者さん約3人分の1日の売上</strong>が必要になります。<br><br>
              つまり <strong>「たった1万円のムダ」＝「利用者さん3人を1日お世話した利益が全部消える」</strong> ということ。<br>
              そう考えると、1万円って決して小さくないですよね。
            </div>
          `
        },
        {
          title: '稼働率ってなに？',
          content: `
            <h2>&#x1F4C8; 「稼働率」って言葉、聞いたことある？</h2>
            <p>管理者がよく言う「稼働率」。実はこれ、<strong>みんなのサービスの通知表</strong>みたいなものなんです。</p>

            <div class="formula-box">
              稼働率 = 今日の利用者さんの数 ÷ 定員 × 100%
              <small>たとえば定員18人の日に15人来たら → 83%</small>
            </div>

            <h3>稼働率が下がると、何が起きる？</h3>
            <div class="diagram-box">
              <div class="diagram-title">&#x1F4C9; 悪い流れ</div>
              <div class="flow-col">
                <div class="flow-step danger" style="width:85%">利用者さんが減る</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step danger" style="width:85%">売上が減る（でも家賃や給料は同じ）</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step danger" style="width:85%">利益が減る…赤字になることも</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step danger" style="width:85%">設備も買えない、賞与も厳しくなる</div>
              </div>
            </div>

            <h3>&#x1F64B; わたしたちにできること</h3>
            <ul>
              <li>利用者さまに<strong>「また来たい！」</strong>と思ってもらえるサービスをする</li>
              <li>お休みの連絡があったら、理由を聞いて管理者に共有する</li>
              <li>体調の変化に気づいたら、早めに報告する</li>
              <li>ご家族に「今日はこんな良いことがありましたよ」と伝える</li>
            </ul>

            <div class="key-point">
              <strong>&#x2728; 覚えておこう</strong><br>
              稼働率が高い ＝ <strong>たくさんの人に選ばれている証拠</strong>。<br>
              一人ひとりの毎日のサービスが、稼働率をつくっています。
            </div>
          `
        },
        {
          title: '「がんばってます！」だけじゃ足りない？',
          content: `
            <h2>&#x1F3C3; 「貢献」ってなんだろう？</h2>

            <div class="chat-bubble">
              <div class="speaker">&#x1F4AC; こんな経験ありませんか？</div>
              「わたしなりに頑張ってるのに、なんか評価されてない気がする…」<br>
              「毎日忙しいのに、認めてもらえない…」
            </div>

            <p>もしかしたら、<strong>「頑張っている方向」がズレている</strong>のかもしれません。</p>

            <h3>「貢献」とは？</h3>
            <p>&#x1F449; <strong>相手が望んでいる結果を出すこと</strong></p>
            <p>「自分なりに頑張ってます！」は、自分基準。<br>
            「相手が望んでいること」を理解して、それを実現するのが「貢献」です。</p>

            <div class="diagram-box">
              <div class="diagram-title">&#x1F504; うまくいく人のサイクル</div>
              <div class="flow-row">
                <div class="flow-step alt">相手が望む<br>貢献をする</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step">成果が出る</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step">評価される</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step warn">報酬UP!</div>
              </div>
            </div>

            <div class="example-box">
              <strong>&#x1F3E0; 介護の現場で考えると</strong><br>
              利用者さまが「自分の足で歩きたい」と望んでいるのに、効率を優先して車椅子ばかり使っていたら…それは「貢献」にはなっていないかもしれません。
            </div>

            <div class="think-box">
              <strong>&#x1F4AD; 考えてみよう</strong><br>
              あなたが担当している利用者さま、ご家族、チームが「望んでいること」は何ですか？
            </div>
          `
        }
      ],
      quiz: [
        { question: 'わたしたちの介護の仕事は、どんな仕事？',
          options: ['お世話をする仕事','利用者さまのより良い毎日を一緒につくる仕事','書類を書く仕事','送迎をする仕事'],
          correct: 1, explanation: '介護はお世話ではなく「利用者さまのより良い毎日を、一緒につくる仕事」です。この意識がサービスの質を変えます。' },
        { question: '月商300万円のデイサービスで、手元に残る利益はどのくらい？',
          options: ['約100万円','約60万円','約30万円','約9〜15万円'],
          correct: 3, explanation: '食材や光熱費の高騰で、今は利益率3〜5%が現実。300万円の売上でも利益は約9〜15万円です。だからこそ一つひとつのお金を大切に。' },
        { question: '「稼働率が高い」ということは、どういう意味？',
          options: ['スタッフが忙しい','たくさんの利用者さまに選ばれている','経費がかかっている','営業日数が多い'],
          correct: 1, explanation: '稼働率が高い＝多くの方に選ばれている証拠。みんなのサービスの質が稼働率をつくっています。' },
        { question: '「貢献」の正しい意味は？',
          options: ['自分なりに一生懸命がんばること','長い時間働くこと','相手が望んでいる結果を出すこと','言われたことだけやること'],
          correct: 2, explanation: '貢献＝相手が望む結果を出すこと。自分基準ではなく「相手基準」で考えることが大切です。' },
        { question: '稼働率を上げるために、スタッフにできることは？',
          options: ['利用者さまの数を自分で増やす','利用者さまに「また来たい」と思ってもらえるサービスをする','ケアマネに営業する','広告を出す'],
          correct: 1, explanation: '一番の営業は「現場のサービスの質」です。また来たいと思ってもらえれば、自然と稼働率は上がります。' },
        { question: '「お世話」と「貢献」の違いは？',
          options: ['お世話は楽で、貢献は大変','お世話は自分基準、貢献は相手基準','お世話はベテラン、貢献は新人','違いはない'],
          correct: 1, explanation: 'お世話は「自分がやってあげる」、貢献は「相手が望む結果を出す」。相手基準で考えることが大切です。' },
        { question: 'スタッフ一人ひとりの仕事が事業所に与える影響として正しいのは？',
          options: ['個人の仕事は売上に関係ない','一人の笑顔が利用者さまの継続利用につながる','個人ではなく管理者が全てを決める','関係なく給料はもらえる'],
          correct: 1, explanation: '一人ひとりのサービスが「また来たい」を生み、稼働率＝売上につながります。小さな積み重ねが事業所を支えます。' }
      ]
    },

    // ========================================
    // ステップ2: お金を大切にしよう
    // ========================================
    {
      id: 'staff-m2',
      number: 'ステップ 2',
      title: 'お金を大切にしよう',
      description: 'ムダに気づいて、みんなで節約しよう',
      lessons: [
        {
          title: 'よくある3つのカン違い',
          content: `
            <h2>&#x1F4B8; お金のカン違い、してない？</h2>
            <p>こんなこと、心のどこかで思ったことはありませんか？</p>

            <div class="chat-bubble">
              <div class="speaker">&#x1F914; カン違い その1</div>
              「会社のお金が減っても、わたしの給料は変わらないでしょ？」
            </div>
            <p>&#x274C; これ、カン違いです。会社のお金が減ると、設備も研修も賞与も厳しくなります。<strong>会社のお金 ＝ みんなの職場環境</strong>なんです。</p>

            <div class="chat-bubble">
              <div class="speaker">&#x1F914; カン違い その2</div>
              「会社のお金だから、ちょっとくらい使っても大丈夫でしょ」
            </div>
            <p>&#x274C; 自分のお財布じゃないと、つい気が大きくなりがち。でも、<strong>痛みのないお金こそ注意</strong>が必要です。</p>

            <div class="chat-bubble">
              <div class="speaker">&#x1F914; カン違い その3</div>
              「節約しても、わたしには何のメリットもないし…」
            </div>
            <p>&#x274C; 経費を節約できれば、その分が<strong>賞与・研修・設備</strong>に回せます。経費意識の高い人は評価されます。</p>

            <div class="key-point">
              <strong>&#x1F4A1; 覚えておこう</strong><br>
              会社のお金は「誰かのお金」じゃなくて「<strong>みんなのお金</strong>」。<br>
              一人ひとりの意識で、職場はもっと良くなります！
            </div>
          `
        },
        {
          title: 'これって本当に必要？',
          content: `
            <h2>&#x1F6D2; 買う前に考えよう「3つの箱」</h2>
            <p>何かを買うとき、3つの箱に分けて考えてみましょう。</p>

            <div class="diagram-box">
              <div class="diagram-title">&#x1F4E6; 3つの箱</div>
              <div class="stat-row">
                <div class="stat-card green"><div class="stat-num">&#x2705;</div><div class="stat-label"><strong>絶対必要！</strong><br>ないと困るもの</div></div>
                <div class="stat-card yellow"><div class="stat-num">&#x1F914;</div><div class="stat-label"><strong>あったらいいな</strong><br>なくても何とかなる</div></div>
                <div class="stat-card red"><div class="stat-num">&#x274C;</div><div class="stat-label"><strong>いらないかも</strong><br>冷静に考えると不要</div></div>
              </div>
            </div>

            <div class="example-box">
              <strong>&#x2705; 絶対必要</strong>：利用者さまの安全に関わる設備の修理、介護用品の補充<br>
              <strong>&#x1F914; あったらいいな</strong>：新しいデザインの食器（今のでも問題ない）<br>
              <strong>&#x274C; いらないかも</strong>：特に使い道のない備品、重複して買ってしまったもの
            </div>

            <div class="key-point">
              <strong>&#x1F4A1; 買う前のひとこと</strong><br>
              「これ、<strong>いま</strong>必要？ <strong>もう少し待てない</strong>？ <strong>別のもので代用できない</strong>？」<br>
              この3秒の問いかけが、大きな節約になります。
            </div>
          `
        },
        {
          title: '小さな節約、大きな力',
          content: `
            <h2>&#x1F4AA; チリも積もれば…すごいことに！</h2>

            <div class="chat-bubble">
              <div class="speaker">&#x1F4AC; たとえば…</div>
              ・トイレットペーパーを1日1ロール節約 → 年間で約1万円<br>
              ・電気のつけっぱなしを減らす → 年間で数万円<br>
              ・食材のロスを減らす → 年間で十万円以上<br><br>
              <strong>合計すると、賞与の原資になるかもしれない金額に！</strong>
            </div>

            <h3>&#x2705; 今日からできること</h3>
            <ul>
              <li>使わない部屋の<strong>電気・エアコンはOFF</strong></li>
              <li>備品は<strong>大切に、丁寧に</strong>使う</li>
              <li>食材は<strong>必要な分だけ</strong>使う</li>
              <li>消耗品は<strong>適量</strong>を心がける</li>
              <li>壊れたものは<strong>早めに報告</strong>（放置するとコストが膨らむ）</li>
            </ul>

            <div class="key-point">
              <strong>&#x2728; まとめ</strong><br>
              一人ひとりの「ちょっとした意識」が集まると、会社の利益を大きく守れます。<br>
              <strong>節約 ＝ ケチ</strong>じゃない。<strong>節約 ＝ みんなの未来への投資</strong>です！
            </div>
          `
        }
      ],
      quiz: [
        { question: '会社のお金について正しいのはどれ？',
          options: ['会社のお金が減っても自分には関係ない','会社のお金はみんなの職場環境につながっている','会社のお金は好きに使っていい','節約しても意味がない'],
          correct: 1, explanation: '会社のお金はみんなの職場環境に直結しています。賞与、設備、研修すべてに影響します。' },
        { question: '「3つの箱」で、「あったらいいな」に当てはまるのは？',
          options: ['利用者さまの安全設備','新しいデザインの食器（今のでも問題ない）','介護用品の補充','消火器の交換'],
          correct: 1, explanation: '今のものでも問題なく使えるなら「あったらいいな」に分類されます。優先順位をつけましょう。' },
        { question: '買い物の前に考えるべき3つの問いかけに含まれないのは？',
          options: ['いま必要？','もう少し待てない？','一番高いものを選ぼう','別のもので代用できない？'],
          correct: 2, explanation: '「いま必要か」「待てないか」「代用できないか」の3つです。高い安いではなく、必要性で判断しましょう。' },
        { question: '電気のつけっぱなしや食材のロスを減らすと、どんな効果がある？',
          options: ['特に効果はない','年間で大きな金額の節約になる','スタッフが疲れるだけ','利用者さまが不満を感じる'],
          correct: 1, explanation: 'チリも積もれば大きな金額に。合計すると賞与の原資になることもあります。' },
        { question: '正しいのはどれ？',
          options: ['節約＝ケチ','節約＝みんなの未来への投資','節約はリーダーだけの仕事','備品が壊れたら自分で直す'],
          correct: 1, explanation: '節約はケチではなく「みんなの未来への投資」。壊れた備品は放置せず報告しましょう。' },
        { question: '食材のロスを減らす工夫として良いのは？',
          options: ['大量に発注して余ったら捨てる','必要な量を見極めて発注する','在庫を気にせず毎回違うメニュー','残った食材は基本廃棄'],
          correct: 1, explanation: '必要な量を見極めて発注・調理することが大切。工夫すれば年間で大きな節約になります。' },
        { question: '「節約する文化」を職場に広げるために、個人ができることは？',
          options: ['節約しているアピールをする','こっそりケチる','気づいたことを具体的に提案・行動する','周りがやらないなら諦める'],
          correct: 2, explanation: '「このやり方どうですか？」と具体的な提案と行動で、自然と文化が広がります。' }
      ]
    },

    // ========================================
    // ステップ3: もっと喜んでもらうには？
    // ========================================
    {
      id: 'staff-m3',
      number: 'ステップ 3',
      title: 'もっと喜んでもらうには？',
      description: '利用者さま・ご家族に「選ばれる」サービスを考えよう',
      lessons: [
        {
          title: 'A→B→Cで考える',
          content: `
            <h2>&#x1F3AF; サービスの本質はとってもシンプル</h2>
            <p>わたしたちの仕事を、<strong>A→B→C</strong>で考えてみましょう。</p>

            <div class="diagram-box">
              <div class="diagram-title">A → B → C</div>
              <div class="flow-row">
                <div class="flow-step danger" style="min-width:100px"><strong>A</strong><br>困っている<br>利用者さま</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step" style="min-width:100px"><strong>B</strong><br>わたしたちの<br>サービス</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step alt" style="min-width:100px"><strong>C</strong><br>笑顔の<br>利用者さま</div>
              </div>
            </div>

            <div class="example-box">
              <strong>&#x1F3E0; はなひろの介護の場合</strong><br>
              <strong>A</strong>：お母さんが家に閉じこもりがち。娘さんは仕事と介護の両立で疲れている。<br>
              <strong>B</strong>：はなひろの介護のデイサービス（あたたかいスタッフ、楽しい活動、リハビリ）<br>
              <strong>C</strong>：お母さんが「今日も楽しかった！」と笑顔に。娘さんも安心して仕事ができる。
            </div>

            <div class="key-point">
              <strong>&#x1F4AD; 毎日の仕事で考えよう</strong><br>
              「この方の<strong>A</strong>（今の困りごと）は何だろう？」<br>
              「この方の<strong>C</strong>（理想の状態）は何だろう？」<br>
              この問いを持つだけで、ケアの視点が変わります。
            </div>
          `
        },
        {
          title: '「期待を超える」って？',
          content: `
            <h2>&#x2728; 「普通」から「感動」へ</h2>
            <p>サービスには4つのレベルがあります。</p>

            <div class="diagram-box">
              <div class="diagram-title">&#x1F3C6; サービスの4つのレベル</div>
              <div class="pyramid">
                <div class="pyramid-level" style="width:45%;background:#5a3e1b">&#x1F929; サプライズ<br>期待を超えた感動</div>
                <div class="pyramid-level" style="width:62%;background:#8a6930">&#x1F60A; あると嬉しい<br>ちょっとした気遣い</div>
                <div class="pyramid-level" style="width:80%;background:#c9952a">&#x2705; 当たり前<br>なくてはならないもの</div>
                <div class="pyramid-level" style="width:100%;background:#e8a849">&#x1F3E0; 基本<br>安全・安心の土台</div>
              </div>
            </div>

            <div class="example-box">
              <strong>はなひろの介護で考えると</strong><br>
              &#x1F3E0; <strong>基本</strong>：安全な環境、清潔な施設、安心の送迎<br>
              &#x2705; <strong>当たり前</strong>：丁寧な介助、栄養バランスのとれた食事<br>
              &#x1F60A; <strong>あると嬉しい</strong>：個別のリハビリ計画、季節のイベント<br>
              &#x1F929; <strong>サプライズ</strong>：誕生日のお祝い、「歩けるようになった！」のお祝い
            </div>

            <div class="think-box">
              <strong>&#x1F4AD; 考えてみよう</strong><br>
              最近、あなたが利用者さまに提供した「サプライズ」は何かありますか？<br>
              小さなことでOK。<strong>「期待を超える一歩」が感動と信頼を生みます。</strong>
            </div>
          `
        },
        {
          title: '最強の営業は「現場のサービス」',
          content: `
            <h2>&#x1F4E3; 営業は管理者の仕事？ ちがいます！</h2>

            <div class="chat-bubble">
              <div class="speaker">&#x1F4AC; よくある誤解</div>
              「営業はケアマネさんへの仕事でしょ？わたしには関係ないよ」
            </div>

            <p>実は、<strong>最強の営業は現場のサービスの質</strong>です。</p>

            <div class="diagram-box">
              <div class="diagram-title">&#x1F504; 良いサービスが生む好循環</div>
              <div class="flow-row">
                <div class="flow-step alt">良いサービス</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step">利用者さまの<br>笑顔</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step">ご家族・ケアマネ<br>に好評</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step warn">紹介・口コミ<br>で利用者増!</div>
              </div>
            </div>

            <h3>&#x1F64B; わたしたちにできる「営業」</h3>
            <ol>
              <li>利用者さまに「<strong>また来たい！</strong>」と思ってもらう</li>
              <li>休みがちな方に「<strong>お待ちしてますよ</strong>」と声かけする</li>
              <li>ご家族に「<strong>今日こんな素敵なことがありましたよ</strong>」と伝える</li>
              <li>見学の方が来たら、<strong>明るく挨拶して温かい雰囲気</strong>をつくる</li>
              <li>ケアマネさんが来たら、<strong>笑顔で声をかける</strong></li>
            </ol>

            <div class="key-point">
              <strong>&#x2728; 覚えておこう</strong><br>
              あなたの毎日のサービスが、<strong>はなひろの介護の最高の広告塔</strong>です。<br>
              チラシよりSNSより、現場の笑顔が一番伝わります。
            </div>
          `
        },
        {
          title: '「売上が増える」は「選ばれている」ということ',
          content: `
            <h2>&#x1F389; 売上って何だろう？</h2>
            <p>「売上」と聞くと、お金の話でちょっと構えてしまうかもしれません。<br>
            でも売上を別の言葉で言い換えると…</p>

            <div class="formula-box">
              売上 ＝ 選んでいただいた結果
              <small>利用者さま・ご家族・ケアマネさんに「ここがいい！」と選ばれた証拠</small>
            </div>

            <div class="chat-bubble">
              <div class="speaker">&#x1F4AC; つまり…</div>
              ・売上が伸びている ＝ たくさんの方に選ばれている &#x1F389;<br>
              ・売上が下がっている ＝ 何か改善が必要かも &#x1F914;
            </div>

            <h3>売上が伸びると…</h3>
            <div class="diagram-box">
              <div class="diagram-title">&#x1F504; いい流れ</div>
              <div class="flow-row">
                <div class="flow-step alt">選ばれる</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step">売上UP</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step">余裕ができる</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step warn">設備改善<br>賞与UP!</div>
              </div>
            </div>

            <div class="key-point">
              <strong>&#x2728; まとめ</strong><br>
              売上はお金の話じゃなくて、<strong>「ありがとう」の集計</strong>みたいなもの。<br>
              一人ひとりの丁寧なサービスが、たくさんの「ありがとう」を生みます。
            </div>
          `
        }
      ],
      quiz: [
        { question: 'ABC理論の「C」は何を表している？',
          options: ['会社の売上','サービスを受けた後のより良い状態','経費のこと','ケアマネへの営業'],
          correct: 1, explanation: 'C＝利用者さまがサービスを受けた後の「より良い状態」。笑顔で過ごせること、機能が維持されること等です。' },
        { question: 'サービスの4つのレベルで「期待を超えた感動」はどれ？',
          options: ['安全な環境','丁寧な介助','季節のイベント','誕生日のサプライズお祝い'],
          correct: 3, explanation: 'サプライズレベルの「期待を超えた感動」です。小さなことでも、予想外の嬉しい体験が感動を生みます。' },
        { question: '「最強の営業」は何？',
          options: ['チラシ配り','ケアマネへの訪問','SNSでの宣伝','現場のサービスの質'],
          correct: 3, explanation: '現場のサービスの質が最強の営業です。笑顔のサービスは口コミや紹介につながります。' },
        { question: '「売上」を別の言葉で言い換えると？',
          options: ['お金のこと','選んでいただいた結果','経営者の成績','スタッフの人数で決まるもの'],
          correct: 1, explanation: '売上は「選ばれた結果」であり「ありがとうの集計」です。' },
        { question: '見学の方が来たとき、スタッフにできることは？',
          options: ['特に何もしなくて良い','管理者に任せて自分の仕事をする','明るく挨拶して温かい雰囲気をつくる','見学者に営業トークをする'],
          correct: 2, explanation: '明るい挨拶と温かい雰囲気が一番大切。見学者は「ここの雰囲気、いいな」と感じて利用を決めます。' },
        { question: '利用者さまのご家族への対応で、一番大切なことは？',
          options: ['業務連絡だけを伝える','ご家族の不安に寄り添い、小さな変化も共有する','必要最低限の対応にする','ご家族は関係ないので対応しない'],
          correct: 1, explanation: 'ご家族の不安に寄り添い、小さな変化も伝えることが信頼につながります。ご家族も大切なお客さまです。' },
        { question: 'サービスの4つのレベルで、まず土台として徹底すべきは？',
          options: ['安全・衛生・清潔（当たり前のレベル）','期待通りのレベル','期待を超えるレベル','サプライズ'],
          correct: 0, explanation: 'まず土台の「安全・衛生・清潔」を徹底。その上で丁寧、期待を超える、サプライズと積み上げていきます。' }
      ]
    },

    // ========================================
    // ステップ4: いいチームをつくろう
    // ========================================
    {
      id: 'staff-m4',
      number: 'ステップ 4',
      title: 'いいチームをつくろう',
      description: 'フォロワーシップと、職場を明るくするコツ',
      lessons: [
        {
          title: '「いいチームメンバー」の3つの条件',
          content: `
            <h2>&#x1F91D; いいチームメンバーって、どんな人？</h2>
            <p>「リーダーじゃないから、わたしにはあまり関係ないかな…」と思っていませんか？</p>
            <p>実は、<strong>いいチームはいいメンバーがつくる</strong>のです。</p>

            <div class="diagram-box">
              <div class="diagram-title">&#x2B50; 3つの条件</div>
              <div class="stat-row">
                <div class="stat-card"><div class="stat-num">&#9312;</div><div class="stat-label"><strong>自分から<br>動ける</strong><br>主体的に貢献</div></div>
                <div class="stat-card"><div class="stat-num">&#9313;</div><div class="stat-label"><strong>リーダーを<br>助ける</strong><br>弱みを補う</div></div>
                <div class="stat-card green"><div class="stat-num">&#9314;</div><div class="stat-label"><strong>いつも<br>明るい</strong><br>笑顔でポジティブ</div></div>
              </div>
            </div>

            <div class="example-box">
              <strong>&#9312; 自分から動く</strong><br>
              「あ、タオルが足りなくなりそう」と気づいたら、言われる前に補充する。<br><br>
              <strong>&#9313; リーダーを助ける</strong><br>
              管理者が忙しそうなら「何かお手伝いできますか？」とひと声かける。<br><br>
              <strong>&#9314; いつも明るい</strong><br>
              朝、元気に「おはようございます！」と言うだけで、職場の空気が変わる。
            </div>

            <div class="key-point">
              <strong>&#x1F4A1; 「陽解釈（ようかいしゃく）」って？</strong><br>
              問題や困ったことを、<strong>「成長のチャンス」として前向きに捉える</strong>こと。<br>
              問題を無視するんじゃなくて、前向きに解決に向かう姿勢のことです。
            </div>
          `
        },
        {
          title: 'グチは何も生まない',
          content: `
            <h2>&#x1F6AB; グチと提案のちがい</h2>

            <div class="chat-bubble">
              <div class="speaker">&#x274C; こんな会話、していませんか？</div>
              「うちの会社、ほんとダメだよね〜」<br>
              「あの人、全然使えないよね」<br>
              「管理者は現場のこと分かってない」
            </div>

            <p>気持ちはわかります。でも…<strong>グチを言っても、何も解決しません</strong>。</p>

            <div class="diagram-box">
              <div class="diagram-title">&#x1F504; グチの悪循環</div>
              <div class="flow-col">
                <div class="flow-step danger" style="width:80%">グチを言う</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step danger" style="width:80%">まわりの気分が下がる</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step danger" style="width:80%">職場の雰囲気が悪くなる</div>
                <div class="flow-arrow">&#9660;</div>
                <div class="flow-step danger" style="width:80%">問題は解決しない。自分の評価も下がる</div>
              </div>
            </div>

            <h3>じゃあ、どうすればいい？</h3>
            <div class="example-box">
              <strong>&#x274C; グチ</strong>：「人が足りなくてムリ！」<br>
              <strong>&#x2705; 提案</strong>：「人手が足りない場面が多いので、<strong>業務の優先順位を整理しませんか？</strong>」
            </div>

            <div class="key-point">
              <strong>&#x2728; 魔法の変換</strong><br>
              「&#x274C; ○○がダメだ」→「&#x2705; ○○を、こう変えたらどうですか？」<br><br>
              この一言が言える人は、<strong>必ず評価されます</strong>。そして将来リーダーに選ばれます。
            </div>
          `
        },
        {
          title: '今日からできる10の習慣',
          content: `
            <h2>&#x1F33B; 「いい人」になるための10の習慣</h2>
            <p>特別な才能はいりません。毎日の<strong>小さな習慣</strong>で、職場はもっと明るくなります。</p>

            <div class="diagram-box">
              <div class="diagram-title">&#x2728; 毎日やってみよう</div>
              <table class="compare-table">
                <tr><th>#</th><th>習慣</th></tr>
                <tr><td>1</td><td>&#x1F44B; 元気に<strong>明るい挨拶</strong>をする</td></tr>
                <tr><td>2</td><td>&#x1F60A; <strong>笑顔</strong>を忘れない</td></tr>
                <tr><td>3</td><td>&#x1F64F; 「<strong>ありがとう</strong>」を毎日10回言う</td></tr>
                <tr><td>4</td><td>&#x1F442; 相手の話を<strong>うなづきながら聴く</strong></td></tr>
                <tr><td>5</td><td>&#x1F4AC; 人の<strong>いいところを見つけて伝える</strong></td></tr>
                <tr><td>6</td><td>&#x1F6AB; <strong>ネガティブなことを言わない</strong></td></tr>
                <tr><td>7</td><td>&#x1F4DD; 大事なことは<strong>メモ</strong>する</td></tr>
                <tr><td>8</td><td>&#x2615; ちょっとした<strong>気遣い</strong>を心がける</td></tr>
                <tr><td>9</td><td>&#x1F91D; 困っている人に<strong>声をかける</strong></td></tr>
                <tr><td>10</td><td>&#x1F48C; お世話になった人に<strong>感謝を伝える</strong></td></tr>
              </table>
            </div>

            <div class="key-point">
              <strong>&#x1F31F; 善因善果（ぜんいんぜんか）</strong><br>
              良いことを考え、人に良いことをする。それは巡り巡って自分に返ってきます。<br><br>
              <strong>「情けは人のためならず」</strong> ＝ 人に優しくすることは、めぐりめぐって<strong>自分のため</strong>になる、という意味です。
            </div>

            <div class="think-box">
              <strong>&#x1F4AC; 今日のチャレンジ</strong><br>
              お世話になった同僚や上司に、<strong>「ありがとう」を3回</strong>伝えてみよう！
            </div>
          `
        }
      ],
      quiz: [
        { question: 'いいチームメンバーの3つの条件に含まれないのは？',
          options: ['自分から動ける','リーダーを助ける','いつも明るい','上司の指示だけに従う'],
          correct: 3, explanation: '指示待ちではなく「自分から動く」「リーダーを助ける」「いつも明るい」の3つが条件です。' },
        { question: '「陽解釈」ってどういう意味？',
          options: ['問題を見て見ぬふりをする','問題を成長のチャンスとして前向きに捉える','常に笑顔でいること','上司の言うことを全部肯定する'],
          correct: 1, explanation: '問題を無視するのではなく「成長の機会」として前向きに解決に向かう姿勢です。' },
        { question: '職場で問題に気づいたとき、最も良い行動は？',
          options: ['同僚にグチを言う','SNSで愚痴を書く','「こう変えたらどうですか？」と提案する','黙って我慢する'],
          correct: 2, explanation: 'グチではなく提案を。この一言が言える人は必ず評価されます。' },
        { question: '「善因善果」の意味は？',
          options: ['良い原因をつくれば良い結果が生まれる','善い人はいつも損をする','善いことは後回しにする','善い結果のためなら何をしてもいい'],
          correct: 0, explanation: '良いことを考え、良いことをすれば、良い結果となって自分に返ってくるという教えです。' },
        { question: '「情けは人のためならず」の本当の意味は？',
          options: ['情けをかけると相手のためにならない','人に優しくすることは巡り巡って自分のためになる','情けは無駄だ','情けをかけすぎると甘えさせてしまう'],
          correct: 1, explanation: '人に優しくすることは、めぐりめぐって自分に返ってくるので「自分のため」になる、という意味です。' },
        { question: '新人スタッフが入ってきたとき、先輩として一番大切なことは？',
          options: ['厳しく教え込む','「いつでも聞いてね」と安心感を与える','自分の仕事に集中して放っておく','失敗をいちいち指摘する'],
          correct: 1, explanation: '新人は不安でいっぱい。「いつでも聞いてね」の一言と安心感が、定着と成長を大きく助けます。' },
        { question: 'チーム内でミスが起きたとき、正しい対応は？',
          options: ['犯人探しをする','責めずに原因と再発防止を話し合う','隠して報告しない','他の部署のせいにする'],
          correct: 1, explanation: 'ミスを責めるのではなく、原因と再発防止を話し合う文化が、強いチームをつくります。' }
      ]
    },

    // ========================================
    // ステップ5: もっと成長しよう！
    // ========================================
    {
      id: 'staff-m5',
      number: 'ステップ 5',
      title: 'もっと成長しよう！',
      description: '5つの責任と、仕事の原動力を考えよう',
      lessons: [
        {
          title: '仕事の「5つの責任」',
          content: `
            <h2>&#x1F3CB; 5つの責任ステップアップ</h2>
            <p>仕事には「5つの責任」があります。下から一段ずつ登っていきましょう。</p>

            <div class="diagram-box">
              <div class="diagram-title">&#x1F3C6; 5段階の責任ステップ</div>
              <div class="pyramid">
                <div class="pyramid-level" style="width:40%;background:#5a3e1b">5. 自分で決められる</div>
                <div class="pyramid-level" style="width:55%;background:#8a6930">4. 問題を解決できる</div>
                <div class="pyramid-level" style="width:70%;background:#c9952a">3. ちゃんと説明できる</div>
                <div class="pyramid-level" style="width:85%;background:#e8a849;color:#fff">2. 結果を出せる</div>
                <div class="pyramid-level" style="width:100%;background:#f5c16c;color:#5a3e1b">1. やるべきことをやりきる</div>
              </div>
            </div>

            <table class="compare-table">
              <tr><th>段階</th><th>どういうこと？</th><th>例</th></tr>
              <tr><td>1. やりきる</td><td>決めたことを最後までやる</td><td>記録を毎日書く、申し送りをする</td></tr>
              <tr><td>2. 結果を出す</td><td>求められる成果を達成する</td><td>利用者さまの笑顔、目標達成</td></tr>
              <tr><td>3. 説明する</td><td>状況を正直に説明できる</td><td>問題があったら隠さず報告</td></tr>
              <tr><td>4. 解決する</td><td>問題の解決策を提案・実行</td><td>改善案を自分から出せる</td></tr>
              <tr><td>5. 決める</td><td>自分で判断できる</td><td>緊急時に的確に対応できる</td></tr>
            </table>

            <div class="key-point">
              <strong>&#x1F4A1; まずはここから！</strong><br>
              「1. やるべきことをやりきる」── まずはここを完璧に。<br>
              それができたら次のステップへ。<strong>焦らず、一段ずつ</strong>登りましょう。
            </div>
          `
        },
        {
          title: '「未来から逆算」で考える',
          content: `
            <h2>&#x23F0; 今日の仕事を「未来の自分」のためにしよう</h2>
            <p>多くの人は「今日やること」だけを考えています。でも…</p>

            <div class="chat-bubble">
              <div class="speaker">&#x1F4AC; 成長する人の考え方</div>
              「3年後、わたしはどうなっていたい？」<br>
              「そのために、今年は何を頑張る？」<br>
              「じゃあ、今月は？今週は？<strong>今日は？</strong>」
            </div>

            <p>これが<strong>「未来から逆算する」</strong>考え方です。</p>

            <div class="diagram-box">
              <div class="diagram-title">&#x1F3AF; 未来から逆算</div>
              <div class="flow-row">
                <div class="flow-step alt">3年後の理想</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step">1年後の目標</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step">今月やること</div>
                <div class="flow-arrow">&#9654;</div>
                <div class="flow-step warn">今日やること</div>
              </div>
            </div>

            <h3>日常の仕事でチェック</h3>
            <ul>
              <li>今日やったこと、<strong>自分の成長につながってる？</strong></li>
              <li>去年と同じ仕事を、同じ時間でやってない？（＝成長してない証拠）</li>
              <li>もっと効率よくできるやり方はないかな？</li>
            </ul>

            <div class="key-point">
              <strong>&#x1F4DD; 「記憶に頼るな、記録に頼れ」</strong><br>
              やることはメモやリストに書き出す。頭で覚えようとすると漏れが出ます。「見える化」が大事！
            </div>
          `
        },
        {
          title: 'あなたの「原動力」は何？',
          content: `
            <h2>&#x1F525; 何のために働いてる？</h2>
            <p>ちょっと考えてみてください。あなたが仕事をしている一番の理由は何ですか？</p>

            <div class="diagram-box">
              <div class="diagram-title">&#x1F3D4; 仕事の原動力 4つのレベル</div>
              <div class="pyramid">
                <div class="pyramid-level" style="width:45%;background:#27ae60">&#x1F31F; 人の役に立ちたい</div>
                <div class="pyramid-level" style="width:62%;background:#2ecc71;color:#fff">&#x1F4C8; 自分を成長させたい</div>
                <div class="pyramid-level" style="width:80%;background:#f39c12;color:#fff">&#x1F465; 認められたい / 安定したい</div>
                <div class="pyramid-level" style="width:100%;background:#e74c3c;color:#fff">&#x1F4B0; お金がほしい / 怒られたくない</div>
              </div>
            </div>

            <p>どのレベルも<strong>悪いことじゃありません</strong>。「お金がほしい」も「怒られたくない」も自然な気持ちです。</p>

            <p>でも、<strong>上のレベルを原動力にできると</strong>、仕事がもっと楽しくなって、結果的にお金や評価もついてきます。</p>

            <div class="example-box">
              <strong>松下幸之助さんの言葉</strong><br>
              「世の為、人の為になることをやったら、必ず成就します」<br><br>
              <strong>介護の仕事は、まさに「人の役に立つ仕事」</strong>。<br>
              その実感を大切にすることが、一番の原動力になります。
            </div>
          `
        },
        {
          title: '同じ問題をくり返さないために',
          content: `
            <h2>&#x1F504; 同じ壁にぶつかってない？</h2>

            <div class="chat-bubble">
              <div class="speaker">&#x1F4AC; こんな経験、ない？</div>
              「どこの職場に行っても上司と合わない…」<br>
              「また同じミスをしてしまった…」<br>
              「いつも忙しくて余裕がない…」
            </div>

            <p>同じ問題をくり返しているとき、<strong>原因は「環境」じゃなくて「自分の中」</strong>にあるかもしれません。</p>

            <div class="diagram-box">
              <div class="diagram-title">&#x1F504; 他責 vs 自責</div>
              <table class="compare-table">
                <tr><th>&#x274C; 他のせいにする</th><th>&#x2705; 自分にできることを考える</th></tr>
                <tr><td>「会社がダメ」</td><td class="highlight-cell">「わたしに何ができるだろう？」</td></tr>
                <tr><td>「上司がわかってくれない」</td><td class="highlight-cell">「伝え方を変えてみよう」</td></tr>
                <tr><td>「忙しくてムリ」</td><td class="highlight-cell">「優先順位を見直そう」</td></tr>
              </table>
            </div>

            <div class="key-point">
              <strong>&#x2728; ヘレン・ケラーの言葉</strong><br>
              「今いる環境で、あなたの才能が輝かせられなければ、<br>
              どんな環境になっても、光り輝くことはありません」<br><br>
              <strong>まずは今いる場所で、できることから始めよう。</strong><br>
              その一歩が、必ず未来を変えます。
            </div>

            <div class="think-box">
              <strong>&#x1F4AD; 最後に考えてみよう</strong><br>
              今回学んだことの中で、<strong>明日から一つだけ実践すること</strong>を決めてみよう。<br>
              小さな一歩でOK！「やると決めたこと」を続けることが、一番の成長です。
            </div>
          `
        }
      ],
      quiz: [
        { question: '「5つの責任」で最初に意識すべきことは？',
          options: ['自分で判断・決定できる','問題を解決できる','やるべきことをやりきる','状況を説明できる'],
          correct: 2, explanation: 'まず「やるべきことをやりきる」から。焦らず一段ずつステップアップしましょう。' },
        { question: '「未来から逆算する」考え方のスタートは？',
          options: ['今日やることを決める','3年後の理想の自分を考える','上司に指示を聞く','去年と同じことをする'],
          correct: 1, explanation: 'まず理想の未来を描いてから、そこに向けて今日やることを決めるのが逆算思考です。' },
        { question: '仕事の原動力として、最も質が高いのは？',
          options: ['怒られたくないから頑張る','お金がほしいから頑張る','認められたいから頑張る','人の役に立ちたいから頑張る'],
          correct: 3, explanation: '「人の役に立ちたい」が最も質の高い原動力。介護の仕事はまさにこの実感を得られる仕事です。' },
        { question: '同じ問題をくり返すとき、まず考えるべきことは？',
          options: ['環境を変える（転職する）','誰かのせいにする','自分にできることを考える','我慢する'],
          correct: 2, explanation: '「自分にできることは何か」を考えることが解決の第一歩。環境のせいにしていると何も変わりません。' },
        { question: '「記憶に頼るな、○○に頼れ」。○○は？',
          options: ['経験','直感','記録','上司'],
          correct: 2, explanation: '記録（メモ、リスト）に頼ることで漏れを防げます。「見える化」が生産性アップの鍵です。' },
        { question: '「成長している」と感じる一番分かりやすいサインは？',
          options: ['給料が上がる','去年より短い時間で、より質の高い仕事ができる','残業が減らない','毎日同じ仕事を同じペースでこなす'],
          correct: 1, explanation: '「去年と同じ仕事をもっと早く・もっと質高く」できていれば、確実に成長している証拠です。' },
        { question: '毎日の仕事から「学び」を得るコツは？',
          options: ['できたことだけを記録する','うまくいかなかった時に「なぜ？」を考え、次に活かす','反省は時間の無駄','失敗はすぐ忘れる'],
          correct: 1, explanation: '「なぜうまくいかなかった？」「次はどうする？」を考える習慣が、毎日を学びに変えます。' }
      ]
    },
    {
      id: 'staff-m6',
      number: 'ステップ 6',
      title: '自分を整える',
      description: '心の状態の整え方と、いいところを見つける習慣',
      lessons: [
        {
          title: '「身・口・意」で気分は変えられる',
          content: `
            <h2>&#x1F31E; 自分の機嫌も、仕事のうち</h2>
            <p>毎日のお仕事、おつかれさまです。今日は「自分の心を整えること」のお話をしますね。</p>

            <div class="chat-bubble">
            <div class="speaker">&#x1F4AC; こんな日、ありませんか？</div>
            「朝からなんだか気分が乗らない…」<br>
            「ちょっと嫌なことがあって、引きずってる…」<br>
            でも、利用者さまはこちらの空気を敏感に感じ取ります。
            </div>

            <p>あなたの表情や声のトーンは、フロア全体に伝わります。だからこそ、自分の気分を整えることも、立派なお仕事の一つなんです。</p>

            <div class="key-point">
            <strong>&#x2728; 大事なこと</strong><br>
            気分は「自然にわいてくるもの」と思いがちですが、実は<strong>自分で立て直せる</strong>もの。<br>
            カギは <strong>「身（からだ）・口（ことば）・意（とらえ方）」</strong>の3つです。
            </div>

            <table class="compare-table">
            <tr><th>3つの整え方</th><th>どうやって？</th><th>仕事での一例</th></tr>
            <tr><td><strong>身</strong>（からだ）</td><td class="highlight-cell">姿勢・表情・呼吸を変える</td><td>背すじを伸ばす／口角を上げる／深呼吸する</td></tr>
            <tr><td><strong>口</strong>（ことば）</td><td class="highlight-cell">使う言葉を選ぶ</td><td>「よし、やろう」と声に出す</td></tr>
            <tr><td><strong>意</strong>（とらえ方）</td><td class="highlight-cell">出来事の意味づけを変える</td><td>「大変」&#x2192;「成長のチャンス」と思い直す</td></tr>
            </table>

            <p>とくに一番早く効くのが <strong>「身」＝からだの使い方</strong>。気分（Emotion）は、からだの動き（Motion）から生まれるからです。</p>

            <div class="diagram-box">
            <div class="diagram-title">&#x1F504; 気分が決まるながれ</div>
            <div class="flow-row">
            <div class="flow-step gray">出来事</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step">意味づけ</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step warn">気分</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step alt">行動</div>
            </div>
            </div>

            <div class="example-box">
            <strong>&#x1F6AA; 利用者さまの前に立つ前のひと工夫</strong><br>
            落ち込んだ日も、フロアや送迎車に向かう前に「背すじを伸ばす・口角を上げる・ひとつ深呼吸」。<br>
            たったこれだけで、最初の第一声が変わります。
            </div>

            <div class="key-point">
            <strong>&#x1F91D; はなひろの理念とつながる</strong><br>
            整った笑顔は、利用者さまの安心になります。<br>
            <strong>相手によいことをするから、長く一緒にいられる</strong>。まずは自分を整えることが、その第一歩です。
            </div>
          `
        },
        {
          title: '言葉と「陽解釈」で心を守る',
          content: `
            <h2>&#x1F5E3; 言葉を変えると、心が軽くなる</h2>
            <p>前のレッスンの「口（ことば）」を、もう少し深めてみましょう。</p>

            <div class="chat-bubble">
            <div class="speaker">&#x1F4AC; 口グセ、どっち？</div>
            「もう忙しくて、無理…」<br>
            「手のかかる利用者さんだなぁ…」<br>
            ふだん何気なく使っている言葉が、自分の気分をつくっています。
            </div>

            <p>出来事そのものは変えられません。でも、それをどう<strong>意味づけする</strong>かは、自分で選べます。これを「陽解釈（ようかいしゃく）」と呼びます。</p>

            <table class="compare-table">
            <tr><th>&#x274C; つい言いがちな言葉</th><th>&#x2705; 陽解釈に言い換え</th></tr>
            <tr><td>「忙しくて無理」</td><td class="highlight-cell">「何とかやってみよう」</td></tr>
            <tr><td>「手のかかる人」</td><td class="highlight-cell">「支援が必要な人」</td></tr>
            <tr><td>「また失敗した」</td><td class="highlight-cell">「次に活かせる経験ができた」</td></tr>
            <tr><td>「やらされてる」</td><td class="highlight-cell">「自分が役に立てている」</td></tr>
            </table>

            <div class="diagram-box">
            <div class="diagram-title">&#x1F504; 言葉は気持ちの増幅器</div>
            <div class="flow-row">
            <div class="flow-step">言葉を選ぶ</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step warn">とらえ方が変わる</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step alt">気分が変わる</div>
            </div>
            </div>

            <p>そしてもう一つ。心を守るうえで大切なのが <strong>「感謝」</strong>です。</p>

            <div class="key-point">
            <strong>&#x1F49B; ありがとうの反対は「当たり前」</strong><br>
            いつもそばにいてくれる仲間、来てくださる利用者さま。<br>
            「当たり前」だと思うと感謝は消え、「ありがたい」と思うと心が満たされます。
            </div>

            <div class="example-box">
            <strong>&#x1F440; 毎日ひとつ「ありがとう」</strong><br>
            感謝は、心の中にあるだけでは相手に伝わりません。<br>
            <strong>相手の目を見て「ありがとう」</strong>と声に出す。これだけで、職場の空気が温かくなります。
            </div>

            <div class="key-point">
            <strong>&#x1F91D; はなひろの理念とつながる</strong><br>
            はなひろが大切にするのは <strong>「感謝と感動」</strong>。<br>
            陽解釈で自分を守り、感謝を言葉にすることが、利用者さまの感動にもつながっていきます。
            </div>
          `
        },
        {
          title: '「いいところ探し」で心が軽くなる',
          content: `
            <h2>&#x1F50D; 同じ一日でも、見るところで気分が変わる</h2>
            <p>前のレッスンは「言葉」と「とらえ方」のお話でした。今度は、その手前にある <strong>「どこを見るか」</strong> を整えてみましょう。</p>

            <div class="chat-bubble">
            <div class="speaker">&#x1F4AC; 帰り道、どっちを思い出す？</div>
            「今日はあの申し送りが抜けた…利用者さんに少しきつく言われた…」<br>
            それとも<br>
            「あの方が笑ってくれた。後輩が手伝ってくれた。送迎も無事に終えられた」
            </div>

            <p>実は人は、放っておくと <strong>「足りないところ・うまくいかなかったところ」</strong> に目が向くようにできています。危険を避けて生きてきた、人間の自然なクセなんです。だから落ち込みやすいのは、あなたが弱いからではありません。</p>

            <div class="key-point">
            <strong>&#x2728; ポジティブな人・ネガティブな人の差じゃない</strong><br>
            実は「性格」の違いではなく、<strong>「焦点（どこを見るか）」の置きどころ</strong>の違いなんです。<br>
            見るところは、あとから選べます。これを <strong>「美点凝視（びてんぎょうし）」</strong>＝いいところ探し、と呼びます。
            </div>

            <table class="compare-table">
            <tr><th>&#x274C; あら探しのメガネ</th><th>&#x2705; いいところ探しのメガネ</th></tr>
            <tr><td>できなかった1つが気になる</td><td class="highlight-cell">できた9つに目を向ける</td></tr>
            <tr><td>「あの人、また同じミス」</td><td class="highlight-cell">「あの人、ここは本当に丁寧だな」</td></tr>
            <tr><td>自分の短所ばかり数える</td><td class="highlight-cell">自分の「できていること」を1つ認める</td></tr>
            <tr><td>不満がたまって心が重い</td><td class="highlight-cell">ありがたさが増えて心が軽い</td></tr>
            </table>

            <p>有名な俳優オードリー・ヘプバーンも、こんな言葉を残しています。「美しい瞳であるためには、他人の美点を探すこと」。いいところを探す目は、自分の表情まで穏やかにしてくれます。</p>

            <div class="diagram-box">
            <div class="diagram-title">&#x1F31F; 今日からの「いいところ1つずつ」</div>
            <div class="flow-row">
            <div class="flow-step">利用者さまの<br>いいところ</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step warn">仲間の<br>いいところ</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step alt">自分の<br>いいところ</div>
            </div>
            </div>

            <div class="example-box">
            <strong>&#x1F4DD; たとえば、こんな見つけ方</strong><br>
            ・利用者さま&#x2026;「今日も自分でお茶を飲もうとされた。その意欲がすてき」<br>
            ・仲間&#x2026;「事務の方が、いつも書類をきれいにそろえてくれている」<br>
            ・自分&#x2026;「バタバタしたけど、笑顔であいさつはできた」<br>
            見つけたら、できれば<strong>口に出して本人に伝えて</strong>みましょう。
            </div>

            <div class="think-box">
            <strong>&#x1F4AD; ひとつ注意</strong><br>
            「いいところを見る」のは、課題を見て見ぬふりすることではありません。<br>
            危ないこと・直すべきことはきちんと報告する。そのうえで、<strong>心は「いいところ」に置いて</strong>おく。両方できるのが、整った人です。
            </div>

            <div class="key-point">
            <strong>&#x1F91D; はなひろの理念とつながる</strong><br>
            相手のいいところを見つけて伝える人のまわりには、自然と笑顔が増えます。<br>
            お互いのよさを認め合えるから、長く一緒にいられる &#x2014;&#x2014; それが <strong>感謝と感動</strong>のある職場です。
            </div>
          `
        },
        {
          title: '小さな約束で、自信が育つ',
          content: `
            <h2>&#x1F331; 自分との「小さな約束」を守ろう</h2>
            <p>自信って、どうやって育つと思いますか? 大きな成功よりも、実は…</p>

            <div class="chat-bubble">
            <div class="speaker">&#x1F4AC; 自信の正体</div>
            自信は「自分との小さな約束を守れた回数」で育ちます。<br>
            毎日決めたことをコツコツ続けられた自分を、信じられるようになるんです。
            </div>

            <p>この「自分との小さな約束」を <strong>パワールーティーン（力の凡事）</strong> と呼びます。むずかしいことではなく、<strong>誰でもできる小さなこと</strong>でOKです。</p>

            <div class="diagram-box">
            <div class="diagram-title">&#x1F4AA; 自信が育つながれ</div>
            <div class="flow-row">
            <div class="flow-step">小さな約束を決める</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step warn">毎日つづける</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step">できた!</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step alt">自信になる</div>
            </div>
            </div>

            <h3>つづけるコツ</h3>
            <ul>
            <li><strong>3〜5個まで</strong>。欲ばらず、ぜったい守れる量にする</li>
            <li><strong>約3週間（21日）</strong>を目安に続けると、習慣になりやすい</li>
            <li>できた日は<strong>「よくやった!」と自分を褒める</strong>(これが一番大事)</li>
            </ul>

            <div class="example-box">
            <strong>&#x1F4DD; たとえば、こんなパワールーティーン</strong><br>
            ・出勤したら、まわりにひとこと自分からあいさつ<br>
            ・利用者さま一人に「今日のいいこと」を一つ伝える<br>
            ・退勤前に、自分のまわりをひと拭きして帰る<br>
            <em>（送迎・事務・相談・機能訓練など、どんな役割でも自分なりの一つでOK）</em>
            </div>

            <div class="think-box">
            <strong>&#x1F4AD; あなたのパワールーティーンを書いてみよう</strong><br>
            1. ____________________<br>
            2. ____________________<br>
            3. ____________________<br>
            小さくて大丈夫。まずは明日から一つ、続けてみましょう。
            </div>

            <div class="key-point">
            <strong>&#x1F91D; はなひろの理念とつながる</strong><br>
            小さな約束を守る人が増えるほど、チームは強くなります。<br>
            コツコツ続ける姿は、<strong>地域と共に育つ</strong>はなひろの土台そのものです。
            </div>
          `
        }
      ],
      quiz: [
        { question: '気分（Emotion）は、何から生まれると学びましたか?',
          options: ['生まれつきの性格','からだの動き（Motion）','その日の天気','他人の言葉'],
          correct: 1, explanation: '気分（Emotion）は、からだの動き（Motion）から生まれます。だから姿勢・表情・呼吸を変えるのが、心を整える一番早い方法です。' },
        { question: '心を整える「身・口・意」の組み合わせとして正しいのは?',
          options: ['身＝お金、口＝食事、意＝睡眠','身＝姿勢や表情、口＝使う言葉、意＝出来事のとらえ方','身＝体力、口＝声の大きさ、意＝記憶力','身＝制服、口＝あいさつ、意＝礼儀'],
          correct: 1, explanation: '身＝姿勢・表情・呼吸、口＝使う言葉、意＝出来事のとらえ方（意味づけ）。この3つで気分は立て直せます。' },
        { question: 'つらい出来事に対して、わたしたちが「選べる」ものは?',
          options: ['出来事そのものをなかったことにできる','出来事の意味づけ（とらえ方）を選べる','他人の気分を変えられる','過去をやり直せる'],
          correct: 1, explanation: '出来事そのものは変えられませんが、それをどう意味づけするか（陽解釈）は自分で選べます。言葉を変えると心が軽くなります。' },
        { question: '「ありがとう」の反対の気持ちは、次のうちどれ?',
          options: ['ごめんなさい','当たり前','さようなら','お願いします'],
          correct: 1, explanation: 'ありがとうの反対は「当たり前」。当たり前だと思うと感謝が消えます。毎日、相手の目を見て「ありがとう」を伝えましょう。' },
        { question: '「美点凝視（いいところ探し）」の説明として正しいのは?',
          options: ['性格が明るい人だけができる特別な才能','どこに焦点を置くかを選ぶこと。誰でも身につけられる習慣','課題や危ないことには目をつぶること','自分のいいところだけを見て、人は見ないこと'],
          correct: 1, explanation: 'ポジティブかネガティブかは性格ではなく「焦点の置きどころ」の違い。いいところに目を向けるのは、誰でも身につけられる習慣です。' },
        { question: '「いいところ探し」をするうえで、忘れてはいけない注意点は?',
          options: ['いいところを見るなら、危ないことや課題は報告しなくてよい','課題はきちんと報告したうえで、心はいいところに置いておく','悪いところを見つけたら、まず本人を責める','いいことは心の中で思うだけで十分で、伝えなくてよい'],
          correct: 1, explanation: 'いいところを見るのは、課題を見て見ぬふりすることではありません。危ないこと・直すべきことは報告し、そのうえで心はいいところに置く。両方できるのが整った人です。' },
        { question: 'パワールーティーン（自分との小さな約束）のコツとして正しいのは?',
          options: ['できるだけ難しく大きな目標にする','小さくてよい。3〜5個を約3週間続け、できた自分を褒める','一度に10個以上たくさん決める','できなかった日は自分を責める'],
          correct: 1, explanation: 'パワールーティーンは小さくてOK。3〜5個を約3週間（21日）続け、できた日は自分を褒める。これが自信になります。' }
      ]
    },
    {
      id: 'staff-m7',
      number: 'ステップ 7',
      title: '夢を描こう',
      description: 'ワクワクする未来の描き方と、自分も大切にする生き方',
      lessons: [
        {
          title: 'ワクワクする夢を描こう',
          content: `
            <h2>&#x2728; あなたの夢は、なんですか?</h2>
            <p>ステップ6で自分の心を整える練習をしました。今日はいちばん楽しいお話。あなたの「夢」を描いてみましょう。</p>

            <div class="chat-bubble">
            <div class="speaker">&#x1F4AC; 制約なしで考えてみて</div>
            「この仕事を通じて、どんな自分になりたい?」<br>
            「この職場を、どんな場所にしたい?」<br>
            正解はありません。ワクワクするほうへ、自由に描いてOKです。
            </div>

            <p>なぜ夢が大切なのか? それは、<strong>夢があると、頑張ろうとしなくても自然に頑張れる</strong>から。逆に、夢がないまま走り続けると、心が疲れてしまいます。</p>

            <table class="compare-table">
            <tr><th>&#x1F4AB; 夢があるとき</th><th>&#x1F4A6; 夢がないとき</th></tr>
            <tr><td class="highlight-cell">自然と前向きになれる</td><td>毎日がただ忙しいだけに感じる</td></tr>
            <tr><td class="highlight-cell">大変なことも乗り越えられる</td><td>同じ大変さでも辛く感じる</td></tr>
            <tr><td class="highlight-cell">成長と充実感がついてくる</td><td>燃え尽きてしまうことも</td></tr>
            </table>

            <div class="key-point">
            <strong>&#x1F4A1; 覚えておきたい言葉</strong><br>
            <strong>「夢なき努力は、辛いもの」</strong>。<br>
            反対に、夢を描くだけで、毎日の仕事が違う意味を持ちはじめます。
            </div>

            <p>「自分の大きな夢なんて、すぐには出てこない…」という方も、まったく心配いりません。</p>

            <div class="example-box">
            <strong>&#x1F91D; こんな夢も、立派な夢</strong><br>
            「チームのみんなが笑顔で働けるように支えたい」<br>
            「代表やリーダーが描くビジョンを、現場で応援したい」<br>
            &#x2014;&#x2014; 人やチームの夢を応援するのも、れっきとした素敵な夢です。
            </div>

            <div class="think-box">
            <strong>&#x1F4AD; あなたの夢を書いてみよう</strong><br>
            ・この仕事を通じて、どんな自分になりたい? ____________________<br>
            ・この職場をどうしたい? ____________________<br>
            そして、忘れないでください。人に尽くすあなた自身も<strong>満たされていい</strong>のです。自分の心が枯れては、人を笑顔にできません。
            </div>

            <div class="key-point">
            <strong>&#x1F91D; はなひろの理念とつながる</strong><br>
            夢を描き、自分も満たしながら人によいことをする。<br>
            だから長く一緒にいられる &#x2014;&#x2014; それが <strong>絆徳</strong>であり、<strong>地域と共に育つ</strong>はなひろの未来です。
            </div>
          `
        },
        {
          title: '「できる」と思うことから始まる',
          content: `
            <h2>&#x1F4AA; 夢への最初の一歩は、たったひとつ</h2>
            <p>「夢はあるけど、自分には無理かも…」。そう思うのは、とても自然なこと。でも、夢に近づく最初の一歩は、意外なほどシンプルなんです。</p>

            <div class="key-point">
            <strong>&#x2728; 最初のステップ</strong><br>
            それは、<strong>「できる」と思い込むこと</strong>。<br>
            いま実際にできていなくても、大丈夫。「できる」と思うことで、道はひらけていきます。
            </div>

            <p>同じ難しい場面に出会っても、人の反応は2通りに分かれます。やさしいたとえで見てみましょう。</p>

            <table class="compare-table">
            <tr><th></th><th>&#x1F31E; Aさん</th><th>&#x2614; Bさん</th></tr>
            <tr><td>口グセ</td><td class="highlight-cell">「どうやったらできる?」</td><td>「どうせ無理でしょ」</td></tr>
            <tr><td>探すもの</td><td class="highlight-cell">できる理由</td><td>できない理由</td></tr>
            <tr><td>その後</td><td class="highlight-cell">まず動いてみる</td><td>動かないままになる</td></tr>
            </table>

            <p>実力が同じでも、夢に近づけるのはAさんです。違いは才能ではなく、<strong>「できる理由を探したか、できない理由を探したか」</strong>だけ。</p>

            <div class="diagram-box">
            <div class="diagram-title">&#x1F504; 「できる」と思うと動き出す</div>
            <div class="flow-row">
            <div class="flow-step">「できる」と思う</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step warn">できる理由を探す</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step">行動する</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step alt">夢に近づく</div>
            </div>
            </div>

            <p>わたしたちはつい、「ない」ものに目を向けて、あきらめてしまいがちです。でも、その口グセを<strong>「ある」</strong>に言い換えるだけで、見える景色が変わります。</p>

            <table class="compare-table">
            <tr><th>&#x274C; つい思いがちな言葉</th><th>&#x2705; こう言い換える</th></tr>
            <tr><td>「時間がない」</td><td class="highlight-cell">「すきま時間に少しならある」</td></tr>
            <tr><td>「自分にはそんな力がない」</td><td class="highlight-cell">「やりながら身につけていける」</td></tr>
            </table>

            <div class="example-box">
            <strong>&#x1F3E0; 現場でのひとこと</strong><br>
            送迎・申し送り・相談援助・機能訓練・事務 &#x2014;&#x2014; どんな役割でも同じです。<br>
            「忙しくてできない」より、<strong>「ここだけなら工夫できる」</strong>と一歩を探す人が、少しずつ前に進みます。
            </div>

            <div class="key-point">
            <strong>&#x1F91D; はなひろの理念とつながる</strong><br>
            成功する人に共通するのは、おおげさな根拠より<strong>「自分はできる」という前向きさ</strong>。<br>
            その前向きさが、利用者さまへの<strong>感動</strong>を生む小さな工夫につながっていきます。
            </div>
          `
        },
        {
          title: '未来から逆算してみよう',
          content: `
            <h2>&#x1F52D; 未来から、今日を決めてみよう</h2>
            <p>夢を「いつか叶うといいな」で終わらせないコツがあります。それは、<strong>未来から逆に考えてみる</strong>こと。</p>

            <div class="chat-bubble">
            <div class="speaker">&#x1F4AC; ふだんの考え方</div>
            「今これができるから、次はこれ…」と、<strong>今から積み上げる</strong>のがふつうの考え方。<br>
            それも大切ですが、もうひとつのやり方があります。
            </div>

            <p>それが <strong>タイムリバーサル</strong>。先に「なりたい未来」を思い描き、そこから<strong>今日の一歩</strong>を逆算する考え方です。「いつか」ではなく「未来からの逆算」で、今日やることが見えてきます。</p>

            <div class="diagram-box">
            <div class="diagram-title">&#x1F501; 未来から今日へ、逆算する</div>
            <div class="flow-row">
            <div class="flow-step alt">3年後の<br>なりたい自分</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step warn">1年後は<br>どうなってたい?</div>
            <div class="flow-arrow">&#9654;</div>
            <div class="flow-step">じゃあ今日は<br>何を一つする?</div>
            </div>
            </div>

            <p>むずかしく考えなくて大丈夫。<strong>3年後に「こうなってたら嬉しいな」</strong>を、ひとつだけ思い浮かべてみましょう。</p>

            <table class="compare-table">
            <tr><th>&#x1F308; 3年後（こうなってたら嬉しい）</th><th>&#x1F331; 今日の小さな一歩</th></tr>
            <tr><td>後輩に頼られる存在になっている</td><td class="highlight-cell">今日、後輩にひとつ教える</td></tr>
            <tr><td>笑顔で挨拶される人になっている</td><td class="highlight-cell">今日、自分から先に挨拶する</td></tr>
            <tr><td>得意なことを一つ持っている</td><td class="highlight-cell">今日、気になることを一つ調べる</td></tr>
            </table>

            <div class="example-box">
            <strong>&#x1F4A1; アラン・ケイの言葉</strong><br>
            コンピュータの父と呼ばれるアラン・ケイは、こう言いました。<br>
            <strong>「未来を予測する最善の方法は、それを発明することだ」</strong>。<br>
            未来は、待つものではなく、今日の一歩から自分でつくっていくものなんですね。
            </div>

            <div class="think-box">
            <strong>&#x1F4AD; 書いてみよう（ひとつでOK）</strong><br>
            ・3年後、こうなってたら嬉しい: ____________________<br>
            ・そのために、今日できる小さな一歩: ____________________<br>
            大きくなくて大丈夫。たった一歩でも、未来につながっています。
            </div>

            <div class="key-point">
            <strong>&#x1F91D; はなひろの理念とつながる</strong><br>
            未来から逆算した小さな一歩を、一人ひとりが今日積み重ねる。<br>
            その積み重ねが、<strong>地域と共に育つ</strong>はなひろの明日をつくっていきます。
            </div>
          `
        },
        {
          title: '自分も満たすギバーになろう',
          content: `
            <h2>&#x1F49B; 人に尽くす人ほど、自分を大切に</h2>
            <p>わたしたちの仕事は、人によいことをする仕事。人に惜しみなく与える人を <strong>ギバー</strong> と呼びます。とても素敵な生き方です。でも、ここに大事な落とし穴があります。</p>

            <div class="chat-bubble">
            <div class="speaker">&#x1F4AC; こんなこと、ありませんか?</div>
            「人のためにと頑張りすぎて、気づいたらクタクタ…」<br>
            「自分のことは後回し。なんだか心がカラッぽ…」<br>
            やさしい人ほど、与えすぎて枯れてしまうことがあります。
            </div>

            <p>同じギバーでも、実は2つのタイプに分かれます。</p>

            <table class="compare-table">
            <tr><th></th><th>&#x1F31F; 満たされるギバー</th><th>&#x1F4A6; 枯れてしまうギバー</th></tr>
            <tr><td>与え方</td><td class="highlight-cell">人にも、自分にもよくする</td><td>自分を犠牲にして与え続ける</td></tr>
            <tr><td>自分の夢</td><td class="highlight-cell">ちゃんと持っている</td><td>後回しで考えない</td></tr>
            <tr><td>その先</td><td class="highlight-cell">長く笑顔で続けられる</td><td>疲れ果てて燃え尽きやすい</td></tr>
            </table>

            <div class="key-point">
            <strong>&#x2728; 大切なこと</strong><br>
            長く続けられるギバーは、<strong>人に与えながら、自分の喜びも見失わない人</strong>。<br>
            自分を犠牲にしすぎないことは、わがままではなく、<strong>長く人を笑顔にし続けるための知恵</strong>です。
            </div>

            <p>では、どうすれば自分も満たされるのでしょう。ヒントになるのが <strong>IKIGAI（生きがい）</strong> という考え方。世界でも知られるようになった、日本生まれの言葉です。次の4つが重なるところを意識してみましょう。</p>

            <div class="diagram-box">
            <div class="diagram-title">&#x1F338; 生きがいの4つの輪</div>
            <div class="stat-row">
            <div class="stat-card yellow"><div class="stat-num">&#x2764;</div><div class="stat-label"><strong>大好きなこと</strong><br>やっていて楽しい</div></div>
            <div class="stat-card green"><div class="stat-num">&#x1F44D;</div><div class="stat-label"><strong>得意なこと</strong><br>無理なくできる</div></div>
            <div class="stat-card"><div class="stat-num">&#x1F91D;</div><div class="stat-label"><strong>世界が必要とすること</strong><br>誰かの役に立つ</div></div>
            <div class="stat-card yellow"><div class="stat-num">&#x1F33E;</div><div class="stat-label"><strong>お金になること</strong><br>価値として届く</div></div>
            </div>
            </div>

            <p>この4つが重なる仕事は、人の役に立ちながら、自分の心も満たされます。たとえば &#x2014;&#x2014; 人と関わるのが<strong>大好き</strong>で、それが<strong>得意</strong>で、まわりに<strong>必要とされ</strong>、ちゃんと<strong>仕事として成り立つ</strong>なら、それはあなたの生きがいになります。</p>

            <div class="think-box">
            <strong>&#x1F4AD; 自分のことを書いてみよう</strong><br>
            ・わたしの大好きなこと: ____________________<br>
            ・わたしの得意なこと: ____________________<br>
            ・それが誰かの役に立っている場面: ____________________<br>
            4つが少しでも重なる仕事を、意識して増やしてみましょう。
            </div>

            <div class="key-point">
            <strong>&#x1F91D; はなひろの理念とつながる</strong><br>
            相手によいことをして、自分にもよいことになる。だから無理なく長く続けられる。<br>
            自分が満たされてこそ人を笑顔にできる &#x2014;&#x2014; それが <strong>絆徳</strong>であり、<strong>感謝と感動</strong>を生むはなひろの土台です。
            </div>
          `
        }
      ],
      quiz: [
        { question: '夢を描くことが大切な、いちばんの理由は?',
          options: ['夢があると、頑張ろうとしなくても自然に頑張れるから','夢があると周りに自慢できるから','夢がないと評価が下がるから','夢を描くのが会社のルールだから'],
          correct: 0, explanation: '夢があると、無理しようとしなくても自然に前を向けます。逆に「夢なき努力は辛いもの」で、夢がないまま走り続けると燃え尽きやすくなります。' },
        { question: '「自分の大きな夢がすぐに出てこない」とき、どう考えるとよい?',
          options: ['夢がない人は成長できないと諦める','無理やり大きな夢をでっち上げる','チームや代表のビジョンを応援するのも立派な夢','夢のことは考えないようにする'],
          correct: 2, explanation: '自分の夢が描きにくいときは、人やチームの夢を応援するのも素敵な夢です。心配する必要はありません。' },
        { question: '夢に近づくための「最初の一歩」として学んだのは?',
          options: ['完璧な計画を立ててから動くこと','「できる」と思い込むこと','できない理由をすべて書き出すこと','誰かに許可をもらうこと'],
          correct: 1, explanation: '最初のステップは「できる」と思い込むこと。いまできていなくても、「できる」と思うことで道がひらけていきます。' },
        { question: '同じ実力のAさんとBさん。夢に近づけるのはどちら?',
          options: ['「できない理由」を探して動かないBさん','「できる理由」を探してまず動くAさん','どちらも同じで差はない','運がよかったほう'],
          correct: 1, explanation: '実力が同じでも、できる理由を探してまず動くAさんが夢に近づきます。違いは才能ではなく「どちらの理由を探したか」です。' },
        { question: '「タイムリバーサル（未来からの逆算）」の考え方として正しいのは?',
          options: ['今できることだけを積み上げていく','なりたい未来を先に描き、そこから今日の一歩を決める','過去の失敗をやり直す','他人の未来を予測する'],
          correct: 1, explanation: 'タイムリバーサルは、先に「なりたい未来」を描き、そこから逆算して今日の一歩を決める考え方。むずかしく考えず、ひとつでOKです。' },
        { question: '長く笑顔で続けられる「満たされるギバー」の特徴はどれ?',
          options: ['自分を犠牲にして与え続ける','自分の夢は後回しにする','人に与えながら、自分の喜びも見失わない','見返りを必ず要求する'],
          correct: 2, explanation: '満たされるギバーは、人によいことをしながら自分の喜びも大切にします。自分を犠牲にしすぎると疲れ果て、燃え尽きやすくなります。' },
        { question: 'IKIGAI（生きがい）で、重なると生きがいになるとされた4つの輪に当てはまるのはどれ?',
          options: ['お金・地位・名誉','大好きなこと・得意なこと・世界が必要とすること・お金になること','我慢・努力・根性・気合','速さ・正確さ・量・安さ'],
          correct: 1, explanation: '大好きなこと・得意なこと・世界が必要とすること・お金になること、この4つが重なる仕事は、人の役に立ちながら自分の心も満たされます。自分が満たされてこそ人を笑顔にできます。' }
      ]
    }
  ]
};
