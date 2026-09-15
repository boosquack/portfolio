# Portfolio App

Next.js 16 (App Router, React 19) personal portfolio + blog, deployed to Vercel.

## Stack
- **Framework:** Next.js 16, React 19, TypeScript (strict)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`, not the v3 PostCSS plugin)
- **Animation:** `motion` (Framer Motion successor) — import from `motion/react`
- **Content:** MDX blog posts in `content/*.mdx`, compiled via `content-collections` (see `content-collections.ts`)
- **UI primitives:** Radix UI + local `src/components/ui/*` (shadcn-style, owned components)
- **Icons:** `lucide-react`
- **Package manager:** pnpm (pnpm-lock.yaml is the source of truth; package-lock.json is stale/unused)
- Path alias: `@/*` → `src/*`

## Structure
- `src/app/` — routes (`page.tsx` home, `blog/` listing + `blog/[slug]` posts)
- `src/components/section/` — homepage sections (hero/about/work/projects/hackathons/contact etc.)
- `src/components/magicui/` — animation-heavy leaf components (blur-fade, flickering-grid, dock)
- `src/data/resume.tsx` — single source of truth for resume/profile content
- `content/*.mdx` — blog posts

## Current effort: redesign branch
This branch is mid-redesign toward a minimal, creative-coder aesthetic (see `REDESIGN_PLAN.md` for the full checklist and rationale). Established conventions from that redesign — do not silently revert these:
- Fonts: Geist (sans) + Geist Mono (mono) + Source Serif 4 (serif headlines) via `next/font/google` — updated 2026-09-14 from the prior Inter/JetBrains Mono/Playfair Display convention per explicit user approval, to match the rachelchen.tech reference site's actual computed fonts. CSS variable names (`--font-sans`/`--font-mono`/`--font-serif`) are unchanged.
- Preserve existing content/IA (`src/data/resume.tsx`, section order); this is a **Redesign - Preserve**, not a greenfield rebuild
- Minimal decorative color, generous whitespace, subtler/faster motion (0.3s, small blur/offset)
- Two-column desktop layout with sticky left-hand section labels

## Design/frontend skill (required reading before UI work)
`.agents/skills/design-taste-frontend/SKILL.md` is an anti-slop frontend skill (installed via `npx skills add`, tracked in `skills-lock.json`). It is **not** auto-loaded by Claude Code's native skill system — read it explicitly.

**Read that file before any change to layout, styling, motion, typography, color, or new sections/components.** It is not needed for pure logic/data/content-collections/config work.

Quick orientation (full detail lives in the file itself):
- Section 0: infer the design read (page kind, vibe, audience) before touching code — for this repo, default to "developer portfolio, minimal/editorial, redesign-preserve" unless told otherwise.
- Section 11 (Redesign Protocol): this repo is in **Preserve** mode — audit before changing, don't touch IA/nav labels/routes/form fields without approval.
- Section 4 + Section 9: bias-correction rules and banned "AI tells" (no em-dashes anywhere on the page, no AI-purple gradients, one accent color, one corner-radius system, hero must fit the viewport, etc.).
- Section 14: run the Final Pre-Flight Check before considering any frontend change done.

If a future task clearly falls outside this skill's scope (dashboards, data tables, multi-step forms — see Section 13), say so and skip it.

## Web research skills (reference-site cloning / audits)
Two MCP servers are configured for pulling in outside reference material (e.g. auditing a site to model the portfolio redesign after):
- **`playwright`** (`.mcp.json`, project scope) — real browser automation: navigate, click, screenshot a live reference site section by section. Requires one-time approval per machine (`claude` will prompt on startup).
- **`firecrawl`** (local scope only, `~/.claude.json`, not committed) — scrape/crawl/map/search sites into clean markdown/HTML at scale. `FIRECRAWL_API_KEY` is already configured locally; never commit a key into this repo.

`.agents/skills/firecrawl/SKILL.md` documents Firecrawl's full tool surface and when to reach for search vs. scrape vs. crawl vs. map vs. interact. Read it before a research/cloning task. Note: this project accesses Firecrawl through the **MCP tools**, not the separate `firecrawl-cli` — the CLI subcommands named in that file map 1:1 to the equivalent MCP tool calls.

Typical reference-site audit flow: `firecrawl map`/`crawl` to enumerate pages → `firecrawl scrape` key pages for structure/copy → `playwright` to visually inspect and screenshot layout, spacing, motion → feed findings into the Redesign Protocol (Section 11 of the design-taste-frontend skill) to decide what to borrow vs. discard.

## Commands
- `pnpm dev` — dev server
- `pnpm build` — production build (also compiles content-collections)
- `pnpm lint` / `pnpm lint:fix`
