# Portfolio Redesign Plan: raphaelameaume.com Style

## Reference
- **Target Site**: https://raphaelameaume.com
- **Aesthetic**: Minimal, creative-coder, clean typography, generous whitespace

---

## Overview

Transform the current portfolio to adopt the minimal, creative-coder aesthetic of raphaelameaume.com while preserving the existing content flow (Hero → About → Work → Education → Skills → Projects → Hackathons → Contact → Blog).

---

## Current State
- [x] Read and understood existing codebase structure
- [x] Identified all files to modify

## Progress Tracker

### Phase 1: Typography & Colors
- [x] Update fonts from Geist to Inter + JetBrains Mono (`layout.tsx`)
- [x] Refine color scheme in `globals.css`
- [x] Verify dark theme looks correct

### Phase 2: Navigation
- [x] Create new `navbar.tsx` component with desktop top nav
- [x] Implement "More" dropdown menu
- [x] Update `layout.tsx` to use responsive navigation
- [x] Keep mobile bottom navigation
- [x] Add responsive breakpoint logic (desktop: top nav, mobile: bottom nav)

### Phase 3: Layout & Spacing
- [x] Increase max-width (2xl → 3xl)
- [x] Remove decorative FlickeringGrid from layout
- [x] Adjust section spacing in `page.tsx` (gap-14 → gap-20)
- [x] Simplify section headers (minimal left-aligned headers)
- [x] More generous vertical rhythm

### Phase 4: Component Updates
- [x] Simplify project cards (cleaner, no heavy borders)
- [x] Clean up work section (text-focused expandable list)
- [x] Update hackathons section (simple list format)
- [x] Minimal contact section (footer style with social links)

### Phase 5: Animation Refinement
- [x] Tune blur-fade animations (duration 0.4 → 0.3)
- [x] Reduce blur amount (6px → 3px)
- [x] Reduce y offset (8px → 4px)
- [x] Use smoother easing curve

---

## Files Modified

### Core Layout
- `src/app/layout.tsx` - Fonts (Inter + JetBrains Mono), removed FlickeringGrid, updated padding
- `src/app/globals.css` - Refined color scheme
- `src/app/page.tsx` - Cleaner section layout with minimal headers

### Components
- `src/components/navbar.tsx` - Complete rewrite: top nav (desktop) + bottom nav (mobile)
- `src/components/project-card.tsx` - Simplified styling, cleaner hover states
- `src/components/section/work-section.tsx` - Text-focused expandable list
- `src/components/section/projects-section.tsx` - Minimal header
- `src/components/section/hackathons-section.tsx` - Simple list format
- `src/components/section/contact-section.tsx` - Minimal footer with social links
- `src/components/magicui/blur-fade.tsx` - Faster, subtler animations
- `src/components/magicui/blur-fade-text.tsx` - Faster, subtler animations

---

## Design Changes Summary

### Navigation
- Desktop: Name on LEFT as home link, then nav items (Work, Projects, Journal, More dropdown)
- Social icons + theme toggle on the RIGHT
- Mobile: Bottom nav bar with name + main links + theme toggle
- Backdrop blur on header

### Typography
- Sans: Inter (400-700)
- Mono: JetBrains Mono (300-700)
- Section headers: Small, muted, left-aligned

### Colors
- Light: Near-white background, dark text, subtle borders
- Dark: Near-black background, light text, subtle borders
- Minimal decorative color usage

### Layout
- Max-width: 5xl (64rem) - wider content area
- Section gap: 6rem (space-y-24)
- **Two-column grid**: Labels on left (200px), content on right
- Sticky section labels
- Clean visual hierarchy with generous whitespace

### Components
- Project cards: No heavy borders, subtle hover, tech tags in monospace
- Work section: Expandable accordion style, text-focused
- Hackathons: Simple list with links
- Contact: Footer style with social icons

### Animations
- Duration: 0.3s (was 0.4s)
- Blur: 3px (was 6px)
- Y offset: 4px (was 8px)
- Easing: cubic-bezier(0.25, 0.1, 0.25, 1)

---

## Verification Checklist

- [ ] Run dev server: `npm run dev`
- [ ] Check home page renders with new styling
- [ ] Verify navigation works (all links, dropdown)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify dark/light theme switching
- [ ] Check blog pages still render correctly
- [ ] Test all interactive elements (work accordion, links)

---

## Notes

- Kept existing content data structure (`src/data/resume.tsx`) unchanged
- Preserved blog system functionality
- Maintained accessibility (keyboard nav, screen readers)
- All animations subtler and faster

---

## Rollback

If needed, revert changes using git:
```bash
git checkout -- src/app/layout.tsx src/app/globals.css src/app/page.tsx src/components/
```
