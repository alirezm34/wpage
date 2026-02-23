import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Term Deposits & Fixed Income in Australia',
  description:
    'General information about term deposits, fixed income, savings rates, and how RBA interest rate decisions can influence returns in Australia.',
};

const PILLS = [
  'Fixed income',
  'Term deposits',
  'Savings rates',
  'Bank comparison',
  'RBA',
  'Interest rates',
  'Rate cuts',
  'Superannuation',
  'Retirement',
  '$250K protection',
];

const KPI_CARDS = [
  { label: 'Primary topic', value: 'Term deposits' },
  { label: 'Also covers', value: 'Savings rates' },
  { label: 'Also covers', value: 'RBA & rate cuts' },
  { label: 'Also covers', value: '$250K protection' },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="wrap" style={{ paddingTop: 36, paddingBottom: 20 }}>
        {/* Hero */}
        <section id="guide" style={{ marginBottom: 8 }}>
          <div className="section-label">Analysis &amp; Guide</div>

          <div style={{ marginBottom: 18 }}>
            {PILLS.map((p) => (
              <span key={p} className="pill">
                {p}
              </span>
            ))}
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 700,
              color: 'var(--navy)',
              margin: '0 0 12px',
              letterSpacing: '-0.02em',
              maxWidth: 720,
            }}
          >
            Understanding Term Deposits and Fixed Income in Australia
          </h1>

          <p className="dateline" style={{ margin: '0 0 4px' }}>
            General educational information for Australian savers · Not personal financial advice ·
            Updated periodically for general market context.
          </p>


        </section>

        <hr className="rule-heavy" style={{ marginTop: 16, marginBottom: 32 }} />

        {/* Grid: article + aside */}
        <div
          id="insights"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 0.6fr)',
            gap: 36,
            alignItems: 'start',
          }}
          className="content-grid"
        >
          {/* Article */}
          <article>
            {/* Intro card */}
            <div className="card-muted" style={{ marginBottom: 28 }}>
              <p style={{ margin: '0 0 10px', fontSize: 14, color: 'var(--text-muted)' }}>
                This article provides a plain-English overview of{' '}
                <strong style={{ color: 'var(--text)' }}>term deposits</strong> and other{' '}
                <strong style={{ color: 'var(--text)' }}>fixed income</strong> options in
                Australia, how{' '}
                <strong style={{ color: 'var(--text)' }}>interest rates</strong> can change over
                time, and how the <strong style={{ color: 'var(--text)' }}>RBA</strong> influences
                rate settings across the market. It also explains the commonly discussed{' '}
                <strong style={{ color: 'var(--text)' }}>government guarantee</strong> and{' '}
                <strong style={{ color: 'var(--text)' }}>$250K protection</strong> concepts and
                outlines general considerations for{' '}
                <strong style={{ color: 'var(--text)' }}>financial planning</strong>,{' '}
                <strong style={{ color: 'var(--text)' }}>retirement</strong>, and{' '}
                <strong style={{ color: 'var(--text)' }}>superannuation</strong>.
              </p>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--text-light)' }}>
                This content is for general information only and does not consider your objectives,
                financial situation, or needs.
              </p>
            </div>

            <SectionHeading>How Term Deposits Work in Australian Banks</SectionHeading>
            <p style={bodyStyle}>
              A term deposit is a fixed-term savings product offered by many Australian banks,
              credit unions, and building societies. You place a sum of money with a provider for a
              set time period (for example, 3 months, 6 months, 12 months, or longer). In return,
              you receive a stated interest rate for that term, typically paid at maturity or on a
              schedule (monthly, quarterly, or annually), depending on the product.
            </p>
            <p style={bodyStyle}>
              Term deposits are often discussed as part of a conservative &ldquo;fixed income&rdquo; approach
              because the return can be defined upfront and the principal is generally expected back
              at maturity (subject to provider terms). However, the best option depends on how much
              flexibility you need. If you may require access to funds before maturity, an at-call
              savings account or shorter-term structure may be more appropriate.
            </p>

            <h3 style={h3Style}>Common product features people compare</h3>
            <ul style={ulStyle}>
              <li>
                <strong>Term length:</strong> shorter terms can help maintain flexibility; longer
                terms can provide greater rate certainty.
              </li>
              <li>
                <strong>Interest payment frequency:</strong> at maturity vs regular payments
                (varies by provider).
              </li>
              <li>
                <strong>Early withdrawal policies:</strong> providers often reduce interest or
                charge break costs if you exit early.
              </li>
              <li>
                <strong>Minimum and maximum deposits:</strong> product thresholds and eligibility
                requirements can vary.
              </li>
            </ul>

            <SectionHeading>The Role of the RBA in Interest Rate Decisions</SectionHeading>
            <p style={bodyStyle}>
              In Australia, broad movements in interest rates are influenced by the Reserve Bank of
              Australia (RBA). The RBA sets a cash rate target that impacts the cost of money
              throughout the economy. When market conditions shift (such as inflation changes,
              employment trends, or global rate moves), expectations for RBA decisions can change
              too.
            </p>
            <p style={bodyStyle}>
              Providers may adjust savings rates and term deposit pricing as they respond to funding
              needs, competition, and the expected path of interest rates. When markets anticipate{' '}
              <strong>rate cuts</strong>, institutions may sometimes try to secure longer-term
              deposits. When markets anticipate higher rates, deposit pricing may lift to remain
              competitive.
            </p>

            <figure style={{ margin: '20px 0' }}>
              <Image
                src="/images/rba-building.jpg"
                alt="Classical Australian institutional building exterior representing the Reserve Bank of Australia"
                width={1587}
                height={2245}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 360,
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: 4,
                  display: 'block',
                }}
              />
              <figcaption className="dateline" style={{ marginTop: 6 }}>
                The RBA&apos;s cash rate decisions flow through to deposit and savings rates across the market
              </figcaption>
            </figure>

            {/* Pull quote */}
            <div className="pull-quote">
              It can be useful to compare multiple providers and term lengths rather than focusing on
              one headline number — even within the same bank, different terms can be priced
              differently based on supply and demand.
            </div>

            <SectionHeading>Comparing Savings Rates and Fixed Income Products</SectionHeading>
            <p style={bodyStyle}>
              Many Australians compare term deposits against high-interest savings accounts. Savings
              rates may change over time and sometimes depend on conditions such as minimum monthly
              deposits, limits on withdrawals, or bonus-rate eligibility. Term deposits can provide
              a defined rate over the term, but may be less flexible.
            </p>
            <p style={bodyStyle}>
              Beyond cash products, some investors consider fixed income exposure via bonds
              (including Australian Government bonds) or fixed income funds. While bonds pay
              interest (coupons), bond prices can move as market yields change. That means the
              market value of a bond holding can fluctuate even when the issuer continues paying
              interest.
            </p>

            <div className="card" style={{ margin: '20px 0' }}>
              <p
                style={{
                  margin: '0 0 12px',
                  fontFamily: 'var(--font-display)',
                  fontSize: 17,
                  fontWeight: 700,
                  color: 'var(--navy)',
                }}
              >
                General comparison checklist
              </p>
              <ul style={{ ...ulStyle, marginBottom: 12 }}>
                <li>Is the quoted return a base rate, a bonus rate, or a fixed rate?</li>
                <li>
                  What conditions apply (deposits, withdrawals, minimum balances)?
                </li>
                <li>How important is liquidity over your timeframe?</li>
                <li>
                  How does the product fit into your overall financial planning or retirement
                  approach?
                </li>
                <li>
                  Is the provider an Australian-authorised deposit-taking institution (as relevant
                  to deposit protection considerations)?
                </li>
              </ul>
              <p style={{ margin: 0, fontSize: 12, color: 'var(--text-light)', fontStyle: 'italic' }}>
                This is general information only. Consider independent advice if you&apos;re
                unsure.
              </p>
            </div>

            <SectionHeading>
              Government Guarantee and the $250,000 Protection Scheme
            </SectionHeading>
            <p style={bodyStyle}>
              Australians often refer to &ldquo;$250K protection&rdquo; when discussing deposit safety. This
              typically relates to Australia&apos;s deposit protection framework (commonly discussed
              under the Financial Claims Scheme administered by APRA), which can apply to eligible
              deposits up to a specified cap per account holder per institution, subject to
              eligibility and the scheme&apos;s rules.
            </p>
            <p style={bodyStyle}>
              If deposit safety is a key consideration for you, it may help to understand how
              protection limits can work across different institutions. Some people choose to spread
              funds across multiple providers to manage amounts within their preferred limits. Always
              confirm specific details through official sources and the relevant provider&apos;s
              documentation.
            </p>

            <SectionHeading>
              Financial Planning, Retirement, and Superannuation Considerations
            </SectionHeading>
            <p style={bodyStyle}>
              When planning for retirement, many people focus on balancing certainty (knowing what
              return they may receive) with flexibility (having access to funds for living expenses
              and unexpected costs). Term deposits are sometimes used as part of a defensive
              allocation alongside cash buffers and diversified investments, including within
              superannuation structures depending on an individual strategy.
            </p>
            <p style={bodyStyle}>
              One general approach used by conservative savers is a &ldquo;ladder&rdquo;: splitting funds across
              multiple term deposits with different maturity dates. This can reduce the risk of
              reinvesting everything at an unfavourable time and can provide scheduled access to
              funds. Another approach is mixing shorter terms (for flexibility) with longer terms
              (for certainty), depending on your horizon and comfort level.
            </p>

            <h3 style={h3Style}>Common questions (general)</h3>
            <ul style={ulStyle}>
              <li>
                <strong>Is a longer term always better?</strong> Not necessarily. Longer terms can
                reduce flexibility if market rates rise later.
              </li>
              <li>
                <strong>Should I wait for rates to change?</strong> Timing interest rates is
                difficult; laddering can reduce timing risk for some people.
              </li>
              <li>
                <strong>Is fixed income &ldquo;risk-free&rdquo;?</strong> No investment is risk-free. Read
                product terms and understand provider and product rules.
              </li>
            </ul>

            {/* Disclaimer */}
            <div
              className="card"
              style={{
                marginTop: 24,
                borderLeft: '4px solid var(--accent)',
                borderRadius: '0 4px 4px 0',
              }}
            >
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text)' }}>Disclaimer:</strong> This website
                provides general financial information and is not personal financial advice.
                Consider your objectives, financial situation, and needs, and seek professional
                advice if required.
              </p>
            </div>
          </article>

          {/* Aside */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {/* KPI list — stacked with bottom borders */}
            <div className="card" style={{ padding: 0 }}>
              {KPI_CARDS.map(({ label, value }, i) => (
                <div
                  key={value}
                  style={{
                    padding: '14px 20px',
                    borderBottom: i < KPI_CARDS.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div className="dateline" style={{ marginBottom: 2 }}>
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 16,
                      color: 'var(--navy)',
                      lineHeight: 1.2,
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar image */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <Image
                src="/images/retirement-planning.jpg"
                alt="Couple reviewing financial documents and planning for retirement"
                width={1587}
                height={2245}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 220,
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
              <p className="dateline" style={{ padding: '8px 16px 10px', margin: 0 }}>
                Planning for retirement involves balancing certainty with flexibility
              </p>
            </div>

            {/* Newsletter */}
            <div className="card">
              <div className="section-label" style={{ marginBottom: 4 }}>Subscribe</div>
              <h3
                style={{
                  margin: '0 0 6px',
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'var(--navy)',
                  textTransform: 'none',
                  letterSpacing: '-0.01em',
                }}
              >
                Newsletter
              </h3>
              <p style={{ margin: '0 0 14px', fontSize: 13, color: 'var(--text-light)' }}>
                Monthly notes on AU investing, fixed income, and retirement planning (general info
                only).
              </p>
              <NewsletterForm />
            </div>

            {/* About */}
            <div className="card" id="about">
              <div className="section-label" style={{ marginBottom: 4 }}>Who we are</div>
              <h3
                style={{
                  margin: '0 0 8px',
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'var(--navy)',
                  textTransform: 'none',
                  letterSpacing: '-0.01em',
                }}
              >
                About
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65 }}>
                Aussie Rate Insights publishes general educational content about Australian savings
                rates, term deposits, fixed income, and common retirement planning considerations.
                We do not provide personal financial advice.
              </p>
            </div>
          </aside>
        </div>

        {/* Contact */}
        <section id="contact" style={{ marginTop: 36 }}>
          <hr className="rule-heavy" style={{ marginBottom: 24 }} />
          <div className="section-label">Get in touch</div>
          <div className="card">
            <h2
              style={{
                margin: '0 0 8px',
                fontFamily: 'var(--font-display)',
                fontSize: 26,
                fontWeight: 700,
                color: 'var(--navy)',
              }}
            >
              Contact
            </h2>
            <p style={{ margin: '0 0 12px', fontSize: 14, color: 'var(--text-muted)' }}>
              For general questions about the information on this site:
            </p>
            <ul style={{ ...ulStyle, marginBottom: 14 }}>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@aussierateinsights.com">info@aussierateinsights.com</a>
              </li>
              <li>
                <strong>Phone:</strong>{' '}
                <a href="tel:+61244555534">02 4455 5534</a>
              </li>
              <li>
                <strong>Address:</strong> 368 Sussex St, Sydney NSW 2000
              </li>
            </ul>
            <p style={{ margin: 0, fontSize: 12, color: 'var(--text-light)', fontStyle: 'italic' }}>
              General information only — not personal financial advice.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 860px) {
          .content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="section-label" style={{ marginTop: 36, marginBottom: 0 }}>Section</div>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(20px, 3vw, 26px)',
          fontWeight: 700,
          color: 'var(--navy)',
          margin: '4px 0 10px',
          letterSpacing: '-0.01em',
          paddingBottom: 8,
          borderBottom: '2px solid var(--navy)',
        }}
      >
        {children}
      </h2>
    </>
  );
}

const bodyStyle: React.CSSProperties = {
  fontSize: 16,
  color: 'var(--text-muted)',
  lineHeight: 1.75,
  margin: '0 0 16px',
};

const h3Style: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--navy)',
  margin: '24px 0 8px',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const ulStyle: React.CSSProperties = {
  paddingLeft: 20,
  margin: '0 0 16px',
  fontSize: 16,
  color: 'var(--text-muted)',
  lineHeight: 1.75,
};
