import "./Navbar.css";
export default function Navbar() {
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
            <a href="/">SOBRE NÓS</a>
          </li>
        </ul>
        <ul className="navbar-main-link">
          <li>
            <a href="/">A NOSSA MISSÃO</a>
          </li>
        </ul>
        <ul className="navbar-main-link">
          <li>
            <a href="/">PRODUTOS</a>
          </li>
        </ul>
        <ul className="navbar-main-link">
          <li>
            <a href="/">CONTACTOS</a>
          </li>
        </ul>
        <div className="navbar-main-search">
          <img src="/images/Icones/search.png" alt="lupa de pesquisa" />
        </div>
      </div>
    </header>
  );
}
