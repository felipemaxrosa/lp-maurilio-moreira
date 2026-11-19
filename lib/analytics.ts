"use client";

import { sendGAEvent } from "@next/third-parties/google";

// Wrapper fino sobre o sendGAEvent do @next/third-parties.
// Seguro de chamar mesmo sem o GA montado (antes do consentimento): o push vai para o
// dataLayer e é descartado se o gtag ainda não existir — nunca lança erro na UI.
function track(name: string, params?: Record<string, unknown>) {
  try {
    sendGAEvent("event", name, params ?? {});
  } catch {
    /* no-op: GA ausente ou bloqueado */
  }
}

export type WhatsappLocation = "floating" | "hero" | "header" | "header_mobile";

/** Clique em qualquer CTA de WhatsApp (botão flutuante, hero, header). */
export const trackWhatsappClick = (location: WhatsappLocation) =>
  track("whatsapp_click", { location });

/** Envio do formulário "Gabinete Aberto" (demanda pelo site). */
export const trackContactSubmit = (p: { bairro: string }) =>
  track("contact_submit", { bairro: p.bairro });

/** Clique que leva o usuário para fora do site (redes, notícias, canais). */
export const trackOutbound = (p: { destino: string; url: string }) =>
  track("outbound_click", p);

/** Seção-chave entrou na viewport (ex.: bandeiras do mandato). */
export const trackSectionView = (secao: string) =>
  track("section_view", { secao });

/** Play em um episódio do podcast. */
export const trackPodcastPlay = (p: { episodio: string; location: string }) =>
  track("podcast_play", p);

/** Clique em "Inscreva-se no Canal Oficial" (YouTube). */
export const trackPodcastSubscribe = (p: { location: string }) =>
  track("podcast_subscribe", p);

/** Clique num filtro de tema do Placar do Mandato (Leis, Asfalto, Mobilidade, Esporte). */
export const trackMandateFilter = (p: { categoria: string; location: string }) =>
  track("mandate_filter", p);

/** Clique num CTA de um card do Placar (notícia, vídeo, documento ou rede social). */
export const trackMandateClick = (p: {
  item: string;
  categoria: string;
  tipo: "video" | "documento" | "noticia" | "rede_social";
  location: string;
}) => track("mandate_click", p);
