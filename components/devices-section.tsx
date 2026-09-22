import Link from "next/link";
import Image from "next/image";
import { deviceLogos } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";

export function DevicesSection() {
  return (
    <section className="section shell" id="dispositivos">
      <div className="split split-align-start devices-split">
        <Reveal>
          <p className="eyebrow">COMPATIBILIDADE</p>
          <h2>Funciona no ecrã que já tens em casa.</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            Sem equipamento adicional para comprar. Ativa a aplicação certa para o teu
            dispositivo e começa a ver em minutos.
          </p>
          <ul className="device-check-list">
            {deviceLogos.map((device) => (
              <li key={device}><Icon name="check" /><span>{device}</span></li>
            ))}
          </ul>
          <p style={{ marginTop: 28 }}>
            <Link className="button primary" href="/dispositivos">Ver guia de instalação completo <span>→</span></Link>
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Image
            src="/images/device-mockup.webp"
            alt="Aplicação IPTV a funcionar em Smart TV, telemóvel e Firestick"
            width={1200}
            height={1200}
            className="device-mockup-img"
            sizes="(max-width: 800px) 100vw, 45vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
