import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Política de Reembolso | IPTV PT",
  description:
    "Condições de reembolso e cancelamento dos planos IPTV PT: prazos, problemas técnicos cobertos e como pedir a devolução.",
  alternates: { canonical: "/politica-de-reembolso" },
  robots: { index: true, follow: true },
};

export default function PoliticaDeReembolsoPage() {
  return (
    <LegalPage title="Política de Reembolso" updated="21 de setembro de 2026" breadcrumbLabel="Política de Reembolso">
      <p>
        Queremos que testes o serviço com confiança. Esta página resume as condições em que um
        reembolso pode ser pedido.
      </p>

      <h2>1. Problemas técnicos comprovados</h2>
      <p>
        Se o serviço não funcionar corretamente no teu dispositivo (após tentativa de suporte
        técnico para resolver o problema) e não conseguirmos resolver a situação, tens direito a
        reembolso total dentro do prazo indicado no teu plano.
      </p>

      <h2>2. Erro de ativação</h2>
      <p>
        Se, por erro nosso, a tua subscrição não for ativada corretamente após o pagamento
        confirmado, o reembolso é imediato — não é necessário justificares o pedido.
      </p>

      <h2>3. Mudança de ideias</h2>
      <p>
        Recomendamos sempre testar a estabilidade do serviço antes de escolheres um plano longo
        (semestral ou anual). Pedidos de reembolso por simples mudança de ideias, sem problema
        técnico associado, são avaliados caso a caso — contacta-nos e conversamos.
      </p>

      <h2>4. Como pedir um reembolso</h2>
      <p>
        Envia-nos uma mensagem pelo WhatsApp ou por{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> a explicar a situação.
        Respondemos normalmente dentro de 24 horas.
      </p>

      <h2>5. O que não é coberto</h2>
      <p>
        Problemas causados por internet instável do lado do utilizador, dispositivos incompatíveis
        não indicados na nossa lista, ou partilha de credenciais fora dos limites do plano
        contratado.
      </p>
    </LegalPage>
  );
}
