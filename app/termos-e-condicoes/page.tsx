import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Termos e Condições | IPTV PT",
  description: "Termos de utilização do serviço IPTV PT: subscrições, pagamentos e responsabilidades.",
  alternates: { canonical: "/termos-e-condicoes" },
  robots: { index: true, follow: true },
};

export default function TermosECondicoesPage() {
  return (
    <LegalPage title="Termos e Condições" updated="21 de setembro de 2026" breadcrumbLabel="Termos e Condições">
      <p>
        Ao subscreveres um plano do IPTV PT, aceitas os termos descritos nesta página. Este texto é
        um modelo informativo de base — recomendamos revisão por um advogado antes do lançamento
        oficial, sobretudo quanto às cláusulas de responsabilidade e à conformidade com a Lei n.º
        82/2021.
      </p>

      <h2>1. Natureza do serviço</h2>
      <p>
        O IPTV PT disponibiliza credenciais de acesso a um serviço de streaming de canais em
        direto, filmes e séries, através da tecnologia IPTV. Não fornecemos equipamento nem
        aplicações — recomendamos aplicações de terceiros compatíveis, disponíveis nas respetivas
        lojas oficiais.
      </p>

      <h2>2. Subscrições e pagamentos</h2>
      <p>
        Os preços apresentados na página de planos incluem tudo o que é necessário para usar o
        serviço, sem taxas escondidas. A ativação ocorre após confirmação do pagamento. Não
        trabalhamos com renovação automática — cada plano é pago uma única vez pela duração
        escolhida.
      </p>

      <h2>3. Legalidade e responsabilidade do utilizador</h2>
      <p>
        A tecnologia IPTV, enquanto método de transmissão de conteúdo pela internet, é legal em
        Portugal. É da responsabilidade do utilizador confirmar que a sua utilização do serviço
        respeita a legislação em vigor no país onde reside. O IPTV PT não se responsabiliza pelo
        uso indevido do serviço por parte de terceiros.
      </p>

      <h2>4. Estabilidade e disponibilidade</h2>
      <p>
        Fazemos o possível para garantir estabilidade e disponibilidade contínua, mas, como
        qualquer serviço de streaming, podem ocorrer interrupções pontuais fora do nosso controlo
        (falhas de internet, manutenção de servidores, picos de utilização em eventos desportivos).
      </p>

      <h2>5. Cancelamento e reembolsos</h2>
      <p>
        Consulta a nossa <a href="/politica-de-reembolso">Política de Reembolso</a> para os detalhes
        sobre cancelamentos e devoluções.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Para qualquer questão sobre estes termos, contacta-nos em{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> ou pelo WhatsApp indicado
        no site.
      </p>
    </LegalPage>
  );
}
