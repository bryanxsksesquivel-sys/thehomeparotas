import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import mesasImg from "@/assets/service-mesas.jpg";
import espejosImg from "@/assets/service-espejos.jpg";
import disenoImg from "@/assets/service-diseno.jpg";
import talladoSanJudas from "@/assets/tallado-san-judas.jpg";
import espejoParota from "@/assets/espejo-parota-natural.jpg";
import talladoSerpiente from "@/assets/tallado-serpiente.jpg";
import talladoCocodrilo from "@/assets/tallado-cocodrilo.jpg";
import espejoGrande from "@/assets/espejo-grande-tallado.jpg";
import mesaVidrio from "@/assets/mesa-parota-vidrio.jpg";
import mesaCocodrilos from "@/assets/mesa-parota-cocodrilos.jpg";

const images = [
  { src: talladoSanJudas, title: "Tallado San Judas Tadeo", category: "Tallados" },
  { src: espejoParota, title: "Espejo con Marco Live Edge", category: "Espejos" },
  { src: mesaVidrio, title: "Mesa de Centro con Vitrina", category: "Mesas" },
  { src: talladoSerpiente, title: "Tallado Serpiente en Relieve", category: "Tallados" },
  { src: espejoGrande, title: "Espejo Grande con Tallado", category: "Espejos" },
  { src: mesaCocodrilos, title: "Mesa Live Edge con Cocodrilos", category: "Mesas" },
  { src: talladoCocodrilo, title: "Cocodrilo Tallado en Madera", category: "Tallados" },
  { src: mesasImg, title: "Mesa de Parota Live Edge", category: "Mesas" },
  { src: gallery2, title: "Espejo con Marco de Parota", category: "Espejos" },
  { src: gallery1, title: "Mesa de Centro Rústica", category: "Mesas" },
  { src: gallery4, title: "Comedor de Parota", category: "Mesas" },
  { src: espejosImg, title: "Espejo Redondo Artesanal", category: "Espejos" },
  { src: gallery3, title: "Consola de Entrada", category: "Muebles" },
  { src: gallery5, title: "Arte en Madera Natural", category: "Arte" },
  { src: disenoImg, title: "Libreros y Gabinetes", category: "Muebles" },
  { src: gallery6, title: "Banca Industrial", category: "Muebles" },
];

const GalleryPage = () => {
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
              <p className="text-sm font-body uppercase tracking-[0.25em] text-primary">Portafolio</p>
            </div>
            <h1 className="font-display font-light text-5xl md:text-7xl tracking-tight text-foreground">
              Nuestra Galería
            </h1>
            <p className="mt-6 font-body text-lg text-muted-foreground max-w-lg">
              Cada pieza es irrepetible. Explora nuestra colección de mesas, espejos y muebles artesanales en madera de parota.
            </p>
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="px-4 md:px-8 pb-20">
          <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.2, 0, 0, 1] }}
                className="relative overflow-hidden group cursor-pointer mb-4 break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-body text-xs uppercase tracking-widest text-gold mb-1">{img.category}</p>
                  <h3 className="font-display text-xl text-background font-light">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <FooterContact />
      </main>
    </>
  );
};

export default GalleryPage;
