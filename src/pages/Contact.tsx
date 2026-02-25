import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919876543210";

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
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(220,25%,10%)] via-[hsl(215,35%,15%)] to-[hsl(220,25%,10%)] py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-3">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-white/65 max-w-xl mx-auto">
              Visit us, call us, or drop a message – we're here to help you find your perfect car.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 premium-shadow border border-border/60">
                <h3 className="font-heading font-bold text-xl mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-5">
                  <a href="tel:+919876543210" className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Phone</p>
                      <p className="font-semibold text-foreground">+91 98765 43210</p>
                    </div>
                  </a>

                  <a href="mailto:info@apligadi.in" className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Mail className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Email</p>
                      <p className="font-semibold text-foreground">info@apligadi.in</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Address</p>
                      <p className="font-semibold text-foreground">Dharampeth, Nagpur – 440010</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Hours</p>
                      <p className="text-sm text-foreground font-medium">Mon–Sat: 10AM–8PM · Sun: 11AM–5PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/60">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Apli Gadi! I need help finding a car.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-bold py-3 rounded-xl transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div id="map" className="rounded-2xl overflow-hidden premium-shadow border border-border/60 h-56">
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

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 premium-shadow border border-border/60 space-y-5 h-fit"
            >
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">Send Us a Message</h3>
                <p className="text-sm text-muted-foreground">We'll get back to you within 1 hour during working hours.</p>
              </div>

              <div>
                <Label className="text-sm font-semibold text-foreground mb-1.5 block">Your Name</Label>
                <Input
                  placeholder="Enter your full name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-secondary/50 border-border/70 focus:border-primary"
                />
              </div>
              <div>
                <Label className="text-sm font-semibold text-foreground mb-1.5 block">Phone Number</Label>
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-secondary/50 border-border/70 focus:border-primary"
                />
              </div>
              <div>
                <Label className="text-sm font-semibold text-foreground mb-1.5 block">How can we help?</Label>
                <Textarea
                  placeholder="Tell us what you're looking for – buy, sell, or exchange..."
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-secondary/50 border-border/70 focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold glow-primary gap-2">
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Clicking "Send" will open WhatsApp with your message pre-filled.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
