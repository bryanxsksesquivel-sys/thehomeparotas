import { motion } from "framer-motion";
import { useState } from "react";
import woodTexture from "@/assets/wood-texture.jpg";
import Navbar from "@/components/Navbar";
import FooterContact from "@/components/FooterContact";
import WhatsAppButton from "@/components/WhatsAppButton";

const WHATSAPP_BASE = "https://wa.me/527203575136";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=El+Pir%C3%A1mide+Ocoyoacac+Los+Arcos";

const services = [
  "Tallado religioso",
  "Mesa live edge",
  "Espejo artesanal",
  "Plano CNC personalizado",
  "Otro",
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0], message: "" });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.name || "(sin nombre)"}. Tel: ${form.phone || "n/d"}. Me interesa: ${form.service}. ${form.message}`;
    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main className="pt-24 pb-0">
        {/* Amber banner */}
        <section className="px-4 md:px-8 pt-6">
          <div
            className="max-w-7xl mx-auto p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-md"
            style={{ backgroundColor: "#D4A853" }}
          >
            <p className="font-display text-xl md:text-2xl text-foreground font-medium">
              💬 Respuesta inmediata por WhatsApp — escríbenos ahora
            </p>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hola, me interesa cotizar un proyecto.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-background px-8 py-4 font-body text-sm uppercase tracking-widest hover:scale-[1.03] transition-transform shadow-md"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </section>

        {/* Header */}
        <section className="px-8 md:px-16 py-16">
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

        {/* Contact cards */}
        <section className="px-8 md:px-16 pb-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "WhatsApp",
                value: "720 357 5136",
                desc: "Respuesta inmediata",
                href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hola, me interesa cotizar un proyecto en parota.")}`,
                action: "Enviar mensaje",
                icon: "💬",
                external: true,
              },
              {
                label: "Correo",
                value: "brayanisai2008@gmail.com",
                desc: "Te respondemos en 24h",
                href: "mailto:brayanisai2008@gmail.com",
                action: "Enviar correo",
                icon: "✉️",
                external: false,
              },
              {
                label: "Visítanos",
                value: "El Pirámide, Ocoyoacac",
                desc: "Zona de Los Arcos — abrir en Maps",
                href: MAPS_URL,
                action: "Cómo llegar",
                icon: "📍",
                external: true,
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group block border border-foreground/10 p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 bg-card rounded-md"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className="text-xs font-body uppercase tracking-widest text-primary mb-3">{item.label}</p>
                <p className="font-display text-xl text-foreground font-light tracking-tight">{item.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-2">{item.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-body text-primary group-hover:gap-3 transition-all duration-300">
                  <span>{item.action}</span>
                  <span>→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="px-8 md:px-16 pb-20">
          <div className="max-w-3xl mx-auto bg-card border border-foreground/10 p-8 md:p-12 rounded-md">
            <h2 className="font-display text-3xl text-foreground font-light tracking-tight">Envíanos tu idea</h2>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Llena el formulario y te abriremos WhatsApp con tu mensaje listo para enviar.
            </p>
            <form onSubmit={handleSend} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                required
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border border-foreground/15 px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                placeholder="Teléfono"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-background border border-foreground/15 px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="md:col-span-2 w-full bg-background border border-foreground/15 px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
              <textarea
                required
                rows={5}
                placeholder="Cuéntanos tu idea..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="md:col-span-2 w-full bg-background border border-foreground/15 px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="md:col-span-2 bg-[#25D366] text-white py-4 font-body text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform"
              >
                Enviar por WhatsApp
              </button>
            </form>
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
              className="font-display font-light text-4xl md:text-5xl tracking-tight mb-8"
              style={{ color: "#FFFFFF", fontWeight: 500, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              Punto de Venta
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 text-left max-w-lg mx-auto"
              style={{ color: "#FFFFFF" }}>
              <div>
                <p className="text-xs font-body uppercase tracking-widest text-gold mb-3">Ubicación</p>
                <p className="font-body" style={{ color: "#FFFFFF", fontWeight: 500, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>El Pirámide, Ocoyoacac</p>
                <p className="font-body text-sm mt-1" style={{ color: "#FFFFFF", opacity: 0.85, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>En la zona de Los Arcos</p>
              </div>
              <div>
                <p className="text-xs font-body uppercase tracking-widest text-gold mb-3">Horarios</p>
                <p className="font-body" style={{ color: "#FFFFFF", fontWeight: 500, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>Sábados y Domingos</p>
                <p className="font-body tabular-nums text-sm mt-1" style={{ color: "#FFFFFF", opacity: 0.85, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>7:00 AM — 2:00 PM</p>
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
