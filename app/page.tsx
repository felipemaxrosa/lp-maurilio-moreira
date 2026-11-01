import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Scoreboard } from "@/components/Scoreboard";
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
        <Scoreboard />
        <Podcast />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
