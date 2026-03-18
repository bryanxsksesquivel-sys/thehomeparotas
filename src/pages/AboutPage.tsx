import { motion } from "framer-motion";
import craftsmanImg from "@/assets/craftsman.jpg";
import woodTexture from "@/assets/wood-texture.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import Navbar from "@/components/Navbar";
import FooterContact from "@/components/FooterContact";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main className="pt-24 pb-0">
        {/* Hero */}
        <section className="px-8 md:px-16 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-sm font-body uppercase tracking-[0.25em] text-primary">Nuestro Taller</p>
            </div>
            <h1 className="font-display font-light text-5xl md:text-7xl tracking-tight text-foreground max-w-3xl">
              Donde la madera cobra vida
            </h1>
          </div>
        </section>

        {/* Full image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[60vh] overflow-hidden"
        >
          <img src={craftsmanImg} alt="Artesano" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Story */}
        <section className="px-8 md:px-16 py-20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-light text-3xl tracking-tight text-foreground mb-6">
                La historia detrás de cada pieza
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Nuestro taller nació de una pasión profunda por la madera de parota — una de las maderas más nobles y hermosas de México. Cada tabla que llega a nuestras manos tiene una historia que contar a través de su veta.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mt-4">
                Combinamos técnicas artesanales con tecnología de precisión PLC para crear piezas que son tanto obras de arte como objetos funcionales para tu hogar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="font-display font-light text-3xl tracking-tight text-foreground mb-6">
                Nuestro proceso
              </h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Selección", desc: "Elegimos las mejores tablas de parota por su veta y calidad." },
                  { step: "02", title: "Diseño", desc: "Creamos el diseño perfecto para tu espacio, a tu medida." },
                  { step: "03", title: "Fabricación", desc: "Combinamos mano artesanal y corte PLC de alta precisión." },
                  { step: "04", title: "Acabado", desc: "Sellado y acabado que resalta la belleza natural de la madera." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-body text-xs text-primary tabular-nums mt-1">{item.step}</span>
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

        {/* Wood texture band */}
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
              className="font-display font-light text-4xl md:text-5xl text-on-wood tracking-tight"
            >
              "No hay dos piezas iguales, porque no hay dos árboles iguales."
            </motion.h2>
          </div>
        </section>

        {/* Art piece */}
        <section className="px-4 md:px-8 py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden aspect-[4/5]"
            >
              <img src={gallery5} alt="Arte en madera" className="w-full h-full object-cover" />
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
