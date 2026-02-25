import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileCheck, IndianRupee, Star, ArrowRight, Phone, MessageCircle, TrendingUp, Award, Users, Car } from "lucide-react";
import { motion } from "framer-motion";
import { cars, testimonials } from "@/data/cars";
import CarCard from "@/components/CarCard";
import SectionHeading from "@/components/SectionHeading";

const trustItems = [
  { icon: ShieldCheck, title: "150+ Point Inspection", desc: "Every car verified through our rigorous quality checklist" },
  { icon: FileCheck, title: "RC Transfer Support", desc: "Complete documentation and hassle-free ownership transfer" },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden charges, best market rates guaranteed" },
];

const stats = [
  { icon: Car, value: "500+", label: "Cars Sold" },
  { icon: Users, value: "400+", label: "Happy Families" },
  { icon: Award, value: "8+", label: "Years of Trust" },
  { icon: TrendingUp, value: "100%", label: "Verified Cars" },
];

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Apli Gadi! I'm interested in buying a pre-owned car. Please help me.");

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[hsl(220,25%,10%)] via-[hsl(215,35%,15%)] to-[hsl(220,25%,10%)]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--accent))] to-transparent opacity-60" />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Nagpur's Most Trusted Pre-Owned Car Dealership
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6"
            >
              Your Dream Car,{" "}
              <span className="text-gradient">Verified &amp; Trusted</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Buy, sell, or exchange premium pre-owned cars with complete transparency.
              150+ point inspection on every vehicle. RC transfer support included.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center mb-12"
            >
              <Link to="/buy">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 glow-primary text-base">
                  Browse Cars <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/sell">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 text-base">
                  Sell Your Car
                </Button>
              </Link>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-semibold px-8 text-base gap-2">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((s, i) => (
                <div key={i} className="bg-white/8 border border-white/15 rounded-xl p-4 backdrop-blur-sm text-center">
                  <p className="text-2xl md:text-3xl font-heading font-extrabold text-accent mb-1">{s.value}</p>
                  <p className="text-white/60 text-xs font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Cars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Cars" subtitle="Hand-picked, verified pre-owned cars at the best prices in Nagpur" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.slice(0, 4).map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/buy">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold transition-all">
                View All Cars <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Choose Apli Gadi?" subtitle="Trusted by 500+ families across Nagpur for quality and transparency" />
          <div className="grid md:grid-cols-3 gap-8">
            {trustItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center premium-shadow hover:premium-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/60"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-[hsl(215,85%,30%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
              Ready to Buy or Sell?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Visit our showroom in Dharampeth, Nagpur or contact us now. We're open 7 days a week!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919876543210">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 gap-2">
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </a>
              <Link to="/exchange">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
                  Exchange Your Car
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Happy Customers" subtitle="Real stories from real families who trusted Apli Gadi" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 premium-shadow border border-border/60 flex flex-col"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic leading-relaxed flex-1">"{t.text}"</p>
                <div className="border-t border-border/60 pt-3">
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Bought: {t.car}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
