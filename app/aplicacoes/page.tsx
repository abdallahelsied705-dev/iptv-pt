import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { appsList } from "@/lib/site-data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Aplicações IPTV Compatíveis | IPTV PT",
  description:
    "Compara as aplicações IPTV compatíveis com a tua subscrição: IPTV Smarters Pro, TiviMate, GSE Smart IPTV, Smart IPTV, IBO Player e Flix IPTV.",
  alternates: { canonical: "/aplicacoes" },
};

export default function AplicacoesPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Aplicações", item: `${siteConfig.url}/aplicacoes` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SiteHeader />
      <main>
        <section className="section shell" style={{ paddingBottom: 0 }}>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Início</Link> / <span>Aplicações</span>
          </nav>
          <p className="eyebrow">APLICAÇÕES COMPATÍVEIS</p>
          <h1 className="page-title">A tua subscrição funciona em qualquer uma destas apps.</h1>
          <p className="lead" style={{ marginTop: 12, maxWidth: 680 }}>
            Não vendemos nenhuma destas aplicações — são apps de terceiros que interpretam a tua
            lista de canais. Escolhe a que melhor se adapta ao teu dispositivo.
          </p>
        </section>

        <section className="section shell">
          <div className="apps-grid">
            {appsList.map((app, index) => (
              <Reveal key={app.id} delay={index * 60}>
                <article className="app-card">
                  <div className="app-card-head">
                    <span className="feature-icon"><Icon name={app.icon} /></span>
                    <span className="app-price-tag">{app.priceTag}</span>
                  </div>
                  <h2>{app.name}</h2>
                  <p className="app-platforms">{app.platforms}</p>
                  <p className="app-description">{app.description}</p>
                  <p className="app-best-for"><strong>Ideal para:</strong> {app.bestFor}</p>
                  <div className="app-links">
                    {app.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="app-link">
                        {link.label} <Icon name="externallink" size={14} />
                      </a>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section shell center">
          <p className="eyebrow">NÃO SABES QUAL ESCOLHER?</p>
          <h2>Vê qual funciona melhor no teu dispositivo específico.</h2>
          <div className="actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <Link className="button primary" href="/dispositivos">Ver guia por dispositivo <span>→</span></Link>
            <Link className="button secondary" href="/contacto">Falar com o suporte</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
