import React from "react";
import logoadha from "./logoadha.png";

function Logo() {
  return (
    <div className="logo" aria-label="Adha Tour & Travel">
      <img
        src={logoadha}
        alt="Adha Tour & Travel"
      />

      <div>
        <b>ADHA</b>
        <span>TOUR & TRAVEL</span>
      </div>
    </div>
  );
}

export default Logo;