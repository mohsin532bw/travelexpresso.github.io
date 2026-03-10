import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Award, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary geometric-pattern py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">About Us</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mt-3 mb-6">
              Who We Are
            </h1>
            <p className="text-2xl lg:text-4xl font-display text-primary-foreground mt-3 mb-6">
              <strong>Travelexpresso Hospitality Pvt. Ltd.</strong> is a dedicated Haj coordination and hospitality
              management organization committed to supporting Haj Group Organizers (HGOs) in the smooth planning and
              execution of Haj operations.
            </p>

            <p class="about-text">
              Operating as a <strong>Combined Haj Group Organizer (CHGO)</strong>, Travelexpresso plays a central role
              in coordinating essential Haj services including accommodation arrangements in{" "}
              <strong>Makkah and Madinah</strong>, transportation management, Mashaer services, and operational
              processing through official platforms such as <strong>Masar</strong> and <strong>Nusuk</strong>.
            </p>

            <p class="about-text">
              Our organization works closely with HGOs, service providers, and operational partners to ensure every
              stage of Haj preparation is handled with efficiency, transparency, and strict adherence to operational
              timelines and guidelines.
            </p>

            <p class="about-text">
              With a strong focus on structured coordination and operational reliability, Travelexpresso helps
              streamline complex processes and enables HGOs to focus on serving their pilgrims while we manage the
              backend coordination required for successful Haj operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To provide seamless, transparent, and compliant Haj coordination services that enable HGO partners to deliver an exceptional pilgrimage experience for every pilgrim.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be India's most trusted Haj coordination platform, setting the standard for operational excellence, financial transparency, and pilgrim satisfaction.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h2 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted geometric-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Pilgrim-First Approach",
                desc: "Every decision we make prioritizes the comfort and spiritual experience of pilgrims.",
              },
              {
                icon: Award,
                title: "Operational Excellence",
                desc: "We maintain the highest standards in logistics, compliance, and coordination.",
              },
              {
                icon: Target,
                title: "Transparency",
                desc: "Complete financial and operational transparency with all our HGO partners.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-7 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
            Want to Partner With Us?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Join 39+ HGO partners who trust Travelexpresso for their Haj operations.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
