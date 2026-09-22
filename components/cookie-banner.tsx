"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const CONSENT_KEY = "iptv-pt-cookie-consent";
export const CONSENT_EVENT = "iptv-pt-consent-change";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reading localStorage must happen post-mount (client-only) to avoid an
    // SSR/hydration mismatch — this is the standard pattern for this case.
    const stored = window.localStorage.getItem(CONSENT_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!stored) setVisible(true);
  }, []);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p>
        Usamos cookies essenciais para o site funcionar e, com o teu consentimento, cookies
        analíticos para melhorar a experiência. Consulta a nossa{" "}
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>
      <div className="cookie-banner-actions">
        <button type="button" className="button secondary" onClick={() => choose("rejected")}>
          Apenas essenciais
        </button>
        <button type="button" className="button primary" onClick={() => choose("accepted")}>
          Aceitar
        </button>
      </div>
    </div>
  );
}
