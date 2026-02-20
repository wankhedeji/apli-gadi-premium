import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeftRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

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

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading title="Exchange Your Car" subtitle="Trade your old car for a new one – hassle-free!" />

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-start"
        >
          {/* Current car */}
          <div className="glass-card rounded-xl p-6 space-y-4">
            <h3 className="font-heading font-semibold text-lg text-center">Your Current Car</h3>
            <div><Label>Brand</Label><Input placeholder="e.g. Maruti" required value={current.brand} onChange={(e) => setCurrent({ ...current, brand: e.target.value })} /></div>
            <div><Label>Model</Label><Input placeholder="e.g. Swift" required value={current.model} onChange={(e) => setCurrent({ ...current, model: e.target.value })} /></div>
            <div><Label>Year</Label><Input type="number" placeholder="2018" required value={current.year} onChange={(e) => setCurrent({ ...current, year: e.target.value })} /></div>
            <div><Label>KM Driven</Label><Input type="number" placeholder="45000" required value={current.km} onChange={(e) => setCurrent({ ...current, km: e.target.value })} /></div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center pt-20">
            <ArrowLeftRight className="h-8 w-8 text-primary" />
          </div>

          {/* Desired car */}
          <div className="glass-card rounded-xl p-6 space-y-4">
            <h3 className="font-heading font-semibold text-lg text-center">Desired Car</h3>
            <div><Label>Brand</Label><Input placeholder="e.g. Hyundai" required value={desired.brand} onChange={(e) => setDesired({ ...desired, brand: e.target.value })} /></div>
            <div><Label>Model</Label><Input placeholder="e.g. Creta" required value={desired.model} onChange={(e) => setDesired({ ...desired, model: e.target.value })} /></div>
            <div><Label>Budget (₹)</Label><Input type="number" placeholder="1200000" required value={desired.budget} onChange={(e) => setDesired({ ...desired, budget: e.target.value })} /></div>
          </div>

          <div className="md:col-span-3">
            <Button type="submit" size="lg" className="w-full glow-primary">
              <Send className="mr-2 h-4 w-4" /> Send Exchange Request via WhatsApp
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
