import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 56,
        borderTop: '3px solid var(--navy)',
        padding: '24px 0',
        background: 'var(--surface-muted)',
      }}
    >
      <div className="wrap">
        <div
          style={{
            fontSize: 12,
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            borderLeft: '3px solid var(--accent)',
            paddingLeft: 14,
            marginBottom: 18,
          }}
        >
          <strong style={{ color: 'var(--text)' }}>Important:</strong> This website provides
          general financial information and does not consider your personal circumstances.
          Seek professional advice if needed.
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', gap: 16, fontSize: 11, alignItems: 'center' }}>
            <Link
              href="/privacy"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}
            >
              Privacy Policy
            </Link>
            <span style={{ color: 'var(--border-dark)' }}>|</span>
            <Link
              href="/terms"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}
            >
              Terms of Use
            </Link>
          </div>

          <div style={{ fontSize: 11, color: 'var(--text-light)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--navy)' }}>
              Aussie Rate Insights
            </span>
            {' '}· © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        {/* ABN — replace with your actual Australian Business Number */}
        <div
          style={{
            marginTop: 12,
            fontSize: 11,
            color: 'var(--text-light)',
            letterSpacing: '0.02em',
          }}
        >
          ABN: 28 740 788 950
        </div>
      </div>
    </footer>
  );
}
