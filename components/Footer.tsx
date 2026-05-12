import Link from 'next/link'

const READ = [
  { href: '/free-reading', label: 'Free Reading' },
  { href: '/daily',        label: 'Card of the Day' },
  { href: '/yes-no',       label: 'Yes / No' },
  { href: '/birth-card',   label: 'Birth Card' },
]

const LEARN = [
  { href: '/cards',                     label: 'All 78 Cards' },
  { href: '/tarot-suits',               label: 'The Four Suits' },
  { href: '/spreads',                   label: 'Spreads' },
  { href: '/combination',               label: 'Combinations' },
  { href: '/zodiac',                    label: 'Zodiac Tarot' },
]

const GUIDES = [
  { href: '/tarot-for-beginners',        label: 'For Beginners' },
  { href: '/how-to-read-tarot',          label: 'How to Read' },
  { href: '/how-to-shuffle-tarot',       label: 'How to Shuffle' },
  { href: '/how-to-cleanse-tarot-cards', label: 'How to Cleanse' },
  { href: '/how-to-ask-tarot-questions', label: 'Asking Questions' },
  { href: '/tarot-journal',              label: 'Tarot Journal' },
]

const SITE = [
  { href: '/about',           label: 'About' },
  { href: '/privacy',         label: 'Privacy Policy' },
  { href: '/terms',           label: 'Terms & Conditions' },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'rgba(7,7,26,.6)',
      marginTop: '4rem',
      padding: '3rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Top: brand + columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
          gap: '2rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '1.05rem',
              color: 'var(--gold)',
              letterSpacing: '.05em',
              marginBottom: '.75rem',
            }}>
              ✦ TarotAxis
            </div>
            <p style={{
              color: 'var(--muted)',
              fontSize: '.8rem',
              lineHeight: 1.7,
              margin: 0,
            }}>
              Free AI-powered tarot readings, all 78 card meanings, spreads and lunar rituals — for self-reflection and honest guidance.
            </p>
          </div>

          {/* Read */}
          <FooterColumn title="Read" items={READ} />

          {/* Learn */}
          <FooterColumn title="Learn" items={LEARN} />

          {/* Guides */}
          <FooterColumn title="Guides" items={GUIDES} />

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '.7rem',
              letterSpacing: '.14em',
              color: 'var(--gold)',
              opacity: .65,
              textTransform: 'uppercase',
              marginBottom: '.85rem',
            }}>
              Contact
            </div>
            <a
              href="mailto:info@tarotaxis.com"
              style={{
                display: 'inline-block',
                color: 'var(--text)',
                fontSize: '.82rem',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(201,168,76,.3)',
                marginBottom: '.85rem',
              }}
            >
              info@tarotaxis.com
            </a>
            <p style={{
              color: 'var(--muted)',
              fontSize: '.75rem',
              lineHeight: 1.6,
              margin: 0,
            }}>
              Questions, feedback or partnership enquiries — we read every message.
            </p>
          </div>
        </div>

        {/* Bottom: site links + copyright */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            {SITE.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: 'var(--muted)',
                  fontSize: '.78rem',
                  letterSpacing: '.04em',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div style={{
            color: 'var(--muted)',
            fontSize: '.72rem',
            opacity: .65,
            fontFamily: "'Cinzel',serif",
            letterSpacing: '.05em',
          }}>
            © {new Date().getFullYear()} TarotAxis · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <div style={{
        fontFamily: "'Cinzel',serif",
        fontSize: '.7rem',
        letterSpacing: '.14em',
        color: 'var(--gold)',
        opacity: .65,
        textTransform: 'uppercase',
        marginBottom: '.85rem',
      }}>
        {title}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
        {items.map(item => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={{
                color: 'var(--muted)',
                fontSize: '.82rem',
                textDecoration: 'none',
                transition: 'color .2s',
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
