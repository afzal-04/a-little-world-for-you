# A Little World Made Just For You 💗

A personalised birthday surprise website (Next.js 14 · TypeScript · Tailwind · Framer Motion).
Birthday: **15 November 2026**. It has a **new look every day from 8 → 15 November**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production check
```

## Add your content (no code changes needed)

Everything lives in **`src/data/birthday.ts`**: her name, letter, captions, compliment cards, secret message, final message, music path, and the 8 daily looks.

| What | Where |
|---|---|
| Her photos | `public/images/memories/memory-1.jpg … memory-6.jpg` (or change `src` in the data file) |
| Music | `public/music/birthday.mp3` |
| Personal video / voice | put in `public/videos/`, then set `gift.video` / `gift.voice` in the data file |

Missing photos and music never break the site. You get a soft placeholder, and the music player hides itself.

Tips: keep each photo under about 400 KB (resize to ~1200 px wide), and keep the music under about 4 MB.

## Preview any day before it happens

Add `?day=YYYY-MM-DD` to the URL:

- `http://localhost:3000/?day=2026-11-12` shows the Starry Night look
- `http://localhost:3000/?day=2026-11-15` shows the birthday day
- Add `&unlock=1` to open the locked final gift early

## Daily looks

| Date | Look |
|---|---|
| 8 Nov | Blush Morning |
| 9 Nov | Lavender Dreams |
| 10 Nov | Golden Hour |
| 11 Nov | Rose Garden |
| 12 Nov | Starry Night (dark) |
| 13 Nov | Peach Cloud |
| 14 Nov | Moonlit Eve (dark) |
| 15 Nov | Birthday Glow, and the final gift unlocks |

The look follows **her phone's local date**. The final gift stays locked until 15 November (set `gift.lockUntilBirthday` to `false` to unlock it always).

## Deploy to Vercel

```bash
git init
git add .
git commit -m "Birthday surprise"
git branch -M main
git remote add origin https://github.com/<you>/a-little-world-for-you.git
git push -u origin main
```

Then at vercel.com choose **Add New → Project → Import** the repo and press **Deploy** (no settings needed).
Set the project name to `a-little-world-for-you` to get `a-little-world-for-you.vercel.app`.

After adding photos or music, commit and push, and Vercel redeploys automatically.
