import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/ultima-cena.jpg";
import woodTexture from "@/assets/wood-texture.jpg";

const WHATSAPP_URL = "https://wa.me/527203575136?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20muebles%20en%20parota.";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative min-h-svh w-full overflow-hidden bg-background">
      {/* Background image with parallax */}
      <motion.div
        style={{ y: parallaxY, opacity: fadeOut }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={heroImage}
          alt="La Última Cena tallada en madera de parota — taller artesanal en Ocoyoacac"
          className="absolute inset-0 w-full h-[120%] object-cover object-center"
        />
        {/* Triple gradient for cinematic dark feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-background/60" />
      </motion.div>

      {/* Wood grain texture at 15% */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: "cover" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 4% / 0.7) 100%)"
      }} />

      {/* Content */}
      <div className="relative z-10 min-h-svh flex flex-col justify-center items-center text-center px-6 pt-28 pb-32">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.2, 0, 0, 1] }}
          className="w-16 h-px bg-gold origin-left mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-[10px] sm:text-xs font-body uppercase tracking-[0.5em] text-gold mb-6 sm:mb-10"
        >
          Carpintería Artesanal · Ocoyoacac
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.2, 0, 0, 1] }}
          className="font-display font-light text-cream leading-[0.95] tracking-tight"
        >
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem]">Arte que</span>
          <span className="block text-gradient-sunset italic font-normal text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] mt-2">
            Perdura
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 sm:mt-12 max-w-xl font-body text-base sm:text-lg text-cream/65 leading-relaxed"
        >
          Tallados artesanales, mesas live edge, espejos con marco natural y figuras religiosas. Cada pieza, irrepetible. Cada veta, una historia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/creaciones"
            className="btn-shimmer relative bg-gold text-background px-10 py-5 text-xs font-body uppercase tracking-[0.3em] transition-all duration-500 hover:bg-gold-bright hover:shadow-gold"
          >
            Ver Creaciones
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer relative border border-gold/60 text-gold px-10 py-5 text-xs font-body uppercase tracking-[0.3em] transition-all duration-500 hover:bg-gold hover:text-background"
          >
            Cotizar Ahora
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.4em] text-gold/70">Desliza</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
