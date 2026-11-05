import { defineField, defineType } from "sanity";

export const bandeira = defineType({
  name: "bandeira",
  title: "Bandeira do Mandato",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      description: "Menor aparece primeiro.",
    }),
    defineField({
      name: "icon",
      title: "Ícone",
      type: "string",
      options: {
        list: [
          { title: "Inclusão (acessibilidade)", value: "inclusao" },
          { title: "Saúde (coração)", value: "saude" },
          { title: "Articulação (aperto de mãos)", value: "articulacao" },
          { title: "Pesca (peixe)", value: "pesca" },
        ],
        layout: "radio",
      },
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
      name: "tags",
      title: "Tags (só nos cards em destaque)",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "featured",
      title: "Destaque (card grande teal)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "icon" },
  },
});
