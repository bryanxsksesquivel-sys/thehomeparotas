import { motion } from "framer-motion";
import mesasImg from "@/assets/mesa-parota-vidrio.jpg";
import espejosImg from "@/assets/espejo-redondo-tallado.jpg";
import disenoImg from "@/assets/indio-tallado.jpg";
import maderasImg from "@/assets/san-judas-taller.jpg";

const services = [
  {
    title: "Mesas de Parota",
    description: "Mesas live edge con tallados de cocodrilos, vitrinas de cristal y acabados naturales.",
    image: mesasImg,
    className: "md:col-span-7 aspect-[16/10]",
  },
  {
    title: "Espejos Artesanales",
    description: "Espejos con marcos de parota tallados a mano, bordes naturales y figuras en relieve.",
    image: espejosImg,
    className: "md:col-span-5 aspect-[4/5]",
  },
  {
    title: "Tallados y Figuras CNC",
    description: "Tallados religiosos, figuras artísticas y diseños personalizados con precisión CNC Router.",
    image: disenoImg,
    className: "md:col-span-5 aspect-square",
  },
  {
    title: "Arte Religioso en Madera",
    description: "Santos, vírgenes, crucifijos y la Última Cena tallados en madera de parota 100% natural.",
    image: maderasImg,
    className: "md:col-span-7 aspect-[16/9]",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-background px-4 md:px-8 py-24 md:py-32 relative wood-grain-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-gold" />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-[10px] font-body uppercase tracking-[0.4em] text-gold"
            >
              Lo que creamos
            </motion.p>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-light text-5xl md:text-7xl tracking-tight text-cream leading-[0.95]"
          >
            Especialidades del <span className="italic text-gradient-gold">taller</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href="/creaciones"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.2, 0, 0, 1] }}
              className={`relative overflow-hidden group cursor-pointer bg-card ${service.className}`}
            >
              <img
                src={service.image}
                alt={`${service.title} en madera de parota`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-all duration-700 group-hover:from-background group-hover:via-background/60" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/60 transition-colors duration-500 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-6 h-px bg-gold mb-4 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display font-light text-2xl md:text-3xl text-cream tracking-tight">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-cream/60 mt-2 max-w-sm transition-all duration-500 group-hover:text-cream/85">
                  {service.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
