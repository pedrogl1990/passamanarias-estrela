import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const Toggle = () => {
    setActive(!active);
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header>
      <div className="navbar-icons">
        <a href="/">
          <img src="/images/Icones/facebook.png" alt="Icone do Facebook" />
        </a>
        <a href="/">
          <img src="/images/Icones/linkedin.png" alt="Icone do Linkedin" />
        </a>
        <a href="/">
          <img src="/images/Icones/twitter.png" alt="Icone do Twitter" />
        </a>
      </div>
      <div className="navbar-main">
        <NavLink to="/">
          <img
            className="logo"
            src="/images/Icones/logo2.png"
            alt="logo passamanarias estrela"
          />
        </NavLink>
        {(toggleMenu || screenWidth > 850) && (
          <ul className="navbar-main-link">
            <li className="navbar-li">
              <NavLink to="/sobrenos">sobre nós</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/missao">a nossa missão</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/produtos">produtos</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/contacto">contactos</NavLink>
            </li>
            <li className="navbar-li">
              <input type="text" placeholder="Procurar" name="search" />
              <button type="submit">
                <img src="/images/Icones/search.png" alt="" />
              </button>
            </li>
          </ul>
        )}
        <button onClick={toggleNav} className="hamburguer">
          <img src="/images/Icones/hamburguer.png" alt="" />
        </button>
        <div className={`search ${active ? "active" : ""}`}>
          <div className="icon" onClick={Toggle}>
            <img src="/images/Icones/search.png" alt="" />
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
