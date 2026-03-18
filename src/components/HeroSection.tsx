import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wood.jpg";

const WHATSAPP_URL = "https://wa.me/527203575136?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20muebles%20en%20parota.";

const HeroSection = () => {
  return (
    <section className="min-h-svh grid grid-cols-1 lg:grid-cols-12 gap-0">
      {/* Text */}
      <div className="lg:col-span-5 flex flex-col justify-center px-8 md:px-16 py-20 lg:py-0">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-sm font-body uppercase tracking-widest text-muted-foreground mb-6"
        >
          Taller de Ebanistería
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="font-display font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground text-balance leading-[1.05]"
        >
          Muebles y Espejos en Madera 100% Parota.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="mt-8 text-lg text-muted-foreground font-body max-w-md leading-relaxed"
        >
          Diseños únicos, detalles de precisión y trabajos a la medida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.2, 0, 0, 1] }}
          className="mt-12"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground px-10 py-5 text-sm font-body uppercase tracking-widest text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
            style={{ transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" }}
          >
            Cotizar mi proyecto
          </a>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.2, 0, 0, 1] }}
        className="lg:col-span-7 relative overflow-hidden min-h-[50vh] lg:min-h-0"
      >
        <img
          src={heroImage}
          alt="Mesa de parota con veta natural"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
