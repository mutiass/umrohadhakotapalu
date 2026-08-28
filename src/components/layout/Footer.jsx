import React from "react";

import Logo from "../common/Logo";
function Footer() {
  return <footer id="footer"><div className="container footer-grid">
    <div><Logo/><p>Adha Tour & Travel<br/>Melayani jamaah dari Palu dan sekitarnya.</p></div>
    <div><h4>Kantor Cabang Palu</h4><p>Jl. Tadulako No. 4, Palu</p><a href="https://www.google.com/maps/search/?api=1&query=Jl.+Tadulako+No.+4,+Palu" target="_blank" rel="noreferrer">Buka di Google Maps ↗</a></div>
    <div><h4>Kantor Pusat</h4><p>Jl. Toddopuli Raya, Ruko E1/17, Makassar</p><a href="https://www.google.com/maps/search/?api=1&query=Jl.+Toddopuli+Raya,+Ruko+E1%2F17,+Makassar" target="_blank" rel="noreferrer">Buka di Google Maps ↗</a></div>
  </div><div className="footer-bottom">© 2026 Adha Tour & Travel</div></footer>;
}
export default Footer;
