import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/527203575136?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20muebles%20en%20parota.";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Galería", path: "/galeria" },
  { label: "Creaciones", path: "/creaciones" },
  { label: "Nosotros", path: "/nosotros" },
  { label: "Contacto", path: "/contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-gold/15 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl md:text-3xl tracking-[0.15em] text-gradient-gold font-light">
            PAROTA
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-underline font-body text-[11px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-gold active"
                    : "text-cream/70 hover:text-gold-bright"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer relative border border-gold px-7 py-3 text-[11px] font-body uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:text-background hover:bg-gold"
            >
              Cotizar
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-px bg-gold transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-gold transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-gold transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-28 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    to={item.path}
                    className="font-display text-4xl font-light text-cream hover:text-gradient-gold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block border border-gold px-8 py-4 text-xs font-body uppercase tracking-[0.3em] text-gold text-center"
              >
                Cotizar mi proyecto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
