import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Scoreboard } from "@/components/Scoreboard";
import { sanityFetch } from "@/lib/sanity/fetch";
import { mandateCardsQuery, seoQuery } from "@/lib/sanity/queries";
import type { MandateCardDoc, SeoSettings } from "@/lib/sanity/types";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await sanityFetch<SeoSettings>(seoQuery, {}, ["seoSettings"]);
  return {
    title: seo?.mandato?.title ?? "Placar do Mandato — Maurílio Moreira",
    description:
      seo?.mandato?.description ??
      "Todas as conquistas e ações do mandato do vereador Maurílio Moreira por Caraguatatuba: leis, obras, mobilidade, esporte e cultura.",
  };
}

export default async function MandatoPage() {
  const cards = await sanityFetch<MandateCardDoc[]>(
    mandateCardsQuery,
    {},
    ["mandateCard"],
  );

  return (
    <>
      <PageHero
        eyebrow="Placar do Mandato"
        title="O trabalho não para no gabinete. Ele acontece nas ruas."
        subtitle="Todas as conquistas e ações recentes do nosso mandato por Caraguatatuba — do problema à solução."
      />
      <Scoreboard cards={cards} showIntro={false} context="mandato" />
    </>
  );
}
