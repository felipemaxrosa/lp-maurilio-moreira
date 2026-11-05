import { defineField, defineType } from "sanity";

export const mandateCard = defineType({
  name: "mandateCard",
  title: "Placar do Mandato",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      description: "Menor aparece primeiro.",
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Leis & Direitos", value: "leis" },
          { title: "Asfalto & Obras", value: "asfalto" },
          { title: "Mobilidade", value: "mobilidade" },
          { title: "Esporte & Cultura", value: "esporte" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "selo",
      title: "Selo",
      type: "string",
      description: 'Ex.: "Lei aprovada por unanimidade".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "seloTone",
      title: "Cor do selo",
      type: "string",
      options: {
        list: [
          { title: "Lei (verde)", value: "lei" },
          { title: "Demanda (teal)", value: "demanda" },
          { title: "Fiscalização (âmbar)", value: "fiscalizacao" },
        ],
        layout: "radio",
      },
      initialValue: "demanda",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "copy",
      title: "Texto",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "ctaLabel",
      title: "Rótulo do botão (opcional)",
      type: "string",
    }),
    defineField({
      name: "ctaHref",
      title: "Link do botão (opcional)",
      type: "url",
      validation: (r) =>
        r.uri({ scheme: ["http", "https"], allowRelative: true }),
    }),
    defineField({
      name: "sourceUrl",
      title: "Link da publicação (opcional)",
      type: "url",
      description: "Instagram/Facebook/YouTube de origem.",
    }),
    defineField({
      name: "media",
      title: "Mídia",
      type: "object",
      fields: [
        defineField({
          name: "type",
          title: "Tipo",
          type: "string",
          options: {
            list: [
              { title: "Foto", value: "photo" },
              { title: "Vídeo (capa + play)", value: "video" },
              { title: "Documento", value: "document" },
            ],
            layout: "radio",
          },
          initialValue: "photo",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "image",
          title: "Imagem / capa",
          type: "image",
          options: { hotspot: true },
          description:
            "Opcional. Sem imagem, o card usa a arte-padrão (CardArt).",
          fields: [
            defineField({ name: "alt", title: "Texto alternativo", type: "string" }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "selo", media: "media.image" },
  },
});
