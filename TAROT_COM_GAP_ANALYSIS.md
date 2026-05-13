# Tarot.com Keyword Gap Analysis — что забрать (2026-05-13)

Источник: SEMrush organic positions tarot.com US — **6 357 кейвордов**, отфильтровано 655 уникальных тарот-кейвордов (исключая астрологию, нумерологию, китайский зодиак).

## Big picture

| Кластер | Кейвордов | Суммарный Vol | KD range | Статус у нас |
|---|---:|---:|---|---|
| **"X as feelings"** | 92 | **40 360** | 0–14 | ❌ нет совсем |
| **"X yes or no"** | 62 | 40 640 | 3–14 | ✅ закрыто (`/yes-no/[slug]` × 78) |
| **"X meaning"** | 34 | 18 820 | 3–14 | ✅ закрыто (title уже под "Tarot Card Meaning") |
| **"X love" / "X in love"** | 50 | 25 140 | 2–14 | ⚠️ есть секция love в `/cards/[slug]`, но нет dedicated anchor/sub-page |
| **"X as a person"** | 14 | 1 870 | 1–14 | ❌ нет |
| **Decks (Morgan Greer, Thoth, Art Nouveau)** | 8 | 2 710 | 3–14 | ⚠️ упомянуты на `/tarot-decks`, нет отдельных страниц |
| **Misc / single high-vol** | — | — | 4–14 | разное (см. ниже) |

## Приоритеты (по убыванию ROI)

### 🥇 P0 — "X as feelings" cluster (40k vol, KD 0–14)

**Это самая большая открытая жила.** У tarot.com эти страницы ранжируются в Pos 13–60 со слабым контентом — значит SERP не закрыт сильным игроком, KD реально низкий.

**78 страниц** `/cards/[slug]/feelings`:
- Title: `{Card Name} as Feelings — What It Means in a Love Reading | TarotAxis`
- Контент: 500–700 слов
  - Hero: символ + h1 + image
  - "When {Card} appears as feelings" (upright, 2 параграфа)
  - "{Card} reversed as feelings" (2 параграфа) — закрывает long-tails "death reversed as feelings" 110, "king of swords reversed as feelings" 110, "queen of wands reversed as feelings" 110
  - "How they feel about you" (1 параграф, conversational)
  - 3–4 FAQ ("Does {Card} mean attraction?", "Is {Card} a yes for love?", "What if {Card} is reversed in a feelings spread?")
  - Cross-link на `/cards/{slug}`, `/cards/{slug}/reversed`, `/spreads/how-they-feel-about-me`

**Каннибализация:** контекст "as feelings" достаточно специфичен — не пересекается с general meaning page. Это как `/reversed` — отдельный intent.

**Ожидаемый трафик:** 40k vol × ~25% CTR при top-10 = **10k поисков/мес** при выходе.

**Шаблон агента:** clone `/cards/[slug]/reversed/page.tsx`, заменить контент-секции, использовать `lib/cards.ts` для kw_up/kw_rev как seed.

### 🥈 P1 — Art Nouveau Tarot deck page (USP)

**"art nouveau tarot card deck" — 260 vol, KD 3, tarot.com Pos 12.**

Это **наш unique selling point** — у нас весь набор изображений Midjourney art nouveau (это уже упомянуто в `/tarot-decks` page строка 75). Сделать отдельную страницу:

- `/tarot-decks/art-nouveau` 
- Title: `Art Nouveau Tarot Deck — A Modern Mucha-Inspired Set | TarotAxis`
- Контент: история стиля (Alphonse Mucha, Pamela Colman Smith), почему art nouveau и тарот, визуальные элементы (gold foil, flowing lines), grid из 12–18 наших карт в превью, ссылки на `/cards/{slug}` для каждой
- Также подсвечивает что у нас **уникальный набор**, не stock

KD 3 — это автоматический top-3 при первой индексации. Заодно закроет "alphonse mucha tarot" и подобные long-tails.

### 🥈 P1 — Morgan Greer deck dedicated page

**"morgan greer tarot" — 1 000 vol, KD 12, tarot.com Pos 3.**

У нас Morgan-Greer упомянут в `/tarot-decks` как один из 8 обзоров. Сделать `/tarot-decks/morgan-greer`:
- История колоды (Bill Greer + Lloyd Morgan, 1979, U.S. Games Systems)
- Визуальные особенности (no borders, rich 1970s palette, intimate close-ups)
- Какие читатели её выбирают
- Сравнение с Rider-Waite
- 4–5 FAQ

**Также рассмотреть:** `/tarot-decks/thoth` (Thoth tarot card meanings 320 vol, prince of wands thoth 110, thoth tarot empress 170) — Thoth собирает ~600 vol суммарно из CSV.

### 🥉 P2 — "X as a person" mini-cluster (1 870 vol)

14 кейвордов, мелочёвка по объёму, но KD 1–14. Решение: **не делать отдельные страницы** (каннибализация), а добавить **новый FAQ блок "Personality" к Court Cards** (16 cards × 4 court ranks = Pages, Knights, Queens, Kings) в `/cards/[slug]/page.tsx`:

- "What does {Card} mean as a person?"
- "What personality traits does {Card} represent?"
- "How does {Card} behave in relationships?"

Плюс к `/cards/the-high-priestess`, `/cards/the-empress`, `/cards/the-emperor` etc. — top Majors которые ищут "as a person".

### 🥉 P2 — Усилить love-секцию на /cards/[slug]

50 кейвордов "{Card} love" / "{Card} in love" — 25k vol суммарно. У нас уже есть `love` поле в `lib/cards.ts` и `love2` extended. **НЕ делаем sub-page** (каннибализация с уже работающей карта-страницей).

Что сделать вместо:
- Добавить `id="love"` anchor к love-секции (если ещё нет)
- Добавить FAQ "What does {Card} mean in love?" в `card-extended.ts` для всех 78 карт где ещё нет
- Title-bait: добавить второй H2 `"{Card} in Love & Relationships"`

### 🥉 P3 — "What does X represent" / FAQ optimisation

- **"what does the sun represent" 1 000 vol, KD 14** — добавить FAQ "What does the Sun tarot card represent?" на `/cards/the-sun`
- **"questions to ask tarot cards" 1 600 vol, KD 8, tarot.com Pos 62** — у нас уже `/how-to-ask-tarot-questions` есть, но title "How to Ask the Right Questions in Tarot". Добавить вторичный H2 `"50 Questions to Ask the Tarot — by Theme"` и подгрузить готовый список 30–50 примеров вопросов (career, love, decisions, daily). Дешёвая правка с большой отдачей — tarot.com сам там слаб (Pos 62).
- **"what is a page in tarot cards" 590 vol, KD 14** — добавить landing `/cards/court/pages` или просто разворот в `/tarot-suits` где объяснены все court ranks.

### Что НЕ берём (cherry-pick avoidance)

| Кейворд | Vol | Причина |
|---|---:|---|
| `nine of swords` | 12 100 | Tarot.com Pos 1, не подвинуть. Лучше брать long-tails на этой странице. |
| `3 of wands 8 of cups` | 1 900 | Уже есть в /combination/[slug] — проверить slug, и всё. |
| `big name in cards` | 1 600 | Crossword запрос, не наш intent. |
| `gemini and the moon`, `sun in 8th house` | 1 600 / 880 | Астрология, не тарот. |
| `the sun cat tarot card`, `twin peaks tarot card deck` | 390 / 170 | Pop-culture decks, нишевый трафик. |
| `everything is fine tarot card` | 110 | Мем/pop-culture. |
| `hexagram 54 in romance reading` | 590 | I Ching, не тарот. |

## Implementation roadmap

| Спринт | Объём | URL added | Ожидаемый vol/мес |
|---|---|---:|---:|
| Sprint A: as-feelings rollout | 78 шаблонных страниц + sitemap + cross-link | 78 | ~40 000 |
| Sprint B: deck dedicated pages | art-nouveau, morgan-greer, thoth | 3 | ~1 800 |
| Sprint C: court personality FAQs | edit 16 court cards в card-extended | 0 | ~1 800 |
| Sprint D: FAQ/title polish | the-sun, how-to-ask-questions, page-explainer | ~1 | ~3 200 |
| **Итого** | | **~82 URL** | **~47k vol/мес** |

Если выйдем в top-10 на 40% — это ~5–8k фактических визитов/мес, что **больше всего content sprint P2** (Major spreads + Daily variants + Partner) даёт суммарно.

## Метод дедупликации

В CSV много повторов (одна и та же фраза с разной позицией / URL). При анализе оставлял только **лучшую позицию для каждого keyword**. Все числа volume в US.

## Связано с memory

- Дополняет `tarot_keywords_2026.md` (тот файл — SEMrush broad-match, этот — competitor positions; не дублируют)
- Расширяет `competitor_tarotify_analysis.md` — теперь два конкурента покрыты (tarotify.ai через фичи, tarot.com через кейворды)
- Принцип каннибализации из `feedback_tarotaxis.md` соблюдён: новые pages только когда intent специфический (feelings ≠ meaning), иначе anchor + FAQ
