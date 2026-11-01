import Image from "next/image";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { comunidade } from "@/lib/content";

export function Comunidade() {
  return (
    <section id="comunidade" className="scroll-mt-20 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionIntro
          eyebrow="Pé no bairro"
          title="Presente na vida da comunidade."
          subtitle="Fé, pessoas e presença: o mandato acontece junto de quem faz Caraguatatuba todos os dias."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {comunidade.map((foto, i) => (
            <Reveal key={foto.src} delay={(i % 3) * 0.06}>
              <a
                href={foto.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden rounded-xl"
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-petroleo-900/85 via-petroleo-900/15 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 font-display text-sm font-bold leading-tight text-white">
                  <InstagramIcon className="h-4 w-4 shrink-0 text-ciano opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {foto.caption}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
