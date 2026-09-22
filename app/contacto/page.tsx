import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { WhatsAppGlyph, TelegramGlyph } from "@/components/brand-icons";
import { contactInfo } from "@/lib/site-data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto e Suporte | IPTV PT",
  description:
    "Fala com a equipa do IPTV PT por WhatsApp, Telegram ou e-mail. Suporte em português para dúvidas sobre planos, instalação e pagamentos.",
  alternates: { canonical: "/contacto" },
};

const channels = [
  {
    icon: <WhatsAppGlyph size={22} />,
    title: "WhatsApp",
    text: "A forma mais rápida de falar connosco — respostas normalmente em minutos.",
    href: contactInfo.whatsappLink,
    cta: "Abrir WhatsApp",
  },
  {
    icon: <TelegramGlyph size={22} />,
    title: "Telegram",
    text: "Segue atualizações de estabilidade dos servidores e fala diretamente com o suporte.",
    href: contactInfo.telegram,
    cta: "Abrir Telegram",
  },
  {
    icon: <Icon name="mail" />,
    title: "E-mail",
    text: "Para questões de faturação ou pedidos que preferes deixar por escrito.",
    href: `mailto:${contactInfo.email}`,
    cta: contactInfo.email,
  },
] as const;

export default function ContactoPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Contacto", item: `${siteConfig.url}/contacto` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SiteHeader />
      <main>
        <section className="section shell" style={{ paddingBottom: 0 }}>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Início</Link> / <span>Contacto</span>
          </nav>
          <p className="eyebrow">ESTAMOS AQUI PARA AJUDAR</p>
          <h1 className="page-title">Fala com uma pessoa real, não com um robô.</h1>
          <p className="lead" style={{ marginTop: 12, maxWidth: 640 }}>
            Escolhe o canal que preferires. Respondemos em português, todos os dias.
          </p>
        </section>

        <section className="section shell">
          <div className="cards">
            {channels.map((c, index) => (
              <Reveal key={c.title} delay={index * 70}>
                <article className="card feature-card">
                  <span className="feature-icon">{c.icon}</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <a className="button secondary" href={c.href} style={{ marginTop: 16 }} target="_blank" rel="noopener noreferrer">
                    {c.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section shell center">
          <p className="eyebrow">ANTES DE ESCREVERES</p>
          <h2>A tua dúvida pode já estar respondida.</h2>
          <p className="section-sub">
            Consulta as perguntas frequentes sobre legalidade, dispositivos e pagamentos, ou vê os
            nossos planos diretamente.
          </p>
          <div className="actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <Link className="button primary" href="/planos">Ver planos <span>→</span></Link>
            <Link className="button secondary" href="/#faq">Ver perguntas frequentes</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
