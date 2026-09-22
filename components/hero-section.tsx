import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div className="reveal is-visible">
          <p className="eyebrow">IPTV PORTUGAL · ESTÁVEL E TRANSPARENTE</p>
          <h1>Todos os canais de Portugal, sem cortes e sem fidelização.</h1>
          <p className="lead">
            Mais de 20.000 canais ao vivo, filmes e séries em Full HD/4K, com suporte
            real em português e preços claros — sem contratos de 24 meses.
          </p>
          <div className="actions">
            <Link className="button primary" href="#planos">Ver planos <span>→</span></Link>
            <Link className="button secondary" href="#canais">Ver canais incluídos</Link>
          </div>
          <ul className="trust-list" aria-label="Vantagens principais">
            <li>Sem fidelização</li><li>+20.000 canais</li><li>Suporte em português</li>
          </ul>
        </div>

        <div className="visual" aria-label="Ilustração de streaming IPTV em vários dispositivos">
          <Image
            src="/images/hero-banner.webp"
            alt="Smart TV a exibir canais desportivos e de entretenimento em direto via IPTV"
            width={1600}
            height={1400}
            priority
            className="hero-banner-img"
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="device-card card-one">📺 Smart TV</div>
          <div className="device-card card-two">📱 Mobile</div>
          <div className="device-card card-three">🎬 4K</div>
          <div className="device-card card-four">⚽ Ao vivo</div>
        </div>
      </div>
    </section>
  );
}
