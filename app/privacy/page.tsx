import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | TarotAxis',
  description: 'Privacy policy for TarotAxis — what data we collect, how we use it, and how local-only storage of your tarot readings works.',
  alternates: { canonical: 'https://tarotaxis.com/privacy' },
}

const LAST_UPDATED = '12 May 2026'

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Privacy Policy</span>
      </nav>

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Legal
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.25 }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.78rem', margin: 0 }}>
          Last updated: {LAST_UPDATED}
        </p>
      </div>

      <Section title="The Short Version">
        TarotAxis does not require an account, does not ask for your personal information, and does not sell data to anyone. Tarot readings you do on the site are stored locally on your device in your browser, not on our servers. We collect anonymous usage analytics to understand how the site is used and to improve it.
      </Section>

      <Section title="What We Collect">
        <ul style={{ paddingLeft: '1.25rem', margin: '.5rem 0 0', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <li><strong style={{ color: 'var(--text)' }}>Anonymous analytics</strong> — pages viewed, country, device type, referring site. We use Vercel Analytics, which does not use cookies and does not track individuals across sites.</li>
          <li><strong style={{ color: 'var(--text)' }}>Local storage on your device</strong> — your saved tarot readings, your deck preference and yes/no history. This data lives only in your browser and is never transmitted to our servers.</li>
          <li><strong style={{ color: 'var(--text)' }}>Email correspondence</strong> — if you contact us at info@tarotaxis.com, we keep that email for as long as the conversation is relevant.</li>
        </ul>
      </Section>

      <Section title="What We Do Not Collect">
        <ul style={{ paddingLeft: '1.25rem', margin: '.5rem 0 0', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <li>We do not collect your name, address, date of birth, phone number, or other identifying information.</li>
          <li>We do not track you with third-party cookies.</li>
          <li>We do not run advertising trackers from networks like Google Ads or Meta Pixel.</li>
          <li>We do not build profiles of users.</li>
        </ul>
      </Section>

      <Section title="Cookies">
        TarotAxis does not use tracking cookies. The browser may use local storage to save your readings and preferences — this is a different mechanism and is purely on your device. You can clear it any time via your browser settings.
      </Section>

      <Section title="Third-Party Services">
        TarotAxis is hosted on Vercel, which provides infrastructure and anonymous analytics. Vercel may log technical information (IP address, request timing) for security and performance, retained briefly and not used to identify individuals. Their privacy policy is available at <a href="https://vercel.com/legal/privacy-policy" style={{ color: 'var(--gold)' }}>vercel.com/legal/privacy-policy</a>.
      </Section>

      <Section title="Your Data, Your Control">
        Because we do not collect personal data, there is nothing for us to delete on request. The readings on your device are yours to keep or clear at any time through your browser. If you have emailed us and wish your correspondence deleted, write to <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)' }}>info@tarotaxis.com</a> and we will do so.
      </Section>

      <Section title="Children">
        TarotAxis is intended for adult readers. We do not knowingly collect any data from children under 13. If a parent or guardian believes their child has provided information to us, please contact us and we will address it immediately.
      </Section>

      <Section title="Changes to This Policy">
        We may update this policy from time to time. Material changes will be noted with an updated date at the top of the page. Continued use of the site after changes means acceptance of the revised policy.
      </Section>

      <Section title="Contact">
        Questions about privacy: <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)' }}>info@tarotaxis.com</a>
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
