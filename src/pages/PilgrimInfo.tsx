import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Bell, ArrowRight, CheckCircle2 } from "lucide-react";

const PilgrimInfo = () => {
  return (
    <Layout>
      <section className="bg-primary geometric-pattern py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Pilgrim Information</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-6">
              Prepare for Your Sacred Journey
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              Essential information and guidance to help you prepare for a smooth and spiritually fulfilling Haj experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: BookOpen, title: "Haj Preparation", desc: "Comprehensive guide to spiritual and practical Haj preparation." },
              { icon: FileText, title: "Documentation", desc: "Required documents, visa requirements, and registration process." },
              { icon: Bell, title: "Announcements", desc: "Important updates and announcements for the upcoming Haj season." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-7 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Documentation Requirements</h2>
            <div className="bg-card border border-border rounded-xl p-8">
              <ul className="space-y-3">
                {[
                  "Valid passport with minimum 6 months validity",
                  "Completed Haj application form",
                  "Recent passport-size photographs",
                  "Medical fitness certificate",
                  "Vaccination records (Meningitis, COVID-19 as required)",
                  "Proof of relationship (for female pilgrims under 45)",
                  "Bank account details for financial coordination",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">Have Questions?</h2>
          <p className="text-primary-foreground/70 mb-8">Reach out to us for any queries about your Haj journey.</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PilgrimInfo;
