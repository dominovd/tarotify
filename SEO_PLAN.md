# Tarotify SEO Plan — May 2026

## Ситуация

**Tarotify.app** — современный чистый инструмент, но контент тонкий. Главный конкурент **free-tarot-reading.net** (Lotus Tarot, 200M+ ридингов с 2002) держит позиции 20–50 по сотням карточных ключей с объёмом 1,000–22,200, что означает — они уязвимы для обгона качественным контентом.

---

## Разрыв: что есть у конкурента, чего нет у нас

| Фича | Lotus Tarot | Tarotify |
|------|------------|---------|
| Карточные страницы | 3–4 версии на карту (автор: safina, nini, lynn, libby) | 1 страница, ~150 слов |
| Изображения карт | Нет | Скачаны, НЕ добавлены в проект |
| Таро-спреды | Да (3-card, Celtic Cross, 6-card) | Нет |
| Yes/No oracle | Да | Да ✓ |
| Combination calculator | Нет (конкурент #47) | Да ✓ |
| Гайд "как читать таро" | Да | Нет |
| Нумерология | Да | Нет |
| Квизы / обучение | Да (12-week course) | Нет |
| Живые ридинги | Да (платно) | Нет |

---

## Ключевые возможности (из CSV конкурента)

### Высокий объём — конкурент слабый (pos 25–50)
| Keyword | Volume | Конкурент pos |
|---------|--------|--------------|
| king of pentacles | 22,200 | 25 |
| knight of pentacles | 22,200 | 34 |
| 9 of swords | 14,800 | 74 |
| 6 of swords | 14,800 | 43–73 |
| seven of cups | 12,100 | 63 |
| the hanged man tarot card meaning | 12,100 | 58 |
| 10 of pentacles | 12,100 | 49–79 |
| five of swords | 12,100 | 32 |
| ten of pentacles | 9,900 | 25–77 |

### Инструментальные ключи (у нас уже есть инструмент!)
| Keyword | Volume | Конкурент pos | Статус |
|---------|--------|--------------|--------|
| tarot combination calculator | 1,600 | 47 | ✅ Есть на сайте |
| yes or no tarot card | 720 | 18–75 | ✅ Есть на сайте |
| tarot draw | 1,300 | 14–54 | ✅ Частично |
| tarot one card | 1,600 | 32 | Нет отдельной страницы |

### Спреды — конкурент слаб (CPC и объём)
| Keyword | Volume | Конкурент pos |
|---------|--------|--------------|
| tarot spread | 1,900 | 51 |
| tarot card spread | 1,900 | 12–47 |
| three card tarot spread | 1,300 | 29 |
| celtic cross tarot spread | 4,400 | 93 |
| tarot spreads for beginners | 1,000 | 67 |
| different tarot spreads | 1,300 | 68–83 |

### "Yes or no" модификаторы карт
Конкурент ранжируется на позициях 42–82 по десяткам ключей типа:
- queen of swords yes or no (2,400)
- king of cups yes or no (1,900)
- 5 of swords yes or no (880)
- queen of pentacles yes or no (1,900)
- ace of pentacles yes or no (1,600)

---

## ПЛАН РАБОТ

### 🔴 Фаза 1 — Быстрые победы (1–2 недели)

#### 1.1 Добавить изображения карт в проект
- **Что**: 78 .webp файлов из `~/Downloads/tarot-cards/` → `public/cards/`
- **Зачем**: Image pack в SERP даёт значительный CTR-буст; многие ключи показывают "Image pack" как SERP feature
- **Как**: `cp ~/Downloads/tarot-cards/*.webp /path/to/tarotify/public/cards/`
- **Код**: добавить `<Image>` в `app/cards/[slug]/page.tsx`
- **Приоритет**: ⭐⭐⭐⭐⭐

#### 1.2 Расширить контент карточных страниц
Текущий объём ~150 слов → нужно 600–900 слов. Для каждой карты добавить:
- **H2: [Card Name] Yes or No** — расширенный ответ 2-3 параграфа
- **H2: [Card Name] in Love** — 3-4 предложения (upright + reversed)
- **H2: [Card Name] in Career** — 3-4 предложения
- **H2: [Card Name] in Spirituality** — 2-3 предложения
- **H2: [Card Name] Reversed Meaning** — полноценный блок
- **FAQ section** — 3 вопроса типа "What does X mean?", "Is X a yes or no card?", "What does X mean in love?"
- **Приоритет**: ⭐⭐⭐⭐⭐

**Карты для приоритетного расширения (по объёму ключей):**
1. King of Pentacles (22,200)
2. Knight of Pentacles (22,200)
3. Five of Swords (12,100)
4. Nine of Swords (14,800)
5. Six of Swords (14,800)
6. Seven of Cups (12,100)
7. The Hanged Man (12,100)
8. Ten of Pentacles (12,100)

#### 1.3 Статические страницы комбинаций ✅ РЕАЛИЗОВАНО
- **Что**: 231 SSG-страница `/combination/[slug]` для всех Major × Major пар + priority Minor пары
- **Данные**: анализ SEMrush (78 карт × broad match "and") — 7,570 vol по 402 card+card запросам
- **Топ карты по комбо-трафику**: Death (1,090 vol), Justice (770), The Sun (600), The World (560), Judgement (520)
- **Реализация**: `lib/combinations.ts` (shared логика), `app/combination/[slug]/page.tsx` (SSG)
- **Canonical URL**: нижний ID карты всегда первый, обратный порядок → redirect 301
- **Schema**: FAQPage с 3 вопросами (общее + love + career)
- **Sitemap**: все 232 combo URL добавлены с priority 0.5
- **Priority combos**: `the-high-priestess-and-page-of-swords` (590 vol, KD:2) — первая в очереди

#### 1.4 Оптимизировать страницу Combinations
- Таргет: "tarot combination calculator" (1,600 vol) — конкурент на #47!
- Добавить H1: "Tarot Combination Calculator"
- Добавить вводный текст 200+ слов
- Добавить popular combinations section

---

### 🟡 Фаза 2 — Новые страницы (2–4 недели)

#### 2.1 Страницы Tarot Spreads (`/spreads`)
Конкурент слаб по всем spread-ключам. Создать:

- `/spreads` — Hub страница (индекс всех спредов)
- `/spreads/three-card` — "three card tarot spread" (1,300 vol, конкурент #29)
- `/spreads/celtic-cross` — "celtic cross tarot spread" (4,400 vol, конкурент #93!)
- `/spreads/one-card` — "tarot one card" (1,600 vol), "single card tarot"
- `/spreads/love` — "love tarot spread"
- `/spreads/yes-no` — усилить yes/no контент

Каждая страница: описание спреда + интерактивный layout + ссылки на карты

#### 2.2 Guide: "How to Read Tarot" (`/learn`)
- Таргет: "how to do a tarot reading" (2,400 vol)
- "how to pull tarot cards" (1,000 vol)
- "questions to ask tarot" (1,300 vol)
- Структура: введение → shuffle → spread → интерпретация → FAQ

#### 2.3 Daily Card (`/daily`)
- Таргет: "tarot draw" (1,300 vol), "tarot one card", "tarot game" (1,000 vol, #5 у конкурента с трафиком 30)
- Функция: вытащить одну карту дня

---

### 🟢 Фаза 3 — Контент-маркетинг (1–2 месяца)

#### 3.1 Blog / Articles
Ключи, по которым конкурент случайно ранжируется (lotus flower tattoo, tarot card tattoo):
- "tarot card tattoo meanings" 
- "tarot for beginners"
- "what each tarot card means"
- "tarot card combinations guide"

#### 3.2 Suit Index Pages
Конкурент ранжируется по:
- "cups tarot" (1,300 vol, pos 17)
- "swords in tarot" (880 vol, pos 38)
- "tarot pentacles" (720 vol, pos 48)
- "tarot major arcana list" (720 vol, pos 61)

Создать suit страницы: `/cards/wands`, `/cards/cups`, `/cards/swords`, `/cards/pentacles`, `/cards/major-arcana`

#### 3.3 Numerology Calculator
- "life path number calculator" — высокий объём
- Простой инструмент по имени + дате рождения

---

## Технические задачи

- [ ] **Schema markup** — добавить Article schema на карточные страницы, FAQPage schema
- [ ] **OG images** — динамические OG-карточки для карт (card image + name)
- [ ] **Structured data** — BreadcrumbList уже есть, добавить ItemList для /cards
- [ ] **Internal linking** — карты должны ссылаться на related cards и combinations
- [ ] **Sitemap** — уже есть, проверить что все новые страницы попадают

---

## Метрики успеха

| Метрика | Сейчас | Цель (3 мес) |
|---------|--------|-------------|
| Позиции по карточным ключам | Нет данных | Топ-20 по 10+ картам |
| Organic clicks | ~0 | 500+/мес |
| Image pack присутствие | 0% | 30%+ карт |
| Combination calculator pos | — | Топ-10 |
| Таро-спреды | — | Топ-20 |

---

## Следующий шаг прямо сейчас

**→ Добавить изображения карт** (самое быстрое + наибольший эффект):
```bash
cp ~/Downloads/tarot-cards/*.webp /Users/denis/Documents/Claude/Projects/tarot/public/cards/
```
Затем обновить `app/cards/[slug]/page.tsx` чтобы показывать `<Image src={/cards/${card.slug}.webp} />`.
