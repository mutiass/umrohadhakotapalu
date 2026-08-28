import React from "react";

import Icon from "../common/Icon";
import { facilities } from "../../data/facilities";
function FacilitySection(){return <section className="section" id="fasilitas"><div className="container"><div className="eyebrow dark">PERJALANAN LEBIH TENANG</div><h2>Yang Anda Dapatkan</h2><div className="facility-grid">{facilities.map(([icon,name])=><div className="facility" key={name}><Icon>{icon}</Icon><span>{name}</span></div>)}</div></div></section>}
export default FacilitySection;
