import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-xl md:text-2xl font-bold mb-3">
              Travel<span className="text-gold">expresso</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Professional Haj coordination & hospitality management. Your trusted Combined Haj Group Organizer (CHGO).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Haj Services", path: "/services" },
                { label: "HGO Partners", path: "/hgo-partners" },
                { label: "Pilgrim Information", path: "/pilgrim-info" },
                { label: "Haj Process", path: "/haj-process" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 text-gold">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Accommodation Management</li>
              <li>Mashaer Services</li>
              <li>Transport Coordination</li>
              <li>Pilgrim Data Management</li>
              <li>Financial Coordination</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 text-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>Akola, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+918308840038" className="hover:text-gold transition-colors">+91 83088 40038</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@travelexpresso.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/50 text-center sm:text-left">
            © {new Date().getFullYear()} Travelexpresso Hospitality Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/compliance" className="text-xs text-primary-foreground/50 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/compliance" className="text-xs text-primary-foreground/50 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
