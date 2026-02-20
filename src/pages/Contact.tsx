import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const WHATSAPP_NUMBER = "919876543210";

const contactInfo = [
  { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "info@apligadi.in", href: "mailto:info@apligadi.in" },
  { icon: MapPin, label: "Dharampeth, Nagpur, Maharashtra", href: "#map" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Apli Gadi!\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact Us" subtitle="Visit us or reach out – we're always happy to help!" />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-xl p-6 space-y-4">
              {contactInfo.map((c, i) => (
                <a key={i} href={c.href} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">{c.label}</span>
                </a>
              ))}
            </div>

            <div id="map" className="rounded-xl overflow-hidden h-64 glass-card">
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
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-8 space-y-6"
          >
            <h3 className="font-heading font-semibold text-lg">Send Us a Message</h3>
            <div><Label>Your Name</Label><Input placeholder="Enter your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
            <div><Label>Phone Number</Label><Input type="tel" placeholder="+91 98765 43210" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
            <div><Label>Message</Label><Textarea placeholder="How can we help you?" rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
            <Button type="submit" size="lg" className="w-full glow-primary">
              <Send className="mr-2 h-4 w-4" /> Send via WhatsApp
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
