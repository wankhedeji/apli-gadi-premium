export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  kmDriven: number;
  fuelType: "Petrol" | "Diesel" | "CNG" | "Electric";
  transmission: "Manual" | "Automatic";
  image: string;
  images?: string[];
  color: string;
  owners: number;
  description: string;
  features: string[];
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Maruti Swift VXI",
    brand: "Maruti Suzuki",
    model: "Swift",
    year: 2021,
    price: 595000,
    kmDriven: 28000,
    fuelType: "Petrol",
    transmission: "Manual",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=400&fit=crop",
    color: "Red",
    owners: 1,
    description: "Well-maintained first-owner Swift with full service history.",
    features: ["ABS", "Airbags", "Power Steering", "AC", "Music System"],
  },
  {
    id: "2",
    name: "Hyundai Creta SX",
    brand: "Hyundai",
    model: "Creta",
    year: 2022,
    price: 1250000,
    kmDriven: 15000,
    fuelType: "Diesel",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
    color: "White",
    owners: 1,
    description: "Premium SUV with panoramic sunroof and all features.",
    features: ["Sunroof", "Cruise Control", "Ventilated Seats", "360 Camera", "ADAS"],
  },
  {
    id: "3",
    name: "Honda City ZX",
    brand: "Honda",
    model: "City",
    year: 2020,
    price: 875000,
    kmDriven: 35000,
    fuelType: "Petrol",
    transmission: "Manual",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop",
    color: "Silver",
    owners: 1,
    description: "Elegant sedan with Honda reliability, well-serviced.",
    features: ["Lane Watch Camera", "Sunroof", "LED Headlamps", "Push Start"],
  },
  {
    id: "4",
    name: "Tata Nexon EV Max",
    brand: "Tata",
    model: "Nexon EV",
    year: 2023,
    price: 1450000,
    kmDriven: 8000,
    fuelType: "Electric",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1606611013016-969c19ba27d5?w=600&h=400&fit=crop",
    color: "Blue",
    owners: 1,
    description: "Like-new electric SUV with extended range battery.",
    features: ["EV", "Connected Car", "Ventilated Seats", "Air Purifier", "Wireless Charger"],
  },
  {
    id: "5",
    name: "Mahindra XUV700 AX7",
    brand: "Mahindra",
    model: "XUV700",
    year: 2022,
    price: 1650000,
    kmDriven: 20000,
    fuelType: "Diesel",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop",
    color: "Black",
    owners: 1,
    description: "Flagship SUV with ADAS, premium audio, and 7-seater.",
    features: ["ADAS", "Sony 3D Audio", "Panoramic Sunroof", "Flush Door Handles"],
  },
  {
    id: "6",
    name: "Maruti Baleno Alpha",
    brand: "Maruti Suzuki",
    model: "Baleno",
    year: 2023,
    price: 750000,
    kmDriven: 10000,
    fuelType: "Petrol",
    transmission: "Manual",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
    color: "Nexa Blue",
    owners: 1,
    description: "Top variant Baleno with heads-up display and 360 camera.",
    features: ["HUD", "360 Camera", "LED Projectors", "Suzuki Connect"],
  },
  {
    id: "7",
    name: "Toyota Fortuner 4x4",
    brand: "Toyota",
    model: "Fortuner",
    year: 2021,
    price: 3200000,
    kmDriven: 42000,
    fuelType: "Diesel",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop",
    color: "Pearl White",
    owners: 2,
    description: "Legendary SUV with 4WD, perfect for highways and off-road.",
    features: ["4WD", "Crawl Control", "JBL Audio", "Cooled Seats", "Power Tailgate"],
  },
  {
    id: "8",
    name: "Kia Seltos HTX+",
    brand: "Kia",
    model: "Seltos",
    year: 2022,
    price: 1100000,
    kmDriven: 18000,
    fuelType: "Petrol",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
    color: "Grey",
    owners: 1,
    description: "Feature-loaded compact SUV with turbo engine.",
    features: ["Turbo Engine", "Bose Audio", "Ventilated Seats", "UVO Connect"],
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Rajesh Deshmukh",
    rating: 5,
    text: "Apli Gadi ne mala ek excellent condition madhli car dilya. Transparent pricing aani complete RC transfer support milala. Highly recommended!",
    car: "Hyundai Creta",
  },
  {
    id: "2",
    name: "Priya Wankhede",
    rating: 5,
    text: "Very professional and trustworthy. I sold my old car and bought a new one through Apli Gadi. The exchange process was seamless!",
    car: "Maruti Swift",
  },
  {
    id: "3",
    name: "Amit Patil",
    rating: 4,
    text: "Nagpur madhla best used car dealer. All documents clear, no hidden charges. Got my dream SUV at a great price!",
    car: "Mahindra XUV700",
  },
  {
    id: "4",
    name: "Sneha Joshi",
    rating: 5,
    text: "First-time car buyer and Apli Gadi made it so easy. They guided me through everything from selection to registration.",
    car: "Maruti Baleno",
  },
];

export const brands = [...new Set(cars.map(c => c.brand))];
export const fuelTypes = ["Petrol", "Diesel", "CNG", "Electric"] as const;
export const transmissions = ["Manual", "Automatic"] as const;
