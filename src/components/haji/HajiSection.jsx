import React from "react";

function HajiSection() {
  return (
    <section className="haji" id="haji">
      <div className="container haji-inner">
        <div>
          <h2>
            Haji Khusus • Visa Resmi Kuota Pemerintah
          </h2>
          <div className="haji-price">
            Rp325.000.000
          </div>

          <p>Daftar tunggu 3–5 tahun</p>
        </div>

        <div className="haji-card">
          <div>
            <b>Booking seat</b>
            <strong>Rp125.000.000</strong>
            <span>Terbit nomor porsi</span>
          </div>

          <ul>
            <li>Program 21–27 hari</li>
            <li>Paspor + vaksin + dam + hewan qurban</li>
            <li>Free umroh</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HajiSection;