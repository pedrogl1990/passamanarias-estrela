import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="address">
        <p>Passamanarias Estrela</p>
        <p>Rua Nossa Senhora do Alivio 169</p>
        <p>4415-051 Perosinho</p>
        <p>Portugal</p>
      </div>
      <section className="terms">
        <a href="/">Termos e Condições</a>
        <a href="/">Politica de Cookies</a>
        <a href="/">Politicas de Privacidade</a>
      </section>
      <section className="social">
        <p>Siga-nos</p>
        <a href="/">
          <img src="images/Icones/facebook2.png" alt="Icone do Facebook" />
        </a>
        <a href="/">
          <img src="images/Icones/linkedin2.png" alt="Icone do Linkedin" />
        </a>
        <a href="/">
          <img src="images/Icones/twitter2.png" alt="Icone do Twitter" />
        </a>
      </section>
    </footer>
  );
}
