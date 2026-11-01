import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Podcast } from "@/components/Podcast";

export const metadata: Metadata = {
  title: "Maurílio Convida (Podcast) — Maurílio Moreira",
  description:
    "O podcast do vereador Maurílio Moreira: conversas francas sobre fé, comunidade, saúde e os desafios reais de Caraguatatuba.",
};

export default function PodcastPage() {
  return (
    <>
      <PageHero
        eyebrow="Maurílio Convida"
        title="O bate-papo que Caraguatatuba ouve."
        subtitle="Conversas francas sobre fé, comunidade, saúde e os desafios reais da nossa cidade. Aperte o play e participe da discussão."
      />
      <Podcast showIntro={false} />
    </>
  );
}
