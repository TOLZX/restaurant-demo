import type { Dish } from "@/types/menu";

export const menu: Dish[] = [
  {
    id: "crispy-plantain",
    name: "Crispy Plantain",
    description:
      "Golden plantain served with smoked pepper sauce and roasted peanuts.",
    price: 7500,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",
    category: "Starters",
  },

  {
    id: "pepper-prawns",
    name: "Pepper Prawns",
    description:
      "Grilled prawns tossed in a vibrant house pepper sauce.",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=85",
    category: "Starters",
  },

  {
    id: "jollof-royale",
    name: "Jollof Royale",
    description:
      "Smoky party-style jollof served with grilled prawns and seasonal vegetables.",
    price: 18500,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=85",
    category: "Main Course",
  },

  {
    id: "coconut-rice",
    name: "Coconut Rice",
    description:
      "Fragrant coconut rice served with grilled vegetables and herb sauce.",
    price: 16000,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
    category: "Main Course",
  },

  {
    id: "suya-steak",
    name: "Suya Steak",
    description:
      "Char-grilled premium beef finished with our signature suya spice blend.",
    price: 24000,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
    category: "Grill",
  },

  {
    id: "lamb-chops",
    name: "Spiced Lamb Chops",
    description:
      "Tender lamb chops seasoned with African spices and flame grilled.",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
    category: "Grill",
  },

  {
    id: "coconut-prawns",
    name: "Coconut Prawns",
    description:
      "Crispy prawns served with coconut cream, herbs, and pepper relish.",
    price: 21000,
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=85",
    category: "Seafood",
  },

  {
    id: "grilled-fish",
    name: "Grilled Sea Bass",
    description:
      "Whole sea bass grilled with citrus, herbs, and roasted vegetables.",
    price: 26000,
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85",
    category: "Seafood",
  },

  {
    id: "chocolate-tart",
    name: "Dark Chocolate Tart",
    description:
      "Rich dark chocolate tart served with vanilla cream.",
    price: 9000,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
    category: "Desserts",
  },

  {
    id: "mango-panna-cotta",
    name: "Mango Panna Cotta",
    description:
      "Silky vanilla panna cotta finished with fresh mango.",
    price: 8500,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85",
    category: "Desserts",
  },

  {
    id: "hibiscus-cooler",
    name: "Hibiscus Cooler",
    description:
      "Chilled hibiscus infusion with citrus and fresh ginger.",
    price: 5000,
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1000&q=85",
    category: "Drinks",
  },

  {
    id: "ginger-mule",
    name: "Ginger Mule",
    description:
      "Fresh ginger, lime, mint, and sparkling water.",
    price: 5500,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85",
    category: "Drinks",
  },
];

export const menuCategories = [
  "Starters",
  "Main Course",
  "Grill",
  "Seafood",
  "Desserts",
  "Drinks",
] as const;


export const signatureDishes: Dish[] = [
  {
    id: "jollof-royale",
    name: "Jollof Royale",
    description:
      "Smoky party-style jollof served with grilled prawns and seasonal vegetables.",
    price: 18500,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=85",
    category: "Main Course",
  },
];
  
// import type { Dish } from "@/types/menu";

// export const signatureDishes: Dish[] = [
//   {
//     id: "jollof-royale",
//     name: "Jollof Royale",
//     description:
//       "Smoky party-style jollof served with grilled prawns and seasonal vegetables.",
//     price: 18500,
//     image:
//       "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=85",
//     category: "Main Course",
//   },

//   {
//     id: "suya-steak",
//     name: "Suya Steak",
//     description:
//       "Char-grilled premium beef finished with our signature suya spice blend.",
//     price: 24000,
//     image:
//       "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
//     category: "Grill",
//   },

//   {
//     id: "coconut-prawns",
//     name: "Coconut Prawns",
//     description:
//       "Crispy prawns served with coconut cream, herbs, and a vibrant pepper relish.",
//     price: 21000,
//     image:
//       "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1200&q=85",
//     category: "Seafood",
//   },
// ];