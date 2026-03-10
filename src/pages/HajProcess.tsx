import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const steps = [
  { step: "01", title: "HGO Partnership Onboarding", desc: "We onboard HGO partners, establish contracts, and set up operational frameworks." },
  { step: "02", title: "Pilgrim Registration", desc: "Pilgrims are registered through our centralized data management system." },
  { step: "03", title: "Accommodation Contracting", desc: "Hotels in Makkah and Madinah are contracted and rooms allocated to pilgrim groups." },
  { step: "04", title: "Transport Planning", desc: "Comprehensive transport logistics are arranged — airport, intercity, and Mashaer routes." },
  { step: "05", title: "Visa & Documentation", desc: "All visa applications, MOFA documentation, and portal uploads are processed." },
  { step: "06", title: "Haj Operations Execution", desc: "Full on-ground operations management during the Haj season with 24/7 support." },
];

const HajProcess = () => {
  return (
    <Layout>
      <section className="bg-primary geometric-pattern py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Haj Process</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-6">
              How We Manage Haj Operations
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              A structured, step-by-step approach to ensure seamless Haj coordination from onboarding to execution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 mb-10 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center shrink-0">
                    <span className="text-lg font-display font-bold text-gold">{s.step}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-gold/20 mt-2" />}
                </div>
                <div className="pb-10">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HajProcess;
