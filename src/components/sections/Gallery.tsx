import { ArrowUpRight } from "lucide-react";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <div>
            <p className="subtitle">Inside LAVÉRA</p>

            <h2 className="section-title">
              Moments worth
              <br />
              <span>remembering.</span>
            </h2>
          </div>

          <p className="gallery-intro">
            A glimpse into the spaces, people, and moments
            that make the LAVÉRA experience unique.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <figure
              key={image.id}
              className={`gallery-item gallery-item-${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt}
              />

              <figcaption className="gallery-caption">
                <span>{image.label}</span>

                <ArrowUpRight size={18} />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}