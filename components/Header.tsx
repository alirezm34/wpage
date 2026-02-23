import Link from 'next/link';

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--bg)',
      }}
    >
      {/* Red accent bar */}
      <div style={{ height: 3, background: 'var(--accent)' }} />

      <div
        style={{
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          className="wrap"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 14,
            paddingBottom: 14,
          }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 22,
                  color: 'var(--navy)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                Aussie Rate Insights
              </div>
              <div className="dateline" style={{ marginTop: 3 }}>
                Fixed income · Term deposits · Savings rates · AU investing
              </div>
            </div>
          </Link>

          <nav
            aria-label="Primary navigation"
            style={{ display: 'flex', gap: 2 }}
            className="hidden-mobile"
          >
            {[
              { href: '/#insights', label: 'Insights' },
              { href: '/#guide', label: 'Guide' },
              { href: '/#about', label: 'About' },
              { href: '/#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  padding: '6px 14px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  transition: 'color 0.15s',
                }}
                className="nav-link"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <style>{`
        .nav-link:hover {
          color: var(--accent) !important;
        }
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
