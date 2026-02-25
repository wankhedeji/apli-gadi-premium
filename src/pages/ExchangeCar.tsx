import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeftRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919876543210";

export default function ExchangeCar() {
  const [current, setCurrent] = useState({ brand: "", model: "", year: "", km: "" });
  const [desired, setDesired] = useState({ brand: "", model: "", budget: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Apli Gadi! I want to exchange my car.\n\nMy Car:\nBrand: ${current.brand}\nModel: ${current.model}\nYear: ${current.year}\nKM: ${current.km}\n\nDesired Car:\nBrand: ${desired.brand}\nModel: ${desired.model}\nBudget: ₹${desired.budget}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const benefits = [
    "Instant valuation of your car",
    "Wide selection of upgrade options",
    "Difference amount financing available",
    "Complete RC transfer assistance",
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[hsl(220,25%,10%)] via-[hsl(215,35%,15%)] to-[hsl(220,25%,10%)] py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-3">
              Exchange Your <span className="text-gradient">Car</span>
            </h1>
            <p className="text-white/65 max-w-xl mx-auto">
              Trade your old car for a better one. Hassle-free, transparent, and fast exchange process.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 bg-primary/5 border border-primary/15 rounded-xl px-4 py-3"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-medium">{b}</span>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-[1fr_60px_1fr] gap-4 items-start">
              {/* Current Car */}
              <div className="bg-white rounded-2xl p-6 space-y-4 premium-shadow border border-border/60">
                <div>
                  <div className="h-1 w-10 bg-gradient-to-r from-primary to-accent rounded-full mb-3" />
                  <h3 className="font-heading font-extrabold text-xl text-foreground">Your Current Car</h3>
                  <p className="text-sm text-muted-foreground">Details of the car you want to exchange</p>
                </div>
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-1.5 block">Brand</Label>
                  <Input placeholder="e.g. Maruti" required value={current.brand} onChange={(e) => setCurrent({ ...current, brand: e.target.value })} className="bg-secondary/50" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-1.5 block">Model</Label>
                  <Input placeholder="e.g. Swift" required value={current.model} onChange={(e) => setCurrent({ ...current, model: e.target.value })} className="bg-secondary/50" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-1.5 block">Year</Label>
                  <Input type="number" placeholder="2018" required value={current.year} onChange={(e) => setCurrent({ ...current, year: e.target.value })} className="bg-secondary/50" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-1.5 block">KM Driven</Label>
                  <Input type="number" placeholder="45000" required value={current.km} onChange={(e) => setCurrent({ ...current, km: e.target.value })} className="bg-secondary/50" />
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center mt-20">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ArrowLeftRight className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Desired Car */}
              <div className="bg-white rounded-2xl p-6 space-y-4 premium-shadow border border-border/60">
                <div>
                  <div className="h-1 w-10 bg-gradient-to-r from-accent to-primary rounded-full mb-3" />
                  <h3 className="font-heading font-extrabold text-xl text-foreground">Desired Car</h3>
                  <p className="text-sm text-muted-foreground">The car you want to upgrade to</p>
                </div>
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-1.5 block">Brand</Label>
                  <Input placeholder="e.g. Hyundai" required value={desired.brand} onChange={(e) => setDesired({ ...desired, brand: e.target.value })} className="bg-secondary/50" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-1.5 block">Model</Label>
                  <Input placeholder="e.g. Creta" required value={desired.model} onChange={(e) => setDesired({ ...desired, model: e.target.value })} className="bg-secondary/50" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-1.5 block">Budget (₹)</Label>
                  <Input type="number" placeholder="1200000" required value={desired.budget} onChange={(e) => setDesired({ ...desired, budget: e.target.value })} className="bg-secondary/50" />
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold glow-primary gap-2 py-6 text-base">
              <MessageCircle className="h-5 w-5" /> Send Exchange Request via WhatsApp
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
