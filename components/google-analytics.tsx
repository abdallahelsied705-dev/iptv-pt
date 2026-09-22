"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";
import { CONSENT_KEY, CONSENT_EVENT } from "@/components/cookie-banner";

export function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Client-only read of localStorage post-mount — standard pattern to avoid
    // an SSR/hydration mismatch.
    const stored = window.localStorage.getItem(CONSENT_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === "accepted") setEnabled(true);

    function onConsentChange(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      setEnabled(detail === "accepted");
    }
    window.addEventListener(CONSENT_EVENT, onConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, onConsentChange);
  }, []);

  if (!enabled || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          window.gtag = gtag;
        `}
      </Script>
    </>
  );
}
