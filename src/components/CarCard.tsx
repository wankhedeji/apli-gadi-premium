import { useState, useRef } from "react";
import { Car } from "@/data/cars";
import { Fuel, Gauge, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919876543210";

export default function CarCard({ car, index = 0 }: { car: Car; index?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I'm interested in the ${car.name} (${car.year}) priced at ₹${(car.price / 100000).toFixed(1)}L. Please share more details.`
  )}`;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouse}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="glass-card rounded-xl overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          ₹{(car.price / 100000).toFixed(1)}L
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg mb-2">{car.name}</h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{car.year}</span>
          <span className="flex items-center gap-1"><Gauge className="h-3.5 w-3.5" />{(car.kmDriven / 1000).toFixed(0)}k km</span>
          <span className="flex items-center gap-1"><Fuel className="h-3.5 w-3.5" />{car.fuelType}</span>
          <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{car.owners} owner</span>
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="flex-1">View Details</Button>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button size="sm" variant="outline" className="w-full border-[hsl(142,70%,45%)] text-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,45%)/0.1]">
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
