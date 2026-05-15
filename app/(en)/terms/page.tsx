import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions | TarotAxis',
  description: 'Terms and conditions for using TarotAxis — what the site is, what it is not, and how to use it responsibly.',
  alternates: {
    canonical: 'https://tarotaxis.com/terms',
    languages: {
      'en': 'https://tarotaxis.com/terms',
      'es': 'https://tarotaxis.com/es/terminos',
      'x-default': 'https://tarotaxis.com/terms',
    },
  },
}

const LAST_UPDATED = '12 May 2026'

export default function TermsPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Terms & Conditions</span>
      </nav>

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Legal
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.25 }}>
          Terms & Conditions
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.78rem', margin: 0 }}>
          Last updated: {LAST_UPDATED}
        </p>
      </div>

      <Section title="The Short Version">
        TarotAxis is a free educational and reflective tool for self-exploration. The readings, card meanings and articles on the site are for entertainment and personal insight only — not professional advice. By using the site you accept these terms.
      </Section>

      <Section title="What This Site Is">
        TarotAxis (the &ldquo;Site&rdquo;) offers tarot card meanings, interactive readings, spreads, lunar rituals and educational content. It is a free resource for individuals interested in tarot as a reflective practice.
      </Section>

      <Section title="What This Site Is Not — Important Disclaimer">
        <p style={{ marginBottom: '.75rem' }}>The Site does not provide and is not a substitute for:</p>
        <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <li><strong style={{ color: 'var(--text)' }}>Medical advice</strong> — if you have a health concern, see a qualified clinician.</li>
          <li><strong style={{ color: 'var(--text)' }}>Mental health treatment</strong> — if you are in crisis or struggling, contact a mental health professional or appropriate emergency services.</li>
          <li><strong style={{ color: 'var(--text)' }}>Legal advice</strong> — for legal matters, consult a qualified lawyer in your jurisdiction.</li>
          <li><strong style={{ color: 'var(--text)' }}>Financial advice</strong> — for financial decisions, consult a regulated financial adviser.</li>
          <li><strong style={{ color: 'var(--text)' }}>A guarantee of future events</strong> — tarot is reflective, not predictive. No reading on this Site is a forecast of what will happen.</li>
        </ul>
      </Section>

      <Section title="Use of the Site">
        You are welcome to use the Site for personal, non-commercial use — drawing readings, studying card meanings, learning about tarot. You agree not to attempt to disrupt, reverse-engineer or scrape the Site, and not to use it to harass others or violate any applicable law.
      </Section>

      <Section title="Intellectual Property">
        All written content, card meanings, illustrations and design on TarotAxis are the intellectual property of TarotAxis or licensed for use on the Site. You may quote short passages for personal, non-commercial discussion with attribution. You may not republish the Site&apos;s content in bulk, redistribute the card images, or claim our writing as your own. For licensing enquiries, write to <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)' }}>info@tarotaxis.com</a>.
      </Section>

      <Section title="User Responsibility">
        How you use the readings is your responsibility. The cards reflect; the decisions are yours. If a reading raises distressing feelings, please seek the support of a trusted person or professional. The Site cannot and does not assume responsibility for actions taken on the basis of a reading.
      </Section>

      <Section title="No Warranty">
        The Site is provided &ldquo;as is&rdquo; without warranty of any kind. We make every effort to keep it accurate and available, but we cannot guarantee uninterrupted access, error-free operation, or that the content fits any particular purpose.
      </Section>

      <Section title="Limitation of Liability">
        To the maximum extent permitted by law, TarotAxis and its operators are not liable for any direct, indirect, incidental, consequential or punitive damages arising from use of or inability to use the Site.
      </Section>

      <Section title="Changes to These Terms">
        We may update these terms from time to time. Significant changes will be noted with an updated date at the top of this page. Continued use of the Site after changes constitutes acceptance of the revised terms.
      </Section>

      <Section title="Contact">
        Questions about these terms: <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)' }}>info@tarotaxis.com</a>
      </Section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', marginBottom: '.75rem', letterSpacing: '.06em' }}>
        {title}
      </h2>
      <div style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.85 }}>
        {children}
      </div>
    </section>
  )
}
