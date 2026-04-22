import { motion } from "framer-motion";
import woodTexture from "@/assets/wood-texture.jpg";
import Navbar from "@/components/Navbar";
import FooterContact from "@/components/FooterContact";
import WhatsAppButton from "@/components/WhatsAppButton";

const WHATSAPP_URL = "https://wa.me/527203575136?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20muebles%20en%20parota.";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main className="pt-24 pb-0">
        {/* Header */}
        <section className="px-8 md:px-16 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-sm font-body uppercase tracking-[0.25em] text-primary">Contacto</p>
            </div>
            <h1 className="font-display font-light text-5xl md:text-7xl tracking-tight text-foreground">
              Hablemos de tu proyecto
            </h1>
            <p className="mt-6 font-body text-lg text-muted-foreground max-w-lg">
              Cada gran pieza comienza con una conversación. Estamos listos para escuchar tu idea.
            </p>
          </div>
        </section>

        {/* WhatsApp prominent banner */}
        <section className="px-6 md:px-16 pb-8">
          <div className="max-w-5xl mx-auto bg-[#25D366]/10 border border-[#25D366]/40 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm">
            <p className="font-display text-xl md:text-2xl text-foreground font-light">
              💬 ¿Tienes una idea? Escríbenos ahora y te respondemos en minutos
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white px-8 py-4 font-body text-sm uppercase tracking-widest hover:scale-[1.03] transition-transform shadow-md"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </section>

        {/* Contact cards */}
        <section className="px-8 md:px-16 pb-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "WhatsApp",
                value: "720 357 5136",
                desc: "Respuesta inmediata",
                href: WHATSAPP_URL,
                action: "Enviar mensaje",
              },
              {
                label: "Correo",
                value: "brayanisai2008@gmail.com",
                desc: "Te respondemos en 24h",
                href: "mailto:brayanisai2008@gmail.com",
                action: "Enviar correo",
              },
              {
                label: "Visítanos",
                value: "El Pirámide, Ocoyoacac",
                desc: "Zona de Los Arcos",
                href: "#horarios",
                action: "Ver horarios",
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group block border border-foreground/10 p-8 hover:border-primary/30 transition-all duration-500 bg-card"
              >
                <p className="text-xs font-body uppercase tracking-widest text-primary mb-4">{item.label}</p>
                <p className="font-display text-2xl text-foreground font-light tracking-tight">{item.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-2">{item.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-body text-primary group-hover:gap-3 transition-all duration-300">
                  <span>{item.action}</span>
                  <span>→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Schedule band */}
        <section id="horarios" className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 bg-wood-dark">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: "cover" }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
            <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-light text-4xl md:text-5xl text-on-wood tracking-tight mb-8"
            >
              Punto de Venta
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 text-left max-w-lg mx-auto">
              <div>
                <p className="text-xs font-body uppercase tracking-widest text-gold mb-3">Ubicación</p>
                <p className="font-body text-on-wood">El Pirámide, Ocoyoacac</p>
                <p className="font-body text-on-wood/50 text-sm mt-1">En la zona de Los Arcos</p>
              </div>
              <div>
                <p className="text-xs font-body uppercase tracking-widest text-gold mb-3">Horarios</p>
                <p className="font-body text-on-wood">Sábados y Domingos</p>
                <p className="font-body text-on-wood tabular-nums text-sm mt-1">7:00 AM — 2:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        <FooterContact />
      </main>
    </>
  );
};

export default ContactPage;
