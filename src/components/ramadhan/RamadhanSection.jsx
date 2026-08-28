import React from "react";
import { ramadhan } from "../../data/ramadhan";

function RamadhanSection() {
  return (
    <section className="ramadhan">
      <div className="container">

        <div className="ramadhan-copy">
          <div className="eyebrow">
            RAMADHAN 1448H / 2027 M
          </div>

          <h2>Umroh Ramadhan</h2>

          <p>
            Makkah •
            Wahah Daefah ~ Madinah • Arkan Golden
          </p>
        </div>

        <div className="ramadhan-prices">
          {ramadhan.map(([d, p]) => (
            <div key={d}>
              <span>{d}</span>
              <strong>{p}</strong>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RamadhanSection;