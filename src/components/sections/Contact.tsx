import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { it } from "node:test";
import { content } from "@/data/content";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-heading">
          <p className="subtitle">{content.contact.eyebrow}</p>

<h2 className="section-title">
  {content.contact.title}
  <br />
  <span>{content.contact.highlightedTitle}</span>
</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-details">
            <div className="contact-block">
              <div className="contact-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span className="contact-label">
                  Location
                </span>

                <p>
                  {restaurant.location.address}
                  <br />
                  {restaurant.location.city}
                </p>
              </div>
            </div>
              

            <div className="contact-block">
              <div className="contact-icon">
                <Phone size={18} />
              </div>

              <div>
                <span className="contact-label">
                  Reservations
                </span>

                <a href={`tel:${restaurant.contact.phone}`}>
                    {restaurant.contact.phone}
                </a>
              </div>
            </div>

            <div className="contact-block">
              <div className="contact-icon">
                <Clock3 size={18} />
              </div>

              <div>
                <span className="contact-label">
                  Opening Hours
                </span>

                {restaurant.hours.map((item) => (
                  <div key={item.days}>
                    <span>{item.days}</span>
                    <strong>{item.hours}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-placeholder">
              <MapPin size={30} />

              <span>{restaurant.location.city.toUpperCase()}</span>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}