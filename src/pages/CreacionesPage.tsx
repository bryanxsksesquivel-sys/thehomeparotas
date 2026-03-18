import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterContact from "@/components/FooterContact";
import WhatsAppButton from "@/components/WhatsAppButton";

import talladoSanJudas from "@/assets/tallado-san-judas.jpg";
import espejoParota from "@/assets/espejo-parota-natural.jpg";
import talladoSerpiente from "@/assets/tallado-serpiente.jpg";
import talladoCocodrilo from "@/assets/tallado-cocodrilo.jpg";
import espejoGrande from "@/assets/espejo-grande-tallado.jpg";
import mesaVidrio from "@/assets/mesa-parota-vidrio.jpg";
import mesaCocodrilos from "@/assets/mesa-parota-cocodrilos.jpg";

const creaciones = [
  {
    src: talladoSanJudas,
    title: "Tallado San Judas Tadeo",
    category: "Tallados",
    description: "Tallado artesanal en madera maciza de parota con acabado natural brillante. Pieza única con texto personalizado.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: espejoParota,
    title: "Espejo con Marco Live Edge",
    category: "Espejos",
    description: "Espejo rectangular con marco de parota natural live edge y tallado de cocodrilos en relieve.",
    span: "md:col-span-1",
  },
  {
    src: talladoSerpiente,
    title: "Tallado Serpiente en Relieve",
    category: "Tallados",
    description: "Serpiente tallada en relieve sobre tabla de parota. Detalle y precisión en cada escama.",
    span: "md:col-span-1",
  },
  {
    src: talladoCocodrilo,
    title: "Cocodrilo Tallado en Madera",
    category: "Tallados",
    description: "Cocodrilo tallado a detalle sobre plancha de madera con borde live edge natural.",
    span: "md:col-span-1",
  },
  {
    src: espejoGrande,
    title: "Espejo Grande con Tallado de Elefantes",
    category: "Espejos",
    description: "Espejo de gran formato con marco de parota tallado con figuras de elefantes. Pieza decorativa de impacto.",
    span: "md:col-span-1",
  },
  {
    src: mesaVidrio,
    title: "Mesa de Centro con Vitrina",
    category: "Mesas",
    description: "Mesa live edge de parota con ventana de cristal que exhibe tallados de cocodrilos en el interior.",
    span: "md:col-span-1",
  },
  {
    src: mesaCocodrilos,
    title: "Mesa Live Edge con Cocodrilos",
    category: "Mesas",
    description: "Mesa de parota con cristal central y tallados artesanales de cocodrilos bajo vidrio. Vista superior.",
    span: "md:col-span-1 md:row-span-2",
  },
];

const categories = ["Todas", "Tallados", "Espejos", "Mesas"];

const CreacionesPage = () => {
  const [filter, setFilter] = useState("Todas");
  const filtered = filter === "Todas" ? creaciones : creaciones.filter((c) => c.category === filter);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main className="pt-24 pb-0">
        {/* Header */}
        <section className="px-8 md:px-16 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-sm font-body uppercase tracking-[0.25em] text-primary">Artesanía</p>
            </div>
            <h1 className="font-display font-light text-5xl md:text-7xl tracking-tight text-foreground">
              Nuestras Creaciones
            </h1>
            <p className="mt-6 font-body text-lg text-muted-foreground max-w-lg">
              Tallados, planos CNC, espejos y mesas — cada pieza hecha a mano con madera de parota 100% natural. Explora nuestro trabajo real.
            </p>

            {/* Filter */}
            <div className="flex flex-wrap gap-3 mt-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-body text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-300 ${
                    filter === cat
                      ? "bg-foreground text-background border-foreground"
                      : "border-foreground/20 text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="px-4 md:px-8 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden group cursor-pointer ${item.span}`}
                onClick={() => setSelected(selected === i ? null : i)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-body text-xs uppercase tracking-widest text-gold mb-2">{item.category}</p>
                  <h3 className="font-display text-xl md:text-2xl text-background font-light leading-tight">{item.title}</h3>
                  <p className="font-body text-sm text-background/70 mt-2 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-16 py-20 wood-grain-overlay">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-light text-3xl md:text-5xl text-foreground tracking-tight"
            >
              ¿Tienes una idea en mente?
            </motion.h2>
            <p className="font-body text-muted-foreground mt-4 text-lg">
              Fabricamos cualquier diseño que imagines. Tallados personalizados, espejos únicos, mesas a medida.
            </p>
            <a
              href="https://wa.me/527203575136?text=Hola%2C%20me%20interesa%20un%20tallado%20o%20creaci%C3%B3n%20personalizada."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border-2 border-foreground px-10 py-4 text-sm font-body uppercase tracking-widest text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
            >
              Cotizar mi creación
            </a>
          </div>
        </section>

        <FooterContact />
      </main>
    </>
  );
};

export default CreacionesPage;
