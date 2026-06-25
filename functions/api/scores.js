export async function onRequestGet(context) {
  const { env, request } = context;
  if (!env.DB) return json({ enabled: false, scores: [] });
  const url = new URL(request.url);
  const subject = url.searchParams.get('subject');
  const level = url.searchParams.get('level');
  const where = [];
  const params = [];
  if (subject && subject !== 'all') { where.push('subject = ?'); params.push(subject); }
  if (level && level !== 'all') { where.push('level = ?'); params.push(level); }
  const clause = where.length ? `WHERE ${where.join(' AND ')}` : '';
  const stmt = env.DB.prepare(`SELECT player_name, score, total, percent, subject, level, length_label, seconds, completed_at FROM scores ${clause} ORDER BY percent DESC, score DESC, seconds ASC, completed_at DESC LIMIT 50`).bind(...params);
  const { results } = await stmt.all();
  return json({ enabled: true, scores: results || [] });
}

export async function onRequestPost(context) {
  const { env, request } = context;
  if (!env.DB) return json({ enabled: false, saved: false, reason: 'No D1 binding named DB found.' }, 200);
  const body = await request.json().catch(() => null);
  if (!body) return json({ error: 'Invalid JSON' }, 400);
  const cleanName = String(body.player_name || 'Player').slice(0, 30).replace(/[<>]/g, '').trim() || 'Player';
  const score = clampInt(body.score, 0, 9999);
  const total = clampInt(body.total, 1, 9999);
  const percent = Math.round((score / total) * 100);
  const seconds = clampInt(body.seconds, 0, 24 * 60 * 60);
  const subject = String(body.subject || 'General Knowledge').slice(0, 40);
  const level = String(body.level || 'Easy').slice(0, 20);
  const length_label = String(body.length_label || 'Short').slice(0, 20);
  const profile_id = String(body.profile_id || '').slice(0, 80);
  const completed_at = new Date().toISOString();
  await env.DB.prepare('INSERT INTO scores (player_name, profile_id, score, total, percent, subject, level, length_label, seconds, completed_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(cleanName, profile_id, score, total, percent, subject, level, length_label, seconds, completed_at).run();
  return json({ enabled: true, saved: true });
}

function clampInt(value, min, max) {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}
function json(data, status = 200) { return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8' } }); }
