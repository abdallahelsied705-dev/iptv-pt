import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function CtaSection() {
  return (
    <section className="section shell">
      <Reveal>
        <div className="final-cta">
          <div>
            <p className="eyebrow">PRONTO PARA COMEÇAR?</p>
            <h2>Junta-te a quem já trocou de televisão sem arrependimentos.</h2>
          </div>
          <div className="actions">
            <Link className="button primary" href="#planos">Ver planos <span>→</span></Link>
            <Link className="button secondary" href="#faq">Tirar dúvidas primeiro</Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
