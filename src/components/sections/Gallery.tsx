import { ArrowUpRight } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import { restaurant } from "@/config/restaurant";
import { content } from "@/data/content";

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <div>
            <p className="subtitle">{content.gallery.eyebrow}</p>

<h2 className="section-title">
  {content.gallery.title}
  <br />
  <span>{content.gallery.highlightedTitle}</span>
</h2>

<p className="gallery-intro">
  {content.gallery.description}
</p>
        </div>
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