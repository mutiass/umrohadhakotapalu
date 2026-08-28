import React from "react";

import logoAisyah from "./logoaisyah.png";
import gerbangSekolah from "./gerbangsekolah.png";
import logoBsi from "./logobsi.png";

const DonationSection = () => {
  return (
    <section className="donation-section" id="donasi">

      <div className="donation-container">

        {/* ========================================
            HEADER
        ======================================== */}

        <div className="donation-header">

          <span className="donation-label">
            INVESTASI AKHIRAT
          </span>

          <h2>
            Gerakan Donasi
          </h2>

          <p className="donation-quote">
            “Jadikan Bagian dari Kebaikan”
          </p>

        </div>


        {/* ========================================
            MAIN CARD
        ======================================== */}

        <div className="donation-card">

          {/* ========================================
              LEFT - SCHOOL PHOTO
          ======================================== */}

          <div className="donation-photo-wrapper">

            <div className="donation-photo-frame">

              <img
                src={gerbangSekolah}
                alt="Gerbang Sekolah Qur'an Aisyah Ash Shiddiqiyah"
                className="donation-photo"
              />

              <div className="donation-photo-overlay">

                <span>
                  PONDOK TAHFIDZ
                </span>

                <strong>
                  AISYAH ASH SHIDDIQIYAH
                </strong>

              </div>

            </div>

          </div>


          {/* ========================================
              RIGHT - DONATION INFORMATION
          ======================================== */}

          <div className="donation-content">

            {/* Logo + Title */}

            <div className="donation-title-row">

              <div className="donation-logo">

                <img
                  src={logoAisyah}
                  alt="Logo Aisyah Ash Shiddiqiyah"
                />

              </div>


              <div className="donation-title">

                <span className="donation-program-label">
                  PROGRAM SEDEKAH
                </span>

                <h3>
                  Tahfidz Gratis
                </h3>

                <h4>
                  Sekolah Qur'an Aisyah Ash Shiddiqiyah
                </h4>

              </div>

            </div>


            {/* Intro */}

            <p className="donation-highlight">
              Mari menjadi bagian dari kebaikan dan
              dapatkan pahala yang berlipat ganda.
            </p>


            {/* Divider */}

            <div className="donation-divider"></div>


            {/* Institution + Address */}

            <div className="donation-institution">

              <span>
                SQBS Aisyah Ash Shiddiqiyah
              </span>

              <p>
                Jl. Jati Baru, Lrg. V, Tawanjuka,
                Tatanga, Palu
              </p>

            </div>


            {/* ========================================
                BSI ACCOUNT
            ======================================== */}

            <div className="donation-bank">

              <div className="donation-bank-logo">

                <img
                  src={logoBsi}
                  alt="Bank Syariah Indonesia"
                />

              </div>


              <div className="donation-bank-info">

                <span>
                  Rekening Donasi BSI
                </span>

                <strong>
                  7210105764
                </strong>

              </div>

            </div>


            {/* Description */}

            <div className="donation-description">

              <p>
                Pondok Tahfidz Aisyah Ash Shiddiqiyah
                membina santri tingkat SMP & SMA sederajat,
                yang sebagian besar berasal dari keluarga
                kurang mampu.
              </p>

            </div>


            {/* ========================================
                PROGRAM KEGIATAN
            ======================================== */}

            <div className="donation-program">

              <h5>
                Program Kegiatan
              </h5>


              <div className="donation-program-list">

                <div>
                  <span>✓</span>
                  <p>
                    Tahsin dan Tahfidz
                  </p>
                </div>


                <div>
                  <span>✓</span>
                  <p>
                    Ilmu-Ilmu Islam
                  </p>
                </div>


                <div>
                  <span>✓</span>
                  <p>
                    Pembinaan Akhlak
                  </p>
                </div>


                <div>
                  <span>✓</span>
                  <p>
                    Soft Skill & Pengembangan Diri
                  </p>
                </div>


                <div>
                  <span>✓</span>
                  <p>
                    Olahraga, Kesehatan & Lingkungan Hidup
                  </p>
                </div>

              </div>

            </div>


            {/* ========================================
                CONFIRMATION
            ======================================== */}

            <div className="donation-confirmation">

              <div className="donation-confirmation-icon">
                ✓
              </div>


              <div className="donation-confirmation-content">

                <span>
                  Konfirmasi Transfer
                </span>

                <strong>
                  Ustadz Rasyid Abdullah
                </strong>

                <p>
                  0812 2166 6776
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ========================================
            BOTTOM MESSAGE
        ======================================== */}

        <div className="donation-bottom">

          <span>✦</span>

          <p>
            Setiap kebaikan yang Anda berikan menjadi
            bagian dari perjuangan mencetak generasi Qur'ani.
          </p>

          <span>✦</span>

        </div>

      </div>

    </section>
  );
};

export default DonationSection;
