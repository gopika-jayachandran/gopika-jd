# Gopika J D — Portfolio

Production portfolio site for **Gopika J D**, Software Developer (Frontend / Full-Stack).

Next.js 15 App Router · React 19 · TypeScript · Tailwind CSS · GSAP

---

## Architecture

```
app/
  layout.tsx                 root shell — fonts, Lenis provider, SEO metadata, analytics slots
  page.tsx                   home: composes the seven content sections
  template.tsx               route-change transition overlay
  robots.ts                  robots.txt (MetadataRoute)
  sitemap.ts                 sitemap.xml incl. project routes
  manifest.ts                web app manifest
  icon.svg                   favicon
  opengraph-image.tsx        default OG image (ImageResponse)
  _components/               home page sections (client, GSAP animated)
  projects/[slug]/
    page.tsx                 SSG project route + per-project metadata
    opengraph-image.tsx      per-project OG image
    _components/ProjectDetails.tsx
components/
  Navbar, Footer, Preloader, CustomCursor, Button, SectionTitle
  ArrowAnimation, ParticleBackground, ScrollProgressIndicator, TransitionLink, StickyEmail
  JsonLd.tsx                 Person + WebSite JSON-LD
  OgImage.tsx                shared OG image renderer
lib/
  data.ts                    single source of truth for all content
  utils.ts                   cn() class merge helper
types/index.ts               IProject, IStackItem, IExperience, IEducation, Variant
```

### Rendering strategy

| Route | Mode |
| ----- | ---- |
| `/` | Static (prerendered) |
| `/projects/[slug]` | SSG via `generateStaticParams` (3 slugs) |
| `/projects/[slug]/opengraph-image` | Dynamic (`ƒ`) |
| `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` | Static |

Shared JS is ~101 kB; the home route ships ~195 kB first load.

### Content model

All copy, skills, projects, experience, education and languages are declared in
`lib/data.ts` and typed with the interfaces in `types/index.ts`. Sections read
from that module, so content changes never require component edits.

`MY_STACK` mirrors the resume's skill groups 1:1. Brand entries carry an `icon`
path; capability entries (SSR, AJAX, Wireframing…) omit it and `Skills.tsx` falls
back to a dot marker, keeping a single uniform grid.

### Animation

`ScrollTrigger` drives every section: enter/exit scrub timelines scoped to a
container ref via `useGSAP`. `template.tsx` runs a GSAP page-transition wipe.
`ReactLenis` provides smooth scrolling at the root, and the whole tree sits
inside it so section offsets stay consistent.

---

## SEO

- **Metadata API** — title template (`%s | Gopika J D`), description, keywords, canonical, category, authors, creator, publisher
- **Open Graph / Twitter** — `summary_large_image`, locale `en_IN`
- **Dynamic OG images** — `ImageResponse` (Satori) at `/opengraph-image` and per project; no binary assets to maintain
- **Structured data** — `Person` + `WebSite` JSON-LD with `sameAs`, `knowsAbout`, `knowsLanguage`, `worksFor`, `alumniOf`, `hasCreated`
- **Discovery** — `sitemap.xml` (home + projects), `robots.txt`, manifest
- **Per-project** — title, description, keywords, canonical, article OG, plus its own OG image

HTML tags are stripped from project descriptions before they reach metadata, so
OG descriptions stay clean plain text.

---

## Performance

- Route-level code splitting; project data pages are only loaded on `/projects/*`
- `next/image` for raster assets; SVG assets bypass the optimizer automatically
- Google fonts via `next/font` (self-hosted, preloaded, `display: swap`)
- Images lazy-loaded below the fold

---

## Commands

```bash
npm install       # install
npm run dev       # dev server  → http://localhost:3000
npm run dev:turbo # dev server with Turbopack
npm run build     # production build
npm start         # serve production build
npm run lint      # eslint (next/core-web-vitals + next/typescript)
```

> **Windows note:** Turbopack hashes font assets into very long filenames, which
> can exceed the 260-char `MAX_PATH` limit in deeply nested folders. `npm run dev`
> uses webpack and works everywhere; use `dev:turbo` from a short path if you
> want Turbopack.

---

## Customising

**Content** — edit `lib/data.ts` (`GENERAL_INFO`, `PROFESSIONAL_SUMMARY`,
`MY_STACK`, `PROJECTS`, `MY_EXPERIENCE`, `EDUCATION`, `LANGUAGES`).

**Project artwork** — files live in `public/projects/{thumbnail,long,images}/`
and currently hold generated SVG placeholders. Replace them with real
screenshots using the same names, or repoint `thumbnail`, `longThumbnail` and
`images` in `lib/data.ts`. Hover previews and mobile thumbnails are rendered at
a 3:2 ratio; project detail images at 750:400.

**Stack icons** — `public/logo/` (SVG brand marks, PNG for raster logos).

**Theme** — CSS custom properties in `app/globals.css`, mapped in
`tailwind.config.ts`.

**OG images** — `components/OgImage.tsx`; edit the palette and layout there to
restyle every generated card at once.

---

## Deploy

Static output with dynamic OG routes — deploys cleanly to Vercel or any
Node-capable host.

```bash
npm run build
npm start
```

---

## License

MIT — see [LICENSE](./LICENSE).

UI and implementation are based on the open-source
[portfolio-2.0](https://github.com/Tajmirul/portfolio-2.0) by
[Tajmirul Islam](https://tajmirul.site).
