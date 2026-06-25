CREATE TABLE IF NOT EXISTS quiz_scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  player_name TEXT NOT NULL CHECK(length(player_name) BETWEEN 1 AND 30),
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  percentage REAL NOT NULL,
  duration_seconds INTEGER NOT NULL,
  level TEXT NOT NULL,
  quiz_length TEXT NOT NULL,
  subject TEXT NOT NULL,
  completed_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_quiz_scores_percentage ON quiz_scores(percentage DESC, duration_seconds ASC);
CREATE INDEX IF NOT EXISTS idx_quiz_scores_completed ON quiz_scores(completed_at DESC);
