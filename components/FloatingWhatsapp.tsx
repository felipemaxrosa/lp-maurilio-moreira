"use client";

import { useEffect, useState } from "react";
import { whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Botão flutuante do WhatsApp — aparece depois que o usuário rola a hero. */
export function FloatingWhatsapp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com o gabinete no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-ink shadow-xl shadow-whatsapp/30 transition-all duration-300 hover:scale-105 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
