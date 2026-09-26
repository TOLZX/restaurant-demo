import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { menu, menuCategories } from "@/data/menu";
import FoodCard from "@/components/menu/FoodCard";

export default function MenuPage() {
  return (
    <main className="menu-page">
      <section className="menu-page-hero">
        <div className="menu-page-hero-background">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=85"
            alt=""
          />
        </div>

        <div className="menu-page-hero-overlay" />

        <div className="container menu-page-hero-content">
          <Link href="/" className="menu-back">
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="menu-page-heading">
            The {restaurant.name} menu
            <h1>
              Crafted with
              <br />
              <span>intention.</span>
            </h1>

            <p>
              Explore a collection of contemporary African
              dishes, carefully prepared with bold flavors,
              seasonal ingredients, and a modern touch.
            </p>
          </div>
        </div>
      </section>

      <section className="menu-list section">
        <div className="container">
          {menuCategories.map((category) => {
            const categoryDishes = menu.filter(
              (dish) => dish.category === category
            );

            return (
              <div
                key={category}
                className="menu-category"
              >
                <div className="menu-category-heading">
                  <span>{category}</span>
                  <div />
                </div>

                <div className="food-grid">
                  {categoryDishes.map((dish) => (
                    <FoodCard
                      key={dish.id}
                      dish={dish}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
