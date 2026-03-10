import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Travel<span className="text-gold">expresso</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Professional Haj coordination & hospitality management. Your trusted Combined Haj Group Organizer (CHGO).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2.5">
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
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li>Accommodation Management</li>
              <li>Mashaer Services</li>
              <li>Transport Coordination</li>
              <li>Pilgrim Data Management</li>
              <li>Financial Coordination</li>
              <li>Compliance Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>Akola, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+91 83088 40038</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@travelexpresso.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Travelexpresso Hospitality Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
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
};

export default Footer;
