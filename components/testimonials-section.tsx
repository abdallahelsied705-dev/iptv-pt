import Image from "next/image";
import { testimonials } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

const avatars = [
  "/images/avatar-placeholder-1.png",
  "/images/avatar-placeholder-2.png",
  "/images/avatar-placeholder-3.png",
  "/images/avatar-placeholder-4.png",
];

/**
 * NOTA: estes são textos de exemplo (placeholders) para validar o layout.
 * Substituir por feedback real de clientes antes do lançamento — não publicar
 * como testemunhos verídicos enquanto forem apenas exemplos de preenchimento.
 */
export function TestimonialsSection() {
  return (
    <section className="section shell" id="testemunhos">
      <Reveal>
        <p className="eyebrow">O QUE DIZEM (EXEMPLO)</p>
        <h2>Confiança constrói-se com transparência.</h2>
      </Reveal>
      <div className="cards">
        {testimonials.map((t, index) => (
          <Reveal key={t.name} delay={index * 70}>
            <article className="card testimonial-card">
              <p>&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-author">
                <Image src={avatars[index % avatars.length]} alt="" width={44} height={44} className="testimonial-avatar" />
                <span className="testimonial-name">{t.name}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
