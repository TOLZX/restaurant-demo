"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex((current) =>
      current === 0
        ? testimonials.length - 1
        : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonial-layout">
          <div className="testimonial-label">
            <p className="subtitle">Guestbook</p>

            <span>What our guests say</span>
          </div>

          <div className="testimonial-main">
            <div className="testimonial-quote-mark">
              “
            </div>

            <blockquote>
              {activeTestimonial.quote}
            </blockquote>

            <div className="testimonial-author">
              <div>
                <strong>
                  {activeTestimonial.name}
                </strong>

                <span>
                  {activeTestimonial.location}
                </span>
              </div>

              <div
                className="testimonial-rating"
                aria-label={`${activeTestimonial.rating} out of 5 stars`}
              >
                {"★".repeat(activeTestimonial.rating)}
              </div>
            </div>

            <div className="testimonial-controls">
              <span>
                {String(activeIndex + 1).padStart(2, "0")}
                {" / "}
                {String(testimonials.length).padStart(2, "0")}
              </span>

              <div>
                <button
                  onClick={previous}
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}