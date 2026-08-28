import React, { useEffect, useState } from "react";

import pakagusarsyad from "./pakagusarsyad.png";
import pakbahar from "./pakbahar.png";
import pakhmukard from "./pakhmukard.png";
import pakf from "./pakf.png";

const management = [
  {
    name: "H. Mukard\n(H. Hendri)",
    position: "CEO",
    photo: pakhmukard,
  },
  {
    name: "Faiz Wardhin Bempah, SH",
    position: "Direktur",
    photo: pakf,
  },
  {
    name: "Agus Arsyad",
    position: "Direktur Marketing",
    photo: pakagusarsyad,
  },
    {
    name: "Baharuddin, SHI",
    position: "Branch Manager Palu",
    photo: pakbahar,
  },
];

function ManagementSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % management.length
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrent(
      (prev) => (prev + 1) % management.length
    );
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + management.length) %
        management.length
    );
  };

  return (
    <section
      className="management section"
      id="management"
    >
      <div className="container">

        <h3
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          DIREKSI & MANAGEMENT <br /> PT. AULIA DUTA HARAMIN TOUR
        </h3>

        <div className="management-slider">

          <button
            className="management-arrow management-prev"
            onClick={prevSlide}
            aria-label="Previous"
          >
            ←
          </button>

          <div className="management-card">

            <div className="management-photo">
              <img
                src={management[current].photo}
                alt={management[current].name}
              />
            </div>

            <div className="management-info">

              <span className="management-position">
                {management[current].position}
              </span>

              <h3>
                {management[current].name}
              </h3>

            </div>

          </div>

          <button
            className="management-arrow management-next"
            onClick={nextSlide}
            aria-label="Next"
          >
            →
          </button>

        </div>

        <div className="management-controls">

          <div className="management-dots">

            {management.map((_, index) => (
              <button
                key={index}
                className={`management-dot ${
                  current === index
                    ? "active"
                    : ""
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}

          </div>

          <button
            className="management-play"
            onClick={() =>
              setIsPaused((prev) => !prev)
            }
          >
            {isPaused
              ? "▶ Play"
              : "❚❚ Pause"}
          </button>

        </div>

      </div>
    </section>
  );
}

export default ManagementSection;
