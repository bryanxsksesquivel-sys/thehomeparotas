import { motion } from "framer-motion";

const steps = [
  { num: "01", icon: "📋", title: "Cotización", desc: "Cuéntanos tu idea por WhatsApp" },
  { num: "02", icon: "🎨", title: "Diseño", desc: "Creamos un boceto personalizado" },
  { num: "03", icon: "🪵", title: "Elaboración", desc: "Tallamos cada detalle a mano" },
  { num: "04", icon: "🚚", title: "Entrega", desc: "Llevamos tu pieza hasta ti" },
];

const ProcessSection = () => {
  return (
    <section className="px-6 md:px-16 py-24 bg-card relative wood-grain-overlay">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-sm font-body uppercase tracking-[0.25em] text-primary mb-4">Nuestro Proceso</p>
          <h2 className="font-display font-light text-4xl md:text-5xl tracking-tight text-foreground">
            ¿Cómo trabajamos?
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative mx-auto w-20 h-20 rounded-full bg-background border border-gold/40 flex items-center justify-center text-3xl shadow-md">
                {s.icon}
              </div>
              <p className="mt-4 font-display text-xl text-gold tabular-nums">{s.num}</p>
              <h3 className="mt-1 font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground max-w-[14rem] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
