import type { StructureResolver } from "sanity/structure";

// Singletons fixos no topo + coleções abaixo.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.listItem()
        .title("Configurações do site")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.listItem()
        .title("Contato / Gabinete")
        .id("contactInfo")
        .child(
          S.document().schemaType("contactInfo").documentId("contactInfo"),
        ),
      S.listItem()
        .title("Hero")
        .id("heroSettings")
        .child(
          S.document().schemaType("heroSettings").documentId("heroSettings"),
        ),
      S.listItem()
        .title("SEO & Compartilhamento")
        .id("seoSettings")
        .child(
          S.document().schemaType("seoSettings").documentId("seoSettings"),
        ),
      S.divider(),
      S.documentTypeListItem("mandateCard").title("Placar do Mandato"),
      S.documentTypeListItem("bandeira").title("Bandeiras"),
      S.documentTypeListItem("comunidadeFoto").title("Comunidade"),
      S.documentTypeListItem("depoimento").title("Depoimentos"),
      S.documentTypeListItem("episode").title("Podcast"),
    ]);
