import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { ManageCookiesButton } from "@/components/consent/ManageCookiesButton";
import { contact } from "@/lib/content";

const ATUALIZADO_EM = "19 de novembro de 2026";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Política de Privacidade e Cookies — Maurílio Moreira",
    description:
      "Como o gabinete do vereador Maurílio Moreira trata os dados pessoais enviados pelo site e quais cookies utilizamos, conforme a LGPD.",
  };
}

function Bloco({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl">{title}</h2>
      <div className="flex flex-col gap-3 text-[0.975rem] leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Transparência"
        title="Política de Privacidade e Cookies"
        subtitle="Respeito com quem confia no nosso trabalho começa pelo cuidado com os seus dados. Aqui explicamos, de forma clara, o que coletamos e por quê."
      />

      <div className="bg-white">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm text-ink-soft">Última atualização: {ATUALIZADO_EM}.</p>

          <Bloco title="1. Quem é o responsável pelos dados">
            <p>
              Este site é mantido pelo gabinete do vereador <strong>Maurílio Moreira</strong>, que atua
              como controlador dos dados pessoais aqui tratados, nos termos da Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018 — LGPD).
            </p>
            <p>
              Endereço: {contact.address} (CEP {contact.cep}).<br />
              Contato: <a className="font-semibold text-teal hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </Bloco>

          <Bloco title="2. Quais dados coletamos">
            <p>
              <strong>Dados que você nos envia.</strong> Ao usar o formulário “Gabinete Aberto”, coletamos
              o seu nome, bairro, telefone/WhatsApp e a mensagem com a sua demanda ou sugestão. Esses
              campos são preenchidos por você, de forma voluntária.
            </p>
            <p>
              <strong>Dados de navegação.</strong> Com a sua autorização, coletamos dados estatísticos de
              uso do site por meio de cookies — como páginas visitadas, origem do acesso, cidade/região
              aproximada e tipo de dispositivo. Esses dados são agregados e não têm o objetivo de
              identificar você pessoalmente.
            </p>
          </Bloco>

          <Bloco title="3. Para que usamos os seus dados">
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>Responder e encaminhar as demandas e sugestões enviadas pelo site;</li>
              <li>Entrar em contato de volta pelo telefone/WhatsApp informado;</li>
              <li>Entender como o site é usado para melhorá-lo e priorizar as pautas dos bairros;</li>
              <li>Cumprir obrigações legais aplicáveis ao mandato.</li>
            </ul>
          </Bloco>

          <Bloco title="4. Base legal">
            <p>
              O tratamento se apoia no <strong>consentimento</strong> que você fornece (art. 7º, I, da LGPD)
              — tanto ao enviar o formulário quanto ao aceitar os cookies de estatística — e, quando
              cabível, no atendimento a demandas do cidadão e no interesse legítimo de aprimorar o site,
              sempre respeitando os seus direitos.
            </p>
          </Bloco>

          <Bloco title="5. Cookies">
            <p>
              Cookies são pequenos arquivos que o site guarda no seu navegador. Usamos duas categorias:
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>
                <strong>Essenciais.</strong> Necessários para o site funcionar e para lembrar a sua escolha
                sobre cookies. Não dependem de consentimento.
              </li>
              <li>
                <strong>Estatísticos (Google Analytics).</strong> Só são ativados se você clicar em
                “Aceitar” no aviso de cookies. Ajudam a medir o uso do site de forma agregada. Se você
                recusar, nenhum script de medição é carregado.
              </li>
            </ul>
            <p>
              Você pode rever ou mudar a sua escolha a qualquer momento:{" "}
              <ManageCookiesButton className="font-semibold text-teal underline hover:text-petroleo" />{" "}
              — ou apagar os cookies pelas configurações do seu navegador.
            </p>
          </Bloco>

          <Bloco title="6. Compartilhamento e transferência internacional">
            <p>
              Não vendemos os seus dados. O compartilhamento ocorre apenas com ferramentas necessárias ao
              funcionamento do site:
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>
                <strong>WhatsApp / Meta.</strong> Ao enviar a sua demanda, a mensagem é aberta no WhatsApp
                e enviada ao gabinete por esse aplicativo, sujeito às políticas da Meta.
              </li>
              <li>
                <strong>Google Analytics.</strong> Quando autorizado, os dados estatísticos são processados
                pelo Google, podendo envolver transferência internacional, com as salvaguardas previstas na
                LGPD.
              </li>
            </ul>
          </Bloco>

          <Bloco title="7. Por quanto tempo guardamos">
            <p>
              Mantemos os dados do formulário apenas pelo tempo necessário para atender à sua demanda e
              pelos prazos legais aplicáveis; depois disso, são eliminados ou anonimizados. Os dados
              estatísticos seguem os prazos de retenção configurados na ferramenta de análise.
            </p>
          </Bloco>

          <Bloco title="8. Os seus direitos (LGPD, art. 18)">
            <p>Você pode, a qualquer momento, solicitar:</p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>Confirmação de que tratamos os seus dados e acesso a eles;</li>
              <li>Correção de dados incompletos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Revogação do consentimento;</li>
              <li>Informação sobre com quem compartilhamos os seus dados.</li>
            </ul>
            <p>
              Para exercer esses direitos, escreva para{" "}
              <a className="font-semibold text-teal hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </Bloco>

          <Bloco title="9. Segurança">
            <p>
              Adotamos medidas razoáveis para proteger os seus dados contra acesso não autorizado, perda ou
              uso indevido. Ainda assim, nenhum sistema é totalmente imune a riscos — por isso, compartilhe
              apenas as informações necessárias à sua demanda.
            </p>
          </Bloco>

          <Bloco title="10. Alterações desta política">
            <p>
              Podemos atualizar esta política para refletir mudanças legais ou no site. A data da última
              atualização estará sempre indicada no topo desta página.
            </p>
          </Bloco>
        </div>
      </div>
    </>
  );
}
