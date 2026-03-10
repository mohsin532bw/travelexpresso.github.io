import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Handshake, TrendingUp, Shield, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Handshake,
    title: "Streamlined Coordination",
    desc: "Single point of contact for all Saudi-side operations, contracts, and logistics.",
  },
  {
    icon: TrendingUp,
    title: "Cost Efficiency",
    desc: "Bulk contracting and consolidated operations reduce per-pilgrim costs significantly.",
  },
  {
    icon: Shield,
    title: "Full Compliance",
    desc: "We ensure all operations comply with Nusuk, Masar, and Saudi Haj Ministry standards.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "Round-the-clock operational support during the entire Haj season.",
  },
];

const HGOPartners = () => {
  return (
    <Layout>
      <section className="bg-primary geometric-pattern py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">For HGO Partners</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-6">
              Partner With Travelexpresso
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              Join our network of 39+ HGO partners and leverage our expertise in Haj coordination, logistics, and
              compliance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Why Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">Partnership Benefits</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-7 hover:shadow-lg hover:border-gold/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <b.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted geometric-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">What You Get as a Partner</h2>
            <ul className="space-y-3 text-left inline-block mb-8">
              {[
                "Access to pre-negotiated hotel contracts in Makkah & Madinah",
                "Centralized transport and Mashaer logistics",
                "Financial reconciliation and SAR wallet management",
                "Dedicated compliance and documentation support",
                "Real-time pilgrim data management",
                "Priority communication and operational support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Become a Partner <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HGOPartners;
