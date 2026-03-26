import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterContact from "@/components/FooterContact";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageLightbox from "@/components/ImageLightbox";

import talladoSanJudas from "@/assets/tallado-san-judas.jpg";
import espejoParota from "@/assets/espejo-parota-natural.jpg";
import talladoSerpiente from "@/assets/tallado-serpiente.jpg";
import talladoCocodrilo from "@/assets/tallado-cocodrilo.jpg";
import espejoGrande from "@/assets/espejo-grande-tallado.jpg";
import mesaVidrio from "@/assets/mesa-parota-vidrio.jpg";
import mesaCocodrilos from "@/assets/mesa-parota-cocodrilos.jpg";
import cruzTallada from "@/assets/cruz-tallada.jpg";
import cobraTallada from "@/assets/cobra-tallada.jpg";
import platosTallados from "@/assets/platos-tallados.jpg";
import sanJudasGrande from "@/assets/san-judas-grande.jpg";
import virgenesCruces from "@/assets/virgenes-cruces.jpg";
import medallonCristo from "@/assets/medallón-cristo.jpg";
import mantoCristo from "@/assets/manto-cristo.jpg";
import rostroOval from "@/assets/rostro-oval.jpg";
import medallonOrnamental from "@/assets/medallon-ornamental.jpg";
import sanJorgeDragon from "@/assets/san-jorge-dragon.jpg";
import ultimaCena from "@/assets/ultima-cena.jpg";
import sagradoCorazon from "@/assets/sagrado-corazon.jpg";
import dragonTallado from "@/assets/dragon-tallado.jpg";
import corazonTallado from "@/assets/corazon-tallado.jpg";
import sanJudasTaller from "@/assets/san-judas-taller.jpg";
import indioTallado from "@/assets/indio-tallado.jpg";
import mesaCocodrilosTaller from "@/assets/mesa-cocodrilos-taller.jpg";
import planoDragonTigre from "@/assets/plano-dragon-tigre.jpg";
import caballoTallado from "@/assets/caballo-tallado.jpg";
import guadalupanaParota from "@/assets/guadalupana-parota.jpg";
import espejoRedondoTallado from "@/assets/espejo-redondo-tallado.jpg";
import relieveOracion from "@/assets/relieve-oracion.jpg";

const creaciones = [
  { src: cruzTallada, title: "Cruz INRI Tallada", category: "Religiosos", description: "Cruz con rostro de Cristo tallado en relieve, acabado oscuro brillante sobre madera maciza.", span: "md:col-span-2 md:row-span-2" },
  { src: ultimaCena, title: "La Última Cena", category: "Religiosos", description: "Cuadro monumental de la Última Cena con marco ornamental tallado a detalle.", span: "md:col-span-2 md:row-span-2" },
  { src: cobraTallada, title: "Cobra Real en Relieve", category: "Tallados", description: "Cobra tallada en alto relieve sobre tabla de parota natural live edge.", span: "md:col-span-1" },
  { src: sanJudasGrande, title: "San Judas Tadeo Monumental", category: "Religiosos", description: "Pieza de gran formato tallada en plancha de parota con borde natural y base de madera.", span: "md:col-span-1 md:row-span-2" },
  { src: platosTallados, title: "Platos Decorativos Tallados", category: "Tallados", description: "Conjunto de platos con escenas náuticas y motivos de trigo y uvas.", span: "md:col-span-1" },
  { src: virgenesCruces, title: "Vírgenes y Crucifijos", category: "Religiosos", description: "Colección de Virgen de Guadalupe, crucifijo y medallón religioso tallados en parota.", span: "md:col-span-1" },
  { src: medallonCristo, title: "Medallón Cristo Orante", category: "Religiosos", description: "Medallón ovalado con perfil de Cristo en oración, marco de madera natural.", span: "md:col-span-1" },
  { src: sanJorgeDragon, title: "San Jorge y el Dragón", category: "Tallados", description: "Disco decorativo con escena ecuestre de San Jorge venciendo al dragón, borde griego.", span: "md:col-span-1" },
  { src: indioTallado, title: "Guerrero Indígena", category: "Tallados", description: "Cuadro con perfil de guerrero con penacho tallado en relieve profundo y atrapasueños.", span: "md:col-span-1" },
  { src: mesaVidrio, title: "Mesa con Vitrina de Cristal", category: "Mesas", description: "Mesa live edge con ventana de cristal que exhibe cocodrilos tallados.", span: "md:col-span-1" },
  { src: mesaCocodrilos, title: "Mesa Live Edge con Cocodrilos", category: "Mesas", description: "Mesa de parota con cristal central y tallados artesanales bajo vidrio.", span: "md:col-span-1" },
  { src: mesaCocodrilosTaller, title: "Mesa en Proceso — Taller", category: "Mesas", description: "Mesa live edge de parota con cocodrilos tallados durante proceso de fabricación.", span: "md:col-span-1" },
  { src: espejoParota, title: "Espejo Live Edge con Cocodrilos", category: "Espejos", description: "Espejo rectangular con marco de parota natural y tallado de cocodrilos.", span: "md:col-span-1" },
  { src: espejoGrande, title: "Espejo Grande con Elefantes", category: "Espejos", description: "Espejo de gran formato con marco de parota tallado con elefantes.", span: "md:col-span-1" },
  { src: espejoRedondoTallado, title: "Espejo Redondo con Tallado", category: "Espejos", description: "Espejo circular con marco live edge y tallado de figuras tradicionales.", span: "md:col-span-1" },
  { src: dragonTallado, title: "Dragón con Lámpara", category: "Tallados", description: "Pieza escultórica de dragón tallado en parota con abertura para lámpara y lobo grabado.", span: "md:col-span-1 md:row-span-2" },
  { src: corazonTallado, title: "Corazón Romántico", category: "Tallados", description: "Tallado en forma de corazón con escena de pareja y flores.", span: "md:col-span-1" },
  { src: caballoTallado, title: "Caballo en Relieve", category: "Tallados", description: "Caballo al galope tallado en alto relieve sobre plancha de parota natural.", span: "md:col-span-1" },
  { src: guadalupanaParota, title: "Guadalupana Barroca", category: "Religiosos", description: "Virgen de Guadalupe con marco barroco tallado y base de madera.", span: "md:col-span-1" },
  { src: relieveOracion, title: "Relieve con Oración", category: "Religiosos", description: "Escena de niña y crucifijo con oración del Padre Nuestro tallada.", span: "md:col-span-1" },
  { src: planoDragonTigre, title: "Plano CNC — Dragón vs Tigre", category: "Planos CNC", description: "Diseño CNC de dragón y tigre en combate con mascotas personalizadas.", span: "md:col-span-1" },
  { src: talladoSanJudas, title: "San Judas — Tabla Dorada", category: "Religiosos", description: "Tallado artesanal en tabla de parota con acabado natural brillante.", span: "md:col-span-1" },
  { src: talladoSerpiente, title: "Serpiente en Relieve", category: "Tallados", description: "Serpiente con escamas detalladas sobre tabla de parota.", span: "md:col-span-1" },
  { src: talladoCocodrilo, title: "Cocodrilo Tallado", category: "Tallados", description: "Cocodrilo tallado a detalle con borde live edge natural.", span: "md:col-span-1" },
];

const categories = ["Todas", "Religiosos", "Tallados", "Mesas", "Espejos", "Planos CNC"];

const CreacionesPage = () => {
  const [filter, setFilter] = useState("Todas");
  const filtered = filter === "Todas" ? creaciones : creaciones.filter((c) => c.category === filter);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <ImageLightbox
        images={filtered}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        onNavigate={setLightboxIndex}
      />
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
              Tallados religiosos, figuras artísticas, planos CNC, espejos y mesas — cada pieza hecha a mano con madera de parota 100% natural.
            </p>

            {/* Filter */}
            <div className="flex flex-wrap gap-3 mt-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setFilter(cat); setLightboxIndex(-1); }}
                  className={`font-body text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-300 ${
                    filter === cat
                      ? "bg-foreground text-background border-foreground"
                      : "border-foreground/20 text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                  <span className="ml-2 text-[10px] opacity-60">
                    ({cat === "Todas" ? creaciones.length : creaciones.filter(c => c.category === cat).length})
                  </span>
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
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative overflow-hidden group cursor-pointer ${item.span}`}
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
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
                {/* Zoom icon hint */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-background">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-16 py-20 bg-wood-dark">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-light text-3xl md:text-5xl text-background tracking-tight"
            >
              ¿Tienes una idea en mente?
            </motion.h2>
            <p className="font-body text-background/70 mt-4 text-lg">
              Fabricamos cualquier diseño que imagines. Tallados personalizados, espejos únicos, mesas a medida.
            </p>
            <a
              href="https://wa.me/527203575136?text=Hola%2C%20me%20interesa%20un%20tallado%20o%20creaci%C3%B3n%20personalizada."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border-2 border-gold px-10 py-4 text-sm font-body uppercase tracking-widest text-gold transition-all duration-500 hover:bg-gold hover:text-foreground"
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
