import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Piezas Creadas", color: "text-terracotta" },
  { value: 100, suffix: "%", label: "Madera Natural de Parota", color: "text-copper" },
  { value: 15, suffix: "+", label: "Años de Experiencia", color: "text-amber" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.6, ease: [0.2, 0, 0, 1] });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const AnimatedStats = () => {
  return (
    <section className="relative px-5 sm:px-6 md:px-16 py-16 sm:py-20 bg-gradient-warm overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className={`font-display font-light text-5xl sm:text-6xl tabular-nums ${s.color}`}>
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 font-body text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedStats;
