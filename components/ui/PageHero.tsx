import type { ReactNode } from "react";

type Props = { eyebrow: string; title: ReactNode; subtitle?: string };

/** Cabeçalho de página (sub-rotas): faixa teal que limpa o header fixo. */
export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-petroleo via-petroleo to-petroleo-900">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-ciano/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-36">
        <span className="u-eyebrow inline-flex items-center gap-2 text-ciano">
          <span className="h-[3px] w-6 bg-ciano" aria-hidden />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-3xl font-black text-white sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}
