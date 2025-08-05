export interface Sneaker {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  sizes: number[];
  category: string;
  featured: boolean;
}

export const sneakers: Sneaker[] = [
  {
    id: 1,
    name: "Air Max Revolution",
    brand: "Nike",
    price: 149.99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"
    ],
    description: "Experience the perfect blend of style and comfort with these revolutionary sneakers. Featuring advanced cushioning technology and a sleek design that turns heads wherever you go.",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    category: "lifestyle",
    featured: true
  },
  {
    id: 2,
    name: "Street Runner Pro",
    brand: "Adidas",
    price: 129.99,
    image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg",
    images: [
      "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg",
      "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg"
    ],
    description: "Built for the urban explorer, these sneakers combine street-ready style with athletic performance. Premium materials and cutting-edge design make every step count.",
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5],
    category: "running",
    featured: true
  },
  {
    id: 3,
    name: "Classic Court",
    brand: "Converse",
    price: 79.99,
    image: "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg",
    images: [
      "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg",
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
    ],
    description: "Timeless design meets modern comfort in these iconic court shoes. A wardrobe essential that pairs perfectly with any outfit, from casual to semi-formal.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    category: "casual",
    featured: false
  },
  {
    id: 4,
    name: "Urban Explorer",
    brand: "Vans",
    price: 89.99,
    image: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg",
    images: [
      "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg",
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg"
    ],
    description: "Adventure-ready sneakers designed for the modern explorer. Durable construction and versatile styling make these perfect for any journey.",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    category: "lifestyle",
    featured: true
  },
  {
    id: 5,
    name: "Speed Demon",
    brand: "Puma",
    price: 139.99,
    image: "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg",
    images: [
      "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg",
      "https://images.pexels.com/photos/2529158/pexels-photo-2529158.jpeg"
    ],
    description: "Engineered for speed and style, these performance sneakers deliver unmatched comfort and support. Perfect for athletes and style enthusiasts alike.",
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    category: "running",
    featured: false
  },
  {
    id: 6,
    name: "Retro Fusion",
    brand: "New Balance",
    price: 119.99,
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
    images: [
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg"
    ],
    description: "Where retro meets modern in perfect harmony. These sneakers bring vintage vibes with contemporary comfort technology for the best of both worlds.",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5],
    category: "casual",
    featured: true
  }
];