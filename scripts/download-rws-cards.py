#!/usr/bin/env python3
"""
Download 78 Rider-Waite-Smith tarot card images from Wikimedia Commons
and save them as WebP files in public/cards-rws/.

The Rider-Waite-Smith deck was published in 1909. Pamela Colman Smith died
in 1951; copyright expired in 2021 in the UK/EU and is in the public
domain in the US (pre-1925 publication). Wikimedia Commons hosts
high-quality scans of the original deck under the public-domain tag.

Usage (from project root):
    python3 scripts/download-rws-cards.py

Requirements:
    pip3 install --user requests Pillow
    (or with newer pip on Linux: pip3 install requests Pillow --break-system-packages)
    (or use a venv if you prefer)

What it does:
    1. For each of 78 cards, builds the Wikimedia Commons file URL
    2. Downloads via Special:FilePath redirect (stable canonical URL)
    3. Converts the source JPG to WebP at quality=85
    4. Saves as public/cards-rws/{slug}.webp
    5. Skips files that already exist (re-runs are safe)

If a particular card 404s, the script reports it at the end so you can
manually fetch a replacement. The Wikimedia filenames below follow the
standard convention used by the established Commons category:
    https://commons.wikimedia.org/wiki/Category:Rider-Waite-Smith_Tarot_deck
"""
from __future__ import annotations

import io
import sys
import time
from pathlib import Path
from urllib.parse import quote

try:
    import requests
    from PIL import Image
except ImportError:
    print("Missing dependencies. Run one of:")
    print("    pip3 install --user requests Pillow                       # macOS / older pip")
    print("    pip3 install requests Pillow --break-system-packages     # newer pip on Linux")
    sys.exit(1)

# Wikimedia Commons file names for the 1909 Rider-Waite-Smith deck.
# Format: our slug → Commons file name (without leading "File:")
WIKIMEDIA_FILENAMES = {
    # Major Arcana
    'the-fool':            'RWS_Tarot_00_Fool.jpg',
    'the-magician':        'RWS_Tarot_01_Magician.jpg',
    'the-high-priestess':  'RWS_Tarot_02_High_Priestess.jpg',
    'the-empress':         'RWS_Tarot_03_Empress.jpg',
    'the-emperor':         'RWS_Tarot_04_Emperor.jpg',
    'the-hierophant':      'RWS_Tarot_05_Hierophant.jpg',
    'the-lovers':          'RWS_Tarot_06_Lovers.jpg',
    'the-chariot':         'RWS_Tarot_07_Chariot.jpg',
    'strength':            'RWS_Tarot_08_Strength.jpg',
    'the-hermit':          'RWS_Tarot_09_Hermit.jpg',
    'wheel-of-fortune':    'RWS_Tarot_10_Wheel_of_Fortune.jpg',
    'justice':             'RWS_Tarot_11_Justice.jpg',
    'the-hanged-man':      'RWS_Tarot_12_Hanged_Man.jpg',
    'death':               'RWS_Tarot_13_Death.jpg',
    'temperance':          'RWS_Tarot_14_Temperance.jpg',
    'the-devil':           'RWS_Tarot_15_Devil.jpg',
    'the-tower':           'RWS_Tarot_16_Tower.jpg',
    'the-star':            'RWS_Tarot_17_Star.jpg',
    'the-moon':            'RWS_Tarot_18_Moon.jpg',
    'the-sun':             'RWS_Tarot_19_Sun.jpg',
    'judgement':           'RWS_Tarot_20_Judgement.jpg',
    'the-world':           'RWS_Tarot_21_World.jpg',
}

# Minor Arcana: standard Wikimedia naming uses suit-prefix + 2-digit number
# 01 = Ace, 02-10 = numbered, 11 = Page, 12 = Knight, 13 = Queen, 14 = King
SUIT_PREFIX = {
    'wands':     'Wands',
    'cups':      'Cups',
    'swords':    'Swords',
    'pentacles': 'Pents',
}
RANK_NUMBER = {
    'ace':    '01',
    'two':    '02', 'three': '03', 'four':  '04', 'five':  '05',
    'six':    '06', 'seven': '07', 'eight': '08', 'nine':  '09', 'ten': '10',
    'page':   '11', 'knight': '12', 'queen': '13', 'king':  '14',
}

for suit_slug, suit_prefix in SUIT_PREFIX.items():
    for rank_slug, rank_num in RANK_NUMBER.items():
        slug = f'{rank_slug}-of-{suit_slug}'
        WIKIMEDIA_FILENAMES[slug] = f'{suit_prefix}{rank_num}.jpg'

assert len(WIKIMEDIA_FILENAMES) == 78, f'Expected 78 cards, got {len(WIKIMEDIA_FILENAMES)}'

# ---------------------------------------------------------------------------

OUTPUT_DIR = Path(__file__).resolve().parent.parent / 'public' / 'cards-rws'
USER_AGENT = 'TarotAxis/1.0 (https://tarotaxis.com; contact: hello@tarotaxis.com) Python/requests'
WEBP_QUALITY = 85
TARGET_WIDTH = 800  # Target rendered width; keeps file size reasonable


def commons_url(filename: str) -> str:
    """Build a stable Wikimedia Commons file URL via Special:FilePath."""
    return f'https://commons.wikimedia.org/wiki/Special:FilePath/{quote(filename)}'


def download_and_convert(slug: str, filename: str) -> tuple[bool, str]:
    """Download a single card image and save as WebP. Returns (ok, message)."""
    output = OUTPUT_DIR / f'{slug}.webp'
    if output.exists():
        return True, f'skip (exists)'

    url = commons_url(filename)
    try:
        resp = requests.get(url, headers={'User-Agent': USER_AGENT}, timeout=30, allow_redirects=True)
    except requests.RequestException as e:
        return False, f'request failed: {e}'

    if resp.status_code != 200:
        return False, f'HTTP {resp.status_code} for {filename}'

    try:
        img = Image.open(io.BytesIO(resp.content))
    except Exception as e:
        return False, f'image decode failed: {e}'

    # Resize while keeping aspect ratio
    img = img.convert('RGB')
    w, h = img.size
    if w > TARGET_WIDTH:
        ratio = TARGET_WIDTH / w
        img = img.resize((TARGET_WIDTH, int(h * ratio)), Image.LANCZOS)

    img.save(output, format='WEBP', quality=WEBP_QUALITY, method=6)
    return True, f'ok ({output.stat().st_size // 1024} KB)'


def main() -> int:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f'Downloading 78 RWS cards into {OUTPUT_DIR}')
    print()

    failures: list[tuple[str, str]] = []
    for i, (slug, filename) in enumerate(WIKIMEDIA_FILENAMES.items(), 1):
        ok, msg = download_and_convert(slug, filename)
        status = '✓' if ok else '✗'
        print(f'  [{i:>2}/78] {status} {slug:<22} {msg}')
        if not ok:
            failures.append((slug, msg))
        # Be polite to Wikimedia — 250 ms between requests
        time.sleep(0.25)

    print()
    if failures:
        print(f'❌ {len(failures)} failures — fix manually:')
        for slug, msg in failures:
            print(f'   {slug}: {msg}')
        print()
        print('Common fix: open the Wikimedia Commons category page')
        print('  https://commons.wikimedia.org/wiki/Category:Rider-Waite-Smith_Tarot_deck')
        print('find the correct filename for the failing card, update WIKIMEDIA_FILENAMES, re-run.')
        return 1

    print(f'✅ All 78 cards downloaded to {OUTPUT_DIR}')
    print()
    print('Next steps:')
    print('  1. Spot-check a few images in Finder')
    print('  2. git add public/cards-rws/ && git commit -m "feat: add public-domain RWS deck (3rd option)"')
    print('  3. git push — Vercel will deploy. The DeckSwitcher now shows Nouveau / Pastel / Classic.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
