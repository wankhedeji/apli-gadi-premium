import { Car } from "@/data/cars";
import { Fuel, Gauge, Calendar, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919876543210";

const fuelColors: Record<string, string> = {
  Petrol: "bg-orange-50 text-orange-700 border-orange-200",
  Diesel: "bg-blue-50 text-blue-700 border-blue-200",
  CNG: "bg-green-50 text-green-700 border-green-200",
  Electric: "bg-teal-50 text-teal-700 border-teal-200",
};

export default function CarCard({ car, index = 0 }: { car: Car; index?: number }) {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I'm interested in the ${car.name} (${car.year}) priced at ₹${(car.price / 100000).toFixed(1)}L. Please share more details.`
  )}`;

  const emi = Math.round((car.price * 0.009)); // rough EMI estimate

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden group premium-shadow hover:premium-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/60"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-secondary">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Price badge */}
        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-md">
          ₹{(car.price / 100000).toFixed(1)}L
        </div>
        {/* Fuel badge */}
        <div className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-md border ${fuelColors[car.fuelType] ?? "bg-secondary text-foreground"}`}>
          {car.fuelType}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-3">
          <p className="text-xs text-muted-foreground font-medium mb-0.5">{car.brand}</p>
          <h3 className="font-heading font-bold text-foreground text-base leading-tight">{car.name}</h3>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1.5 bg-secondary/60 px-2.5 py-1.5 rounded-lg">
            <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />{car.year}
          </span>
          <span className="flex items-center gap-1.5 bg-secondary/60 px-2.5 py-1.5 rounded-lg">
            <Gauge className="h-3.5 w-3.5 text-primary shrink-0" />{(car.kmDriven / 1000).toFixed(0)}k km
          </span>
          <span className="flex items-center gap-1.5 bg-secondary/60 px-2.5 py-1.5 rounded-lg">
            <Fuel className="h-3.5 w-3.5 text-primary shrink-0" />{car.transmission}
          </span>
          <span className="flex items-center gap-1.5 bg-secondary/60 px-2.5 py-1.5 rounded-lg">
            <Users className="h-3.5 w-3.5 text-primary shrink-0" />{car.owners} owner
          </span>
        </div>

        {/* EMI */}
        <p className="text-xs text-muted-foreground mb-3">
          EMI from <span className="font-semibold text-primary">₹{emi.toLocaleString('en-IN')}/mo</span>
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold text-xs">
            View Details
          </Button>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button size="sm" variant="outline" className="w-full border-[hsl(142,70%,40%)] text-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,95%)] font-semibold text-xs gap-1">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
