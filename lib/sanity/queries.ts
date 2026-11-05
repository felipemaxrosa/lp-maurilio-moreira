import { defineQuery } from "next-sanity";

// Fragmento de imagem: URL do CDN + dimensões + lqip + alt (pronto p/ next/image).
const image = `{
  "alt": coalesce(alt, ""),
  "url": asset->url,
  "lqip": asset->metadata.lqip,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height
}`;

/* Singletons */

export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]{
  brandName, brandEyebrow, themeColor, siteUrl,
  whatsappNumber, whatsappDisplay, defaultWhatsappMessage,
  socials,
  footerTagline, footerCopyright, footerLegal,
  logo ${image}
}`);

export const contactInfoQuery = defineQuery(`*[_type == "contactInfo"][0]{
  address, cep, email, mapsQuery
}`);

export const heroQuery = defineQuery(`*[_type == "heroSettings"][0]{
  seloBadge, seloTitle, seloMeta,
  portrait ${image}
}`);

export const seoQuery = defineQuery(`*[_type == "seoSettings"][0]{
  siteName, keywords, home, mandato, podcast,
  ogImage ${image}
}`);

/* Coleções */

export const bandeirasQuery = defineQuery(`*[_type == "bandeira"]|order(order asc){
  _id, icon, title, copy, tags, featured
}`);

export const mandateCardsQuery = defineQuery(`*[_type == "mandateCard"]|order(order asc){
  _id, category, selo, seloTone, title, copy, ctaLabel, ctaHref, sourceUrl,
  media{ type, image ${image} }
}`);

export const comunidadeQuery = defineQuery(`*[_type == "comunidadeFoto"]|order(order asc){
  _id, caption, href, image ${image}
}`);

export const depoimentosQuery = defineQuery(`*[_type == "depoimento"]|order(order asc){
  _id, quote, author, detail
}`);

export const episodesQuery = defineQuery(`*[_type == "episode"]|order(order asc){
  _id, youtubeId, title, guest
}`);
