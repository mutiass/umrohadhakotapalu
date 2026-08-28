import React, { useState } from "react";
import { testimonials } from "../../data/testimonials";

function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const [name, text] = testimonials[current];

  return (
    <section className="section testimonials" id="testimoni">
      <div className="container">
        <div className="eyebrow dark">Testimoni Jamaah</div>

        <div className="testimonial-slider">
          <button
            className="testimonial-arrow testimonial-prev"
            onClick={prevTestimonial}
            aria-label="Testimoni sebelumnya"
          >
            &#10094;
          </button>

          <article className="testimonial-card">
            <div className="stars">★★★★★</div>

            <p>“{text}”</p>

            <b>{name}</b>
          </article>

          <button
            className="testimonial-arrow testimonial-next"
            onClick={nextTestimonial}
            aria-label="Testimoni berikutnya"
          >
            &#10095;
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map(([name], index) => (
            <button
              key={name}
              className={`testimonial-dot ${
                index === current ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Lihat testimoni ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;