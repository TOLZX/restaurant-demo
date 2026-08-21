"use client";

import { useMemo, useState } from "react";

import { menu, menuCategories } from "@/data/menu";
import type { MenuCategory } from "@/types/menu";

export default function FullMenu() {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>("Starters");

  const filteredDishes = useMemo(() => {
    return menu.filter(
      (dish) => dish.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="full-menu section" id="full-menu">
      <div className="container">
        <div className="menu-heading">
          <p className="subtitle">The Menu</p>

          <h2 className="section-title">
            Crafted with intention.
          </h2>
        </div>

        <div className="menu-tabs">
          {menuCategories.map((category) => (
            <button
              key={category}
              className={`menu-tab ${
                activeCategory === category
                  ? "menu-tab-active"
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-list">
          {filteredDishes.map((dish) => (
            <article className="menu-item" key={dish.id}>
              <div className="menu-item-image">
                <img
                  src={dish.image}
                  alt={dish.name}
                />
              </div>

              <div className="menu-item-info">
                <div className="menu-item-title">
                  <h3>{dish.name}</h3>

                  <span>
                    ₦{dish.price.toLocaleString()}
                  </span>
                </div>

                <p>{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}