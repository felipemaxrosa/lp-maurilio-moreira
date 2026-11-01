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
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Mandato', href: '#mandato' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Gabinete', href: '#gabinete' },
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
    text: 'Atenção aos mais carentes através de saúde e oportunidades.',
  },
  {
    icon: 'search',
    title: 'Transparência',
    text: 'Fiscalização implacável do orçamento municipal.',
  },
];

export type MandateCategory = 'leis' | 'asfalto' | 'mobilidade';

export const categoryLabels: Record<MandateCategory, string> = {
  leis: 'Leis & Direitos',
  asfalto: 'Asfalto & Obras',
  mobilidade: 'Mobilidade',
};

export type SeloTone = 'lei' | 'demanda' | 'fiscalizacao';

export type MandateCard = {
  id: string;
  category: MandateCategory;
  selo: string;
  seloTone: SeloTone;
  title: string;
  copy: string;
  ctaLabel: string;
  ctaHref: string;
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
    media: { type: 'photo', alt: 'Sessão da Câmara de Caraguatatuba' },
  },
  {
    id: 'der-tabatinga',
    category: 'asfalto',
    selo: 'Demanda atendida — DER-SP',
    seloTone: 'demanda',
    title: 'Fim do perigo no retorno da Tabatinga (SP-055)',
    copy: 'O trecho do Km 82+680 colocava vidas em risco diariamente. Cobramos o DER com firmeza e garantimos a execução do serviço de manutenção e reparo asfáltico na alça da rotatória.',
    ctaLabel: 'Ver o ofício oficial',
    ctaHref: '#gabinete',
    media: {
      type: 'document',
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
    ctaHref: socials.instagram,
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
    ctaLabel: 'Entenda o requerimento',
    ctaHref: '#gabinete',
    media: { type: 'photo', alt: 'Quadra de esportes do bairro Tinga' },
  },
  {
    id: 'faixas-pereque',
    category: 'mobilidade',
    selo: 'Requerimento aprovado',
    seloTone: 'demanda',
    title: 'Faixas de pedestres para proteger o Perequê-Mirim',
    copy: 'Pedimos a implantação e revitalização de faixas de pedestres em vias de grande movimento do Perequê-Mirim, como a Av. José Herculano (SP-55). Segurança para quem anda a pé.',
    ctaLabel: 'Entenda o requerimento',
    ctaHref: '#gabinete',
    media: { type: 'photo', alt: 'Faixa de pedestres no Perequê-Mirim' },
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
