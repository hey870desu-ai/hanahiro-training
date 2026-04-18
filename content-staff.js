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
              もし、はなひろケアがなかったら…<br>
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

            <h3>売上100円の使い道</h3>
            <p>もし売上が100円入ったとしたら、こんなふうに使われています。</p>
            <div class="diagram-box">
              <div class="diagram-title">&#x1F4CA; 売上100円の内訳</div>
              <div class="bar-chart">
                <div class="bar-row"><div class="bar-label">みんなの給料</div><div class="bar-track"><div class="bar-fill red" style="width:65%">約65円</div></div></div>
                <div class="bar-row"><div class="bar-label">建物・家賃</div><div class="bar-track"><div class="bar-fill yellow" style="width:12%">約12円</div></div></div>
                <div class="bar-row"><div class="bar-label">食材・消耗品</div><div class="bar-track"><div class="bar-fill blue" style="width:8%">約8円</div></div></div>
                <div class="bar-row"><div class="bar-label">車・光熱費</div><div class="bar-track"><div class="bar-fill blue" style="width:8%">約8円</div></div></div>
                <div class="bar-row"><div class="bar-label">残り（利益）</div><div class="bar-track"><div class="bar-fill green" style="width:7%">約5〜7円</div></div></div>
              </div>
            </div>

            <p>&#x1F631; <strong>100円のうち、手元に残るのはたった5〜7円</strong>なんです。</p>

            <div class="key-point">
              <strong>&#x1F4A1; だからこそ</strong><br>
              1,000円のムダ遣いを取り戻すには、<strong>20,000円分の売上</strong>（利用者さん約2人の1日分）が必要。<br>
              「たった1,000円」が、実はすごく大きいんです。
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
        { question: 'デイサービスの売上100円のうち、残る利益はどのくらい？',
          options: ['約30円','約20円','約15円','約5〜7円'],
          correct: 3, explanation: '利益はわずか5〜7円。だからこそ、一つひとつのお金を大切にする意識が重要です。' },
        { question: '「稼働率が高い」ということは、どういう意味？',
          options: ['スタッフが忙しい','たくさんの利用者さまに選ばれている','経費がかかっている','営業日数が多い'],
          correct: 1, explanation: '稼働率が高い＝多くの方に選ばれている証拠。みんなのサービスの質が稼働率をつくっています。' },
        { question: '「貢献」の正しい意味は？',
          options: ['自分なりに一生懸命がんばること','長い時間働くこと','相手が望んでいる結果を出すこと','言われたことだけやること'],
          correct: 2, explanation: '貢献＝相手が望む結果を出すこと。自分基準ではなく「相手基準」で考えることが大切です。' },
        { question: '稼働率を上げるために、スタッフにできることは？',
          options: ['利用者さまの数を自分で増やす','利用者さまに「また来たい」と思ってもらえるサービスをする','ケアマネに営業する','広告を出す'],
          correct: 1, explanation: '一番の営業は「現場のサービスの質」です。また来たいと思ってもらえれば、自然と稼働率は上がります。' }
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
          correct: 1, explanation: '節約はケチではなく「みんなの未来への投資」。壊れた備品は放置せず報告しましょう。' }
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
              <strong>&#x1F3E0; はなひろケアの場合</strong><br>
              <strong>A</strong>：お母さんが家に閉じこもりがち。娘さんは仕事と介護の両立で疲れている。<br>
              <strong>B</strong>：はなひろケアのデイサービス（あたたかいスタッフ、楽しい活動、リハビリ）<br>
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
              <strong>はなひろケアで考えると</strong><br>
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
              あなたの毎日のサービスが、<strong>はなひろケアの最高の広告塔</strong>です。<br>
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
          correct: 2, explanation: '明るい挨拶と温かい雰囲気が一番大切。見学者は「ここの雰囲気、いいな」と感じて利用を決めます。' }
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
          correct: 1, explanation: '人に優しくすることは、めぐりめぐって自分に返ってくるので「自分のため」になる、という意味です。' }
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
          correct: 2, explanation: '記録（メモ、リスト）に頼ることで漏れを防げます。「見える化」が生産性アップの鍵です。' }
      ]
    }
  ]
};
