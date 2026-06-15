export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  name: string;
  type: "t-shirt" | "half-zip";
  tagline: string;
  description: string;
  colors: ProductColor[];
  sizes: string[];
  imagePlaceholderBg: string;
  badge?: "New" | "Limited Drop" | "Partnership" | "Selling Fast";
  isLowStock?: boolean;
};

export const SIZES = ["XS", "S", "M", "L", "XL", "2XL"] as const;

export const products: Product[] = [
  {
    id: "doktor-ng-bayan",
    name: "Doktor ng Bayan",
    type: "t-shirt",
    tagline: "For those who serve.",
    description:
      "A tee for future doctors who carry the weight of a nation's health. Graphic print front and back.",
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy", hex: "#435487" },
    ],
    sizes: [...SIZES],
    imagePlaceholderBg: "#435487",
    badge: "Limited Drop",
    isLowStock: true,
  },
  {
    id: "medicina-core",
    name: "Medicina Core",
    type: "t-shirt",
    tagline: "Wear Your Calling.",
    description:
      "Bold brain graphic on the back. Minimal front chest print. Available in navy and cream — two colorways for one identity.",
    colors: [
      { name: "Navy", hex: "#435487" },
      { name: "Cream", hex: "#FAF3E0" },
    ],
    sizes: [...SIZES],
    imagePlaceholderBg: "#2e3a5c",
    badge: "Selling Fast",
  },
  {
    id: "md-mph-halfzip",
    name: "MD-MPH Half-Zip",
    type: "half-zip",
    tagline: "SOM x MEDness Co.",
    description:
      "Limited partnership piece. Embroidered MD-MPH crest on the chest, 'SOM' on left sleeve, 'MD-MPH' on the back. 6 colorways.",
    colors: [
      { name: "Navy", hex: "#1e2f4d" },
      { name: "Maroon", hex: "#6b1f2a" },
      { name: "Forest Green", hex: "#1a3d2b" },
      { name: "Grey", hex: "#9ca3af" },
      { name: "Tan", hex: "#c4a882" },
      { name: "Gold", hex: "#d4a017" },
    ],
    sizes: [...SIZES],
    imagePlaceholderBg: "#1e2f4d",
    badge: "Partnership",
  },
];
