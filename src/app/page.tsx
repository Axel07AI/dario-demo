import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TjansterPriser from "@/components/TjansterPriser";
import OmDario from "@/components/OmDario";
import Galleri from "@/components/Galleri";
import Team from "@/components/Team";
import BokaTid from "@/components/BokaTid";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TjansterPriser />
        <OmDario />
        <Galleri />
        <Team />
        <BokaTid />
        <Kontakt />
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
