export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "premium Cotton T-Shirt",
    price: 89,
    image: "",
    category: "basics",
    isNew: true
  },
  {
    id: 2,
    name: "good quality wool blazer",
    price: 299,
    image: "",
    category: "basics",
    isNew: true
  },
  {
    id: 3,
    name: "regular fit jeans",
    price: 129,
    image: "",
    category: "pants",
    isNew: true
  },
  {
    id: 4,
    name: "black leather jacket",
    price: 499,
    image: "",
    category: "outerwear",
    isNew: true
  },
  {
    id: 5,
    name: "pladed flannel shirt",
    price: 79,
    image: "",
    category: "basics",
    isNew: true
  },
  {
    id: 6,
    name: "green baseball cap",
    price: 39,
    image: "",
    category: "headwear",
    isNew: true
  },
  {
    id: 7,
    name: "gray beanie",
    price: 29,
    image: "",
    category: "headwear",
    isNew: true
  },
  {
    id: 8,
    name: "polyester socks (3-pack)",
    price: 19,
    image: "",
    category: "basics",
    isNew: true
  }
];

