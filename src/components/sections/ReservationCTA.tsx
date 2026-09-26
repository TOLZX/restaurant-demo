import { ArrowUpRight } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { content } from "@/data/content";

export default function ReservationCTA() {
  return (
    <section className="reservation-cta" id="reservation">
      <div className="reservation-cta-background">
        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=85"
          alt=""
        />
      </div>

      <div className="reservation-cta-overlay" />

      <div className="reservation-cta-content container">
        <p className="subtitle">{content.reservation.eyebrow}</p>

<h2>
  {content.reservation.title}
  <br />
  <span>{content.reservation.highlightedTitle}</span>
</h2>

<p className="reservation-cta-description">
  {content.reservation.description}
</p>

        <a
  href={`tel:${restaurant.reservation.phone}`}
  className="reservation-button"
>
  Reserve a Table
  <ArrowUpRight size={18} />
</a>
      </div>
    </section>
  );
}
