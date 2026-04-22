import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import FooterContact from "@/components/FooterContact";
import WhatsAppButton from "@/components/WhatsAppButton";
import SawdustParticles from "@/components/SawdustParticles";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AnimatedStats from "@/components/AnimatedStats";
import SectionDivider from "@/components/SectionDivider";
import TrustBar from "@/components/TrustBar";

const Index = () => {
  return (
    <>
      <SawdustParticles />
      <Navbar />
      <WhatsAppButton />
      <main>
        <HeroSection />
        <TrustBar />
        <ProcessSection />
        <SectionDivider />
        <ServicesGrid />
        <SectionDivider />
        <AnimatedStats />
        <AboutSection />
        <SectionDivider />
        <TestimonialsSection />
        <FooterContact />
      </main>
    </>
  );
};

export default Index;
