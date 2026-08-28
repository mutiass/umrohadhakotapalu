import React from "react";

import { packages } from "../../data/packages";
import { airlineLogos } from "../../data/airlines";

function PackageSection() {
  return (
    <section className="section" id="paket">
      <div className="container">

        <div className="section-head">
          <div>
            <div className="eyebrow dark">
              PILIH SESUAI KEBUTUHAN
            </div>

            <h2>Paket Umroh 2026</h2>
          </div>

          <p>
            Harga di bawah belum termasuk paspor dan vaksin.
            Jadwal dapat berubah sesuai otoritas maskapai.
          </p>
        </div>


        <div className="package-grid">

          {packages.map((p) => (
            <article className="package" key={p.n}>

              <div className="package-top">
                <span className="number">
                  0{p.n}
                </span>

                {p.badge && (
                  <span
                    className={
                      "badge " +
                      (p.n === 5 || p.n === 6
                        ? "promo-badge"
                        : "")
                    }
                  >
                    {p.badge}
                  </span>
                )}
              </div>


              <h3>{p.price}</h3>


              <div className="airline">
                <img
                  src={airlineLogos[p.airline]}
                  alt={p.airline}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <span>{p.airline}</span>
              </div>


              <div className="hotel">

                <div>
                  <small>MAKKAH</small>
                  <b>{p.mecca}</b>
                </div>

                <div>
                  <small>MADINAH</small>
                  <b>{p.madinah}</b>
                </div>

              </div>


              {/* FASILITAS TERMASUK */}
              <div className="package-includes">

                <div className="date">
                  ✓ Include tiket pesawat Palu–Makassar PP
                </div>

                <div className="date">
                  ✓ Penginapan Hotel Grand Town Maros PP
                </div>

              </div>


              {/* TANGGAL / BULAN PEMBERANGKATAN */}
              <div className="date">
                ◷ {p.date}
              </div>


            </article>
          ))}

        </div>


        <div className="registration-note">
          <div>
            <strong>
              Website ini digunakan sebagai media informasi paket,
              fasilitas, promo, dan perjalanan.
            </strong>
          </div>

        </div>


        <div className="room-note">
          <b>Pengaturan kamar:</b>{" "}
          standar 4 orang/kamar. Jika ingin 2 orang dalam 1 kamar,
          tambah Rp5 juta; untuk 3 orang, tambah Rp3 juta.
        </div>

      </div>
    </section>
  );
}

export default PackageSection;