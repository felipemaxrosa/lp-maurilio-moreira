import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Bandeiras } from "@/components/Bandeiras";
import { Scoreboard } from "@/components/Scoreboard";
import { Comunidade } from "@/components/Comunidade";
import { Podcast } from "@/components/Podcast";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <About />
        <Bandeiras />
        <Scoreboard />
        <Comunidade />
        <Podcast />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
