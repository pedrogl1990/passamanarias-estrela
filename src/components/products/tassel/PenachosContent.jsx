import PenachosCarousel from "./../../carousels/PenachosCarousel/PenachosCarousel";
import { PenachosCarouselData } from "./../../carousels/PenachosCarousel/PenachosCarouselData";
import "./PenachosContent.css";

export default function PenachosContent() {
  return (
    <>
      <main>
        <section className="intro-tassel">
          <h1>Penachos</h1>
          <p>
            Elegantes e totalmente “handcrafted”, os penachos que fabricamos são
            feitos e sujeitos a um elevado controlo de qualidade.
          </p>
        </section>
        <section className="tassel-carousel">
          <PenachosCarousel slides={PenachosCarouselData} />
        </section>
        <section className="tassel-applications">
          <img
            src="images/Tassel/penachos3.png"
            alt="penachos coloridos em fita"
          />
          <div>
            <h2>Aplicações:</h2>
            <ul>
              <li>Colchas</li>
              <li>Cobertas</li>
              <li>Cobertores</li>
              <li>Almofadas</li>
              <li>Vestuário</li>
              <li>Bijuteria</li>
              <li>Outros acessórios de moda</li>
            </ul>
          </div>
        </section>
        <section className="tassel-bottom-links">
          <div className="tassel-bottom-square-1">
            <img src="images/Conteudo/rendas.png" alt="renda florida" />
            <h2>Franjas</h2>
            <button>Ver Mais</button>
          </div>
          <div className="tassel-bottom-square-2">
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
