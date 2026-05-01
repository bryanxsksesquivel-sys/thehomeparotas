import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Cotización", desc: "Cuéntanos tu idea por WhatsApp y recibe asesoría personalizada." },
  { num: "02", title: "Diseño", desc: "Creamos un boceto a medida que captura la esencia de tu visión." },
  { num: "03", title: "Elaboración", desc: "Tallamos cada detalle a mano con precisión CNC en parota natural." },
  { num: "04", title: "Entrega", desc: "Llevamos tu pieza hasta ti con embalaje seguro a todo México." },
];

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.3"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="bg-background px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-gold" />
            <p className="text-[10px] font-body uppercase tracking-[0.4em] text-gold">El Proceso</p>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display font-light text-5xl md:text-7xl tracking-tight text-cream">
            Del bosque a tu <span className="italic text-gradient-gold">hogar</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated gold line - desktop */}
          <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-px bg-gold/15">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-gold via-gold-bright to-gold shadow-[0_0_20px_hsl(var(--gold)/0.6)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.18, ease: [0.2, 0, 0, 1] }}
                className="relative text-center md:text-left"
              >
                {/* Dot on line */}
                <div className="hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-background border border-gold flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </div>
                </div>

                <p className="font-display text-7xl md:text-8xl font-light text-gradient-gold tabular-nums leading-none mb-6 md:mt-20">
                  {s.num}
                </p>
                <h3 className="font-display text-2xl text-cream font-light tracking-tight">{s.title}</h3>
                <p className="mt-3 font-body text-sm text-cream/55 leading-relaxed max-w-[16rem] mx-auto md:mx-0">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
