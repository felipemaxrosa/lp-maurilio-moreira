import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "../globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { sanityFetch } from "@/lib/sanity/fetch";
import {
  contactInfoQuery,
  seoQuery,
  siteSettingsQuery,
} from "@/lib/sanity/queries";
import type {
  ContactInfo,
  SeoSettings,
  SiteSettings,
} from "@/lib/sanity/types";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://mauriliomoreira.com.br";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await sanityFetch<SeoSettings>(seoQuery, {}, ["seoSettings"]);
  const title = seo?.home?.title ?? "Maurílio Moreira — Vereador de Caraguatatuba";
  const description =
    seo?.home?.description ??
    "Trabalho, Fé e Raízes Caiçaras por Caraguatatuba. Um mandato de resultado: pé no bairro, fiscalização firme e respeito a quem confiou o voto.";
  const ogImage = seo?.ogImage?.url;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: seo?.keywords,
    authors: [{ name: "Maurílio Moreira" }],
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: SITE_URL,
      siteName: seo?.siteName ?? title,
      title,
      description,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: seo?.ogImage?.alt ?? title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0c4a52",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const [settings, contact] = await Promise.all([
    sanityFetch<SiteSettings>(siteSettingsQuery, {}, ["siteSettings"]),
    sanityFetch<ContactInfo>(contactInfoQuery, {}, ["contactInfo"]),
  ]);

  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <SmoothScroll />
        <Header settings={settings} />
        <main className="flex-1">{children}</main>
        <Footer settings={settings} contact={contact} />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
