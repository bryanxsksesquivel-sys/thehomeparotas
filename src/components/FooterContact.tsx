import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/527203575136?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20muebles%20en%20parota.";

const FooterContact = () => {
  return (
    <footer className="bg-foreground px-8 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-20"
        >
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="font-display font-light text-4xl md:text-5xl tracking-tight text-background">
            ¿Listo para tu pieza única?
          </h2>
          <p className="font-body text-background/50 mt-4 max-w-md mx-auto">
            Cada proyecto comienza con una conversación. Cuéntanos tu idea y la hacemos realidad en madera.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 border border-background/30 px-10 py-5 text-sm font-body uppercase tracking-widest text-background transition-all duration-500 hover:bg-background hover:text-foreground"
            style={{ transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" }}
          >
            Iniciar conversación
          </a>
        </motion.div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-background/10 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <p className="font-display text-xl text-background tracking-tight">CNC Router Ocoyoacac</p>
            <p className="font-body text-xs text-background/40 mt-2">Taller de Tallado y Ebanistería</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="space-y-4"
          >
            <p className="text-xs font-body uppercase tracking-widest text-background/40">Contacto</p>
            <div className="space-y-2 font-body text-sm text-background/70">
              <p className="tabular-nums">720 357 5136</p>
              <p>brayanisai2008@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="space-y-4"
          >
            <p className="text-xs font-body uppercase tracking-widest text-background/40">Ubicación</p>
            <div className="space-y-2 font-body text-sm text-background/70">
              <p>El Pirámide, Ocoyoacac</p>
              <p className="text-background/40">Zona de Los Arcos</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="space-y-4"
          >
            <p className="text-xs font-body uppercase tracking-widest text-background/40">Horarios</p>
            <div className="font-body text-sm text-background/70">
              <p>Sábados y domingos</p>
              <p className="tabular-nums">7:00 AM — 2:00 PM</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-background/30 uppercase tracking-widest">
            © {new Date().getFullYear()} CNC Router Ocoyoacac
          </p>
          <div className="flex gap-6">
            {[
              { label: "Inicio", path: "/" },
              { label: "Galería", path: "/galeria" },
              { label: "Creaciones", path: "/creaciones" },
              { label: "Nosotros", path: "/nosotros" },
              { label: "Contacto", path: "/contacto" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="font-body text-xs uppercase tracking-widest text-background/30 hover:text-background/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
