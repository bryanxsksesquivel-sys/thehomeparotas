import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HorizontalGallery from "@/components/HorizontalGallery";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import FooterContact from "@/components/FooterContact";
import WhatsAppButton from "@/components/WhatsAppButton";
import SawdustParticles from "@/components/SawdustParticles";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustBar from "@/components/TrustBar";

const Index = () => {
  return (
    <>
      <SawdustParticles />
      <Navbar />
      <WhatsAppButton />
      <main className="bg-background">
        <HeroSection />
        <TrustBar />
        <HorizontalGallery />
        <ServicesGrid />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <FooterContact />
      </main>
    </>
  );
};

export default Index;
