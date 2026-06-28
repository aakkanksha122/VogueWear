import blazer from "../assets/blazer.jpg";
import dress from "../assets/dress.jpg";
import dress1 from "../assets/dress-1.jpg";
import dress2 from "../assets/dress-2.jpg";
import jeans from "../assets/jeans.jpg";
import trousers from "../assets/trousers.jpg";
import trousers1 from "../assets/trousers-2.jpg";
import bag from "../assets/leather-bag.jpg";
import sneakers from "../assets/sneakers.jpg";
import top from "../assets/top-1.jpg";
import top2 from "../assets/top-2.jpg";
import bag1 from "../assets/bag-1.jpg";


export const products = [
  {
    id: 1,
    name: "Oversized Blazer",
    price: 1299.00,
    image: blazer,
    description: "A sophisticated oversized blazer perfect for layering.",
    category: "Outerwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    isTrending: false,
    isSale: false,
    requiresSize: true,
    tags: ["office", "formal", "workwear", "minimal"]
  },
  {
    id: 2,
    name: "Regular Fit Jeans",
    price: 799.00,
    image: jeans,
    description: "Classic regular-fit jeans with a comfortable fit and durable fabric.",
    category: "Bottoms",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: false,
    isTrending: false,
    isSale: true,
    requiresSize: true,
    tags: ["brunch", "casual", "vacation", "everyday"]
  },
  {
    id: 3,
    name: "A-Line Midi Dress",
    price: 999.00,
    image: dress,
    description: "A versatile A-line midi dress that transitions from day to night.",
    category: "Dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    isTrending: false,
    isSale: false,
    requiresSize: true,
    tags: ["wedding", "vacation", "elegant", "feminine"]
  },
  {
    id: 4,
    name: "Chunky Sneakers",
    price: 1299.00,
    image: sneakers,
    description: "Stylish chunky sneakers that add a bold statement to any outfit.",
    sizes: ["6", "7", "8", "9", "10"],
    category: "Footwear",
    isNew: false,
    isTrending: true,
    isSale: false,
    requiresSize: true,
    tags: ["brunch", "vacation", "casual", "trendy"]
  },
  {
    id: 5,
    name: "Leather Shoulder Bag",
    price: 2499.00,
    image: bag,
    description: "A stylish leather shoulder bag perfect for everyday use.",
    sizes: [],
    category: "Accessories",
    isNew: true,
    isTrending: false,
    isSale: false,
    requiresSize: false,
    tags: ["office", "brunch", "wedding", "luxury"]
  },
  {
    id: 6,
    name: "Boat Neck Top",
    price: 699.00,
    image: top,
    description: "Women Oversized Top Boat Neck Stripe Knotted Short Sleeve Blouse",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Tops",
    isNew: true,
    isTrending: false,
    isSale: false,
    requiresSize: true,
    tags: ["brunch", "vacation", "casual", "chic"]
  },
  {
    id: 7,
    name: "Classic Blue Shirt",
    price: 899.00,
    image: top2,
    description: "A classic blue striped shirt perfect for work.",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Tops",
    isNew: false,
    isTrending: true,
    isSale: false,
    requiresSize: true,
    tags: ["office", "formal", "workwear", "minimal"]
  },
  {
    id: 8,
    name: "Polka Dot Dress",
    price: 1099.00,
    image: dress2,
    description: "A charming polka dot black dress perfect for a playful look.",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Dresses",
    isNew: false,
    isTrending: false,
    isSale: true,
    requiresSize: true,
    tags: ["brunch", "vacation", "playful", "feminine"]
  },
  {
    id: 9,
    name: "Black Dress",
    price: 1199.00,
    image: dress1,
    description: "A sleek black dress perfect for a sophisticated look.",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Dresses",
    isNew: false,
    isTrending: true,
    isSale: false,
    requiresSize: true,
    tags: ["wedding", "party", "elegant", "luxury"]
  },
  {
    id: 10,
    name: "High-Waisted Trousers",
    price: 899.00,
    image: trousers,
    description: "Elegant high-waisted trousers that offer a flattering fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Bottoms",
    isNew: false,
    isTrending: false,
    isSale: true,
    requiresSize: true,
    tags: ["office", "formal", "minimal", "workwear"]
  },
  {
    id: 11,
    name: "Wide-Leg Trousers",
    price: 999.00,
    image: trousers1,
    description: "Trendy wide-leg trousers that provide a comfortable and stylish look.",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Bottoms",
    isNew: false,
    isTrending: true,
    isSale: false,
    requiresSize: true,
    tags: ["brunch", "vacation", "trendy", "chic"]
  },
  {
    id: 12,
    name: "Classic Black Handbag",
    price: 2999.00,
    image: bag1,
    description: "A timeless black handbag that complements any outfit.",
    sizes: [],
    category: "Accessories",
    isNew: false,
    isTrending: false,
    isSale: true,
    requiresSize: false,
    tags: ["wedding", "office", "luxury", "formal"]
  }

];