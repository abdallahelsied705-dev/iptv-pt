import { howItWorks } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export function HowItWorksSection() {
  return (
    <section className="section shell" id="como-funciona">
      <Reveal>
        <p className="eyebrow">SIMPLES ASSIM</p>
        <h2>Do pagamento ao primeiro canal, em minutos.</h2>
      </Reveal>
      <div className="steps">
        {howItWorks.map((step, index) => (
          <Reveal key={step.step} delay={index * 80}>
            <div className="step">
              <span className="step-number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
