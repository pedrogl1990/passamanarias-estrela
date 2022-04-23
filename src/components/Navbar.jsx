import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/">
          <img
            className="logo"
            src="images/Icones/logo2.png"
            alt="logo passamanarias estrela"
          />
        </NavLink>
        <ul className="navbar-main-link">
          <li>
            <NavLink to="/sobrenos">sobre nós</NavLink>
          </li>
          <li>
            <NavLink to="/missao">a nossa missão</NavLink>
          </li>
          <li>
            <NavLink to="/produtos">produtos</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">contactos</NavLink>
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
