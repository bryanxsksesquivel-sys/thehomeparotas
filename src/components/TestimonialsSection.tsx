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
    <section className="px-6 md:px-16 py-24" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-sm font-body uppercase tracking-[0.25em] text-primary mb-4">Testimonios</p>
          <h2 className="font-display font-light text-4xl md:text-5xl tracking-tight text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background border border-foreground/10 p-8 transition-shadow duration-500 hover:shadow-2xl"
            >
              <Stars />
              <blockquote className="mt-4 font-display text-xl md:text-2xl font-light text-foreground leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 font-body text-sm text-muted-foreground">
                — <span className="text-foreground">{t.name}</span>, {t.city}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
