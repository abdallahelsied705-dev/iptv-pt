"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { whatsappUrl } from "@/lib/site-data";
import { gaEvent } from "@/lib/gtag";
import { siteConfig } from "@/config/site";

type Plan = {
  id: string;
  name: string;
  price: string;
  devicePrices: Record<1 | 2 | 3 | 4, string>;
  period: string;
  billedNote: string;
  highlight: boolean;
  badge?: string;
  cta: string;
  features: string[];
  durationLabel: string;
};

function toNumber(ptNumber: string) {
  return parseFloat(ptNumber.replace(",", "."));
}

function toPt(value: number) {
  return value.toFixed(2).replace(".", ",");
}

export function PriceCard({ plan }: { plan: Plan }) {
  const [devices, setDevices] = useState<1 | 2 | 3 | 4>(1);
  const total = toNumber(plan.devicePrices[devices]);
  const months = Number.parseInt(plan.durationLabel, 10);

  const message =
    `Olá! 👋 Quero subscrever o plano ${plan.name} (${plan.durationLabel}) ` +
    `do ${siteConfig.name} para ${devices} dispositivo${devices > 1 ? "s" : ""} em simultâneo.\n\n` +
    `💰 Preço: €${toPt(total)}${plan.period}\n\nGostaria de receber o link de pagamento.`;

  const whatsappHref = whatsappUrl(message);

  return (
    <article className={`price-card${plan.highlight ? " price-card-highlight" : ""}`}>
      {plan.badge ? <span className="price-badge">{plan.badge}</span> : null}
      <h3>{plan.name}</h3>
      <p className="price-amount">
        <span>€</span>{toPt(total)}<small>{plan.period}</small>
      </p>
      <p className="price-note">{months === 1 ? "Preço total" : `≈ €${toPt(total / months)}/mês`}</p>

      <div className="device-stepper">
        <span className="device-stepper-label">Dispositivos em simultâneo</span>
        <div className="device-stepper-row">
          <button
            type="button"
            className="device-stepper-btn"
            onClick={() => setDevices((d) => Math.max(1, d - 1) as 1 | 2 | 3 | 4)}
            disabled={devices <= 1}
            aria-label="Menos um dispositivo"
          >
            −
          </button>
          <span className="device-stepper-value">{devices}</span>
          <button
            type="button"
            className="device-stepper-btn"
            onClick={() => setDevices((d) => Math.min(4, d + 1) as 1 | 2 | 3 | 4)}
            disabled={devices >= 4}
            aria-label="Mais um dispositivo"
          >
            +
          </button>
        </div>
        <span className="device-stepper-extra">Preço total para {devices} dispositivo{devices > 1 ? "s" : ""}</span>
      </div>

      <ul className="price-features">
        {plan.features.map((f) => (
          <li key={f}><Icon name="check" /><span>{f}</span></li>
        ))}
      </ul>

      <a
        className={`button ${plan.highlight ? "primary" : "secondary"} price-cta`}
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          gaEvent("plan_whatsapp_click", {
            plan: plan.name,
            devices,
            price_total: toPt(total),
          })
        }
      >
        {plan.cta} no WhatsApp
      </a>
    </article>
  );
}
