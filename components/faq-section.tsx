import { faqs } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export function FaqSection() {
  return (
    <section className="section shell" id="faq">
      <Reveal>
        <p className="eyebrow">PERGUNTAS FREQUENTES</p>
        <h2>Tudo o que precisas de saber antes de assinar.</h2>
      </Reveal>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <Reveal key={item.q} delay={index * 50}>
            <details className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
