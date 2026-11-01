import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Maurílio Moreira — Vereador de Caraguatatuba",
  description:
    "Trabalho, Fé e Raízes Caiçaras por Caraguatatuba. Um mandato de resultado: pé no bairro, fiscalização firme e respeito a quem confiou o voto.",
  keywords: [
    "Maurílio Moreira",
    "vereador Caraguatatuba",
    "AGIR Caraguatatuba",
    "mandato 2025-2028",
    "Câmara de Caraguatatuba",
  ],
  authors: [{ name: "Maurílio Moreira" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Maurílio Moreira — Vereador de Caraguatatuba",
    title: "Maurílio Moreira — Vereador de Caraguatatuba",
    description:
      "Um mandato de resultado: pé no bairro, fiscalização firme e respeito a quem confiou o voto.",
    images: [{ url: "/maurilio-hero.png", width: 1133, height: 1396, alt: "Vereador Maurílio Moreira" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maurílio Moreira — Vereador de Caraguatatuba",
    description:
      "Um mandato de resultado: pé no bairro, fiscalização firme e respeito a quem confiou o voto.",
    images: ["/maurilio-hero.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c4a52",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">{children}</body>
    </html>
  );
}
