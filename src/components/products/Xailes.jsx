import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Xailes() {
  return (
    <>
      <Navbar />
      <main>
        <section className="intro-xailes">
          <h1>Xailes</h1>
          <p>
            É com orgulho que fabricamos o acabamento tradicional para xailes,
            um acessório de vestuário que tanto define a cultura portugues.
            Somos especializados nos acabamento dos típicos lenços minhotos.
          </p>
        </section>
        <section className="xailes-carousel"></section>
        <section className="xailes-applications">
          <img src="images/Xailes/xaile2.png" alt="xaile minhoto azul" />
          <div>
            <h2>Aplicações:</h2>
            <ul>
              <li>Vestuário</li>
              <li>Outros acessórios de moda</li>
            </ul>
          </div>
        </section>
        <div className="square-links-left">
          <img src="images/Conteudo/fita.png" alt="fita de algodão" />
          <h2>Produtos</h2>
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
