import type { Dish } from "@/types/menu";

export const menu: Dish[] = [
  // ─────────────────────────────────────
  // STARTERS
  // ─────────────────────────────────────

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
    id: "suya-chicken-skewers",
    name: "Suya Chicken Skewers",
    description:
      "Tender chicken skewers coated in aromatic suya spice and served with onions.",
    price: 9500,
    image:
      "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=1000&q=85",
    category: "Starters",
  },

  {
    id: "crispy-calamari",
    name: "Crispy Calamari",
    description:
      "Lightly seasoned calamari served with lemon aioli and fresh herbs.",
    price: 11000,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=85",
    category: "Starters",
  },

  {
    id: "beef-croquettes",
    name: "Smoked Beef Croquettes",
    description:
      "Crispy croquettes filled with slow-cooked smoked beef and served with pepper relish.",
    price: 10000,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
    category: "Starters",
  },

  // ─────────────────────────────────────
  // MAIN COURSE
  // ─────────────────────────────────────

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
    id: "coconut-curry-chicken",
    name: "Coconut Curry Chicken",
    description:
      "Tender chicken simmered in a fragrant coconut curry with herbs and roasted vegetables.",
    price: 17500,
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=85",
    category: "Main Course",
  },

  {
    id: "braised-beef",
    name: "Braised Beef Short Rib",
    description:
      "Slow-braised beef short rib served with creamy mash and rich pepper jus.",
    price: 26000,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
    category: "Main Course",
  },

  {
    id: "african-spiced-chicken",
    name: "African-Spiced Chicken",
    description:
      "Roasted chicken finished with aromatic African spices, herbs, and citrus.",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85",
    category: "Main Course",
  },

  {
    id: "seafood-jollof",
    name: "Seafood Jollof",
    description:
      "Signature jollof rice layered with prawns, calamari, peppers, and fresh herbs.",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
    category: "Main Course",
  },

  // ─────────────────────────────────────
  // GRILL
  // ─────────────────────────────────────

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
    id: "ribeye-steak",
    name: "Premium Ribeye",
    description:
      "Prime ribeye grilled to your preference and finished with herb butter.",
    price: 32000,
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85",
    category: "Grill",
  },

  {
    id: "grilled-chicken",
    name: "Charred Chicken Supreme",
    description:
      "Juicy chicken supreme grilled over open flame with smoked pepper glaze.",
    price: 19000,
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85",
    category: "Grill",
  },

  {
    id: "suya-lamb",
    name: "Suya Lamb Cutlets",
    description:
      "Flame-grilled lamb cutlets finished with suya spice and roasted garlic.",
    price: 27500,
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1000&q=85",
    category: "Grill",
  },

  // ─────────────────────────────────────
  // SEAFOOD
  // ─────────────────────────────────────

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
    id: "butter-garlic-prawns",
    name: "Butter Garlic Prawns",
    description:
      "Succulent prawns sautéed in garlic butter with lemon and fresh herbs.",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=85",
    category: "Seafood",
  },

  {
    id: "cajun-salmon",
    name: "Cajun Salmon",
    description:
      "Pan-seared salmon with Cajun spices, citrus butter, and seasonal greens.",
    price: 24000,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=85",
    category: "Seafood",
  },

  {
    id: "grilled-tiger-prawns",
    name: "Grilled Tiger Prawns",
    description:
      "Large tiger prawns grilled with garlic, chili, lemon, and fresh herbs.",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=85",
    category: "Seafood",
  },

  // ─────────────────────────────────────
  // DESSERTS
  // ─────────────────────────────────────

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
    id: "chocolate-fondant",
    name: "Chocolate Fondant",
    description:
      "Warm chocolate fondant with a molten center and vanilla ice cream.",
    price: 9500,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85",
    category: "Desserts",
  },

  {
    id: "biscoff-cheesecake",
    name: "Biscoff Cheesecake",
    description:
      "Creamy baked cheesecake with caramelized biscuit crumble.",
    price: 9000,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85",
    category: "Desserts",
  },

  {
    id: "creme-brulee",
    name: "Vanilla Crème Brûlée",
    description:
      "Classic vanilla custard finished with a delicate caramelized crust.",
    price: 8500,
    image:
      "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&w=1000&q=85",
    category: "Desserts",
  },

  // ─────────────────────────────────────
  // DRINKS
  // ─────────────────────────────────────

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

  {
    id: "passion-martini",
    name: "Passion Fruit Martini",
    description:
      "Passion fruit, citrus, and vanilla combined into a vibrant signature cocktail.",
    price: 8500,
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1000&q=85",
    category: "Drinks",
  },

  {
    id: "pineapple-ginger",
    name: "Pineapple Ginger Cooler",
    description:
      "Fresh pineapple blended with ginger, lime, and sparkling water.",
    price: 5500,
    image:
      "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=1000&q=85",
    category: "Drinks",
  },

  {
    id: "hibiscus-spritz",
    name: "Hibiscus Spritz",
    description:
      "A refreshing hibiscus and citrus spritz with aromatic botanicals.",
    price: 7000,
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85",
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

  {
    id: "suya-steak",
    name: "Suya Steak",
    description:
      "Char-grilled premium beef finished with our signature suya spice blend.",
    price: 24000,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
    category: "Grill",
  },

  {
    id: "coconut-prawns",
    name: "Coconut Prawns",
    description:
      "Crispy prawns served with coconut cream, herbs, and pepper relish.",
    price: 21000,
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1200&q=85",
    category: "Seafood",
  },

  {
    id: "dark-chocolate-tart",
    name: "Dark Chocolate Tart",
    description:
      "Rich dark chocolate tart served with vanilla cream.",
    price: 9000,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    category: "Desserts",
  },
];


// import type { Dish } from "@/types/menu";

// export const menu: Dish[] = [
//   {
//     id: "crispy-plantain",
//     name: "Crispy Plantain",
//     description:
//       "Golden plantain served with smoked pepper sauce and roasted peanuts.",
//     price: 7500,
//     image:
//       "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",
//     category: "Starters",
//   },

//   {
//     id: "pepper-prawns",
//     name: "Pepper Prawns",
//     description:
//       "Grilled prawns tossed in a vibrant house pepper sauce.",
//     price: 12000,
//     image:
//       "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=85",
//     category: "Starters",
//   },

//   {
//     id: "jollof-royale",
//     name: "Jollof Royale",
//     description:
//       "Smoky party-style jollof served with grilled prawns and seasonal vegetables.",
//     price: 18500,
//     image:
//       "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=85",
//     category: "Main Course",
//   },

//   {
//     id: "coconut-rice",
//     name: "Coconut Rice",
//     description:
//       "Fragrant coconut rice served with grilled vegetables and herb sauce.",
//     price: 16000,
//     image:
//       "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
//     category: "Main Course",
//   },

//   {
//     id: "suya-steak",
//     name: "Suya Steak",
//     description:
//       "Char-grilled premium beef finished with our signature suya spice blend.",
//     price: 24000,
//     image:
//       "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
//     category: "Grill",
//   },

//   {
//     id: "lamb-chops",
//     name: "Spiced Lamb Chops",
//     description:
//       "Tender lamb chops seasoned with African spices and flame grilled.",
//     price: 28000,
//     image:
//       "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
//     category: "Grill",
//   },

//   {
//     id: "coconut-prawns",
//     name: "Coconut Prawns",
//     description:
//       "Crispy prawns served with coconut cream, herbs, and pepper relish.",
//     price: 21000,
//     image:
//       "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=85",
//     category: "Seafood",
//   },

//   {
//     id: "grilled-fish",
//     name: "Grilled Sea Bass",
//     description:
//       "Whole sea bass grilled with citrus, herbs, and roasted vegetables.",
//     price: 26000,
//     image:
//       "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85",
//     category: "Seafood",
//   },

//   {
//     id: "chocolate-tart",
//     name: "Dark Chocolate Tart",
//     description:
//       "Rich dark chocolate tart served with vanilla cream.",
//     price: 9000,
//     image:
//       "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
//     category: "Desserts",
//   },

//   {
//     id: "mango-panna-cotta",
//     name: "Mango Panna Cotta",
//     description:
//       "Silky vanilla panna cotta finished with fresh mango.",
//     price: 8500,
//     image:
//       "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85",
//     category: "Desserts",
//   },

//   {
//     id: "hibiscus-cooler",
//     name: "Hibiscus Cooler",
//     description:
//       "Chilled hibiscus infusion with citrus and fresh ginger.",
//     price: 5000,
//     image:
//       "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1000&q=85",
//     category: "Drinks",
//   },

//   {
//     id: "ginger-mule",
//     name: "Ginger Mule",
//     description:
//       "Fresh ginger, lime, mint, and sparkling water.",
//     price: 5500,
//     image:
//       "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85",
//     category: "Drinks",
//   },
// ];

// export const menuCategories = [
//   "Starters",
//   "Main Course",
//   "Grill",
//   "Seafood",
//   "Desserts",
//   "Drinks",
// ] as const;

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
//       "Crispy prawns served with coconut cream, herbs, and pepper relish.",
//     price: 21000,
//     image:
//       "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1200&q=85",
//     category: "Seafood",
//   },

//   {
//     id: "dark-chocolate-tart",
//     name: "Dark Chocolate Tart",
//     description:
//       "Rich dark chocolate tart served with vanilla cream.",
//     price: 9000,
//     image:
//       "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
//     category: "Desserts",
//   },
// ];