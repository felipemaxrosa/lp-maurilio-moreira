import { defineField, defineType } from "sanity";

export const depoimento = defineType({
  name: "depoimento",
  title: "Depoimento",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      description: "Menor aparece primeiro.",
    }),
    defineField({
      name: "quote",
      title: "Depoimento",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "detail",
      title: "Detalhe (bairro)",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "author", subtitle: "detail" },
  },
});
