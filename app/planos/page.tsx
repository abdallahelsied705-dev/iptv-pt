import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PricingSection } from "@/components/pricing-section";
import { ComparisonSection } from "@/components/comparison-section";
import { FaqSection } from "@/components/faq-section";
import { PricingStructuredData } from "@/components/pricing-structured-data";

export const metadata: Metadata = {
  title: "Planos e Preços IPTV Portugal | IPTV PT",
  description:
    "Consulta os planos IPTV PT: mensal, trimestral, semestral e anual. Preços claros, sem fidelização, com canais portugueses, desporto e VOD incluídos.",
  alternates: { canonical: "/planos" },
};

export default function PlanosPage() {
  return (
    <>
      <PricingStructuredData />
      <SiteHeader />
      <main>
        <section className="section shell" style={{ paddingBottom: 0 }}>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Início</Link> / <span>Planos</span>
          </nav>
          <p className="eyebrow">PLANOS IPTV PORTUGAL</p>
          <h1 className="page-title">Um preço claro para cada forma de ver televisão.</h1>
          <p className="lead" style={{ marginTop: 12, maxWidth: 640 }}>
            Sem fidelização, sem letras pequenas. Escolhe a duração que faz sentido para ti e
            muda de plano sempre que quiseres.
          </p>
        </section>

        <PricingSection />
        <ComparisonSection />
        <FaqSection />

        <section className="section shell center">
          <p className="eyebrow">AINDA COM DÚVIDAS?</p>
          <h2>Consulta os nossos guias antes de decidir.</h2>
          <p className="section-sub">
            Explica-mos legalidade, instalação e compatibilidade de dispositivos no nosso blog.
          </p>
          <div className="actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <Link className="button primary" href="/blog">Ver artigos do blog <span>→</span></Link>
            <Link className="button secondary" href="/contacto">Falar com o suporte</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
