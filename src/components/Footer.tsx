import { Car, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-lg font-heading font-bold">
                Apli <span className="text-primary">Gadi</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Nagpur's most trusted pre-owned car dealership. Bharosemand cars at transparent prices.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/buy" className="hover:text-primary transition-colors">Buy Cars</Link>
              <Link to="/sell" className="hover:text-primary transition-colors">Sell Your Car</Link>
              <Link to="/exchange" className="hover:text-primary transition-colors">Exchange Car</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</span>
              <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@apligadi.in</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Dharampeth, Nagpur</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Working Hours</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
              <p>Sunday: 11:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Apli Gadi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
