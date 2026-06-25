CREATE TABLE IF NOT EXISTS scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  player_name TEXT NOT NULL,
  profile_id TEXT,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  percent INTEGER NOT NULL,
  subject TEXT NOT NULL,
  level TEXT NOT NULL,
  length_label TEXT NOT NULL,
  seconds INTEGER NOT NULL,
  completed_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_scores_best ON scores(percent DESC, seconds ASC, completed_at DESC);
CREATE INDEX IF NOT EXISTS idx_scores_player ON scores(player_name, completed_at DESC);
