export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  price: number;
  image: string;
  description: string;
  benefits: string[];
  materials: string;
  fit: string;
  care: string;
  colors: string[];
  sizes: string[];
  badge?: string;
}

export const products: Product[] = [
  {
    id: "aegis-pro",
    name: "Aegis Pro",
    category: "Competition",
    tagline: "Engineered for match day",
    price: 128,
    image: "/images/product-1.jpg",
    description: "The Aegis Pro is our flagship competition suit, built to withstand the intensity of elite water polo. A second-skin fit reduces drag while reinforced seams hold up through the toughest matches. Designed for athletes who demand both durability and a silhouette that feels entirely their own.",
    benefits: ["Competition-grade chlorine resistance", "Reinforced stress-point stitching", "Low-drag hydrodynamic cut", "UPF 50+ sun protection"],
    materials: "78% recycled polyester, 22% elastane. Italian-milled fabric with advanced chlorine-resistance treatment.",
    fit: "Athletic compression fit. True to size — we recommend your standard size for optimal performance.",
    care: "Rinse in cold water after each use. Lay flat to dry. Avoid wringing or machine drying.",
    colors: ["Navy / Coral", "Black", "Deep Ocean"],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Best Seller",
  },
  {
    id: "titan-training",
    name: "Titan Training",
    category: "Training",
    tagline: "Built for every session",
    price: 98,
    image: "/images/product-2.jpg",
    description: "Your daily workhorse. The Titan Training suit is made for the athlete who logs serious pool hours. Exceptional shape retention and fade resistance mean it looks as sharp on day one hundred as day one. Comfort-first construction keeps you focused on performance, not your suit.",
    benefits: ["Extended lifespan construction", "4-way stretch freedom", "Quick-dry technology", "Anti-fade colour lock"],
    materials: "72% recycled nylon, 28% elastane. Durable, sustainable, and impossibly soft.",
    fit: "Relaxed athletic fit with flexible coverage. Size up for a less compressive feel.",
    care: "Machine washable on cold gentle cycle. Do not tumble dry. Avoid prolonged sun exposure when drying.",
    colors: ["Black", "Charcoal / Aqua", "Slate"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "wave-signature",
    name: "Wave Signature",
    category: "Signature Collection",
    tagline: "Where identity meets performance",
    price: 148,
    image: "/images/product-3.jpg",
    description: "The Wave Signature is a statement. Our most design-forward suit brings STELLA's ethos to life — strength and femininity are not opposites. A sculptural neckline and tonal wave detail set it apart, while the performance core keeps it match-ready.",
    benefits: ["Sculptural design details", "Competition-grade performance base", "Limited seasonal colourways", "Premium hand-finished trim"],
    materials: "80% recycled polyester, 20% elastane. Premium Italian fabric with signature STELLA finish.",
    fit: "Structured athletic fit. Sculpted silhouette — true to size.",
    care: "Hand wash recommended. Lay flat to dry away from direct sunlight.",
    colors: ["Deep Blue / Lavender", "Ivory / Coral"],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "New",
  },
  {
    id: "essential-core",
    name: "Essential Core",
    category: "Essentials",
    tagline: "The foundation of every kit",
    price: 78,
    image: "/images/product-4.jpg",
    description: "Clean, reliable, and refined. The Essential Core is a pared-back training suit for athletes who value simplicity. No unnecessary details — just a beautifully cut, durable suit that moves with you and holds its shape.",
    benefits: ["Minimalist clean design", "Durable everyday construction", "Comfortable coverage", "Easy-care fabric"],
    materials: "70% recycled polyester, 30% elastane. Soft-touch finish with chlorine-resistant treatment.",
    fit: "Classic athletic fit. Slightly more coverage than competition cuts.",
    care: "Rinse after use. Machine washable on cold. Reshape while damp.",
    colors: ["White", "Black", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

export const categories = ["All", "Competition", "Training", "Signature Collection", "Essentials"];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const getRelatedProducts = (id: string) => products.filter((p) => p.id !== id).slice(0, 3);
