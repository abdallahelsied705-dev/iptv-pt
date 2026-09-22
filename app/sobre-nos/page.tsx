import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre Nós — Quem Somos | IPTV PT",
  description:
    "Conhece o IPTV PT: uma equipa focada em oferecer informação transparente e suporte real sobre IPTV para Portugal, sem letras pequenas.",
  alternates: { canonical: "/sobre-nos" },
};

const values = [
  {
    icon: "shield",
    title: "Transparência antes de tudo",
    text: "Preços, condições e limitações claros desde o início — sem surpresas depois de assinares.",
  },
  {
    icon: "flag",
    title: "Foco em Portugal",
    text: "Conteúdo, suporte e exemplos pensados especificamente para quem vive em Portugal ou fora e quer manter-se ligado.",
  },
  {
    icon: "chat",
    title: "Suporte que responde",
    text: "Sem bots infinitos. Uma pessoa real do outro lado do WhatsApp quando precisas de ajuda.",
  },
] as const;

export default function SobreNosPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Sobre Nós", item: `${siteConfig.url}/sobre-nos` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SiteHeader />
      <main>
        <section className="section shell" style={{ paddingBottom: 0 }}>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Início</Link> / <span>Sobre Nós</span>
          </nav>
          <p className="eyebrow">QUEM SOMOS</p>
          <h1 className="page-title">Fazemos IPTV em Portugal de forma simples e honesta.</h1>
          <p className="lead" style={{ marginTop: 12, maxWidth: 680 }}>
            O IPTV PT nasceu de uma constatação simples: encontrar informação clara sobre IPTV em
            português — sem exageros de marketing nem letras pequenas — é mais difícil do que
            devia ser. Por isso criámos este espaço.
          </p>
        </section>

        <section className="section shell">
          <Reveal>
            <p className="eyebrow">A NOSSA MISSÃO</p>
            <h2>Ajudar-te a decidir com informação, não com promessas vazias.</h2>
            <p style={{ maxWidth: 720, color: "var(--muted)", fontSize: 16.5, lineHeight: 1.8, marginTop: 8 }}>
              Trabalhamos diretamente no mercado de IPTV para Portugal há vários anos. Nesse
              tempo, vimos demasiados sites a prometer &ldquo;tudo grátis&rdquo; ou a esconder
              condições importantes até depois do pagamento. O nosso objetivo é o oposto: mostrar
              preços reais, explicar o que está incluído e ajudar-te a escolher o plano certo —
              mesmo que isso signifique dizer-te para testares antes de te comprometeres a um ano.
            </p>
          </Reveal>
        </section>

        <section className="section dark">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">OS NOSSOS VALORES</p>
              <h2>O que guia cada decisão que tomamos.</h2>
            </Reveal>
            <div className="cards" style={{ marginTop: 40 }}>
              {values.map((v, index) => (
                <Reveal key={v.title} delay={index * 70}>
                  <article className="channel-card">
                    <span className="feature-icon" style={{ marginBottom: 16 }}><Icon name={v.icon} /></span>
                    <h3 style={{ color: "#fff", fontSize: 18, margin: "0 0 10px" }}>{v.title}</h3>
                    <p>{v.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell center">
          <p className="eyebrow">VAMOS COMEÇAR?</p>
          <h2>Explora os planos ou fala connosco primeiro.</h2>
          <p className="section-sub">
            Preferes ler mais antes de decidir? Temos guias práticos no blog sobre legalidade,
            instalação e escolha de serviço.
          </p>
          <div className="actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <Link className="button primary" href="/planos">Ver planos <span>→</span></Link>
            <Link className="button secondary" href="/contacto">Falar connosco</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
