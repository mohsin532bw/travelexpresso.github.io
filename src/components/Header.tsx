import { useState, forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Haj Services", path: "/services" },
  { label: "HGO Partners", path: "/hgo-partners" },
  { label: "Pilgrim Info", path: "/pilgrim-info" },
  { label: "Haj Process", path: "/haj-process" },
  { label: "Compliance", path: "/compliance" },
  { label: "Contact", path: "/contact" },
];

const Header = forwardRef<HTMLElement>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header ref={ref} className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between h-14 sm:h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
            Travel<span className="text-gold">expresso</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.path
                  ? "text-gold bg-gold/10"
                  : "text-primary-foreground/80 hover:text-gold hover:bg-gold/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+918308840038" className="flex items-center gap-1.5 text-sm text-gold">
            <Phone className="w-4 h-4" />
            <span>+91 83088 40038</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-3 gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "text-gold bg-gold/10"
                      : "text-primary-foreground/80 hover:text-gold active:bg-gold/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+918308840038" className="flex items-center gap-2 px-4 py-3 text-gold text-sm">
                <Phone className="w-4 h-4" /> +91 83088 40038
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
