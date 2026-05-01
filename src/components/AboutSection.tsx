import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import craftsmanImg from "@/assets/guadalupana-parota.jpg";

const stats = [
  { value: 100, suffix: "+", label: "Piezas" },
  { value: 15, suffix: "+", label: "Años" },
  { value: 100, suffix: "%", label: "Parota Natural" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: [0.2, 0, 0, 1] });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const AboutSection = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        {/* Left: full height image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
          className="relative overflow-hidden min-h-[60vh] lg:min-h-0"
        >
          <img
            src={craftsmanImg}
            alt="Guadalupana tallada en madera de parota — taller en Ocoyoacac"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent lg:bg-none" />
        </motion.div>

        {/* Right: dark with gold accent */}
        <div className="relative flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 bg-wood-dark">
          {/* Decorative gold line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
            className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold to-transparent origin-top"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold" />
              <p className="text-[10px] font-body uppercase tracking-[0.4em] text-gold">Nuestro Taller</p>
            </div>

            <blockquote className="font-display font-light text-3xl md:text-4xl lg:text-5xl tracking-tight text-cream leading-[1.15] italic">
              "Cada nudo en la madera cuenta una <span className="text-gradient-gold not-italic font-normal">historia de siglos</span>"
            </blockquote>

            <p className="mt-10 font-body text-cream/60 leading-relaxed max-w-md text-base">
              Desde nuestro taller en Ocoyoacac, transformamos la madera de parota en piezas únicas que trascienden generaciones. Combinamos la precisión técnica del CNC Router con la calidez de la mano artesana.
            </p>

            {/* Stats with vertical gold dividers */}
            <div className="mt-14 flex items-stretch gap-6 md:gap-10">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-stretch gap-6 md:gap-10">
                  <div>
                    <p className="font-display text-4xl md:text-5xl font-light text-gradient-gold tabular-nums">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-2 font-body text-[10px] uppercase tracking-[0.3em] text-cream/50">{s.label}</p>
                  </div>
                  {i < stats.length - 1 && <div className="w-px bg-gold/30" />}
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
