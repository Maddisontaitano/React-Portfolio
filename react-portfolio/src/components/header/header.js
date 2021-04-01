import React from "react";
import "./header.css";
//importing image
import background from "./backgroundheader.jpg";



//function for header
function Header() {
  return (
    <div className="header">
      <div style={{ backgroundImage: `url(${background})` }}>
      <h1 className="title">Maddison Taitano</h1>
    </div>
    </div>
  );
}
export default Header;


