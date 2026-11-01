"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-petroleo/95 shadow-lg shadow-petroleo-900/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <a href="#inicio" onClick={go("#inicio")} className="flex items-center gap-3" aria-label="Maurílio Moreira — início">
          <Image
            src="/brasao-caraguatatuba.png"
            alt="Brasão de Caraguatatuba"
            width={40}
            height={40}
            className="h-10 w-auto drop-shadow-sm"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-extrabold tracking-tight text-white">Maurílio Moreira</span>
            <span className="u-eyebrow mt-0.5 text-[0.62rem] text-ciano">Vereador · AGIR</span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={go(item.href)}
              className="text-sm font-semibold text-white/85 transition-colors hover:text-ciano"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={whatsappLink(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-md bg-whatsapp px-4 py-2.5 text-sm font-bold text-whatsapp-ink shadow-md transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Fale com o gabinete
        </a>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-white/10 bg-petroleo/98 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={go(item.href)}
                className="rounded-md px-3 py-3 text-base font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-ciano"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3.5 text-base font-bold text-whatsapp-ink"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Fale com o gabinete
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
