// ===== はなひろの介護 学びの広場 =====
// バックエンド: Firebase (firebase-config.js) / 進捗はFirestoreに同期

// --- 状態管理 ---
let currentCourse = null;
let courseData = null;
let currentModuleIndex = 0;
let currentPageIndex = 0;
let currentQuizAnswers = [];
let quizSubmitted = false;
let currentUserName = '';

// --- ストレージ（個人別・ローカル） ---
function storageKey() {
  return 'hanahiro-training-' + currentUserName;
}
function getProgress() {
  const data = localStorage.getItem(storageKey());
  return data ? JSON.parse(data) : {};
}
function saveProgress(key, value) {
  const data = getProgress();
  data[key] = value;
  localStorage.setItem(storageKey(), JSON.stringify(data));
}
function getModuleProgress(moduleId) {
  const data = getProgress();
  return data[moduleId] || { lessonsRead: [], quizScore: null, quizPassed: false };
}
function saveModuleProgress(moduleId, progress) {
  saveProgress(moduleId, progress);
}

// --- Firestoreに進捗を同期（バックグラウンド、失敗してもLocalStorageは残る） ---
function syncProgressToFirestore(moduleId, moduleName, prog) {
  if (!window.firestore) return;
  const courseName = currentCourse === 'staff' ? 'みんなの学び' : 'リーダーの学び';
  window.firestore.saveProgress(currentUserName, moduleId, {
    moduleName,
    course: currentCourse,
    courseName,
    lessonsRead: prog.lessonsRead || [],
    quizScore: prog.quizScore ?? null,
    quizPassed: !!prog.quizPassed
  }).catch(err => console.log('Firestore同期エラー（オフラインでも問題なし）:', err.message));
}

// --- 画面切り替え ---
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  window.scrollTo(0, 0);
}

// --- 名前入力 → コース選択 ---
function selectCourse(type) {
  const nameInput = document.getElementById('user-name-input');
  const name = nameInput.value.trim();
  if (!name) {
    document.getElementById('name-error').textContent = 'お名前を入力してね';
    nameInput.focus();
    return;
  }
  document.getElementById('name-error').textContent = '';
  currentUserName = name;
  currentCourse = type;
  courseData = type === 'staff' ? STAFF_COURSE : MANAGER_COURSE;
  if (window.firestore) {
    window.firestore.saveUser(name).catch(err => console.log('ユーザー登録エラー:', err.message));
  }
  showDashboard();
}

// --- パスワード ---
function showPasswordModal() {
  const nameInput = document.getElementById('user-name-input');
  const name = nameInput.value.trim();
  if (!name) {
    document.getElementById('name-error').textContent = 'お名前を入力してね';
    nameInput.focus();
    return;
  }
  document.getElementById('name-error').textContent = '';
  document.getElementById('password-modal').classList.add('active');
  document.getElementById('manager-password').value = '';
  document.getElementById('password-error').textContent = '';
  setTimeout(() => document.getElementById('manager-password').focus(), 100);
}
function closePasswordModal() {
  document.getElementById('password-modal').classList.remove('active');
}
function checkPassword() {
  const input = document.getElementById('manager-password').value;
  if (input === MANAGER_COURSE.password) {
    closePasswordModal();
    selectCourse('manager');
  } else {
    document.getElementById('password-error').textContent = 'パスワードがちがいます';
  }
}

// --- ダッシュボード ---
function showDashboard() {
  showScreen('dashboard-screen');
  document.getElementById('course-title-header').textContent = courseData.title;
  document.getElementById('dashboard-title').textContent =
    currentUserName + 'さん、がんばろう！';
  renderModuleList();
  updateOverallProgress();
}
function renderModuleList() {
  const list = document.getElementById('module-list');
  list.innerHTML = '';
  courseData.modules.forEach((mod, idx) => {
    const prog = getModuleProgress(mod.id);
    const totalLessons = mod.lessons.length;
    const readCount = prog.lessonsRead ? prog.lessonsRead.length : 0;
    const quizDone = prog.quizPassed;

    let locked = false;
    if (idx > 0) {
      const prevMod = courseData.modules[idx - 1];
      const prevProg = getModuleProgress(prevMod.id);
      if (!prevProg.quizPassed) locked = true;
    }

    let statusClass, statusText;
    if (locked) { statusClass = 'status-locked'; statusText = 'まだだよ'; }
    else if (quizDone) { statusClass = 'status-done'; statusText = 'クリア！'; }
    else if (readCount > 0) { statusClass = 'status-progress'; statusText = '学習中'; }
    else { statusClass = 'status-new'; statusText = 'はじめよう'; }

    let cardClass = 'module-card';
    if (locked) cardClass += ' locked';
    else if (quizDone) cardClass += ' completed';
    else if (readCount > 0) cardClass += ' in-progress';

    const progressPercent = quizDone ? 100 : Math.round((readCount / (totalLessons + 1)) * 100);

    const card = document.createElement('div');
    card.className = cardClass;
    card.innerHTML = `
      <div class="module-header">
        <span class="module-number">${mod.number}</span>
        <span class="module-status ${statusClass}">${statusText}</span>
      </div>
      <div class="module-title">${mod.title}</div>
      <div class="module-desc">${mod.description}</div>
      <div class="module-progress">
        <div class="module-progress-bar">
          <div class="module-progress-fill" style="width:${progressPercent}%"></div>
        </div>
      </div>
    `;
    if (!locked) card.onclick = () => openModule(idx);
    list.appendChild(card);
  });
}
function updateOverallProgress() {
  const total = courseData.modules.length;
  let completed = 0;
  courseData.modules.forEach(mod => {
    if (getModuleProgress(mod.id).quizPassed) completed++;
  });
  const percent = Math.round((completed / total) * 100);
  document.getElementById('overall-progress-bar').style.width = percent + '%';
  document.getElementById('overall-progress-text').textContent = percent + '%';
}

// --- モジュールを開く（常にレッスンから） ---
function openModule(idx) {
  currentModuleIndex = idx;
  const mod = courseData.modules[idx];
  const prog = getModuleProgress(mod.id);
  const totalLessons = mod.lessons.length;
  const readCount = prog.lessonsRead ? prog.lessonsRead.length : 0;

  if (prog.quizPassed) {
    currentPageIndex = 0;
  } else if (readCount > 0 && readCount < totalLessons) {
    currentPageIndex = readCount;
  } else {
    currentPageIndex = 0;
  }
  showLesson();
}

// --- レッスン画面 ---
function showLesson() {
  showScreen('lesson-screen');
  const mod = courseData.modules[currentModuleIndex];
  const totalPages = mod.lessons.length;
  const lesson = mod.lessons[currentPageIndex];

  document.getElementById('lesson-title-header').textContent = mod.title;
  document.getElementById('lesson-body').innerHTML = lesson.content;
  document.getElementById('page-indicator').textContent = `${currentPageIndex + 1} / ${totalPages}`;

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  prevBtn.style.visibility = currentPageIndex === 0 ? 'hidden' : 'visible';

  const isLastPage = currentPageIndex === totalPages - 1;
  const prog = getModuleProgress(mod.id);

  if (isLastPage) {
    if (prog.quizPassed) {
      nextBtn.innerHTML = '\u2190 もどる';
    } else {
      nextBtn.innerHTML = 'チェックテストへ \u2192';
    }
  } else {
    nextBtn.innerHTML = 'つぎ \u2192';
  }

  markLessonRead(mod.id, currentPageIndex);
}
function markLessonRead(moduleId, pageIndex) {
  const prog = getModuleProgress(moduleId);
  if (!prog.lessonsRead) prog.lessonsRead = [];
  if (!prog.lessonsRead.includes(pageIndex)) {
    prog.lessonsRead.push(pageIndex);
    saveModuleProgress(moduleId, prog);
    const mod = courseData.modules.find(m => m.id === moduleId);
    if (mod) syncProgressToFirestore(moduleId, mod.title, prog);
  }
}
function nextPage() {
  const mod = courseData.modules[currentModuleIndex];
  const totalPages = mod.lessons.length;
  if (currentPageIndex < totalPages - 1) {
    currentPageIndex++;
    showLesson();
  } else {
    const prog = getModuleProgress(mod.id);
    if (prog.quizPassed) {
      backToDashboard();
    } else {
      openQuiz(currentModuleIndex);
    }
  }
}
function prevPage() {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    showLesson();
  }
}

// --- テスト画面 ---
function openQuiz(idx) {
  currentModuleIndex = idx;
  const mod = courseData.modules[idx];
  currentQuizAnswers = new Array(mod.quiz.length).fill(-1);
  quizSubmitted = false;
  showScreen('quiz-screen');
  document.getElementById('quiz-title-header').textContent = mod.title + ' チェック';
  document.getElementById('quiz-progress-header').textContent = `全${mod.quiz.length}問`;
  renderQuiz();
}
function renderQuiz() {
  const mod = courseData.modules[currentModuleIndex];
  const quiz = mod.quiz;
  let html = '';

  if (!quizSubmitted) {
    html += '<p style="text-align:center;color:#8a7a6a;margin-bottom:20px;font-size:14px">レッスンの内容からの出題です。全問に答えてね！</p>';
    quiz.forEach((q, qi) => {
      html += `<div class="quiz-question">
        <div class="quiz-question-number">問${qi + 1}</div>
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options">`;
      q.options.forEach((opt, oi) => {
        const selected = currentQuizAnswers[qi] === oi ? 'selected' : '';
        html += `<div class="quiz-option ${selected}" onclick="selectAnswer(${qi}, ${oi})">
          <div class="quiz-option-marker">${selected ? '\u2713' : ''}</div>
          <div>${opt}</div>
        </div>`;
      });
      html += `</div></div>`;
    });
    const allAnswered = currentQuizAnswers.every(a => a >= 0);
    html += `<div class="quiz-submit-area">
      <button class="btn-primary" onclick="submitQuiz()" ${allAnswered ? '' : 'disabled'}>こたえを送る \u{1F4E8}</button>
    </div>`;
  } else {
    let correctCount = 0;
    quiz.forEach((q, qi) => {
      const isCorrect = currentQuizAnswers[qi] === q.correct;
      if (isCorrect) correctCount++;
      html += `<div class="quiz-question">
        <div class="quiz-question-number">問${qi + 1} ${isCorrect ? '\u2B55 正解！' : '\u274C おしい！'}</div>
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options">`;
      q.options.forEach((opt, oi) => {
        let optClass = '';
        if (oi === q.correct) optClass = 'correct';
        else if (oi === currentQuizAnswers[qi] && !isCorrect) optClass = 'incorrect';
        const marker = oi === q.correct ? '\u2713' : (oi === currentQuizAnswers[qi] && !isCorrect ? '\u2717' : '');
        html += `<div class="quiz-option ${optClass}">
          <div class="quiz-option-marker">${marker}</div>
          <div>${opt}</div>
        </div>`;
      });
      html += `</div>
        <div class="quiz-explanation show">\u{1F4A1} ${q.explanation}</div>
      </div>`;
    });

    const score = Math.round((correctCount / quiz.length) * 100);
    const passed = score >= 70;
    html += `<div class="quiz-submit-area" style="margin-top:24px">`;
    if (passed) {
      html += `<p style="font-size:22px;font-weight:700;margin-bottom:4px;color:#27ae60">
        \u{1F389} ${score}点！合格おめでとう！
      </p>
      <p style="font-size:14px;color:#8a7a6a;margin-bottom:16px">${correctCount}/${quiz.length}問正解</p>
      <button class="btn-primary" onclick="backToDashboard()">つぎのステップへ \u2192</button>`;
    } else {
      html += `<p style="font-size:22px;font-weight:700;margin-bottom:4px;color:#e67e22">
        ${score}点…あとちょっと！
      </p>
      <p style="font-size:14px;color:#8a7a6a;margin-bottom:16px">${correctCount}/${quiz.length}問正解（70点以上で合格だよ）</p>
      <button type="button" class="btn-secondary" onclick="reviewLesson(); return false;" style="margin-right:8px">テキストに戻る \u{1F4D6}</button>
      <button type="button" class="btn-primary" onclick="openQuiz(${currentModuleIndex}); return false;">もう一回チャレンジ \u{1F4AA}</button>`;
    }
    html += '</div>';

    // 進捗保存（ローカル + Firestore）
    const prog = getModuleProgress(mod.id);
    prog.quizScore = score;
    if (passed) prog.quizPassed = true;
    saveModuleProgress(mod.id, prog);
    syncProgressToFirestore(mod.id, mod.title, prog);
  }

  document.getElementById('quiz-body').innerHTML = html;
  if (quizSubmitted) window.scrollTo(0, 0);
}
function selectAnswer(qi, oi) {
  if (quizSubmitted) return;
  currentQuizAnswers[qi] = oi;
  renderQuiz();
}
function submitQuiz() {
  if (currentQuizAnswers.some(a => a < 0)) return;
  quizSubmitted = true;
  renderQuiz();
}
function reviewLesson() {
  quizSubmitted = false;
  currentQuizAnswers = [];
  currentPageIndex = 0;
  showScreen('lesson-screen');
  showLesson();
}

// --- 現モジュールの全レッスンを印刷 / PDF保存 ---
function printModule() {
  const mod = courseData.modules[currentModuleIndex];
  const body = document.getElementById('lesson-body');
  const originalHTML = body.innerHTML;
  const courseName = courseData.title;

  body.innerHTML = `
    <div class="print-cover">
      <h1 style="text-align:center;font-size:24px;color:#1a5276;border-bottom:2px solid #1a5276;padding-bottom:12px">${mod.title}</h1>
      <p style="text-align:center;color:#8a7a6a;margin:8px 0 20px">はなひろラーニング「${courseName}」&nbsp;/&nbsp;${mod.number || ''}</p>
    </div>
    ${mod.lessons.map((l, i) => `
      <section class="print-section">
        <h2 style="color:#1a5276;border-bottom:1px solid #ccc;padding-bottom:6px;margin-top:28px">ページ${i + 1}：${l.title}</h2>
        ${l.content}
      </section>
    `).join('')}
  `;

  document.body.classList.add('printing');
  const restore = () => {
    body.innerHTML = originalHTML;
    document.body.classList.remove('printing');
    window.removeEventListener('afterprint', restore);
  };
  window.addEventListener('afterprint', restore);
  setTimeout(() => { if (document.body.classList.contains('printing')) restore(); }, 60000);
  window.print();
}

// --- 管理者ダッシュボード パスワード ---
function showAdminPasswordModal() {
  document.getElementById('admin-password-modal').classList.add('active');
  document.getElementById('admin-password').value = '';
  document.getElementById('admin-password-error').textContent = '';
  setTimeout(() => document.getElementById('admin-password').focus(), 100);
}
function closeAdminPasswordModal() {
  document.getElementById('admin-password-modal').classList.remove('active');
}
function checkAdminPassword() {
  const input = document.getElementById('admin-password').value;
  if (input === MANAGER_COURSE.password) {
    closeAdminPasswordModal();
    openAdminDashboard();
  } else {
    document.getElementById('admin-password-error').textContent = 'パスワードがちがいます';
  }
}

// --- 管理者ダッシュボード（Firestoreから読む） ---
let adminRecordsCache = [];

async function openAdminDashboard() {
  document.getElementById('admin-body').innerHTML =
    '<p style="text-align:center;color:#8a7a6a;padding:40px 20px">\u{1F504} データを読み込んでいます…</p>';
  showScreen('admin-screen');

  if (!window.firestore) {
    document.getElementById('admin-body').innerHTML =
      '<p style="text-align:center;color:#c0392b;padding:40px">Firebaseが未初期化です</p>';
    return;
  }

  try {
    const records = await window.firestore.getAllProgress();
    adminRecordsCache = records;
    renderAdminDashboard(records);
  } catch (err) {
    document.getElementById('admin-body').innerHTML =
      '<p style="text-align:center;color:#c0392b;padding:40px">データ取得に失敗しました: ' + err.message + '</p>';
  }
}

function renderAdminDashboard(records) {
  if (!records || records.length === 0) {
    document.getElementById('admin-body').innerHTML =
      '<p style="text-align:center;color:#8a7a6a;padding:40px">まだ受講データがありません。<br>スタッフがレッスンを読むと、ここに表示されます。</p>';
    return;
  }

  // ユーザー×コース別に集計
  const users = {};
  records.forEach(r => {
    const name = r.userName || r.name;
    const key = name + '|' + (r.course || 'unknown');
    if (!users[key]) {
      users[key] = { name, course: r.course, courseName: r.courseName, modules: {}, lastUpdate: 0 };
    }
    const lessonCount = Array.isArray(r.lessonsRead) ? r.lessonsRead.length : 0;
    users[key].modules[r.moduleId] = {
      name: r.moduleName,
      score: r.quizScore,
      passed: !!r.quizPassed,
      lessonsRead: lessonCount
    };
    const ts = r.updatedAt && r.updatedAt.toMillis ? r.updatedAt.toMillis() : 0;
    if (ts > users[key].lastUpdate) users[key].lastUpdate = ts;
  });

  const staffUsers = [];
  const managerUsers = [];
  Object.values(users).forEach(u => {
    if (u.course === 'staff') staffUsers.push(u);
    else if (u.course === 'manager') managerUsers.push(u);
  });
  staffUsers.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
  managerUsers.sort((a, b) => a.name.localeCompare(b.name, 'ja'));

  let html = `
    <div style="margin-bottom:16px;text-align:right">
      <button class="btn-secondary" onclick="exportAdminCSV()" style="padding:8px 16px">\u{1F4E5} CSVダウンロード</button>
    </div>
  `;

  if (staffUsers.length > 0) {
    html += '<h3 style="color:#5a3e1b;margin-bottom:12px">\u{1F331} みんなの学び（' + staffUsers.length + '名）</h3>';
    html += buildAdminTable(staffUsers, STAFF_COURSE.modules);
  }
  if (managerUsers.length > 0) {
    html += '<h3 style="color:#5a3e1b;margin:24px 0 12px">\u{1F3AF} リーダーの学び（' + managerUsers.length + '名）</h3>';
    html += buildAdminTable(managerUsers, MANAGER_COURSE.modules);
  }

  document.getElementById('admin-body').innerHTML = html;
}

function buildAdminTable(userList, modules) {
  let html = '<div style="overflow-x:auto"><table class="compare-table">';
  html += '<tr><th>名前</th>';
  modules.forEach((_m, i) => {
    html += `<th style="font-size:11px;min-width:60px">S${i+1}</th>`;
  });
  html += '<th>完了率</th><th>最終</th></tr>';

  userList.forEach(u => {
    let passedCount = 0;
    html += `<tr><td style="white-space:nowrap;font-weight:600">${u.name}</td>`;
    modules.forEach(m => {
      const mod = u.modules[m.id];
      if (mod) {
        if (mod.passed) {
          passedCount++;
          html += `<td class="highlight-cell" style="text-align:center;color:#27ae60;font-weight:700">${mod.score}点</td>`;
        } else if (mod.score != null) {
          html += `<td style="text-align:center;color:#e67e22">${mod.score}点</td>`;
        } else {
          html += `<td style="text-align:center;color:#5dade2;font-size:11px">学習中</td>`;
        }
      } else {
        html += '<td style="text-align:center;color:#ccc">-</td>';
      }
    });
    const pct = Math.round((passedCount / modules.length) * 100);
    const pctColor = pct === 100 ? '#27ae60' : pct >= 50 ? '#e8a849' : '#c0392b';
    html += `<td style="text-align:center;font-weight:700;color:${pctColor}">${pct}%</td>`;
    const d = u.lastUpdate ? new Date(u.lastUpdate) : null;
    const dateStr = d ? `${d.getMonth()+1}/${d.getDate()}` : '-';
    html += `<td style="text-align:center;font-size:12px;color:#8a7a6a">${dateStr}</td>`;
    html += '</tr>';
  });

  html += '</table></div>';
  return html;
}

// --- CSVエクスポート ---
function exportAdminCSV() {
  if (!adminRecordsCache || adminRecordsCache.length === 0) {
    alert('データがありません');
    return;
  }
  const header = ['名前', 'コース', 'ステップ', 'スコア', '合格', '読了ページ数', '最終更新'];
  const rows = adminRecordsCache.map(r => {
    const d = r.updatedAt && r.updatedAt.toDate ? r.updatedAt.toDate() : null;
    return [
      r.userName || r.name || '',
      r.courseName || r.course || '',
      r.moduleName || r.moduleId || '',
      r.quizScore != null ? r.quizScore : '',
      r.quizPassed ? '合格' : '',
      Array.isArray(r.lessonsRead) ? r.lessonsRead.length : 0,
      d ? `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}` : ''
    ];
  });
  const csv = '\uFEFF' + [header, ...rows].map(r =>
    r.map(cell => '"' + String(cell).replace(/"/g, '""') + '"').join(',')
  ).join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const now = new Date();
  a.download = `hanahiro-learning_${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// --- ナビゲーション ---
function backToDashboard() {
  showDashboard();
}
function logout() {
  currentCourse = null;
  courseData = null;
  currentUserName = '';
  showScreen('login-screen');
}

// --- 初期化 ---
document.addEventListener('DOMContentLoaded', () => {
  showScreen('login-screen');
});
