import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { signatureDishes } from "@/data/menu";
import FoodCard from "@/components/menu/FoodCard";

export default function SignatureDishes() {
  return (
    <section className="signature section" id="signature">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="subtitle">From our kitchen</p>

            <h2 className="section-title">
              Signature dishes
            </h2>
          </div>

          <p className="section-description">
            A selection of dishes that define the {restaurant.name}
            dining experience.
          </p>
        </div>

        <div className="signature-grid">
          {signatureDishes.map((dish, index) => (
            <div
              key={dish.id}
              className={`signature-card signature-card-${index + 1}`}
            >
              <FoodCard dish={dish} />
            </div>
          ))}
        </div>

        <div className="signature-footer">
          <Link
            href="/menu"
            className="signature-menu-link"
          >
            Explore full menu
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
