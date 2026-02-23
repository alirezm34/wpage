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
    'General information about term deposits, fixed income, savings rates, and how RBA interest rate decisions can influence returns in Australia.',
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
    // Replace with your actual Facebook domain verification code from Meta Business Manager
    // 'facebook-domain-verification': 'your-verification-code-here',
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
        {/*
          META PIXEL — Replace 'YOUR_PIXEL_ID' with your actual Meta Pixel ID.
          Get it from Meta Events Manager: https://business.facebook.com/events_manager
        */}
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
              // fbq('init', 'YOUR_PIXEL_ID');
              // fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
