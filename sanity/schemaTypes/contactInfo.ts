import { defineField, defineType } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Contato / Gabinete",
  type: "document",
  fields: [
    defineField({
      name: "address",
      title: "Endereço",
      type: "string",
    }),
    defineField({
      name: "cep",
      title: "CEP",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
    }),
    defineField({
      name: "mapsQuery",
      title: "Busca do Google Maps (endereço do mapa embed)",
      type: "string",
      description: "Texto que localiza o gabinete no mapa.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Contato / Gabinete" }),
  },
});
