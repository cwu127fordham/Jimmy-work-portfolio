# Chuan Hsi Wu: Portfolio

Next.js + TypeScript + Tailwind CSS, deployed on Vercel.

## Updating your content
Almost everything lives in **`data/content.ts`**. Search it for `TODO`.

| What | Where |
|---|---|
| Text, links, metrics, case studies | `data/content.ts` |
| Headshot, screenshots, case-study images | `public/images/` (then update the path in content.ts) |
| Social post screenshots | `public/images/social/` |
| Resume | replace `public/resume.pdf` (keep the name) |
| Accent color | `--accent` in `app/globals.css` |

Videos: never add video files. Upload to YouTube/Vimeo/Instagram and paste the ID into content.ts.

## Preview on your computer
```bash
npm install     # first time only
npm run dev     # then open http://localhost:3000
```

## Publish a change
```bash
git add .
git commit -m "Update content"
git push
```
Vercel redeploys automatically about a minute after each push.
