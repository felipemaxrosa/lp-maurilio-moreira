import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { CardArt } from "@/components/ui/CardArt";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/BrandIcons";
import { categoryLabels, type MandateCard as MandateCardType } from "@/lib/content";

const seloStyles: Record<string, string> = {
  lei: "bg-emerald-50 text-emerald-700",
  demanda: "bg-teal/10 text-teal",
  fiscalizacao: "bg-amber-100 text-amber-800",
};

// Define ícone + rótulo + cor de hover do link "Ver em..." conforme a rede social do permalink.
function sourceMeta(url: string) {
  if (/instagram\.com/.test(url)) return { Icon: InstagramIcon, label: "Ver no Instagram", hover: "hover:text-[#E1306C]" };
  if (/facebook\.com|fb\.watch/.test(url)) return { Icon: FacebookIcon, label: "Ver no Facebook", hover: "hover:text-[#1877F2]" };
  if (/youtube\.com|youtu\.be/.test(url)) return { Icon: YoutubeIcon, label: "Ver no YouTube", hover: "hover:text-[#FF0000]" };
  return { Icon: ArrowUpRight, label: "Ver publicação", hover: "hover:text-petroleo" };
}

type Props = {
  card: MandateCardType;
  onOpenDoc: (src: string, alt: string) => void;
};

export function MandateCard({ card, onOpenDoc }: Props) {
  const isExternal = card.ctaHref?.startsWith("http") ?? false;
  const isDocWithImage = card.media.type === "document" && Boolean(card.media.src);

  return (
    <TiltCard className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
        {/* Mídia */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-petroleo to-teal">
          {card.media.src ? (
            <Image
              src={card.media.src}
              alt={card.media.alt ?? card.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          ) : (
            <CardArt />
          )}
          {card.media.type === "video" && (
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-petroleo shadow-lg">
                <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
              </span>
            </span>
          )}
          <span className="absolute left-3 top-3 rounded-md bg-petroleo-900/70 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-white backdrop-blur">
            {categoryLabels[card.category]}
          </span>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <span className={`u-eyebrow inline-flex w-fit items-center rounded-full px-3 py-1 text-[0.66rem] ${seloStyles[card.seloTone]}`}>
            {card.selo}
          </span>
          <h3 className="font-display text-lg font-extrabold leading-snug text-ink">{card.title}</h3>
          <p className="text-sm leading-relaxed text-ink-soft">{card.copy}</p>

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
            {isDocWithImage && card.ctaLabel ? (
              <button
                type="button"
                onClick={() => onOpenDoc(card.media.src!, card.media.alt ?? card.title)}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-teal transition-colors hover:text-petroleo"
              >
                {card.ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            ) : card.ctaHref && card.ctaLabel ? (
              <a
                href={card.ctaHref}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-teal transition-colors hover:text-petroleo"
              >
                {card.ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
            {card.sourceUrl &&
              (() => {
                const { Icon, label, hover } = sourceMeta(card.sourceUrl!);
                return (
                  <a
                    href={card.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition-colors ${hover}`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                );
              })()}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
