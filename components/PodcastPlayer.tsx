"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { YoutubeIcon } from "@/components/ui/BrandIcons";
import type { Episode } from "@/lib/content";

type Props = { episodes: Episode[]; channelUrl: string };

/** Player do "Maurílio Convida": fachada leve (thumb + play) que só carrega o iframe ao clicar. */
export function PodcastPlayer({ episodes, channelUrl }: Props) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = episodes[active];

  const open = (i: number) => {
    setActive(i);
    setPlaying(true);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.9fr_1fr]">
      {/* Destaque */}
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-dark-700">
        {playing ? (
          <iframe
            key={current.id}
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?autoplay=1&rel=0`}
            title={`${current.title} — Maurílio Convida`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Assistir: ${current.title}`}
            className="group absolute inset-0 flex flex-col justify-end text-left"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${current.youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/5" />
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#FF0000] text-white shadow-2xl transition-transform duration-300 group-hover:scale-110"
            >
              <Play className="h-9 w-9 translate-x-0.5" fill="currentColor" />
            </span>
            <span className="relative z-10 p-6 lg:p-8">
              <span className="u-eyebrow block text-ciano">Episódio em destaque</span>
              <span className="mt-2 block font-display text-2xl font-extrabold text-white lg:text-3xl">
                {current.title}
              </span>
              <span className="mt-1 block text-white/70">{current.guest}</span>
            </span>
          </button>
        )}
      </div>

      {/* Playlist + inscrição */}
      <div className="flex flex-col gap-4">
        <span className="u-eyebrow text-white/50">Episódios recentes</span>
        <ul className="flex flex-col gap-3">
          {episodes.map((ep, i) => (
            <li key={ep.id}>
              <button
                type="button"
                onClick={() => open(i)}
                aria-current={i === active ? "true" : undefined}
                className={`group flex w-full items-center gap-4 rounded-xl border p-3 text-left transition-colors ${
                  i === active
                    ? "border-ciano/50 bg-white/10"
                    : "border-white/10 bg-white/5 hover:border-ciano/40 hover:bg-white/10"
                }`}
              >
                <span className="relative grid h-14 w-24 shrink-0 place-items-center overflow-hidden rounded-lg bg-petroleo-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${ep.youtubeId}/mqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                  <span className="relative z-10 grid h-8 w-8 place-items-center rounded-full bg-black/55 text-white transition-colors group-hover:bg-[#FF0000]">
                    <Play className="h-4 w-4 translate-x-px" fill="currentColor" />
                  </span>
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate font-display text-sm font-bold text-white">{ep.title}</span>
                  <span className="truncate text-xs text-white/55">{ep.guest}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-[#FF0000] px-5 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5"
        >
          <YoutubeIcon className="h-5 w-5" />
          Inscreva-se no Canal Oficial
        </a>
      </div>
    </div>
  );
}
