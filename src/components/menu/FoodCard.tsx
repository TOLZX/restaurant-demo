import type { Dish } from "@/types/menu";

type FoodCardProps = {
  dish: Dish;
};

export default function FoodCard({ dish }: FoodCardProps) {
  return (
    <article className="food-card">
      <div className="food-card-image">
        <img
          src={dish.image}
          alt={dish.name}
        />

        <span className="food-card-category">
          {dish.category}
        </span>
      </div>

      <div className="food-card-content">
        <div>
          <h3>{dish.name}</h3>

          <p>{dish.description}</p>
        </div>

        <span className="food-card-price">
          ₦{dish.price.toLocaleString()}
        </span>
      </div>
    </article>
  );
}