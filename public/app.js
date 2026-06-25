const LENGTHS = { Short: 15, Medium: 25, Long: 50 };
const $ = (id) => document.getElementById(id);

const banks = {
  "Flags": [
    q("🇬🇧", "Which country uses this flag?", "United Kingdom", ["France", "United Kingdom", "Australia", "Iceland"]),
    q("🇫🇷", "Which country uses this flag?", "France", ["France", "Netherlands", "Russia", "Luxembourg"]),
    q("🇯🇵", "Which country uses this flag?", "Japan", ["Bangladesh", "Japan", "South Korea", "China"]),
    q("🇧🇷", "Which country uses this flag?", "Brazil", ["Brazil", "Argentina", "Portugal", "Mexico"]),
    q("🇨🇦", "Which country uses this flag?", "Canada", ["Canada", "Austria", "Denmark", "Peru"]),
    q("🇮🇳", "Which country uses this flag?", "India", ["Ireland", "India", "Niger", "Italy"]),
    q("🇿🇦", "Which country uses this flag?", "South Africa", ["South Africa", "Kenya", "Ghana", "Zimbabwe"]),
    q("🇳🇴", "Which country uses this flag?", "Norway", ["Sweden", "Norway", "Finland", "Denmark"]),
    q("🇰🇷", "Which country uses this flag?", "South Korea", ["South Korea", "Japan", "Thailand", "Vietnam"]),
    q("🇲🇽", "Which country uses this flag?", "Mexico", ["Italy", "Mexico", "Spain", "Colombia"])
  ],
  "Music": [
    q("🎹", "Which instrument has black and white keys?", "Piano", ["Piano", "Drum", "Trumpet", "Violin"]),
    q("🎸", "How many strings does a standard guitar usually have?", "6", ["4", "5", "6", "8"]),
    q("🎼", "What does tempo describe?", "Speed", ["Volume", "Speed", "Pitch", "Lyrics"]),
    q("🥁", "Which family do drums belong to?", "Percussion", ["Strings", "Brass", "Percussion", "Woodwind"]),
    q("🎤", "What is a person who sings called?", "Vocalist", ["Drummer", "Vocalist", "Bassist", "Conductor"]),
    q("🎻", "Which instrument is played with a bow?", "Violin", ["Violin", "Piano", "Flute", "Tuba"]),
    q("🎧", "What do DJs commonly mix?", "Tracks", ["Paint", "Tracks", "Books", "Maps"]),
    q("🎵", "How many beats are usually in a bar of common time?", "4", ["2", "3", "4", "7"]),
    q("📻", "Which decade is The Beatles most associated with?", "1960s", ["1940s", "1960s", "1980s", "2000s"]),
    q("🎷", "Which instrument is a saxophone?", "Woodwind", ["Brass", "Woodwind", "String", "Percussion"])
  ],
  "Science": [
    q("🧪", "What is H₂O commonly called?", "Water", ["Salt", "Oxygen", "Water", "Sugar"]),
    q("🪐", "Which planet is known as the Red Planet?", "Mars", ["Mars", "Venus", "Saturn", "Mercury"]),
    q("💡", "What force pulls objects toward Earth?", "Gravity", ["Magnetism", "Gravity", "Friction", "Electricity"]),
    q("🧬", "DNA is mainly associated with what?", "Genetics", ["Weather", "Genetics", "Sound", "Rocks"]),
    q("🌡️", "What does a thermometer measure?", "Temperature", ["Pressure", "Temperature", "Length", "Mass"]),
    q("⚡", "What particle has a negative charge?", "Electron", ["Proton", "Neutron", "Electron", "Photon"]),
    q("🔬", "What tool makes tiny things look larger?", "Microscope", ["Telescope", "Microscope", "Compass", "Barometer"]),
    q("🌞", "What gas do plants absorb for photosynthesis?", "Carbon dioxide", ["Oxygen", "Hydrogen", "Carbon dioxide", "Helium"]),
    q("🧲", "Which metals are strongly attracted to magnets?", "Iron and nickel", ["Gold and silver", "Iron and nickel", "Copper and tin", "Lead and zinc"]),
    q("🌌", "What galaxy do we live in?", "The Milky Way", ["Andromeda", "The Milky Way", "Sombrero", "Whirlpool"])
  ],
  "Nature": [
    q("🦁", "What type of animal is a lion?", "Mammal", ["Reptile", "Bird", "Mammal", "Fish"]),
    q("🌳", "What part of a tree takes in sunlight?", "Leaves", ["Roots", "Leaves", "Bark", "Seeds"]),
    q("🐝", "What do bees make?", "Honey", ["Milk", "Honey", "Silk", "Wax only"]),
    q("🌊", "What is the largest ocean?", "Pacific Ocean", ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"]),
    q("🐧", "Where do many penguins live?", "Antarctica", ["Sahara", "Antarctica", "Amazon", "Himalayas"]),
    q("🌵", "Which plant is best adapted to deserts?", "Cactus", ["Fern", "Cactus", "Lily", "Moss"]),
    q("🦋", "What does a caterpillar become?", "Butterfly or moth", ["Frog", "Butterfly or moth", "Fish", "Spider"]),
    q("🍄", "A mushroom is a type of what?", "Fungus", ["Plant", "Animal", "Fungus", "Mineral"]),
    q("🐋", "What is the biggest animal alive today?", "Blue whale", ["Elephant", "Blue whale", "Great white shark", "Giraffe"]),
    q("🌋", "What comes out of an erupting volcano?", "Lava", ["Snow", "Lava", "Sand", "Ice"])
  ],
  "Sport": [
    q("⚽", "How many players are on a football team on the pitch?", "11", ["7", "9", "11", "15"]),
    q("🎾", "What sport uses a racket and a net?", "Tennis", ["Cricket", "Tennis", "Rugby", "Golf"]),
    q("🏀", "In basketball, how many points is a normal free throw worth?", "1", ["1", "2", "3", "4"]),
    q("🏏", "What sport uses wickets?", "Cricket", ["Baseball", "Cricket", "Hockey", "Tennis"]),
    q("🏉", "Which ball is oval-shaped?", "Rugby ball", ["Tennis ball", "Rugby ball", "Basketball", "Golf ball"]),
    q("🏌️", "In golf, what is one under par called?", "Birdie", ["Eagle", "Birdie", "Bogey", "Ace"]),
    q("🏊", "Which stroke is usually swum on your back?", "Backstroke", ["Butterfly", "Freestyle", "Backstroke", "Breaststroke"]),
    q("🥊", "What sport has rounds and gloves?", "Boxing", ["Boxing", "Cycling", "Darts", "Skiing"]),
    q("🏁", "Formula 1 is mainly what type of sport?", "Motor racing", ["Motor racing", "Athletics", "Sailing", "Gymnastics"]),
    q("🎯", "What is the highest score with one dart?", "60", ["20", "40", "50", "60"])
  ]
};

const general = [
  q("🌍", "What is the capital of France?", "Paris", ["Paris", "Berlin", "Madrid", "Rome"]),
  q("📚", "How many days are in a leap year?", "366", ["364", "365", "366", "367"]),
  q("🕰️", "How many minutes are in one hour?", "60", ["30", "45", "60", "90"]),
  q("🎨", "What colour do blue and yellow make?", "Green", ["Purple", "Green", "Orange", "Brown"]),
  q("🗺️", "Which country has the city Sydney?", "Australia", ["Canada", "Australia", "India", "Spain"]),
  q("🔢", "What is 12 x 12?", "144", ["124", "132", "144", "156"]),
  q("👑", "What board game has kings and queens?", "Chess", ["Chess", "Cluedo", "Scrabble", "Monopoly"]),
  q("🍕", "Which country is pizza most famously linked with?", "Italy", ["Italy", "Greece", "Brazil", "Japan"]),
  q("🧭", "Which direction is opposite north?", "South", ["East", "South", "West", "Left"]),
  q("💻", "What does CPU stand for?", "Central Processing Unit", ["Central Processing Unit", "Computer Power Utility", "Core Program Unit", "Control Panel User"])
];
banks["General Knowledge"] = [...general, ...banks.Flags.slice(0,4), ...banks.Music.slice(0,4), ...banks.Science.slice(0,4), ...banks.Nature.slice(0,4), ...banks.Sport.slice(0,4)];

function q(visual, text, answer, choices) { return { visual, text, answer, choices }; }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function formatTime(sec) { return `${String(Math.floor(sec/60)).padStart(2,"0")}:${String(sec%60).padStart(2,"0")}`; }

let state = {};
let tick;

$('quiz-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = $('playerName').value.trim().replace(/\s+/g, ' ').slice(0, 30);
  if (!playerName) return;
  const level = $('level').value;
  const quizLength = $('length').value;
  const subject = $('subject').value;
  const count = LENGTHS[quizLength];
  const base = banks[subject].map(item => ({...item, choices: shuffle(item.choices)}));
  const questions = Array.from({ length: count }, (_, i) => ({...shuffle(base)[i % base.length]}));
  state = { playerName, level, quizLength, subject, questions, index: 0, score: 0, seconds: 0, answered: false };
  $('setup').classList.add('hidden');
  $('results').classList.add('hidden');
  $('quiz').classList.remove('hidden');
  clearInterval(tick);
  tick = setInterval(() => { state.seconds++; $('timer').textContent = formatTime(state.seconds); }, 1000);
  showQuestion();
});

function showQuestion() {
  state.answered = false;
  const item = state.questions[state.index];
  $('progress').textContent = `${state.subject} • ${state.level} • Question ${state.index + 1} of ${state.questions.length}`;
  $('questionText').textContent = item.text;
  $('visual').innerHTML = `<div>${item.visual}<small>${visualHint(state.subject)}</small></div>`;
  $('answers').innerHTML = '';
  $('feedback').textContent = '';
  $('feedback').className = 'feedback';
  $('nextBtn').classList.add('hidden');
  item.choices.forEach(choice => {
    const button = document.createElement('button');
    button.className = 'answer';
    button.textContent = choice;
    button.onclick = () => answer(choice, button);
    $('answers').appendChild(button);
  });
}

function visualHint(subject) {
  return subject === 'Flags' ? 'Flag graphic clue' : 'Picture clue';
}

function answer(choice) {
  if (state.answered) return;
  state.answered = true;
  const item = state.questions[state.index];
  const correct = choice === item.answer;
  if (correct) state.score++;
  document.querySelectorAll('.answer').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === item.answer) btn.classList.add('correct');
    else if (btn.textContent === choice) btn.classList.add('wrong');
  });
  $('feedback').textContent = correct ? 'Correct!' : `Not quite. The answer was ${item.answer}.`;
  $('feedback').classList.add(correct ? 'good' : 'bad');
  $('nextBtn').classList.remove('hidden');
}

$('nextBtn').addEventListener('click', () => {
  state.index++;
  if (state.index >= state.questions.length) finishQuiz();
  else showQuestion();
});

async function finishQuiz() {
  clearInterval(tick);
  $('quiz').classList.add('hidden');
  $('results').classList.remove('hidden');
  const percent = Math.round((state.score / state.questions.length) * 100);
  $('resultSummary').innerHTML = `<strong>${state.playerName}</strong>, you scored <strong>${state.score}/${state.questions.length}</strong> (${percent}%).<br>Time: <strong>${formatTime(state.seconds)}</strong><br>Settings: ${state.level}, ${state.quizLength}, ${state.subject}`;
  try {
    const res = await fetch('/api/scores', {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ playerName: state.playerName, score: state.score, totalQuestions: state.questions.length, durationSeconds: state.seconds, level: state.level, quizLength: state.quizLength, subject: state.subject })
    });
    if (!res.ok) throw new Error((await res.json()).error || 'Could not save score');
    loadScores();
  } catch (err) {
    $('resultSummary').innerHTML += `<br><span class="muted">Score could not be saved: ${err.message}</span>`;
  }
}

$('playAgain').addEventListener('click', () => { $('results').classList.add('hidden'); $('setup').classList.remove('hidden'); });
$('refreshScores').addEventListener('click', loadScores);

async function loadScores() {
  $('scoreStatus').textContent = 'Loading scores…';
  try {
    const res = await fetch('/api/scores');
    const data = await res.json();
    const rows = data.scores || [];
    $('scoreRows').innerHTML = rows.map(s => `<tr><td>${escapeHtml(s.player_name)}</td><td><strong>${s.score}/${s.total_questions}</strong> (${s.percentage}%)</td><td>${s.level}, ${s.quiz_length}, ${s.subject}</td><td>${formatTime(s.duration_seconds)}</td><td>${new Date(s.completed_at + 'Z').toLocaleString()}</td></tr>`).join('');
    $('scoreStatus').textContent = rows.length ? `Showing top ${rows.length} scores.` : 'No scores yet.';
  } catch (err) {
    $('scoreStatus').textContent = 'High scores will appear after D1 is configured.';
  }
}
function escapeHtml(str) { return String(str).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
loadScores();
