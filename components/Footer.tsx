import Image from "next/image";
import { Building2 } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/BrandIcons";
import { contact, socials, nav } from "@/lib/content";

const socialLinks = [
  { href: socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: socials.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: socials.camara, label: "Câmara Municipal", Icon: Building2 },
];

export function Footer() {
  return (
    <footer className="bg-petroleo-900 text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/brasao-caraguatatuba.png"
                alt="Brasão de Caraguatatuba"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-extrabold text-white">Maurílio Moreira</span>
                <span className="u-eyebrow text-[0.62rem] text-ciano">Vereador · AGIR · 2025–2028</span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Trabalho, Fé e Raízes Caiçaras por Caraguatatuba. Um mandato de resultado, pé no bairro e com respeito a
              quem confiou o voto.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-ciano hover:text-petroleo-900"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <nav className="flex flex-col gap-3">
            <span className="u-eyebrow text-white/50">Navegação</span>
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 transition-colors hover:text-ciano">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contato */}
          <div className="flex flex-col gap-3">
            <span className="u-eyebrow text-white/50">Contato</span>
            <span className="text-sm text-white/70">{contact.address}</span>
            <a href={`mailto:${contact.email}`} className="break-all text-sm text-white/70 hover:text-ciano">
              {contact.email}
            </a>
            <span className="text-sm text-white/70">WhatsApp {contact.whatsappDisplay}</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Maurílio Moreira. Todos os direitos reservados.</span>
          <span>Mandato Legislativo 2025–2028 — Câmara Municipal de Caraguatatuba/SP.</span>
        </div>
      </div>
    </footer>
  );
}
