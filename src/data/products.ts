export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalProduct?: string;
  originalBrand?: string;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  tags: string[];
  savings?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Velvet Matte Lip Cream",
    brand: "Fuzzy-Broccoli Picks",
    price: 8.99,
    originalProduct: "Soft Matte Lip Cream",
    originalBrand: "NYX",
    originalPrice: 24.00,
    category: "Lips",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 342,
    description: "A budget-friendly velvet matte lip cream that rivals high-end formulas. Long-lasting, non-drying, and available in 20 shades.",
    tags: ["matte", "long-lasting", "cruelty-free"],
    savings: 15.01,
  },
  {
    id: "2",
    name: "Glow Serum Foundation",
    brand: "e.l.f.",
    price: 6.00,
    originalProduct: "Luminous Silk Foundation",
    originalBrand: "Giorgio Armani",
    originalPrice: 65.00,
    category: "Face",
    image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 1289,
    description: "Lightweight, buildable coverage with a natural luminous finish. The internet's favorite foundation dupe.",
    tags: ["lightweight", "dewy", "buildable"],
    savings: 59.00,
  },
  {
    id: "3",
    name: "Lash Paradise Mascara",
    brand: "L'Oréal",
    price: 11.99,
    originalProduct: "Better Than Sex Mascara",
    originalBrand: "Too Faced",
    originalPrice: 29.00,
    category: "Eyes",
    image: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 2451,
    description: "Voluptuous volume and length. Soft waxy formula coats every lash for a full feathery look.",
    tags: ["volumizing", "lengthening", "waterproof"],
    savings: 17.01,
  },
  {
    id: "4",
    name: "Hydrating Facial Cleanser",
    brand: "CeraVe",
    price: 14.99,
    originalProduct: "Soy Face Cleanser",
    originalBrand: "Fresh",
    originalPrice: 44.00,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 5673,
    description: "Gentle, non-foaming cleanser with ceramides and hyaluronic acid. Perfect for all skin types.",
    tags: ["gentle", "hydrating", "fragrance-free"],
    savings: 29.01,
  },
  {
    id: "5",
    name: "Cloud Paint Blush Dupe",
    brand: "Flower Beauty",
    price: 9.49,
    originalProduct: "Cloud Paint",
    originalBrand: "Glossier",
    originalPrice: 20.00,
    category: "Face",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 876,
    description: "Seamless, buildable gel-cream blush that blends into skin for a natural flush of color.",
    tags: ["gel-cream", "buildable", "natural"],
    savings: 10.51,
  },
  {
    id: "6",
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    price: 5.90,
    originalProduct: "Pore Minimizing Serum",
    originalBrand: "Dr. Barbara Sturm",
    originalPrice: 145.00,
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 8932,
    description: "High-concentration niacinamide serum that targets blemishes, congestion, and uneven skin tone.",
    tags: ["serum", "blemish-control", "oil-control"],
    savings: 139.10,
  },
  {
    id: "7",
    name: "Setting Spray Matte Finish",
    brand: "NYX",
    price: 8.99,
    originalProduct: "All Nighter Setting Spray",
    originalBrand: "Urban Decay",
    originalPrice: 36.00,
    category: "Face",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 1567,
    description: "Lightweight setting spray that keeps makeup in place for up to 16 hours with a matte finish.",
    tags: ["matte", "long-lasting", "setting"],
    savings: 27.01,
  },
  {
    id: "8",
    name: "Brow Pencil Micro",
    brand: "NYX",
    price: 9.99,
    originalProduct: "Brow Wiz",
    originalBrand: "Anastasia Beverly Hills",
    originalPrice: 25.00,
    category: "Eyes",
    image: "https://images.unsplash.com/photo-1583241800698-e8ab01830e07?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 2134,
    description: "Ultra-thin retractable brow pencil for hair-like strokes. Includes spoolie brush.",
    tags: ["precision", "natural", "long-lasting"],
    savings: 15.01,
  },
];

export const categories = ["All", "Face", "Eyes", "Lips", "Skincare", "Hair", "Tools"];
