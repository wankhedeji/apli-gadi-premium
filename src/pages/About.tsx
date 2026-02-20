import { ShieldCheck, Users, Car, Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { icon: Car, value: "500+", label: "Cars Sold" },
  { icon: Users, value: "400+", label: "Happy Families" },
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: ShieldCheck, value: "100%", label: "Verified Cars" },
];

export default function About() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Apli Gadi" subtitle="Nagpur's most trusted pre-owned car dealership" />

        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8 space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              <strong className="text-foreground">Apli Gadi</strong> cha prarambh ek simple vichar pasun jhala – 
              Nagpur madhil lokanna <strong className="text-foreground">bharosemand</strong> pre-owned cars milaayla pahijet. 
              Aamchya each customer sathi transparency, quality, aani trust he aamche core values aahet.
            </p>
            <p>
              Started with a passion for automobiles and a commitment to trust, Apli Gadi has grown to become 
              Nagpur's preferred destination for pre-owned cars. Every car in our showroom goes through a rigorous 
              <strong className="text-foreground"> 150+ point inspection</strong> before being listed.
            </p>
            <p>
              We handle everything – from selection to RC transfer – so you can drive away with confidence. 
              Whether you're buying your first car, upgrading, or selling your current one, 
              <strong className="text-foreground"> Apli Gadi</strong> is your trusted partner.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-heading font-bold text-gradient">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
