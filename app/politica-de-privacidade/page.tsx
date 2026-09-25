import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Política de Privacidade | IPTV PT",
  description:
    "Como o IPTV PT recolhe, usa e protege os teus dados pessoais, incluindo o uso de cookies e os teus direitos ao abrigo do RGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade" updated="21 de setembro de 2026" breadcrumbLabel="Política de Privacidade">
      <p>
        Esta página explica, em linguagem simples, que dados recolhemos quando visitas ou usas o
        IPTV PT, para que servem e que direitos tens sobre eles.
      </p>

      <h2>1. Que dados recolhemos</h2>
      <p>
        Quando entras em contacto connosco por WhatsApp, Telegram ou e-mail para pedir informações
        ou subscrever um plano, recolhemos apenas o que partilhas diretamente: nome ou alcunha,
        número de telemóvel ou endereço de e-mail, e os detalhes do pedido (plano escolhido, número
        de dispositivos). Não pedimos dados de cartão de pagamento diretamente — pagamentos são
        processados pelos métodos que indicares no momento da subscrição.
      </p>
      <p>
        Enquanto navegas no site, ferramentas como a Vercel Analytics e o Google Analytics podem
        recolher dados de utilização anónimos ou pseudonimizados (páginas visitadas, tipo de
        dispositivo, país aproximado), apenas depois de aceitares cookies através do aviso mostrado
        no site.
      </p>

      <h2>2. Cookies</h2>
      <p>
        Usamos cookies essenciais para o funcionamento do site e, apenas com o teu consentimento,
        cookies analíticos para perceber como o site é usado e melhorá-lo. Podes gerir ou retirar o
        teu consentimento a qualquer momento limpando os cookies do teu navegador.
      </p>

      <h2>3. Para que usamos os teus dados</h2>
      <p>
        Usamos os dados de contacto exclusivamente para responder ao teu pedido, ativar a tua
        subscrição e prestar suporte técnico. Não vendemos nem partilhamos os teus dados com
        terceiros para fins de marketing.
      </p>

      <h2>4. Os teus direitos</h2>
      <p>
        Tens o direito de aceder, corrigir ou pedir a eliminação dos teus dados a qualquer momento.
        Para exercer qualquer um destes direitos, contacta-nos através de{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
      </p>

      <h2>5. Alterações a esta política</h2>
      <p>
        Podemos atualizar esta política periodicamente. A data no topo desta página indica a versão
        mais recente.
      </p>
    </LegalPage>
  );
}
