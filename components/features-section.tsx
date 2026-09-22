import Link from "next/link";
import { features } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";

export function FeaturesSection() {
  return (
    <section className="section shell" id="vantagens">
      <Reveal>
        <p className="eyebrow">PORQUÊ ESCOLHER O IPTV PT</p>
        <h2>Feito para quem quer ver televisão sem complicações.</h2>
      </Reveal>
      <div className="cards cards-6">
        {features.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <article className="card feature-card">
              <span className="feature-icon"><Icon name={item.icon} /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <p style={{ marginTop: 32 }}>
        <Link className="button secondary" href="/sobre-nos">Conhece a nossa missão e valores <span>→</span></Link>
      </p>
    </section>
  );
}
