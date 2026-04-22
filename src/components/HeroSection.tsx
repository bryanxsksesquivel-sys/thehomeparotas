import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/ultima-cena.jpg";
import cruzTallada from "@/assets/cruz-tallada.jpg";
import woodTexture from "@/assets/wood-texture.jpg";

const WHATSAPP_URL = "https://wa.me/527203575136?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20muebles%20en%20parota.";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative min-h-svh grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
      {/* Subtle wood texture bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: "cover" }}
      />

      {/* Text */}
      <div className="lg:col-span-5 flex flex-col justify-center px-8 md:px-16 py-32 lg:py-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          className="w-12 h-0.5 bg-primary mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-sm font-body uppercase tracking-[0.25em] text-primary mb-6"
        >
          CNC Router Ocoyoacac
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="font-display font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground text-balance leading-[1.05]"
        >
          Muebles, Espejos y Tallados en{" "}
          <span className="text-primary">Madera de Parota.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="mt-8 text-lg text-muted-foreground font-body max-w-md leading-relaxed"
        >
          Tallados artesanales, mesas live edge, espejos con marco natural y figuras religiosas. Cada pieza es única, hecha a mano con precisión CNC.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.2, 0, 0, 1] }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground px-10 py-5 text-sm font-body uppercase tracking-widest text-background transition-all duration-500 hover:bg-primary"
            style={{ transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" }}
          >
            Cotizar mi proyecto
          </a>
          <a
            href="/galeria"
            className="inline-block border border-foreground px-10 py-5 text-sm font-body uppercase tracking-widest text-foreground transition-all duration-500 hover:bg-foreground hover:text-background hover:scale-[1.03]"
            style={{ transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" }}
          >
            Ver galería
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 font-body text-sm text-muted-foreground"
        >
          ⏱ Tiempos de entrega: 2 a 4 semanas según la pieza
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex gap-12 border-t border-foreground/10 pt-8"
        >
          {[
            { number: "100%", label: "Madera natural" },
            { number: "CNC", label: "Precisión Router" },
            { number: "A medida", label: "Cada pieza" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl text-primary font-light">{stat.number}</p>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0, 0, 1] }}
        className="lg:col-span-7 relative overflow-hidden min-h-[60vh] lg:min-h-0"
      >
        <motion.img
          src={heroImage}
          alt="La Última Cena tallada en madera de parota natural — taller artesanal en Ocoyoacac"
          loading="eager"
          style={{ y: parallaxY }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.18 }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 w-full h-[120%] object-cover object-center will-change-transform"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        {/* Small featured piece overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-6 right-6 w-32 h-32 md:w-44 md:h-44 rounded-sm overflow-hidden shadow-2xl border-2 border-background/20"
        >
          <img src={cruzTallada} alt="Cruz INRI tallada en parota" loading="lazy" className="w-full h-full object-cover object-center" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 1.5 }, y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-foreground/50">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-foreground/60">
          <path d="M8 2v18M2 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
