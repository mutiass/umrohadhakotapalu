import React from "react";
import Calculator from "./Calculator";
import logoBSI from "./logobsi.png";

function SavingSection() {
  return (
    <section className="saving">
      <div className="container saving-inner">

        {/* ========================================
            INFORMASI TABUNGAN
        ======================================== */}
        <div>
          <div className="eyebrow">
            ESTIMASI TABUNGAN
          </div>

<p>
  Booking seat sebesar <strong>Rp6.000.000</strong> dibayar
  di awal ke rekening resmi BSI PT. AULIA DUTA HARAMIN.
  Setelah booking dikonfirmasi, jamaah akan mendapatkan
  <strong> Virtual Account (VA) BSI atas nama sendiri</strong>{" "}
  untuk melanjutkan tabungan.
</p>

          {/* ========================================
              REKENING BOOKING
          ======================================== */}
          <div className="bank-info">

            <strong>
              Rekening Booking Seat <br />
              BSI — a.n. PT. AULIA DUTA HARAMIN: 7325612438
            </strong>
          </div>

          {/* ========================================
              FITUR TABUNGAN
          ======================================== */}
          <div className="saving-features">

            <span>
              ✓ Bisa dibayar melalui M-Banking, ATM, Indomaret, Alfamidi, Cash ke kantor cabang PT. Adha atau BSI langsung
            </span>

            <span>
              ✓ Tabungan tercatat dan dapat dilacak melalui BSI
            </span>

            <span>
              ✓ Nominal tabungan fleksibel sesuai kemampuan
            </span>

            <span>
              ✓ Tabungan dapat diwariskan dan tidak hangus
            </span>

            <span>
              ✓ Lunas → Admin menghubungi untuk jadwal keberangkatan
            </span>

          </div>
        </div>

        {/* ========================================
            CALCULATOR
        ======================================== */}
        <Calculator />

      </div>
    </section>
  );
}

export default SavingSection;