import { ShieldCheck, Users, Car, Award, MapPin, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { icon: Car, value: "500+", label: "Cars Sold", color: "bg-blue-50 text-blue-700" },
  { icon: Users, value: "400+", label: "Happy Families", color: "bg-green-50 text-green-700" },
  { icon: Award, value: "8+", label: "Years Experience", color: "bg-amber-50 text-amber-700" },
  { icon: ShieldCheck, value: "100%", label: "Verified Cars", color: "bg-purple-50 text-purple-700" },
];

const values = [
  { title: "Transparency", desc: "Every price, every document – fully disclosed. No hidden charges ever." },
  { title: "Quality Assurance", desc: "150+ point inspection on every car before it hits our showroom." },
  { title: "Local Trust", desc: "We're Nagpurians serving Nagpur. Your trust is our business." },
  { title: "After-Sale Support", desc: "RC transfer, loan assistance, insurance – we handle everything." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(220,25%,10%)] via-[hsl(215,35%,15%)] to-[hsl(220,25%,10%)] py-24 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wider uppercase">
              Nagpur's Trusted Dealership Since 2016
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
              About <span className="text-gradient">Apli Gadi</span>
            </h1>
            <p className="text-white/65 max-w-2xl mx-auto text-lg">
              Built on trust, driven by passion for automobiles – serving Nagpur families for over 8 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center premium-shadow border border-border/60"
              >
                <div className={`h-12 w-12 rounded-xl ${s.color} flex items-center justify-center mx-auto mb-3`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-heading font-extrabold text-gradient mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Our Story" subtitle="How Apli Gadi became Nagpur's most trusted name in pre-owned cars" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 premium-shadow border border-border/60 space-y-5 text-muted-foreground leading-relaxed"
            >
              <p>
                <strong className="text-foreground font-semibold">Apli Gadi</strong> cha prarambh ek simple vichar pasun jhala –
                Nagpur madhil lokanna <strong className="text-foreground font-semibold">bharosemand</strong> pre-owned cars milaayla pahijet.
                Aamchya each customer sathi transparency, quality, aani trust he aamche core values aahet.
              </p>
              <p>
                Started in 2016 with a passion for automobiles and a commitment to trust, Apli Gadi has grown to become
                Nagpur's preferred destination for pre-owned cars. Every car in our showroom goes through a rigorous
                <strong className="text-foreground font-semibold"> 150+ point inspection</strong> before being listed.
              </p>
              <p>
                We handle everything – from selection to RC transfer – so you can drive away with confidence.
                Whether you're buying your first car, upgrading to a premium model, or selling your current one,
                <strong className="text-foreground font-semibold"> Apli Gadi</strong> is your trusted partner in Nagpur.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Values" subtitle="What makes Apli Gadi different from others" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 premium-shadow border border-border/60"
              >
                <div className="h-1.5 w-12 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <SectionHeading title="Visit Our Showroom" subtitle="Come see our collection in person – we're always happy to help" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 premium-shadow border border-border/60 space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Our Address</p>
                  <p className="text-sm text-muted-foreground mt-1">Dharampeth, Nagpur, Maharashtra – 440010</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Working Hours</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon – Sat: 10:00 AM – 8:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: 11:00 AM – 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <a href="tel:+919876543210" className="text-sm text-primary hover:underline mt-1 block">+91 98765 43210</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden premium-shadow border border-border/60 h-64 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.973!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQ0LjkiTiA3OcKwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apli Gadi Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
