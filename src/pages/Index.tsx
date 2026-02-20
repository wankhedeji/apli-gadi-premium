import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileCheck, IndianRupee, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cars, testimonials } from "@/data/cars";
import CarScene from "@/components/CarScene";
import CarCard from "@/components/CarCard";
import SectionHeading from "@/components/SectionHeading";

const trustItems = [
  { icon: ShieldCheck, title: "Verified Cars", desc: "Every car goes through 150+ point inspection" },
  { icon: FileCheck, title: "RC Transfer Support", desc: "Complete documentation and transfer assistance" },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden charges, best market rates" },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-semibold mb-2 tracking-wider uppercase text-sm">Nagpur's Trusted Dealership</p>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-4">
              Apli Gadi –{" "}
              <span className="text-gradient">Bharosemand</span>{" "}
              Pre-Owned Cars
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Buy, sell, or exchange verified pre-owned cars with complete transparency. Your dream car is just a click away!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/buy">
                <Button size="lg" className="glow-primary text-base">
                  Buy Car <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/sell">
                <Button size="lg" variant="outline" className="text-base">Sell Your Car</Button>
              </Link>
              <Link to="/exchange">
                <Button size="lg" variant="secondary" className="text-base">Exchange Car</Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <CarScene />
          </motion.div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Cars" subtitle="Hand-picked, verified pre-owned cars at the best prices" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.slice(0, 4).map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/buy">
              <Button variant="outline" size="lg">View All Cars <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Choose Apli Gadi?" subtitle="Trusted by 500+ families in Nagpur" />
          <div className="grid md:grid-cols-3 gap-8">
            {trustItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-8 text-center hover:glow-primary transition-shadow"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Happy Customers" subtitle="See what our customers say about us" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
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
