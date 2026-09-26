import Image from "next/image";
import { restaurant } from "@/config/restaurant";
import { content } from "@/data/content";

export default function OurStory() {
  return (
    <section className="story section" id="about">
      <div className="container story-grid">
        <div className="story-image">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
            alt={`Elegant ${restaurant.name} restaurant interior`}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          <div className="story-image-label">
            <span>01</span>
            <span>The beginning</span>
          </div>
        </div>

        <div className="story-content">
          <p className="subtitle">{content.story.eyebrow}</p>

<h2 className="section-title">
  {content.story.title}
  <br />
  <span>{content.story.highlightedTitle}</span>
</h2>

<p className="story-description">
  {content.story.description}
</p>

          <div className="story-stats">
            <div className="story-stat">
              <strong>08+</strong>
              <span>Years of craft</span>
            </div>

            <div className="story-stat">
              <strong>24</strong>
              <span>Signature dishes</span>
            </div>

            <div className="story-stat">
              <strong>4.9</strong>
              <span>Guest rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
