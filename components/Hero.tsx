'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import { Landmark, Play, Check } from 'lucide-react';
import { whatsappLink, DEFAULT_WA_MESSAGE } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduce ? 0 : -50],
  );
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-br from-petroleo via-petroleo to-petroleo-900"
    >
      {/* Brilhos decorativos */}
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-24 -top-24 h-[32rem] w-[32rem] rounded-full bg-ciano/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-teal/30 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Coluna da copy — alinhada ao topo, logo abaixo da navbar */}
        <div className="relative z-10 flex flex-col items-start gap-6 pt-24 pb-12 lg:min-h-[76vh] lg:max-h-[50rem] lg:max-w-[54%] lg:justify-start lg:pb-28 lg:pt-32">
          <span className="u-eyebrow inline-flex items-center gap-2 rounded-full border border-ciano/30 bg-ciano/10 px-4 py-2 text-ciano">
            <Landmark className="h-4 w-4" />
            Legislatura 2025–2028 · Caraguatatuba/SP
          </span>

          <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Trabalho, Fé e <span className="text-ciano">Raízes Caiçaras</span>{' '}
            por Caraguatatuba.
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-white/80">
            Um mandato de resultado:{' '}
            <strong className="font-semibold text-white">pé no bairro</strong>,
            fiscalização firme e respeito a quem confiou o voto.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={whatsappLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-base font-bold text-whatsapp-ink shadow-xl shadow-whatsapp/20 transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Fale com o gabinete
            </a>
            <a
              href="#podcast"
              onClick={scrollTo('#podcast')}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-4 text-base font-semibold text-white transition-colors hover:border-ciano hover:text-ciano"
            >
              <Play className="h-4 w-4" />
              Conheça o Podcast
            </a>
          </div>

          <p className="flex items-center gap-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-verde" />
            Eleito com a confiança de{' '}
            <strong className="font-semibold text-white">
              1.586 caraguatatubenses.
            </strong>
          </p>
        </div>

        {/* Foto — no mobile segue o fluxo; no desktop ancora no canto inferior direito (base reta) */}
        <motion.div
          style={{ y: reduce ? 0 : portraitY }}
          className="relative z-0 -mx-4 flex items-end justify-center sm:-mx-6 lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:w-[52%] lg:justify-end lg:px-8"
        >
          <Image
            src="/maurilio-hero.png"
            alt="Vereador Maurílio Moreira, sorrindo, de terno azul e camisa branca"
            width={1133}
            height={1396}
            priority
            sizes="(max-width: 1024px) 85vw, 50vw"
            className="h-auto w-auto max-h-[66vh] object-contain object-bottom drop-shadow-2xl lg:max-h-[44rem]"
          />

          {/* Selo flutuante da conquista */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-6 left-2 w-[19.5rem] max-w-[82%] rounded-[4px] border-l-4 border-whatsapp bg-white px-[18px] py-4 shadow-2xl lg:bottom-16 lg:-left-6"
          >
            <span className="inline-flex items-center gap-1.5 self-start whitespace-nowrap rounded-full bg-[#e7f7ee] px-2.5 py-[5px] text-[11px] font-extrabold uppercase tracking-[0.05em] text-[#0b7a3e]">
              <Check className="h-3.5 w-3.5 shrink-0" />
              Aprovada por unanimidade
            </span>
            <span className="mt-3 block font-sans text-[15px] font-bold leading-[1.25] text-ink">
              Independência para mulheres vítimas de violência
            </span>
            <span className="mt-2 block text-[11.5px] text-ink-soft">
              Lei nº 32/26 · 19/05/2026
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
