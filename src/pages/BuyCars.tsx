import { useState } from "react";
import { cars, brands, fuelTypes, transmissions } from "@/data/cars";
import CarCard from "@/components/CarCard";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Filter, X } from "lucide-react";
import { motion } from "framer-motion";

export default function BuyCars() {
  const [brand, setBrand] = useState("all");
  const [fuel, setFuel] = useState("all");
  const [transmission, setTransmission] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = cars.filter((c) => {
    if (brand !== "all" && c.brand !== brand) return false;
    if (fuel !== "all" && c.fuelType !== fuel) return false;
    if (transmission !== "all" && c.transmission !== transmission) return false;
    if (c.price < priceRange[0] * 100000 || c.price > priceRange[1] * 100000) return false;
    return true;
  });

  const clearFilters = () => {
    setBrand("all");
    setFuel("all");
    setTransmission("all");
    setPriceRange([0, 50]);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading title="Buy Pre-Owned Cars" subtitle="Explore our verified collection of quality used cars" />

        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground text-sm">{filtered.length} cars found</p>
          <Button variant="outline" size="sm" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4 mr-1" /> Filters
          </Button>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Filters */}
          <motion.div
            initial={false}
            animate={{ height: showFilters || window.innerWidth >= 1024 ? "auto" : 0 }}
            className={`glass-card rounded-xl p-6 space-y-6 overflow-hidden lg:!h-auto ${!showFilters ? "hidden lg:block" : ""}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-semibold">Filters</h3>
              <Button variant="ghost" size="sm" onClick={clearFilters}><X className="h-3 w-3 mr-1" />Clear</Button>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Brand</label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger><SelectValue placeholder="All Brands" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {brands.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Fuel Type</label>
              <Select value={fuel} onValueChange={setFuel}>
                <SelectTrigger><SelectValue placeholder="All" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {fuelTypes.map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Transmission</label>
              <Select value={transmission} onValueChange={setTransmission}>
                <SelectTrigger><SelectValue placeholder="All" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {transmissions.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Price: ₹{priceRange[0]}L – ₹{priceRange[1]}L
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={50}
                min={0}
                step={1}
              />
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.length > 0 ? (
              filtered.map((car, i) => <CarCard key={car.id} car={car} index={i} />)
            ) : (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                No cars match your filters. Try adjusting them!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
