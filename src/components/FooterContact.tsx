import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/527203575136?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20muebles%20en%20parota.";

const FooterContact = () => {
  return (
    <footer className="border-t border-foreground/10 px-8 md:px-16 py-[15vh] md:py-[20vh]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <h2 className="font-display font-light text-3xl md:text-4xl tracking-tight text-foreground">
            Iniciar conversación de proyecto
          </h2>
          <div className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-foreground px-10 py-5 text-sm font-body uppercase tracking-widest text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
              style={{ transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" }}
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="space-y-6"
        >
          <p className="text-xs font-body uppercase tracking-widest text-muted-foreground">Contacto</p>
          <div className="space-y-3 font-body text-sm text-foreground">
            <p className="tabular-nums">7203575136</p>
            <p>brayanisai2008@gmail.com</p>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="space-y-6"
        >
          <p className="text-xs font-body uppercase tracking-widest text-muted-foreground">Ubicación</p>
          <div className="space-y-3 font-body text-sm text-foreground">
            <p>El Pirámide, Ocoyoacac</p>
            <p className="text-muted-foreground">Zona de Los Arcos</p>
          </div>

          <p className="text-xs font-body uppercase tracking-widest text-muted-foreground pt-4">Horarios</p>
          <div className="font-body text-sm text-foreground">
            <p>Sábados y Domingos</p>
            <p className="tabular-nums">7:00 AM — 2:00 PM</p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-foreground/10">
        <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} Taller de Ebanistería — Parota
        </p>
      </div>
    </footer>
  );
};

export default FooterContact;
