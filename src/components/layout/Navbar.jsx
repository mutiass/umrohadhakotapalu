import React from "react";

import Logo from "../common/Logo";
function Navbar() {
  return <header className="nav"><div className="container nav-inner"><Logo/><nav>
    <a href="#paket">Paket</a><a href="#fasilitas">Fasilitas</a><a href="#haji">Haji</a><a href="#citytour">City Tour</a><a href="#testimoni">Testimoni</a><a href="#kontak">Kontak</a>
  </nav></div></header>;
}
export default Navbar;
