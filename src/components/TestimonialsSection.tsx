import { motion } from "framer-motion";

const testimonials = [
  { name: "María G.", city: "CDMX", quote: "La mesa que nos hicieron es increíble, calidad única." },
  { name: "Carlos R.", city: "Toluca", quote: "El tallado religioso superó todas mis expectativas." },
  { name: "Laura M.", city: "Metepec", quote: "Atención personalizada y entrega a tiempo." },
  { name: "Roberto S.", city: "Lerma", quote: "La madera de parota tiene una calidez única." },
];

const Stars = () => (
  <div className="flex gap-1 text-gold" aria-label="5 de 5 estrellas">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="relative px-5 sm:px-6 md:px-16 py-16 sm:py-24 overflow-hidden" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-amber/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-terracotta/15 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="w-12 h-0.5 bg-gradient-sunset mx-auto mb-5" />
          <p className="text-xs sm:text-sm font-body uppercase tracking-[0.25em] text-terracotta mb-3 sm:mb-4">Testimonios</p>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background border border-gold/30 p-6 sm:p-8 rounded-md transition-all duration-500 hover:shadow-warm hover:-translate-y-1 hover:border-terracotta/50"
            >
              <Stars />
              <blockquote className="mt-4 font-display text-lg sm:text-xl md:text-2xl font-light text-foreground leading-snug">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 sm:mt-6 font-body text-sm text-muted-foreground">
                — <span className="text-terracotta font-medium">{t.name}</span>, {t.city}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
