import Link from "next/link";
import { appsList } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";

export function AppsPreviewSection() {
  const featured = appsList.slice(0, 4);
  return (
    <section className="section shell" id="aplicacoes">
      <Reveal>
        <p className="eyebrow">APLICAÇÕES COMPATÍVEIS</p>
        <h2>Usa a app que já conheces — ou escolhe uma nova.</h2>
        <p className="lead" style={{ marginTop: 12, maxWidth: 640 }}>
          A tua subscrição funciona com as principais apps IPTV do mercado. Nenhuma é obrigatória.
        </p>
      </Reveal>
      <div className="apps-preview-grid">
        {featured.map((app, index) => (
          <Reveal key={app.id} delay={index * 60}>
            <div className="apps-preview-card">
              <span className="feature-icon"><Icon name={app.icon} /></span>
              <h3>{app.name}</h3>
              <p>{app.priceTag}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p style={{ marginTop: 32 }}>
        <Link className="button primary" href="/aplicacoes">Ver todas as aplicações <span>→</span></Link>
      </p>
    </section>
  );
}
