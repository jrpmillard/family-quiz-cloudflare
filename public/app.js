const LENGTHS = { Short: 15, Medium: 25, Long: 50 };
const $ = (id) => document.getElementById(id);

function qFlag(code, country, choices) {
  return q({ type: "image", src: `https://flagcdn.com/w320/${code}.png`, alt: `Flag of ${country}` }, "Which country uses this flag?", country, choices);
}

const banks = {
  "Flags": [
    qFlag("gb", "United Kingdom", ["France", "United Kingdom", "Australia", "Iceland"]),
    qFlag("fr", "France", ["France", "Netherlands", "Russia", "Luxembourg"]),
    qFlag("jp", "Japan", ["Bangladesh", "Japan", "South Korea", "China"]),
    qFlag("br", "Brazil", ["Brazil", "Argentina", "Portugal", "Mexico"]),
    qFlag("ca", "Canada", ["Canada", "Austria", "Denmark", "Peru"]),
    qFlag("in", "India", ["Ireland", "India", "Niger", "Italy"]),
    qFlag("za", "South Africa", ["South Africa", "Kenya", "Ghana", "Zimbabwe"]),
    qFlag("no", "Norway", ["Sweden", "Norway", "Finland", "Denmark"]),
    qFlag("kr", "South Korea", ["South Korea", "Japan", "Thailand", "Vietnam"]),
    qFlag("mx", "Mexico", ["Italy", "Mexico", "Spain", "Colombia"]),
    qFlag("de", "Germany", ["Germany", "Belgium", "Austria", "Spain"]),
    qFlag("it", "Italy", ["Italy", "Mexico", "Ireland", "Hungary"]),
    qFlag("es", "Spain", ["Portugal", "Spain", "Colombia", "Romania"]),
    qFlag("pt", "Portugal", ["Portugal", "Brazil", "Spain", "Italy"]),
    qFlag("us", "United States", ["United States", "Malaysia", "Liberia", "Chile"]),
    qFlag("au", "Australia", ["New Zealand", "Australia", "United Kingdom", "Fiji"]),
    qFlag("nz", "New Zealand", ["Australia", "Fiji", "New Zealand", "Samoa"]),
    qFlag("se", "Sweden", ["Sweden", "Finland", "Norway", "Iceland"]),
    qFlag("fi", "Finland", ["Finland", "Sweden", "Denmark", "Greece"]),
    qFlag("dk", "Denmark", ["Norway", "Denmark", "Switzerland", "England"]),
    qFlag("ch", "Switzerland", ["Denmark", "Switzerland", "Austria", "Poland"]),
    qFlag("nl", "Netherlands", ["Netherlands", "France", "Russia", "Luxembourg"]),
    qFlag("be", "Belgium", ["Germany", "Belgium", "Romania", "Chad"]),
    qFlag("ie", "Ireland", ["Ireland", "Italy", "India", "Ivory Coast"]),
    qFlag("gr", "Greece", ["Greece", "Finland", "Israel", "Uruguay"]),
    qFlag("tr", "Turkey", ["Turkey", "Tunisia", "Pakistan", "Morocco"]),
    qFlag("cn", "China", ["Vietnam", "China", "Morocco", "Turkey"]),
    qFlag("th", "Thailand", ["Thailand", "Costa Rica", "Cambodia", "Laos"]),
    qFlag("vn", "Vietnam", ["Vietnam", "China", "Turkey", "Japan"]),
    qFlag("id", "Indonesia", ["Poland", "Indonesia", "Monaco", "Singapore"]),
    qFlag("sg", "Singapore", ["Singapore", "Indonesia", "Malaysia", "Turkey"]),
    qFlag("ar", "Argentina", ["Argentina", "Uruguay", "Guatemala", "Honduras"]),
    qFlag("cl", "Chile", ["Chile", "Texas", "Cuba", "Panama"]),
    qFlag("co", "Colombia", ["Colombia", "Ecuador", "Venezuela", "Bolivia"]),
    qFlag("pe", "Peru", ["Canada", "Peru", "Austria", "Poland"]),
    qFlag("eg", "Egypt", ["Egypt", "Iraq", "Syria", "Yemen"]),
    qFlag("ke", "Kenya", ["Kenya", "South Africa", "Ghana", "Tanzania"]),
    qFlag("ng", "Nigeria", ["Nigeria", "Ireland", "Pakistan", "Saudi Arabia"]),
    qFlag("ma", "Morocco", ["Morocco", "Turkey", "China", "Tunisia"]),
    qFlag("gh", "Ghana", ["Ghana", "Cameroon", "Senegal", "Ethiopia"]),
    qFlag("is", "Iceland", ["Iceland", "Norway", "Finland", "Faroe Islands"]),
    qFlag("pl", "Poland", ["Poland", "Indonesia", "Monaco", "Austria"]),
    qFlag("ua", "Ukraine", ["Ukraine", "Sweden", "Romania", "Kazakhstan"]),
    qFlag("cz", "Czechia", ["Czechia", "Philippines", "Slovakia", "Slovenia"]),
    qFlag("at", "Austria", ["Austria", "Latvia", "Peru", "Lebanon"]),
    qFlag("hu", "Hungary", ["Hungary", "Italy", "Bulgaria", "Iran"]),
    qFlag("ro", "Romania", ["Romania", "Chad", "Belgium", "Moldova"]),
    qFlag("il", "Israel", ["Israel", "Greece", "Argentina", "Finland"]),
    qFlag("sa", "Saudi Arabia", ["Saudi Arabia", "Pakistan", "Nigeria", "Algeria"]),
    qFlag("jm", "Jamaica", ["Jamaica", "South Africa", "Tanzania", "Kenya"])
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
  const questions = shuffle(base).slice(0, count);
  if (questions.length < count) {
    alert(`Only ${questions.length} unique questions are available for ${subject}. The quiz will use all of them without repeats.`);
  }
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
  $('visual').innerHTML = renderVisual(item.visual, state.subject);
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

function renderVisual(visual, subject) {
  if (visual && typeof visual === 'object' && visual.type === 'image') {
    return `<div><img class="question-image" src="${escapeHtml(visual.src)}" alt="${escapeHtml(visual.alt || 'Question image')}" loading="lazy"><small>${visualHint(subject)}</small></div>`;
  }
  return `<div>${visual}<small>${visualHint(subject)}</small></div>`;
}

function visualHint(subject) {
  return subject === 'Flags' ? 'Flag image clue' : 'Picture clue';
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
    
function addQuestions(subject, questions) {
  const seen = new Set(banks[subject].map(x => x.text + '|' + x.answer));
  for (const item of questions) {
    const key = item.text + '|' + item.answer;
    if (!seen.has(key)) {
      banks[subject].push(item);
      seen.add(key);
    }
  }
}

addQuestions("Music", [
  q("🎺", "Which instrument is made from brass and has valves?", "Trumpet", ["Trumpet", "Clarinet", "Cello", "Harp"]),
  q("🎶", "What is the name for a group of singers?", "Choir", ["Choir", "Orchestra", "Bandstand", "Chorus line"]),
  q("🎻", "Which is the largest common string instrument?", "Double bass", ["Violin", "Viola", "Cello", "Double bass"]),
  q("📀", "What replaced vinyl records for many listeners in the 1990s?", "CDs", ["CDs", "Cassettes", "Wax cylinders", "Piano rolls"]),
  q("🎵", "What is a repeated tune in a song often called?", "Chorus", ["Verse", "Bridge", "Chorus", "Outro"]),
  q("🥁", "What do drummers usually hold to play a kit?", "Drumsticks", ["Drumsticks", "Bows", "Plectrums", "Reeds"]),
  q("🎹", "What instrument is played by pressing keys and pumping air?", "Accordion", ["Accordion", "Triangle", "Oboe", "Banjo"]),
  q("🎧", "What does volume control?", "Loudness", ["Speed", "Loudness", "Key", "Rhythm"]),
  q("🎼", "What word means to play softly in music?", "Piano", ["Forte", "Piano", "Allegro", "Presto"]),
  q("🎼", "What word means to play loudly in music?", "Forte", ["Forte", "Piano", "Adagio", "Lento"]),
  q("🎤", "Which device is used to make a voice louder?", "Microphone", ["Speaker", "Microphone", "Metronome", "Tuner"]),
  q("🎸", "What small tool is often used to strum a guitar?", "Plectrum", ["Plectrum", "Reed", "Valve", "Bow"]),
  q("🎷", "Which instrument commonly appears in jazz bands?", "Saxophone", ["Saxophone", "Harp", "Bassoon", "Recorder"]),
  q("🎻", "How many strings does a violin usually have?", "4", ["3", "4", "5", "6"]),
  q("🎬", "Who writes the music for a film?", "Composer", ["Composer", "Editor", "Producer", "Actor"]),
  q("📻", "What does a radio station broadcast?", "Sound", ["Only pictures", "Sound", "Smells", "Books"]),
  q("🎶", "What is rhythm mainly about?", "Pattern of beats", ["Pattern of beats", "Colour", "Temperature", "Distance"]),
  q("🎵", "What is pitch mainly about?", "How high or low a note is", ["How high or low a note is", "How old a song is", "How long a cable is", "How bright a light is"]),
  q("🎹", "What family does a piano often count as?", "Keyboard", ["Keyboard", "Brass", "Woodwind", "Percussion only"]),
  q("🎤", "What is karaoke?", "Singing along to backing music", ["Painting music", "Singing along to backing music", "Tuning a guitar", "Reading silence"]),
  q("🎼", "What symbol is commonly used to start written music?", "Clef", ["Clef", "Comma", "Hashtag", "Ampersand"]),
  q("🎶", "What is harmony?", "Notes played or sung together", ["Notes played or sung together", "A type of drum", "A radio advert", "A silent pause"]),
  q("🎧", "What do headphones cover?", "Ears", ["Eyes", "Ears", "Hands", "Feet"]),
  q("🥁", "Which instrument is usually hit, shaken, or scraped?", "Percussion instrument", ["Percussion instrument", "String instrument", "Keyboard instrument", "Brass instrument"]),
  q("🎸", "Which musician usually plays bass lines?", "Bassist", ["Bassist", "Flautist", "Conductor", "Lyricist"]),
  q("🎺", "Which section of an orchestra includes trumpets and trombones?", "Brass", ["Brass", "Strings", "Choir", "Percussion"]),
  q("🎻", "Which section includes violins and cellos?", "Strings", ["Strings", "Woodwind", "Brass", "Keyboard"]),
  q("🎼", "What does a conductor usually hold?", "Baton", ["Baton", "Hammer", "Paintbrush", "Racket"]),
  q("🎵", "What is a single musical sound called?", "Note", ["Note", "Page", "Frame", "Brick"]),
  q("🎹", "What is a scale in music?", "A set of notes", ["A weighing machine", "A set of notes", "A concert ticket", "A drum skin"]),
  q("🎸", "Which band had members John, Paul, George and Ringo?", "The Beatles", ["The Beatles", "Queen", "ABBA", "Oasis"]),
  q("🎤", "Which singer was known as the King of Pop?", "Michael Jackson", ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"]),
  q("🎹", "Which composer wrote Für Elise?", "Beethoven", ["Mozart", "Beethoven", "Bach", "Chopin"]),
  q("🎼", "What is an orchestra?", "A large group of musicians", ["A large group of musicians", "A type of speaker", "A music shop", "A single drum"]),
  q("🎧", "What is streaming music?", "Playing music over the internet", ["Playing music over the internet", "Melting records", "Singing underwater", "Printing lyrics"]),
  q("🎶", "What is a duet?", "Music performed by two people", ["Music performed by two people", "A very fast song", "A broken instrument", "A silent track"]),
  q("🎵", "What is an album?", "A collection of songs", ["A collection of songs", "One drumbeat", "A concert hall", "A microphone stand"]),
  q("🎤", "What are lyrics?", "Words of a song", ["Words of a song", "Drum pedals", "Guitar strings", "Radio waves"]),
  q("🎸", "What is a chord?", "Several notes played together", ["Several notes played together", "A microphone cable", "A music award", "A drum rhythm"]),
  q("🎹", "What is a metronome used for?", "Keeping time", ["Keeping time", "Making tea", "Changing keys", "Recording video"])
]);

addQuestions("Science", [
  q("🌙", "What causes day and night?", "Earth rotating", ["Earth rotating", "Clouds moving", "The Moon spinning", "Rain falling"]),
  q("🧊", "At 0°C, water commonly starts to do what?", "Freeze", ["Boil", "Freeze", "Glow", "Vanish"]),
  q("🔥", "What gas do we breathe in that helps fires burn?", "Oxygen", ["Oxygen", "Helium", "Neon", "Argon"]),
  q("🪨", "What are rocks made of?", "Minerals", ["Plastic", "Minerals", "Clouds", "Wood"]),
  q("🌈", "What splits white light into colours?", "Prism", ["Prism", "Magnet", "Spoon", "Battery"]),
  q("🔭", "What tool helps us see faraway planets and stars?", "Telescope", ["Microscope", "Telescope", "Thermometer", "Compass"]),
  q("🧠", "Which organ controls the body?", "Brain", ["Heart", "Brain", "Liver", "Lung"]),
  q("🫁", "Which organs help us breathe?", "Lungs", ["Lungs", "Kidneys", "Bones", "Eyes"]),
  q("🦴", "What is the hard framework inside the body called?", "Skeleton", ["Skeleton", "Circuit", "Engine", "Shell"]),
  q("🧬", "What carries inherited information in living things?", "DNA", ["DNA", "Salt", "Sand", "Steam"]),
  q("⚗️", "What is chemistry mainly the study of?", "Substances and reactions", ["Substances and reactions", "Maps", "Music", "Weather only"]),
  q("🌍", "What is the third planet from the Sun?", "Earth", ["Mars", "Earth", "Venus", "Jupiter"]),
  q("☀️", "What is the Sun?", "A star", ["A planet", "A star", "A moon", "A comet"]),
  q("🪐", "Which planet is famous for its rings?", "Saturn", ["Mars", "Saturn", "Mercury", "Venus"]),
  q("🧲", "Opposite magnetic poles do what?", "Attract", ["Attract", "Explode", "Melt", "Sleep"]),
  q("🔋", "What stores chemical energy and powers devices?", "Battery", ["Battery", "Lens", "Spring", "Mirror"]),
  q("💨", "What do we call moving air?", "Wind", ["Wind", "Gravity", "Steam", "Smoke"]),
  q("☁️", "Clouds are mostly made of tiny drops of what?", "Water", ["Water", "Oil", "Glass", "Metal"]),
  q("🌧️", "What instrument measures rainfall?", "Rain gauge", ["Rain gauge", "Thermometer", "Compass", "Microscope"]),
  q("🌡️", "What scale uses °C?", "Celsius", ["Celsius", "Kilogram", "Newton", "Volt"]),
  q("⚡", "What unit is used for electrical current?", "Ampere", ["Ampere", "Litre", "Metre", "Gram"]),
  q("💡", "What unit is used for force?", "Newton", ["Newton", "Celsius", "Watt", "Mole"]),
  q("🧪", "What is table salt's chemical name?", "Sodium chloride", ["Sodium chloride", "Carbon dioxide", "Hydrogen peroxide", "Calcium carbonate"]),
  q("🧫", "What tiny living things can cause some illnesses?", "Bacteria", ["Bacteria", "Pebbles", "Stars", "Clouds"]),
  q("🦠", "What is a virus?", "A tiny infectious agent", ["A tiny infectious agent", "A type of rock", "A metal", "A planet"]),
  q("🧬", "What is evolution?", "Change in living things over generations", ["Change in living things over generations", "A weather report", "A type of telescope", "A battery test"]),
  q("🌱", "What do plants release during photosynthesis?", "Oxygen", ["Oxygen", "Gold", "Smoke", "Salt"]),
  q("🧊", "What is water vapour?", "Water as a gas", ["Water as a gas", "Water as a solid", "A type of metal", "A kind of rock"]),
  q("🔥", "What is needed for fire besides fuel and oxygen?", "Heat", ["Heat", "Ice", "Sand", "Sound"]),
  q("🔬", "What is the basic unit of life?", "Cell", ["Cell", "Atom", "Planet", "Crystal"]),
  q("⚛️", "What is the centre of an atom called?", "Nucleus", ["Nucleus", "Shell", "Ring", "Core sample"]),
  q("🌌", "What is a light-year a measure of?", "Distance", ["Distance", "Weight", "Temperature", "Speed only"]),
  q("🌋", "What type of rock forms from cooled lava?", "Igneous", ["Igneous", "Plastic", "Paper", "Rubber"]),
  q("🌊", "What force causes ocean tides mainly?", "Moon's gravity", ["Moon's gravity", "Car engines", "Cloud shadows", "Tree roots"]),
  q("🧪", "What pH is neutral?", "7", ["0", "7", "10", "14"]),
  q("🧯", "What should water not be used on?", "Electrical fire", ["Electrical fire", "Campfire ash", "Wet grass", "Mud"]),
  q("🛰️", "What orbits Earth and helps with communication?", "Satellite", ["Satellite", "Submarine", "Microscope", "Battery"]),
  q("🦕", "What scientist studies fossils?", "Palaeontologist", ["Palaeontologist", "Chef", "Pilot", "Carpenter"]),
  q("🧫", "What is a hypothesis?", "A testable idea", ["A testable idea", "A finished law", "A measurement tool", "A type of glass"]),
  q("📏", "What is the SI unit of length?", "Metre", ["Metre", "Gram", "Second", "Kelvin"])
]);

addQuestions("Nature", [
  q("🦅", "What type of animal is an eagle?", "Bird", ["Bird", "Mammal", "Fish", "Amphibian"]),
  q("🐸", "What does a tadpole grow into?", "Frog", ["Frog", "Butterfly", "Snake", "Bird"]),
  q("🌹", "Which part of many plants makes seeds?", "Flower", ["Root", "Flower", "Bark", "Stem"]),
  q("🌱", "What do roots absorb from soil?", "Water and minerals", ["Water and minerals", "Sunlight", "Stars", "Music"]),
  q("🐍", "What type of animal is a snake?", "Reptile", ["Reptile", "Bird", "Mammal", "Fish"]),
  q("🐟", "What do fish use to breathe underwater?", "Gills", ["Gills", "Lungs", "Leaves", "Wings"]),
  q("🦇", "Which mammal can truly fly?", "Bat", ["Bat", "Squirrel", "Penguin", "Kangaroo"]),
  q("🐨", "Koalas mostly eat leaves from which tree?", "Eucalyptus", ["Oak", "Eucalyptus", "Pine", "Palm"]),
  q("🐼", "What do giant pandas mainly eat?", "Bamboo", ["Bamboo", "Grass only", "Fish", "Honey"]),
  q("🦒", "Which animal has a very long neck?", "Giraffe", ["Giraffe", "Zebra", "Hippo", "Rhino"]),
  q("🐘", "Which land animal is the largest?", "African elephant", ["African elephant", "Lion", "Horse", "Bear"]),
  q("🐪", "Which animal is known as the ship of the desert?", "Camel", ["Camel", "Horse", "Goat", "Seal"]),
  q("🦘", "Which animal carries babies in a pouch?", "Kangaroo", ["Kangaroo", "Tiger", "Rabbit", "Deer"]),
  q("🦉", "Which bird is often active at night?", "Owl", ["Owl", "Swan", "Chicken", "Duck"]),
  q("🐜", "What insects often live in colonies with a queen?", "Ants", ["Ants", "Dragonflies", "Moths", "Beetles only"]),
  q("🕷️", "How many legs does a spider have?", "8", ["6", "8", "10", "12"]),
  q("🦀", "What type of animal is a crab?", "Crustacean", ["Crustacean", "Bird", "Mammal", "Reptile"]),
  q("🌾", "What is wheat?", "A cereal crop", ["A cereal crop", "A sea animal", "A rock", "A cloud"]),
  q("🍁", "Which season do many trees drop leaves?", "Autumn", ["Spring", "Summer", "Autumn", "Winter only"]),
  q("🌻", "Which flower is famous for turning toward the Sun?", "Sunflower", ["Sunflower", "Rose", "Tulip", "Daisy"]),
  q("🌿", "What is the green pigment in plants called?", "Chlorophyll", ["Chlorophyll", "Melanin", "Keratin", "Hemoglobin"]),
  q("🏜️", "What is a very dry habitat called?", "Desert", ["Desert", "Rainforest", "Tundra", "Wetland"]),
  q("🌲", "What trees usually keep needles all year?", "Evergreens", ["Evergreens", "Deciduous trees", "Cacti", "Mosses"]),
  q("🪸", "Coral reefs are found mostly in what water?", "Warm shallow seas", ["Warm shallow seas", "Frozen lakes", "Deep caves", "Rivers only"]),
  q("🐬", "What type of animal is a dolphin?", "Mammal", ["Mammal", "Fish", "Reptile", "Bird"]),
  q("🦈", "What type of animal is a shark?", "Fish", ["Fish", "Mammal", "Bird", "Insect"]),
  q("🦭", "Where do seals spend much of their time?", "In water", ["In water", "In trees", "Underground", "In deserts only"]),
  q("🐌", "What does a snail carry on its back?", "Shell", ["Shell", "Nest", "Horn", "Wing"]),
  q("🦔", "Which animal has spines and curls up?", "Hedgehog", ["Hedgehog", "Rabbit", "Otter", "Fox"]),
  q("🦊", "What is a fox?", "Mammal", ["Mammal", "Bird", "Fish", "Insect"]),
  q("🦌", "What are male deer often known for?", "Antlers", ["Antlers", "Wings", "Fins", "Shells"]),
  q("🦩", "Which bird is famous for pink feathers?", "Flamingo", ["Flamingo", "Crow", "Sparrow", "Eagle"]),
  q("🐊", "What type of animal is a crocodile?", "Reptile", ["Reptile", "Mammal", "Bird", "Fish"]),
  q("🐢", "What protects a turtle's body?", "Shell", ["Shell", "Fur", "Feathers", "Scales only"]),
  q("🪺", "Where do many birds lay eggs?", "Nest", ["Nest", "Web", "Burrow only", "Hive"]),
  q("🐝", "What do bees collect from flowers?", "Nectar", ["Nectar", "Sand", "Snow", "Salt"]),
  q("🦋", "What is metamorphosis?", "A big body change", ["A big body change", "A type of tree", "A weather event", "A mountain"]),
  q("🌍", "What is an ecosystem?", "Living things and their environment", ["Living things and their environment", "A single rock", "A sports team", "A computer game"]),
  q("🌧️", "What forest gets lots of rain?", "Rainforest", ["Rainforest", "Desert", "Savanna", "Tundra"]),
  q("❄️", "What is the cold treeless region near the poles called?", "Tundra", ["Tundra", "Jungle", "Prairie", "Marsh"])
]);

addQuestions("Sport", [
  q("🏃", "What sport includes sprinting and long jump?", "Athletics", ["Athletics", "Chess", "Cricket", "Sailing"]),
  q("🏐", "Which sport uses a high net and teams hit a ball over it?", "Volleyball", ["Volleyball", "Golf", "Boxing", "Rugby"]),
  q("🏒", "What sport is played on ice with sticks and a puck?", "Ice hockey", ["Ice hockey", "Tennis", "Cricket", "Darts"]),
  q("⚾", "What sport has bases and home runs?", "Baseball", ["Baseball", "Rugby", "Skiing", "Cycling"]),
  q("🏸", "What sport uses a shuttlecock?", "Badminton", ["Badminton", "Squash", "Golf", "Netball"]),
  q("🏓", "What is table tennis also called?", "Ping-pong", ["Ping-pong", "Rounders", "Pool", "Curling"]),
  q("🥌", "Which sport uses stones sliding on ice?", "Curling", ["Curling", "Sailing", "Judo", "Fencing"]),
  q("🤺", "Which sport uses foils, épées, or sabres?", "Fencing", ["Fencing", "Archery", "Hockey", "Rowing"]),
  q("🏹", "Which sport uses a bow and arrows?", "Archery", ["Archery", "Boxing", "Tennis", "Golf"]),
  q("🚴", "Which sport features the Tour de France?", "Cycling", ["Cycling", "Running", "Swimming", "Cricket"]),
  q("⛷️", "Which sport is done on snow with skis?", "Skiing", ["Skiing", "Sailing", "Tennis", "Darts"]),
  q("🏂", "Which sport uses one board on snow?", "Snowboarding", ["Snowboarding", "Ski jumping", "Surfing", "Skating"]),
  q("🏄", "Which sport uses waves and a board?", "Surfing", ["Surfing", "Rowing", "Cycling", "Curling"]),
  q("⛵", "Which sport uses wind and boats?", "Sailing", ["Sailing", "Boxing", "Football", "Squash"]),
  q("🚣", "Which sport uses oars?", "Rowing", ["Rowing", "Rugby", "Golf", "Basketball"]),
  q("🏇", "Which sport involves jockeys?", "Horse racing", ["Horse racing", "Tennis", "Netball", "Hockey"]),
  q("🥋", "Which martial art comes from Japan and means gentle way?", "Judo", ["Judo", "Golf", "Cricket", "Curling"]),
  q("🥋", "Which martial art is famous for kicks and comes from Korea?", "Taekwondo", ["Taekwondo", "Judo", "Fencing", "Darts"]),
  q("🏋️", "Which sport is about lifting heavy weights?", "Weightlifting", ["Weightlifting", "Tennis", "Sailing", "Hockey"]),
  q("🤸", "Which sport includes vault, bars, and beam?", "Gymnastics", ["Gymnastics", "Cricket", "Rugby", "Darts"]),
  q("🏉", "How many points is a rugby union try worth?", "5", ["3", "5", "6", "7"]),
  q("⚽", "What is a goalkeeper mainly allowed to use in their penalty area?", "Hands", ["Hands", "A bat", "A racket", "A stick"]),
  q("🎾", "What score comes after deuce in tennis?", "Advantage", ["Advantage", "Birdie", "Try", "Penalty"]),
  q("🏏", "How many stumps are in a cricket wicket?", "3", ["2", "3", "4", "5"]),
  q("🏀", "What is bouncing the basketball while moving called?", "Dribbling", ["Dribbling", "Bowling", "Serving", "Putting"]),
  q("🏌️", "What is the starting place for a golf hole called?", "Tee", ["Tee", "Crease", "Baseline", "Pitch"]),
  q("🎯", "What game uses a board numbered 1 to 20?", "Darts", ["Darts", "Snooker", "Golf", "Curling"]),
  q("🎱", "Which sport uses cues and balls on a table?", "Snooker or pool", ["Snooker or pool", "Boxing", "Netball", "Skiing"]),
  q("🏁", "What flag usually ends a motor race?", "Chequered flag", ["Chequered flag", "Red flag", "Blue flag", "Green flag"]),
  q("🥅", "What do players try to score into in hockey?", "Goal", ["Goal", "Basket", "Hole", "Net only"]),
  q("🏐", "How many players are on a netball team on court?", "7", ["5", "6", "7", "11"]),
  q("🏈", "Which sport is associated with the Super Bowl?", "American football", ["American football", "Baseball", "Ice hockey", "Basketball"]),
  q("🏆", "What are the Olympic gold, silver and bronze examples of?", "Medals", ["Medals", "Tickets", "Flags", "Shoes"]),
  q("🏃", "How long is a marathon approximately?", "26.2 miles", ["10 miles", "13.1 miles", "26.2 miles", "50 miles"]),
  q("🏊", "Which swimming stroke is often considered the fastest?", "Freestyle", ["Freestyle", "Backstroke", "Breaststroke", "Butterfly"]),
  q("⛳", "What is a hole-in-one also called?", "Ace", ["Ace", "Birdie", "Bogey", "Try"]),
  q("⚽", "What is the FIFA World Cup mainly for?", "Football", ["Football", "Rugby", "Tennis", "Cricket"]),
  q("🎾", "What surface is Wimbledon famous for?", "Grass", ["Grass", "Clay", "Ice", "Sand"]),
  q("🏏", "What is The Ashes contested in?", "Cricket", ["Cricket", "Rugby", "Football", "Golf"]),
  q("🏀", "Which league is famous for teams like Lakers and Celtics?", "NBA", ["NBA", "NFL", "MLB", "NHL"])
]);

addQuestions("General Knowledge", [
  ...banks.Music.slice(4, 12), ...banks.Science.slice(4, 14), ...banks.Nature.slice(4, 14), ...banks.Sport.slice(4, 14), ...banks.Flags.slice(4, 16),
  q("📅", "How many months are in a year?", "12", ["10", "11", "12", "13"]),
  q("🌍", "Which continent is Egypt in?", "Africa", ["Africa", "Europe", "Asia", "South America"]),
  q("🦷", "What kind of doctor looks after teeth?", "Dentist", ["Dentist", "Pilot", "Chef", "Builder"]),
  q("🚦", "What colour usually means stop?", "Red", ["Red", "Green", "Blue", "Purple"]),
  q("📖", "What is a person who writes books called?", "Author", ["Author", "Actor", "Driver", "Painter only"]),
  q("🏙️", "What is the capital of England?", "London", ["London", "Cardiff", "Edinburgh", "Belfast"]),
  q("💷", "What currency is used in the UK?", "Pound sterling", ["Pound sterling", "Euro", "Dollar", "Yen"]),
  q("🧊", "What is frozen water called?", "Ice", ["Ice", "Steam", "Mist", "Foam"]),
  q("✉️", "What do we use to send a letter?", "Envelope", ["Envelope", "Plate", "Bottle", "Shoe"]),
  q("🕰️", "How many seconds are in a minute?", "60", ["30", "45", "60", "100"])
]);

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

function addQuestions(subject, questions) {
  const seen = new Set(banks[subject].map(x => x.text + '|' + x.answer));
  for (const item of questions) {
    const key = item.text + '|' + item.answer;
    if (!seen.has(key)) {
      banks[subject].push(item);
      seen.add(key);
    }
  }
}

addQuestions("Music", [
  q("🎺", "Which instrument is made from brass and has valves?", "Trumpet", ["Trumpet", "Clarinet", "Cello", "Harp"]),
  q("🎶", "What is the name for a group of singers?", "Choir", ["Choir", "Orchestra", "Bandstand", "Chorus line"]),
  q("🎻", "Which is the largest common string instrument?", "Double bass", ["Violin", "Viola", "Cello", "Double bass"]),
  q("📀", "What replaced vinyl records for many listeners in the 1990s?", "CDs", ["CDs", "Cassettes", "Wax cylinders", "Piano rolls"]),
  q("🎵", "What is a repeated tune in a song often called?", "Chorus", ["Verse", "Bridge", "Chorus", "Outro"]),
  q("🥁", "What do drummers usually hold to play a kit?", "Drumsticks", ["Drumsticks", "Bows", "Plectrums", "Reeds"]),
  q("🎹", "What instrument is played by pressing keys and pumping air?", "Accordion", ["Accordion", "Triangle", "Oboe", "Banjo"]),
  q("🎧", "What does volume control?", "Loudness", ["Speed", "Loudness", "Key", "Rhythm"]),
  q("🎼", "What word means to play softly in music?", "Piano", ["Forte", "Piano", "Allegro", "Presto"]),
  q("🎼", "What word means to play loudly in music?", "Forte", ["Forte", "Piano", "Adagio", "Lento"]),
  q("🎤", "Which device is used to make a voice louder?", "Microphone", ["Speaker", "Microphone", "Metronome", "Tuner"]),
  q("🎸", "What small tool is often used to strum a guitar?", "Plectrum", ["Plectrum", "Reed", "Valve", "Bow"]),
  q("🎷", "Which instrument commonly appears in jazz bands?", "Saxophone", ["Saxophone", "Harp", "Bassoon", "Recorder"]),
  q("🎻", "How many strings does a violin usually have?", "4", ["3", "4", "5", "6"]),
  q("🎬", "Who writes the music for a film?", "Composer", ["Composer", "Editor", "Producer", "Actor"]),
  q("📻", "What does a radio station broadcast?", "Sound", ["Only pictures", "Sound", "Smells", "Books"]),
  q("🎶", "What is rhythm mainly about?", "Pattern of beats", ["Pattern of beats", "Colour", "Temperature", "Distance"]),
  q("🎵", "What is pitch mainly about?", "How high or low a note is", ["How high or low a note is", "How old a song is", "How long a cable is", "How bright a light is"]),
  q("🎹", "What family does a piano often count as?", "Keyboard", ["Keyboard", "Brass", "Woodwind", "Percussion only"]),
  q("🎤", "What is karaoke?", "Singing along to backing music", ["Painting music", "Singing along to backing music", "Tuning a guitar", "Reading silence"]),
  q("🎼", "What symbol is commonly used to start written music?", "Clef", ["Clef", "Comma", "Hashtag", "Ampersand"]),
  q("🎶", "What is harmony?", "Notes played or sung together", ["Notes played or sung together", "A type of drum", "A radio advert", "A silent pause"]),
  q("🎧", "What do headphones cover?", "Ears", ["Eyes", "Ears", "Hands", "Feet"]),
  q("🥁", "Which instrument is usually hit, shaken, or scraped?", "Percussion instrument", ["Percussion instrument", "String instrument", "Keyboard instrument", "Brass instrument"]),
  q("🎸", "Which musician usually plays bass lines?", "Bassist", ["Bassist", "Flautist", "Conductor", "Lyricist"]),
  q("🎺", "Which section of an orchestra includes trumpets and trombones?", "Brass", ["Brass", "Strings", "Choir", "Percussion"]),
  q("🎻", "Which section includes violins and cellos?", "Strings", ["Strings", "Woodwind", "Brass", "Keyboard"]),
  q("🎼", "What does a conductor usually hold?", "Baton", ["Baton", "Hammer", "Paintbrush", "Racket"]),
  q("🎵", "What is a single musical sound called?", "Note", ["Note", "Page", "Frame", "Brick"]),
  q("🎹", "What is a scale in music?", "A set of notes", ["A weighing machine", "A set of notes", "A concert ticket", "A drum skin"]),
  q("🎸", "Which band had members John, Paul, George and Ringo?", "The Beatles", ["The Beatles", "Queen", "ABBA", "Oasis"]),
  q("🎤", "Which singer was known as the King of Pop?", "Michael Jackson", ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"]),
  q("🎹", "Which composer wrote Für Elise?", "Beethoven", ["Mozart", "Beethoven", "Bach", "Chopin"]),
  q("🎼", "What is an orchestra?", "A large group of musicians", ["A large group of musicians", "A type of speaker", "A music shop", "A single drum"]),
  q("🎧", "What is streaming music?", "Playing music over the internet", ["Playing music over the internet", "Melting records", "Singing underwater", "Printing lyrics"]),
  q("🎶", "What is a duet?", "Music performed by two people", ["Music performed by two people", "A very fast song", "A broken instrument", "A silent track"]),
  q("🎵", "What is an album?", "A collection of songs", ["A collection of songs", "One drumbeat", "A concert hall", "A microphone stand"]),
  q("🎤", "What are lyrics?", "Words of a song", ["Words of a song", "Drum pedals", "Guitar strings", "Radio waves"]),
  q("🎸", "What is a chord?", "Several notes played together", ["Several notes played together", "A microphone cable", "A music award", "A drum rhythm"]),
  q("🎹", "What is a metronome used for?", "Keeping time", ["Keeping time", "Making tea", "Changing keys", "Recording video"])
]);

addQuestions("Science", [
  q("🌙", "What causes day and night?", "Earth rotating", ["Earth rotating", "Clouds moving", "The Moon spinning", "Rain falling"]),
  q("🧊", "At 0°C, water commonly starts to do what?", "Freeze", ["Boil", "Freeze", "Glow", "Vanish"]),
  q("🔥", "What gas do we breathe in that helps fires burn?", "Oxygen", ["Oxygen", "Helium", "Neon", "Argon"]),
  q("🪨", "What are rocks made of?", "Minerals", ["Plastic", "Minerals", "Clouds", "Wood"]),
  q("🌈", "What splits white light into colours?", "Prism", ["Prism", "Magnet", "Spoon", "Battery"]),
  q("🔭", "What tool helps us see faraway planets and stars?", "Telescope", ["Microscope", "Telescope", "Thermometer", "Compass"]),
  q("🧠", "Which organ controls the body?", "Brain", ["Heart", "Brain", "Liver", "Lung"]),
  q("🫁", "Which organs help us breathe?", "Lungs", ["Lungs", "Kidneys", "Bones", "Eyes"]),
  q("🦴", "What is the hard framework inside the body called?", "Skeleton", ["Skeleton", "Circuit", "Engine", "Shell"]),
  q("🧬", "What carries inherited information in living things?", "DNA", ["DNA", "Salt", "Sand", "Steam"]),
  q("⚗️", "What is chemistry mainly the study of?", "Substances and reactions", ["Substances and reactions", "Maps", "Music", "Weather only"]),
  q("🌍", "What is the third planet from the Sun?", "Earth", ["Mars", "Earth", "Venus", "Jupiter"]),
  q("☀️", "What is the Sun?", "A star", ["A planet", "A star", "A moon", "A comet"]),
  q("🪐", "Which planet is famous for its rings?", "Saturn", ["Mars", "Saturn", "Mercury", "Venus"]),
  q("🧲", "Opposite magnetic poles do what?", "Attract", ["Attract", "Explode", "Melt", "Sleep"]),
  q("🔋", "What stores chemical energy and powers devices?", "Battery", ["Battery", "Lens", "Spring", "Mirror"]),
  q("💨", "What do we call moving air?", "Wind", ["Wind", "Gravity", "Steam", "Smoke"]),
  q("☁️", "Clouds are mostly made of tiny drops of what?", "Water", ["Water", "Oil", "Glass", "Metal"]),
  q("🌧️", "What instrument measures rainfall?", "Rain gauge", ["Rain gauge", "Thermometer", "Compass", "Microscope"]),
  q("🌡️", "What scale uses °C?", "Celsius", ["Celsius", "Kilogram", "Newton", "Volt"]),
  q("⚡", "What unit is used for electrical current?", "Ampere", ["Ampere", "Litre", "Metre", "Gram"]),
  q("💡", "What unit is used for force?", "Newton", ["Newton", "Celsius", "Watt", "Mole"]),
  q("🧪", "What is table salt's chemical name?", "Sodium chloride", ["Sodium chloride", "Carbon dioxide", "Hydrogen peroxide", "Calcium carbonate"]),
  q("🧫", "What tiny living things can cause some illnesses?", "Bacteria", ["Bacteria", "Pebbles", "Stars", "Clouds"]),
  q("🦠", "What is a virus?", "A tiny infectious agent", ["A tiny infectious agent", "A type of rock", "A metal", "A planet"]),
  q("🧬", "What is evolution?", "Change in living things over generations", ["Change in living things over generations", "A weather report", "A type of telescope", "A battery test"]),
  q("🌱", "What do plants release during photosynthesis?", "Oxygen", ["Oxygen", "Gold", "Smoke", "Salt"]),
  q("🧊", "What is water vapour?", "Water as a gas", ["Water as a gas", "Water as a solid", "A type of metal", "A kind of rock"]),
  q("🔥", "What is needed for fire besides fuel and oxygen?", "Heat", ["Heat", "Ice", "Sand", "Sound"]),
  q("🔬", "What is the basic unit of life?", "Cell", ["Cell", "Atom", "Planet", "Crystal"]),
  q("⚛️", "What is the centre of an atom called?", "Nucleus", ["Nucleus", "Shell", "Ring", "Core sample"]),
  q("🌌", "What is a light-year a measure of?", "Distance", ["Distance", "Weight", "Temperature", "Speed only"]),
  q("🌋", "What type of rock forms from cooled lava?", "Igneous", ["Igneous", "Plastic", "Paper", "Rubber"]),
  q("🌊", "What force causes ocean tides mainly?", "Moon's gravity", ["Moon's gravity", "Car engines", "Cloud shadows", "Tree roots"]),
  q("🧪", "What pH is neutral?", "7", ["0", "7", "10", "14"]),
  q("🧯", "What should water not be used on?", "Electrical fire", ["Electrical fire", "Campfire ash", "Wet grass", "Mud"]),
  q("🛰️", "What orbits Earth and helps with communication?", "Satellite", ["Satellite", "Submarine", "Microscope", "Battery"]),
  q("🦕", "What scientist studies fossils?", "Palaeontologist", ["Palaeontologist", "Chef", "Pilot", "Carpenter"]),
  q("🧫", "What is a hypothesis?", "A testable idea", ["A testable idea", "A finished law", "A measurement tool", "A type of glass"]),
  q("📏", "What is the SI unit of length?", "Metre", ["Metre", "Gram", "Second", "Kelvin"])
]);

addQuestions("Nature", [
  q("🦅", "What type of animal is an eagle?", "Bird", ["Bird", "Mammal", "Fish", "Amphibian"]),
  q("🐸", "What does a tadpole grow into?", "Frog", ["Frog", "Butterfly", "Snake", "Bird"]),
  q("🌹", "Which part of many plants makes seeds?", "Flower", ["Root", "Flower", "Bark", "Stem"]),
  q("🌱", "What do roots absorb from soil?", "Water and minerals", ["Water and minerals", "Sunlight", "Stars", "Music"]),
  q("🐍", "What type of animal is a snake?", "Reptile", ["Reptile", "Bird", "Mammal", "Fish"]),
  q("🐟", "What do fish use to breathe underwater?", "Gills", ["Gills", "Lungs", "Leaves", "Wings"]),
  q("🦇", "Which mammal can truly fly?", "Bat", ["Bat", "Squirrel", "Penguin", "Kangaroo"]),
  q("🐨", "Koalas mostly eat leaves from which tree?", "Eucalyptus", ["Oak", "Eucalyptus", "Pine", "Palm"]),
  q("🐼", "What do giant pandas mainly eat?", "Bamboo", ["Bamboo", "Grass only", "Fish", "Honey"]),
  q("🦒", "Which animal has a very long neck?", "Giraffe", ["Giraffe", "Zebra", "Hippo", "Rhino"]),
  q("🐘", "Which land animal is the largest?", "African elephant", ["African elephant", "Lion", "Horse", "Bear"]),
  q("🐪", "Which animal is known as the ship of the desert?", "Camel", ["Camel", "Horse", "Goat", "Seal"]),
  q("🦘", "Which animal carries babies in a pouch?", "Kangaroo", ["Kangaroo", "Tiger", "Rabbit", "Deer"]),
  q("🦉", "Which bird is often active at night?", "Owl", ["Owl", "Swan", "Chicken", "Duck"]),
  q("🐜", "What insects often live in colonies with a queen?", "Ants", ["Ants", "Dragonflies", "Moths", "Beetles only"]),
  q("🕷️", "How many legs does a spider have?", "8", ["6", "8", "10", "12"]),
  q("🦀", "What type of animal is a crab?", "Crustacean", ["Crustacean", "Bird", "Mammal", "Reptile"]),
  q("🌾", "What is wheat?", "A cereal crop", ["A cereal crop", "A sea animal", "A rock", "A cloud"]),
  q("🍁", "Which season do many trees drop leaves?", "Autumn", ["Spring", "Summer", "Autumn", "Winter only"]),
  q("🌻", "Which flower is famous for turning toward the Sun?", "Sunflower", ["Sunflower", "Rose", "Tulip", "Daisy"]),
  q("🌿", "What is the green pigment in plants called?", "Chlorophyll", ["Chlorophyll", "Melanin", "Keratin", "Hemoglobin"]),
  q("🏜️", "What is a very dry habitat called?", "Desert", ["Desert", "Rainforest", "Tundra", "Wetland"]),
  q("🌲", "What trees usually keep needles all year?", "Evergreens", ["Evergreens", "Deciduous trees", "Cacti", "Mosses"]),
  q("🪸", "Coral reefs are found mostly in what water?", "Warm shallow seas", ["Warm shallow seas", "Frozen lakes", "Deep caves", "Rivers only"]),
  q("🐬", "What type of animal is a dolphin?", "Mammal", ["Mammal", "Fish", "Reptile", "Bird"]),
  q("🦈", "What type of animal is a shark?", "Fish", ["Fish", "Mammal", "Bird", "Insect"]),
  q("🦭", "Where do seals spend much of their time?", "In water", ["In water", "In trees", "Underground", "In deserts only"]),
  q("🐌", "What does a snail carry on its back?", "Shell", ["Shell", "Nest", "Horn", "Wing"]),
  q("🦔", "Which animal has spines and curls up?", "Hedgehog", ["Hedgehog", "Rabbit", "Otter", "Fox"]),
  q("🦊", "What is a fox?", "Mammal", ["Mammal", "Bird", "Fish", "Insect"]),
  q("🦌", "What are male deer often known for?", "Antlers", ["Antlers", "Wings", "Fins", "Shells"]),
  q("🦩", "Which bird is famous for pink feathers?", "Flamingo", ["Flamingo", "Crow", "Sparrow", "Eagle"]),
  q("🐊", "What type of animal is a crocodile?", "Reptile", ["Reptile", "Mammal", "Bird", "Fish"]),
  q("🐢", "What protects a turtle's body?", "Shell", ["Shell", "Fur", "Feathers", "Scales only"]),
  q("🪺", "Where do many birds lay eggs?", "Nest", ["Nest", "Web", "Burrow only", "Hive"]),
  q("🐝", "What do bees collect from flowers?", "Nectar", ["Nectar", "Sand", "Snow", "Salt"]),
  q("🦋", "What is metamorphosis?", "A big body change", ["A big body change", "A type of tree", "A weather event", "A mountain"]),
  q("🌍", "What is an ecosystem?", "Living things and their environment", ["Living things and their environment", "A single rock", "A sports team", "A computer game"]),
  q("🌧️", "What forest gets lots of rain?", "Rainforest", ["Rainforest", "Desert", "Savanna", "Tundra"]),
  q("❄️", "What is the cold treeless region near the poles called?", "Tundra", ["Tundra", "Jungle", "Prairie", "Marsh"])
]);

addQuestions("Sport", [
  q("🏃", "What sport includes sprinting and long jump?", "Athletics", ["Athletics", "Chess", "Cricket", "Sailing"]),
  q("🏐", "Which sport uses a high net and teams hit a ball over it?", "Volleyball", ["Volleyball", "Golf", "Boxing", "Rugby"]),
  q("🏒", "What sport is played on ice with sticks and a puck?", "Ice hockey", ["Ice hockey", "Tennis", "Cricket", "Darts"]),
  q("⚾", "What sport has bases and home runs?", "Baseball", ["Baseball", "Rugby", "Skiing", "Cycling"]),
  q("🏸", "What sport uses a shuttlecock?", "Badminton", ["Badminton", "Squash", "Golf", "Netball"]),
  q("🏓", "What is table tennis also called?", "Ping-pong", ["Ping-pong", "Rounders", "Pool", "Curling"]),
  q("🥌", "Which sport uses stones sliding on ice?", "Curling", ["Curling", "Sailing", "Judo", "Fencing"]),
  q("🤺", "Which sport uses foils, épées, or sabres?", "Fencing", ["Fencing", "Archery", "Hockey", "Rowing"]),
  q("🏹", "Which sport uses a bow and arrows?", "Archery", ["Archery", "Boxing", "Tennis", "Golf"]),
  q("🚴", "Which sport features the Tour de France?", "Cycling", ["Cycling", "Running", "Swimming", "Cricket"]),
  q("⛷️", "Which sport is done on snow with skis?", "Skiing", ["Skiing", "Sailing", "Tennis", "Darts"]),
  q("🏂", "Which sport uses one board on snow?", "Snowboarding", ["Snowboarding", "Ski jumping", "Surfing", "Skating"]),
  q("🏄", "Which sport uses waves and a board?", "Surfing", ["Surfing", "Rowing", "Cycling", "Curling"]),
  q("⛵", "Which sport uses wind and boats?", "Sailing", ["Sailing", "Boxing", "Football", "Squash"]),
  q("🚣", "Which sport uses oars?", "Rowing", ["Rowing", "Rugby", "Golf", "Basketball"]),
  q("🏇", "Which sport involves jockeys?", "Horse racing", ["Horse racing", "Tennis", "Netball", "Hockey"]),
  q("🥋", "Which martial art comes from Japan and means gentle way?", "Judo", ["Judo", "Golf", "Cricket", "Curling"]),
  q("🥋", "Which martial art is famous for kicks and comes from Korea?", "Taekwondo", ["Taekwondo", "Judo", "Fencing", "Darts"]),
  q("🏋️", "Which sport is about lifting heavy weights?", "Weightlifting", ["Weightlifting", "Tennis", "Sailing", "Hockey"]),
  q("🤸", "Which sport includes vault, bars, and beam?", "Gymnastics", ["Gymnastics", "Cricket", "Rugby", "Darts"]),
  q("🏉", "How many points is a rugby union try worth?", "5", ["3", "5", "6", "7"]),
  q("⚽", "What is a goalkeeper mainly allowed to use in their penalty area?", "Hands", ["Hands", "A bat", "A racket", "A stick"]),
  q("🎾", "What score comes after deuce in tennis?", "Advantage", ["Advantage", "Birdie", "Try", "Penalty"]),
  q("🏏", "How many stumps are in a cricket wicket?", "3", ["2", "3", "4", "5"]),
  q("🏀", "What is bouncing the basketball while moving called?", "Dribbling", ["Dribbling", "Bowling", "Serving", "Putting"]),
  q("🏌️", "What is the starting place for a golf hole called?", "Tee", ["Tee", "Crease", "Baseline", "Pitch"]),
  q("🎯", "What game uses a board numbered 1 to 20?", "Darts", ["Darts", "Snooker", "Golf", "Curling"]),
  q("🎱", "Which sport uses cues and balls on a table?", "Snooker or pool", ["Snooker or pool", "Boxing", "Netball", "Skiing"]),
  q("🏁", "What flag usually ends a motor race?", "Chequered flag", ["Chequered flag", "Red flag", "Blue flag", "Green flag"]),
  q("🥅", "What do players try to score into in hockey?", "Goal", ["Goal", "Basket", "Hole", "Net only"]),
  q("🏐", "How many players are on a netball team on court?", "7", ["5", "6", "7", "11"]),
  q("🏈", "Which sport is associated with the Super Bowl?", "American football", ["American football", "Baseball", "Ice hockey", "Basketball"]),
  q("🏆", "What are the Olympic gold, silver and bronze examples of?", "Medals", ["Medals", "Tickets", "Flags", "Shoes"]),
  q("🏃", "How long is a marathon approximately?", "26.2 miles", ["10 miles", "13.1 miles", "26.2 miles", "50 miles"]),
  q("🏊", "Which swimming stroke is often considered the fastest?", "Freestyle", ["Freestyle", "Backstroke", "Breaststroke", "Butterfly"]),
  q("⛳", "What is a hole-in-one also called?", "Ace", ["Ace", "Birdie", "Bogey", "Try"]),
  q("⚽", "What is the FIFA World Cup mainly for?", "Football", ["Football", "Rugby", "Tennis", "Cricket"]),
  q("🎾", "What surface is Wimbledon famous for?", "Grass", ["Grass", "Clay", "Ice", "Sand"]),
  q("🏏", "What is The Ashes contested in?", "Cricket", ["Cricket", "Rugby", "Football", "Golf"]),
  q("🏀", "Which league is famous for teams like Lakers and Celtics?", "NBA", ["NBA", "NFL", "MLB", "NHL"])
]);

addQuestions("General Knowledge", [
  ...banks.Music.slice(4, 12), ...banks.Science.slice(4, 14), ...banks.Nature.slice(4, 14), ...banks.Sport.slice(4, 14), ...banks.Flags.slice(4, 16),
  q("📅", "How many months are in a year?", "12", ["10", "11", "12", "13"]),
  q("🌍", "Which continent is Egypt in?", "Africa", ["Africa", "Europe", "Asia", "South America"]),
  q("🦷", "What kind of doctor looks after teeth?", "Dentist", ["Dentist", "Pilot", "Chef", "Builder"]),
  q("🚦", "What colour usually means stop?", "Red", ["Red", "Green", "Blue", "Purple"]),
  q("📖", "What is a person who writes books called?", "Author", ["Author", "Actor", "Driver", "Painter only"]),
  q("🏙️", "What is the capital of England?", "London", ["London", "Cardiff", "Edinburgh", "Belfast"]),
  q("💷", "What currency is used in the UK?", "Pound sterling", ["Pound sterling", "Euro", "Dollar", "Yen"]),
  q("🧊", "What is frozen water called?", "Ice", ["Ice", "Steam", "Mist", "Foam"]),
  q("✉️", "What do we use to send a letter?", "Envelope", ["Envelope", "Plate", "Bottle", "Shoe"]),
  q("🕰️", "How many seconds are in a minute?", "60", ["30", "45", "60", "100"])
]);

loadScores();
