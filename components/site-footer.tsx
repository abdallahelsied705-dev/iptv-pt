import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <span className="brand">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/images/logo-icon.png" alt="" width={42} height={42} />
            </span>
            IPTV PT
          </span>
          <p>Informação clara sobre IPTV em Portugal — planos, dispositivos e guias em português.</p>
        </div>
        <div>
          <h4>Navegação</h4>
          <Link href="/#vantagens">Vantagens</Link>
          <Link href="/#canais">Canais</Link>
          <Link href="/aplicacoes">Aplicações</Link>
          <Link href="/dispositivos">Dispositivos</Link>
          <Link href="/planos">Planos</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/sobre-nos">Sobre Nós</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
        <div>
          <h4>Ajuda</h4>
          <Link href="/#faq">Perguntas frequentes</Link>
          <Link href="/#como-funciona">Como funciona</Link>
        </div>
        <div>
          <h4>Legal</h4>
          <p className="footer-legal">
            A tecnologia <Link href="/blog/iptv-e-legal-em-portugal">IPTV é legal em Portugal</Link>. A
            disponibilidade de conteúdos depende dos direitos de transmissão detidos por cada
            fornecedor. Consulta sempre os termos de utilização antes de subscrever.
          </p>
          <Link href="/termos-e-condicoes">Termos e Condições</Link>
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
          <Link href="/politica-de-reembolso">Política de Reembolso</Link>
        </div>
      </div>
      <div className="shell footer-inner">
        <p>© 2026 IPTV PT. Informação para Portugal.</p>
        <p>iptv-pt.pt</p>
      </div>
    </footer>
  );
}
