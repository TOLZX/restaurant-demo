import { signatureDishes } from "@/data/menu";
import FoodCard from "@/components/menu/FoodCard";

export default function SignatureDishes() {
  return (
    <section className="signature section" id="menu">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="subtitle">From our kitchen</p>

            <h2 className="section-title">
              Signature dishes
            </h2>
          </div>

          <p className="section-description">
            A selection of dishes that define the LAVÉRA
            dining experience.
          </p>
        </div>

        <div className="food-grid">
          {signatureDishes.map((dish) => (
            <FoodCard
              key={dish.id}
              dish={dish}
            />
          ))}
        </div>
      </div>
    </section>
  );
}