import { ShieldCheck, HandHeart, SearchCheck, Quote } from "lucide-react";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { values } from "@/lib/content";

const valueIcons = {
  shield: ShieldCheck,
  handshake: HandHeart,
  search: SearchCheck,
} as const;

const roots = [
  "Filho de Dona Conceição e Sr. Pedrinho",
  "Pai da Isabela e da Maria Eduarda",
  "Avô coruja da Laurinha e do Ravi",
  "Empresário e cristão, caiçara de raiz",
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          {/* Texto */}
          <div className="flex flex-col gap-6">
            <SectionIntro
              eyebrow="De Caraguatatuba, para Caraguatatuba"
              title="Nascido e criado na nossa terra caiçara."
            />
            <Reveal className="flex flex-col gap-5 text-lg leading-relaxed text-ink-soft" delay={0.05}>
              <p>
                Nascido e criado com muito orgulho na nossa terra caiçara. São valores que carrego em tudo o que faço —
                na família, na fé e no trabalho pela cidade.
              </p>
              <p>
                Como empresário e cristão, sempre acreditei que <strong className="font-semibold text-ink">a fé exige ação</strong>.
                Fui eleito por 1.586 pessoas que, assim como eu, sabem que a política não é lugar para vaidade, mas uma
                ferramenta poderosa para proteger as famílias, promover a dignidade humana e transformar a realidade dos
                nossos bairros.
              </p>
            </Reveal>
          </div>

          {/* Card de raízes + citação */}
          <Reveal delay={0.1}>
            <figure className="flex flex-col gap-6 rounded-xl border border-line bg-mist/60 p-7 lg:p-8">
              <Quote className="h-9 w-9 text-ciano" aria-hidden />
              <blockquote className="font-display text-xl font-bold leading-snug text-petroleo lg:text-2xl">
                “A política não é lugar para vaidade. É ferramenta para proteger as famílias e transformar os bairros.”
              </blockquote>
              <figcaption className="sr-only">Maurílio Moreira</figcaption>
              <ul className="flex flex-col gap-2 border-t border-line pt-5">
                {roots.map((r) => (
                  <li key={r} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-verde" aria-hidden />
                    {r}
                  </li>
                ))}
              </ul>
            </figure>
          </Reveal>
        </div>

        {/* Cards de valores */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-20">
          {values.map((v, i) => {
            const Icon = valueIcons[v.icon as keyof typeof valueIcons];
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-xl border border-line border-l-4 border-l-verde bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-teal/10 text-teal">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-extrabold text-ink">{v.title}</h3>
                  <p className="text-ink-soft">{v.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
