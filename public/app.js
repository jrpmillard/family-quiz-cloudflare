(() => {
  'use strict';

  const byId = (id) => document.getElementById(id);

  const els = {
    setup: byId('setup'), quiz: byId('quiz'), results: byId('results'),
    playerName: byId('playerName'), level: byId('level'), length: byId('length'), subject: byId('subject'),
    startBtn: byId('startBtn'), setupMsg: byId('setupMsg'), gamesPlayed: byId('gamesPlayed'), bestScore: byId('bestScore'),
    achievementCount: byId('achievementCount'), qCount: byId('qCount'), timer: byId('timer'), scoreNow: byId('scoreNow'),
    progressFill: byId('progressFill'), visual: byId('visual'), prompt: byId('prompt'), questionCard: document.querySelector('.question'),
    answers: byId('answers'), resultScore: byId('resultScore'), resultDetails: byId('resultDetails'), newAchievements: byId('newAchievements'),
    againBtn: byId('againBtn'), leaderboard: byId('leaderboard'), themeBtn: byId('themeBtn'), soundBtn: byId('soundBtn'), volume: byId('volume')
  };

  const missing = Object.entries(els).filter(([, el]) => !el).map(([id]) => id);
  if (missing.length) {
    console.error('Family Quiz Portal: missing required HTML element(s):', missing.join(', '));
    return;
  }

  let QUESTIONS = [];
  let quiz = [];
  let idx = 0;
  let score = 0;
  let startTime = 0;
  let timerId = null;
  let settings = {};
  let shownQuestionKeys = new Set();

  const LS = 'familyQuizPortal.v3';
  const state = JSON.parse(localStorage.getItem(LS) || '{}');
  state.scores ??= [];
  state.achievements ??= [];
  state.games ??= 0;
  state.best ??= 0;
  state.soundOn ??= true;
  state.volume ??= 0.55;

  function save() { localStorage.setItem(LS, JSON.stringify(state)); }
  function cleanName(name) { return String(name || 'Player').replace(/[<>]/g, '').trim().slice(0, 30) || 'Player'; }

  function shuffle(items) {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  let audioContext = null;
  function getAudioContext() {
    if (!state.soundOn) return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    audioContext ??= new AudioCtx();
    if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
    return audioContext;
  }

  function tone(freq, start, duration, type = 'sine', gain = 0.16) {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const vol = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
    vol.gain.setValueAtTime(0.0001, ctx.currentTime + start);
    vol.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain * state.volume), ctx.currentTime + start + 0.015);
    vol.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);
    osc.connect(vol).connect(ctx.destination);
    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + duration + 0.03);
  }

  function playSound(name) {
    if (!state.soundOn) return;
    if (name === 'start') {
      tone(523.25, 0, .12, 'triangle'); tone(659.25, .11, .12, 'triangle'); tone(783.99, .22, .18, 'triangle');
    } else if (name === 'correct') {
      tone(659.25, 0, .10, 'sine'); tone(880, .09, .16, 'sine');
    } else if (name === 'wrong') {
      tone(220, 0, .18, 'sawtooth', .08); tone(164.81, .13, .22, 'sawtooth', .07);
    } else if (name === 'finish') {
      tone(523.25, 0, .12, 'triangle'); tone(659.25, .12, .12, 'triangle'); tone(783.99, .24, .12, 'triangle'); tone(1046.5, .38, .35, 'triangle');
    }
  }

  function renderSoundControls() {
    els.soundBtn.textContent = state.soundOn ? '🔊 Sound on' : '🔇 Sound off';
    els.volume.value = String(Math.round((state.volume ?? 0.55) * 100));
  }

  function normaliseText(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/^\s*(round|question)\s+\d+\s*[:.-]\s*/i, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  // Hard no-repeat rule.
  // Questions are no longer assigned to rounds. At quiz start we build one shuffled pool
  // for the chosen difficulty/subject, then draw from it while tracking these stable keys.
  // The key intentionally strips generated prefixes such as 'Round 2:' or 'Question 4:'
  // so repeated prompts cannot sneak through with slightly different wording.
  function visibleQuestionKey(q) {
    const prompt = normaliseText(q.prompt);
    const image = normaliseText(q.image);
    const answer = normaliseText(q.answer);
    if (image) return `image:${image}|answer:${answer}`;
    return `prompt:${prompt}|answer:${answer}`;
  }

  function dedupeQuestionBank(pool) {
    const seen = new Set();
    const unique = [];
    for (const q of pool) {
      const key = visibleQuestionKey(q);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      unique.push(q);
    }
    return unique;
  }

  function createQuiz(pool, wanted) {
    shownQuestionKeys = new Set();
    const selected = [];
    for (const q of shuffle(dedupeQuestionBank(pool))) {
      const key = visibleQuestionKey(q);
      if (shownQuestionKeys.has(key)) continue;
      shownQuestionKeys.add(key);
      const cleanOptions = [...new Set([...(q.options || []), q.answer].filter(Boolean))];
      selected.push({ ...q, options: shuffle(cleanOptions) });
      if (selected.length >= wanted) break;
    }
    return selected;
  }

  function renderStats() {
    els.gamesPlayed.textContent = state.games;
    els.bestScore.textContent = `${state.best || 0}%`;
    els.achievementCount.textContent = state.achievements.length;
  }

  function getPool(subject, level) {
    if (subject === 'General Knowledge') return QUESTIONS.filter(q => q.level === level && q.subject !== 'Flags' && q.subject !== 'JW');

    // JW difficulty boost: keep the selected level as the main pool, but blend in
    // a small number of questions from the next difficulty up. This lifts the
    // challenge by about 15% without changing the no-repeat logic or shortening
    // long quizzes.
    if (subject === 'JW') {
      const primary = QUESTIONS.filter(q => q.subject === subject && q.level === level);
      const nextLevel = level === 'Easy' ? 'Medium' : level === 'Medium' ? 'Hard' : null;
      if (!nextLevel) return primary;

      const boosted = QUESTIONS.filter(q => q.subject === subject && q.level === nextLevel);
      const boostTarget = Math.max(1, Math.round(primary.length * 0.15));
      return [...primary, ...shuffle(boosted).slice(0, boostTarget)];
    }

    return QUESTIONS.filter(q => q.level === level && q.subject === subject);
  }

  async function init() {
    try {
      QUESTIONS = await fetch('/data/questions.json', { cache: 'no-store' }).then(r => {
        if (!r.ok) throw new Error(`Question bank failed to load: ${r.status}`);
        return r.json();
      });
      renderStats(); renderSoundControls(); renderLeaderboard('local');
    } catch (error) {
      console.error(error);
      els.setupMsg.textContent = 'Could not load the question bank. Please check that /data/questions.json exists in the deployed site.';
      els.startBtn.disabled = true;
    }
  }

  function startQuiz() {
    const selectedLength = Number(els.length.value);
    settings = {
      name: cleanName(els.playerName.value), level: els.level.value, length: selectedLength, subject: els.subject.value,
      label: els.length.options[els.length.selectedIndex].text.split(' - ')[0]
    };

    const pool = getPool(settings.subject, settings.level);
    quiz = createQuiz(pool, settings.length);

    if (!quiz.length) { els.setupMsg.textContent = 'No questions are available for those settings yet.'; return; }
    els.setupMsg.textContent = quiz.length < settings.length
      ? `Only ${quiz.length} unique questions are available for those settings, so this quiz will use ${quiz.length}.`
      : '';

    playSound('start');
    idx = 0; score = 0; startTime = Date.now();
    els.setup.classList.add('hidden'); els.results.classList.add('hidden'); els.quiz.classList.remove('hidden');
    clearInterval(timerId);
    timerId = setInterval(updateTimer, 1000);
    updateTimer(); showQuestion();
  }

  function updateTimer() {
    const s = Math.floor((Date.now() - startTime) / 1000);
    els.timer.textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  }

  function showQuestion() {
    const q = quiz[idx];
    if (!q) return finish();
    els.questionCard.classList.remove('correct-pop', 'wrong-shake');
    els.qCount.textContent = `Question ${idx + 1} of ${quiz.length}`;
    els.scoreNow.textContent = `Score ${score}`;
    els.progressFill.style.width = `${(idx / quiz.length) * 100}%`;
    els.prompt.textContent = q.prompt;
    els.visual.innerHTML = q.image ? `<img class="question-image" alt="Quiz image" src="${q.image}">` : `<span>${q.emoji || '❓'}</span>`;
    els.answers.innerHTML = '';
    q.options.forEach(option => {
      const button = document.createElement('button');
      button.type = 'button'; button.textContent = option;
      button.addEventListener('click', () => answer(button, option, q.answer));
      els.answers.appendChild(button);
    });
  }

  function answer(button, option, correct) {
    [...els.answers.children].forEach(answerButton => {
      answerButton.disabled = true;
      if (answerButton.textContent === correct) answerButton.classList.add('correct');
    });
    if (option === correct) { score += 1; playSound('correct'); button.classList.add('correct'); els.questionCard.classList.add('correct-pop'); burst('🎉'); }
    else { playSound('wrong'); button.classList.add('wrong'); els.questionCard.classList.add('wrong-shake'); burst('✨'); }
    setTimeout(() => { idx += 1; if (idx >= quiz.length) finish(); else showQuestion(); }, 850);
  }

  function burst(symbol) {
    const pop = document.createElement('div'); pop.className = 'answer-burst'; pop.textContent = symbol;
    document.body.appendChild(pop); setTimeout(() => pop.remove(), 900);
  }

  async function finish() {
    clearInterval(timerId); playSound('finish');
    els.progressFill.style.width = '100%'; els.quiz.classList.add('hidden'); els.results.classList.remove('hidden');
    els.results.classList.add('finish-celebrate'); setTimeout(() => els.results.classList.remove('finish-celebrate'), 1200);
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    const percent = Math.round((score / quiz.length) * 100);
    els.resultScore.textContent = `${score}/${quiz.length}`;
    els.resultDetails.textContent = `${settings.name} scored ${percent}% on ${settings.level} ${settings.subject} in ${seconds}s.`;
    state.games += 1; state.best = Math.max(state.best, percent);
    const record = { player_name: settings.name, score, total: quiz.length, percent, subject: settings.subject, level: settings.level, length_label: settings.label, seconds, completed_at: new Date().toISOString(), profile_id: settings.name.toLowerCase() };
    state.scores.push(record); state.scores = state.scores.slice(-200);
    const unlocked = [];
    if (percent === 100) unlocked.push('Perfect Round');
    if (seconds < quiz.length * 8) unlocked.push('Speed Star');
    if (settings.subject === 'Flags' && percent >= 80) unlocked.push('Flag Expert');
    if (settings.subject === 'JW' && percent >= 80) unlocked.push('JW Scholar');
    if (state.games >= 10) unlocked.push('Quiz Regular');
    const newlyUnlocked = unlocked.filter(a => !state.achievements.includes(a));
    newlyUnlocked.forEach(a => state.achievements.push(a));
    els.newAchievements.innerHTML = newlyUnlocked.map(a => `<span class="badge">🏆 ${a}</span>`).join('');
    save(); renderStats(); renderLeaderboard('local');
    fetch('/api/scores', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(record) }).catch(() => {});
  }

  function playAgain() { els.results.classList.add('hidden'); els.setup.classList.remove('hidden'); }

  async function renderLeaderboard(tab) {
    if (tab === 'online') {
      els.leaderboard.innerHTML = '<p class="muted">Loading online leaderboard...</p>';
      try {
        const data = await fetch('/api/scores').then(r => r.json());
        if (!data.enabled) { els.leaderboard.innerHTML = '<p class="muted">Online leaderboard is optional. Add a Cloudflare D1 binding named DB and run schema.sql to enable it.</p>'; return; }
        drawRows(data.scores || []);
      } catch { els.leaderboard.innerHTML = '<p class="muted">Online leaderboard unavailable.</p>'; }
      return;
    }
    const rows = [...state.scores].sort((a, b) => b.percent - a.percent || b.score - a.score || a.seconds - b.seconds).slice(0, 20);
    drawRows(rows);
  }

  function drawRows(rows) {
    els.leaderboard.innerHTML = rows.length
      ? rows.map((r, i) => `<div class="row"><strong>#${i + 1}</strong><div><b>${r.player_name}</b><br><span class="muted">${r.level} · ${r.subject} · ${r.length_label}</span></div><div class="time"><b>${r.score}/${r.total}</b><br><span class="muted">${r.seconds}s</span></div></div>`).join('')
      : '<p class="muted">No scores yet.</p>';
  }

  function switchLeaderboardTab(button) { document.querySelectorAll('.tabs button').forEach(tab => tab.classList.remove('active')); button.classList.add('active'); renderLeaderboard(button.dataset.tab || 'local'); }
  function toggleTheme() { document.body.classList.toggle('dark'); els.themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙'; }
  function toggleSound() { state.soundOn = !state.soundOn; save(); renderSoundControls(); if (state.soundOn) playSound('correct'); }
  function updateVolume() { state.volume = Math.max(0, Math.min(1, Number(els.volume.value) / 100)); save(); }

  els.startBtn.addEventListener('click', startQuiz);
  els.againBtn.addEventListener('click', playAgain);
  els.themeBtn.addEventListener('click', toggleTheme);
  els.soundBtn.addEventListener('click', toggleSound);
  els.volume.addEventListener('input', updateVolume);
  document.querySelectorAll('.tabs button').forEach(button => button.addEventListener('click', () => switchLeaderboardTab(button)));
  init();
})();
