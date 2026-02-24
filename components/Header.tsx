'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/logo.svg"
            alt="Aussie Rate Insights"
            width={220}
            height={36}
            style={{ height: 36, width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary navigation"
          style={{ display: 'flex', alignItems: 'center', gap: 4 }}
          className="hidden-mobile"
        >
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--text-muted)',
                padding: '8px 16px',
                textDecoration: 'none',
                borderRadius: 6,
                transition: 'color 0.15s, background 0.15s',
              }}
              className="nav-link"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            color: 'var(--navy)',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className="mobile-nav"
          style={{
            borderTop: '1px solid var(--border)',
            background: 'var(--surface)',
            padding: '8px 0',
          }}
        >
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 24px',
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}

      <style>{`
        .nav-link:hover {
          color: var(--accent) !important;
          background: var(--surface-muted);
        }
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
