import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Building2, Bus, Users, Wallet, ShieldCheck, MapPin,
  ArrowRight, CheckCircle2
} from "lucide-react";

const servicesData = [
  {
    icon: Building2,
    title: "Haj Accommodation Management",
    desc: "We handle end-to-end hotel contracting in Makkah and Madinah, including room allocation, supplier coordination, and full compliance with Masar/Nusuk portal bookings.",
    features: ["Hotel contracting in Makkah & Madinah", "Room allocation for pilgrims", "Saudi hotel supplier coordination", "Masar / Nusuk portal compliance"],
  },
  {
    icon: MapPin,
    title: "Mashaer Services Coordination",
    desc: "Comprehensive logistics for Haj rituals including accommodation at Mina, arrangements at Arafat, movement coordination at Muzdalifah, and pilgrim transport planning.",
    features: ["Mina accommodation", "Arafat arrangements", "Muzdalifah movement coordination", "Pilgrim transport planning"],
  },
  {
    icon: Bus,
    title: "Transport Contracting",
    desc: "Full transport logistics from airport transfers to intercity transport between Makkah and Madinah, Mashaer bus transportation, and complete pilgrim mobility management.",
    features: ["Airport transfers", "Makkah ↔ Madinah intercity transport", "Mashaer bus transportation", "Pilgrim mobility management"],
  },
  {
    icon: Users,
    title: "Pilgrim Data Management",
    desc: "Comprehensive pilgrim data handling including registration systems, visa coordination, MOFA documentation, and data uploads to official Saudi portals.",
    features: ["Pilgrim registration systems", "Visa coordination", "MOFA documentation handling", "Official Saudi portal uploads"],
  },
  {
    icon: Wallet,
    title: "Financial & Payment Coordination",
    desc: "Complete financial management including SAR wallet management, IBAN transfers and reconciliation, supplier payments, and transparent cost distribution across HGOs.",
    features: ["SAR wallet management", "IBAN transfers & reconciliation", "Supplier payments", "Cost distribution across HGOs"],
  },
  {
    icon: ShieldCheck,
    title: "Operational Compliance",
    desc: "We ensure full compliance with Saudi Haj Ministry regulations, Nusuk/Masar systems, contract timelines, and government reporting standards.",
    features: ["Saudi Haj Ministry regulations", "Nusuk / Masar systems", "Contract timeline adherence", "Government reporting standards"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="bg-primary geometric-pattern py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-6">
              Comprehensive Haj Services
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              From accommodation to compliance, we manage every aspect of Haj operations with professionalism and transparency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-12">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-muted geometric-pattern rounded-xl h-64 flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <service.icon className="w-20 h-20 text-gold/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">Need a Custom Haj Solution?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Contact us to discuss your specific requirements.</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get In Touch <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
