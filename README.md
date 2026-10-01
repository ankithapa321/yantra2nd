# YantraAI — Next.js Website

This is the original single-page corporate AI site, restructured as a proper Next.js 14 (App Router) + TypeScript + Tailwind CSS project so it can be opened and run directly in VS Code.

## Project structure

```
yantraai-nextjs/
├── app/
│   ├── layout.tsx           # Root layout, loads Inter font via next/font
│   ├── page.tsx              # Homepage — just composes the sections below
│   └── globals.css           # Tailwind directives + original custom CSS
├── components/
│   ├── Navbar.tsx             # Sticky nav, scroll effect + mobile menu (client component)
│   ├── Footer.tsx              # Site footer
│   ├── Reveal.tsx               # Scroll-triggered fade/slide-in wrapper (client component)
│   ├── icons.tsx                 # Small shared icons (ArrowIcon, StarIcon, BoltMark)
│   └── sections/
│       ├── Hero.tsx
│       ├── TrustLogos.tsx
│       ├── Solutions.tsx
│       ├── EnterpriseJourney.tsx  # "From AI Strategy to Real-World Impact"
│       ├── Services.tsx
│       ├── Industries.tsx
│       ├── Stats.tsx
│       ├── CaseStudies.tsx
│       ├── Process.tsx
│       ├── TechStack.tsx
│       ├── Testimonials.tsx
│       └── CTA.tsx
├── lib/
│   └── content.ts             # All copy/data (arrays for each section) in one place
├── public/                    # Static assets (add your images/favicon here)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

Each section is a standalone component that pulls its copy from `lib/content.ts`. To edit text, edit `lib/content.ts`. To restyle or reorder a section, edit its file directly, or reorder the JSX in `app/page.tsx`.

## Running it in VS Code

1. Open this folder (`yantraai-nextjs`) in VS Code.
2. Open a terminal (``Ctrl+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes on the conversion

- The original inline `<script src="https://cdn.tailwindcss.com">` (the Tailwind Play CDN) has been replaced with a proper Tailwind CSS build (`tailwind.config.js` + `postcss.config.js`), which is the correct setup for production.
- The Google Fonts `<link>` tags were replaced with `next/font/google`, which self-hosts the Inter font for better performance and avoids layout shift.
- The vanilla JS at the bottom of the original file (mobile menu toggle, navbar scroll effect, `IntersectionObserver` scroll-reveal animations) was ported into two client components: `Navbar.tsx` and `Reveal.tsx`.
- All `class` attributes were converted to `className`, and SVG presentational attributes (`stroke-width`, `stroke-linecap`, etc.) were converted to their camelCase JSX equivalents (`strokeWidth`, `strokeLinecap`, etc.).
- Because a few classes are built dynamically (e.g. `bg-${color}-500/20`), those combinations are explicitly listed in `tailwind.config.js`'s `safelist` so Tailwind's JIT compiler generates them at build time.

## Build for production

```bash
npm run build
npm run start
```
