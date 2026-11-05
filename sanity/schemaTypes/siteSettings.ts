import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Configurações do site",
  type: "document",
  groups: [
    { name: "marca", title: "Marca" },
    { name: "whatsapp", title: "WhatsApp" },
    { name: "redes", title: "Redes" },
    { name: "rodape", title: "Rodapé" },
  ],
  fields: [
    defineField({
      name: "brandName",
      title: "Nome da marca",
      type: "string",
      group: "marca",
    }),
    defineField({
      name: "brandEyebrow",
      title: "Subtítulo da marca",
      type: "string",
      description: 'Ex.: "Vereador · AGIR".',
      group: "marca",
    }),
    defineField({
      name: "logo",
      title: "Logo / brasão",
      type: "image",
      group: "marca",
      fields: [
        defineField({ name: "alt", title: "Texto alternativo", type: "string" }),
      ],
    }),
    defineField({
      name: "themeColor",
      title: "Cor do tema (barra do navegador)",
      type: "string",
      group: "marca",
    }),
    defineField({
      name: "siteUrl",
      title: "URL do site",
      type: "url",
      group: "marca",
    }),
    defineField({
      name: "whatsappNumber",
      title: "Número do WhatsApp (só dígitos, com DDI)",
      type: "string",
      description: "Ex.: 5512997642199",
      group: "whatsapp",
    }),
    defineField({
      name: "whatsappDisplay",
      title: "WhatsApp (exibição)",
      type: "string",
      description: "Ex.: (12) 99764-2199",
      group: "whatsapp",
    }),
    defineField({
      name: "defaultWhatsappMessage",
      title: "Mensagem padrão do WhatsApp",
      type: "text",
      rows: 3,
      group: "whatsapp",
    }),
    defineField({
      name: "socials",
      title: "Redes sociais",
      type: "object",
      group: "redes",
      fields: [
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "facebook", title: "Facebook", type: "url" }),
        defineField({ name: "youtube", title: "YouTube", type: "url" }),
        defineField({ name: "camara", title: "Câmara Municipal", type: "url" }),
      ],
    }),
    defineField({
      name: "footerTagline",
      title: "Frase do rodapé",
      type: "text",
      rows: 3,
      group: "rodape",
    }),
    defineField({
      name: "footerCopyright",
      title: "Linha de copyright",
      type: "string",
      group: "rodape",
    }),
    defineField({
      name: "footerLegal",
      title: "Linha legal / mandato",
      type: "string",
      group: "rodape",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Configurações do site" }),
  },
});
