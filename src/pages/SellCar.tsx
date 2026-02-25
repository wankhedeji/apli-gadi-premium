import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, MessageCircle, CheckCircle, IndianRupee, Clock, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919876543210";

const steps = [
  { icon: MessageCircle, title: "Submit Details", desc: "Fill in your car information below" },
  { icon: Clock, title: "Quick Evaluation", desc: "We'll assess your car within 2 hours" },
  { icon: IndianRupee, title: "Best Price Offer", desc: "Get the best market price for your car" },
  { icon: ShieldCheck, title: "Instant Payment", desc: "Quick, hassle-free documentation & payment" },
];

export default function SellCar() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ brand: "", model: "", year: "", km: "", price: "", desc: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Apli Gadi! I want to sell my car:\nBrand: ${form.brand}\nModel: ${form.model}\nYear: ${form.year}\nKM Driven: ${form.km}\nExpected Price: ₹${form.price}\nDetails: ${form.desc}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[hsl(220,25%,10%)] via-[hsl(215,35%,15%)] to-[hsl(220,25%,10%)] py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-3">
              Sell Your <span className="text-gradient">Car</span>
            </h1>
            <p className="text-white/65 max-w-xl mx-auto">
              Get the best price for your car. Fast, transparent, and hassle-free process.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-4 text-center premium-shadow border border-border/60"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-semibold text-sm text-foreground mb-1">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-12 text-center premium-shadow border border-border/60"
                >
                  <div className="h-20 w-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold mb-2 text-foreground">Request Sent!</h3>
                  <p className="text-muted-foreground mb-6">We'll contact you shortly via WhatsApp to evaluate your car.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Submit Another Car
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 premium-shadow border border-border/60 space-y-6"
                >
                  <div>
                    <h2 className="font-heading font-extrabold text-2xl text-foreground mb-1">Car Details</h2>
                    <p className="text-sm text-muted-foreground">Fill in your car details and we'll reach out with the best offer.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-semibold text-foreground mb-1.5 block">Car Brand</Label>
                      <Input placeholder="e.g. Maruti Suzuki" required value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} className="bg-secondary/50" />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-foreground mb-1.5 block">Model</Label>
                      <Input placeholder="e.g. Swift VXI" required value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} className="bg-secondary/50" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <Label className="text-sm font-semibold text-foreground mb-1.5 block">Year</Label>
                      <Input type="number" placeholder="2020" required value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="bg-secondary/50" />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-foreground mb-1.5 block">KM Driven</Label>
                      <Input type="number" placeholder="25000" required value={form.km} onChange={(e) => setForm({ ...form, km: e.target.value })} className="bg-secondary/50" />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-foreground mb-1.5 block">Expected Price (₹)</Label>
                      <Input type="number" placeholder="500000" required value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="bg-secondary/50" />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-foreground mb-1.5 block">Additional Details</Label>
                    <Textarea placeholder="Describe your car's condition, features, service history, etc." value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} className="bg-secondary/50 resize-none" rows={3} />
                  </div>

                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center text-muted-foreground cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-colors">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground/60" />
                    <p className="text-sm font-medium">Upload Car Photos</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">Coming soon</p>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold glow-primary gap-2">
                    <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
