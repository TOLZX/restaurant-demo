import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";

const openingHours = [
  {
    days: "Monday — Thursday",
    hours: "12:00 — 22:00",
  },
  {
    days: "Friday — Saturday",
    hours: "12:00 — 23:30",
  },
  {
    days: "Sunday",
    hours: "13:00 — 21:00",
  },
];

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-heading">
          <p className="subtitle">Find Us</p>

          <h2 className="section-title">
            Come as you are.
            <br />
            <span>Stay for the experience.</span>
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
                  14 Victoria Island
                  <br />
                  Lagos, Nigeria
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

                <a href="tel:+2348000000000">
                  +234 800 000 0000
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

                <div className="opening-hours">
                  {openingHours.map((item) => (
                    <div key={item.days}>
                      <span>{item.days}</span>
                      <strong>{item.hours}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-placeholder">
              <MapPin size={30} />

              <span>LAGOS, NIGERIA</span>

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