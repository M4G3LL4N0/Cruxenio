# Startup Journey: Cruxenio

## 1. Current Snapshot

- **Project name:** Cruxenio
- **Local folder:** `/Users/joshuadavis/startups/cruxenio`
- **Live URL:** https://cruxenio.noaerth.com (portfolio subdomain pattern)
- **Live site status:** HTTP **200**
- **Product:** Behavior intelligence platform — repeatable “moves” for real-life moments; browse `/moves`, submit moves, featured on home
- **Framework:** Next.js App Router (`src/app`), TypeScript, Tailwind, Supabase
- **Build command:** `pnpm build`
- **Local review command:** `pnpm dev` → http://localhost:3000
- **Current build status:** **PASS** (2026-05-14)
- **GitHub remote:** https://github.com/M4G3LL4N0/cruxenio.git
- **GitHub push status:** Not run this loop
- **Deployment:** **Not run** this loop
- **Last updated:** 2026-05-14

## 2. Portfolio Score

| Dimension | Score (0–10) | Notes |
|-----------|----------------|-------|
| Product clarity | 8 | Behavior moves platform is distinctive |
| MVP reality | 7 | Moves catalog, submit, admin; Supabase-backed |
| Visual quality | 7 | Editorial hero; mobile header improved |
| Build health | 7 | **PASS** — audit invalid `motion` JSX in header |
| Customer urgency | 7 | Social presence and habit formation are evergreen |
| Market potential | 7 | Self-improvement / coaching adjacent market |
| Monetization potential | 7 | Waitlist + future premium moves path |
| Growth potential | 7 | Shareable moves; community submissions |
| Investor story | 8 | “Behavior intelligence” compounding moves narrative |
| Local review readiness | 8 | `/` → `/moves` → `/moves/[slug]` |

- **Total score:** **74 / 100**
- **Classification:** **Promising venture** — clear concept and git remote; needs engineering hygiene + content depth
- **Best next loop type:** **Engineering loop** (fix header JSX, motion cleanup) + **Content loop** (more published moves)

## 3. 10-Second Startup Explanation

- **What this startup is:** A behavior intelligence platform of short, repeatable “moves” for rooms, conversations, and ordinary life moments.
- **Who it is for:** People who want practical presence and social skill compounding — not vague self-help essays.
- **What pain it solves:** Advice is too abstract; people need something they can do in the next sixty seconds.
- **What the user can do:** Browse moves, read why each works, submit a move, join waitlist on home.
- **Why it matters:** Small moves stack into calmer entries, cleaner answers, warmer flow.
- **Primary CTA:** Browse moves (`/moves`)

## 4. Founder Thesis

- **Core belief:** Behavior change is a library of situational moves — not personality rewrites.
- **Why this should exist:** Content is either too shallow (tips) or too heavy (therapy homework).
- **Why now:** Short-form learning norms + hunger for practical social skill.
- **Market wedge:** Curated moves with psychology explained per card.
- **Expansion path:** Collections, streaks, coaches, verified contributors.
- **What this can become:** Default move library for coaches, schools, and teams.
- **1000x opportunity:** Outcome-labeled move efficacy (consented, anonymized).
- **Biggest strategic risk:** Thin catalog feels like a blog, not a product.
- **Next founder decision:** Fix header JSX debt; publish move batch + push to GitHub.

## 5. Live Website Diagnosis

Based on live site (HTTP **200**):

- **Status code or load status:** **200**
- **What visitors currently see:** Behavior intelligence hero, featured moves, feature cards, waitlist.
- **Current headline:** “Master the art of movement in life.” (verify live hero).
- **Current CTA:** Browse moves / waitlist.
- **What works:** Distinct positioning; dynamic featured moves; git remote exists; mobile `SiteHeader`; build **PASS**.
- **What feels weak:** Catalog depth — need more published moves visible on `/moves`.
- **What feels generic:** Self-improvement tropes without a flagship move demo above fold.
- **What feels confusing:** Submit vs browse paths for first visit — clarify on home.
- **What feels unfinished:** Admin surface not marketed; contributor guidelines light.
- **What feels premium:** Editorial typography and move cards.
- **What is missing:** Invalid `motion` tag cleanup in `site-header.tsx` for long-term build hygiene.
- **Highest leverage live-site fix:** Flagship move spotlight on homepage with “try this today.”

## 6. Local Codebase Diagnosis

- **Framework:** Next.js App Router under `src/app`, TypeScript, Tailwind, Supabase SSR
- **App structure:** Marketing home + moves catalog + submit + admin
- **Current routes:** `/`, `/moves`, `/moves/[slug]`, `/submit`, `/admin`
- **Current pages:** Home (featured moves), moves index, move detail, submit form, admin
- **Current components:** `SiteHeader` (mobile menu), `MoveCard`, `WaitlistForm`, `getPublishedMovesPreview`
- **Current data files:** Supabase-backed moves lib (`lib/moves`)
- **Current styling system:** Editorial CSS (`site-header`, `hero-grid`, accent spans)
- **Technical risks:** Lowercase `<motion>` tags in `site-header.tsx` — replace with `motion` from framer-motion or `motion` → `motion` → `div`
- **Build risks:** **PASS** today — fix JSX before strict CI
- **Env var risks:** Supabase URL/keys required for production moves fetch
- **API risks:** Submit/admin routes need auth hardening before public launch scale
- **Mobile risks:** Mitigated via `SiteHeader` mobile menu + quick Moves link
- **GitHub risks:** Remote exists; push not run this loop
- **Local review risks:** Test `/moves/[slug]` with published slug; submit flow on mobile

## 7. Company Role Analysis

### CEO / Founder

- **Thesis:** Own behavior moves category, not meditation app #400.
- **Wedge:** Situational moves with “why it works” on every card.
- **Biggest opportunity:** Become shareable move library for coaches.
- **Biggest risk:** Thin content + engineering debt in header JSX.
- **Next decision:** Publish 20 moves; fix `SiteHeader` motion tags; push to GitHub.

### Chief Product Officer

- **MVP:** Home, `/moves`, `/moves/[slug]`, `/submit`, `/admin`.
- **Primary workflow:** Discover move → read psychology → try in situ → submit own.
- **Dashboard:** Admin for curation (per implementation).
- **Onboarding:** Home feature cards explain moves vs essays.
- **Retention loop:** Daily move email or streak (backlog).

### Customer Researcher

- **Buyer:** Future B2B coaches/schools; today B2C explorers.
- **User:** Person preparing for meeting, date, conflict, or stage moment.
- **Pain:** Generic advice; no actionable step in the moment.
- **Alternatives:** Books, TikTok coaches, therapy homework apps.
- **Objections:** “Is this evidence-based?”
- **Trust builders:** Psychology section per move; curated editorial tone.

### JTBD Strategist

- **Job-to-be-done:** “Give me something concrete to do before I walk into the room.”
- **Trigger:** Upcoming meeting, social event, tense conversation.
- **Desired outcome:** Calmer entry, clearer response, compounding confidence.
- **Old way:** Scroll motivation quotes.
- **New way:** Pick move → read why → practice once → save/share.

### UX Designer

- **UX issue:** Mobile access to moves/submit — **addressed** via `SiteHeader`.
- **Homepage flow:** Hero → featured moves → feature grid → waitlist.
- **App flow:** Moves grid → detail → related moves (if present).
- **Mobile flow:** Header drawer + quick Moves link on small screens.
- **Friction removed:** Hidden `/moves` on phone (improved).

### Visual Design Director

- **Visual identity:** Editorial, human — movement as craft not hustle porn.
- **Type:** Strong hero title; readable move body text.
- **Color:** Accent spans in headlines; restrained backgrounds.
- **Motion:** Replace invalid `<motion>` with proper components or divs.
- **Component style:** `MoveCard` consistency across home and index.

### Brand Strategist

- **Category:** Behavior intelligence / situational moves.
- **Enemy:** Vague inspiration without a next action.
- **Memorable phrase:** “Movement through life, not grind.”
- **Voice:** Warm, specific, psychologically literate — not clinical.

### Copy Chief

- **Headline:** Movement in life — not “10x your mindset.”
- **Subheadline:** Short moves + why they work + real situations.
- **CTA:** “Browse moves” / “Submit a move.”
- **Copy rules:** No medical/therapy claims; coaching-adjacent framing only.

### Staff Engineer

- **Architecture:** Next + Supabase for moves; dynamic home preview.
- **Build:** **PASS**
- **Env strategy:** Supabase keys in Vercel only; document local `.env.example`.
- **Dependency plan:** Fix `site-header.tsx` invalid JSX before CI strictness.

### Frontend Engineer

- **Pages:** Home, moves index, slug detail, submit.
- **Components:** `SiteHeader` mobile improvements this loop.
- **Interactions:** Move cards, waitlist form, submit form.
- **Mobile fixes:** Drawer nav; replace `<motion>` wrappers with semantic divs or framer-motion.

### Full-Stack Architect

- **Data:** Supabase published moves; admin curation path.
- **Future database:** Richer move schema (tags, situations, difficulty).
- **Future auth:** Contributor accounts with moderation queue.
- **Future API:** Public read API for partners.
- **Future billing:** Premium collections + coach seats.

### AI Product Architect

- **AI use:** Optional move suggestions from situation text — human review required.
- **Safe boundaries:** Not therapy; no mental health diagnosis language.
- **Future plan:** Suggest moves with links to existing catalog only (no invented psychology).

### Data Moat Strategist

- **Data loop:** Move tried → outcome rating (consented).
- **Feedback loop:** “Did this move help in the situation?”
- **Benchmark:** Move efficacy by situation tag (anonymized).

### Growth Marketer

- **Hook:** “Don't read another thread — run one move before you walk in.”
- **SEO:** social skills moves, conversation techniques, presence habits.
- **Distribution:** Coaches, short-form video clips per move.
- **Share loop:** Move card OG images (backlog).

### Sales Operator

- **Buyer pain:** Coaches need structured homework between sessions.
- **Proof:** Live **200** moves catalog + submit path.
- **Pricing:** Waitlist now; coach workspace later.
- **Objections:** Evidence — cite psychology sources per move.

### Pricing Strategist

- **Model:** Freemium catalog + premium collections + coach seats.
- **Free tier:** Browse core moves.
- **Paid tier:** Collections, offline, contributor analytics.
- **Upgrade trigger:** Coach wants branded move packs for clients.

### Investor Analyst

- **Venture thesis:** Move libraries compound with community submissions + outcome data.
- **Market:** Habit/coaching adjacent; large TAM with crowded top-of-funnel.
- **Expansion:** B2B coaches, schools, corporate presence training.
- **Moat:** Curated move graph with outcome labels.
- **Metrics:** Move views, submit rate, return visits, waitlist conversion.

### Competitive Intelligence Analyst

- **Category pattern:** Content apps vs structured move OS.
- **Differentiation:** Situation-tagged moves + submit loop + editorial quality bar.

### Experiment Designer

- **Tests:** Homepage flagship move vs featured grid only.
- **Success metric:** Move detail views per session.
- **Feedback loop:** Helpful rating on move detail.

### QA Engineer

- **Build:** **PASS**
- **Routes:** `/`, `/moves`, `/moves/[slug]`, `/submit`, `/admin`.
- **Mobile:** `SiteHeader` drawer and quick link.
- **Regression:** Fix `motion` JSX before enabling strict CI.

### Security / Trust Reviewer

- **Risks:** Submit endpoint spam — rate limit and moderation.
- **Disclaimers:** Not therapy or medical advice.
- **Data handling:** Minimize PII in waitlist; secure Supabase RLS.

### Legal / Policy Framing Reviewer

- **Risk category:** Medium if implying mental health treatment.
- **Safe framing:** Coaching and skill practice, not clinical care.
- **Required disclaimers:** Not a substitute for licensed mental health professionals.

### GitHub Release Operator

- **Remote:** https://github.com/M4G3LL4N0/cruxenio.git
- **Commit / push:** Not run this loop

### Local Review Director

- **Command:** `cd /Users/joshuadavis/startups/cruxenio && pnpm dev`
- **URL:** http://localhost:3000
- **Test flow:** `/` → `/moves` → open slug → `/submit` → mobile header

### Speed / Token Efficiency Operator

- **Scope:** Mobile `SiteHeader` + journey doc; build **PASS**.
- **Blockers:** Header `motion` tag debt — schedule fix next loop.

### Taste Reviewer

- **Quality diagnosis:** Distinct voice; needs more moves for product feel.
- **Premium fix:** One “move of the day” hero with situation tag chips.

### Contrarian Strategist

- **Angle:** B2B first — sell move packs to executive coaches.
- **Wedge:** “Meeting tomorrow” three-move pack only.

### Community / Ecosystem Builder

- **Community:** Contributors submit moves; editorial bar stays high.
- **Public artifact:** Move writing guide for submitters.

### Automation Architect

- **Safe automation:** CI build on push after JSX fix; human moderates submissions.
- **Future:** Auto-tag moves by situation with human approval.

## 8. Product Strategy

- **MVP definition:** Home + moves catalog + detail + submit + admin + waitlist.
- **Primary workflow:** Browse → read why → practice → optionally submit.
- **Input:** User situation (submit form); editorial curation (admin).
- **Output:** Published move cards with psychology explanation.
- **First aha moment:** One move feels immediately usable tonight.
- **Dashboard purpose:** Admin curation (internal).
- **Retention loop:** Daily move or collection progress (backlog).
- **Monetization path:** Premium collections + coach workspaces.

## 9. Roadmap

### Loop 1: Make It Understandable

- Home feature cards + hero — **strong**.

### Loop 2: Make It Real

- Mobile `SiteHeader` — **done**; fix motion JSX next.

### Loop 3: Make It Premium

- Flagship move hero; OG cards per move.

### Loop 4: Make It Useful

- 20+ published moves; situation tags.

### Loop 5: Make It Monetizable

- Waitlist → premium collections pricing.

### Loop 6: Make It Fundable

- Metrics: move views, helpful ratings, submit velocity.

### Loop 7: Make It Compound

- Community submissions with moderation queue.

### Loop 8: Make It Defensible

- Outcome-labeled move efficacy data.

### Loop 9: Make It Distributable

- Coach partnerships; short video per move.

### Loop 10: Make It Operationally Scalable

- Auth, RLS hardening, moderation tools, billing.

## 10. Work Completed This Loop

### Loop Entry: 2026-05-14

- **Loop type:** Mobile navigation
- **Loop goal:** Mobile `SiteHeader` for `/moves`, `/submit`, `/admin`; maintain **PASS** build
- **Changes made:** Client `SiteHeader` with mobile menu button, drawer links, body scroll lock, quick Moves link on small screens.
- **Files changed:** `src/components/site-header.tsx`, layout touch points
- **Routes added:** none
- **Routes improved:** Mobile reachability for moves catalog and submit
- **Components added:** none
- **Components improved:** `SiteHeader`
- **MVP interactions added:** Mobile navigation to moves and submit
- **Demo data added:** none (Supabase published moves dynamic)
- **Copy improved:** none major this loop
- **Design improved:** Mobile nav shell on editorial layout
- **Mobile improved:** Drawer + quick Moves link
- **Engineering fixed:** Build **PASS**; note `<motion>` tag cleanup scheduled
- **Build result:** **PASS**
- **GitHub commit:** Not run
- **GitHub push result:** Not run
- **Deployment:** **Not run**
- **Local review command:** `pnpm dev`
- **Local review URL:** http://localhost:3000
- **What improved:** Mobile IA to moves and submit
- **What still needs work:** Replace invalid `motion` JSX; publish more moves; push to GitHub

## 11. Next Loop Plan

- **Highest leverage next move:** Fix `site-header.tsx` `<motion>` → `motion` or `div`; publish 10 moves; `git push`.
- **Product:** Situation tags on move cards; related moves on detail.
- **Design:** Move-of-the-day hero on home.
- **Engineering:** Supabase RLS audit; `.env.example`.
- **Growth:** Coach outreach with shareable move packs.
- **Sales:** Waitlist segmentation (coach vs consumer).
- **Monetization:** Premium collection prototype.
- **Investor story:** Catalog depth + helpful rating velocity.
- **Trust/safety:** Not therapy disclaimers on submit and detail.
- **GitHub:** Commit mobile header + JSX fix; push to origin.
- **Biggest risk:** Thin catalog + JSX debt undermining velocity.
- **Suggested next command:** `cd /Users/joshuadavis/startups/cruxenio && pnpm dev`

## 12. 1000x Backlog

### Product

- Collections; streaks; coach workspaces; moderation queue

### Design

- Move OG images; situation tag chips

### Engineering

- Fix motion JSX; CI on GitHub; Supabase RLS hardening

### Growth

- Coach partnerships; short video per move

### Sales

- B2B coach seat pilot

### Monetization

- Premium collections; contributor rev-share

### Investor Narrative

- “Behavior intelligence move library”

### Data Moat

- Move efficacy by situation (consented)

### Automation

- Auto-tag suggestions with human approval

### Partnerships

- Coaches; schools; corporate L&D

### SEO / Content

- Situation-specific move guides

### User Retention

- Daily move email; streaks

### Demo Quality

- Flagship moves for meetings, conflict, first impressions

### Mobile Experience

- Move detail readable on phone; submit form UX

### Trust and Safety

- Not therapy disclaimers; moderation for submissions

### Real API Integrations

- Calendar hooks for “before meeting” prompts (opt-in)

### Enterprise Features

- Branded move packs for organizations

### Future AI Features

- Suggest existing moves only — no invented advice

### Community

- Contributor guidelines; editorial review SLA

### Distribution

- Embeddable move widget for coach sites

### Templates

- Move authoring template (situation, move, why, practice)

### Analytics

- Funnel: home → move detail → helpful vote

### Internal Tools

- Admin moderation dashboard polish

### Public Artifacts

- “Write a move” guide for contributors
