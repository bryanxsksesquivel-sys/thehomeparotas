import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import FooterContact from "@/components/FooterContact";
import WhatsAppButton from "@/components/WhatsAppButton";
import SawdustParticles from "@/components/SawdustParticles";

const Index = () => {
  return (
    <>
      <SawdustParticles />
      <Navbar />
      <WhatsAppButton />
      <main>
        <HeroSection />
        <ServicesGrid />
        <AboutSection />
        <FooterContact />
      </main>
    </>
  );
};

export default Index;
