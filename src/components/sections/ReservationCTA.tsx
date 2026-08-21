import { ArrowUpRight } from "lucide-react";

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
        <p className="subtitle">Reservations</p>

        <h2>
          Your table
          <br />
          <span>awaits.</span>
        </h2>

        <p className="reservation-cta-description">
          Make your next evening memorable. Reserve your table
          and experience LAVÉRA for yourself.
        </p>

        <a
          href="#contact"
          className="reservation-button"
        >
          Reserve a Table
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}