import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { PodcastPlayer } from "@/components/PodcastPlayer";
import { socials, episodes } from "@/lib/content";

type Props = { teaser?: boolean; showIntro?: boolean };

export function Podcast({ teaser = false, showIntro = true }: Props) {
  return (
    <section id="podcast" className="scroll-mt-20 bg-dark">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {showIntro && (
          <SectionIntro
            tone="dark"
            eyebrow="Maurílio Convida"
            title="O bate-papo que Caraguatatuba ouve."
            subtitle="Conversas francas sobre fé, comunidade, saúde e os desafios reais da nossa cidade. Aperte o play e participe da discussão."
          />
        )}

        <Reveal className={showIntro ? "mt-10" : ""}>
          <PodcastPlayer
            episodes={episodes}
            channelUrl={socials.youtube}
            showPlaylist={!teaser}
            moreHref={teaser ? "/podcast" : undefined}
          />
        </Reveal>
      </div>
    </section>
  );
}
