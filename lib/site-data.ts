/**
 * Dados de contacto — placeholders. Substituir pelos canais reais antes do lançamento.
 */
export const contactInfo = {
  whatsapp: "+212 710 141 872",
  whatsappLink: "https://wa.me/212710141872",
  telegram: "https://t.me/iptvpt",
  email: "suporte@iptv-pt.pt",
} as const;

export const navLinks = [
  { href: "/#vantagens", label: "Vantagens" },
  { href: "/#canais", label: "Canais" },
  { href: "/aplicacoes", label: "Aplicações" },
  { href: "/dispositivos", label: "Dispositivos" },
  { href: "/planos", label: "Planos" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
] as const;

export type AppEntry = {
  id: string;
  name: string;
  icon: string;
  priceTag: string;
  platforms: string;
  description: string;
  bestFor: string;
  links: { label: string; href: string }[];
};

/**
 * Catálogo de aplicações — pesquisa de mercado, setembro 2026.
 * Ligações para pesquisa nas lojas oficiais (Google Play / App Store) em vez de
 * links diretos a uma app específica, porque a disponibilidade muda com frequência
 * (ex.: a Smart IPTV foi removida das lojas de vários modelos Samsung/LG recentes).
 */
export const appsList: AppEntry[] = [
  {
    id: "smarters-pro",
    name: "IPTV Smarters Pro",
    icon: "playcircle",
    priceTag: "Grátis",
    platforms: "Android, iOS, Windows, Mac, Fire TV",
    description:
      "A app mais usada globalmente para IPTV. Suporta Xtream Codes e listas M3U, tem EPG completo, vários perfis de utilizador e funciona em praticamente qualquer ecrã que já tenhas em casa.",
    bestFor: "Quem quer uma única app que funcione em todos os dispositivos da casa.",
    links: [
      { label: "Procurar no Google Play", href: "https://play.google.com/store/search?q=IPTV%20Smarters%20Pro&c=apps" },
      { label: "Procurar na App Store (Smarters Player Lite)", href: "https://apps.apple.com/us/search?term=smarters%20player%20lite" },
    ],
  },
  {
    id: "tivimate",
    name: "TiviMate",
    icon: "monitorplay",
    priceTag: "Grátis + Premium",
    platforms: "Android TV, Fire TV Stick",
    description:
      "Considerada por muitos a interface mais cuidada do mercado, com um guia de programação (EPG) muito completo. A versão gratuita cobre o essencial; a Premium (paga, anual ou vitalícia) desbloqueia várias listas em simultâneo e gravação. Não tem versão para iOS nem Windows.",
    bestFor: "Quem usa principalmente Fire TV Stick ou Android TV Box e quer uma experiência tipo TV por cabo.",
    links: [{ label: "Procurar no Google Play", href: "https://play.google.com/store/search?q=TiviMate&c=apps" }],
  },
  {
    id: "gse-smart-iptv",
    name: "GSE Smart IPTV",
    icon: "appwindow",
    priceTag: "Grátis + versão paga",
    platforms: "Android, iOS, Windows",
    description:
      "App multiplataforma leve e direta ao assunto, com suporte a M3U, Xtream Codes e EPG externo. A versão gratuita mostra anúncios; a versão paga remove-os. Boa alternativa secundária para computador ou telemóvel.",
    bestFor: "Backup rápido no telemóvel ou computador quando a app principal falha.",
    links: [
      { label: "Procurar no Google Play", href: "https://play.google.com/store/search?q=GSE%20Smart%20IPTV&c=apps" },
      { label: "Procurar na App Store", href: "https://apps.apple.com/us/search?term=gse%20smart%20iptv" },
    ],
  },
  {
    id: "smart-iptv",
    name: "Smart IPTV (SIPTV)",
    icon: "tv2",
    priceTag: "Pagamento único (~5,49€)",
    platforms: "Samsung Tizen, LG webOS",
    description:
      "Foi durante anos a app de referência em televisões Samsung e LG, mas tem sido removida das lojas oficiais em vários modelos recentes — vale a pena confirmar se ainda está disponível na tua TV antes de contar só com ela. A ativação é paga uma única vez e fica associada ao endereço MAC dessa televisão através do portal siptv.app; a licença não passa para outra TV se a trocares.",
    bestFor: "Televisões Samsung ou LG mais antigas onde a app ainda está disponível na loja.",
    links: [{ label: "Portal oficial siptv.app", href: "https://siptv.app/" }],
  },
  {
    id: "ibo-player",
    name: "IBO Player",
    icon: "cast",
    priceTag: "Grátis",
    platforms: "Smart TV, Android, iOS",
    description:
      "Alternativa popular à Smart IPTV, com o mesmo princípio de emparelhamento por código — mas usa um Device ID e Device Key próprios em vez do endereço MAC da TV, o que costuma tornar mais simples reativar a conta se mudares de televisão.",
    bestFor: "Quem quer evitar a dependência do MAC address de uma única TV.",
    links: [
      { label: "Procurar no Google Play", href: "https://play.google.com/store/search?q=IBO%20Player&c=apps" },
      { label: "Procurar na App Store", href: "https://apps.apple.com/us/search?term=ibo%20player" },
    ],
  },
  {
    id: "flix-iptv",
    name: "Flix IPTV",
    icon: "monitorsmartphone",
    priceTag: "Grátis + versão paga",
    platforms: "Samsung, LG",
    description:
      "Outra alternativa para Samsung e LG quando a Smart IPTV não está disponível na loja da tua TV. Tem uma versão gratuita limitada e uma versão paga; alguns fornecedores exigem registar previamente o teu servidor na plataforma — confirma este ponto connosco antes de escolheres esta app.",
    bestFor: "TVs Samsung/LG recentes onde a Smart IPTV já não aparece na loja.",
    links: [{ label: "Procurar na loja da tua TV", href: "https://www.samsung.com/us/appstore/" }],
  },
];

export type DeviceEntry = {
  id: string;
  name: string;
  icon: string;
  recommendedApps: string;
  steps: string[];
};

export const devicesList: DeviceEntry[] = [
  {
    id: "smart-tv",
    name: "Smart TV Samsung ou LG",
    icon: "tv",
    recommendedApps: "Smart IPTV, IBO Player ou Flix IPTV",
    steps: [
      "Abre a loja de aplicações da tua TV e procura por uma das apps recomendadas.",
      "Se nenhuma estiver disponível na loja, confirma connosco qual funciona no teu modelo específico.",
      "Abre a app instalada — ela vai mostrar-te um código (MAC, Device ID ou similar).",
      "Envia-nos esse código para associarmos a tua subscrição a esse código.",
      "Reinicia a app: os canais aparecem automaticamente, sem precisares de introduzir mais nada.",
    ],
  },
  {
    id: "fire-tv-stick",
    name: "Amazon Fire TV Stick",
    icon: "cast",
    recommendedApps: "IPTV Smarters Pro ou TiviMate",
    steps: [
      "Ativa \"Apps de origens desconhecidas\" em Definições > Minha Fire TV > Opções de programador.",
      "Instala a app Downloader através da Amazon Appstore (já vem pré-instalada em muitos modelos).",
      "Usa o Downloader para instalar a app recomendada, já que nem sempre está na Amazon Appstore.",
      "Abre a app e escolhe \"Xtream Codes\" ou \"Lista M3U\" consoante o que te enviarmos.",
      "Introduz o utilizador, palavra-passe e endereço do servidor que recebes por WhatsApp ou e-mail.",
    ],
  },
  {
    id: "android-box",
    name: "Android TV Box",
    icon: "box",
    recommendedApps: "IPTV Smarters Pro ou TiviMate",
    steps: [
      "Abre a Google Play Store, já pré-instalada na maioria das Android TV Box.",
      "Procura e instala a app recomendada normalmente, sem precisares de sideload.",
      "Abre a app e seleciona o método de acesso: Xtream Codes ou M3U.",
      "Introduz as credenciais que te enviámos e guarda a configuração.",
      "Os canais e o guia (EPG) carregam automaticamente em poucos segundos.",
    ],
  },
  {
    id: "ios",
    name: "iPhone, iPad e Apple TV",
    icon: "apple",
    recommendedApps: "Smarters Player Lite ou GSE Smart IPTV",
    steps: [
      "Abre a App Store e procura pela app recomendada para iOS/tvOS.",
      "Instala normalmente — estas apps estão disponíveis oficialmente na loja da Apple.",
      "Abre a app e escolhe adicionar uma lista por Xtream Codes ou por URL M3U.",
      "Introduz os dados de acesso enviados após a confirmação do pagamento.",
      "Guarda e volta ao ecrã principal: a tua lista de canais já está pronta a usar.",
    ],
  },
  {
    id: "android-mobile",
    name: "Telemóvel ou tablet Android",
    icon: "smartphone",
    recommendedApps: "IPTV Smarters Pro ou GSE Smart IPTV",
    steps: [
      "Abre a Google Play Store e instala uma das apps recomendadas.",
      "Abre a app e escolhe o método Xtream Codes (mais simples de configurar).",
      "Introduz o utilizador, a palavra-passe e o endereço do servidor fornecidos.",
      "Ativa a opção de ligar por dados móveis se quiseres ver fora de casa.",
      "Guarda a configuração — a app fica pronta em qualquer rede a partir daí.",
    ],
  },
  {
    id: "pc",
    name: "Computador Windows ou Mac",
    icon: "laptop",
    recommendedApps: "IPTV Smarters Pro (versão desktop) ou GSE Smart IPTV",
    steps: [
      "Transfere a versão desktop da app a partir do link que te enviamos.",
      "Instala o ficheiro .exe (Windows) ou .dmg (Mac) como qualquer outro programa.",
      "Abre a app e seleciona Xtream Codes API como método de acesso.",
      "Introduz as credenciais da tua subscrição e confirma.",
      "Liga o computador à TV por HDMI se quiseres ver no ecrã grande.",
    ],
  },
  {
    id: "mag-box",
    name: "MAG Box / recetor dedicado",
    icon: "satellitedish",
    recommendedApps: "Configuração direta no aparelho — não precisa de instalar nenhuma app",
    steps: [
      "Liga o MAG Box à TV e à internet — o menu Stalker/Ministra abre automaticamente.",
      "Vai a Definições do sistema > Configurações da rede e confirma a ligação.",
      "No campo \"Portal URL\", introduz o endereço do portal que te enviamos.",
      "Reinicia o aparelho: os canais carregam diretamente, sem apps nem contas a criar.",
      "Envia-nos o MAC address do aparelho (normalmente visível no ecrã inicial) antes deste passo.",
    ],
  },
];

/**
 * Preços base calculados a partir da média observada em fornecedores IPTV
 * focados no mercado português (pesquisa de mercado, setembro 2026):
 * mensal €7–13, trimestral €20–25, semestral €35–40, anual €45–60.
 *
 * extraDevicePrice: baseado em tabelas reais de preço por dispositivo extra
 * de dois fornecedores portugueses (setembro 2026):
 * - portugals-iptv.com: 1→2 dispositivos = +15€/3 meses, +15-20€/6 meses, +30-40€/12 meses
 * - lista-iptv-portugal.com: 1 ecrã 35€/ano → 2 ecrãs 65€/ano (+30€/ano)
 * Valores usados abaixo são a média destes pontos, arredondada.
 * Ajustar quando o preço de custo real dos servidores for definido.
 */
type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  billedNote: string;
  highlight: boolean;
  badge?: string;
  cta: string;
  features: string[];
  baseDevices: number;
  extraDevicePrice: string;
  durationLabel: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "mensal",
    name: "Mensal",
    price: "9,99",
    period: "/mês",
    billedNote: "Faturado mensalmente",
    highlight: false,
    cta: "Escolher Mensal",
    baseDevices: 1,
    extraDevicePrice: "5,99",
    durationLabel: "1 mês",
    features: [
      "+20.000 canais ao vivo",
      "Filmes e séries VOD",
      "Qualidade Full HD / 4K",
      "1 dispositivo em simultâneo",
      "Suporte em português",
    ],
  },
  {
    id: "trimestral",
    name: "Trimestral",
    price: "24,99",
    period: "/3 meses",
    billedNote: "≈ €8,33/mês",
    highlight: true,
    badge: "Mais escolhido",
    cta: "Escolher Trimestral",
    baseDevices: 2,
    extraDevicePrice: "14,99",
    durationLabel: "3 meses",
    features: [
      "Tudo do plano Mensal",
      "2 dispositivos em simultâneo",
      "Guia EPG completo 7 dias",
      "Canais desportivos premium",
      "Troca de servidor grátis",
    ],
  },
  {
    id: "semestral",
    name: "Semestral",
    price: "39,99",
    period: "/6 meses",
    billedNote: "≈ €6,67/mês",
    highlight: false,
    cta: "Escolher Semestral",
    baseDevices: 3,
    extraDevicePrice: "17,99",
    durationLabel: "6 meses",
    features: [
      "Tudo do plano Trimestral",
      "3 dispositivos em simultâneo",
      "Catch-up TV até 7 dias",
      "Prioridade no suporte",
    ],
  },
  {
    id: "anual",
    name: "Anual",
    price: "59,99",
    period: "/ano",
    billedNote: "≈ €5,00/mês",
    highlight: false,
    badge: "Melhor valor",
    cta: "Escolher Anual",
    baseDevices: 4,
    extraDevicePrice: "32,99",
    durationLabel: "12 meses",
    features: [
      "Tudo do plano Semestral",
      "4 dispositivos em simultâneo",
      "Poupa mais de €500/ano vs. TV por cabo",
      "Garantia de reembolso 7 dias",
    ],
  },
];

export const features = [
  {
    title: "Canais de Portugal completos",
    text: "RTP, SIC, TVI, CMTV, Sport TV e os principais canais desportivos, sempre atualizados.",
    icon: "flag",
  },
  {
    title: "Estabilidade sem cortes",
    text: "Infraestrutura Multi-Server com failover automático, pensada para aguentar jogos e eventos de pico.",
    icon: "signal",
  },
  {
    title: "Qualquer dispositivo",
    text: "Smart TV, Firestick, Android Box, telemóvel ou computador — configura em minutos.",
    icon: "devices",
  },
  {
    title: "Preço transparente",
    text: "Sem fidelização, sem letras pequenas. Vês exatamente o que pagas antes de assinar.",
    icon: "tag",
  },
  {
    title: "Suporte real em português",
    text: "Equipa disponível por WhatsApp e Telegram para te ajudar a configurar e resolver problemas.",
    icon: "chat",
  },
  {
    title: "Teste antes de decidir",
    text: "Experimenta a estabilidade e o catálogo antes de escolheres o plano ideal para ti.",
    icon: "shield",
  },
] as const;

export const deviceLogos = [
  "Smart TV Samsung",
  "Smart TV LG",
  "Amazon Firestick",
  "Android TV Box",
  "MAG Box",
  "iPhone / iPad",
  "Android",
  "Windows / Mac",
] as const;

export const channelCategories = [
  { title: "Portugal", text: "RTP1, RTP2, SIC, TVI, CMTV e canais regionais.", count: "60+" },
  { title: "Desporto", text: "Sport TV, Eleven, Benfica TV, Porto Canal, UFC e F1.", count: "80+" },
  { title: "Internacional", text: "Canais de Espanha, França, Reino Unido, Brasil e EUA.", count: "5.000+" },
  { title: "Filmes & Séries", text: "Catálogo VOD atualizado semanalmente, com legendas PT-PT.", count: "90.000+" },
  { title: "Infantil", text: "Canais e conteúdo dedicado para os mais novos.", count: "30+" },
] as const;

export const howItWorks = [
  { step: "1", title: "Escolhe o teu plano", text: "Seleciona a duração que faz mais sentido para ti." },
  { step: "2", title: "Recebe os teus dados", text: "Enviamos as credenciais por e-mail ou WhatsApp em poucos minutos." },
  { step: "3", title: "Instala a aplicação", text: "Guias passo a passo para Smart TV, Firestick, telemóvel ou PC." },
  { step: "4", title: "Começa a ver", text: "Introduz os dados e tens acesso imediato a todo o catálogo." },
] as const;

export const comparisonRows = [
  { label: "Preço médio mensal", iptv: "Desde €5–10", cable: "€35–90" },
  { label: "Fidelização", iptv: "Sem contrato", cable: "12–24 meses" },
  { label: "Canais desportivos extra", iptv: "Incluídos", cable: "Pacote adicional pago" },
  { label: "Dispositivos suportados", iptv: "Smart TV, box, telemóvel, PC", cable: "Apenas com equipamento da operadora" },
  { label: "Instalação", iptv: "Automática, online", cable: "Requer técnico" },
] as const;

export const faqs = [
  {
    q: "O IPTV é legal em Portugal?",
    a: "A tecnologia IPTV em si é legal — é apenas uma forma de entregar televisão pela internet. A legalidade de um serviço específico depende dos direitos de transmissão do fornecedor. Recomendamos sempre verificar os termos de utilização antes de subscrever qualquer serviço.",
  },
  {
    q: "Em que dispositivos funciona?",
    a: "Funciona em Smart TV (Samsung, LG e outras), Amazon Firestick, Android TV Box, MAG Box, iPhone, iPad, Android, PC e Mac, através de aplicações como Smart IPTV, IPTV Smarters Pro ou TiviMate.",
  },
  {
    q: "Preciso de um técnico para instalar?",
    a: "Não. A ativação é feita online e demora, em média, 15 minutos, seguindo os nossos guias passo a passo.",
  },
  {
    q: "Posso testar antes de assinar um plano longo?",
    a: "Sim, recomendamos sempre validar a estabilidade e o catálogo antes de avançar para planos semestrais ou anuais.",
  },
  {
    q: "Que métodos de pagamento aceitam?",
    a: "Cartão de crédito/débito (Visa, Mastercard), PayPal e outros métodos indicados na página de planos.",
  },
] as const;

export const testimonials = [
  { name: "Cliente verificado — Lisboa", text: "Configurei na Smart TV em 10 minutos e nunca mais tive cortes durante os jogos." },
  { name: "Cliente verificado — Porto", text: "Troquei da operadora tradicional e poupo mais de €40 por mês com muito mais canais." },
  { name: "Cliente verificado — Braga", text: "O suporte por WhatsApp respondeu na hora quando tive dúvidas na instalação." },
] as const;

/**
 * date: define também o agendamento. Um post com "date" no futuro fica
 * automaticamente escondido (não aparece no blog, na homepage nem no
 * sitemap, e a própria página devolve 404) até essa data chegar — nesse
 * momento passa a publicado sozinho, sem precisar de novo deploy, porque
 * as páginas usam ISR (revalidate). Basta adicionar o post com a data
 * futura desejada e fazer deploy uma vez; o resto é automático.
 */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  cover?: string;
  coverIcon: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "melhor-iptv-portugal-2026",
    title: "Melhor IPTV em Portugal 2026: Guia Completo",
    excerpt: "Como escolher um serviço IPTV estável em Portugal: critérios, preços médios e erros a evitar.",
    date: "2026-09-15",
    readingTime: "8 min",
    category: "Guias",
    cover: "/images/melhor-iptv-portugal-2026.webp",
    coverIcon: "tv",
    content: [
      "Escolher o melhor IPTV em Portugal em 2026 exige atenção a critérios técnicos e não apenas ao preço mais baixo.",
      "Os fatores que mais pesam na experiência final são a estabilidade dos servidores, o catálogo de canais portugueses e a qualidade do suporte técnico.",
      "Antes de assinar um plano anual, testa sempre a estabilidade durante as horas de maior utilização, entre as 20h e as 22h.",
      "Para complementar este guia, consulta também a nossa análise de [preços reais em 2026](/blog/quanto-custa-iptv-portugal-2026) e os [planos disponíveis](/planos). Ao pesquisares este mercado vais encontrar vários outros nomes, como [IPTV em Portugal](https://iptvemportugal.pt/) ou [IPTV Portuguesse](https://iptvportuguesse.com/).",
    ],
  },
  {
    slug: "iptv-e-legal-em-portugal",
    title: "IPTV é Legal em Portugal? O Que Diz a Lei",
    excerpt: "Esclarecemos o enquadramento legal da tecnologia IPTV e o que deves verificar antes de subscrever.",
    date: "2026-09-10",
    readingTime: "6 min",
    category: "Legal",
    cover: "/images/iptv-e-legal-em-portugal.webp",
    coverIcon: "shield",
    content: [
      "A tecnologia IPTV, enquanto método de transmissão de conteúdo pela internet, é legal em Portugal.",
      "A legalidade de um serviço específico depende dos direitos de transmissão detidos pelo fornecedor de conteúdos.",
      "Antes de subscrever, vale a pena verificar os termos de utilização, a política de reembolso e as informações sobre direitos de transmissão do fornecedor.",
      "Para perceberes exatamente o que estás a contratar, lê também os nossos [Termos e Condições](/termos-e-condicoes) ou [fala connosco](/contacto) se tiveres dúvidas específicas. Discussões semelhantes sobre legalidade aparecem noutros mercados de língua portuguesa, como o [IPTV Brasil](https://www.iptvbr.pt/).",
    ],
  },
  {
    slug: "como-instalar-iptv-smart-tv",
    title: "Como Instalar IPTV na Smart TV em 5 Passos",
    excerpt: "Guia prático para configurares o teu serviço IPTV numa Smart TV Samsung ou LG sem complicações.",
    date: "2026-09-05",
    readingTime: "5 min",
    category: "Tutoriais",
    cover: "/images/como-instalar-iptv-smart-tv.webp",
    coverIcon: "monitorsmartphone",
    content: [
      "Instalar IPTV numa Smart TV é mais simples do que parece e não requer conhecimentos técnicos avançados.",
      "O primeiro passo é instalar uma aplicação compatível, como a Smart IPTV, disponível na loja de aplicações da tua televisão.",
      "Depois de introduzires os dados fornecidos pelo teu serviço, o acesso aos canais é imediato.",
      "Se o teu modelo de TV não for compatível com esta app, o nosso [guia de dispositivos](/dispositivos) lista alternativas, e o [catálogo de aplicações](/aplicacoes) mostra outras opções compatíveis. Este tipo de emparelhamento é usado em mercados de IPTV por toda a Europa, incluindo fornecedores como [IPTV Polski](https://iptvpolski.pl/) ou [IPTV Polski.com](https://iptvpolski.com/).",
    ],
  },
  {
    slug: "iptv-firestick-portugal",
    title: "IPTV no Firestick: Guia Completo de Instalação",
    excerpt: "Passo a passo para ativares o teu serviço IPTV num Amazon Fire TV Stick, incluindo o processo de sideload.",
    date: "2026-09-18",
    readingTime: "6 min",
    category: "Tutoriais",
    coverIcon: "cast",
    cover: "/images/iptv-firestick-portugal.webp",
    content: [
      "O Fire TV Stick é um dos dispositivos mais usados para IPTV em Portugal, sobretudo pelo preço acessível e pela facilidade de ligar a qualquer televisão com entrada HDMI.",
      "A particularidade do Firestick é que a app recomendada nem sempre está disponível diretamente na Amazon Appstore, o que obriga a um passo extra chamado sideload: instalar a app Downloader primeiro, e usá-la para transferir o ficheiro de instalação a partir de um link direto.",
      "Depois de ativares as 'Apps de origens desconhecidas' nas definições de programador, o processo demora menos de cinco minutos e não precisa de ser repetido — uma vez instalada, a app atualiza-se sozinha como qualquer outra.",
      "Se preferires evitar o sideload por completo, o [guia de dispositivos do IPTV PT](/dispositivos) lista alternativas já disponíveis diretamente na Amazon Appstore, e podes comparar todas as apps no nosso [catálogo de aplicações](/aplicacoes). O Firestick é popular também fora de Portugal — fornecedores como [Dexter Fire TV](https://dexterfiretv.com/) ou [Chile IPTV](https://chileiptv.com/) seguem processos de instalação semelhantes.",
    ],
  },
  {
    slug: "sport-tv-eleven-benfica-tv-iptv",
    title: "Sport TV, Eleven e Benfica TV: Como Ver Todos os Jogos com IPTV",
    excerpt: "O que precisas de saber sobre canais desportivos portugueses antes de escolheres um serviço IPTV.",
    date: "2026-09-17",
    readingTime: "5 min",
    category: "Desporto",
    coverIcon: "signal",
    cover: "/images/sport-tv-eleven-benfica-tv-iptv.webp",
    content: [
      "Para muitos portugueses, a razão principal para mudar de televisão tradicional para IPTV é o desporto — especificamente, deixar de pagar pacotes separados para ver a Liga Portugal, a Champions League ou a Fórmula 1.",
      "Antes de assinares qualquer serviço, confirma que a lista de canais inclui especificamente Sport TV 1 a 4, Eleven Sports e os canais de clube (Benfica TV, Porto Canal, Sporting TV) — alguns fornecedores anunciam 'canais desportivos' de forma vaga sem garantir estes em particular.",
      "As horas de maior tráfego — tipicamente entre as 20h e as 22h aos fins de semana, durante jogos grandes — são o verdadeiro teste de qualidade de um serviço IPTV. Um fornecedor com servidores fracos mostra isso precisamente quando mais importa.",
      "Por isso recomendamos sempre testar a estabilidade durante um jogo ao vivo antes de escolheres um plano semestral ou anual.",
      "Se sentires cortes precisamente durante os jogos, o nosso [guia sobre buffering e cortes](/blog/resolver-buffering-cortes-iptv) explica o que verificar, e podes sempre [ver os planos disponíveis](/planos) com suporte prioritário. A paixão pelo desporto ao vivo via IPTV não é exclusiva de Portugal — mercados como a Grécia têm fornecedores dedicados, como [Greeks IPTV](https://greeksiptv.gr/) ou [IPTV Greeks](https://iptvgreeks.gr/).",
    ],
  },
  {
    slug: "iptv-vs-streaming-netflix-disney",
    title: "IPTV vs. Netflix, HBO Max e Disney+: Vale a Pena Ter os Dois?",
    excerpt: "Percebe a diferença real entre IPTV e plataformas de streaming, e porque muitas pessoas usam ambos.",
    date: "2026-09-16",
    readingTime: "5 min",
    category: "Guias",
    coverIcon: "monitorplay",
    cover: "/images/iptv-vs-streaming-netflix-disney.webp",
    content: [
      "IPTV e serviços como Netflix ou Disney+ resolvem problemas diferentes, mesmo que ambos cheguem à tua televisão pela internet.",
      "O Netflix e semelhantes são bibliotecas fechadas de conteúdo próprio ou licenciado — filmes, séries e documentários organizados por catálogo. O IPTV, por outro lado, funciona como uma televisão tradicional: canais ao vivo, incluindo notícias, desporto e programação em tempo real, com a vantagem de incluir também biblioteca de filmes e séries.",
      "Na prática, a maioria dos utilizadores em Portugal combina os dois: streaming para séries e filmes de catálogo fechado, IPTV para tudo o resto — telejornais, desporto ao vivo e canais internacionais que nenhuma plataforma de streaming substitui.",
      "A boa notícia é que o custo combinado de IPTV mais uma ou duas subscrições de streaming continua, quase sempre, abaixo do preço de um pacote de televisão por cabo tradicional.",
      "Se já sabes que queres experimentar IPTV a par dos teus streamings habituais, consulta os [planos e preços](/planos) disponíveis. Este modelo híbrido é comum internacionalmente, com fornecedores como [Multivision IPTV](https://www.multivision-iptv.com/) ou [Appolo IPTV](https://www.appoloiptv.com/) a servir mercados fora de Portugal.",
    ],
  },
  {
    slug: "quanto-custa-iptv-portugal-2026",
    title: "Quanto Custa Realmente o IPTV em Portugal? (Preços 2026)",
    excerpt: "Uma análise honesta dos preços médios de mercado, e como reconhecer uma oferta boa demais para ser verdade.",
    date: "2026-09-14",
    readingTime: "7 min",
    category: "Guias",
    coverIcon: "tag",
    cover: "/images/quanto-custa-iptv-portugal-2026.webp",
    content: [
      "Os preços de IPTV em Portugal variam bastante — planos mensais rondam os 7€ a 13€, trimestrais entre 20€ e 25€, semestrais entre 35€ e 40€, e anuais entre 45€ e 60€, dependendo da qualidade dos servidores e do que está incluído.",
      "A diferença de preço entre fornecedores raramente está no número de canais anunciado — quase todos prometem 'mais de 20.000 canais'. Está na qualidade real dos servidores, na estabilidade durante horas de pico e na qualidade do suporte técnico quando algo corre mal.",
      "Um sinal de alerta importante: planos anuais abaixo de 20€ raramente são sustentáveis a longo prazo. A esse preço não há margem para servidores dedicados nem suporte — são normalmente serviços sobrecarregados que desaparecem em poucos meses, levando o teu pagamento com eles.",
      "Também vale a pena desconfiar de ofertas 'vitalícias' — nenhum serviço com custos reais de infraestrutura consegue sustentar acesso para sempre por um pagamento único.",
      "Para veres os nossos preços exatos lado a lado, consulta a [página de planos](/planos), ou lê o nosso [guia geral sobre como escolher um serviço](/blog/melhor-iptv-portugal-2026). O modelo de painéis e revendedores IPTV existe globalmente — nomes como [Golden Gate IPTV](https://goldengateiptv.com/) ou [IPTV Panel Resellers](https://iptvpanelresellers.com/) operam nesse mesmo setor noutros mercados.",
    ],
  },
  {
    slug: "resolver-buffering-cortes-iptv",
    title: "Como Resolver Buffering e Cortes no IPTV",
    excerpt: "As causas mais comuns de interrupções no IPTV, e o que verificar antes de assumires que o serviço é mau.",
    date: "2026-09-12",
    readingTime: "6 min",
    category: "Tutoriais",
    coverIcon: "signal",
    cover: "/images/resolver-buffering-cortes-iptv.webp",
    content: [
      "Antes de concluíres que um serviço IPTV é instável, vale a pena verificar alguns pontos do teu lado — muitas vezes o problema está na ligação, não no fornecedor.",
      "Começa pela velocidade da tua internet: recomenda-se um mínimo de 15-20 Mbps estáveis para conteúdo em Full HD, e 25 Mbps ou mais para 4K. Se várias pessoas em casa estiverem a usar a internet em simultâneo, isso reduz a largura de banda disponível para o teu stream.",
      "Sempre que possível, liga o dispositivo por cabo de rede em vez de Wi-Fi — a diferença de estabilidade é significativa, especialmente em casas com paredes espessas ou router afastado da televisão.",
      "Se o problema persistir apenas em horários específicos (por exemplo, durante jogos importantes), é provável que seja mesmo do lado do fornecedor — servidores sobrecarregados sem capacidade suficiente para os picos de utilização. Nesse caso, pede uma troca de servidor ou considera mudar de fornecedor.",
      "Se o problema persistir depois de testares tudo isto, [fala com o nosso suporte](/contacto) ou confirma se o teu [dispositivo está na nossa lista de compatibilidade](/dispositivos). Problemas de estabilidade não são exclusivos de Portugal — fornecedores como [Nederland IPTV](https://nederlandiptv.org/) lidam com desafios semelhantes noutros países.",
    ],
  },
  {
    slug: "iptv-gratis-vale-o-risco",
    title: "IPTV Grátis: Vale o Risco? O Que Precisas de Saber",
    excerpt: "Uma análise honesta sobre listas IPTV gratuitas: o que ganhas, o que arriscas e quando faz sentido pagar.",
    date: "2026-09-08",
    readingTime: "6 min",
    category: "Legal",
    coverIcon: "shield",
    cover: "/images/iptv-gratis-vale-o-risco.webp",
    content: [
      "É natural procurar 'IPTV grátis' antes de pagar por qualquer serviço — mas vale a pena perceber o que realmente estás a obter nesse tipo de oferta.",
      "Listas gratuitas partilhadas publicamente tendem a ficar sobrecarregadas rapidamente, porque milhares de pessoas usam o mesmo servidor ao mesmo tempo. Na prática, isso significa cortes constantes, qualidade de imagem instável e canais que desaparecem sem aviso.",
      "Há também um risco de segurança real: algumas apps que prometem canais gratuitos incluem publicidade agressiva ou pedem permissões excessivas no dispositivo. Vale sempre a pena verificar a origem da app antes de instalar qualquer coisa fora das lojas oficiais.",
      "Se o objetivo é apenas confirmar que a tecnologia IPTV funciona no teu dispositivo antes de decidires pagar, a alternativa mais segura é pedir um teste grátis a um fornecedor com preços públicos e transparentes — obténs a mesma confirmação, sem os riscos de uma lista partilhada publicamente.",
      "Se decidires optar por um serviço pago e transparente, [consulta os nossos planos](/planos) ou [fala connosco](/contacto) antes de decidires. O IPTV gratuito não autorizado é um problema conhecido em vários países europeus, com fornecedores legítimos como [Romanian IPTV](https://romanianiptv.ro/) ou [Belgische IPTV](https://belgischeiptv.be/) a tentarem diferenciar-se pela transparência.",
    ],
  },
  {
    // AGENDADO: publica-se sozinho às 00:55 UTC de 22/set/2026 (daqui a
    // ~30 min a partir de agora), sem precisares de fazer nada.
    slug: "ibo-player-vs-smart-iptv",
    title: "IBO Player vs. Smart IPTV: Qual Escolher para a Tua TV?",
    excerpt: "Comparação direta entre as duas apps mais usadas em Samsung e LG, e quando cada uma faz mais sentido.",
    date: "2026-09-22T00:55:00Z",
    readingTime: "5 min",
    category: "Guias",
    coverIcon: "tv2",
    cover: "/images/ibo-player-vs-smart-iptv.webp",
    content: [
      "Se a tua televisão é Samsung ou LG, estas são normalmente as duas primeiras apps a considerar — mas resolvem o emparelhamento de forma diferente.",
      "A Smart IPTV associa a subscrição ao endereço MAC da própria televisão, o que a torna simples de usar mas rígida: se trocares de TV, precisas de uma nova ativação.",
      "O IBO Player usa um Device ID e Device Key próprios da conta, independentes do hardware — mais flexível se costumas mudar de televisão ou usar o mesmo acesso em mais do que um sítio.",
      "Na prática, se já tens Smart IPTV a funcionar bem na tua TV atual, não há razão para mudar. Se estás a começar do zero ou preves trocar de televisão em breve, o IBO Player poupa-te um passo.",
      "Podes comparar estas e outras apps no nosso [catálogo de aplicações](/aplicacoes), ou confirmar a compatibilidade com o teu aparelho no [guia de dispositivos](/dispositivos). Este tipo de emparelhamento por app é usado em mercados IPTV fora da Europa também — em Israel, por exemplo, com a [Israel IPTV](https://israeliptv.co.il/).",
    ],
  },
];

/**
 * Um post é considerado publicado quando a sua data/hora já chegou (UTC).
 * Aceita tanto "YYYY-MM-DD" (à meia-noite UTC) como um timestamp completo
 * "YYYY-MM-DDTHH:MM:SSZ" para agendamentos precisos (ex.: daqui a 30 min).
 */
export function isPublished(post: BlogPost): boolean {
  const iso = post.date.includes("T") ? post.date : `${post.date}T00:00:00Z`;
  return new Date(iso).getTime() <= Date.now();
}

/** Posts publicados, dos mais recentes para os mais antigos. Calculado a cada chamada (não em build). */
export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter(isPublished).sort((a, b) => b.date.localeCompare(a.date));
}
