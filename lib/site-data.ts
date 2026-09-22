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
export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  cover?: string;
  coverIcon: string;
  content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "melhor-iptv-portugal-2026",
    title: "Melhor IPTV em Portugal 2026: Guia Completo",
    excerpt: "Como escolher um serviço IPTV estável em Portugal: critérios, preços médios e erros a evitar.",
    date: "2026-09-15",
    readingTime: "9 min",
    category: "Guias",
    cover: "/images/melhor-iptv-portugal-2026.webp",
    coverIcon: "tv",
    content: [
      { type: "p", text: "Procurar o melhor IPTV em Portugal em 2026 dá muito mais resultados do que critérios claros para escolher entre eles. A maioria dos anúncios promete os mesmos \"+20.000 canais\" e \"Full HD/4K\", o que torna quase impossível distinguir um fornecedor sério de um serviço que desaparece daqui a três meses só pelo texto do anúncio. Este guia explica, de forma direta, o que realmente separa um bom serviço de um mau — e onde deves concentrar a tua atenção antes de tirares o cartão de crédito da carteira." },
      { type: "h2", text: "O número de canais é o critério menos importante" },
      { type: "p", text: "É tentador comparar fornecedores pelo número de canais anunciado, mas esse número diz muito pouco sobre a experiência real. Praticamente todos os fornecedores no mercado português anunciam catálogos semelhantes, porque a maioria compra acesso aos mesmos feeds de origem através de distribuidores intermédios. A diferença entre um serviço bom e um mau não está em quantos canais aparecem numa lista — está em quantos desses canais continuam a funcionar de forma estável às 21h de um sábado, durante um jogo grande, quando milhares de outros utilizadores estão ligados ao mesmo servidor." },
      { type: "p", text: "Por isso, quando comparares fornecedores, ignora o número total de canais e foca-te em três perguntas mais úteis: a lista inclui especificamente os canais portugueses que usas todos os dias (RTP1, RTP2, SIC, TVI, CMTV)? Inclui os canais desportivos que realmente acompanhas, com nome próprio, e não apenas \"canais desportivos incluídos\" de forma vaga? E existe algum tipo de garantia ou período de teste que te permita confirmar isto antes de pagares um plano longo?" },
      { type: "h2", text: "Os critérios técnicos que realmente fazem a diferença" },
      { type: "p", text: "Depois de confirmado o catálogo, a experiência do dia a dia depende quase inteiramente de fatores técnicos que raramente aparecem destacados num anúncio. Vale a pena avaliar cada um destes pontos antes de decidir:" },
      { type: "ul", items: [
        "Infraestrutura Multi-Server com failover automático — se um servidor cair ou ficar sobrecarregado, o sistema troca automaticamente para outro sem cortares a transmissão.",
        "Capacidade para horas de pico — a verdadeira prova de qualidade acontece durante jogos grandes ou estreias populares, não a meio de uma tarde de terça-feira.",
        "Guia eletrónico de programação (EPG) atualizado, para saberes o que está a passar sem teres de sair da aplicação.",
        "Suporte técnico em português, com tempo de resposta razoável — não apenas um chatbot automático em inglês.",
        "Compatibilidade confirmada com o teu dispositivo específico (Smart TV, Firestick, Android Box, telemóvel ou PC).",
      ] },
      { type: "h2", text: "Como testar um fornecedor antes de te comprometeres" },
      { type: "p", text: "A forma mais fiável de avaliar um serviço IPTV é experimentá-lo antes de pagar um plano semestral ou anual. Um fornecedor transparente não tem problema em confirmar a qualidade do serviço num período curto, porque sabe que a experiência vai falar por si. Durante esse período de avaliação, faz questão de testar precisamente nas condições mais exigentes: liga a televisão numa noite de jogo de futebol grande, experimenta trocar de canal várias vezes seguidas e confirma se a imagem recupera rapidamente depois de pausares ou avançares num conteúdo gravado." },
      { type: "p", text: "Presta também atenção à velocidade de resposta do suporte técnico durante esse teste. Se tiveres uma dúvida simples sobre configuração e a resposta demorar dias a chegar, é um sinal claro de como vai correr o suporte depois de já teres pago — quando o incentivo do fornecedor em resolver o teu problema rapidamente é, na prática, muito menor." },
      { type: "h2", text: "Erros comuns ao escolher um serviço IPTV" },
      { type: "p", text: "O erro mais frequente é decidir exclusivamente pelo preço mais baixo, ignorando por completo a reputação e a estrutura por trás do serviço. Um plano anual anormalmente barato quase sempre significa servidores partilhados por um número excessivo de utilizadores, sem margem financeira para manter a infraestrutura a longo prazo. Achamos importante conheceres [os preços médios reais praticados em Portugal em 2026](/blog/quanto-custa-iptv-portugal-2026) antes de avaliares se uma oferta é genuinamente boa ou apenas insustentável." },
      { type: "p", text: "Outro erro comum é assinar diretamente um plano anual sem antes confirmar a compatibilidade com o teu dispositivo. Cada aparelho — Smart TV Samsung, Fire TV Stick, Android Box, iPhone ou computador — tem aplicações recomendadas diferentes, e nem todas as apps funcionam da mesma forma em todos os ecrãs. Convém verificar isto com antecedência." },
      { type: "h2", text: "O que esperar em termos de preço" },
      { type: "p", text: "Em 2026, um plano mensal de qualidade em Portugal ronda os 7€ a 13€, com opções trimestrais, semestrais e anuais a oferecerem poupança progressiva por mês. Preços muito abaixo desta faixa, sobretudo em planos anuais, costumam significar servidores sobrecarregados. Preços muito acima também não garantem necessariamente melhor qualidade — o que importa é a relação entre o valor pago e a estabilidade demonstrada durante o período de teste." },
      { type: "p", text: "Se já sabes o que procurar, o próximo passo lógico é comparar diretamente os planos disponíveis e confirmar qual duração faz mais sentido para o teu caso. Consulta a nossa [página de planos e preços](/planos) para veres todas as opções lado a lado, incluindo o número de dispositivos incluído em cada uma." },
      { type: "h2", text: "Fornecedor direto ou revendedor: percebe a diferença" },
      { type: "p", text: "Uma distinção que raramente é explicada, mas que ajuda a entender o mercado, é a diferença entre um fornecedor que opera a sua própria infraestrutura e um revendedor que compra acesso em massa a um painel de terceiros para depois revender com margem. Nenhum dos dois modelos é automaticamente mau — muitos revendedores oferecem excelente suporte e preços justos — mas quanto mais camadas existirem entre ti e o servidor físico, menor a tua capacidade de perceber a origem real de eventuais problemas de estabilidade, e menor também a probabilidade de o fornecedor conseguir resolver um problema rapidamente, já que também depende de terceiros." },
      { type: "p", text: "Na prática, não precisas de saber classificar tecnicamente cada fornecedor neste espectro. O que importa é usares o mesmo critério pragmático: testa o serviço, avalia a velocidade de resposta do suporte a um problema real, e decide com base nessa experiência direta — não na estrutura de negócio por trás do serviço." },
      { type: "h2", text: "Como avaliar a reputação de um fornecedor antes de pagar" },
      { type: "p", text: "Antes de comprometeres dinheiro num plano mais longo, vale a pena investir cinco minutos a pesquisar o nome do fornecedor. Procura por menções em fóruns portugueses de tecnologia, grupos de discussão ou redes sociais, e presta atenção especial a padrões — uma ou duas críticas isoladas são normais em qualquer negócio, mas queixas repetidas e recentes sobre o mesmo problema (por exemplo, dificuldade em conseguir reembolso, ou cortes constantes durante jogos) são um sinal muito mais fiável do que qualquer texto promocional no próprio site do fornecedor." },
      { type: "p", text: "Confirma também há quanto tempo o fornecedor está ativo. Um site e canais de contacto que já existem há vários meses ou anos, com histórico consistente, transmitem uma confiança muito maior do que uma operação criada na última semana — sobretudo quando comparados preços muito abaixo da média de mercado." },
      { type: "h2", text: "Perguntas frequentes sobre escolher IPTV em Portugal" },
      { type: "h3", text: "Quanto tempo demora a ativação depois de escolher um fornecedor?" },
      { type: "p", text: "Na maioria dos casos, entre alguns minutos e algumas horas depois do pagamento confirmado, dependendo do horário e do método de emparelhamento escolhido para o teu dispositivo." },
      { type: "h3", text: "É melhor escolher sempre o fornecedor mais recomendado, ou vale a pena testar vários?" },
      { type: "p", text: "Se tiveres tempo, testar dois fornecedores em paralelo com planos mensais antes de decidires um compromisso mais longo é a forma mais objetiva de comparar estabilidade real, em vez de depender apenas de recomendações de terceiros." },
      { type: "h3", text: "Preciso de trocar de fornecedor se mudar de televisão ou de casa?" },
      { type: "p", text: "Normalmente não — a subscrição está associada à tua conta, não à tua morada. Pode ser necessário apenas reativar o emparelhamento no novo dispositivo, um processo rápido que o suporte técnico consegue orientar." },
      { type: "h2", text: "Sinais de que é hora de mudar de fornecedor" },
      { type: "p", text: "Mesmo depois de escolheres com cuidado, vale a pena estares atento a sinais de que a qualidade de um fornecedor está a deteriorar-se ao longo do tempo — o que acontece com mais frequência do que se possa pensar, à medida que um serviço ganha mais clientes sem investir proporcionalmente em infraestrutura. Presta atenção a três indicadores: cortes que começam a acontecer com mais frequência do que há alguns meses, sem que a tua própria ligação à internet tenha mudado; tempo de resposta do suporte técnico que aumenta progressivamente, de minutos para horas ou dias; e canais que desaparecem da lista sem qualquer aviso prévio ou explicação quando questionados." },
      { type: "p", text: "Nenhum destes sinais isolados é motivo imediato de alarme — problemas pontuais acontecem com qualquer fornecedor, mesmo os mais sérios. Mas um padrão consistente ao longo de várias semanas é o momento certo para começares a considerar alternativas, em vez de esperares que a situação melhore sozinha." },
      { type: "h2", text: "A importância de um canal de suporte direto" },
      { type: "p", text: "Um detalhe que faz mais diferença do que parece no dia a dia é a forma como consegues contactar o suporte técnico. Fornecedores que respondem apenas por formulário de contacto com resposta em 48 horas não são práticos quando o problema é um jogo a começar dentro de vinte minutos. Prioriza fornecedores com canais diretos como WhatsApp ou Telegram, onde consegues obter uma resposta em minutos, não em dias — é precisamente nesse tipo de situação urgente que a diferença entre um bom e um mau suporte se torna mais evidente." },
      { type: "h2", text: "Resumo: a checklist antes de assinares" },
      { type: "p", text: "Antes de escolheres um serviço IPTV em Portugal, confirma que consegues responder sim a estas perguntas: o catálogo inclui explicitamente os canais portugueses e desportivos que usas? Existe forma de testar a estabilidade antes de pagares um plano longo? O suporte responde em português, dentro de um prazo razoável? O preço está dentro da faixa realista de mercado, nem demasiado baixo nem inflacionado sem justificação? Se a resposta for sim às quatro, estás perante um fornecedor que vale a pena considerar seriamente." },
    ],
  },
  {
    slug: "iptv-e-legal-em-portugal",
    title: "IPTV é Legal em Portugal? O Que Diz a Lei",
    excerpt: "Esclarecemos o enquadramento legal da tecnologia IPTV e o que deves verificar antes de subscrever.",
    date: "2026-09-10",
    readingTime: "8 min",
    category: "Legal",
    cover: "/images/iptv-e-legal-em-portugal.webp",
    coverIcon: "shield",
    content: [
      { type: "p", text: "\"IPTV é legal em Portugal?\" é provavelmente a pergunta que mais gera confusão neste mercado, e a resposta curta é: depende do que estás a perguntar exatamente. Há uma diferença importante entre a tecnologia em si e o serviço concreto que a usa para te entregar conteúdo — e essa distinção é a chave para perceberes o que estás realmente a contratar." },
      { type: "h2", text: "IPTV é uma tecnologia, não um serviço específico" },
      { type: "p", text: "IPTV significa \"Internet Protocol Television\" — é simplesmente um método de entrega de sinal de televisão através de uma ligação à internet, em vez de cabo coaxial, satélite ou antena terrestre. Nesse sentido técnico, a IPTV não é diferente de usares a Netflix, a RTP Play ou qualquer serviço de streaming: é apenas a forma como o conteúdo chega até ao teu ecrã. A própria tecnologia não tem nada de ilegal — aliás, é a mesma tecnologia usada pelos operadores tradicionais portugueses (MEO, NOS, Vodafone) nas suas próprias caixas de televisão por internet." },
      { type: "p", text: "O que determina se um serviço específico está dentro da lei é outra coisa: são os direitos de transmissão do conteúdo que esse serviço te está a entregar. Um canal de televisão só pode ser distribuído legalmente por quem detém, ou tem licença para usar, os direitos de transmissão desse canal nesse território." },
      { type: "h2", text: "O que realmente importa: os direitos de transmissão do fornecedor" },
      { type: "p", text: "Isto significa que a pergunta certa não é \"a IPTV é legal?\", mas sim \"este fornecedor específico tem os direitos para distribuir estes canais?\". É uma pergunta mais difícil de responder do ponto de vista do consumidor comum, porque a cadeia de licenciamento de conteúdo audiovisual é complexa e raramente visível para quem só quer ver o jogo de futebol de domingo." },
      { type: "p", text: "Na prática, isto coloca a responsabilidade de due diligence do lado de quem escolhe o fornecedor. Antes de assinares qualquer serviço, faz sentido verificar alguns sinais que costumam distinguir operações mais sérias:" },
      { type: "ul", items: [
        "Existência de termos de utilização claros e de uma política de reembolso publicada, em vez de comunicação apenas por mensagem informal.",
        "Presença online estável ao longo do tempo — um site e canais de contacto que já existem há vários meses ou anos, não uma página criada na semana passada.",
        "Transparência nos preços, sem promessas irrealistas como acesso \"vitalício\" por um pagamento único simbólico.",
        "Capacidade de responder com clareza quando perguntas diretamente sobre a origem do conteúdo distribuído.",
      ] },
      { type: "h2", text: "Riscos práticos para quem subscreve, e como reduzi-los" },
      { type: "p", text: "Para o utilizador final, os riscos práticos mais comuns não costumam ser de natureza criminal, mas sim de natureza financeira e de qualidade de serviço: um fornecedor pouco transparente tem maior probabilidade de desaparecer sem aviso, deixando-te sem o serviço pago e sem forma de reclamar o dinheiro. É por isso que recomendamos sempre verificar a política de reembolso e testar a estabilidade do serviço antes de avançares para planos semestrais ou anuais mais longos." },
      { type: "p", text: "Vale também a pena desconfiar de ofertas que parecem boas demais para serem verdade — nomeadamente pacotes vitalícios ou preços muito abaixo da média de mercado. Nenhum negócio com custos reais de servidores, largura de banda e suporte técnico consegue sustentar-se indefinidamente com esse tipo de proposta, o que geralmente é sinal de uma operação de curto prazo." },
      { type: "h2", text: "Como avaliamos isto no nosso próprio serviço" },
      { type: "p", text: "Do nosso lado, mantemos os nossos [Termos e Condições](/termos-e-condicoes) publicados e acessíveis, assim como a nossa [política de reembolso](/politica-de-reembolso), precisamente para que possas avaliar o serviço com a informação toda antes de decidires. Recomendamos que apliques o mesmo critério a qualquer fornecedor que estejas a considerar, seja connosco ou com outra empresa — pede sempre para ver estes documentos antes de pagar." },
      { type: "h2", text: "O enquadramento legal em mais detalhe" },
      { type: "p", text: "Em Portugal, tal como no resto da União Europeia, a distribuição de conteúdo audiovisual protegido é regulada pelo Código do Direito de Autor e dos Direitos Conexos, complementado por diretivas europeias sobre serviços de comunicação social audiovisual. Este enquadramento não menciona \"IPTV\" como categoria própria — trata-se de legislação neutra do ponto de vista tecnológico, que se aplica da mesma forma a um canal transmitido por satélite, cabo ou internet. O que a lei protege é o direito de quem detém os direitos de transmissão de um conteúdo decidir quem pode distribuí-lo, e em que condições." },
      { type: "p", text: "Isto explica também porque é que a mesma tecnologia IPTV é usada legalmente pelos próprios operadores portugueses de telecomunicações nas suas ofertas de televisão por internet, ao mesmo tempo que existem serviços não autorizados a usar exatamente a mesma tecnologia para distribuir conteúdo sem licença. A tecnologia é neutra; a legalidade depende inteiramente de quem está por trás do licenciamento do conteúdo específico." },
      { type: "h2", text: "Distribuir sem direitos vs. subscrever um serviço: papéis diferentes" },
      { type: "p", text: "Vale a pena separar claramente dois papéis distintos neste ecossistema. Por um lado, existe quem distribui conteúdo sem deter os direitos de transmissão — esta é a atividade que gera exposição legal mais direta, e sobre a qual têm incidido historicamente as ações de entidades de gestão de direitos de autor na Europa. Por outro lado, existe o consumidor final, que subscreve um serviço já disponível no mercado, geralmente sem forma prática de auditar a cadeia completa de licenciamento por trás de cada canal específico." },
      { type: "p", text: "Esta distinção não elimina a importância de escolheres fornecedores transparentes — pelo contrário, reforça-a. Quanto mais sério e estabelecido for um fornecedor, maior a probabilidade de este ter alguma forma de acordo ou licenciamento para o conteúdo que distribui, mesmo que essa informação não seja sempre visível publicamente por razões comerciais." },
      { type: "h2", text: "Perguntas frequentes sobre a legalidade do IPTV" },
      { type: "h3", text: "Posso ser multado por usar um serviço IPTV?" },
      { type: "p", text: "As ações legais neste espaço têm-se dirigido historicamente contra quem distribui conteúdo sem direitos, não contra o consumidor individual que subscreve um serviço de boa-fé. Ainda assim, escolher fornecedores transparentes reduz qualquer exposição e garante uma experiência mais fiável." },
      { type: "h3", text: "Como sei se um fornecedor é de confiança?" },
      { type: "p", text: "Procura por termos de utilização claros, política de reembolso publicada, histórico de operação estável e disponibilidade para responder a perguntas diretas sobre o serviço — sinais que descrevemos em detalhe acima." },
      { type: "h3", text: "A lei portuguesa tem alguma regra específica sobre IPTV?" },
      { type: "p", text: "Não existe uma lei portuguesa dedicada exclusivamente à \"IPTV\" enquanto tecnologia — aplica-se o enquadramento geral de direitos de autor e direitos conexos, o mesmo que rege qualquer forma de distribuição de conteúdo audiovisual protegido, seja por cabo, satélite ou internet." },
      { type: "h2", text: "O que perguntar diretamente a um fornecedor antes de decidir" },
      { type: "p", text: "Se ainda tiveres dúvidas depois de leres este artigo, a forma mais direta de as esclarecer é perguntar diretamente ao fornecedor que estás a considerar, antes de pagares qualquer coisa. Perguntas concretas como \"onde posso consultar os vossos termos de utilização?\", \"qual é a vossa política de reembolso, por escrito?\" ou \"há quanto tempo estão a operar este serviço?\" revelam muito mais sobre a seriedade de um fornecedor do que qualquer texto promocional na página inicial. Um fornecedor confiante na qualidade e legitimidade do que oferece não hesita em responder a estas perguntas com clareza e rapidez." },
      { type: "p", text: "Pelo contrário, respostas evasivas, vagas ou que tentam desviar a conversa para o preço em vez de responder diretamente são um sinal de alerta que vale a pena levar a sério, independentemente de quão apelativo pareça o resto da oferta." },
      { type: "h3", text: "Existem entidades que fiscalizam este setor em Portugal?" },
      { type: "p", text: "Sim — entidades de gestão coletiva de direitos de autor e associações do setor audiovisual acompanham ativamente este mercado, mas a sua atuação foca-se sobretudo em quem distribui conteúdo sem licença, e menos no consumidor final que subscreve um serviço já disponível comercialmente." },
      { type: "h3", text: "O bloqueio de um site significa automaticamente que é ilegal usá-lo?" },
      { type: "p", text: "Não necessariamente da mesma forma em todos os casos — o bloqueio de acesso a determinados domínios em Portugal resulta tipicamente de decisões judiciais relacionadas com direitos de autor sobre conteúdo específico, e reflete uma avaliação sobre a origem do conteúdo distribuído por esse site em particular, não uma classificação genérica sobre toda a tecnologia IPTV." },
      { type: "h3", text: "Um fornecedor com sede fora de Portugal está sujeito às mesmas regras?" },
      { type: "p", text: "As regras de direitos de autor aplicam-se ao território onde o conteúdo é consumido, não apenas onde a empresa está registada — daí a importância de avaliares o fornecedor pela transparência e reputação, independentemente de onde diz operar oficialmente." },
      { type: "h2", text: "O papel crescente da regulação europeia" },
      { type: "p", text: "Nos últimos anos, a União Europeia tem reforçado o enquadramento legal em torno da distribuição de conteúdo audiovisual, nomeadamente através de diretivas que facilitam a cooperação entre países membros no combate à distribuição não autorizada de conteúdo protegido, incluindo transmissões desportivas ao vivo. Esta tendência regulatória tem incentivado fornecedores de todo o setor a tornarem-se progressivamente mais transparentes sobre a origem do conteúdo que distribuem, precisamente para se diferenciarem de operações menos sérias. Como consumidor, esta evolução joga a teu favor: quanto mais escrutínio existir sobre o setor, maior o incentivo para os fornecedores manterem práticas claras e sustentáveis a longo prazo." },
      { type: "p", text: "Se tiveres dúvidas específicas sobre o nosso serviço antes de subscreveres, [fala diretamente connosco](/contacto) — preferimos esclarecer qualquer questão antes de assinares do que depois de já teres pago." },
    ],
  },
  {
    slug: "como-instalar-iptv-smart-tv",
    title: "Como Instalar IPTV na Smart TV em 5 Passos",
    excerpt: "Guia prático para configurares o teu serviço IPTV numa Smart TV Samsung ou LG sem complicações.",
    date: "2026-09-05",
    readingTime: "8 min",
    category: "Tutoriais",
    cover: "/images/como-instalar-iptv-smart-tv.webp",
    coverIcon: "monitorsmartphone",
    content: [
      { type: "p", text: "Instalar IPTV numa Smart TV Samsung ou LG costuma parecer mais complicado do que realmente é, sobretudo se nunca tiveres instalado uma aplicação fora das mais populares como a Netflix ou a RTP Play. Na prática, o processo demora menos de quinze minutos e não exige qualquer conhecimento técnico avançado — só precisas de seguir a ordem certa dos passos. Este guia mostra exatamente como fazê-lo, incluindo o que fazer quando a app recomendada não aparece na loja do teu modelo específico." },
      { type: "h2", text: "O que precisas antes de começar" },
      { type: "p", text: "Antes de abrires a loja de aplicações da tua televisão, confirma que tens estes três elementos à mão:" },
      { type: "ul", items: [
        "Uma subscrição ativa de um serviço IPTV, com as credenciais de acesso já enviadas por e-mail ou WhatsApp.",
        "A televisão ligada à internet, por cabo de rede (recomendado) ou Wi-Fi com sinal estável.",
        "Alguns minutos sem pressa, para evitar erros de digitação nas credenciais na primeira tentativa.",
      ] },
      { type: "h2", text: "Passo 1: Identificar a app certa para o teu modelo" },
      { type: "p", text: "Nem todas as televisões usam a mesma aplicação. Modelos Samsung com sistema Tizen e LG com webOS usam tradicionalmente a Smart IPTV, mas esta app tem sido progressivamente removida das lojas oficiais em vários modelos lançados nos últimos anos. Se não a encontrares na tua loja, o IBO Player ou o Flix IPTV funcionam como alternativas diretas, com um processo de emparelhamento semelhante. Podes confirmar qual aplicação é recomendada para o teu modelo específico no nosso [catálogo de aplicações](/aplicacoes)." },
      { type: "h2", text: "Passo 2: Instalar a aplicação a partir da loja da TV" },
      { type: "p", text: "Na tua televisão, abre o menu principal e procura a loja de aplicações (chamada \"Smart Hub\" na Samsung ou \"LG Content Store\" na LG). Pesquisa pelo nome exato da app identificada no passo anterior e instala-a normalmente, tal como instalarias qualquer outra aplicação. Este processo não requer sideload nem ativar nenhuma definição especial — ao contrário do que acontece, por exemplo, no Fire TV Stick." },
      { type: "h2", text: "Passo 3: Obter o código de emparelhamento" },
      { type: "p", text: "Ao abrires a app pela primeira vez, ela vai mostrar-te um código no ecrã — normalmente um endereço MAC (no caso da Smart IPTV) ou um Device ID e Device Key (no caso do IBO Player). Este código identifica de forma única a tua televisão e é o que permite ao servidor do teu fornecedor associar a subscrição a este ecrã específico. Anota este código exatamente como aparece, com atenção a maiúsculas e caracteres semelhantes como \"0\" e \"O\"." },
      { type: "h2", text: "Passo 4: Enviar o código e aguardar a ativação" },
      { type: "p", text: "Envia o código obtido para o suporte do teu fornecedor, através do canal que já usaste para subscrever (normalmente WhatsApp ou e-mail). A ativação costuma ser processada em poucos minutos, embora possa demorar até algumas horas dependendo do horário. Durante este processo não precisas de fazer mais nada na televisão — a associação acontece do lado do servidor." },
      { type: "h2", text: "Passo 5: Reiniciar a app e confirmar os canais" },
      { type: "p", text: "Depois de confirmada a ativação, fecha completamente a aplicação e volta a abri-la. Os canais e o guia de programação (EPG) devem carregar automaticamente, sem precisares de introduzir mais nenhuma credencial manualmente — esta é a principal vantagem deste método de emparelhamento por código, em comparação com o método Xtream Codes usado noutras apps, que pede utilizador, palavra-passe e endereço de servidor." },
      { type: "h2", text: "O que fazer se a app não estiver disponível na tua TV" },
      { type: "p", text: "Se pesquisares pela app recomendada e ela simplesmente não aparecer na loja da tua televisão, isto é mais comum do que parece em modelos lançados nos últimos dois ou três anos, sobretudo com a Smart IPTV. Nesse caso, tens três alternativas práticas: experimentar uma app diferente disponível para o teu sistema (como o IBO Player), verificar se a tua televisão suporta instalação via ficheiro externo (menos comum em modelos recentes por motivos de segurança), ou ligar um dispositivo externo como um Fire TV Stick ou Android TV Box à entrada HDMI, contornando por completo as limitações da loja de apps nativa da TV." },
      { type: "p", text: "Consulta o nosso [guia completo de dispositivos](/dispositivos) para veres o processo de instalação detalhado nestes aparelhos externos, caso a tua televisão não tenha uma app compatível disponível." },
      { type: "h2", text: "Diferenças entre Samsung Tizen e LG webOS" },
      { type: "p", text: "Embora o processo geral seja semelhante nas duas marcas, existem pequenas diferenças que vale a pena conhecer. Nas Samsung com sistema Tizen, a loja de aplicações chama-se Smart Hub e costuma organizar as apps por categorias, o que por vezes esconde apps de IPTV fora da categoria \"Entretenimento\" óbvia — vale a pena usar sempre a pesquisa direta pelo nome exato da app em vez de navegar por categorias. Nas LG com webOS, a LG Content Store tende a ser mais permissiva com aplicações de terceiros, e o menu de aplicações instaladas é acedido a partir do próprio ecrã inicial, deslizando lateralmente até à zona de apps." },
      { type: "p", text: "Outra diferença prática está na gestão de contas de utilizador: a Samsung associa a instalação de apps a uma conta Samsung criada no primeiro arranque da televisão, enquanto a LG não exige necessariamente essa conta para instalar a maioria das aplicações gratuitas. Se tiveres dificuldade em encontrar a app pretendida, confirma primeiro que a tua televisão está atualizada com a versão mais recente do sistema operativo, já que atualizações de firmware por vezes alteram a disponibilidade de certas aplicações na loja." },
      { type: "h2", text: "Configurar o EPG e organizar os teus canais favoritos" },
      { type: "p", text: "Depois da instalação inicial, vale a pena investir mais alguns minutos a configurar o guia eletrónico de programação (EPG) e a lista de favoritos, para tornar o dia a dia mais confortável. A maioria das apps de IPTV permite marcar canais como favoritos através de um botão dedicado no controlo remoto ou num menu de opções ao navegares sobre um canal — isto cria uma lista reduzida e personalizada, evitando teres de percorrer centenas de canais sempre que queres ligar à RTP1 ou à Sport TV." },
      { type: "p", text: "O EPG, quando disponível e corretamente carregado, mostra a programação horária de cada canal diretamente na interface, permitindo-te ver o que está a passar agora e mais tarde sem sair da app. Se o EPG aparecer vazio ou desatualizado, normalmente basta forçar uma atualização manual nas definições da app, ou aguardar algumas horas para que o servidor sincronize essa informação automaticamente." },
      { type: "h2", text: "Problemas comuns durante a instalação" },
      { type: "h3", text: "A app pede utilizador e palavra-passe em vez de mostrar um código" },
      { type: "p", text: "Isto significa que estás a usar uma app baseada em Xtream Codes em vez de emparelhamento por MAC/Device ID. Nesse caso, introduz o utilizador, a palavra-passe e o endereço do servidor exatamente como foram enviados — atenção especial a espaços em branco acidentais no início ou fim de cada campo." },
      { type: "h3", text: "Os canais não carregam depois da ativação" },
      { type: "p", text: "Confirma primeiro a tua ligação à internet, testando outra app como o YouTube. Se a internet estiver a funcionar normalmente, tenta reiniciar a própria televisão (não apenas a app) — isto resolve a maioria dos casos em que a ativação já foi processada mas a app não atualizou o estado automaticamente." },
      { type: "h3", text: "A imagem carrega mas corta ou trava com frequência" },
      { type: "p", text: "Este já não é um problema de instalação, mas de estabilidade de ligação. O nosso [guia sobre buffering e cortes](/blog/resolver-buffering-cortes-iptv) explica exatamente o que verificar nestes casos." },
      { type: "h3", text: "Instalei a app mas ela não aparece atualizada com os canais mais recentes" },
      { type: "p", text: "Verifica se a app está a correr a versão mais recente disponível na loja — algumas apps de IPTV recebem atualizações frequentes que corrigem precisamente problemas de sincronização de listas de canais. Se a versão já estiver atualizada, contacta o suporte para confirmar se existe alguma manutenção em curso do lado do servidor." },
      { type: "h3", text: "Posso instalar a mesma app em mais do que uma televisão da minha casa?" },
      { type: "p", text: "Depende do número de dispositivos simultâneos incluído no teu plano. Cada televisão precisa do seu próprio código de emparelhamento, associado à mesma subscrição, dentro do limite de dispositivos simultâneos contratado." },
      { type: "h2", text: "Vale a pena pedir ajuda remota na primeira instalação?" },
      { type: "p", text: "Se nunca instalaste uma aplicação fora das mais conhecidas na tua televisão, e sentires qualquer insegurança em seguir os passos sozinho, não há qualquer problema em pedir ajuda ao suporte técnico do teu fornecedor logo desde o início, em vez de tentar sozinho e só contactar depois de algo correr mal. A maioria dos fornecedores sérios, incluindo o nosso, está disponível para orientar chamada a chamada por WhatsApp durante todo o processo, incluindo partilha de ecrã em alguns casos. Isto é particularmente útil para utilizadores menos habituados a instalar aplicações fora do ecossistema mais comum das suas televisões." },
      { type: "h2", text: "Quanto tempo dura a configuração completa, do zero ao primeiro canal" },
      { type: "p", text: "Somando todos os passos — desde a instalação da app até à confirmação dos canais a funcionar — o processo completo demora tipicamente entre dez e vinte minutos, sendo a maior parte desse tempo o intervalo de espera pela confirmação da ativação do lado do fornecedor. Se já tiveres feito este processo anteriormente noutra televisão, a segunda vez costuma ser ainda mais rápida, já que já sabes exatamente onde encontrar cada opção nos menus." },
      { type: "p", text: "Se seguires estes cinco passos e ainda assim tiveres dificuldades, o suporte do teu fornecedor deve conseguir ajudar-te remotamente — é precisamente para isso que existe. Do nosso lado, respondemos por WhatsApp a qualquer dúvida durante o processo de instalação." },
    ],
  },
  {
    slug: "iptv-firestick-portugal",
    title: "IPTV no Firestick: Guia Completo de Instalação",
    excerpt: "Passo a passo para ativares o teu serviço IPTV num Amazon Fire TV Stick, incluindo o processo de sideload.",
    date: "2026-09-18",
    readingTime: "9 min",
    category: "Tutoriais",
    coverIcon: "cast",
    cover: "/images/iptv-firestick-portugal.webp",
    content: [
      { type: "p", text: "O Amazon Fire TV Stick é, de longe, um dos dispositivos mais populares para ver IPTV em Portugal — não só pelo preço acessível, mas porque transforma qualquer televisão com entrada HDMI numa Smart TV completa em segundos. A particularidade deste aparelho é que a instalação envolve um passo extra chamado sideload, que costuma intimidar quem nunca o fez antes. Na realidade, é um processo mecânico e seguro quando seguido corretamente, e este guia explica cada etapa em detalhe." },
      { type: "h2", text: "Porque é que o Firestick precisa de sideload" },
      { type: "p", text: "A Amazon Appstore, a loja oficial de aplicações do Fire TV Stick, tem um catálogo mais limitado do que a Google Play Store usada noutros dispositivos Android. Apps populares para IPTV como o TiviMate ou o IPTV Smarters Pro em versões específicas nem sempre estão disponíveis diretamente nesta loja. O sideload resolve isto: é o processo de instalar uma aplicação a partir de um ficheiro de instalação (APK) obtido diretamente de uma fonte externa, em vez de a descarregares através da loja oficial. A Amazon permite este processo oficialmente, através de uma definição de programador que qualquer utilizador pode ativar." },
      { type: "h2", text: "Passo 1: Ativar a instalação de apps de origens desconhecidas" },
      { type: "p", text: "No teu Fire TV Stick, vai a Definições, depois \"Minha Fire TV\" (ou \"Dispositivo\" em versões mais recentes), e seleciona \"Opções de programador\". Se não vires esta opção, pode ser necessário ativá-la primeiro indo a \"Sobre\" e selecionando o nome do dispositivo repetidamente, tal como acontece em telemóveis Android. Dentro de \"Opções de programador\", ativa \"Apps de origens desconhecidas\" (ou \"Aplicações de fontes desconhecidas\", dependendo da versão do sistema)." },
      { type: "h2", text: "Passo 2: Instalar a app Downloader" },
      { type: "p", text: "Volta ao ecrã principal e usa a pesquisa para procurar \"Downloader\" na Amazon Appstore — esta app está oficialmente disponível e é gratuita. O Downloader funciona como um navegador simplificado, desenhado especificamente para descarregar e instalar ficheiros diretamente em dispositivos Fire TV, algo que o navegador Silk nativo não faz de forma tão direta." },
      { type: "h2", text: "Passo 3: Descarregar e instalar a app de IPTV" },
      { type: "p", text: "Abre o Downloader e introduz o link direto para o ficheiro de instalação da app recomendada pelo teu fornecedor de IPTV (normalmente o TiviMate ou o IPTV Smarters Pro). Depois de o ficheiro descarregar, o Downloader vai perguntar se queres instalá-lo — confirma, e a app fica disponível no ecrã principal do teu Fire TV Stick como qualquer outra." },
      { type: "ul", items: [
        "Usa sempre o link exato fornecido pelo teu serviço de IPTV, para garantires a versão correta da app.",
        "Depois da instalação, podes desinstalar o Downloader ou mantê-lo, caso precises de instalar outra app no futuro.",
        "Este processo só precisa de ser feito uma vez — depois de instalada, a app atualiza-se sozinha como qualquer aplicação normal.",
      ] },
      { type: "h2", text: "Passo 4: Configurar a app com as tuas credenciais" },
      { type: "p", text: "Abre a app recém-instalada e escolhe o método de configuração indicado pelo teu fornecedor — normalmente \"Xtream Codes\" (introduzindo utilizador, palavra-passe e endereço do servidor) ou \"Lista M3U\" (introduzindo apenas um link único). Copia estes dados exatamente como foram enviados por WhatsApp ou e-mail, com atenção especial a espaços em branco que por vezes se colam sem querer no início ou fim do texto." },
      { type: "h2", text: "Passo 5: Confirmar que tudo funciona" },
      { type: "p", text: "Depois de introduzires as credenciais, os canais e o guia de programação devem carregar em poucos segundos. Testa trocar de canal algumas vezes e experimenta também o catálogo de filmes e séries, se o teu plano o incluir, para confirmares que toda a subscrição está corretamente ativa." },
      { type: "h2", text: "Alternativas se preferires evitar o sideload" },
      { type: "p", text: "Se o processo de sideload te parecer desnecessariamente complicado, tens duas alternativas razoáveis. A primeira é usar uma app que já esteja disponível diretamente na Amazon Appstore, ainda que com menos funcionalidades do que o TiviMate — o nosso [guia de dispositivos](/dispositivos) lista as opções recomendadas por tipo de aparelho. A segunda é considerar um Android TV Box em vez do Firestick, já que a Google Play Store nesses dispositivos costuma ter as apps recomendadas disponíveis sem qualquer processo extra." },
      { type: "h2", text: "Qual modelo de Fire TV Stick escolher para IPTV" },
      { type: "p", text: "A Amazon vende atualmente vários modelos de Fire TV Stick, e a diferença entre eles importa mais do que se possa pensar para uma boa experiência de IPTV. O modelo básico (não-4K) tem menos memória RAM e um processador mais limitado, o que pode traduzir-se em maior lentidão a abrir apps e ocasional instabilidade ao reproduzir conteúdo em Full HD durante longos períodos. O Fire TV Stick 4K e o 4K Max, com mais memória e processador mais rápido, lidam de forma mais consistente com aplicações de IPTV mais exigentes como o TiviMate, e claro, são necessários caso o teu plano inclua conteúdo em 4K." },
      { type: "p", text: "Se já tens um Fire TV Stick básico e sentes lentidão generalizada (não apenas durante a reprodução, mas também a navegar nos menus), a causa pode simplesmente ser hardware insuficiente para o número de apps instaladas — vale a pena desinstalar aplicações que não uses e evitar deixar múltiplas apps a correr em segundo plano." },
      { type: "h2", text: "Ajustes recomendados depois da instalação" },
      { type: "p", text: "Depois de confirmares que os canais carregam corretamente, algumas afinações simples melhoram a experiência a médio prazo. Dentro das definições da app instalada, procura opções de cache de EPG e ajusta para um intervalo de atualização razoável (geralmente já vem configurado por omissão, mas vale confirmar). Se a app oferecer opção de pré-carregamento (buffer) ajustável, aumentar ligeiramente este valor pode reduzir cortes momentâneos em ligações menos estáveis, à custa de um pequeno atraso adicional ao mudar de canal." },
      { type: "p", text: "Vale também a pena, periodicamente, limpar a cache da própria aplicação (em Definições > Aplicações > [nome da app] > Limpar cache no menu do Fire TV Stick), sobretudo se notares lentidão crescente ao longo de semanas de uso contínuo — um comportamento comum em dispositivos com armazenamento mais limitado." },
      { type: "h2", text: "Problemas comuns e como resolvê-los" },
      { type: "h3", text: "O Downloader não consegue aceder ao link fornecido" },
      { type: "p", text: "Confirma que copiaste o link completo, sem espaços extra no início. Se o problema persistir, pede ao suporte do teu fornecedor um link alternativo — por vezes os links de download têm um período de validade limitado." },
      { type: "h3", text: "A app instala mas fecha sozinha ao abrir" },
      { type: "p", text: "Isto costuma indicar uma versão incompatível com o modelo específico do teu Fire TV Stick (1ª geração vs. modelos mais recentes com mais memória). Volta ao Downloader e confirma se existe uma versão alternativa recomendada para o teu modelo." },
      { type: "h3", text: "Os canais carregam mas cortam com frequência" },
      { type: "p", text: "Este já não é um problema de instalação, mas de largura de banda disponível. Consulta o nosso [guia sobre buffering e cortes no IPTV](/blog/resolver-buffering-cortes-iptv) para diagnosticares a causa exata." },
      { type: "h2", text: "Perguntas frequentes sobre IPTV no Firestick" },
      { type: "h3", text: "O sideload é seguro, ou pode danificar o dispositivo?" },
      { type: "p", text: "É completamente seguro quando fazes o processo através da app Downloader oficial e de links fornecidos por uma fonte identificável, como o teu próprio fornecedor de IPTV. Não danifica o dispositivo nem anula qualquer garantia — é uma funcionalidade suportada oficialmente pela Amazon." },
      { type: "h3", text: "Preciso de repetir o sideload sempre que a app atualiza?" },
      { type: "p", text: "Não. Depois de instalada, a app atualiza-se sozinha através das suas próprias funcionalidades internas, tal como qualquer aplicação instalada normalmente através da Amazon Appstore." },
      { type: "h3", text: "O Fire TV Stick consegue correr duas apps de IPTV em simultâneo?" },
      { type: "p", text: "Consegue ter várias instaladas, mas apenas uma reproduz de cada vez, como seria de esperar em qualquer televisão. Ter mais do que uma app instalada serve apenas como alternativa de recurso, não para uso simultâneo." },
      { type: "h3", text: "Preciso de manter o Downloader instalado depois de configurar tudo?" },
      { type: "p", text: "Não é obrigatório. Podes desinstalá-lo depois de confirmares que a app de IPTV está a funcionar corretamente, e voltar a instalá-lo facilmente no futuro caso precises de repetir o processo noutro dispositivo." },
      { type: "h3", text: "O sideload funciona da mesma forma em todas as gerações do Fire TV Stick?" },
      { type: "p", text: "Sim, o processo de ativar \"Apps de origens desconhecidas\" e usar o Downloader é idêntico em todas as gerações, incluindo o Lite, o 4K e o 4K Max — apenas o desempenho geral do dispositivo varia entre modelos." },
      { type: "h2", text: "Fire TV Stick vs. outros dispositivos externos para IPTV" },
      { type: "p", text: "Vale a pena perceber como o Fire TV Stick se compara a outras opções de dispositivo externo antes de decidires investir neste em particular. Um Android TV Box genérico, por exemplo, geralmente não precisa de sideload, já que a Google Play Store nesses aparelhos tem as apps de IPTV mais populares disponíveis diretamente — mas a qualidade de hardware varia muito mais entre marcas, ao contrário da Amazon, que mantém um padrão mais consistente entre os seus modelos. Um Chromecast com Google TV, por sua vez, situa-se num meio-termo: usa Android TV como sistema, com acesso à Google Play Store, mas também pode exigir sideload para algumas apps específicas, dependendo da versão instalada." },
      { type: "p", text: "Na prática, se já usas outros produtos Amazon (Alexa, Kindle) ou preferes um ecossistema simples e consistente entre gerações de dispositivos, o Fire TV Stick continua a ser uma escolha sólida apesar do passo extra do sideload. Se preferires evitar esse passo por completo, um Android TV Box com boas especificações é a alternativa mais direta." },
      { type: "p", text: "Depois de configurado, o Fire TV Stick costuma ser um dos dispositivos mais estáveis para IPTV, precisamente por ser dedicado a streaming e não partilhar recursos com outras aplicações do dia a dia como um telemóvel. Se tiveres qualquer dificuldade durante este processo, [fala com o nosso suporte](/contacto) — ajudamos com a instalação sem custo adicional." },
    ],
  },
  {
    slug: "sport-tv-eleven-benfica-tv-iptv",
    title: "Sport TV, Eleven e Benfica TV: Como Ver Todos os Jogos com IPTV",
    excerpt: "O que precisas de saber sobre canais desportivos portugueses antes de escolheres um serviço IPTV.",
    date: "2026-09-17",
    readingTime: "8 min",
    category: "Desporto",
    coverIcon: "signal",
    cover: "/images/sport-tv-eleven-benfica-tv-iptv.webp",
    content: [
      { type: "p", text: "Para muitos portugueses, a razão principal para experimentar IPTV não é o catálogo de filmes nem a poupança mensal — é simplesmente deixar de pagar vários pacotes desportivos separados só para conseguir ver todos os jogos que interessam. Entre a Liga Portugal, a Champions League, a Fórmula 1 e os canais de clube, o desporto ao vivo é, sozinho, capaz de justificar o custo de uma televisão por cabo tradicional. Este artigo explica o que precisas mesmo de confirmar antes de assinares um serviço com esse objetivo específico." },
      { type: "h2", text: "Quais canais desportivos deves procurar, com nome próprio" },
      { type: "p", text: "O erro mais comum ao escolher um serviço IPTV para desporto é confiar na frase genérica \"canais desportivos incluídos\", sem confirmar exatamente quais. Antes de assinares, pede a lista de canais desportivos por nome e confirma que inclui, no mínimo:" },
      { type: "ul", items: [
        "Sport TV 1, 2, 3 e 4 — cobrem a Liga Portugal, competições europeias e desporto internacional.",
        "Eleven Sports (várias numerações) — direitos de competições específicas que mudam de temporada para temporada.",
        "Benfica TV, Porto Canal e Sporting TV — os canais próprios dos três grandes clubes portugueses.",
        "Canais internacionais de desporto, caso acompanhes ligas estrangeiras como a Premier League ou La Liga.",
      ] },
      { type: "p", text: "Um fornecedor sério não tem qualquer problema em confirmar esta lista por escrito antes de pagares. Se a resposta for evasiva ou genérica, é um sinal de alerta de que talvez alguns destes canais não estejam realmente incluídos, ou não estejam estáveis." },
      { type: "h2", text: "Porque é que os jogos são o verdadeiro teste de qualidade" },
      { type: "p", text: "Um serviço IPTV pode parecer perfeitamente estável a meio de uma tarde de terça-feira, e falhar completamente às 21h de um sábado durante um clássico. Isto acontece porque as horas de maior tráfego — tipicamente entre as 20h e as 22h aos fins de semana, e durante jogos de competições europeias a meio da semana — colocam uma pressão muito maior nos servidores do que o uso normal do dia a dia. É precisamente nesse pico que um fornecedor com infraestrutura fraca mostra as suas limitações: imagem a travar, resolução a baixar automaticamente ou o canal a cair por completo." },
      { type: "p", text: "Por esta razão, recomendamos sempre testar a estabilidade do serviço durante um jogo ao vivo de peso — não durante um treino ou um jogo de menor interesse — antes de te comprometeres com um plano semestral ou anual. Um serviço com [infraestrutura Multi-Server e failover automático](/#vantagens) foi desenhado precisamente para aguentar estes picos sem degradar a experiência." },
      { type: "h2", text: "O que fazer se sentires cortes durante um jogo importante" },
      { type: "p", text: "Se notares buffering ou perda de sinal especificamente durante jogos — e não noutros momentos — o problema tende a estar do lado do fornecedor, não da tua ligação a internet. Ainda assim, vale a pena eliminar as causas mais comuns do teu lado antes de tirar essa conclusão:" },
      { type: "ul", items: [
        "Confirma que a tua ligação tem pelo menos 15-20 Mbps estáveis, idealmente por cabo de rede em vez de Wi-Fi.",
        "Verifica se mais pessoas em casa estão a usar a mesma rede em simultâneo durante o jogo, reduzindo a largura de banda disponível.",
        "Testa outro canal desportivo ao mesmo tempo — se todos falharem em simultâneo, o problema é quase certamente do lado do servidor.",
      ] },
      { type: "p", text: "Se depois desta verificação o problema persistir, o nosso [guia detalhado sobre buffering e cortes no IPTV](/blog/resolver-buffering-cortes-iptv) explica passo a passo como diagnosticar a causa exata e o que pedir ao suporte técnico do teu fornecedor." },
      { type: "h2", text: "Vale a pena um plano com mais dispositivos para ver desporto em grupo?" },
      { type: "p", text: "Se costumas juntar família ou amigos para ver jogos em mais do que uma divisão da casa, ou em casas diferentes, vale a pena considerar planos com mais dispositivos incluídos em simultâneo em vez de partilhar um único acesso — o que pode causar quebras quando duas pessoas tentam ver canais diferentes ao mesmo tempo com a mesma conta. Os nossos planos trimestral, semestral e anual incluem progressivamente mais dispositivos simultâneos, precisamente para cobrir este cenário sem perda de qualidade." },
      { type: "h2", text: "Canais lineares vs. catch-up: o que muda para desporto" },
      { type: "p", text: "Nem todos os planos IPTV incluem catch-up TV (a possibilidade de veres um jogo que já passou, dentro de uma janela de alguns dias), e vale a pena perceber a diferença antes de assumires que está incluído. Os canais desportivos lineares transmitem o jogo apenas no momento em que decorre, exatamente como uma televisão tradicional — se perderes o início, perdes essa parte, a menos que o teu plano inclua especificamente a funcionalidade de catch-up ou gravação. Os nossos planos semestral e anual incluem catch-up TV até sete dias, útil para quem não consegue ver sempre em direto mas quer rever jogos mais tarde." },
      { type: "h2", text: "Como preparar a casa para ver jogos em grupo sem cortes" },
      { type: "p", text: "Se costumas juntar várias pessoas para ver jogos importantes, vale a pena preparar a tua ligação com antecedência, e não apenas no momento do jogo. Confirma que o dispositivo principal (Smart TV, Fire TV Stick ou Android Box) está ligado por cabo de rede sempre que possível, e evita que outras pessoas em casa estejam a fazer downloads pesados ou a ver streaming em 4K noutra divisão durante o jogo — isto reduz consideravelmente a largura de banda disponível precisamente no momento mais crítico. Se tiveres um plano com múltiplos dispositivos incluídos, mas todos ligados à mesma rede doméstica, o gargalo pode estar no teu próprio router, não no fornecedor de IPTV." },
      { type: "h2", text: "Calendário desportivo: quando esperar maior tráfego" },
      { type: "p", text: "Ao longo da época desportiva, alguns momentos concentram sistematicamente mais tráfego do que outros: jornadas da Liga Portugal aos fins de semana, jogos de competições europeias a meio da semana (terças e quartas-feiras à noite), clássicos entre os três grandes, e grandes eventos pontuais como finais de Champions League ou fases decisivas de campeonatos internacionais. Se souberes com antecedência que vais ver um destes jogos, faz sentido confirmar a estabilidade da tua ligação nos dias anteriores, em vez de descobrires um problema apenas no momento do jogo." },
      { type: "h2", text: "Checklist antes de assinares para a época desportiva" },
      { type: "p", text: "Antes de escolheres um serviço a pensar principalmente em desporto, confirma: a lista de canais desportivos foi confirmada por nome, não de forma vaga; testaste (ou vais testar) a estabilidade durante um jogo de peso; sabes quantos dispositivos em simultâneo precisas para o teu cenário de utilização; e conheces a política de reembolso caso a experiência não corresponda ao prometido. Com estes pontos verificados, estás em posição de escolher com confiança em vez de esperança." },
      { type: "h2", text: "Perguntas frequentes sobre desporto em IPTV" },
      { type: "h3", text: "Todos os fornecedores IPTV incluem os mesmos canais desportivos?" },
      { type: "p", text: "Não. Embora a maioria anuncie \"canais desportivos incluídos\", a lista exata varia entre fornecedores, e alguns podem não incluir todos os canais de clube ou competições específicas. Confirma sempre a lista por nome antes de assinares, como explicado no início deste artigo." },
      { type: "h3", text: "Vale a pena um plano diferente apenas durante a época de futebol?" },
      { type: "p", text: "Se o teu interesse for sazonal, um plano mensal ou trimestral durante os meses de maior interesse desportivo pode fazer mais sentido financeiro do que um compromisso anual, sobretudo se ainda estiveres a avaliar a estabilidade de um novo fornecedor." },
      { type: "h3", text: "Os canais desportivos internacionais (Premier League, La Liga) estão sempre incluídos?" },
      { type: "p", text: "Depende do fornecedor e do plano. Se acompanhas ligas estrangeiras específicas, confirma explicitamente essa cobertura antes de assinar, da mesma forma que confirmarias os canais portugueses." },
      { type: "h3", text: "O que fazer se um canal específico cair a meio de um jogo?" },
      { type: "p", text: "Confirma primeiro se outros canais continuam a funcionar normalmente — se sim, tenta reiniciar a app ou trocar de canal e voltar; se todos os canais falharem ao mesmo tempo, é provável que seja uma instabilidade momentânea do servidor, e vale a pena contactar o suporte imediatamente para reportares o problema em tempo real." },
      { type: "h3", text: "Vale a pena ter dois fornecedores diferentes só para garantir desporto?" },
      { type: "p", text: "Para a maioria das pessoas não compensa o custo extra — é preferível investir esse tempo a escolher bem um único fornecedor com boa reputação para eventos desportivos do que duplicar despesa como rede de segurança." },
      { type: "h2", text: "Full HD ou 4K para ver desporto: vale a pena a diferença?" },
      { type: "p", text: "Muitos serviços IPTV oferecem canais desportivos tanto em Full HD como, cada vez mais, em 4K. Para desporto em particular, a diferença de nitidez é mais percetível do que noutros tipos de conteúdo, já que o movimento rápido de uma bola ou de jogadores beneficia visivelmente de maior resolução e frame rate. Ainda assim, vale a pena confrontar este benefício com o requisito técnico associado: 4K exige uma ligação estável de pelo menos 25 Mbps, e qualquer instabilidade na rede é mais percetível em 4K do que em Full HD, já que há mais dados a transmitir por segundo. Se a tua ligação à internet estiver no limite inferior recomendado, pode compensar mais optar por Full HD de forma consistente do que 4K com cortes ocasionais." },
      { type: "p", text: "Uma última recomendação prática: guarda o contacto de suporte do teu fornecedor num sítio de fácil acesso antes de um jogo importante, e não apenas quando já estás com o problema em mãos. Um minuto de preparação antecipada evita perderes minutos preciosos de jogo à procura do número de WhatsApp certo no meio de um imprevisto técnico." },
      { type: "p", text: "Podes consultar os [planos disponíveis](/planos) e as respetivas capacidades de dispositivos simultâneos, ou [falar diretamente connosco](/contacto) se quiseres confirmar a cobertura desportiva antes de decidires." },
    ],
  },
  {
    slug: "iptv-vs-streaming-netflix-disney",
    title: "IPTV vs. Netflix, HBO Max e Disney+: Vale a Pena Ter os Dois?",
    excerpt: "Percebe a diferença real entre IPTV e plataformas de streaming, e porque muitas pessoas usam ambos.",
    date: "2026-09-16",
    readingTime: "8 min",
    category: "Guias",
    coverIcon: "monitorplay",
    cover: "/images/iptv-vs-streaming-netflix-disney.webp",
    content: [
      { type: "p", text: "\"Se já tenho Netflix e Disney+, ainda preciso de IPTV?\" é uma dúvida legítima, e a resposta curta é que estes serviços resolvem problemas diferentes — mesmo que ambos cheguem à tua televisão pela mesma ligação à internet. Perceber essa diferença ajuda a decidir se faz sentido ter os dois, substituir um pelo outro, ou manter apenas o que já tens." },
      { type: "h2", text: "A diferença fundamental: biblioteca fechada vs. transmissão ao vivo" },
      { type: "p", text: "O Netflix, a HBO Max e o Disney+ são, no fundo, bibliotecas de conteúdo fechadas. Cada plataforma licencia ou produz um catálogo próprio de filmes, séries e documentários, organizado para navegares e escolheres o que queres ver, quando quiseres. É um modelo pensado para consumo por catálogo — não há \"canais\" nem grelha de horários, apenas títulos disponíveis a pedido." },
      { type: "p", text: "O IPTV funciona de forma estruturalmente diferente: replica o modelo de uma televisão tradicional, com canais ao vivo transmitidos em tempo real, seguindo uma grelha de programação — telejornais às horas certas, jogos de futebol enquanto decorrem, novelas e programas ao vivo. A maioria dos serviços IPTV, incluindo o nosso, junta a isto também uma biblioteca de filmes e séries (VOD), mas a espinha dorsal do serviço continua a ser a transmissão ao vivo, que nenhuma plataforma de streaming por catálogo oferece." },
      { type: "h2", text: "O que cada um faz melhor" },
      { type: "h3", text: "Onde o streaming por catálogo ganha" },
      { type: "p", text: "Para séries originais de produção própria, como as exclusivas de cada plataforma, e para filmes recentes com licenciamento direto, as plataformas de streaming continuam a ser insubstituíveis — nenhum serviço IPTV vai oferecer-te uma série exclusiva da Netflix antes de ela lá estar disponível. Se o teu consumo é principalmente séries e filmes que já sabes que queres ver, o streaming por catálogo é a ferramenta certa." },
      { type: "h3", text: "Onde o IPTV ganha" },
      { type: "p", text: "Para tudo o que é ao vivo e imprevisível — noticiários, desporto, eventos especiais, canais internacionais de países onde tens família — o IPTV é a única opção realista. Nenhuma plataforma de streaming por catálogo transmite a Liga Portugal ao vivo ou o telejornal da noite no momento exato em que está a acontecer. É também a opção mais próxima de uma televisão tradicional para quem gosta de \"navegar\" por canais em vez de escolher sempre ativamente o que ver." },
      { type: "h2", text: "Como a maioria dos utilizadores em Portugal usa os dois em conjunto" },
      { type: "p", text: "Na prática, a maior parte dos utilizadores não escolhe um em detrimento do outro — combina os dois de forma complementar. O padrão mais comum é: streaming por catálogo para séries e filmes planeados com antecedência, IPTV para tudo o resto — telejornais, desporto ao vivo, canais internacionais e aquela sensação de \"ligar a TV e ver o que está a dar\", que o streaming por catálogo não replica bem." },
      { type: "p", text: "Esta combinação também resolve uma limitação real do streaming: mesmo subscrevendo três ou quatro plataformas diferentes, continuas sem acesso a canais ao vivo, desporto em direto ou televisão internacional — é precisamente aí que o IPTV preenche a lacuna." },
      { type: "h2", text: "A conta final: quanto custa ter os dois" },
      { type: "p", text: "Uma preocupação comum é que somar IPTV a várias subscrições de streaming acabe por custar tanto ou mais do que a televisão por cabo tradicional. Na prática, isso raramente acontece. Um plano IPTV mensal ronda os 7€ a 13€, e mesmo somando duas subscrições de streaming (tipicamente entre 8€ e 15€ cada), o total combinado costuma ficar bastante abaixo dos 60€ a 90€ mensais de um pacote premium de televisão por cabo com desporto incluído — e ainda ganhas acesso a muito mais conteúdo internacional pelo caminho." },
      { type: "ul", items: [
        "Televisão por cabo com pacote desportivo: tipicamente €60–90/mês, com fidelização de 12–24 meses.",
        "IPTV (plano mensal): €7–13/mês, sem fidelização.",
        "Uma ou duas subscrições de streaming: tipicamente €8–15/mês cada.",
        "Total combinado (IPTV + 2 streamings): normalmente ainda abaixo de €40/mês, sem contrato.",
      ] },
      { type: "h2", text: "Publicidade e experiência de utilização: outra diferença a considerar" },
      { type: "p", text: "Outro fator que raramente entra nesta comparação é a experiência de navegação e publicidade. Os planos mais económicos de algumas plataformas de streaming incluem intervalos publicitários dentro dos próprios filmes e séries, uma mudança relativamente recente neste mercado. O IPTV, por natureza de replicar canais de televisão tradicionais, também tem publicidade nos canais que a incluem originalmente — mas o catálogo VOD (filmes e séries incluídos no plano IPTV) costuma ser apresentado sem interrupções publicitárias adicionais, de forma semelhante aos planos premium de streaming." },
      { type: "p", text: "Vale a pena teres isto em conta ao comparares o valor de cada assinatura: um plano de streaming mais barato com anúncios nem sempre compensa face a um plano IPTV sem essa interrupção adicional, dependendo do que mais valorizas na experiência de visualização." },
      { type: "h2", text: "Guia rápido por tipo de utilizador" },
      { type: "p", text: "Para simplificar a decisão, considera estes três perfis comuns:" },
      { type: "ul", items: [
        "Se vês sobretudo séries e filmes planeados com antecedência, e raramente sentes falta de desporto ao vivo: as tuas subscrições de streaming atuais provavelmente já cobrem as tuas necessidades.",
        "Se costumas acompanhar desporto, telejornais ou canais internacionais, mesmo que também vejas streaming regularmente: o IPTV preenche uma lacuna real que nenhuma plataforma por catálogo resolve.",
        "Se gostas da sensação de \"navegar por canais\" e descobrir o que está a passar, em vez de escolheres sempre ativamente um título: o modelo de canais ao vivo do IPTV tende a agradar mais do que o consumo por catálogo.",
      ] },
      { type: "h2", text: "Como decidir o que faz sentido para ti" },
      { type: "p", text: "Se o teu consumo é quase exclusivamente séries e filmes planeados com antecedência, e nunca sentes falta de desporto ao vivo ou canais internacionais, talvez não precises de IPTV. Mas se em algum momento já sentiste a frustração de não conseguir ver um jogo, um noticiário estrangeiro ou um canal do teu país de origem, o IPTV resolve exatamente esse tipo de lacuna — sem exigir que abandones as tuas subscrições de streaming habituais." },
      { type: "h2", text: "Porque é que esta confusão entre os dois modelos existe" },
      { type: "p", text: "Parte da confusão entre IPTV e streaming por catálogo vem do facto de ambos partilharem a mesma via de entrega — a internet — e serem frequentemente vistos no mesmo ecrã, através da mesma Smart TV ou do mesmo Fire TV Stick. Do ponto de vista do utilizador, ambos aparecem como \"uma app na televisão\", o que esbate a diferença estrutural entre eles. Antes da internet se tornar a via dominante de entrega de televisão, a distinção era mais óbvia: tinhas o cabo ou satélite para canais ao vivo, e alugavas ou compravas filmes separadamente para conteúdo por catálogo. A internet trouxe os dois modelos para o mesmo ecrã, mas não os fundiu — continuam a ser, estruturalmente, produtos diferentes por baixo da superfície." },
      { type: "p", text: "Perceber esta origem ajuda a explicar também porque é que nenhuma plataforma de streaming tradicional, por mais que cresça o seu catálogo, tende a adicionar canais ao vivo de televisão generalista — não é o modelo de negócio para o qual foram desenhadas, e replicar a complexidade de licenciamento de canais ao vivo exigiria uma estrutura completamente diferente da que já têm otimizada para conteúdo por catálogo." },
      { type: "h2", text: "Canais internacionais: a lacuna que nenhum streaming preenche" },
      { type: "p", text: "Para quem tem família ou ligação a outros países — um cenário comum em Portugal, com comunidades emigrantes espalhadas pela Europa, América e África — o IPTV resolve uma necessidade muito específica que nenhuma plataforma de streaming aborda: acompanhar canais de notícias, entretenimento ou desporto de outro país, em tempo real, tal como se estivesses fisicamente lá. Isto é particularmente valioso para acompanhar eventos ao vivo, eleições, ou simplesmente manter a ligação cultural ao país de origem através da televisão do dia a dia, algo que nenhuma biblioteca de streaming por catálogo consegue replicar." },
      { type: "h2", text: "Perguntas frequentes sobre IPTV e streaming" },
      { type: "h3", text: "Preciso de cancelar as minhas subscrições de streaming se subscrever IPTV?" },
      { type: "p", text: "Não. Os dois serviços funcionam de forma independente e cobrem necessidades diferentes — a maioria dos utilizadores mantém ambos em paralelo, precisamente porque resolvem problemas distintos, como explicado ao longo deste artigo." },
      { type: "h3", text: "O catálogo de filmes e séries do IPTV é comparável ao da Netflix?" },
      { type: "p", text: "Não da mesma forma — o catálogo VOD incluído num plano IPTV tende a ser mais vasto em quantidade de títulos, mas sem o mesmo nível de produção própria exclusiva que caracteriza as grandes plataformas de streaming. Serve melhor como complemento do que como substituto direto." },
      { type: "h3", text: "Vale a pena mudar de IPTV para streaming se só me interessar desporto?" },
      { type: "p", text: "Não — é precisamente o inverso. Se o teu interesse principal é desporto ao vivo, o IPTV é a ferramenta certa; nenhuma plataforma de streaming por catálogo tradicional transmite competições desportivas em direto da mesma forma." },
      { type: "h3", text: "Consigo usar IPTV e streaming no mesmo dispositivo, ao mesmo tempo?" },
      { type: "p", text: "Sim, ambos são apenas aplicações diferentes no mesmo ecrã — Smart TV, Fire TV Stick ou telemóvel. Não há qualquer incompatibilidade técnica entre ter as duas instaladas e usá-las em momentos diferentes do dia." },
      { type: "h3", text: "Qual devo subscrever primeiro, se só puder ter um por agora?" },
      { type: "p", text: "Depende do teu consumo habitual: se raramente vês desporto ao vivo ou canais internacionais, mantém o streaming; se sentes falta de conteúdo ao vivo com regularidade, o IPTV tende a resolver uma lacuna maior no teu dia a dia." },
      { type: "p", text: "Se quiseres experimentar esta combinação, consulta os nossos [planos e preços](/planos) para veres qual duração faz mais sentido, mantendo as tuas subscrições de streaming atuais em paralelo." },
    ],
  },
  {
    slug: "quanto-custa-iptv-portugal-2026",
    title: "Quanto Custa Realmente o IPTV em Portugal? (Preços 2026)",
    excerpt: "Uma análise honesta dos preços médios de mercado, e como reconhecer uma oferta boa demais para ser verdade.",
    date: "2026-09-14",
    readingTime: "9 min",
    category: "Guias",
    coverIcon: "tag",
    cover: "/images/quanto-custa-iptv-portugal-2026.webp",
    content: [
      { type: "p", text: "Perguntar \"quanto custa o IPTV em Portugal\" é como perguntar \"quanto custa um carro\" — a resposta varia imenso consoante o que estás realmente a comparar. Este artigo dá-te números concretos de mercado em 2026, explica porque é que dois fornecedores com preços parecidos podem oferecer experiências completamente diferentes, e mostra como reconhecer uma oferta boa demais para ser verdade antes de perderes dinheiro." },
      { type: "h2", text: "Faixas de preço reais em Portugal, por duração" },
      { type: "p", text: "Com base na observação de fornecedores focados no mercado português, estas são as faixas de preço realistas para um serviço de qualidade razoável em 2026:" },
      { type: "ul", items: [
        "Plano mensal: entre €7 e €13, sem fidelização.",
        "Plano trimestral (3 meses): entre €20 e €25, equivalente a cerca de €7–8/mês.",
        "Plano semestral (6 meses): entre €35 e €40, equivalente a cerca de €6–7/mês.",
        "Plano anual (12 meses): entre €45 e €60, equivalente a cerca de €4–5/mês.",
      ] },
      { type: "p", text: "Repara no padrão: quanto mais longo o compromisso, menor o custo mensal equivalente — o que faz sentido, já que o fornecedor reduz custos administrativos e garante receita antecipada. Ainda assim, recomendamos sempre começar por um plano mensal ou trimestral para testares a estabilidade antes de avançares para um compromisso anual." },
      { type: "h2", text: "Porque é que o número de canais não explica a diferença de preço" },
      { type: "p", text: "Se reparares, quase todos os fornecedores anunciam números de canais semelhantes — \"+20.000 canais\", \"90.000 filmes e séries\" — independentemente do preço que cobram. Isto acontece porque muitos compram acesso aos mesmos feeds de origem através de distribuidores intermédios, o chamado modelo de \"painéis\" IPTV. A diferença real de preço não está, portanto, no catálogo anunciado, mas em três fatores muito menos visíveis:" },
      { type: "ul", items: [
        "Quantos utilizadores partilham o mesmo servidor físico — quanto mais utilizadores por servidor, mais barato é operar, mas pior é a estabilidade em hora de pico.",
        "Se existe infraestrutura de redundância (failover automático) para os momentos de maior tráfego, como jogos de futebol grandes.",
        "O tamanho e qualidade da equipa de suporte técnico disponível para resolver problemas rapidamente.",
      ] },
      { type: "h2", text: "O sinal de alerta mais importante: planos anuais anormalmente baratos" },
      { type: "p", text: "Se vires um plano anual anunciado por menos de €20, vale a pena desconfiar seriamente. Fazendo as contas: a esse preço, o fornecedor recebe menos de €1,70 por mês por cliente — um valor que, depois de descontados custos de servidores, largura de banda e licenciamento de conteúdo, deixa praticamente nada para manter uma infraestrutura de qualidade ou uma equipa de suporte a funcionar. Na prática, estes serviços sobrevivem sobrecarregando servidores com muito mais utilizadores do que seria razoável, e muitos simplesmente desaparecem dentro de poucos meses, levando o teu pagamento com eles e sem qualquer via de reembolso." },
      { type: "h2", text: "Cuidado com ofertas \"vitalícias\"" },
      { type: "p", text: "Outro sinal de alerta clássico são as ofertas de acesso \"para sempre\" por um único pagamento, normalmente entre €50 e €100. Este modelo de negócio não é matematicamente sustentável: qualquer serviço IPTV tem custos contínuos e recorrentes de servidores, largura de banda e licenciamento — custos que não desaparecem depois do primeiro ano. Um fornecedor que promete acesso vitalício por um pagamento único está, na prática, a assumir que vai deixar de operar antes de esses custos se tornarem insustentáveis, ou simplesmente a planear desaparecer com o teu dinheiro." },
      { type: "h2", text: "Como avaliar se um preço é justo" },
      { type: "p", text: "Em vez de procurares o preço mais baixo possível, compara sempre o preço com o que está efetivamente incluído: número de dispositivos em simultâneo, existência de suporte em português, política de reembolso publicada, e — mais importante — a possibilidade de testar a estabilidade antes de te comprometeres com um plano longo. Um preço ligeiramente mais alto que vem acompanhado destas garantias vale, quase sempre, mais do que um preço mínimo sem qualquer transparência." },
      { type: "h2", text: "O que está incluído nos nossos planos" },
      { type: "p", text: "Os nossos planos seguem exatamente estas faixas de mercado, com transparência total sobre o que cada duração inclui — desde o número de dispositivos simultâneos até às funcionalidades extra como catch-up TV e prioridade de suporte nos planos mais longos. Podes ver [todos os detalhes na página de planos](/planos), lado a lado, sem letras pequenas escondidas." },
      { type: "h2", text: "Custos escondidos a que deves prestar atenção" },
      { type: "p", text: "Para além do preço base do plano, alguns fornecedores acrescentam custos que só descobres depois de já teres decidido subscrever. O mais comum é o custo por dispositivo adicional em simultâneo — se precisares de ver em duas televisões ao mesmo tempo em casas diferentes, ou partilhares o acesso com família, confirma antecipadamente quanto custa cada dispositivo extra além do incluído no plano base. Outro custo menos óbvio é a taxa de reativação em caso de troca de televisão ou dispositivo, aplicável sobretudo em métodos de emparelhamento por endereço MAC como a Smart IPTV." },
      { type: "p", text: "Antes de assinares, pede sempre uma lista completa e por escrito de qualquer custo adicional possível, para poderes comparar o custo total real entre fornecedores, e não apenas o preço de anúncio mais visível." },
      { type: "h2", text: "Aproveitar promoções sem cair em armadilhas" },
      { type: "p", text: "É comum encontrares promoções sazonais, sobretudo antes do início de épocas desportivas ou em datas como Black Friday. Estas promoções podem representar poupança genuína, mas vale a pena confirmar dois pontos antes de avançares apenas pelo desconto: se o preço promocional se mantém nas renovações seguintes ou sobe automaticamente depois do primeiro período, e se a promoção reduz também a qualidade do serviço (por exemplo, menos dispositivos incluídos ou servidores diferentes dos habituais). Uma promoção genuína não deve exigir concessões escondidas em troca do desconto." },
      { type: "h2", text: "Perguntas frequentes sobre preços de IPTV" },
      { type: "h3", text: "Vale a pena pagar mais por um plano anual logo à partida?" },
      { type: "p", text: "Só depois de teres confirmado a estabilidade do serviço num plano mais curto. Recomendamos sempre testar primeiro um mês ou um trimestre antes de te comprometeres com doze meses." },
      { type: "h3", text: "Porque é que alguns planos incluem mais dispositivos do que outros?" },
      { type: "p", text: "É uma forma de recompensar compromissos mais longos — quanto maior a duração escolhida, mais dispositivos simultâneos costumam estar incluídos sem custo extra, refletindo a redução de custo por mês que o fornecedor já está a aplicar." },
      { type: "h3", text: "Um preço mais alto garante sempre melhor qualidade?" },
      { type: "p", text: "Não necessariamente — o preço por si só não é garantia de nada. O que importa é a combinação de preço razoável dentro da faixa de mercado, transparência sobre o serviço e possibilidade real de testares antes de pagares um plano longo." },
      { type: "h3", text: "Os preços de IPTV tendem a subir ou a descer nos próximos anos?" },
      { type: "p", text: "É expectável que se mantenham relativamente estáveis dentro das faixas atuais, já que os custos principais (largura de banda, servidores, licenciamento de conteúdo) tendem a acompanhar a inflação geral, sem grandes disrupções previstas no curto prazo para este modelo de negócio." },
      { type: "h3", text: "Existe diferença de preço entre subscrever diretamente ou através de um revendedor?" },
      { type: "p", text: "Pode existir, mas nem sempre significa pior qualidade — muitos revendedores oferecem preços competitivos e bom suporte. O que importa não é a estrutura por trás do preço, mas sim os critérios de transparência e estabilidade já discutidos ao longo deste guia." },
      { type: "h3", text: "Compensa negociar diretamente um desconto com o fornecedor?" },
      { type: "p", text: "Alguns fornecedores têm flexibilidade em planos mais longos ou para clientes que voltam a renovar, sobretudo em campanhas sazonais — nunca custa perguntar diretamente antes de pagares o preço de tabela." },
      { type: "h2", text: "Como o número de dispositivos afeta o preço final" },
      { type: "p", text: "Um fator que muitas comparações de preço ignoram é o número de dispositivos em simultâneo incluído em cada plano — comparar apenas o preço mensal sem ter isto em conta pode levar-te a uma conclusão errada sobre qual oferta é realmente mais vantajosa. Um plano mensal com apenas um dispositivo incluído pode parecer mais barato do que um plano trimestral com três dispositivos, mas se precisares de ver em mais do que um ecrã em casa, o custo de adicionar dispositivos extra ao plano mais barato pode rapidamente ultrapassar o preço do plano que já os inclui de origem. Antes de comparares preços entre fornecedores, normaliza sempre pela mesma quantidade de dispositivos simultâneos, para uma comparação justa." },
      { type: "h2", text: "IPTV vs. televisão por cabo: a conta ao final de um ano" },
      { type: "p", text: "Para tornar a comparação mais concreta, vale a pena olhar para o custo acumulado ao longo de doze meses. Um pacote de televisão por cabo com desporto incluído ronda tipicamente os €70 a €90 mensais em Portugal, totalizando entre €840 e €1.080 por ano, normalmente com fidelização contratual de 12 a 24 meses e equipamento fornecido pela operadora que tens de devolver se cancelares. Um plano IPTV anual, mesmo no topo da faixa de preço realista (€60), representa uma poupança superior a €700 ao longo do mesmo período, sem fidelização e sem depender de equipamento específico do fornecedor — usas o teu próprio dispositivo, seja ele uma Smart TV, um Fire TV Stick ou um telemóvel." },
      { type: "p", text: "Esta diferença de custo é, para muitos portugueses, o principal motivo para experimentar IPTV pela primeira vez — não a curiosidade tecnológica, mas a poupança concreta e mensurável ao final do ano, sem abdicar do acesso aos mesmos canais desportivos e nacionais que já usavam antes." },
      { type: "p", text: "Para complementar esta análise, lê também o nosso [guia sobre como escolher o melhor serviço IPTV em Portugal](/blog/melhor-iptv-portugal-2026), que aprofunda os critérios técnicos que devem pesar tanto quanto o preço na tua decisão final." },
    ],
  },
  {
    slug: "resolver-buffering-cortes-iptv",
    title: "Como Resolver Buffering e Cortes no IPTV",
    excerpt: "As causas mais comuns de interrupções no IPTV, e o que verificar antes de assumires que o serviço é mau.",
    date: "2026-09-12",
    readingTime: "9 min",
    category: "Tutoriais",
    coverIcon: "signal",
    cover: "/images/resolver-buffering-cortes-iptv.webp",
    content: [
      { type: "p", text: "Buffering e cortes são, sem dúvida, a queixa mais comum de quem usa IPTV — e também a mais mal-diagnosticada. É fácil assumir imediatamente que \"o serviço é mau\", mas na maioria dos casos o problema tem origem numa de várias causas facilmente identificáveis, e muitas vezes resolvíveis em minutos sem precisares de mudar de fornecedor. Este guia percorre essas causas por ordem de probabilidade, começando pelas mais simples de verificar." },
      { type: "h2", text: "Primeiro: confirma a velocidade real da tua internet" },
      { type: "p", text: "O ponto de partida mais óbvio, e ainda assim o mais frequentemente ignorado, é a velocidade efetiva da tua ligação à internet. Para conteúdo em Full HD sem interrupções, recomenda-se uma velocidade mínima estável de 15 a 20 Mbps; para 4K, o mínimo razoável sobe para 25 Mbps ou mais. Repara na palavra \"estável\" — não basta que o teu plano contratado prometa 100 Mbps se, na prática, a velocidade oscilar ou cair significativamente durante as horas de maior utilização na tua zona." },
      { type: "p", text: "Faz um teste de velocidade diretamente no dispositivo onde vês IPTV (não apenas no telemóvel, que pode estar numa parte da casa com melhor sinal), idealmente à mesma hora em que costumas sentir os cortes. Se o resultado estiver significativamente abaixo do que o teu plano promete, o problema pode estar na tua operadora de internet, não no serviço IPTV." },
      { type: "h2", text: "Segundo: elimina a concorrência por largura de banda em casa" },
      { type: "p", text: "Mesmo com uma boa velocidade contratada, a largura de banda disponível é partilhada por tudo o que está ligado à tua rede ao mesmo tempo. Downloads em curso, atualizações automáticas de dispositivos, outra pessoa a ver streaming em 4K noutra divisão, ou várias câmaras de videovigilância a transmitir continuamente podem reduzir drasticamente o que sobra para o teu stream de IPTV. Antes de um momento importante — como um jogo de futebol — vale a pena confirmar que não há downloads pesados a decorrer em segundo plano noutros dispositivos da casa." },
      { type: "h2", text: "Terceiro: liga por cabo de rede sempre que possível" },
      { type: "p", text: "O Wi-Fi introduz variáveis que o cabo de rede elimina por completo: interferência de outras redes vizinhas, paredes espessas a bloquear sinal, distância ao router e até interferência de eletrodomésticos como micro-ondas. Se o teu dispositivo de IPTV (Smart TV, Android Box, Fire TV Stick) estiver fisicamente próximo do router, ou se conseguires passar um cabo de rede até ele, a diferença de estabilidade costuma ser imediata e notória — especialmente em casas mais antigas com paredes de betão ou routers colocados longe da sala principal." },
      { type: "ul", items: [
        "Se usares Wi-Fi, tenta posicionar o router o mais próximo possível, sem obstáculos diretos entre ele e o dispositivo.",
        "Evita ligar o dispositivo de IPTV à rede de 2.4GHz se o router oferecer também 5GHz — esta última tem menos interferência em zonas urbanas densas.",
        "Reinicia o router periodicamente, sobretudo se estiver ligado há muitas semanas sem interrupção.",
      ] },
      { type: "h2", text: "Quarto: identifica se o problema é do dispositivo, não da rede" },
      { type: "p", text: "Dispositivos mais antigos ou com pouca memória disponível (sobretudo Smart TVs com vários anos e Android Boxes de gama muito baixa) podem ter dificuldade em processar conteúdo em 4K ou em manter várias aplicações abertas em simultâneo. Se sentires que o problema é sempre no mesmo dispositivo, mas outro aparelho na mesma rede reproduz sem qualquer problema, o gargalo provavelmente está no hardware, não na ligação. Nesse caso, experimenta fechar outras aplicações em segundo plano, reiniciar o dispositivo, ou considerar um Fire TV Stick ou Android Box dedicado como alternativa mais potente." },
      { type: "h2", text: "Quinto: percebe quando o problema é mesmo do fornecedor" },
      { type: "p", text: "Depois de eliminares as causas anteriores, há um padrão que aponta claramente para um problema do lado do servidor: cortes que acontecem especificamente em horários de pico (normalmente entre as 20h e as 22h, ou durante jogos e eventos importantes), enquanto o resto do dia a experiência é perfeitamente normal. Isto indica que o servidor do fornecedor não tem capacidade suficiente para o número de utilizadores ligados simultaneamente nesses momentos — um problema de infraestrutura que está completamente fora do teu controlo." },
      { type: "p", text: "Nesse cenário, a solução não está do teu lado. As opções razoáveis são: pedir ao suporte técnico uma troca para um servidor alternativo (muitos fornecedores, incluindo o nosso, oferecem vários servidores precisamente para este fim), ou, se o problema persistir de forma consistente, considerar mudar de fornecedor." },
      { type: "h2", text: "Metodologia para isolar a causa exata" },
      { type: "p", text: "Se já tentaste as verificações anteriores e o problema persiste, vale a pena seguir um processo mais sistemático em vez de tentares tudo ao mesmo tempo. Começa por testar um único canal, sempre à mesma hora do dia durante dois ou três dias seguidos, e regista se o problema se repete de forma consistente ou é esporádico. Depois, testa esse mesmo canal por cabo de rede (mesmo que normalmente uses Wi-Fi), para eliminares de vez a rede sem fios como variável. Por fim, testa noutro dispositivo diferente na mesma rede — se o segundo dispositivo reproduzir sem problemas, o primeiro é provavelmente a causa; se ambos falharem da mesma forma, a causa está na rede ou no servidor." },
      { type: "p", text: "Este processo, embora exija alguma paciência, elimina sistematicamente cada variável possível e permite-te apresentar ao suporte técnico informação precisa, em vez de uma descrição vaga como \"corta às vezes\" — o que acelera muito a resolução do problema." },
      { type: "h2", text: "Ajustar as definições de qualidade dentro da app" },
      { type: "p", text: "Muitas aplicações de IPTV modernas, incluindo o TiviMate e o IPTV Smarters Pro, permitem ajustar manualmente definições de buffer e cache de reprodução. Se sentires cortes momentâneos frequentes mas rápidos de recuperar, aumentar ligeiramente o valor de buffer (pré-carregamento) nas definições da app pode resolver o problema à custa de um pequeno atraso adicional sempre que mudas de canal — uma troca que compensa em ligações menos estáveis. Estas definições encontram-se normalmente no menu de definições avançadas ou de reprodução da própria aplicação, e variam ligeiramente de app para app." },
      { type: "h2", text: "Checklist rápida antes de contactares o suporte" },
      { type: "p", text: "Para poupares tempo quando contactares o suporte técnico, reúne primeiro esta informação — vai acelerar bastante o diagnóstico:" },
      { type: "ul", items: [
        "Resultado de um teste de velocidade feito no próprio dispositivo, no momento em que o problema ocorre.",
        "Se o problema acontece em todos os canais ou apenas nalguns específicos.",
        "Se o problema acontece a horas específicas ou em qualquer altura do dia.",
        "Se testaste com cabo de rede em vez de Wi-Fi, e se isso mudou alguma coisa.",
        "O modelo exato do dispositivo onde vês o conteúdo (Smart TV, marca e modelo; ou Fire TV Stick, geração).",
      ] },
      { type: "h2", text: "VPN e IPTV: ajuda ou atrapalha?" },
      { type: "p", text: "Um tópico que gera confusão é o uso de VPN em conjunto com IPTV. Em alguns casos raros, uma VPN pode efetivamente melhorar a estabilidade, contornando limitações de tráfego (throttling) que algumas operadoras de internet aplicam especificamente a certos tipos de streaming em horas de pico. Na maioria dos casos, porém, uma VPN introduz uma camada adicional de latência e possível instabilidade, já que o teu tráfego passa por um servidor intermédio antes de chegar ao destino final. Se estiveres a usar uma VPN e a sentir cortes, o primeiro teste simples é desativá-la temporariamente e confirmar se a estabilidade melhora — se sim, a VPN está a ser a causa, não a solução." },
      { type: "h2", text: "Quando o problema está mesmo no teu router" },
      { type: "p", text: "Um router antigo ou mal configurado é uma causa frequentemente ignorada de instabilidade em IPTV, sobretudo em casas onde o equipamento tem vários anos e nunca foi atualizado. Sinais de que o router pode ser o problema incluem: instabilidade que afeta vários dispositivos diferentes na mesma rede, não apenas o de IPTV; a rede a ficar lenta ou a cair depois de várias horas ligada continuamente, exigindo reinício frequente; e diferença notória de estabilidade entre dispositivos ligados por cabo de rede e os ligados por Wi-Fi, mesmo estando fisicamente próximos do router. Routers fornecidos por operadoras portuguesas com vários anos de uso beneficiam frequentemente de uma simples atualização de firmware, disponível nas definições administrativas do próprio aparelho, ou nalguns casos de substituição direta." },
      { type: "h2", text: "Perguntas frequentes sobre buffering em IPTV" },
      { type: "h3", text: "Trocar de servidor resolve sempre o problema?" },
      { type: "p", text: "Na maioria dos casos em que a causa é sobrecarga do servidor original, sim. Mas se o problema tiver origem na tua própria rede ou dispositivo, trocar de servidor não muda nada — daí a importância de eliminares primeiro as causas do teu lado, como descrito ao longo deste artigo." },
      { type: "h3", text: "Faz diferença usar a app em modo Xtream Codes ou por lista M3U?" },
      { type: "p", text: "Tecnicamente, ambos os métodos acedem ao mesmo conteúdo através do mesmo servidor, pelo que a estabilidade deve ser equivalente. Eventuais diferenças percebidas costumam estar relacionadas com a própria app usada, não com o método de configuração escolhido." },
      { type: "p", text: "Com esta informação, o [nosso suporte](/contacto) consegue diagnosticar muito mais rapidamente se o problema está do teu lado ou do nosso, e agir em conformidade — seja uma recomendação de configuração ou uma troca de servidor. Se ainda não confirmaste a compatibilidade do teu aparelho, consulta também o nosso [guia de dispositivos](/dispositivos) para veres a configuração recomendada para o teu caso específico." },
    ],
  },
  {
    slug: "iptv-gratis-vale-o-risco",
    title: "IPTV Grátis: Vale o Risco? O Que Precisas de Saber",
    excerpt: "Uma análise honesta sobre listas IPTV gratuitas: o que ganhas, o que arriscas e quando faz sentido pagar.",
    date: "2026-09-08",
    readingTime: "8 min",
    category: "Legal",
    coverIcon: "shield",
    cover: "/images/iptv-gratis-vale-o-risco.webp",
    content: [
      { type: "p", text: "É completamente natural procurar \"IPTV grátis\" antes de considerares pagar por qualquer serviço — ninguém quer gastar dinheiro sem saber se a experiência vale a pena. O problema é que a maioria das ofertas gratuitas encontradas online não funcionam da forma que o marketing sugere, e algumas trazem riscos reais que vale a pena perceber antes de instalares qualquer coisa. Este artigo faz uma análise honesta: o que ganhas, o que arriscas, e quando é que realmente faz mais sentido pagar por um serviço transparente." },
      { type: "h2", text: "Como funcionam as listas IPTV gratuitas partilhadas publicamente" },
      { type: "p", text: "A maioria do conteúdo \"IPTV grátis\" que encontras online consiste em listas M3U partilhadas publicamente em fóruns, grupos ou sites dedicados. Estas listas apontam para servidores que qualquer pessoa com o link consegue usar — sem controlo sobre quantas pessoas estão ligadas ao mesmo tempo. É precisamente aqui que surge o primeiro problema prático: um servidor pensado para algumas centenas de utilizadores pode rapidamente ter milhares de pessoas ligadas em simultâneo assim que a lista se espalha online." },
      { type: "h2", text: "O que realmente aconteceria com a qualidade" },
      { type: "p", text: "Na prática, uma lista gratuita sobrecarregada traduz-se em três problemas consistentes: cortes frequentes e imprevisíveis, mesmo fora de horas de pico; qualidade de imagem que oscila ou baixa automaticamente de resolução para compensar a falta de capacidade do servidor; e canais que simplesmente deixam de funcionar de um dia para o outro, sem qualquer aviso ou explicação — porque ninguém tem responsabilidade contratual de manter esse servidor a funcionar. Não há suporte técnico a quem recorrer quando algo falha, porque, tecnicamente, não estás a pagar por nenhum serviço com garantias." },
      { type: "h2", text: "O risco de segurança que poucas pessoas consideram" },
      { type: "p", text: "Para além da instabilidade, há um risco menos falado mas igualmente real: algumas aplicações que prometem canais gratuitos, sobretudo as distribuídas fora das lojas oficiais (Google Play, App Store, lojas de Smart TV), vêm acompanhadas de publicidade agressiva, ou pedem permissões excessivas no dispositivo que não têm qualquer relação com reproduzir vídeo — acesso a contactos, localização precisa, ou capacidade de instalar outras aplicações sem confirmação. Antes de instalares qualquer app fora das lojas oficiais, vale sempre a pena parar e questionar porque é que uma simples aplicação de vídeo precisaria desse tipo de acesso ao teu telemóvel ou televisão." },
      { type: "ul", items: [
        "Evita instalar apps de IPTV fora das lojas oficiais, a menos que a fonte seja explicitamente recomendada por um fornecedor identificável e com reputação.",
        "Revê sempre as permissões pedidas durante a instalação — desconfia de pedidos que não fazem sentido para reproduzir vídeo.",
        "Desconfia de anúncios ou pop-ups excessivos dentro da app, um sinal comum de monetização agressiva às custas da tua privacidade.",
      ] },
      { type: "h2", text: "Quando faz sentido usar uma opção gratuita, e quando não faz" },
      { type: "p", text: "Se o teu único objetivo é confirmar, de forma pontual e sem compromisso, que a tecnologia IPTV funciona bem no teu dispositivo específico — por exemplo, ver se a tua Smart TV consegue correr uma app de IPTV sem travar — uma lista gratuita conhecida e vinda de uma fonte confiável pode servir esse propósito muito limitado. Mas se o objetivo é ter uma experiência estável para uso diário, sobretudo para acompanhar desporto ao vivo ou canais portugueses de forma consistente, uma lista gratuita partilhada publicamente simplesmente não tem a infraestrutura para sustentar isso." },
      { type: "h2", text: "Teste grátis oficial vs. lista pirata: não são a mesma coisa" },
      { type: "p", text: "Vale a pena distinguir claramente entre dois conceitos que por vezes se confundem: um período de teste oferecido oficialmente por um fornecedor identificável, com preços públicos e suporte técnico, e uma \"lista IPTV grátis\" anónima partilhada num fórum ou grupo online sem qualquer responsabilidade associada. O primeiro é uma prática comercial legítima e comum — tal como acontece com subscrições de streaming ou software, permite-te avaliar a qualidade real antes de te comprometeres financeiramente, com um fornecedor que tens forma de contactar caso algo corra mal. O segundo não tem qualquer garantia, responsabilidade ou continuidade associada, precisamente porque ninguém identificável está por trás dele." },
      { type: "p", text: "Um exemplo simples ilustra a diferença: se uma lista gratuita partilhada online deixar de funcionar amanhã, não há absolutamente nada que possas fazer — não pagaste a ninguém, não há suporte a contactar, e provavelmente nem sabes quem geria o servidor. Se um teste oficial de um fornecedor identificável falhar em cumprir o prometido, tens pelo menos a possibilidade de reclamar, pedir explicações ou simplesmente não avançar para um plano pago." },
      { type: "h2", text: "A alternativa mais segura: pedir um teste a um fornecedor transparente" },
      { type: "p", text: "Se o que procuras é confirmar a qualidade antes de te comprometeres financeiramente, a alternativa mais segura não é uma lista gratuita anónima, mas sim pedir diretamente a um fornecedor com preços públicos e termos claros um período de avaliação. Obténs exatamente a mesma confirmação — a app funciona no teu dispositivo, a imagem é estável, os canais que procuras estão disponíveis — mas com a garantia de que, se decidires continuar, estás a pagar por um servidor dimensionado para o número de clientes que realmente tem, com suporte técnico disponível caso algo corra mal." },
      { type: "h2", text: "Como reconhecer um fornecedor pago que vale a pena" },
      { type: "p", text: "Nem todos os serviços pagos são automaticamente melhores do que uma lista gratuita — o que fazes é procurar sinais concretos de transparência e sustentabilidade:" },
      { type: "ul", items: [
        "Preços públicos e claros, dentro da faixa realista de mercado (nem demasiado baratos, nem inflacionados).",
        "Termos de utilização e política de reembolso publicados e acessíveis antes de pagares.",
        "Disponibilidade para confirmar, por escrito, quais canais específicos estão incluídos.",
        "Suporte técnico em português, contactável antes mesmo de subscreveres, para tirares dúvidas.",
      ] },
      { type: "h2", text: "O custo real de \"poupar\" com uma lista gratuita" },
      { type: "p", text: "Vale a pena olhar para o custo real, não apenas financeiro, de depender de uma lista gratuita instável a longo prazo. O tempo gasto a procurar constantemente uma nova lista sempre que a anterior deixa de funcionar, a frustração de perder um jogo importante por causa de cortes, e o risco de segurança associado a instalar apps de origem duvidosa somam-se a um custo que raramente é contabilizado quando comparado com um plano pago de €7 a €13 por mês. Para muitas pessoas, esse valor mensal relativamente baixo compensa amplamente a estabilidade, o suporte técnico e a tranquilidade de um serviço com responsabilidade identificável por trás." },
      { type: "h2", text: "Já experimentaste uma lista gratuita e não correu bem? Aqui está o que fazer" },
      { type: "p", text: "Se já tiveste uma má experiência com uma lista gratuita — cortes constantes, canais que desapareceram, ou uma app com comportamento suspeito — o primeiro passo é simplesmente desinstalar essa aplicação e, se a instalaste fora das lojas oficiais, verificar as permissões que concedeste ao dispositivo e revogá-las nas definições do sistema. Não há necessidade de qualquer ação adicional além disso na maioria dos casos: o risco associado a estas listas está sobretudo na instabilidade e nas permissões da app, não em consequências legais para quem apenas testou um serviço gratuito disponível publicamente." },
      { type: "p", text: "Depois disso, se ainda quiseres experimentar IPTV de forma séria, o caminho mais seguro é exatamente o que descrevemos acima: procurar um fornecedor identificável, com preços públicos, e pedir um período de teste antes de decidires continuar." },
      { type: "h2", text: "Perguntas frequentes sobre IPTV grátis" },
      { type: "h3", text: "Uma lista gratuita pode conter vírus?" },
      { type: "p", text: "A lista em si (um ficheiro de texto com endereços de canais) não pode conter vírus. O risco está nas aplicações usadas para reproduzir essas listas, sobretudo quando instaladas fora das lojas oficiais — é aí que deves ter mais cuidado." },
      { type: "h3", text: "Porque é que algumas listas gratuitas funcionam bem durante alguns dias e depois pioram?" },
      { type: "p", text: "Porque à medida que mais pessoas descobrem e partilham a mesma lista, mais utilizadores se ligam ao mesmo servidor em simultâneo, ultrapassando rapidamente a capacidade original para a qual foi dimensionado." },
      { type: "h3", text: "Um teste grátis oficial pede sempre dados de cartão de crédito?" },
      { type: "p", text: "Não necessariamente — muitos fornecedores, incluindo período de avaliação através do nosso suporte, não exigem dados de pagamento antecipados para confirmares a qualidade do serviço." },
      { type: "h3", text: "Quanto tempo costuma durar um período de teste oficial?" },
      { type: "p", text: "Varia entre fornecedores, mas costuma ser suficiente para testares os canais principais e a estabilidade em pelo menos um momento de maior utilização, como uma noite de jogo — o que já dá uma boa indicação da qualidade geral do serviço." },
      { type: "h3", text: "Usar uma lista gratuita uma única vez traz algum risco a longo prazo?" },
      { type: "p", text: "O risco principal está limitado ao momento de utilização — instabilidade e eventuais permissões concedidas à app instalada. Desinstalando a app e revendo permissões depois do teste, não há qualquer risco residual continuado." },
      { type: "h3", text: "Fóruns que partilham listas gratuitas são de confiança?" },
      { type: "p", text: "Varia muito de caso para caso, e não há forma fiável de verificar antecipadamente. Trata sempre estas fontes com mais cautela do que trataria um fornecedor identificável com histórico e canais de contacto verificáveis." },
      { type: "h3", text: "Recomendam listas gratuitas para quem só quer ver um evento único?" },
      { type: "p", text: "Mesmo para um evento pontual, um teste oficial junto de um fornecedor transparente continua a ser mais fiável do que uma lista partilhada publicamente, precisamente porque um evento importante costuma ser o momento em que servidores sobrecarregados falham mais." },
      { type: "p", text: "Se decidires optar por um serviço pago e transparente em vez de arriscares uma lista gratuita instável, consulta os nossos [planos e preços](/planos), ou [fala connosco](/contacto) com qualquer dúvida antes de decidires — preferimos esclarecer tudo antecipadamente do que teres uma má surpresa depois." },
    ],
  },
  {
    // AGENDADO: publica-se sozinho às 00:55 UTC de 22/set/2026 (daqui a
    // ~30 min a partir de agora), sem precisares de fazer nada.
    slug: "ibo-player-vs-smart-iptv",
    title: "IBO Player vs. Smart IPTV: Qual Escolher para a Tua TV?",
    excerpt: "Comparação direta entre as duas apps mais usadas em Samsung e LG, e quando cada uma faz mais sentido.",
    date: "2026-09-22T00:55:00Z",
    readingTime: "8 min",
    category: "Guias",
    coverIcon: "tv2",
    cover: "/images/ibo-player-vs-smart-iptv.webp",
    content: [
      { type: "p", text: "Se a tua televisão é Samsung ou LG, o IBO Player e a Smart IPTV são normalmente as duas primeiras apps a aparecer em qualquer pesquisa sobre como configurar IPTV nesse ecrã. Ambas resolvem o mesmo problema — associar a tua subscrição à televisão sem precisares de introduzir utilizador e palavra-passe manualmente — mas fazem-no de forma suficientemente diferente para que a escolha entre as duas dependa do teu cenário específico. Esta comparação direta ajuda-te a decidir sem perderes tempo a testar as duas." },
      { type: "h2", text: "Como funciona a Smart IPTV" },
      { type: "p", text: "A Smart IPTV foi, durante muitos anos, a app de referência em televisões Samsung Tizen e LG webOS, precisamente pela simplicidade do seu método de emparelhamento: a app associa a tua subscrição ao endereço MAC físico da própria televisão. Isto significa que, depois de ativada uma única vez, nunca mais precisas de introduzir credenciais — a app reconhece automaticamente que aquele ecrã específico tem acesso. A ativação é feita através do portal siptv.app, geralmente com um pagamento único simbólico associado a essa TV." },
      { type: "p", text: "A limitação direta deste modelo é a rigidez: como a subscrição fica ligada ao hardware específico da televisão, se decidires trocar de TV — ou se a atual avariar — precisas de repetir todo o processo de ativação no novo aparelho, incluindo o pagamento associado a essa nova ativação. Vale também referir que a Smart IPTV tem sido progressivamente removida das lojas oficiais em vários modelos de televisão lançados nos últimos anos, o que significa que nem sempre está disponível para instalação direta." },
      { type: "h2", text: "Como funciona o IBO Player" },
      { type: "p", text: "O IBO Player segue a mesma filosofia geral — emparelhamento automático sem introduzir credenciais manualmente — mas usa uma abordagem tecnicamente diferente: em vez de se associar ao endereço MAC do hardware, gera um Device ID e uma Device Key próprios da conta criada dentro da própria app. Esta diferença, aparentemente pequena, tem uma consequência prática importante: como a identificação não depende do hardware específico da televisão, é mais simples de gerir se precisares de reativar o acesso, ou se quiseres usar a mesma app em mais do que um contexto." },
      { type: "h2", text: "Comparação direta, ponto a ponto" },
      { type: "ul", items: [
        "Método de emparelhamento: Smart IPTV usa o endereço MAC da TV; IBO Player usa Device ID e Device Key próprios da conta.",
        "Flexibilidade ao trocar de televisão: IBO Player é mais simples de reativar; Smart IPTV exige nova ativação associada ao novo hardware.",
        "Disponibilidade nas lojas oficiais: Smart IPTV tem sido removida de vários modelos recentes; o IBO Player mantém-se disponível de forma mais consistente.",
        "Interface e experiência de utilização: ambas oferecem grelhas de canais e EPG semelhantes, sem diferenças relevantes no dia a dia.",
        "Custo de ativação: ambas seguem modelos de ativação semelhantes, geralmente incluídos ou associados à subscrição do teu fornecedor de IPTV.",
      ] },
      { type: "h2", text: "Qual deves escolher: guia rápido de decisão" },
      { type: "h3", text: "Escolhe Smart IPTV se..." },
      { type: "p", text: "...já a tens instalada e a funcionar corretamente na tua televisão atual, sem planos de a substituir tão cedo. Não há qualquer motivo prático para migrares de uma configuração que já funciona bem apenas por causa desta comparação — a estabilidade e a qualidade de imagem são idênticas entre as duas apps, já que ambas dependem do mesmo servidor do teu fornecedor de IPTV, não da app em si." },
      { type: "h3", text: "Escolhe IBO Player se..." },
      { type: "p", text: "...estás a configurar IPTV pela primeira vez, prevês trocar de televisão nos próximos meses, ou reparaste que a Smart IPTV não está disponível na loja do teu modelo específico. A flexibilidade adicional de não depender do endereço MAC físico poupa-te um passo caso precises de reconfigurar o acesso no futuro." },
      { type: "h2", text: "E se nenhuma das duas estiver disponível na tua TV?" },
      { type: "p", text: "Em modelos mais recentes onde nenhuma destas apps aparece na loja oficial, existem alternativas diretas como o Flix IPTV (também pensado para Samsung e LG) ou apps multiplataforma como o GSE Smart IPTV. Podes comparar todas as opções disponíveis, incluindo requisitos específicos de cada uma, no nosso [catálogo completo de aplicações](/aplicacoes). Se preferires uma abordagem completamente diferente, ligar um Fire TV Stick ou Android TV Box à tua televisão por HDMI contorna por completo estas limitações de loja de apps nativa — o nosso [guia de dispositivos](/dispositivos) explica esse processo passo a passo." },
      { type: "h2", text: "Interface e experiência do dia a dia: o que realmente notas ao usar" },
      { type: "p", text: "Para além do método técnico de emparelhamento, vale a pena falar da experiência real de navegação, já que é isso que vais usar todos os dias. A Smart IPTV tem uma interface mais minimalista, organizada em grelha simples de canais com EPG sobreposto, sem muitas opções de personalização — o que agrada a quem prefere simplicidade acima de tudo. O IBO Player oferece uma interface ligeiramente mais moderna, com categorias mais visuais e algumas opções adicionais de personalização de favoritos e categorias, mas sem uma curva de aprendizagem significativamente maior. Nenhuma das duas é complicada de usar no dia a dia, e a maioria dos utilizadores adapta-se a qualquer uma delas em poucos minutos." },
      { type: "h2", text: "Processo de reativação: o que muda entre as duas apps" },
      { type: "p", text: "Se alguma vez precisares de reativar o teu acesso — por exemplo, depois de uma reposição de fábrica da televisão, ou ao trocares de aparelho — o processo difere de forma notória entre as duas apps. Na Smart IPTV, como a ativação está ligada ao endereço MAC físico do hardware, uma reposição de fábrica não costuma exigir nova ativação (o MAC mantém-se o mesmo), mas trocar de televisão implica sempre um novo processo de ativação associado ao MAC do novo aparelho, incluindo o respetivo pagamento simbólico no portal siptv.app. No IBO Player, como a identificação está ligada à conta criada dentro da app e não ao hardware, reinstalar a app no mesmo dispositivo ou até mudar de televisão costuma ser mais direto, bastando muitas vezes voltar a associar a mesma conta." },
      { type: "h2", text: "Compatibilidade com modelos mais antigos" },
      { type: "p", text: "Se a tua televisão tiver vários anos, vale a pena confirmar a compatibilidade antes de escolheres entre as duas. Modelos Samsung ou LG lançados há mais de cinco ou seis anos podem ter versões de sistema operativo mais antigas (Tizen ou webOS de gerações anteriores) que já não recebem atualizações de todas as apps mais recentes. Nestes casos, é comum que a Smart IPTV, por ser uma app mais estabelecida e leve, continue a funcionar em modelos onde apps mais recentes como o IBO Player já não são suportadas oficialmente — vale sempre a pena verificar diretamente na loja de aplicações da tua televisão qual das duas aparece disponível para o teu modelo exato antes de decidires." },
      { type: "h2", text: "Perguntas frequentes" },
      { type: "h3", text: "Posso ter as duas apps instaladas ao mesmo tempo na mesma TV?" },
      { type: "p", text: "Sim, tecnicamente não há impedimento em teres ambas instaladas simultaneamente, embora normalmente só precises de emparelhar a tua subscrição a uma delas. Ter as duas disponíveis pode servir como alternativa de recurso caso uma delas apresente problemas pontuais." },
      { type: "h3", text: "Qual das duas tem melhor qualidade de imagem?" },
      { type: "p", text: "Nenhuma — a qualidade de imagem depende inteiramente do servidor do teu fornecedor de IPTV, não da app usada para reproduzir o conteúdo. As duas apps são apenas o \"portal\" de acesso, não a origem do sinal." },
      { type: "h3", text: "E se nenhuma das duas funcionar bem no meu caso específico?" },
      { type: "p", text: "Existem alternativas como o Flix IPTV (também orientado a Samsung e LG) ou apps multiplataforma como o GSE Smart IPTV, disponíveis no nosso [catálogo de aplicações](/aplicacoes). Se persistirem problemas em todas, o mais provável é a causa estar na tua ligação à internet, não nas apps — consulta o nosso [guia sobre buffering e cortes](/blog/resolver-buffering-cortes-iptv)." },
      { type: "h3", text: "Preciso de pagar separadamente por cada uma destas apps?" },
      { type: "p", text: "A app em si costuma ter um custo de ativação simbólico, separado do valor da tua subscrição de IPTV — que continua a ser cobrada pelo teu fornecedor de conteúdo, não pelo criador da app de emparelhamento." },
      { type: "h3", text: "Vale a pena mudar de Smart IPTV para IBO Player só por causa desta comparação?" },
      { type: "p", text: "Não, se já tens tudo a funcionar bem. A migração só compensa se estiveres a enfrentar um problema concreto que a mudança resolveria, como a indisponibilidade da app na tua loja atual ou uma troca de televisão planeada." },
      { type: "h3", text: "As duas apps funcionam com qualquer fornecedor de IPTV, ou só com alguns?" },
      { type: "p", text: "Ambas funcionam com qualquer fornecedor que suporte emparelhamento por MAC address ou por Device ID/Key — não estão limitadas a um fornecedor específico, o que te dá liberdade para as usar independentemente de quem forneça o teu acesso." },
      { type: "h3", text: "Alguma delas tem versão para telemóvel ou computador?" },
      { type: "p", text: "Não de forma nativa — ambas foram desenhadas especificamente para o ambiente de Smart TV Samsung/LG. Para telemóvel ou computador, apps como o IPTV Smarters Pro ou o GSE Smart IPTV são as escolhas mais indicadas." },
      { type: "h2", text: "Conclusão" },
      { type: "p", text: "Na prática, a diferença entre IBO Player e Smart IPTV é menor do que muitas comparações sugerem: ambas fazem o mesmo trabalho essencial, e a qualidade final da tua experiência depende muito mais da qualidade do servidor do teu fornecedor de IPTV do que da app escolhida para emparelhar. Se já tens uma a funcionar, mantém-na; se estás a começar do zero, o IBO Player oferece hoje ligeiramente mais flexibilidade e disponibilidade. Qualquer dúvida sobre qual escolher para o teu modelo específico, [fala com o nosso suporte](/contacto) antes de instalares." },
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
