import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Podcast } from "@/components/Podcast";
import { sanityFetch } from "@/lib/sanity/fetch";
import { episodesQuery, seoQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import type { EpisodeDoc, SeoSettings, SiteSettings } from "@/lib/sanity/types";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await sanityFetch<SeoSettings>(seoQuery, {}, ["seoSettings"]);
  return {
    title: seo?.podcast?.title ?? "Maurílio Convida (Podcast) — Maurílio Moreira",
    description:
      seo?.podcast?.description ??
      "O podcast do vereador Maurílio Moreira: conversas francas sobre fé, comunidade, saúde e os desafios reais de Caraguatatuba.",
  };
}

export default async function PodcastPage() {
  const [episodes, settings] = await Promise.all([
    sanityFetch<EpisodeDoc[]>(episodesQuery, {}, ["episode"]),
    sanityFetch<SiteSettings>(siteSettingsQuery, {}, ["siteSettings"]),
  ]);

  return (
    <>
      <PageHero
        eyebrow="Maurílio Convida"
        title="O bate-papo que Caraguatatuba ouve."
        subtitle="Conversas francas sobre fé, comunidade, saúde e os desafios reais da nossa cidade. Aperte o play e participe da discussão."
      />
      <Podcast
        episodes={episodes}
        channelUrl={settings?.socials?.youtube ?? ""}
        showIntro={false}
      />
    </>
  );
}
