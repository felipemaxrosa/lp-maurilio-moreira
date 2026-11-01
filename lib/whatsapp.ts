// Monta links wa.me com mensagem pré-preenchida (sem backend — abre o WhatsApp do gabinete).
export const WHATSAPP_NUMBER = "5512997642199"; // +55 (12) 99764-2199 — gabinete

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Mensagem padrão do CTA geral (hero, header, botão flutuante).
export const DEFAULT_WA_MESSAGE =
  "Olá! Vim pelo site do vereador Maurílio Moreira e gostaria de falar com o gabinete.";

// Monta a mensagem do formulário "Gabinete Aberto".
export function demandMessage(input: {
  nome: string;
  bairro: string;
  telefone: string;
  mensagem: string;
}): string {
  return [
    "*Gabinete Aberto — nova demanda pelo site*",
    `*Nome:* ${input.nome}`,
    `*Bairro:* ${input.bairro}`,
    `*Telefone:* ${input.telefone}`,
    "",
    input.mensagem,
  ].join("\n");
}
