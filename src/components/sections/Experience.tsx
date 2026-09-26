import { ArrowUpRight } from "lucide-react";
import { restaurant } from "@/config/restaurant";

const experiences = [
  {
    number: "01",
    title: "Private Dining",
    description:
      "Intimate spaces designed for celebrations, private dinners, and unforgettable evenings.",
  },
  {
    number: "02",
    title: "Live Atmosphere",
    description:
      "Thoughtfully curated music and an atmosphere that evolves with the evening.",
  },
  {
    number: "03",
    title: "Curated Events",
    description:
      `From chef-led experiences to special evenings, there is always something happening at ${restaurant.name}.`,
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="experience-header">
          <div>
            <p className="subtitle">The Experience</p>

            <h2 className="experience-title">
              More than dinner.
              <br />
              <span>A moment worth remembering.</span>
            </h2>
          </div>

          <p className="experience-intro">
            Every detail of {restaurant.name} is designed to make the
            ordinary feel exceptional — from the first course
            to the final conversation.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.number}
            >
              <div className="experience-card-top">
                <span>{experience.number}</span>

                <ArrowUpRight size={20} />
              </div>

              <div>
                <h3>{experience.title}</h3>

                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="experience-image">
          <img
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2200&q=85"
            alt={`Guests enjoying an evening at ${restaurant.name}`}
          />

          <div className="experience-image-overlay">
            <span>EST. 2018</span>
            <span>{restaurant.location.city.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
