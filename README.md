# ByteSpace

ByteSpace is a React single-page learning marketplace prototype. It includes a marketing landing page, course browsing and detail pages, a creator directory and profile pages, and sign-in/sign-up screens.

## Run locally

```bash
pnpm install
pnpm dev
```

Vite serves the app on port `3000` (`vite.config.js`). Other scripts:

```bash
pnpm build    # production build
pnpm preview  # serve the production build locally
pnpm lint     # Oxlint
```

## Routes

| Route | Page | Current behavior |
| --- | --- | --- |
| `/` | Landing page | Marketing sections, animated hero, featured courses, categories, testimonials, creator CTA |
| `/courses` | Course search | Searches and filters the local course list; category, level, sort, and pagination controls |
| `/courses/:id` | Course details | Header, enrollment card, and About/Lessons/Reviews tabs |
| `/creators` | Creator directory | Creator cards derived from the course list; search, category filter, sorting, pagination |
| `/creators/:id` | Creator profile | Creator course list with filters and pagination |
| `/signIn` | Sign-in screen | Form and social sign-in UI |
| `/signUp` | Sign-up screen | Registration form UI |
| `*` | Not found | 404 page |

Routes are configured in `src/router/router.jsx`. `PageTransitionLayout` wraps them and scrolls to the top when the pathname changes. `Navbar` shows the active Home, Courses, or Creators item and scrolls to the top when the active item is clicked again.

## Main structure

- `src/pages/landingPage/` — composed landing page and its hero, course, category, growth, creator, and testimonial sections.
- `src/pages/searchPage/` — course search UI and local filtering.
- `src/pages/courseDetails/` — course header/enrollment UI and About, Lessons, and Reviews content.
- `src/pages/creatorDirectory/` — creator listing derived from course instructors.
- `src/pages/creatorProfile/` — creator header and course listing.
- `src/pages/signIn/`, `src/pages/signUp/` — authentication screen and form UI.
- `src/components/common/courseCard/` — shared course card, filtering controls, and course data.
- `src/components/layout/` — navbar and footer.
- `src/components/ui/` — shared UI and effects, including pagination, Lenis scrolling, page layout, text effects, and WebGL cursor.
- `src/assets/` — local images, icons, and fonts.

## Technology

- React 19, Vite, JavaScript/JSX, and React Router 8.
- Tailwind CSS 4 with the Vite plugin.
- Recharts for animated progress and review breakdown bars; `react-countup` for animated values.
- Framer Motion, GSAP, Lenis, and OGL for motion, smooth scrolling, and visual effects.
- Axios and TanStack Query are configured; React Icons and Base UI provide UI primitives/icons.

The app root is `src/main.jsx`. Global styles and font faces are in `src/index.css`. Sample courses are in `src/components/common/courseCard/courses.ts`.

## Implemented vs. prototype behavior

**Implemented UI and client behavior:** responsive landing sections; course search/filter/sort/pagination; creator directory/profile navigation; course detail tabs; review filtering; animated progress bars; follow button state; newsletter submitted state; responsive navigation and active-route state.

**Still prototype/static:** course and creator data is local sample data; course details use default sample content rather than loading the selected `:id`; creator profile headers use generic default details; sign-in/sign-up forms have optional submit callbacks but the pages do not connect them to authentication; social sign-in and enrollment actions are not connected to a backend. The Axios service contains example/local endpoints and token-refresh scaffolding, but the main product pages do not load their data through it. Footer links are placeholders, and newsletter submission only changes local UI state.

## Build status

`pnpm build` completed successfully during project review. Vite reported that the main JavaScript chunk is about 1.19 MB (about 376 kB gzipped), above its 500 kB warning threshold; consider route-level code splitting if bundle size becomes a performance concern. No automated test suite is currently defined in `package.json`.
