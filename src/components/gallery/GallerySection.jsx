import React, { useEffect, useState } from "react";

const cityTourImages = import.meta.glob(
  "./CityTour/*.png",
  {
    eager: true,
    import: "default",
  }
);

const manasikImages = import.meta.glob(
  "./Manasik/*.png",
  {
    eager: true,
    import: "default",
  }
);

const handlingJamaahImages = import.meta.glob(
  "./HandlingJamaah/*.png",
  {
    eager: true,
    import: "default",
  }
);

function sortImages(images) {
  return Object.entries(images).sort((a, b) => {
    const numberA = parseInt(
      a[0].match(/(\d+)\.png$/)?.[1] || 0
    );

    const numberB = parseInt(
      b[0].match(/(\d+)\.png$/)?.[1] || 0
    );

    return numberA - numberB;
  });
}

function GallerySection() {
  const cityTour = sortImages(cityTourImages);
  const manasik = sortImages(manasikImages);
  const handlingJamaah = sortImages(handlingJamaahImages);

  // ================================
  // SHOW ALL STATE
  // ================================

  const [showCityTour, setShowCityTour] = useState(false);
  const [showManasik, setShowManasik] = useState(false);
  const [showHandlingJamaah, setShowHandlingJamaah] = useState(false);

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
  // MAXIMUM VISIBLE IMAGES
  // ================================

  const maxVisibleImages = isMobile ? 4 : 6;

  // ================================
  // RENDER GALLERY
  // ================================

  const renderGallery = (
    images,
    title,
    altPrefix,
    showAll,
    setShowAll
  ) => {

    const visibleImages = showAll
      ? images
      : images.slice(0, maxVisibleImages);

    const hasMore = images.length > maxVisibleImages;

    return (
      <div className="gallery-category">

        {/* ================================
            CATEGORY TITLE
        ================================= */}

        <h3>{title}</h3>


        {/* ================================
            GALLERY GRID
        ================================= */}

        <div className="gallery-grid">

          {visibleImages.map(([path, image], index) => (
            <div
              className="gallery-item"
              key={path}
            >

              <img
                src={image}
                alt={`${altPrefix} ${index + 1}`}
                loading="lazy"
              />

            </div>
          ))}

        </div>


        {/* ================================
            SEE ALL / CLOSE BUTTON
        ================================= */}

        {hasMore && (
          <div className="gallery-more">

            {!showAll ? (
              <button
                type="button"
                onClick={() => setShowAll(true)}
              >
                Lihat Semua ({images.length} Foto)
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
    );
  };

  return (
    <section
      className="section gallery"
      id="gallery"
    >

      <div className="container">

        {/* ================================
            SECTION HEAD
        ================================= */}

        <div className="section-head">

          <div>

            <div className="eyebrow dark">
              Momen Jamaah
            </div>

            <h2>
              Dokumentasi Adha Tour & Travel
            </h2>

          </div>

          <p>
            Kumpulan dokumentasi kegiatan dan perjalanan
            jamaah bersama Adha Tour & Travel.
          </p>

        </div>


        {/* ================================
            CITY TOUR
        ================================= */}

        {renderGallery(
          cityTour,
          "City Tour",
          "City Tour",
          showCityTour,
          setShowCityTour
        )}


        {/* ================================
            MANASIK
        ================================= */}

        {renderGallery(
          manasik,
          "Manasik",
          "Manasik",
          showManasik,
          setShowManasik
        )}


        {/* ================================
            HANDLING JAMAAH
        ================================= */}

        {renderGallery(
          handlingJamaah,
          "Handling Jamaah",
          "Handling Jamaah",
          showHandlingJamaah,
          setShowHandlingJamaah
        )}

      </div>

    </section>
  );
}

export default GallerySection;