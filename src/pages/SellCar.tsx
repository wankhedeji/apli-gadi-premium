import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const WHATSAPP_NUMBER = "919876543210";

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
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <SectionHeading title="Sell Your Car" subtitle="Get the best price for your car. Fill in the details and we'll get back to you!" />

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-xl p-12 text-center"
            >
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-2">Request Sent!</h3>
              <p className="text-muted-foreground mb-6">We'll contact you shortly via WhatsApp.</p>
              <Button onClick={() => setSubmitted(false)}>Submit Another</Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Car Brand</Label>
                  <Input placeholder="e.g. Maruti Suzuki" required value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} />
                </div>
                <div>
                  <Label>Model</Label>
                  <Input placeholder="e.g. Swift VXI" required value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} />
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <Label>Year</Label>
                  <Input type="number" placeholder="2020" required value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
                </div>
                <div>
                  <Label>KM Driven</Label>
                  <Input type="number" placeholder="25000" required value={form.km} onChange={(e) => setForm({ ...form, km: e.target.value })} />
                </div>
                <div>
                  <Label>Expected Price (₹)</Label>
                  <Input type="number" placeholder="500000" required value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
                </div>
              </div>
              <div>
                <Label>Additional Details</Label>
                <Textarea placeholder="Describe your car's condition, features, etc." value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
              </div>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center text-muted-foreground cursor-pointer hover:border-primary/50 transition-colors">
                <Upload className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Upload car photos (coming soon)</p>
              </div>
              <Button type="submit" size="lg" className="w-full glow-primary">
                <Send className="mr-2 h-4 w-4" /> Send via WhatsApp
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
