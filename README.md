# Family Quiz - GitHub Connected Cloudflare Pages

This version is designed for the simplest Cloudflare Pages + GitHub deployment.

It does **not** use `wrangler deploy`, `wrangler pages deploy`, or a `CLOUDFLARE_API_TOKEN` during builds.

## Cloudflare Pages settings

Create a new **Cloudflare Pages** project and connect this GitHub repository.

Use these settings:

```txt
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: /
Deploy command: leave blank / none
```

If your Cloudflare screen insists on a deploy command, you are probably not in the normal **Pages Git integration** flow. Use **Workers & Pages → Pages → Create project → Connect to Git**.

## D1 database setup

The quiz uses D1 for high scores. You only need to do this once.

1. In Cloudflare, go to **Workers & Pages → D1 SQL Database**.
2. Create a database named:

```txt
family-quiz-db
```

3. Open the database console and run the SQL from:

```txt
migrations/0001_scores.sql
```

4. In your Pages project, go to **Settings → Bindings → D1 database bindings**.
5. Add this binding:

```txt
Variable name: DB
D1 database: family-quiz-db
```

6. Redeploy the Pages project.

## Files

```txt
public/              Static website files
functions/api/       Cloudflare Pages Functions for high scores
migrations/          D1 SQL schema
build.js             Copies public/ to dist/
package.json         Contains only the build script
wrangler.toml        Optional local-development config only
```

## Local preview without database

You can open `public/index.html` locally. The quiz will run, but high-score saving needs Cloudflare D1.
