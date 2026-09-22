import Image from "next/image";
import { comparisonRows } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export function ComparisonSection() {
  return (
    <section className="section dark" id="comparacao">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">IPTV VS. TV TRADICIONAL</p>
          <h2>A mesma televisão, sem o preço da operadora.</h2>
        </Reveal>
        <div className="compare-split">
          <Reveal delay={60} className="compare-visual">
            <Image
              src="/images/comparison-visual.webp"
              alt="Comparação entre fios de cabo tradicionais desorganizados e um sinal Wi-Fi limpo, representando IPTV"
              width={1200}
              height={1000}
              className="compare-visual-img"
              sizes="(max-width: 800px) 100vw, 38vw"
            />
          </Reveal>
          <Reveal delay={100} className="compare-table-col">
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>IPTV PT</th>
                    <th>Operadora tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td className="compare-yes">{row.iptv}</td>
                      <td className="compare-no">{row.cable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
