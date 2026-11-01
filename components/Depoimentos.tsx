import { Quote, MapPin } from "lucide-react";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { depoimentos } from "@/lib/content";

export function Depoimentos() {
  return (
    <section id="depoimentos" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionIntro
          eyebrow="A voz de quem é daqui"
          title="O que dizem os moradores."
          subtitle="A confiança de quem convive com o mandato no dia a dia de Caraguatatuba."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.quote} delay={i * 0.08}>
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-7 shadow-sm">
                <Quote className="h-8 w-8 shrink-0 text-ciano" aria-hidden />
                <blockquote className="flex-1 leading-relaxed text-ink-soft">
                  “{d.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal/10 text-teal">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-sm font-extrabold text-ink">{d.author}</span>
                    <span className="text-xs text-ink-soft">{d.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
