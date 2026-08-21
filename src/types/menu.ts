export type MenuCategory =
  | "Starters"
  | "Main Course"
  | "Grill"
  | "Seafood"
  | "Desserts"
  | "Drinks";

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
};