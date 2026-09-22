import Link from "next/link";
import { pricingPlans } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { PriceCard } from "@/components/price-card";

export function PricingSection({ showDetailsLink = false }: { showDetailsLink?: boolean }) {
  return (
    <section className="section shell center" id="planos">
      <Reveal>
        <p className="eyebrow">PLANOS E PREÇOS</p>
        <h2>Escolhe a duração. O preço é sempre claro.</h2>
        <p className="section-sub">
          Preços de referência com base na média de mercado em Portugal — sem custos escondidos.
          Ajusta o número de dispositivos e envia o pedido direto para o WhatsApp.
        </p>
      </Reveal>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <Reveal key={plan.id} delay={index * 70}>
            <PriceCard plan={plan} />
          </Reveal>
        ))}
      </div>
      {showDetailsLink && (
        <p style={{ marginTop: 32 }}>
          <Link className="button secondary" href="/planos">Ver página completa de planos e FAQ <span>→</span></Link>
        </p>
      )}
    </section>
  );
}
