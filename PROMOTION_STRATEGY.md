# TarotAxis — Promotion Strategy

**Дата:** 12 мая 2026
**Сайт:** https://tarotaxis.com
**Бюджет:** $50–200/мес
**Время:** 30–60 мин/день
**Каналы (приоритет):** SEO backlinks → Community (Reddit/Quora) → Visual social (Pinterest, TikTok, Instagram)

---

## TL;DR — план на 90 дней

| Неделя | Фокус | Ожидаемый результат |
|---|---|---|
| 1 | Foundation: сетап соцсетей, brand monitoring, technical SEO check | 0 backlinks, но готова инфраструктура |
| 2 | Submit во все free general & startup-директории | 15–25 backlinks (DR 30–80) |
| 3 | Niche tarot/spiritual catalogues + first Reddit value posts | 5–10 niche backlinks + первый реферальный трафик |
| 4 | Product Hunt launch + Pinterest seeding (50 пинов) | 200–800 visitors за день launch, индексация Pinterest |
| 5–8 | Daily rotation: Reddit/Quora answers + Pinterest scheduling + TikTok cards-of-the-day | 2–5k pinterest impressions/нед, 50–150 reddit/quora referrals/нед |
| 9–12 | Outreach: guest posts, HARO/Featured, resource-page links | 3–8 высококачественных DR 40+ ссылок |

**Реалистичный KPI к концу 90 дней:** 50–80 referring domains, 8–15k organic+social visitors/мес, 200–400 email leads (если запустим capture).

---

## Pillar 1: Foundation (Неделя 1, разовая работа ~3–4 часа)

### 1.1 Brand & social handles
Захватить `@tarotaxis` или `@tarotaxis_official` на всех платформах **до того как начнёт расти узнаваемость**:

- [ ] **Twitter/X** — https://x.com/signup
- [ ] **Pinterest Business** — https://business.pinterest.com (Business, не personal — нужна аналитика)
- [ ] **TikTok** — https://tiktok.com/signup
- [ ] **Instagram** — https://instagram.com/accounts/emailsignup (бизнес-аккаунт, привязать к FB Page)
- [ ] **YouTube channel** — https://youtube.com (потребуется позже под shorts/long-form)
- [ ] **Reddit account** — старый > новый. Если есть аккаунт с karma 200+, использовать его. Если нет — заводить и 2 недели набирать карму комментариями в /r/tarot, не публикуя ссылок
- [ ] **Quora** — https://quora.com, заполнить bio "Founder of TarotAxis — tarot guidance & meanings"
- [ ] **LinkedIn Company Page** — даёт DR-link на companyhouse-агрегаторах
- [ ] **Discord** — заранее зарегистрировать TarotAxis-сервер (можно пустой, важно держать имя)

**Шаблон bio (везде одинаковый):**
> ✦ TarotAxis — modern tarot meanings, daily cards & spreads. Art nouveau-inspired deck, free readings, no fluff. tarotaxis.com

### 1.2 Brand monitoring
- [ ] Google Alerts — https://www.google.com/alerts → "TarotAxis", "tarotaxis.com" → email weekly
- [ ] Mention.com free trial или https://f5bot.com (бесплатно мониторит Reddit + HackerNews)
- [ ] Talkwalker Alerts — https://www.talkwalker.com/alerts (бесплатная альтернатива Google Alerts, лучше покрытие)

**Зачем:** ловить unlinked brand mentions → писать автору с просьбой превратить упоминание в ссылку. Это самый дешёвый link-building.

### 1.3 Technical SEO check (разово, ~30 мин)
- [ ] Google Search Console — https://search.google.com/search-console → добавить **tarotaxis.com** как domain property, верифицировать через DNS TXT
- [ ] Submit sitemap: `https://tarotaxis.com/sitemap.xml`
- [ ] **Change of Address** со старого `tarotify.app` (если ещё не сделано) — Settings → Change of Address
- [ ] Bing Webmaster Tools — https://www.bing.com/webmasters (можно импортировать из GSC в один клик)
- [ ] Yandex Webmaster — https://webmaster.yandex.com (если интересен RU/EE/KZ трафик)
- [ ] IndexNow — https://www.indexnow.org (один API key → Bing + Yandex моментальная индексация). Уже встроено в Next.js через `next-sitemap` или плагин

### 1.4 Open Graph & schema audit
- [ ] Прогнать главные страницы через https://www.opengraph.xyz и https://validator.schema.org
- [ ] Убедиться что у /cards/[slug] есть `Article` или `WebPage` schema + FAQPage schema (это уже сделано)
- [ ] **Organization schema** на главной — даёт knowledge panel в Google. Добавить в `app/layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TarotAxis",
  "url": "https://tarotaxis.com",
  "logo": "https://tarotaxis.com/logo.png",
  "sameAs": [
    "https://pinterest.com/tarotaxis",
    "https://x.com/tarotaxis",
    "https://tiktok.com/@tarotaxis",
    "https://instagram.com/tarotaxis"
  ]
}
```

---

## Pillar 2: Директории (Неделя 1–2, разово ~4–6 часов; ~5–10 минут на submit)

### 2.1 Tier 1 — обязательные free general директории

Все принимают free submissions, дают DR 60+ ссылку (часто nofollow, но трафик и trust signal).

| Сайт | URL | Тип | DR | Заметки |
|---|---|---|---|---|
| **Product Hunt** | https://producthunt.com/posts/new | Launch | 90 | Запускать в **отдельную неделю** с подготовкой (см. 2.4) |
| **BetaList** | https://betalist.com/submit | Free + paid $129 | 75 | Free очередь 2–4 нед, paid за 48ч |
| **AlternativeTo** | https://alternativeto.net/account/login → Suggest software | Free | 86 | Подать как alternative к Labyrinthos / Biddy Tarot / Tarotify |
| **SaaSHub** | https://www.saashub.com/submit-service | Free + paid $50 | 71 | Подаётся как SaaS, описать как "tarot guidance SaaS" |
| **Indie Hackers** | https://www.indiehackers.com/post | Free post | 80 | Написать launch story + milestones в /products |
| **Hacker News Show HN** | https://news.ycombinator.com/submit | Free | 90 | "Show HN: I built TarotAxis…" — нужен interesting angle (Midjourney art deck) |
| **Reddit /r/SideProject** | https://reddit.com/r/SideProject | Free | 90 | Title format "I built X. Here's what I learned" |
| **Pitchwall** | https://pitchwall.co/submit | Free | 47 | Маленькая, но индексируется |
| **Startup Tabs** | https://www.startuptabs.com | Free | 38 | Быстрая модерация |
| **Launching Next** | https://www.launchingnext.com/submit | Free | 47 | Категория "lifestyle" / "spiritual" |
| **MicroLaunch** | https://microlaunch.net | Free | 38 | Indie-friendly, weekly featured |
| **Uneed.best** | https://www.uneed.best | Free | 53 | Tier list стартапов |
| **AppSumo** | https://appsumo.com/marketplace/sell-on-appsumo | Free + revenue share | 88 | Не сейчас. Когда будет paid plan — submit как deal |

**Тактика:** заполнить **один master-doc** с описаниями (50/100/300 слов), screenshots, logo, видео-демкой 30 сек → копи-пастить в каждый submit form. Это экономит часы.

### 2.2 Tier 1 — AI/Tools директории (актуально с учётом нашей фичи AI interpretation)

| Сайт | URL | DR | Заметки |
|---|---|---|---|
| **There's An AI For That** | https://theresanaiforthat.com/submit-tool | 80 | Категория "Tarot" / "Fortune" есть |
| **Futurepedia** | https://www.futurepedia.io/submit-tool | 82 | Free tier |
| **AItoolnet** | https://www.aitoolnet.com | 51 | Free submit |
| **AI Tools Directory** | https://aitoolsdirectory.com | 47 | Free |
| **Insidr AI Tools** | https://www.insidr.ai/ai-tools/submit | 56 | Free |
| **AIPure** | https://aipure.ai | 55 | Free |
| **TAAFT (the AI thing)** | https://theaithing.com | 40 | Free |
| **AI tools list** | https://www.aitoolslist.com | 35 | Free |
| **Phygital+** | https://phygital.plus | 38 | Free |
| **AItoolGuru** | https://www.aitoolguru.com | 30 | Free |

**Замечание:** часть из них требует обратную ссылку на их сайт (link exchange). Можно сделать одну страницу `/featured-on` со всеми обратными ссылками — это нормально, многие сайты так делают.

### 2.3 Tier 2 — niche tarot/spiritual/wellness каталоги

Это **золото** для tarot-ниши — узкая аудитория, высокая релевантность, низкая конкуренция.

| Сайт | URL | Тип |
|---|---|---|
| **The Tarot Lady directory** | https://thetarotlady.com (Theresa Reed) | Связаться напрямую, не самосубмит, попросить mention в blog roll |
| **Biddy Tarot resources** | https://www.biddytarot.com — нет публичной директории, но если предложить guest post → ссылка | Outreach |
| **Aeclectic Tarot** | https://www.aeclectic.net/tarot/contact.shtml | Форум архивирован, новые submissions не принимают, но контакт работает — написать владельцу с предложением review нашего deck (Midjourney art) — у них раздел Tarot Decks Reviews живой |
| **FeedSpot Tarot Blogs** | https://bloggers.feedspot.com/tarot_blogs/ | Топ-80 тарот-блогов directory, submit через "Submit Your Blog" внизу страницы — DR 90, реально индексируется и приводит трафик |
| **FeedSpot Occult Blogs** | https://bloggers.feedspot.com/occult_blogs/ | Дополнительная категория |
| **FeedSpot Astrology Blogs** | https://bloggers.feedspot.com/astrology_blogs/ | Cross-niche — наш /zodiac hub релевантен |
| **Little Red Tarot** | https://www.littleredtarot.com | Beth Maiden, queer/alt tarot blog — outreach с предложением guest post или resource mention |
| **Tarot Heritage** | https://tarot-heritage.com | Outreach |
| **The Hoodwitch resources** | https://www.thehoodwitch.com | Outreach (highly curated) |
| **Llewellyn Worldwide** | https://www.llewellyn.com | Publisher блог — может линкануть в article |
| **Spiritual SEO directories** | https://www.bestofallworlds.com, https://www.spiritseek.com | Free submit |
| **Witchcraft directories** | https://www.witchvox.com (если ещё жив) и https://thewitchesvoice.com | Free |
| **Astrology.com community** | https://community.astrology.com | Profile + signature link |
| **Cafe Astrology forums** | https://cafeastrology.com/forum | Profile link |
| **Tarot Forum** | https://tarotforum.net | Profile link, активные пользователи |
| **AT Forum (Aeclectic)** | https://forum.tarotforum.net | Старый, но индексируется |

### 2.4 Product Hunt launch — playbook (Неделя 4)

Это **отдельное событие**, готовится 2 недели вперёд. Может дать 500–2000 visitors за день и DR 90 backlink.

**За 2 недели до запуска:**
1. Создать "Coming Soon" page на Product Hunt → начать собирать subscribers
2. Подготовить ассеты:
   - Gallery: 3–5 screenshots + 1 GIF демки (free reading в действии)
   - Tagline (60 chars): "Tarot guidance with art nouveau-inspired card readings"
   - Description (260 chars): см. ниже
3. Подобрать **hunter с 1k+ followers** — найти через https://www.producthunt.com/leaderboard/daily — написать им за неделю
4. Создать список из 30–50 людей в индустрии, которые могут upvote (друзья, indie hackers, tarot-блогеры)
5. Завести Twitter тред про launch journey

**Day of launch:**
- Запускать в 00:01 PST (12:01 AM Pacific) — это даёт полный день в фиде
- Постить в r/SideProject, Indie Hackers, X тред в момент запуска
- Email всем заранее подписанным subscribers с прямой ссылкой
- Активно отвечать на каждый комментарий в первые 4 часа (это alg signal)

**Шаблон description:**
> TarotAxis is a free tarot reading site with 78 hand-drawn art nouveau cards, instant 3-card spreads, upright + reversed meanings, daily card, yes/no oracle, and 30+ themed spreads. Built for self-reflection, not fortune-telling. No login required, no popups, no ads.

### 2.5 Что НЕ делать
- ❌ Не покупать "submission services" на Fiverr за $5/200 directories — это spam-сети, навредят DR
- ❌ Не submit'ить в директории с DR < 20 и нулевым трафиком — нет смысла
- ❌ Не использовать одинаковый anchor text "tarotaxis" в каждой ссылке — диверсифицировать: "TarotAxis", "free tarot readings", "tarot card meanings", голый URL

---

## Pillar 3: Community marketing — Reddit (Daily, 15–20 мин)

Reddit — **главный community канал** для tarot. Огромная активная аудитория, низкий конкурс, но строгие правила против self-promo.

### 3.1 Целевые subreddits

| Subreddit | Subscribers | Правила self-promo | Подход |
|---|---|---|---|
| r/tarot | 700k+ | Очень строгие, no self-promo | Value-only ответы. Ссылку можно только если кто-то спросил инструмент |
| r/TarotDecks | 100k+ | Мягче, обсуждение колод | Иногда можно показать наш Midjourney арт |
| r/TarotReading | 80k+ | Free readings welcome | Бесплатные ридинги для commenters → они кликают в профиль |
| r/learntarot | 50k+ | Образовательный контент | Идеально для наших how-to гайдов |
| r/AskAstrologers | 200k+ | No promo | Только если вопрос про zodiac × tarot |
| r/witchcraft | 1M+ | No promo, но образоват. посты ок | Эпизодически |
| r/Wicca | 500k+ | Образовательный | Эпизодически |
| r/occult | 400k+ | Жёсткие модераторы | Не приоритет |
| r/divination | 150k+ | Лояльнее | Posts о Y/N оракулах, lenormand cross-reference |
| r/spirituality | 1M+ | No promo | Только value-content |
| r/SideProject | 200k+ | Self-promo welcome | Один раз — launch story |
| r/indiehackers | 70k+ | Same | Launch + monthly milestones |

### 3.2 9:1 правило
**9 value-постов/комментариев без ссылок на 1 пост со ссылкой.** Это базовая Reddit-этика. Если профиль в основном промо — shadowban.

### 3.3 Конкретные тактики

**Тактика А — "I made a free tool" (используется раз в месяц на subreddit)**
Title: "I built a free tarot reading site after getting tired of paywalls — would love your feedback"
Body: рассказать историю (ребрендинг, Midjourney арт), показать 2 скриншота, попросить feedback. **Подчеркнуть бесплатность.** Ссылка в конце.

**Тактика Б — value answer + ссылка только если спросят**
В r/tarot часто спрашивают "what does X reversed mean in context Y". Дать развёрнутый ответ (300+ слов), без ссылки. Если кто-то скажет "where can I read more" — тогда ссылка на /cards/X/reversed.

**Тактика В — Pinned profile**
В Reddit profile добавить bio "Founder of TarotAxis, free tarot meanings & spreads". Профиль появляется при клике на ник → пассивный source трафика без promo в постах.

**Тактика Г — Comment с ссылкой на конкретную страницу**
Если кто-то спрашивает "what's a good love spread for reconciliation" — комментарий: "There's a specific spread for that, I'll share — [link to /spreads/love/reconciliation]". Это **helpful, not promo** — пройдёт модерацию.

### 3.4 Шаблон ответа в r/tarot

> The X reversed in [context] often points to [meaning 1]. Specifically when you've drawn it alongside [related card], it can suggest [interpretation].
>
> A few questions to journal on:
> - [question 1]
> - [question 2]
> - [question 3]
>
> The reversed energy here isn't necessarily negative — it's often an invitation to look inward at [theme].

**Подпись:** ничего. Ссылка — только если просят.

---

## Pillar 4: Quora (3–5 ответов в неделю, ~20 мин каждый)

Quora-ответы **ранжируются в Google** годами. Один хороший ответ может приводить трафик 2–3 года.

### 4.1 Топики для подписки
- Tarot
- Tarot Reading
- Divination
- Spirituality
- Witchcraft
- Astrology
- Self-Improvement (cross-over аудитория)

### 4.2 Где найти вопросы
- https://www.quora.com/topic/Tarot/questions
- Поиск: "tarot", "tarot reading", "tarot card meaning", "yes no tarot", "love tarot"
- Сортировать по "Most viewed" → топ-100 вопросов: их видят постоянно

### 4.3 Высокоприоритетные вопросы (поиск + ответить)
- "What is the meaning of [X] tarot card?" — линковать на /cards/X
- "How do I learn to read tarot cards?" — линковать на /how-to-read-tarot
- "What's a good tarot spread for [topic]?" — линковать на /spreads/[topic]
- "Are reversed tarot cards real?" — линковать на главную reversed-секцию
- "What does it mean if I keep pulling [X]?" — карта-страница

### 4.4 Формула ответа
1. Прямой ответ на вопрос (1–2 параграфа, без ссылок)
2. Расширенный контекст (1–2 параграфа)
3. Практический совет / journaling prompt
4. Footer: "I've written more about this here: [link]"

**Один раз в ответ — одна ссылка**, не больше. Quora банит за spam.

### 4.5 Quora Spaces
Создать собственный Space "Tarot Insights" или "Daily Tarot" → бесплатное место для длинных постов + регулярные подписчики. Раз в неделю репостить выжимки из блога.

---

## Pillar 5: Pinterest (Daily, 10–15 мин на scheduling)

Pinterest для tarot — **золотая жила**. Высокий visual intent, evergreen pins живут 6–12 месяцев, аудитория 70% женская 25–45 — core tarot demo.

### 5.1 Setup
- [ ] Pinterest Business аккаунт + claim домен tarotaxis.com (через DNS TXT)
- [ ] Включить **Rich Pins** (auto-pulled metadata из OG-тегов — у нас уже есть)
- [ ] Создать **10 boards** на старте:
  1. Tarot Card Meanings
  2. Reversed Tarot Meanings
  3. Tarot Spreads
  4. Love Tarot
  5. Daily Tarot
  6. Tarot for Beginners
  7. Major Arcana
  8. Tarot & Zodiac
  9. Tarot Journaling
  10. Moon Tarot Readings

### 5.2 Pin templates (Canva, free)
Создать **3 шаблона** (2:3 ratio, 1000×1500px) — потом 78×3 = 234 pin'а за пару выходных в Canva Pro batch:

**Шаблон A — Card meaning**
- Background: extract цвет из /cards/[slug].webp (тёмный фон)
- Hero: само изображение карты
- Headline (Cinzel-like): "THE FOOL — Upright Meaning"
- Subtext: 3 keywords (innocence, beginnings, freedom)
- Footer: tarotaxis.com

**Шаблон B — Reversed meaning**
- Reversed-flipped изображение карты
- "The Fool Reversed in Love"
- 2 предложения teaser
- Footer: tarotaxis.com

**Шаблон C — Spread visual**
- Layout-схема расклада (3 cards, Celtic, etc)
- Title: "3-Card Past Present Future Spread"
- "Save for your next reading"

### 5.3 Posting cadence
- 5–10 pins/день (Tailwind app или native scheduler, бесплатный тариф)
- Перемешивать: 60% свои + 40% repins из tarot-сообщества (Pinterest любит engagement)
- **Best times** для tarot ниши: вечера США (20:00–23:00 EST) + воскресные утра

### 5.4 Стратегия трафика
- Каждый pin → линк на конкретную страницу (`/cards/the-fool` а не главная)
- Описание pin'а 100–150 слов с natural keywords + hashtags ниже (#tarot #tarotcards #tarotmeanings #majorarcana)
- Через 60–90 дней Pinterest начнёт давать 500–3000 visitors/день при правильном scaling

### 5.5 Idea Pins (Pinterest's TikTok-аналог)
- 5–10 секундный slide-deck: 3 карты + интерпретация + CTA
- Дают boost к main pins
- Не уходят в search так же сильно как обычные, но повышают engagement-rate

---

## Pillar 6: TikTok / Instagram Reels (5–7 постов/нед, 20 мин на видео)

Tarot TikTok — **огромная экосистема**, #tarot имеет 50B+ views. **Faceless format** возможен (картинки + voiceover + текст).

### 6.1 Контент-pillars (рандомизировать)

**Pillar 1: "Card of the day"** (3 раза в неделю)
- 15-сек видео: shuffle deck → reveal card → 5-сек интерпретация
- Voiceover ИЛИ только text-overlay (faceless ок)
- Caption: "Today's card: The Star. Hope is coming. ✨ #tarot #tarotreading #cardoftheday"

**Pillar 2: "Tarot myth busting"** (1 раз в неделю)
- "You don't need someone else to gift you tarot cards — that's a myth. Here's why..." → 30 сек
- Использует controversy → высокий engagement

**Pillar 3: "What [X card] really means"** (1 раз в неделю)
- Deep-dive по одной карте, особенно reversed
- Линковать в bio (TikTok не разрешает clickable в caption)

**Pillar 4: "Tarot reading for [zodiac sign] this week"** (1 раз в неделю)
- 60-сек серия по знакам
- Pin top comment "Read more: tarotaxis.com/zodiac/[sign]"

### 6.2 Faceless-tooling
- **CapCut** (бесплатно) — основной редактор
- **ElevenLabs** voiceover (free tier 10 min/мес) — если не хочешь свой голос
- **Pexels/Pixabay** — мистические b-roll loops для фона
- Наши /cards/*.webp — главный визуальный asset

### 6.3 Instagram cross-post
- Каждое TikTok-видео автоматически постится в Reels (через Meta Business Suite)
- Static carousels: "5 cards that mean reconciliation is coming" — 7-slide pdf-style carousel → высокий save-rate

### 6.4 Hashtag strategy
**Top tier** (миллионы): #tarot #tarotreading #tarotcards
**Mid tier** (100k–1M): #tarotcommunity #dailytarot #tarotmeanings #tarotcardoftheday
**Niche** (1k–100k): #midjourneytarot #artnouveautarot #freetarotonline #reversedtarot

15–20 хэштегов на пост, mix tiers.

### 6.5 Cross-promotion
- Каждое TikTok → 1 Pinterest Idea Pin → 1 Instagram Reel → 1 YouTube Short. **4 платформы из одного видео** за 5 мин расшаринга.

---

## Pillar 7: Active link building (Неделя 9–12, ~3 часа/нед)

После того как foundation + директории + community дают первый трафик, переходить к **active outreach**. Это самые качественные ссылки, но требуют времени.

### 7.1 HARO / Connectively / Featured
Журналисты ищут источники, отвечаешь — попадаешь в статью с ссылкой.

| Сервис | URL | Цена | Заметки |
|---|---|---|---|
| **HARO (на Featured.com)** | https://www.helpareporter.com | Free + $99/mo Pro | HARO вернулся в апреле 2025 после рестарта на Featured.com — 3 emails/день, free model работает |
| **Featured** | https://featured.com | Free + $99/mo Pro | Та же платформа, expert profile отдельно — стоит зарегистрироваться |
| **Help A B2B Writer** | https://helpab2bwriter.com | Free | Меньше queries но релевантнее |
| **Qwoted** | https://www.qwoted.com | Free | Хорошо для wellness/lifestyle |
| **Source Bottle** | https://www.sourcebottle.com | Free | AU/UK queries, лояльно к новым источникам |
| **Terkel** | https://terkel.io | Free + paid | Question-answer formate, ответы попадают в roundups |

**Ниша queries:** "looking for tarot reader", "expert on divination", "spirituality experts", "love & relationships expert" — отвечать как founder of TarotAxis, давать 2–3 параграфа expert quote с ссылкой на профиль/сайт.

**Реалистичный результат:** 1–3 mentions в месяц при системной работе.

### 7.2 Resource page link building
Поиск через Google: `tarot "resources" inurl:resources`, `tarot "useful links"`, `intext:"recommended tarot sites"`, `tarot blog "links" -site:pinterest.com`

Найдено ~30–50 страниц → email шаблон:

```
Subject: Resource suggestion for [page name]

Hi [Name],

I came across your resources page on [URL] and noticed you've curated a great list for tarot learners.

I run TarotAxis (https://tarotaxis.com) — a free tarot reading site with 78 hand-drawn cards and detailed upright + reversed meanings, including reversed contexts for love/career/spirit (something most sites skip).

If it's a fit for your readers, I'd be honoured to be included. Either way, thanks for putting that page together — it's a helpful entry point for beginners.

Best,
Denis
```

**Realistic response rate:** 5–15%. Из 30 outreach = 2–4 backlinks.

### 7.3 Guest posts
Целевые блоги (DR 30–60, релевантные):
- https://www.tarot.com/blog — главный игрок
- https://www.biddytarot.com/tarot-card-meanings — но они selective
- https://labyrinthos.co/blogs/learn-tarot — open для guest contribution
- https://thehoodwitch.com — high authority
- https://www.theastrologypodcast.com (cross-niche)
- https://wellandgood.com (lifestyle/wellness — высокий DR 90)
- https://www.mindbodygreen.com (DR 87) — high bar но ссылки top-tier
- https://teenvogue.com (раздел spiritual) — пишут про tarot для Gen Z

**Pitch шаблон:**
```
Subject: Guest post idea — "[specific angle]" for [blog name]

Hi [Editor],

I'm a tarot writer and founder of TarotAxis. I'd love to contribute a piece titled "[specific title]" — exploring [unique angle backed by your data or method].

A few previous pieces I've written on my site:
- [link to a deep card-page like /cards/the-tower/reversed]
- [link to a spreads page]
- [link to a how-to]

Happy to send a 200-word outline if it's the right fit. I'd link out to two authoritative sources + bio link (no excessive self-promotion).

Best,
Denis
```

**Целиться в 1 guest post/мес.** Это даёт DR 50+ link, который весит больше чем 20 директорий.

### 7.4 Unlinked brand mentions
Через Google Alerts ловить упоминания "TarotAxis" без ссылки. Email автору:

```
Hi [Name],

Thanks so much for mentioning TarotAxis in [your post URL] — it's wonderful to see the site spread organically!

Quick favour: would it be possible to make the mention a hyperlink? It'd really help our readers find us directly. No pressure either way, and thank you again.

Best,
Denis
```

**Conversion rate ~50%** — это самый дешёвый link-source.

### 7.5 Broken link building
Поиск: страница с битой ссылкой на схожий tarot-ресурс → email "вот замена". Использовать `Ahrefs Free Backlinks Checker` или `BrokenLinkCheck.com`.

Целевые: старые tarot-блоги где ссылка на ушедший сайт. Заменить на нашу страницу.

---

## Pillar 8: Дополнительные каналы (медленный burn)

### 8.1 YouTube long-form (1 видео/мес)
- "Complete Guide to The Tower Card (Upright & Reversed)" — 12-минутное видео, voiceover + наш Midjourney art
- Линк на /cards/the-tower в description
- YouTube SEO: title с keyword, chapters, transcript
- Лонг-tail: видео годами приносит трафик

### 8.2 Substack newsletter (опционально, если будет email-capture)
- "Weekly Tarot — Card of the Week + Spread of the Week"
- 1 email/нед
- Каждый email = 4–6 ссылок на сайт = 200–500 inbound/нед
- Бонус: Substack крос-рекомендует подписчиков

### 8.3 Tarot podcasts (guest appearances)
- The Tarot Bytes Podcast (Theresa Reed)
- Beyond Worlds (Hilary Parry)
- The Tarot Diagnosis Podcast
- Pitch: "Founder of new tarot site, would love to discuss [niche topic]"

### 8.4 Wikipedia editing
- Edit статьи про Tarot, Major Arcana — добавлять ссылку на наши страницы как further reading
- **Правила строгие** — ссылка должна быть genuinely useful + не делать в первый день, нарастить edit history сначала

### 8.5 Discord/Slack communities
- The Modern Witch (Discord) — 50k members
- IndieHackers Slack
- Witchsy Discord
- Pinterest Marketers Discord
- Регулярно value-share, ссылка только если спросят

---

## Pillar 9: Anti-patterns (что не делать)

- ❌ **Не покупать backlinks на Fiverr/Marketplaces** — 99% это PBN, Google penalty
- ❌ **Не делать comment spam** на чужих блогах — выглядит как нечеловек, всё равно nofollow
- ❌ **Не использовать GPT для массовой генерации Quora-ответов** — банят
- ❌ **Не submit'ить в директории DR < 15** — потеря времени
- ❌ **Не использовать exact-match anchor text "free tarot reading" в 80% ссылок** — over-optimisation
- ❌ **Не делать link exchanges с irrelevant сайтами** (типа casino, crypto) — toxic profile
- ❌ **Не платить SEO агентству $500–2000/мес "guaranteed rankings"** — почти всегда scam

---

## Pillar 10: Бюджет $50–200/мес — распределение

### Минимальный план $50/мес
- **$25** — Canva Pro (для batch-pinning, brand kit) или Tailwind for Pinterest
- **$15** — BetaList paid expedited ($129 разовый — амортизируем за 9 мес = ~$15/мес)
- **$10** — ElevenLabs Starter (для TikTok voiceovers, 30 min/мес)

### Comfortable $100/мес
- $25 — Canva Pro
- $15 — Buffer Essentials (для batch-scheduling Pinterest+Instagram+TikTok+X)
- $20 — Featured (HARO) Free + occasional sponsor query
- $20 — ChatGPT/Claude Pro для контент-генерации pin descriptions, alt text
- $20 — резерв (paid директория-of-month, например Product Hunt promoted, Indie Hackers featured)

### Aggressive $200/мес
- + $50 — Ahrefs Lite или SEMrush trial для broken-link mining
- + $50 — 1 guest post placement через сетку (только проверенные качественные сети типа TheHoth, NOT cheap PBN)

---

## Pillar 11: Weekly cadence (30–60 мин/день)

### Понедельник — Pinterest day (45 мин)
- Batch-create 20–30 pins в Canva (раз в 2 недели — 60 pins за раз)
- Schedule на неделю через Buffer/Tailwind
- 5 минут: repin from community

### Вторник — Reddit/Quora day (45 мин)
- 2–3 value-answers на Quora (15 мин каждый)
- 5–10 helpful comments в r/tarot, r/learntarot (без ссылок)
- 1 раз в месяц — value-post про новую страницу

### Среда — Content day (60 мин)
- Запись 3–4 TikTok videos батчем (15 мин каждый)
- Скрипты пишутся заранее из существующего контента сайта

### Четверг — Outreach day (45 мин)
- 5 emails: resource page outreach OR guest post pitches OR unlinked mention follow-ups
- 2 HARO/Featured queries ответы

### Пятница — Analytics & adjust (30 мин)
- Просмотр GSC: top growing queries → создать pin/TikTok про них
- Pinterest analytics: top performing pin format → дублировать стиль
- Reddit karma check, Quora views

### Сб-Вс — light mode
- 1–2 Reddit posts (peak weekend tarot-engagement)
- Repins
- TikTok posting (algorithm любит weekends в tarot нише)

---

## Pillar 12: KPI и трекинг

### Метрики недельные
- **Referring domains** (Ahrefs Free or GSC Links) — целево +2–5/нед
- **Pinterest impressions** — целово +20% MoM первые 3 месяца
- **Reddit/Quora referral traffic** (GA4) — целово 50+ visits/нед к месяцу 3
- **TikTok views** — реалистично 200–2000/post первые 30 дней
- **Brand search volume** ("tarotaxis" в GSC) — целово +50% MoM

### Метрики месячные
- **Total organic + referral traffic** — month 1: 1k, month 3: 5k, month 6: 15k
- **GSC impressions** — month 1: 50k, month 3: 200k, month 6: 800k
- **Top 10 rankings** — month 3: 30 keywords, month 6: 100 keywords

### Что мониторить в GSC еженедельно
- Top growing queries → создать дополнительный контент / pin
- Top declining queries → проверить on-page (вдруг сломалось)
- Mobile usability errors
- Index coverage (sitemap submitted vs indexed)

---

## Pillar 13: Шаблоны (copy-paste ready)

### A. Email — directory submission follow-up
```
Subject: Submission for [Directory] — TarotAxis

Hi team,

I submitted TarotAxis (https://tarotaxis.com) on [date] under category [category]. 
Just confirming the submission went through — happy to provide any additional info 
(screenshots, description variants, video demo) that would help.

Thanks for keeping the directory curated!

Best,
Denis
TarotAxis
```

### B. Reddit launch post
```
Title: I built a free tarot reading site with hand-drawn art nouveau cards — would love feedback

Hi r/SideProject,

After 6 months of evenings + weekends I finally launched TarotAxis (https://tarotaxis.com). 
The angle: most online tarot sites either look like 2008 phpBB or hide the good stuff behind 
$9.99 readings. I wanted to build something with:

- All 78 cards, full upright + reversed meanings (love/career/spirit broken out)
- Free spreads — Celtic Cross, Past-Present-Future, 8 love spreads, 5 moon readings
- Hand-drawn Midjourney art nouveau deck (vs the same Rider-Waite everywhere)
- Zero login, zero ads

A few lessons:
- Rebranded mid-project after TM conflict ([story])
- Inline styles only — no Tailwind. Faster than I expected.
- 78 cards × extended content = 70k words. AI helped, but each one needed editing.

Roadmap: AI interpretation, custom spreads, daily-by-email.

What do you think? Honest critique welcome.
```

### C. Quora answer template
```
[Direct answer to question, 1-2 paragraphs]

[Practical context with example, 1-2 paragraphs]

[Journaling prompts or reflection questions]

I write more about this card/spread/topic on TarotAxis [contextual link only if relevant].
```

### D. Pinterest pin description
```
[Card name] tarot meaning — both upright and reversed. Discover what The Lovers really 
means for love, career, and spiritual practice. Includes journaling prompts and reading 
context for beginners. Save this pin for your next reading 🔮

tarotaxis.com/cards/the-lovers

#tarot #tarotcards #tarotmeanings #thelovers #majorarcana #tarotreading #tarotcommunity 
#dailytarot #lovetarot #reversedtarot #tarotforbeginners #cardoftheday #tarotjournal
```

### E. Outreach — resource page
См. шаблон в 7.2 выше.

### F. Outreach — unlinked mention
См. шаблон в 7.4 выше.

### G. Guest post pitch
См. шаблон в 7.3 выше.

---

## Pillar 14: Чек-лист "Сделать на этой неделе"

### Неделя 1 (Foundation)
- [ ] Захватить @tarotaxis на: X, Pinterest, TikTok, Instagram, YouTube, Reddit, Quora, LinkedIn, Discord
- [ ] Google Alerts + F5Bot setup
- [ ] GSC: tarotaxis.com добавлено, sitemap submitted, Change of Address с tarotify.app
- [ ] Bing Webmaster Tools + IndexNow
- [ ] Organization schema добавлен в layout.tsx
- [ ] Master-doc с описаниями (50/100/300 слов) + logo + 5 screenshots + 30-сек GIF готов

### Неделя 2 (Tier 1 директории)
- [ ] AlternativeTo submission
- [ ] SaaSHub submission
- [ ] BetaList submission (paid expedited, $129)
- [ ] Indie Hackers product profile + launch story
- [ ] Pitchwall, Startup Tabs, Launching Next, MicroLaunch, Uneed.best
- [ ] AI-директории: There's An AI For That, Futurepedia, AItoolnet, AI Tools Directory, Insidr AI, AIPure, TAAFT
- [ ] Создать страницу /featured-on на сайте для reciprocal links

### Неделя 3 (Niche + Reddit ramp)
- [ ] Aeclectic Tarot — contact email с заявкой на review нашей колоды (Midjourney deck)
- [ ] FeedSpot Tarot Blogs — submit через "Submit Your Blog"
- [ ] FeedSpot Occult + Astrology Blogs — submit
- [ ] Связаться с Theresa Reed (The Tarot Lady) — short intro + ask for blog roll mention
- [ ] Profile + signature link на TarotForum.net, Cafe Astrology
- [ ] Reddit: 10 value-comments в r/tarot, r/learntarot, r/TarotReading (без ссылок)
- [ ] Quora: подписаться на топики, 3 ответа

### Неделя 4 (Product Hunt week)
- [ ] Hunter найден и contacted
- [ ] Pre-launch teaser в Twitter + IH + X
- [ ] Launch 00:01 PST
- [ ] Active engagement весь день в комментариях
- [ ] Cross-post: r/SideProject, r/indiehackers, Hacker News Show HN

### Неделя 5+ (Daily rotation)
- [ ] Monday: Pinterest batch
- [ ] Tuesday: Reddit/Quora
- [ ] Wednesday: TikTok content
- [ ] Thursday: Outreach
- [ ] Friday: Analytics

---

## Sources / Reference

- Backlinko Beginner's Guide to Link Building — https://backlinko.com/link-building
- Pinterest for Business Help — https://help.pinterest.com/en/business
- Reddit Self-Promotion Guidelines — https://www.reddit.com/wiki/selfpromotion
- Featured (HARO) — https://featured.com
- Ahrefs Free Backlinks Checker — https://ahrefs.com/backlink-checker

---

**Next action:** дай знать какую неделю начинаем сегодня — могу помочь подготовить master-doc для submissions, написать первый Reddit launch post, или собрать Pinterest pin-template prompt для Canva.
