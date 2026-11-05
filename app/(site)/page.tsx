import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Bandeiras } from "@/components/Bandeiras";
import { Scoreboard } from "@/components/Scoreboard";
import { Comunidade } from "@/components/Comunidade";
import { Depoimentos } from "@/components/Depoimentos";
import { Podcast } from "@/components/Podcast";
import { Contact } from "@/components/Contact";
import { sanityFetch } from "@/lib/sanity/fetch";
import {
  bandeirasQuery,
  comunidadeQuery,
  contactInfoQuery,
  depoimentosQuery,
  episodesQuery,
  heroQuery,
  mandateCardsQuery,
  siteSettingsQuery,
} from "@/lib/sanity/queries";
import type {
  BandeiraDoc,
  ComunidadeDoc,
  ContactInfo,
  DepoimentoDoc,
  EpisodeDoc,
  HeroSettings,
  MandateCardDoc,
  SiteSettings,
} from "@/lib/sanity/types";

export default async function Home() {
  const [hero, cards, bandeiras, fotos, depoimentos, episodes, settings, contact] =
    await Promise.all([
      sanityFetch<HeroSettings>(heroQuery, {}, ["heroSettings"]),
      sanityFetch<MandateCardDoc[]>(mandateCardsQuery, {}, ["mandateCard"]),
      sanityFetch<BandeiraDoc[]>(bandeirasQuery, {}, ["bandeira"]),
      sanityFetch<ComunidadeDoc[]>(comunidadeQuery, {}, ["comunidadeFoto"]),
      sanityFetch<DepoimentoDoc[]>(depoimentosQuery, {}, ["depoimento"]),
      sanityFetch<EpisodeDoc[]>(episodesQuery, {}, ["episode"]),
      sanityFetch<SiteSettings>(siteSettingsQuery, {}, ["siteSettings"]),
      sanityFetch<ContactInfo>(contactInfoQuery, {}, ["contactInfo"]),
    ]);

  return (
    <>
      <Hero hero={hero} />
      <TrustBar />
      <About />
      <Bandeiras items={bandeiras} />
      <Scoreboard cards={cards} limit={3} showFilters={false} moreHref="/mandato" />
      <Comunidade fotos={fotos} />
      <Depoimentos items={depoimentos} />
      <Podcast episodes={episodes} channelUrl={settings?.socials?.youtube ?? ""} teaser />
      <Contact contact={contact} whatsappDisplay={settings?.whatsappDisplay} />
    </>
  );
}
