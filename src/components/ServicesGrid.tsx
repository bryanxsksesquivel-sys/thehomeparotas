import { motion } from "framer-motion";
import mesasImg from "@/assets/service-mesas.jpg";
import espejosImg from "@/assets/service-espejos.jpg";
import disenoImg from "@/assets/service-diseno.jpg";
import maderasImg from "@/assets/service-maderas.jpg";

const services = [
  {
    title: "Mesas de Parota",
    description: "Mesas de alta calidad con veta natural única en cada pieza.",
    image: mesasImg,
    className: "md:col-span-7 aspect-[16/10]",
  },
  {
    title: "Espejos y Cuadros",
    description: "Espejos finos y cuadros con detallado de precisión PLC.",
    image: espejosImg,
    className: "md:col-span-5 aspect-[4/5]",
  },
  {
    title: "Muebles Sobre Diseño",
    description: "Fabricamos cualquier mueble o espejo que el cliente imagine.",
    image: disenoImg,
    className: "md:col-span-5 aspect-square",
  },
  {
    title: "Variedad de Maderas",
    description: "Además de parota, manejamos distintas maderas de alta calidad.",
    image: maderasImg,
    className: "md:col-span-7 aspect-[16/9]",
  },
];

const ServicesGrid = () => {
  return (
    <section className="px-4 md:px-8 py-[12vh] md:py-[16vh] relative wood-grain-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4 px-4">
          <div className="w-8 h-0.5 bg-primary" />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="text-sm font-body uppercase tracking-[0.25em] text-primary"
          >
            Productos y Servicios
          </motion.p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="font-display font-light text-4xl md:text-6xl tracking-tight text-foreground mb-16 px-4"
        >
          Lo que hacemos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.2, 0, 0, 1] }}
              className={`relative overflow-hidden group cursor-pointer ${service.className}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-all duration-700 group-hover:from-foreground/90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-6 h-0.5 bg-gold mb-4 transition-all duration-500 group-hover:w-12" />
                <h3 className="font-display font-light text-2xl md:text-3xl text-background tracking-tight">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-background/70 mt-2 max-w-sm transition-all duration-500 group-hover:text-background/90">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
