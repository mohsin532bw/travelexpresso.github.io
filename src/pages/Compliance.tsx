import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ShieldCheck, FileCheck, Scale, Award } from "lucide-react";

const Compliance = () => {
  return (
    <Layout>
      <section className="bg-primary geometric-pattern py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Compliance & Operations</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-6">
              Committed to Excellence & Compliance
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              We maintain the highest standards of regulatory compliance and operational transparency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: "Saudi Haj Ministry Compliance", desc: "Full adherence to all regulations, guidelines, and operational standards set by the Ministry of Haj and Umrah." },
              { icon: FileCheck, title: "Nusuk & Masar Systems", desc: "Complete integration with official Saudi Haj booking and management portals for accommodation and logistics." },
              { icon: Scale, title: "Financial Transparency", desc: "Transparent financial management with detailed reconciliation, auditable records, and clear cost distribution." },
              { icon: Award, title: "Quality Assurance", desc: "Rigorous quality checks on accommodation, transport, and services to ensure pilgrim satisfaction." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-gold/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Compliance;
