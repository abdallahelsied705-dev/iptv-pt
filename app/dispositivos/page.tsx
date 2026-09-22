import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { devicesList } from "@/lib/site-data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Instalar IPTV em Todos os Dispositivos | IPTV PT",
  description:
    "Guia completo para instalar IPTV na Smart TV Samsung/LG, Fire TV Stick, Android TV Box, iPhone, iPad, Android, PC, Mac e MAG Box, passo a passo.",
  alternates: { canonical: "/dispositivos" },
};

export default function DispositivosPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Dispositivos", item: `${siteConfig.url}/dispositivos` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SiteHeader />
      <main>
        <section className="section shell" style={{ paddingBottom: 0 }}>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Início</Link> / <span>Dispositivos</span>
          </nav>
          <p className="eyebrow">GUIA DE INSTALAÇÃO</p>
          <h1 className="page-title">O teu ecrã, o teu método — sem equipamento extra.</h1>
          <p className="lead" style={{ marginTop: 12, maxWidth: 680 }}>
            Cada tipo de dispositivo liga-se de forma diferente. Escolhe o teu abaixo e segue os
            passos — sem técnico, sem cabos novos.
          </p>
        </section>

        <section className="section shell">
          <div className="device-guide-list">
            {devicesList.map((device, index) => (
              <Reveal key={device.id} delay={index * 50}>
                <article className="device-guide-card" id={device.id}>
                  <div className="device-guide-head">
                    <span className="feature-icon"><Icon name={device.icon} /></span>
                    <div>
                      <h2>{device.name}</h2>
                      <p className="device-guide-apps">App recomendada: {device.recommendedApps}</p>
                    </div>
                  </div>
                  <ol className="device-guide-steps">
                    {device.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section shell center">
          <p className="eyebrow">FALTA A APP CERTA?</p>
          <h2>Vê o catálogo completo de aplicações compatíveis.</h2>
          <p className="section-sub">
            Cada dispositivo acima funciona com mais do que uma app — compara as opções antes de
            escolheres.
          </p>
          <div className="actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <Link className="button primary" href="/aplicacoes">Ver aplicações <span>→</span></Link>
            <Link className="button secondary" href="/contacto">Preciso de ajuda</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
