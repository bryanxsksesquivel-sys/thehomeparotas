import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ultimaCena from "@/assets/ultima-cena.jpg";
import mesaCocodrilos from "@/assets/mesa-parota-cocodrilos.jpg";
import espejoRedondo from "@/assets/espejo-redondo-tallado.jpg";
import sanJudas from "@/assets/san-judas-grande.jpg";
import virgenLiveEdge from "@/assets/virgen-live-edge.jpg";
import dragonTallado from "@/assets/dragon-tallado.jpg";
import cruzInri from "@/assets/cruz-inri-exterior.jpg";
import sagradoCorazon from "@/assets/sagrado-corazon.jpg";

const pieces = [
  { img: ultimaCena, name: "La Última Cena", category: "Arte religioso" },
  { img: mesaCocodrilos, name: "Mesa Cocodrilos", category: "Mesa live edge" },
  { img: espejoRedondo, name: "Espejo Tallado", category: "Espejo artesanal" },
  { img: sanJudas, name: "San Judas Tadeo", category: "Figura religiosa" },
  { img: virgenLiveEdge, name: "Virgen Live Edge", category: "Tallado natural" },
  { img: dragonTallado, name: "Dragón", category: "Figura artística" },
  { img: cruzInri, name: "Cruz INRI", category: "Crucifijo" },
  { img: sagradoCorazon, name: "Sagrado Corazón", category: "Arte religioso" },
];

const HorizontalGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  return (
    <section className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-gold" />
              <p className="text-[10px] font-body uppercase tracking-[0.4em] text-gold">Filmstrip</p>
            </div>
            <h2 className="font-display font-light text-5xl md:text-7xl tracking-tight text-cream leading-[0.95]">
              Piezas que <span className="italic text-gradient-gold">cuentan historias</span>
            </h2>
          </div>
          <motion.p
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="font-body text-xs uppercase tracking-[0.3em] text-gold/70 flex items-center gap-3 shrink-0"
          >
            Desliza para explorar
            <span className="text-lg">→</span>
          </motion.p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
      >
        <div className="flex gap-5 md:gap-6 px-6 md:px-12 pb-6">
          {pieces.map((p, i) => (
            <motion.a
              key={p.name}
              href="/galeria"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              whileHover={{ rotate: i % 2 === 0 ? 1.2 : -1.2, y: -8 }}
              className="group relative shrink-0 snap-start w-[260px] sm:w-[300px] md:w-[340px] aspect-[3/4] overflow-hidden bg-card cursor-pointer"
              style={{ transition: "transform 0.5s cubic-bezier(0.2, 0, 0, 1)" }}
            >
              {!loaded[i] && (
                <div className="absolute inset-0 bg-card animate-pulse" />
              )}
              <img
                src={p.img}
                alt={`${p.name} — ${p.category} en madera de parota`}
                loading="lazy"
                onLoad={() => setLoaded((s) => ({ ...s, [i]: true }))}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-110"
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-6 h-px bg-gold mb-3 transition-all duration-500 group-hover:w-12" />
                <p className="font-body text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{p.category}</p>
                <h3 className="font-display text-xl md:text-2xl text-cream font-light">{p.name}</h3>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
