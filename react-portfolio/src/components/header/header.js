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
      <nav>
        <ul>
            <li>
                <a href="#about-me">About me</a> <br/>
            </li>
            <li>
                <a href="#work">Work</a> <br/>
            </li>
            <li>
                <a href="#contact-me">Contact Me</a> <br/>
            </li>
        </ul>
    </nav>
    </div>
    </div>
  );
}
export default Header;