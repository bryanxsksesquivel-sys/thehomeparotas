import { motion } from "framer-motion";

const items = [
  "✓ Envíos a Todo México",
  "✓ Madera 100% Natural",
  "✓ Hecho a Mano",
  "✓ +100 Piezas Entregadas",
  "✓ Garantía de Calidad",
];

const TrustBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-foreground text-background py-3 overflow-hidden"
    >
      {/* Desktop: row */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 justify-between items-center gap-6">
        {items.map((it) => (
          <span key={it} className="font-body text-xs uppercase tracking-widest text-background/80">
            <span className="text-gold mr-2">✓</span>
            {it.replace("✓ ", "")}
          </span>
        ))}
      </div>
      {/* Mobile: ticker */}
      <div className="md:hidden relative">
        <div className="flex gap-10 whitespace-nowrap animate-[ticker_22s_linear_infinite]">
          {[...items, ...items].map((it, i) => (
            <span key={i} className="font-body text-xs uppercase tracking-widest text-background/80 shrink-0">
              <span className="text-gold mr-2">✓</span>
              {it.replace("✓ ", "")}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </motion.div>
  );
};

export default TrustBar;
