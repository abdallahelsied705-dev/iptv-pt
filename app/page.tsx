import Link from "next/link";

const pillars = [
  ["Escolha informada", "Planos claros, comparações úteis e informação pensada para Portugal."],
  ["Compatível contigo", "Guias para Smart TV, dispositivos de streaming, telemóvel e computador."],
  ["Ajuda em português", "Configuração e diagnóstico explicados passo a passo, sem complicações."],
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="shell nav">
          <Link className="brand" href="/" aria-label="IPTV PT — página inicial">
            <span className="brand-mark" aria-hidden="true">PT</span>
            <span>IPTV PT<small>PORTUGAL</small></span>
          </Link>
          <nav aria-label="Navegação principal">
            <Link href="#vantagens">Vantagens</Link>
            <Link href="#guias">Guias</Link>
            <Link className="nav-cta" href="#planos">Ver planos</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div>
              <p className="eyebrow">IPTV PORTUGAL · SIMPLES E CLARO</p>
              <h1>A tua experiência IPTV, preparada para Portugal.</h1>
              <p className="lead">Compara opções, confirma a compatibilidade dos teus dispositivos e encontra guias práticos em português antes de escolher.</p>
              <div className="actions">
                <Link className="button primary" href="#planos">Explorar planos <span>→</span></Link>
                <Link className="button secondary" href="#guias">Consultar guias</Link>
              </div>
              <ul className="trust-list" aria-label="Vantagens principais">
                <li>Informação transparente</li><li>Vários dispositivos</li><li>Suporte em português</li>
              </ul>
            </div>
            <div className="visual" aria-label="Área reservada à imagem principal do IPTV PT">
              <div className="visual-orbit"><span>IPTV</span><small>PORTUGAL</small></div>
              <div className="device-card card-one">Smart TV</div>
              <div className="device-card card-two">Mobile</div>
              <div className="device-card card-three">4K</div>
            </div>
          </div>
        </section>

        <section className="section shell" id="vantagens">
          <p className="eyebrow">UMA BASE FEITA PARA CONFIAR</p>
          <h2>Começa pela informação certa.</h2>
          <div className="cards">
            {pillars.map(([title, text], index) => (
              <article className="card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="section dark" id="guias">
          <div className="shell split">
            <div><p className="eyebrow">PRÓXIMA ETAPA</p><h2>O projeto já tem uma base sólida.</h2></div>
            <p>Esta é a versão técnica inicial. A identidade final, os planos, os dispositivos, as páginas de confiança e a biblioteca de conteúdos serão desenvolvidos após a validação do primeiro deployment.</p>
          </div>
        </section>

        <section className="section shell center" id="planos">
          <p className="eyebrow">EM CONSTRUÇÃO</p><h2>Os planos chegam na próxima fase.</h2>
          <p>A estrutura está pronta para crescer sem comprometer velocidade, SEO ou acessibilidade.</p>
        </section>
      </main>

      <footer><div className="shell footer-inner"><p>© 2026 IPTV PT. Informação para Portugal.</p><p>iptv-pt.pt</p></div></footer>
    </>
  );
}
