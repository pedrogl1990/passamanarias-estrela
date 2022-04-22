import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Rendas() {
  return (
    <>
      <Navbar />
      <main>
        <section className="intro-lace">
          <h1>Rendas</h1>
          <p>
            Comercializamos rendas de diferentes tipos de materiais e com os
            mais diversos designs. Consulte-nos para obter mais informações
            acerca dos diversos modelos.
          </p>
        </section>
        <section className="lace-carousel"></section>
        <section className="lace-applications">
          <img
            src="images/Lace/renda2.png"
            alt="renda em toalha em cima de mesa de madeira"
          />
          <div>
            <h2>Aplicações:</h2>
            <ul>
              <li>Colchas</li>
              <li>Cobertas</li>
              <li>Cobertores</li>
              <li>Almofadas</li>
              <li>Atoalhados</li>
              <li>Vestuário</li>
              <li>Outros acessórios de moda</li>
            </ul>
          </div>
        </section>
        <div className="square-links-left">
          <img
            src="images/Conteudo/ponpons.png"
            alt="rolo com diferentes pompons"
          />
          <h2>Pompons</h2>
          <button>Ver Mais</button>
        </div>
        <div className="square-links-right">
          <img src="images/Conteudo/contacto.png" alt="portátil e telemovel" />
          <h2>Contactos</h2>
          <button>Ver Mais</button>
        </div>
        <img src="images/Icones/tres-rolos-fita.png" alt="tres rolos de fita" />
      </main>
      <Footer />
    </>
  );
}
