import { motion } from "framer-motion";
import heroImage from "@/assets/ultima-cena.jpg";
import cruzTallada from "@/assets/cruz-tallada.jpg";
import woodTexture from "@/assets/wood-texture.jpg";

const WHATSAPP_URL = "https://wa.me/527203575136?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20muebles%20en%20parota.";

const HeroSection = () => {
  return (
    <section className="relative min-h-svh grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
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
            className="inline-block border border-foreground px-10 py-5 text-sm font-body uppercase tracking-widest text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
            style={{ transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" }}
          >
            Ver galería
          </a>
        </motion.div>

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
        <img
          src={heroImage}
          alt="La Última Cena tallada en madera de parota — CNC Router Ocoyoacac"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/40" />
        {/* Small featured piece overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-6 right-6 w-32 h-32 md:w-44 md:h-44 rounded-sm overflow-hidden shadow-2xl border-2 border-background/20"
        >
          <img src={cruzTallada} alt="Cruz tallada en madera" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
