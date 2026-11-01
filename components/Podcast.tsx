import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { PodcastPlayer } from "@/components/PodcastPlayer";
import { socials, episodes } from "@/lib/content";

export function Podcast() {
  return (
    <section id="podcast" className="scroll-mt-20 bg-dark">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionIntro
          tone="dark"
          eyebrow="Maurílio Convida"
          title="O bate-papo que Caraguatatuba ouve."
          subtitle="Conversas francas sobre fé, comunidade, saúde e os desafios reais da nossa cidade. Aperte o play e participe da discussão."
        />

        <Reveal className="mt-10">
          <PodcastPlayer episodes={episodes} channelUrl={socials.youtube} />
        </Reveal>
      </div>
    </section>
  );
}
