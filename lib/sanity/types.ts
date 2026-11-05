// Shapes retornados pelas queries GROQ (lib/sanity/queries.ts).

export type SanityImage = {
  url: string;
  alt: string;
  lqip?: string;
  width?: number;
  height?: number;
} | null;

export type SiteSettings = {
  brandName?: string;
  brandEyebrow?: string;
  themeColor?: string;
  siteUrl?: string;
  whatsappNumber?: string;
  whatsappDisplay?: string;
  defaultWhatsappMessage?: string;
  socials?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    camara?: string;
  };
  footerTagline?: string;
  footerCopyright?: string;
  footerLegal?: string;
  logo: SanityImage;
} | null;

export type ContactInfo = {
  address?: string;
  cep?: string;
  email?: string;
  mapsQuery?: string;
} | null;

export type HeroSettings = {
  seloBadge?: string;
  seloTitle?: string;
  seloMeta?: string;
  portrait: SanityImage;
} | null;

export type SeoRoute = { title?: string; description?: string } | null;

export type SeoSettings = {
  siteName?: string;
  keywords?: string[];
  ogImage: SanityImage;
  home: SeoRoute;
  mandato: SeoRoute;
  podcast: SeoRoute;
} | null;

export type BandeiraDoc = {
  _id: string;
  icon: "inclusao" | "saude" | "articulacao" | "pesca";
  title: string;
  copy: string;
  tags?: string[];
  featured: boolean;
};

export type MandateCardDoc = {
  _id: string;
  category: "leis" | "asfalto" | "mobilidade" | "esporte";
  selo: string;
  seloTone: "lei" | "demanda" | "fiscalizacao";
  title: string;
  copy: string;
  ctaLabel?: string;
  ctaHref?: string;
  sourceUrl?: string;
  media: { type: "video" | "document" | "photo"; image: SanityImage };
};

export type ComunidadeDoc = {
  _id: string;
  caption: string;
  href?: string;
  image: SanityImage;
};

export type DepoimentoDoc = {
  _id: string;
  quote: string;
  author: string;
  detail?: string;
};

export type EpisodeDoc = {
  _id: string;
  youtubeId: string;
  title: string;
  guest?: string;
};
