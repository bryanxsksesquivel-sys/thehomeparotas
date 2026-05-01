import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  { name: "María González", city: "Ciudad de México", quote: "La mesa que nos hicieron es absolutamente increíble. La calidad y el detalle son únicos. Una pieza que se queda en la familia." },
  { name: "Carlos Ramírez", city: "Toluca", quote: "El tallado religioso superó todas mis expectativas. Se nota la pasión y el oficio en cada milímetro de la madera." },
  { name: "Laura Méndez", city: "Metepec", quote: "Atención personalizada, entrega puntual y un acabado impecable. Sin duda volveré a encargar otra pieza." },
  { name: "Roberto Sánchez", city: "Lerma", quote: "La madera de parota tiene una calidez y nobleza únicas. Cada veta es distinta. Verdadero arte." },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-wood-dark px-6 md:px-12 py-28 md:py-40 overflow-hidden">
      {/* Huge decorative quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-gradient-gold pointer-events-none select-none"
        style={{ fontSize: "clamp(20rem, 50vw, 40rem)", lineHeight: 0.8 }}
        aria-hidden
      >
        "
      </motion.div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-gold" />
            <p className="text-[10px] font-body uppercase tracking-[0.4em] text-gold">Testimonios</p>
            <div className="w-10 h-px bg-gold" />
          </div>
        </motion.div>

        <div className="relative min-h-[280px] md:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            >
              <blockquote className="font-display italic font-light text-3xl md:text-5xl text-cream leading-[1.25] tracking-tight max-w-4xl mx-auto">
                "{testimonials[index].quote}"
              </blockquote>

              <figcaption className="mt-12 flex items-center justify-center gap-4">
                <div className="w-10 h-px bg-gold" />
                <div className="text-left">
                  <p className="font-body text-sm uppercase tracking-[0.3em] text-gradient-gold font-medium">
                    {testimonials[index].name}
                  </p>
                  <p className="font-body text-xs text-cream/50 mt-1">{testimonials[index].city}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-14 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Testimonio ${i + 1}`}
              className={`h-px transition-all duration-500 ${i === index ? "w-12 bg-gold" : "w-6 bg-gold/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
