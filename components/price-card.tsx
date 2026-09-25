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
  period: string;
  billedNote: string;
  highlight: boolean;
  badge?: string;
  cta: string;
  features: string[];
  baseDevices: number;
  extraDevicePrice: string;
  durationLabel: string;
};

function toNumber(ptNumber: string) {
  return parseFloat(ptNumber.replace(",", "."));
}

function toPt(value: number) {
  return value.toFixed(2).replace(".", ",");
}

export function PriceCard({ plan }: { plan: Plan }) {
  const [devices, setDevices] = useState(plan.baseDevices);
  const maxDevices = plan.baseDevices + 6;

  const basePrice = toNumber(plan.price);
  const extraPrice = toNumber(plan.extraDevicePrice);
  const extraDevices = Math.max(0, devices - plan.baseDevices);
  const total = basePrice + extraDevices * extraPrice;

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
      <p className="price-note">{plan.billedNote}</p>

      <div className="device-stepper">
        <span className="device-stepper-label">Dispositivos em simultâneo</span>
        <div className="device-stepper-row">
          <button
            type="button"
            className="device-stepper-btn"
            onClick={() => setDevices((d) => Math.max(plan.baseDevices, d - 1))}
            disabled={devices <= plan.baseDevices}
            aria-label="Menos um dispositivo"
          >
            −
          </button>
          <span className="device-stepper-value">{devices}</span>
          <button
            type="button"
            className="device-stepper-btn"
            onClick={() => setDevices((d) => Math.min(maxDevices, d + 1))}
            disabled={devices >= maxDevices}
            aria-label="Mais um dispositivo"
          >
            +
          </button>
        </div>
        {extraDevices > 0 ? (
          <span className="device-stepper-extra">
            {plan.baseDevices} incluído{plan.baseDevices > 1 ? "s" : ""} + {extraDevices} extra
            {extraDevices > 1 ? "s" : ""} (€{plan.extraDevicePrice} cada)
          </span>
        ) : (
          <span className="device-stepper-extra">{plan.baseDevices} incluído{plan.baseDevices > 1 ? "s" : ""} no plano</span>
        )}
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
