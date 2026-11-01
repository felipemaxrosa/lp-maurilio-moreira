import { MapPin, Mail, Phone } from "lucide-react";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsappForm } from "@/components/WhatsappForm";
import { contact } from "@/lib/content";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&output=embed`;

export function Contact() {
  return (
    <section id="gabinete" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionIntro
          eyebrow="Gabinete Aberto"
          title="A voz do seu bairro na Câmara."
          subtitle="Viu um problema na sua rua? Tem uma sugestão de projeto? Preencha abaixo e fale direto com a nossa assessoria pelo WhatsApp."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <WhatsappForm />
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-6">
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal/10 text-teal">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold text-ink">Gabinete</span>
                  <span className="text-ink-soft">{contact.address}</span>
                  <span className="text-ink-soft">CEP {contact.cep}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal/10 text-teal">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold text-ink">E-mail</span>
                  <a href={`mailto:${contact.email}`} className="break-all text-ink-soft hover:text-teal">
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal/10 text-teal">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold text-ink">WhatsApp do gabinete</span>
                  <span className="text-ink-soft">{contact.whatsappDisplay}</span>
                </div>
              </li>
            </ul>

            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                src={mapSrc}
                title="Localização do gabinete de Maurílio Moreira na Câmara de Caraguatatuba"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 lg:h-72"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
