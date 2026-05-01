---
name: oya-write
description: Write or refresh an Open Your AIs blog post in Ulisses Balbino's voice. AdSense-safe, schema-compliant, no fabricated facts. Use when adding a new article to src/content/blog/, expanding a thin post, or replacing a stale one. Auto-invokes for any prompt mentioning "OYA", "Open Your AIs", "openyourais", "novo post", "novo artigo", "expand post", "rewrite article" inside this repo.
---

# OYA Article Writer

Generates a single Markdown file at `src/content/blog/<slug>.md` that **passes both** the Zod schema (`src/content.config.ts`) **and** `scripts/validate-content.mjs` on first try. The pipeline (`auto-openai.ts`) already handles social posts — this skill is for **the article only**.

## Hard Constraints (build will reject)

| Field | Rule | Source |
|---|---|---|
| `title` | 25–85 chars | `content.config.ts` |
| `description` | 80–170 chars | `content.config.ts` |
| `heroImage` | required, valid URL, **not duplicated with any existing post** | `content.config.ts` + `validate-content.mjs` |
| body visible words | ≥ 800 (after stripping HTML tags) | `validate-content.mjs` |
| body characters | no `&apos;` or `&quot;` (Astro Markdown does not decode HTML entities) | `validate-content.mjs` |
| body indentation | no line starts with 4+ spaces outside a fenced code block | `validate-content.mjs` |
| filename | `kebab-case-only.md` matching the slug | convention |

Pre-flight before writing the file: run `node scripts/validate-content.mjs <path>` after writing — if it fails, fix and rerun. Do not commit until it passes.

## Required companion skill: `humanizer`

**Always run the humanizer skill (`~/.claude/skills/humanizer/SKILL.md`) as the final pass before saving the file.** The humanizer skill encodes 29 concrete AI-writing patterns from Wikipedia's "Signs of AI writing" page (significance inflation, promotional language, em dash overuse, rule of three, AI vocabulary words like `testament` / `landscape` / `pivotal` / `groundbreaking`, generic positive conclusions, false ranges, copula avoidance, and more). Skipping this pass produces text that reads as AI even when factually correct.

The humanizer self-audit (`"What makes the below so obviously AI generated?"` followed by a revision pass) is mandatory for every new or expanded OYA post.

## Voice Specification

The full voice spec already lives in `/Users/ulissesbalbino/Projects/marketing-video/auto-openai.ts` (constant `ULISSES_VOICE_PROMPT`, lines 37–84). Do not duplicate it here — read it before writing.

The four rules that matter most for AdSense compliance:

1. **No fabricated specifics.** Never invent budget figures, crew sizes, project years tied to clients, shoot durations. Permitted general anchors: "I've directed for Disney, Nestlé, Yamaha, Carrefour, Starbucks, Kopenhagen, Benefit Cosmetics", "14 years on commercial sets", "Pichorra Filmes since 2012, São Paulo".
2. **Anchor every article to a real, dated, named news item or tool.** Opening paragraph must contain (a) a date, (b) a named tool/company/event, (c) one concrete detail. No abstract openings ("In today's fast-evolving AI landscape...").
3. **Editorial bridge: past → present.** Per `feedback_oya_editorial_voice` (memory): every piece needs a historical/craft reference before the "what changed" payoff. Connect the news to filmmaking history, photography, theater, or analog craft. This is what differentiates OYA from a tech blog.
4. **Human-first.** AI amplifies teams, never replaces them. Never frame a story as "one person doing the work of ten" or celebrate layoffs. The `editorialGate()` in `auto-openai.ts` will hard-reject these phrases.

## AdSense-Safe Article Structure

Target: 1000–1200 visible words (well above the 800-word floor). Five sections with `<h2>` headings:

```html
<h2>[Section 1 — The News]</h2>
<p>Open with a concrete fact: date + tool/event + one detail.</p>
<p>Reaction in one short paragraph. Honest, not performative.</p>

<h2>[Section 2 — The Historical Bridge]</h2>
<p>Connect the news to a craft tradition (cinema, photography, theater, music).
   This is the OYA differentiator. 1-2 paragraphs.</p>

<h2>[Section 3 — The Practical Take]</h2>
<p>What this means for an independent filmmaker / small studio.
   Use general experience, not invented specifics.</p>
<ul>
  <li>Concrete observation 1</li>
  <li>Concrete observation 2</li>
</ul>

<h2>[Section 4 — The Contrarian Beat]</h2>
<p>"Not because X. Because Y." — say something most people miss.</p>

<h2>[Section 5 — The Position]</h2>
<p>Conviction statement. No question. No soft CTA. Land it.</p>
```

## Forbidden Phrases (auto-reject in pipeline)

The pipeline's `editorialGate()` already blocks make-money / clickbait / anti-human phrasing. Avoid:

- "while sleeping", "passive income", "made $X", "X playbook"
- "replacing teams", "10-person team", "team of one"
- "embrace the change", "navigate the landscape", "the very fabric", "new horizons", "unprecedented"
- Rhetorical questions as openings or closings
- Bilingual mixing in the article body (article = English only; LinkedIn = PT-BR; X = English)

## Hero Image

**Do not pick the URL yourself.** The pipeline calls `node scripts/fetch-heroes.mjs --pick` to grab a fresh, non-duplicated Unsplash B&W-ready URL. If writing manually, run that command and use the returned URL.

The site applies `filter: grayscale(1) contrast(1.03)` globally, so any landscape photo with strong contrast works. The visual identity is the cinematic mural — every duplicate breaks it.

## File Template

```markdown
---
id: "art-NNN"
title: "Specific, direct title — names a tool or tension (25-85 chars)"
description: "Two-sentence teaser. Opens with a concrete fact. Hints at the contrarian angle. (80-170 chars)"
pubDate: "YYYY-MM-DD"
category: "AI"
tags:
  - "Specific tool"
  - "Filmmaking"
  - "Industry trend"
  - "Craft"
heroImage: "<URL from fetch-heroes.mjs --pick>"
author: "Ulisses Balbino"
readTime: "N min read"
---

<!-- Published Mon DD, YYYY -->

<h2>...</h2>
<p>...</p>
```

## Workflow

1. Read `ULISSES_VOICE_PROMPT` from `auto-openai.ts`.
2. Pick a real news item from this week with date and source.
3. Get a fresh hero: `cd ~/Projects/open-your-ais-v2 && node scripts/fetch-heroes.mjs --pick`.
4. Write the article using the structure above.
5. Validate: `node scripts/validate-content.mjs src/content/blog/<slug>.md`.
6. Build check: `npm run build` (Astro Zod schema runs here).
7. Only commit if both pass.

## Refreshing a Thin Post

For posts flagged by `validate-content.mjs` as thin (<800 words):

**The rule for expanding without inventing** (Ulisses, 2026-05-01):
> "não precisa inventar nada — fala sobre o meu olhar, e quando faltar coisa fala sobre o tema de forma geral, dá uma dica real, ser útil para as pessoas."

Three legitimate sources of words to add:

1. **The personal lens (his look).** What does a 14-year commercial director, comedian, and Pichorra Filmes founder see in this news that a tech blogger would miss? Examples that work:
   - "On a Disney commercial set you have a script supervisor whose only job is continuity. This tool replaces what 6 humans used to cross-check by hand — and that's when it gets dangerous."
   - "I composed, acted, edited and directed before AI existed. The reason I love these tools isn't speed; it's that they let me work on a music project at noon and a corporate piece at 3pm without changing teams."
   - These don't require fabricated specifics — just the lens.

2. **General-tema context.** When you can't go deeper into the news item, go wider into the topic:
   - History of the craft (theater backdrops → green screens → AI environments)
   - Adjacent tools and how they compare (without inventing benchmark numbers — qualitative is fine)
   - The known opposing positions (Spielberg's no-AI stance vs Cameron's pro-AI; this is documented public position)
   - Why this matters to a small studio vs a major

3. **A real, useful tip.** Independent of the specific news, share something practical the reader can actually do today:
   - "If you're testing this tool, start with the cheapest tier on a project you've already shot — never on a paid client deliverable. You'll learn the failure modes without the pressure."
   - "Always export a flat reference frame from your existing edit before letting an AI tool reframe it. The AI will lie about preserving composition and you need ground truth."

**Rules of expansion:**
- Keep every original concrete claim. Only add around them.
- Never insert a budget figure, crew size, or project year tied to a named client (Disney/Nestlé/Yamaha/Carrefour/Starbucks/Kopenhagen/Benefit Cosmetics) unless documented in his public profile.
- Add `updatedDate: "YYYY-MM-DD"` to the frontmatter; do not change `pubDate` unless the news anchor itself changed.
- Re-run `node scripts/validate-content.mjs <file>` until it passes.

## Companion Files

- `src/content.config.ts` — Zod schema (build-time gate)
- `scripts/validate-content.mjs` — content quality gate
- `scripts/fetch-heroes.mjs` — Unsplash hero picker (`--pick` mode)
- `auto-openai.ts` (in `~/Projects/marketing-video/`) — daily pipeline, contains `ULISSES_VOICE_PROMPT` and `BLOCKED_PHRASES`
