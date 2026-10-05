# Gopika J D — Portfolio

Personal portfolio website for **Gopika J D**, Frontend Developer working with
HTML, CSS, JavaScript, TypeScript, React, Next.js and Angular.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS and GSAP.

## Sections

| Section     | Source                     |
| ----------- | -------------------------- |
| Banner      | Name, role, availability   |
| About Me    | Professional summary       |
| My Stack    | Technical skills           |
| Experience  | Work history + highlights  |
| Education   | Qualifications             |
| Projects    | Key project case studies   |
| Languages   | Languages spoken           |

## Stack

- [Next.js 15](https://nextjs.org) — App Router, RSC, metadata API, dynamic OG images
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://gsap.com) + `@gsap/react` — scroll animations
- [Lenis](https://lenis.darkroom.engineering) — smooth scrolling
- [Lucide React](https://lucide.dev) — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev     # dev server (turbopack)
npm run build   # production build
npm start       # serve production build
npm run lint    # eslint
```

## Environment Variables

Every variable is optional — the site runs without any of them. Copy
`.env.example` to `.env.local` to set them.

| Variable                  | Used by                                       |
| ------------------------- | --------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`    | `metadataBase`, `sitemap.ts`, `robots.ts`     |
| `NEXT_PUBLIC_GITHUB_REPO` | footer star/fork count (`owner/repo`)         |
| `NEXT_PUBLIC_GA_ID`       | Google Analytics ID                           |
| `NEXT_PUBLIC_HOTJAR_ID`   | Hotjar site ID                                |

## Editing Content

All copy lives in [`lib/data.ts`](./lib/data.ts) — bio, stack, projects,
experience, education and languages. Change that one file to update the whole
site; no component edits needed.

```
lib/data.ts        content for every section
app/layout.tsx     global SEO metadata, fonts, analytics
app/robots.ts      robots.txt
app/sitemap.ts     sitemap.xml
app/icon.svg       favicon
components/OgImage.tsx   link-preview image renderer
```

## Replacing Placeholder Artwork

Project screenshots are generated SVG placeholders. Drop real screenshots into
`public/projects/` (same file names) or point the `thumbnail`,
`longThumbnail` and `images` fields in `lib/data.ts` at your own files.

Stack icons live in `public/logo/`.

## SEO

- Per-page `metadata` with title templates, canonical URLs and keywords
- Open Graph + Twitter card metadata
- Auto-generated link preview images (`app/opengraph-image.tsx` and
  `app/projects/[slug]/opengraph-image.tsx`)
- `Person` + `WebSite` JSON-LD structured data
- `sitemap.xml`, `robots.txt` and a web app manifest

## License & Credit

Licensed under the [MIT License](./LICENSE).

Built on the open-source
[portfolio-2.0](https://github.com/Tajmirul/portfolio-2.0) by
[Tajmirul Islam](https://tajmirul.site), used with attribution.
