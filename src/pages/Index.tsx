import { motion, type Easing } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building2, Bus, Users, FileCheck, Wallet, ShieldCheck,
  ChevronRight, Star, ArrowRight, CheckCircle2, MapPin
} from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-night.jpg";

const easeOut: Easing = [0, 0, 0.2, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeOut }
  }),
};



const services = [
  { icon: Building2, title: "Haj Accommodation", desc: "Hotel contracting in Makkah & Madinah with Masar/Nusuk portal compliance." },
  { icon: MapPin, title: "Mashaer Services", desc: "Mina accommodation, Arafat arrangements, and Muzdalifah coordination." },
  { icon: Bus, title: "Transport Contracting", desc: "Airport transfers, intercity transport, and Mashaer bus logistics." },
  { icon: Users, title: "Pilgrim Data Management", desc: "Registration systems, visa coordination, and MOFA documentation." },
  { icon: Wallet, title: "Financial Coordination", desc: "SAR wallet management, IBAN transfers, and cost distribution." },
  { icon: ShieldCheck, title: "Operational Compliance", desc: "Saudi Haj Ministry regulations and Nusuk/Masar system adherence." },
];

const stats = [
  { value: "10,000+", label: "Pilgrims Managed" },
  { value: "50+", label: "HGO Partners" },
  { value: "20+", label: "Saudi Contracts" },
  { value: "5+", label: "Years of Excellence" },
];

const testimonials = [
  { name: "Ahmed Khan", role: "HGO Partner, Mumbai", text: "Travelexpresso transformed our Haj operations. Their coordination is flawless and gave us peace of mind." },
  { name: "Fatima Begum", role: "HGO Director, Hyderabad", text: "Professional, transparent, and deeply committed. The best CHGO partner we've ever worked with." },
  { name: "Rashid Sheikh", role: "Travel Agency, Delhi", text: "Their financial reconciliation and compliance support saved us countless hours of work." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Kaaba in Makkah during Hajj" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-navy/40" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Trusted Haj Coordination Partner</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Simplifying Haj Operations Through{" "}
              <span className="text-gradient-gold">Professional Coordination</span>
            </motion.h1>
            <motion.p variants={fadeInUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
              As a Combined Haj Group Organizer, we manage logistics, contracts, and operations between Indian operators and Saudi service providers — ensuring a seamless pilgrimage experience.
            </motion.p>
            <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/services">Our Services <ChevronRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/hgo-partners">Partner With Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary geometric-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
              Comprehensive Haj Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From accommodation to compliance, we handle every aspect of Haj operations so you can focus on serving pilgrims.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card border border-border rounded-xl p-7 hover:shadow-xl hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="gold" size="lg" asChild>
              <Link to="/services">View All Services <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview with Madinah image */}
      <section className="py-20 md:py-28 bg-muted geometric-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-gold uppercase tracking-widest">About Travelexpresso</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
                Your Trusted CHGO Partner for Seamless Haj Operations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Travelexpresso Hospitality Pvt. Ltd. serves as a central coordination platform for multiple Haj Group Organizers, managing large-scale pilgrim operations with full compliance to Saudi Haj regulations.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "End-to-end Haj logistics management",
                  "Trusted by 50+ HGO partners across India",
                  "Full Nusuk & Masar system compliance",
                  "Transparent financial coordination",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="gold" asChild>
                <Link to="/about">Learn More About Us <ArrowRight className="w-5 h-5" /></Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={madinahImage}
                alt="Al-Masjid an-Nabawi in Madinah"
                className="rounded-xl shadow-2xl w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-5 border border-gold/20">
                <div className="text-2xl font-display font-bold text-gold">10,000+</div>
                <div className="text-sm text-muted-foreground">Pilgrims Served</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
              Trusted by HGO Partners Nationwide
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-7 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary geometric-pattern" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Streamline Your Haj Operations?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Partner with Travelexpresso and experience professional Haj coordination that you and your pilgrims deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get In Touch <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/hgo-partners">Become a Partner</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
