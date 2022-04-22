import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const Toggle = () => {
    setActive(!active);
  };

  return (
    <header>
      <div className="navbar-icons">
        <a href="/">
          <img src="images/Icones/facebook.png" alt="Icone do Facebook" />
        </a>
        <a href="/">
          <img src="images/Icones/linkedin.png" alt="Icone do Linkedin" />
        </a>
        <a href="/">
          <img src="images/Icones/twitter.png" alt="Icone do Twitter" />
        </a>
      </div>
      <div className="navbar-main">
        <a href="/">
          <img
            className="logo"
            src="images/Icones/logo2.png"
            alt="logo passamanarias estrela"
          />
        </a>
        <ul className="navbar-main-link">
          <li>
            <a href="/">sobre nós</a>
          </li>
          <li>
            <a href="/">a nossa missão</a>
          </li>
          <li>
            <a href="/">produtos</a>
          </li>
          <li>
            <a href="/">contactos</a>
          </li>
        </ul>
        <div className={`search ${active ? "active" : ""}`}>
          <div className="icon" onClick={Toggle}>
            <img src="images/Icones/search.png" alt="" />
            <div className="input"></div>
          </div>
          <div className={active ? "proc" : "noproc"}>
            <div>
              <input
                type="text"
                name="procurar"
                id="procurar"
                placeholder="Procurar"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
