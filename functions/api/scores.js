const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" }
  });

const cleanName = (value) => String(value || "").trim().replace(/\s+/g, " ").slice(0, 30);

export async function onRequestGet({ env, request }) {
  try {
    if (!env.DB) return json({ error: "D1 binding DB is not configured." }, 500);
    const url = new URL(request.url);
    const subject = url.searchParams.get("subject");
    const level = url.searchParams.get("level");
    let query = "SELECT player_name, score, total_questions, percentage, duration_seconds, level, quiz_length, subject, completed_at FROM quiz_scores";
    const clauses = [];
    const params = [];
    if (subject) { clauses.push("subject = ?"); params.push(subject); }
    if (level) { clauses.push("level = ?"); params.push(level); }
    if (clauses.length) query += " WHERE " + clauses.join(" AND ");
    query += " ORDER BY percentage DESC, score DESC, duration_seconds ASC, completed_at DESC LIMIT 20";
    const { results } = await env.DB.prepare(query).bind(...params).all();
    return json({ scores: results || [] });
  } catch (error) {
    return json({ error: error.message }, 500);
  }
}

export async function onRequestPost({ env, request }) {
  try {
    if (!env.DB) return json({ error: "D1 binding DB is not configured." }, 500);
    const body = await request.json();
    const playerName = cleanName(body.playerName);
    const score = Number.parseInt(body.score, 10);
    const totalQuestions = Number.parseInt(body.totalQuestions, 10);
    const durationSeconds = Math.max(0, Number.parseInt(body.durationSeconds, 10) || 0);
    const level = String(body.level || "");
    const quizLength = String(body.quizLength || "");
    const subject = String(body.subject || "");

    const allowedLevels = new Set(["Easy", "Medium", "Hard"]);
    const allowedLengths = new Set(["Short", "Medium", "Long"]);
    const allowedSubjects = new Set(["General Knowledge", "Flags", "Music", "Science", "Nature", "Sport"]);

    if (!playerName) return json({ error: "Please enter a name." }, 400);
    if (!allowedLevels.has(level) || !allowedLengths.has(quizLength) || !allowedSubjects.has(subject)) return json({ error: "Invalid quiz settings." }, 400);
    if (!Number.isFinite(score) || !Number.isFinite(totalQuestions) || totalQuestions <= 0 || score < 0 || score > totalQuestions) return json({ error: "Invalid score." }, 400);

    const percentage = Math.round((score / totalQuestions) * 10000) / 100;
    await env.DB.prepare(`
      INSERT INTO quiz_scores (player_name, score, total_questions, percentage, duration_seconds, level, quiz_length, subject)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(playerName, score, totalQuestions, percentage, durationSeconds, level, quizLength, subject).run();

    return json({ ok: true, score: { playerName, score, totalQuestions, percentage, durationSeconds, level, quizLength, subject } }, 201);
  } catch (error) {
    return json({ error: error.message }, 500);
  }
}
