import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section shell center not-found">
          <p className="eyebrow">ERRO 404</p>
          <h1 className="page-title">Esta página não existe — mas o resto do site sim.</h1>
          <p className="lead" style={{ margin: "12px auto 0", maxWidth: 520 }}>
            O link pode estar desatualizado ou mal escrito. Aqui tens alguns atalhos úteis:
          </p>
          <div className="actions" style={{ justifyContent: "center", marginTop: 32 }}>
            <Link className="button primary" href="/">Voltar ao início <span>→</span></Link>
            <Link className="button secondary" href="/planos">Ver planos</Link>
            <Link className="button secondary" href="/blog">Ver blog</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
