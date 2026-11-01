import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Bandeiras } from "@/components/Bandeiras";
import { Scoreboard } from "@/components/Scoreboard";
import { Comunidade } from "@/components/Comunidade";
import { Depoimentos } from "@/components/Depoimentos";
import { Podcast } from "@/components/Podcast";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Bandeiras />
      <Scoreboard limit={3} showFilters={false} moreHref="/mandato" />
      <Comunidade />
      <Depoimentos />
      <Podcast teaser />
      <Contact />
    </>
  );
}
