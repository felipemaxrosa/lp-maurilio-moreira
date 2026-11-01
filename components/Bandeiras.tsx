import { Accessibility, HeartPulse, Handshake, Fish } from "lucide-react";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { bandeiras } from "@/lib/content";

const icons = {
  inclusao: Accessibility,
  saude: HeartPulse,
  articulacao: Handshake,
  pesca: Fish,
} as const;

export function Bandeiras() {
  const featured = bandeiras.filter((b) => b.featured);
  const secondary = bandeiras.filter((b) => !b.featured);

  return (
    <section id="bandeiras" className="scroll-mt-20 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionIntro
          eyebrow="Bandeiras do Mandato"
          title="As causas que guiam o nosso trabalho."
          subtitle="Mais que obras: compromissos que colocam a pessoa no centro — com atenção especial à saúde e à inclusão."
        />

        {/* Destaque: Inclusão + Saúde */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured.map((b, i) => {
            const Icon = icons[b.icon];
            return (
              <Reveal key={b.id} delay={i * 0.08}>
                <article className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-petroleo to-teal-600 p-7 text-white shadow-lg lg:p-9">
                  <span aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-ciano/15 blur-2xl" />
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-ciano/20 text-ciano">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display text-2xl font-extrabold">{b.title}</h3>
                  <p className="leading-relaxed text-white/80">{b.copy}</p>
                  {b.tags && (
                    <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                      {b.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Secundárias: Articulação + Pesca */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {secondary.map((b, i) => {
            const Icon = icons[b.icon];
            return (
              <Reveal key={b.id} delay={i * 0.08}>
                <article className="flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-teal/10 text-teal">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-lg font-extrabold text-ink">{b.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{b.copy}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
