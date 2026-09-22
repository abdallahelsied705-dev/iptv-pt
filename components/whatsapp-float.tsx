"use client";

import { contactInfo } from "@/lib/site-data";
import { WhatsAppGlyph } from "@/components/brand-icons";
import { gaEvent } from "@/lib/gtag";

export function WhatsAppFloat() {
  return (
    <a
      className="float-btn float-whatsapp"
      href={contactInfo.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco no WhatsApp"
      onClick={() => gaEvent("whatsapp_click", { source: "floating_button" })}
    >
      <WhatsAppGlyph size={28} />
    </a>
  );
}
