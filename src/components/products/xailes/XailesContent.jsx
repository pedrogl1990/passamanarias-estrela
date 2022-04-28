import XailesCarousel from "../../carousels/XailesCarousel/XailesCarousel";
import { XailesCarouselData } from "../../carousels/XailesCarousel/XailesCarouselData";
import "./XailesContent.css";
export default function XailesContent() {
  return (
    <>
      <main>
        <section className="intro-xailes">
          <h1>Xailes</h1>
          <p>
            É com orgulho que fabricamos o acabamento tradicional para xailes,
            um acessório de vestuário que tanto define a cultura portugues.
            Somos especializados nos acabamento dos típicos lenços minhotos.
          </p>
        </section>
        <section className="xailes-carousel">
          <XailesCarousel slides={XailesCarouselData} />
        </section>
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
        <section className="xailes-bottom-links">
          <div className="xailes-bottom-square-1">
            <img src="images/Conteudo/fita.png" alt="fita de algodão" />
            <h2>Produtos</h2>
            <button>Ver Mais</button>
          </div>
          <div className="xailes-bottom-square-2">
            <img
              src="images/Conteudo/contacto.png"
              alt="portátil e telemovel"
            />
            <h2>Contactos</h2>
            <button>Ver Mais</button>
          </div>
        </section>
      </main>
    </>
  );
}
