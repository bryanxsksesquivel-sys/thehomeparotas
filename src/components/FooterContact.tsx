import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/527203575136?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20muebles%20en%20parota.";
const MAPS_URL = "https://maps.google.com/?q=El+Pirámide+Ocoyoacac+Los+Arcos";

const FooterContact = () => {
  return (
    <footer className="relative bg-background overflow-hidden">
      {/* Contact split section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-t border-gold/15">
        {/* Left dark */}
        <div className="relative bg-background flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-gold" />
              <p className="text-[10px] font-body uppercase tracking-[0.4em] text-gold">Contacto</p>
            </div>

            <h2 className="font-display font-light text-5xl md:text-6xl lg:text-7xl tracking-tight text-cream leading-[0.95]">
              Hablemos de tu <span className="italic text-gradient-gold">próxima pieza</span>
            </h2>
            <p className="mt-8 font-body text-base md:text-lg text-cream/55 max-w-md leading-relaxed">
              Cada creación comienza con una conversación. Cuéntanos tu idea y la hacemos realidad en madera.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-10 inline-flex items-center gap-3 bg-gold text-background px-10 py-5 text-xs font-body uppercase tracking-[0.3em] hover:bg-gold-bright transition-all duration-500 hover:shadow-gold"
              style={{ animation: "pulse-gold 2.5s ease-in-out infinite" }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Iniciar conversación
            </a>
          </motion.div>
        </div>

        {/* Right cards */}
        <div className="relative bg-wood-dark flex flex-col justify-center px-8 md:px-12 py-20 gap-5">
          {[
            {
              label: "WhatsApp",
              value: "+52 720 357 5136",
              href: WHATSAPP_URL,
              icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              ),
            },
            {
              label: "Email",
              value: "brayanisai2008@gmail.com",
              href: "mailto:brayanisai2008@gmail.com",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75L12 13.5l9.75-6.75" />
                </svg>
              ),
            },
            {
              label: "Ubicación",
              value: "El Pirámide, Ocoyoacac · Los Arcos",
              href: MAPS_URL,
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
            },
            {
              label: "Horarios",
              value: "Sábados y domingos · 7:00 AM — 2:00 PM",
              href: null,
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map((item, i) => {
            const inner = (
              <>
                <div className="text-gold mt-0.5">{item.icon}</div>
                <div className="flex-1">
                  <p className="font-body text-[10px] uppercase tracking-[0.4em] text-gold mb-2">{item.label}</p>
                  <p className="font-body text-base text-cream group-hover:text-gold-bright transition-colors duration-300">{item.value}</p>
                </div>
              </>
            );
            const className = "group flex items-start gap-5 p-6 border border-gold/15 hover:border-gold/50 transition-all duration-500 hover:bg-background/40";
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                    {inner}
                  </a>
                ) : (
                  <div className={className}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom footer with watermark */}
      <div className="relative bg-background px-8 md:px-16 py-20 md:py-24 overflow-hidden">
        {/* Watermark */}
        <div
          className="absolute inset-x-0 bottom-0 font-display text-cream/[0.03] pointer-events-none select-none text-center leading-[0.8] whitespace-nowrap"
          style={{ fontSize: "clamp(8rem, 25vw, 22rem)" }}
          aria-hidden
        >
          PAROTA
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Logo + tagline */}
          <div className="text-center mb-12">
            <p className="font-display text-3xl md:text-4xl tracking-[0.2em] text-gradient-gold font-light">PAROTA</p>
            <p className="mt-3 font-body text-xs uppercase tracking-[0.4em] text-cream/40">
              Arte en Madera desde el Corazón de México
            </p>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gold/15 pt-10 pb-10">
            {[
              "Envíos a todo México",
              "Madera 100% Natural",
              "Hecho a Mano",
              "Garantía de Calidad",
            ].map((b) => (
              <p key={b} className="font-body text-[11px] text-cream/60 uppercase tracking-[0.25em] text-center inline-flex items-center justify-center gap-2">
                <span className="text-gold">✓</span> {b}
              </p>
            ))}
          </div>

          {/* Links + copyright */}
          <div className="border-t border-gold/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-body text-[10px] text-cream/30 uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} CNC Router Ocoyoacac · Todos los derechos reservados
            </p>
            <div className="flex flex-wrap justify-center gap-6">
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
                  className="font-body text-[10px] uppercase tracking-[0.3em] text-cream/40 hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
