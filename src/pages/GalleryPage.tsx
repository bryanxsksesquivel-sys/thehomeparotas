import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterContact from "@/components/FooterContact";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageLightbox from "@/components/ImageLightbox";

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
import guadalupanaClara from "@/assets/guadalupana-clara.jpg";
import relieveOracion from "@/assets/relieve-oracion.jpg";
import cruzInriExterior from "@/assets/cruz-inri-exterior.jpg";
import sanJudasPersonalizado from "@/assets/san-judas-personalizado.jpg";
import virgenLiveEdge from "@/assets/virgen-live-edge.jpg";
import cristoCrucifijo from "@/assets/cristo-crucifijo.jpg";

import talladoSanJudas from "@/assets/tallado-san-judas.jpg";
import espejoParota from "@/assets/espejo-parota-natural.jpg";
import talladoSerpiente from "@/assets/tallado-serpiente.jpg";
import talladoCocodrilo from "@/assets/tallado-cocodrilo.jpg";
import espejoGrande from "@/assets/espejo-grande-tallado.jpg";
import mesaVidrio from "@/assets/mesa-parota-vidrio.jpg";
import mesaCocodrilos from "@/assets/mesa-parota-cocodrilos.jpg";
import mesasImg from "@/assets/service-mesas.jpg";
import espejosImg from "@/assets/service-espejos.jpg";

const images = [
  { src: cruzTallada, title: "Cruz INRI con Rostro de Cristo", category: "Religiosos" },
  { src: ultimaCena, title: "La Última Cena — Cuadro Monumental", category: "Religiosos" },
  { src: cobraTallada, title: "Cobra Real en Alto Relieve", category: "Tallados" },
  { src: sanJudasGrande, title: "San Judas Tadeo Monumental", category: "Religiosos" },
  { src: mesaVidrio, title: "Mesa con Vitrina de Cristal", category: "Mesas" },
  { src: platosTallados, title: "Platos Decorativos Tallados", category: "Tallados" },
  { src: virgenesCruces, title: "Colección Vírgenes y Crucifijos", category: "Religiosos" },
  { src: medallonCristo, title: "Medallón Cristo Orante", category: "Religiosos" },
  { src: mantoCristo, title: "Santo Manto Tallado", category: "Religiosos" },
  { src: rostroOval, title: "Rostro de Cristo en Óvalo Natural", category: "Religiosos" },
  { src: medallonOrnamental, title: "Medallón Ornamental Redondo", category: "Religiosos" },
  { src: sanJorgeDragon, title: "San Jorge y el Dragón", category: "Tallados" },
  { src: sagradoCorazon, title: "Sagrado Corazón en Relieve", category: "Religiosos" },
  { src: dragonTallado, title: "Dragón con Lámpara", category: "Tallados" },
  { src: corazonTallado, title: "Corazón Romántico Tallado", category: "Tallados" },
  { src: sanJudasTaller, title: "San Judas — Desde el Taller", category: "Religiosos" },
  { src: indioTallado, title: "Guerrero Indígena con Penacho", category: "Tallados" },
  { src: mesaCocodrilosTaller, title: "Mesa en Proceso — Cocodrilos", category: "Mesas" },
  { src: planoDragonTigre, title: "Plano CNC — Dragón vs Tigre", category: "Planos CNC" },
  { src: caballoTallado, title: "Caballo al Galope", category: "Tallados" },
  { src: guadalupanaParota, title: "Guadalupana Barroca en Parota", category: "Religiosos" },
  { src: espejoRedondoTallado, title: "Espejo Redondo con Tallado", category: "Espejos" },
  { src: guadalupanaClara, title: "Guadalupana en Madera Clara", category: "Religiosos" },
  { src: relieveOracion, title: "Relieve con Oración Tallada", category: "Religiosos" },
  { src: cruzInriExterior, title: "Cruz INRI — Exterior", category: "Religiosos" },
  { src: sanJudasPersonalizado, title: "San Judas Personalizado", category: "Religiosos" },
  { src: virgenLiveEdge, title: "Virgen en Plancha Live Edge", category: "Religiosos" },
  { src: cristoCrucifijo, title: "Cristo Crucificado en Relieve", category: "Religiosos" },
  { src: espejoParota, title: "Espejo Live Edge con Cocodrilos", category: "Espejos" },
  { src: espejoGrande, title: "Espejo Grande con Elefantes", category: "Espejos" },
  { src: mesaCocodrilos, title: "Mesa Live Edge con Cocodrilos", category: "Mesas" },
  { src: talladoSanJudas, title: "San Judas — Tabla Dorada", category: "Religiosos" },
  { src: talladoSerpiente, title: "Serpiente en Relieve", category: "Tallados" },
  { src: talladoCocodrilo, title: "Cocodrilo Tallado", category: "Tallados" },
  { src: mesasImg, title: "Mesa de Parota Live Edge", category: "Mesas" },
  { src: espejosImg, title: "Espejo Redondo Artesanal", category: "Espejos" },
];

const categories = ["Todas", "Religiosos", "Tallados", "Mesas", "Espejos", "Planos CNC"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("Todas");
  const filtered = filter === "Todas" ? images : images.filter((img) => img.category === filter);
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
              <p className="text-sm font-body uppercase tracking-[0.25em] text-primary">Portafolio</p>
            </div>
            <h1 className="font-display font-light text-5xl md:text-7xl tracking-tight text-foreground">
              Nuestra Galería
            </h1>
            <p className="mt-6 font-body text-lg text-muted-foreground max-w-lg">
              Más de {images.length} piezas únicas. Tallados religiosos, figuras artísticas, mesas live edge y espejos artesanales en madera de parota.
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
                    ({cat === "Todas" ? images.length : images.filter(i => i.category === cat).length})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Uniform grid */}
        <section className="px-4 md:px-8 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <motion.button
                type="button"
                key={`${filter}-${img.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.2, 0, 0, 1] }}
                className="relative h-[300px] overflow-hidden group cursor-pointer rounded-lg bg-muted text-left"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Ver ${img.title} en grande`}
              >
                <img
                  src={img.src}
                  alt={`${img.title} — ${img.category} en madera de parota, taller en Ocoyoacac`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-500 flex flex-col items-center justify-center text-center px-4">
                  <p className="font-body text-[10px] uppercase tracking-[0.25em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">{img.category}</p>
                  <h3 className="font-display text-xl text-background font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {img.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <FooterContact />
      </main>
    </>
  );
};

export default GalleryPage;
