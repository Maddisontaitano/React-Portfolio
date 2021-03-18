import React from "react";
 import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="title">Maddison Taitano</h1>
      <nav>
        <ul>
            <li>
                <a href="#about-me">About me</a>
            </li>
            <li>
                <a href="#work">Work</a>
            </li>
            <li>
                <a href="#contact-me">Contact Me</a>
            </li>
        </ul>
    </nav>
    </div>
  );
}
export default Header;