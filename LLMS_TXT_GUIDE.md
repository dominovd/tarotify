# llms.txt — TarotAxis maintenance guide

This document records what `public/llms.txt` is for, the spec rules it must
follow, how TarotAxis applies them, and how to update the file when the site
changes. The companion file in production is served at
`https://tarotaxis.com/llms.txt` and is referenced from `public/robots.txt`
via a `LLM-Content:` directive.

Spec source: <https://llmstxt.org/> (Jeremy Howard / Answer.AI, Sep 2024).

---

## 1. What llms.txt is (and is not)

`llms.txt` is a curated markdown index that helps language models locate and
interpret the most useful pages on a site at **inference time** — when a user
asks an LLM about a topic and the model needs a short, authoritative entry
point. It is **not** a sitemap, training-data manifest, or robots-style access
policy.

Key contrasts:

- `sitemap.xml` lists every indexable URL for search engines. `llms.txt`
  lists only the curated subset that gives an LLM enough context to be
  useful, plus pointers to LLM-friendly versions of those pages.
- `robots.txt` controls automated access. `llms.txt` does not grant or deny
  access — it just helps models that already have access understand the
  site.
- It is **not** a knowledge dump. The body of every linked page is fetched
  separately (or via the `.md` mirror, if one exists). `llms.txt` itself
  stays short.

---

## 2. Format rules (mandatory)

Per spec, the file must follow this structure **in this order**:

1. **H1** — the project / site name. The only required section.
2. **Blockquote** — short summary giving the key context needed to
   understand the rest of the file. Treat this as the "top-of-file"
   summary some crawlers may read in isolation.
3. **Zero or more markdown paragraphs / lists** — additional detail and
   guidance. **No headings allowed in this block.** This is where extra
   editorial / authority / entity-coverage notes belong.
4. **Zero or more H2 sections** — each is a "file list": a markdown bullet
   list where every item is a hyperlink, optionally followed by `: notes`.
   Example: `- [Page name](https://example.com/page): one-line description.`
5. **`## Optional` section (optional)** — same format as other H2 sections,
   but the URLs here can be skipped when context budget is tight. Use for
   secondary pages (policies, account dashboards, pricing).

**The link-list rule is strict.** H2 sections without `[name](url)` bullet
items are formally a spec violation and will be ignored or mishandled by
parsers such as `llms_txt2ctx`. Concepts, taxonomies, and editorial principles
must live in the paragraph block (step 3), not in H2 sections.

---

## 3. How TarotAxis applies the spec

The TarotAxis `llms.txt` has this layout, top to bottom:

1. `# TarotAxis` — H1.
2. Blockquote — two-sentence summary establishing the product, the locales,
   and the reflective-vs-predictive framing.
3. **Important notes** (paragraph block) — covers:
   - The "not fortune-telling" disclaimer.
   - **Editorial principles** (authority signal): human-reviewed meanings,
     RWS tradition, AI safety prompts, educational framing.
   - Model + quota disclosure (Haiku / Sonnet, 1/day anon, 5/day registered).
   - Card-corpus statement (78 RWS cards, EN + ES keywords).
   - **Domain entities covered** (topical-graph hint): cards, spreads, suits,
     decks, zodiac, birth cards, daily card, AI interpretations, journal.
   - URL-pairing convention (EN ↔ ES).
   - Canonical hosts.
4. `## Start here` — 4 curated entry points: `/free-reading`, `/cards`,
   `/how-to-read-tarot`, `/methodology`. This is the "if you only read a
   few pages, read these" list.
5. `## Core experiences` — interactive surfaces (free-reading,
   reading-analysis, daily, yes/no, combination, quiz, birth-card,
   manifestation, zodiac).
6. `## Card and spread libraries` — index hubs (78 cards, spreads, suits,
   decks).
7. `## Guides and editorial` — how-to guides, methodology, about.
8. `## Spanish (Español)` — full ES mirror with localised slugs.
9. `## Site index` — link to `sitemap.xml`.
10. `## Optional` — pricing, privacy, terms, account, journal.

---

## 4. Rules we deliberately enforce

These are the editorial constraints applied to the file beyond what the
formal spec requires. They were settled during a code review of community
recommendations on 2026-05-23.

- **H2 sections must contain link lists.** Never add an H2 whose body is a
  prose paragraph or a link-less concept list. Recommendations like
  "## Core entities" (a list of taxonomy terms) or "## Quick summary"
  (a paragraph) violate the spec. If the information is worth keeping,
  fold it into the paragraph block above the first H2 instead.
- **The blockquote is the only summary.** Do not add a second
  `## Quick summary for language models` section — it duplicates the
  blockquote and breaks the spec.
- **`## Start here` stays short.** 3–5 hand-picked URLs only. The whole
  point is curation; if it grows past five items it loses its signal.
- **Locale parity.** Every EN page in `## Core experiences` and
  `## Guides and editorial` should have its ES counterpart listed under
  `## Spanish (Español)`. Mismatches are usually a sign that a locale is
  missing a page or the ES slug changed.
- **Use absolute `https://tarotaxis.com` URLs.** Relative paths technically
  work for some parsers but are ambiguous in agent contexts where the file
  may be loaded out-of-band.
- **Notes after the colon should be one short clause.** Aim for ≤ 12 words.
  Long descriptions belong on the linked page, not in `llms.txt`.

---

## 5. When to update the file

Update `public/llms.txt` whenever any of the following happen:

- A new top-level user-facing surface ships (e.g., a new oracle, a new
  calculator, a new content hub). Add it under the appropriate H2 (usually
  `## Core experiences`, `## Guides and editorial`, or `## Card and spread
  libraries`) **and** add the ES counterpart under `## Spanish (Español)`.
- A URL slug changes. Update both EN and ES entries and verify the new path
  resolves with a 200.
- A page is retired. Remove the entry from `llms.txt` in the same commit
  as the page deletion / redirect, otherwise LLMs will keep recommending a
  404.
- The AI quota, model choice, or anonymous-vs-registered policy changes —
  update the "Important notes" bullet that names the model and the limits.
- A new locale launches (French, Portuguese, etc.). Add a new H2 section
  for it after `## Spanish (Español)` mirroring the same structure.

Editorial principles and entity coverage rarely need updating; revisit them
only when the product's positioning genuinely changes.

---

## 6. robots.txt reference

`public/robots.txt` includes a `LLM-Content:` directive pointing at the
file:

    LLM-Content: https://tarotaxis.com/llms.txt

This is an emerging de-facto convention adopted by several LLM crawlers.
Standard robots parsers ignore unknown directives, so it is safe to keep.
The `Sitemap:` line stays as it was — `llms.txt` complements `sitemap.xml`,
it does not replace it.

---

## 7. Validation checklist before committing

1. The file starts with `# TarotAxis` on the first line.
2. The very next non-empty line is a `> ` blockquote.
3. No headings appear between the blockquote and the first `## ` section.
4. Every `## ` section's body is a markdown bullet list where every bullet
   starts with `- [text](https://...)`.
5. `## Optional` is the last section.
6. Every EN URL in the body has an ES counterpart listed under the
   `## Spanish (Español)` section.
7. All linked URLs return 200 (quick spot-check after large edits).
8. The total file stays under ~12 KB so it is comfortably loadable into any
   model's context window.

---

## 8. References

- Spec: <https://llmstxt.org/>
- Spec source / discussion: <https://github.com/AnswerDotAI/llms-txt>
- Plain-markdown version of the spec: <https://llmstxt.org/index.md>
- Example (FastHTML): <https://www.fastht.ml/docs/llms.txt>
- Community directories: <https://llmstxt.site>, <https://directory.llmstxt.cloud>
