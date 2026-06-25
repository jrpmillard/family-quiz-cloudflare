# Family Quiz Portal

A polished family quiz app for Cloudflare Pages. It includes player names, difficulty, quiz length, subjects, non-repeating questions, real local SVG flag images, local high scores, achievements, and an optional Cloudflare D1 online leaderboard.

## GitHub to Cloudflare Pages

1. Create a GitHub repository and upload this project.
2. In Cloudflare, create a **Pages** project connected to GitHub.
3. Use these settings:

```txt
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: /
```

No deploy command is needed for standard Pages Git integration.

## Optional online leaderboard with D1

The app works without D1 using browser local storage. To enable online scores:

1. Create a Cloudflare D1 database.
2. Run `schema.sql` against it.
3. In your Pages project settings, add a D1 binding named `DB`.
4. Redeploy.

## Custom domain

In the Pages project, open **Custom domains** and add:

```txt
familyquiz.ultimatepinapple.uk
```

Cloudflare will create the route/DNS automatically when the zone is in the same account.

## v1.0 sound and JW update

This release adds built-in Web Audio sound effects for quiz start, correct answer, incorrect answer, and quiz completion. No external sound files are required.

The JW category contains original quiz questions based on topics and teaching pages from JW.ORG, including Bible teachings, prayer, the ransom, resurrection hope, Bible stories, and Jehovah's Witnesses FAQ material. The questions are phrased as original summaries rather than copied article text.

The quiz engine now deduplicates questions before selection using normalized prompt, answer, image, and flag/country keys, so the same question should not appear twice within a quiz even if a source JSON entry has shuffled answer choices.
