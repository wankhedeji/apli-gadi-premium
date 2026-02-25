import { useState } from "react";
import { cars, brands, fuelTypes, transmissions } from "@/data/cars";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Filter, X, Search } from "lucide-react";
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

  const hasFilters = brand !== "all" || fuel !== "all" || transmission !== "all" || priceRange[0] !== 0 || priceRange[1] !== 50;

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[hsl(220,25%,10%)] via-[hsl(215,35%,15%)] to-[hsl(220,25%,10%)] py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-3">
              Buy <span className="text-gradient">Pre-Owned Cars</span>
            </h1>
            <p className="text-white/65 max-w-xl mx-auto">
              Browse our verified collection of quality pre-owned cars at transparent prices
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <p className="text-foreground font-semibold">
                {filtered.length} {filtered.length === 1 ? "car" : "cars"} found
              </p>
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-primary hover:underline font-medium ml-2"
                >
                  Clear filters
                </button>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="md:hidden gap-2 border-primary text-primary"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              {showFilters ? "Hide" : "Filters"}
            </Button>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Filters Panel */}
            <motion.div
              initial={false}
              animate={{ height: showFilters || window.innerWidth >= 1024 ? "auto" : 0 }}
              className={`bg-white rounded-2xl p-6 space-y-6 overflow-hidden lg:!h-auto premium-shadow border border-border/60 ${!showFilters ? "hidden lg:block" : ""}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-foreground">Filters</h3>
                {hasFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs text-muted-foreground h-auto p-1 gap-1">
                    <X className="h-3 w-3" /> Clear all
                  </Button>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Brand</label>
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger className="bg-secondary/50"><SelectValue placeholder="All Brands" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Brands</SelectItem>
                    {brands.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Fuel Type</label>
                <Select value={fuel} onValueChange={setFuel}>
                  <SelectTrigger className="bg-secondary/50"><SelectValue placeholder="All" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Fuel Types</SelectItem>
                    {fuelTypes.map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Transmission</label>
                <Select value={transmission} onValueChange={setTransmission}>
                  <SelectTrigger className="bg-secondary/50"><SelectValue placeholder="All" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {transmissions.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-3 block">
                  Price Range
                  <span className="text-primary ml-2 font-bold">₹{priceRange[0]}L – ₹{priceRange[1]}L</span>
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={50}
                  min={0}
                  step={1}
                  className="mt-2"
                />
              </div>
            </motion.div>

            {/* Car Grid */}
            <div>
              {filtered.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((car, i) => <CarCard key={car.id} car={car} index={i} />)}
                </div>
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">No cars found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your filters to find more cars</p>
                  <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
