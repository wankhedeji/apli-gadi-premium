import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Apli Gadi! I'm interested in buying a pre-owned car.");

export default function Footer() {
  return (
    <footer className="bg-[hsl(220,25%,10%)] text-white">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
                  <circle cx="7.5" cy="14.5" r="1.5"/>
                  <circle cx="16.5" cy="14.5" r="1.5"/>
                </svg>
              </div>
              <div>
                <span className="text-lg font-heading font-black tracking-tight">
                  Apli <span className="text-accent">Gadi</span>
                </span>
                <p className="text-[9px] text-white/40 tracking-widest uppercase font-medium">Nagpur</p>
              </div>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Nagpur's most trusted pre-owned car dealership. Bharosemand cars at transparent prices since 2016.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[hsl(142,70%,35%)] transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-5 text-white text-sm tracking-wider uppercase">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/55">
              <Link to="/buy" className="hover:text-accent transition-colors">Buy Pre-Owned Cars</Link>
              <Link to="/sell" className="hover:text-accent transition-colors">Sell Your Car</Link>
              <Link to="/exchange" className="hover:text-accent transition-colors">Exchange / Upgrade</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-5 text-white text-sm tracking-wider uppercase">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-white/55">
              <a href="tel:+919876543210" className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent shrink-0" /> +91 98765 43210
              </a>
              <a href="mailto:info@apligadi.in" className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent shrink-0" /> info@apligadi.in
              </a>
              <span className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Dharampeth, Nagpur,<br />Maharashtra – 440010</span>
              </span>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-bold mb-5 text-white text-sm tracking-wider uppercase">Working Hours</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/55">
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-accent shrink-0" />
                <div>
                  <p className="text-white/80 font-medium">Mon – Sat</p>
                  <p>10:00 AM – 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 mt-1">
                <Clock className="h-4 w-4 text-accent shrink-0" />
                <div>
                  <p className="text-white/80 font-medium">Sunday</p>
                  <p>11:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/35">
          <p>© {new Date().getFullYear()} Apli Gadi. All rights reserved.</p>
          <p>Made with ❤️ in Nagpur, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
}
