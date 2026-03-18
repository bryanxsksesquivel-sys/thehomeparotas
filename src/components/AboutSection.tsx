import { motion } from "framer-motion";
import craftsmanImg from "@/assets/craftsman.jpg";
import woodTexture from "@/assets/wood-texture.jpg";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Dark wood background band */}
      <div className="absolute inset-0 bg-wood-dark">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: "cover" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh]">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          className="relative overflow-hidden min-h-[50vh]"
        >
          <img
            src={craftsmanImg}
            alt="Artesano trabajando madera de parota"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5 bg-gold" />
              <p className="text-sm font-body uppercase tracking-[0.25em] text-gold">Nuestro Taller</p>
            </div>

            <h2 className="font-display font-light text-4xl md:text-5xl tracking-tight text-on-wood leading-tight">
              Cada pieza cuenta una historia
            </h2>

            <p className="mt-8 font-body text-on-wood/70 leading-relaxed max-w-md">
              Desde nuestro taller en Ocoyoacac, transformamos la madera de parota en piezas únicas que trascienden generaciones. Combinamos la precisión técnica del PLC con la calidez de la mano humana.
            </p>

            <p className="mt-4 font-body text-on-wood/70 leading-relaxed max-w-md">
              Cada mesa, espejo y mueble es una obra de arte irrepetible — porque no hay dos vetas iguales en la naturaleza.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { value: "100+", label: "Piezas creadas" },
                { value: "Parota", label: "Madera premium" },
                { value: "PLC", label: "Precisión CNC" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-3xl text-gold font-light">{item.value}</p>
                  <p className="font-body text-xs uppercase tracking-widest text-on-wood/50 mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
