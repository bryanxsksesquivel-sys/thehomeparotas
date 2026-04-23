import { motion } from "framer-motion";

const steps = [
  { num: "01", icon: "📋", title: "Cotización", desc: "Cuéntanos tu idea por WhatsApp", color: "from-amber to-gold" },
  { num: "02", icon: "🎨", title: "Diseño", desc: "Creamos un boceto personalizado", color: "from-gold to-terracotta" },
  { num: "03", icon: "🪵", title: "Elaboración", desc: "Tallamos cada detalle a mano", color: "from-terracotta to-copper" },
  { num: "04", icon: "🚚", title: "Entrega", desc: "Llevamos tu pieza hasta ti", color: "from-copper to-primary" },
];

const ProcessSection = () => {
  return (
    <section className="px-5 sm:px-6 md:px-16 py-16 sm:py-24 bg-card relative wood-grain-overlay overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-amber/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="w-12 h-0.5 bg-gradient-sunset mx-auto mb-5" />
          <p className="text-xs sm:text-sm font-body uppercase tracking-[0.25em] text-terracotta mb-3 sm:mb-4">Nuestro Proceso</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
            ¿Cómo trabajamos?
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-amber/40 via-terracotta/60 to-copper/40" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className={`relative mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-3xl shadow-warm ring-4 ring-background`}>
                {s.icon}
              </div>
              <p className="mt-4 font-display text-xl text-gradient-sunset tabular-nums font-medium">{s.num}</p>
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
