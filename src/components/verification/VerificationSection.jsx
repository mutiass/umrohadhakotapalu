import React from "react";

const items = [
  [
    "01",
    "Cek PPIU melalui Haji Pintar",
    "Download aplikasi Haji Pintar dari Kementerian Agama, lalu gunakan menu Umrah & Haji Khusus untuk memeriksa legalitas PPIU."
  ],
  [
    "02",
    "Cari menu PPIU",
    "Setelah aplikasi terbuka, scroll ke bagian bawah dan cari menu Umrah & Haji Khusus, kemudian pilih PPIU."
  ],
  [
    "03",
    "Cari nama Haramin",
    "Pada bagian Nama PPIU, ketik Haramin. Secara otomatis akan muncul PT. AULIA DUTA HARAMIN TOUR."
  ],
  [
    "04",
    "Buka detail PPIU",
    "Klik PT. AULIA DUTA HARAMIN TOUR untuk melihat informasi dan detail PPIU yang terdaftar."
  ],
  [
    "05",
    "Kenali nama ADHA",
    "ADHA merupakan singkatan dari Aulia Duta Haramin, nama perusahaan yang menaungi Adha Tour & Travel."
  ]
];

function VerificationSection() {
  return (
    <section className="section verify">
      <div className="container">

        <div className="section-head">
          <div>
            <h2>
              Pastikan travel Anda resmi
            </h2>
          </div>

          <p>
            Verifikasi PPIU dapat dilakukan langsung melalui aplikasi
            Haji Pintar resmi Kementerian Agama.
          </p>
        </div>

        <div className="verify-grid">
          {items.map((item) => (
            <div className="verify-card" key={item[0]}>
              <span>{item[0]}</span>

              <h3>{item[1]}</h3>

              <p>{item[2]}</p>
            </div>
          ))}
        </div>

        <div className="license">
          <div>
            <strong>
              PT. AULIA DUTA HARAMIN TOUR
            </strong>

            <span>
              ADHA — Aulia Duta Haramin
            </span>
          </div>

          <a
            className="btn outline"
            href="https://play.google.com/store/apps/details?id=com.kemenag_haji_pintar_2019"
            target="_blank"
            rel="noreferrer"
          >
            Download Haji Pintar ↗
          </a>
        </div>

      </div>
    </section>
  );
}

export default VerificationSection;