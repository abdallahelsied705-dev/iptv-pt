"use client";

import { whatsappUrl } from "@/lib/site-data";
import { WhatsAppGlyph } from "@/components/brand-icons";
import { gaEvent } from "@/lib/gtag";

export function WhatsAppFloat() {
  return (
    <a
      className="float-btn float-whatsapp"
      href={whatsappUrl("Olá! 👋 Gostaria de mais informações sobre o IPTV Portugal.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco no WhatsApp"
      onClick={() => gaEvent("whatsapp_click", { source: "floating_button" })}
    >
      <WhatsAppGlyph size={28} />
    </a>
  );
}
