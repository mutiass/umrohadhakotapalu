import React from "react";

function SeatStrip() {
 return <section className="seat-strip"><div className="container seat-inner"><div><strong>Booking seat hanya Rp6 juta</strong><span>Sudah termasuk perlengkapan eksklusif jamaah.</span></div><div className="kit">{["Koper","Tas kabin","Backpack","Ihram","Scarf","Ibadah"].map(x=><span key={x}>{x}</span>)}</div><a className="btn light" href="#kontak">Amankan Seat</a></div></section>;
}
export default SeatStrip;
