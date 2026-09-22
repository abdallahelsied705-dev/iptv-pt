import { channelCategories } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export function ChannelsSection() {
  return (
    <section className="section dark" id="canais">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">CATÁLOGO</p>
          <h2>Tudo o que já vês, e muito mais.</h2>
        </Reveal>
        <div className="channel-grid">
          {channelCategories.map((cat, index) => (
            <Reveal key={cat.title} delay={index * 60}>
              <article className="channel-card">
                <span className="channel-count">{cat.count}</span>
                <h3>{cat.title}</h3>
                <p>{cat.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
