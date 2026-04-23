import { motion } from "framer-motion";
import craftsmanImg from "@/assets/guadalupana-parota.jpg";
import workshopImg from "@/assets/mesa-cocodrilos-taller.jpg";
import woodTexture from "@/assets/wood-texture.jpg";
import gallery5 from "@/assets/san-judas-grande.jpg";
import Navbar from "@/components/Navbar";
import FooterContact from "@/components/FooterContact";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedStats from "@/components/AnimatedStats";

const WHITE_TEXT: React.CSSProperties = {
  color: "#FFFFFF",
  fontWeight: 500,
  textShadow: "0 1px 3px rgba(0,0,0,0.5)",
};

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main className="pt-24 pb-0">
        {/* Header */}
        <section className="px-5 sm:px-8 md:px-16 py-12 sm:py-20 bg-gradient-warm">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5 bg-gradient-sunset" />
              <p className="text-xs sm:text-sm font-body uppercase tracking-[0.25em] text-terracotta">Nuestro Taller</p>
            </div>
            <h1 className="font-display font-light text-4xl sm:text-5xl md:text-7xl tracking-tight text-foreground max-w-3xl">
              Donde la madera <span className="text-gradient-sunset">cobra vida</span>
            </h1>
          </div>
        </section>

        {/* Split image / text — 50/50 */}
        <section className="px-4 md:px-8 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] overflow-hidden bg-muted rounded-md"
            >
              <img
                src={craftsmanImg}
                alt="Detalle de tallado en madera de parota — taller artesanal en Ocoyoacac"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="px-2 md:px-8"
            >
              <h2 className="font-display font-light text-3xl md:text-4xl tracking-tight text-foreground mb-6">
                La historia detrás de cada pieza
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Nuestro taller nació de una pasión profunda por la madera de parota — una de las maderas más nobles y hermosas de México. Cada tabla que llega a nuestras manos tiene una historia que contar a través de su veta.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mt-4">
                Combinamos técnicas artesanales con tecnología CNC Router de precisión para crear piezas que son tanto obras de arte como objetos funcionales para tu hogar.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { step: "01", title: "Selección", desc: "Elegimos las mejores tablas de parota por su veta y calidad." },
                  { step: "02", title: "Diseño", desc: "Creamos el diseño perfecto para tu espacio, a tu medida." },
                  { step: "03", title: "Fabricación", desc: "Mano artesanal y corte CNC de alta precisión." },
                  { step: "04", title: "Acabado", desc: "Sellado que resalta la belleza natural de la madera." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-display text-xl text-gold tabular-nums leading-none mt-1">{item.step}</span>
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">{item.title}</p>
                      <p className="font-body text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <AnimatedStats />

        {/* Workshop photo */}
        <section className="px-4 md:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto aspect-[16/7] overflow-hidden bg-muted rounded-md"
          >
            <img
              src={workshopImg}
              alt="Mesa live edge con cocodrilos tallados en proceso — taller en Ocoyoacac"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </section>

        {/* Wood band — quote with WHITE legible text */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 bg-wood-dark">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: "cover" }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
            <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-light text-3xl md:text-5xl tracking-tight"
              style={WHITE_TEXT}
            >
              "No hay dos piezas iguales, porque no hay dos árboles iguales."
            </motion.h2>
            <p className="mt-6 font-body" style={{ ...WHITE_TEXT, opacity: 0.9 }}>
              Madera 100% natural · Hecho a mano · Envíos a todo México
            </p>
          </div>
        </section>

        {/* Art piece */}
        <section className="px-4 md:px-8 py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden aspect-[4/5] bg-muted rounded-md"
            >
              <img
                src={gallery5}
                alt="San Judas Tadeo monumental tallado en parota"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            <div className="flex items-center px-8 md:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-display font-light text-3xl tracking-tight text-foreground mb-4">
                  Más que muebles — arte funcional
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Cada pieza que sale de nuestro taller es una intersección entre naturaleza y diseño. La parota, con su veta dramática y tonos cálidos, transforma cualquier espacio en un lugar con carácter.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterContact />
      </main>
    </>
  );
};

export default AboutPage;
