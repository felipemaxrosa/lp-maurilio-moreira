"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useConsent } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Monta o Google Analytics (gtag.js) APENAS depois do consentimento ("granted").
 * Sem ID configurado ou sem aceite, não renderiza nada — nenhum script do Google é carregado.
 */
export function Analytics() {
  const { status } = useConsent();
  if (!GA_ID || status !== "granted") return null;
  return <GoogleAnalytics gaId={GA_ID} />;
}
