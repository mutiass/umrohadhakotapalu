import React, { useState } from "react";
import logoBSI from "./logobsi.png";

const formatIDR = (n) =>
  "Rp" + Math.round(n).toLocaleString("id-ID");

function Calculator() {
  const [price, setPrice] = useState(38800000);
  const [years, setYears] = useState(1);

  const bookingSeat = 6000000;
  const remaining = Number(price) - bookingSeat;

  const months = Number(years) * 12;
  const days = months * 30;

  const monthly = remaining / months;
  const daily = remaining / days;

  return (
    <div className="calculator-card">

      <div className="bsi-brand">
        <img
          src={logoBSI}
          alt="Bank Syariah Indonesia"
        />

        <span>Virtual Account BSI</span>
      </div>

      <label htmlFor="calcPackage">
        Pilih paket
      </label>

      <select
        id="calcPackage"
        value={price}
        onChange={(e) =>
          setPrice(Number(e.target.value))
        }
      >
        <option value="38800000">
          Paket 1 — Rp38.800.000
        </option>

        <option value="41300000">
          Paket 2 — Rp41.300.000
        </option>

        <option value="39300000">
          Paket 3 — Rp39.300.000
        </option>

        <option value="42200000">
          Paket 4 — Rp42.200.000
        </option>

        <option value="45000000">
          Ramadhan 12 Hari — Rp45.000.000
        </option>

        <option value="52000000">
          Ramadhan 15 Hari — Rp52.000.000
        </option>

        <option value="62000000">
          Ramadhan 30 Hari — Rp62.000.000
        </option>
      </select>

      <label htmlFor="calcYears">
        Target waktu
      </label>

      <select
        id="calcYears"
        value={years}
        onChange={(e) =>
          setYears(Number(e.target.value))
        }
      >
        <option value="1">
          1 tahun
        </option>

        <option value="2">
          2 tahun
        </option>

        <option value="3">
          3 tahun
        </option>
      </select>

      <div className="calc-result">

        <small>
          Estimasi rata-rata per bulan*
        </small>

        <strong>
          {formatIDR(monthly)}
        </strong>

        <small>
          Estimasi rata-rata per hari*
        </small>

        <strong>
          {formatIDR(daily)}
        </strong>

        <span>
          Target {years} tahun • Sisa setelah booking seat{" "}
          {formatIDR(remaining)}
        </span>

      </div>

      <small className="calc-note">
        *Simulasi: (harga paket − booking seat Rp6 juta)
        ÷ jumlah bulan. Estimasi per hari menggunakan
        asumsi 30 hari per bulan. Angsuran sebenarnya
        fleksibel sesuai kemampuan jamaah, jadi nominal
        ini bukan kewajiban setoran harian maupun bulanan.
      </small>

    </div>
  );
}

export default Calculator;