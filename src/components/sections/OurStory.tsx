import Image from "next/image";

export default function OurStory() {
  return (
    <section className="story section" id="about">
      <div className="container story-grid">
        <div className="story-image">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
            alt="LAVÉRA restaurant interior"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <div className="story-content">
          <p className="subtitle">Our Story</p>

          <h2 className="story-title">
            Rooted in African heritage.
            <br />
            <span>Reimagined for today.</span>
          </h2>

          <p className="story-description">
            LAVÉRA was created around a simple idea — African
            cuisine deserves to be experienced with the same
            creativity, detail, and elegance found in the world's
            great dining rooms.
          </p>

          <p className="story-description">
            We bring familiar flavors into a contemporary setting,
            creating dishes that respect tradition while leaving
            room for imagination.
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