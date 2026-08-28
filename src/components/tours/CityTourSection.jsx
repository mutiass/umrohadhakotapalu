import React, { useEffect, useState } from "react";

import jabalmagnet from "./jabalmagnet.jpeg";
import kuburanbaqi from "./kuburanbaqi.jpeg";
import masjidabubakar from "./masjidabubakar.jpeg";
import masjidalibinabithalib from "./masjidalibinabithalib.jpeg";
import masjidjumat from "./masjidjumat.jpeg";
import masjidqiblatain from "./masjidqiblatain.jpeg";
import masjidquba from "./masjidquba.jpeg";
import percetakanQuran from "./percetakanQuran.jpeg";
import peternakanunta from "./peternakanunta.jpeg";

function CityTourSection() {
  const [showAll, setShowAll] = useState(false);

  // ================================
  // RESPONSIVE STATE
  // ================================

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 600
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ================================
  // TOUR DATA
  // ================================

  const tours = [
    {
      city: "Mekkah",
      name: "Peternakan Unta",
      image: peternakanunta,
    },
    {
      city: "Mekkah",
      name: "Jabal Magnet",
      image: jabalmagnet,
    },
    {
      city: "Madinah",
      name: "Makam Baqi",
      image: kuburanbaqi,
    },
    {
      city: "Madinah",
      name: "Masjid Abu Bakar",
      image: masjidabubakar,
    },
    {
      city: "Madinah",
      name: "Masjid Ali bin Abi Thalib",
      image: masjidalibinabithalib,
    },
    {
      city: "Madinah",
      name: "Masjid Jumat",
      image: masjidjumat,
    },
    {
      city: "Madinah",
      name: "Masjid Qiblatain",
      image: masjidqiblatain,
    },
    {
      city: "Madinah",
      name: "Masjid Quba",
      image: masjidquba,
    },
    {
      city: "Madinah",
      name: "Percetakan Al-Qur'an",
      image: percetakanQuran,
    },
  ];

  // ================================
  // MAXIMUM VISIBLE TOURS
  // ================================

  const maxVisibleTours = isMobile ? 4 : 6;

  const visibleTours = showAll
    ? tours
    : tours.slice(0, maxVisibleTours);

  const hasMore = tours.length > maxVisibleTours;

  return (
    <section
      className="section city"
      id="citytour"
    >

      <div className="container">

        {/* ================================
            EYEBROW
        ================================= */}

        <div className="eyebrow dark">
          City Tour Mekkah & Madinah
        </div>


        {/* ================================
            TOUR GRID
        ================================= */}

        <div className="tour-grid">

          {visibleTours.map((t) => (
            <div
              className="tour"
              key={t.city + t.name}
            >

              <img
                src={t.image}
                alt={t.name}
                loading="lazy"
              />

              <div className="tour-info">

                <small>{t.city}</small>

                <b>{t.name}</b>

              </div>

            </div>
          ))}

        </div>


        {/* ================================
            SEE ALL / CLOSE
        ================================= */}

        {hasMore && (
          <div className="tour-more">

            {!showAll ? (
              <button
                type="button"
                onClick={() => setShowAll(true)}
              >
                Lihat Semua ({tours.length} Destinasi)
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowAll(false)}
              >
                Tutup
              </button>
            )}

          </div>
        )}

      </div>

    </section>
  );
}

export default CityTourSection;