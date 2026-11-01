// Conteúdo central da landing page. Troque aqui sem mexer na UI.

export const contact = {
  whatsappDisplay: '(12) 99764-2199',
  email: 'mauriliomoreira@camaracaragua.sp.gov.br',
  address: 'Av. Frei Pacífico Wagner, 830 — Centro, Caraguatatuba/SP',
  cep: '11660-280',
  mapsQuery:
    'Câmara Municipal de Caraguatatuba, Av. Frei Pacífico Wagner, 830, Caraguatatuba/SP',
};

export const socials = {
  instagram: 'https://www.instagram.com/mauriliomoreira_/',
  facebook: 'https://www.facebook.com/MaurilioMoreiraCaraguatatuba/',
  youtube: 'https://www.youtube.com/@maurilioconvida7955',
  camara:
    'https://caraguatatuba.sp.leg.br/vereadores-da-casa/maurilio-moreira-de-assis',
};

export const nav = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Bandeiras', href: '/#bandeiras' },
  { label: 'Mandato', href: '/mandato' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Gabinete', href: '/#gabinete' },
];

export type Bandeira = {
  id: string;
  icon: 'inclusao' | 'saude' | 'articulacao' | 'pesca';
  title: string;
  copy: string;
  tags?: string[];
  featured: boolean;
};

// Bandeiras / causas do mandato (destaque visual para Saúde e Inclusão).
export const bandeiras: Bandeira[] = [
  {
    id: 'inclusao',
    icon: 'inclusao',
    title: 'Inclusão & Dignidade',
    copy: 'Toda família atípica merece respeito, acolhimento e acesso. Defendemos a inclusão em Caraguatatuba — apoio à APAE, atendimento e transporte adequados para pessoas com TEA e acessibilidade de verdade nos espaços públicos.',
    tags: ['APAE', 'Famílias atípicas (TEA)', 'Acessibilidade'],
    featured: true,
  },
  {
    id: 'saude',
    icon: 'saude',
    title: 'Saúde & Emergência',
    copy: 'Saúde é vida — e no litoral, agilidade salva. Trabalhamos por mais estrutura no SAMU e nas Santas Casas, pelo reforço dos Bombeiros na Operação Verão e por um socorro rápido a quem precisa.',
    tags: ['SAMU', 'Bombeiros', 'Pronto atendimento'],
    featured: true,
  },
  {
    id: 'articulacao',
    icon: 'articulacao',
    title: 'Articulação que traz resultado',
    copy: 'Mandato que abre portas: junto a lideranças estaduais, ajudamos a destravar recursos e obras para Caraguatatuba e todo o Litoral Norte.',
    featured: false,
  },
  {
    id: 'pesca',
    icon: 'pesca',
    title: 'Força da pesca caiçara',
    copy: 'Nossa identidade é o mar. Apoiamos o fortalecimento da pesca artesanal e a valorização da cultura caiçara que faz Caraguá ser Caraguá.',
    featured: false,
  },
];

// Faixa de prova social (números com count-up).
export const stats = [
  { value: 1586, prefix: '', suffix: '', label: 'votos de confiança em 2024' },
  {
    value: 1,
    prefix: 'Lei ',
    suffix: 'ª aprovada',
    label: 'por unanimidade (Lei nº 32/26)',
    isText: true,
    display: '32/26',
  },
  {
    value: 7,
    prefix: '+',
    suffix: '',
    label: 'bairros com demandas atendidas',
  },
];

export const values = [
  {
    icon: 'shield',
    title: 'Defesa da Vida',
    text: 'Apoio incondicional aos princípios cristãos e à família.',
  },
  {
    icon: 'handshake',
    title: 'Justiça Social',
    text: 'Cuidado com quem mais precisa: saúde, acolhimento e oportunidades para todos.',
  },
  {
    icon: 'search',
    title: 'Transparência',
    text: 'Fiscalização firme e transparente do dinheiro público.',
  },
];

export type MandateCategory = 'leis' | 'asfalto' | 'mobilidade' | 'esporte';

export const categoryLabels: Record<MandateCategory, string> = {
  leis: 'Leis & Direitos',
  asfalto: 'Asfalto & Obras',
  mobilidade: 'Mobilidade',
  esporte: 'Esporte & Cultura',
};

export type SeloTone = 'lei' | 'demanda' | 'fiscalizacao';

export type MandateCard = {
  id: string;
  category: MandateCategory;
  selo: string;
  seloTone: SeloTone;
  title: string;
  copy: string;
  ctaLabel?: string;
  ctaHref?: string;
  sourceUrl?: string;
  media: {
    type: 'video' | 'document' | 'photo';
    youtubeId?: string;
    src?: string;
    alt?: string;
  };
};

export const mandateCards: MandateCard[] = [
  {
    id: 'lei-32-26',
    category: 'leis',
    selo: 'Lei aprovada por unanimidade',
    seloTone: 'lei',
    title: 'Independência e recomeço para mulheres vítimas de violência',
    copy: 'Aprovamos na Câmara o projeto que garante cotas de emprego em contratos da Prefeitura para mulheres que sofreram violência doméstica, com sigilo total para protegê-las. Menos discursos, mais dignidade.',
    ctaLabel: 'Ver a notícia oficial',
    ctaHref:
      'https://caraguatatuba.sp.leg.br/noticias/projeto-que-garante-vagas-para-mulheres-vitimas-de-violencia-em-contratos-publicos-e-aprovado-por-unanimidade',
    media: {
      type: 'photo',
      src: '/placar/lei-32-26.jpg',
      alt: 'Vereador Maurílio Moreira discursando na Câmara de Caraguatatuba',
    },
  },
  {
    id: 'der-tabatinga',
    category: 'asfalto',
    selo: 'Demanda atendida — DER-SP',
    seloTone: 'demanda',
    title: 'Fim do perigo no retorno da Tabatinga (SP-055)',
    copy: 'O trecho do Km 82+680 colocava vidas em risco diariamente. Cobramos o DER com firmeza e garantimos a execução do serviço de manutenção e reparo asfáltico na alça da rotatória.',
    sourceUrl: 'https://www.instagram.com/mauriliomoreira_/reel/DaBdw_yteJ7/',
    media: {
      type: 'photo',
      src: '/placar/oficio-der-doc.jpg',
      alt: 'Ofício 8367/2026 do DER-SP',
    },
  },
  {
    id: 'cid-galvao',
    category: 'asfalto',
    selo: 'Fiscalização no bairro',
    seloTone: 'fiscalizacao',
    title: 'Asfalto novo e dignidade na Travessa Cid Galvão',
    copy: 'O dinheiro público precisa virar qualidade de vida na porta de casa. Acompanhamos de perto o rolo compressor trabalhando e cobramos agilidade para o morador ter a infraestrutura que merece.',
    ctaLabel: 'Assistir ao vídeo',
    ctaHref: 'https://www.instagram.com/mauriliomoreira_/reel/DaLGlJ3RbmT/',
    media: {
      type: 'video',
      src: '/placar/cid-galvao-reel.jpg',
      alt: 'Obra de asfalto na Travessa Cid Galvão',
    },
  },
  {
    id: 'quadra-tinga',
    category: 'mobilidade',
    selo: 'Requerimento aprovado',
    seloTone: 'demanda',
    title: 'Reforma e revitalização da quadra de esportes do Tinga',
    copy: 'Cobramos do Executivo a previsão orçamentária e o cronograma para reformar a quadra de esportes do bairro Tinga — lazer e esporte para a nossa juventude.',
    sourceUrl: 'https://www.instagram.com/mauriliomoreira_/p/DdFNXz8NE9O/',
    media: { type: 'photo', alt: 'Reforma da quadra de esportes do Tinga' },
  },
  {
    id: 'faixas-pereque',
    category: 'mobilidade',
    selo: 'Requerimento aprovado',
    seloTone: 'demanda',
    title: 'Faixas de pedestres para proteger o Perequê-Mirim',
    copy: 'Pedimos a implantação e revitalização de faixas de pedestres em vias de grande movimento do Perequê-Mirim, como a Av. José Herculano (SP-55). Segurança para quem anda a pé.',
    sourceUrl: 'https://www.instagram.com/mauriliomoreira_/p/DdFNXz8NE9O/',
    media: { type: 'photo', alt: 'Faixas de pedestres no Perequê-Mirim' },
  },
  {
    id: 'benfica-jaraguazinho',
    category: 'asfalto',
    selo: 'Compromisso cumprido',
    seloTone: 'demanda',
    title: 'Asfalto novo em Benfica e Jaraguazinho',
    copy: 'Pedido atendido, compromisso cumprido: os bairros Benfica e Jaraguazinho começaram a receber o asfalto que esperavam — mais mobilidade, segurança e qualidade de vida.',
    ctaLabel: 'Assistir ao vídeo',
    ctaHref: 'https://www.instagram.com/mauriliomoreira_/reel/DWc-SLejExn/',
    media: { type: 'video', src: '/placar/benfica-jaraguazinho.jpg', alt: 'Maurílio Moreira no asfalto novo dos bairros Benfica e Jaraguazinho' },
  },
  {
    id: 'morro-algodao',
    category: 'asfalto',
    selo: 'Fiscalização no bairro',
    seloTone: 'fiscalizacao',
    title: 'Fiscalização no Morro do Algodão',
    copy: 'Depois das reclamações sobre bueiros abertos e buracos agravados pelas chuvas, fomos ao local verificar e cobrar as providências para a segurança dos moradores.',
    ctaLabel: 'Assistir ao vídeo',
    ctaHref: 'https://www.instagram.com/mauriliomoreira_/reel/DaOZQdpttM1/',
    media: { type: 'video', src: '/placar/morro-algodao.jpg', alt: 'Maurílio Moreira fiscalizando o Morro do Algodão' },
  },
  {
    id: 'golfinhos',
    category: 'asfalto',
    selo: 'Cobrança à SABESP',
    seloTone: 'fiscalizacao',
    title: 'Recapeamento cobrado no bairro Golfinhos',
    copy: 'Após a reclamação de um morador, constatamos falhas no serviço da SABESP — recapeamento mal feito — e cobramos que o trabalho fosse refeito com respeito à população.',
    ctaLabel: 'Assistir ao vídeo',
    ctaHref: 'https://www.instagram.com/mauriliomoreira_/reel/DWmbY14kTWg/',
    media: { type: 'video', src: '/placar/golfinhos.jpg', alt: 'Fiscalização de recapeamento no bairro Golfinhos' },
  },
  {
    id: 'esporte-eliseu',
    category: 'esporte',
    selo: 'Apoio ao esporte',
    seloTone: 'demanda',
    title: 'Apoio ao atleta caiçara Eliseu Martins',
    copy: 'Recebemos o atleta Eliseu Martins, destaque no Stand Up Paddle e no Remo. Abraçamos a causa do esporte de Caraguá — talento da nossa terra que merece apoio e visibilidade.',
    ctaLabel: 'Assistir ao vídeo',
    ctaHref: 'https://www.instagram.com/mauriliomoreira_/reel/DcmPYnft1Vw/',
    media: { type: 'video', src: '/placar/esporte-eliseu.jpg', alt: 'Maurílio Moreira com o atleta Eliseu Martins e seus troféus' },
  },
  {
    id: 'caragua-a-gosto',
    category: 'esporte',
    selo: 'Cultura & economia',
    seloTone: 'demanda',
    title: 'Caraguá A Gosto: cultura que move a economia',
    copy: 'Presença no encerramento do Caraguá A Gosto, evento que valoriza a nossa gastronomia, fortalece o comércio local e aquece a economia da cidade.',
    ctaLabel: 'Assistir ao vídeo',
    ctaHref: 'https://www.instagram.com/mauriliomoreira_/reel/DdIGG3Gx1np/',
    media: { type: 'video', src: '/placar/caragua-a-gosto.jpg', alt: 'Encerramento do festival Caraguá A Gosto' },
  },
  {
    id: 'tpa-ilhabela',
    category: 'mobilidade',
    selo: 'Defesa do morador',
    seloTone: 'fiscalizacao',
    title: 'Isenção da TPA para o morador de Caraguá',
    copy: 'Em audiência na Câmara de Ilhabela, defendemos a isenção da TPA para os caraguatatubenses. Somos cidades irmãs — ninguém deve ser taxado para visitar a cidade vizinha.',
    ctaLabel: 'Assistir ao vídeo',
    ctaHref: 'https://www.instagram.com/mauriliomoreira_/reel/DXHH7DVEfYK/',
    media: { type: 'video', src: '/placar/tpa-ilhabela.jpg', alt: 'Maurílio Moreira em audiência na Câmara de Ilhabela sobre a TPA' },
  },
];

export type ComunidadeFoto = { src: string; alt: string; href: string; caption: string };

// Galeria "Pé no bairro" — presença na comunidade (fotos reais do Instagram).
export const comunidade: ComunidadeFoto[] = [
  {
    src: '/comunidade/gabinete-pastor.jpg',
    caption: 'Gabinete aberto à comunidade',
    alt: 'Maurílio Moreira recebe o Pastor Maurício e família no gabinete',
    href: 'https://www.instagram.com/mauriliomoreira_/p/Ddr0fn8lHow/',
  },
  {
    src: '/comunidade/conexao-pastores.jpg',
    caption: 'Conexão de Pastores (COMPAC)',
    alt: 'Encontro de pastores e líderes no COMPAC',
    href: 'https://www.instagram.com/mauriliomoreira_/reel/DbySouQRnZA/',
  },
  {
    src: '/comunidade/cafe-pastores.jpg',
    caption: 'Café de oração com lideranças',
    alt: 'Café da manhã de comunhão e oração com pastores da cidade',
    href: 'https://www.instagram.com/mauriliomoreira_/reel/DdM0fmttl2T/',
  },
  {
    src: '/comunidade/casa-abraao.jpg',
    caption: 'Moção à Igreja Casa de Abraão',
    alt: 'Moção de congratulação pelos 13 anos da Igreja Casa de Abraão',
    href: 'https://www.instagram.com/mauriliomoreira_/reel/DeLUKzzR_6Y/',
  },
  {
    src: '/comunidade/lagoinha.jpg',
    caption: '3 anos da Lagoinha Caraguá',
    alt: 'Celebração de 3 anos da Lagoinha Caraguatatuba',
    href: 'https://www.instagram.com/mauriliomoreira_/reel/Dd1u7U4N7v1/',
  },
  {
    src: '/comunidade/desbravadores.jpg',
    caption: 'Dia dos Desbravadores',
    alt: 'Celebração ao lado dos Desbravadores',
    href: 'https://www.instagram.com/mauriliomoreira_/reel/DdfQ0nMxnOn/',
  },
];

export type Depoimento = { quote: string; author: string; detail: string };

// ⚠️ EXEMPLOS ILUSTRATIVOS — substituir por depoimentos REAIS e AUTORIZADOS antes de publicar.
// Atribuição genérica de propósito (nenhuma pessoa real é citada).
export const depoimentos: Depoimento[] = [
  {
    quote:
      'Cobrei o asfalto da minha rua e, pela primeira vez, vi um vereador aparecer para acompanhar de perto. Saiu do papel.',
    author: 'Moradora',
    detail: 'Bairro Tabatinga',
  },
  {
    quote:
      'Mandei uma mensagem pelo WhatsApp do gabinete e fui atendida no mesmo dia. Dá para sentir que tem gente trabalhando de verdade.',
    author: 'Moradora',
    detail: 'Perequê-Mirim',
  },
  {
    quote:
      'Trabalho sério, com fé e respeito pelas famílias. É o tipo de representante que Caraguá precisava.',
    author: 'Apoiador',
    detail: 'Centro',
  },
];

export type Episode = {
  id: string;
  youtubeId: string;
  title: string;
  guest: string;
};

// Placeholders — trocar youtubeId pelos vídeos reais do canal @maurilioconvida7955.
export const episodes: Episode[] = [
  {
    id: 'ep-042',
    youtubeId: 'lFhsDYKOf6s',
    title: 'Vivendo Algo Novo',
    guest: 'com Pr. Willian Xavier',
  },
  {
    id: 'ep-015',
    youtubeId: 'eE67apWTv84',
    title: 'Fé e comunidade na prática',
    guest: 'com Pr. Adriel Padilha',
  },
  {
    id: 'ep-020',
    youtubeId: 'YxrKNPAIwR4',
    title: 'Projeto Social Patrulheiros do Rei',
    guest: 'bate-papo com os Patrulheiros do Rei',
  },
];
