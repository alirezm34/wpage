import type { Metadata } from 'next';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL('https://aussierateinsights.com'),
  title: {
    default: 'Term Deposits & Fixed Income in Australia | Aussie Rate Insights',
    template: '%s | Aussie Rate Insights',
  },
  description:
    'Australian finance blog covering term deposits, fixed income, savings rates, RBA interest rate decisions, bank comparisons, and retirement planning.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    siteName: 'Aussie Rate Insights',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aussie Rate Insights — Term Deposits, Fixed Income, Savings Rates in Australia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  other: {
    'facebook-domain-verification': 'REPLACE_WITH_YOUR_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        {/* CLOAKERLY — Paste your Cloakerly campaign JS snippet below */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // CLOAKERLY: Replace this comment with the JS snippet from
              // Cloakerly dashboard > Your Campaign > Get Code
            `,
          }}
        />

        {/* META PIXEL */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '898957016237130');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=898957016237130&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
