import FranjasCarousel from "./../../carousels/FranjasCarousel/FranjasCarousel";
import { FranjasCarouselData } from "./../../carousels/FranjasCarousel/FranjasCarouselData";
import "./FranjasContent.css";
export default function FranjasContent() {
  return (
    <>
      <main>
        <section className="intro-fringe">
          <h1>Franjas</h1>
          <p>
            Produzimos um vasto leque de franjas têxteis ornamentativas. Somos
            uma referência neste tipo de produtos e oferecemos uma vasta gama de
            modelos e cores.
          </p>
        </section>
        <section className="fringe-carousel">
          <FranjasCarousel slides={FranjasCarouselData} />
        </section>
        <section className="fringe-applications">
          <img src="images/Fringe/franja7.png" alt="tecido rosa com franja" />
          <div>
            <h2>Aplicações:</h2>
            <ul>
              <li>Colchas</li>
              <li>Cobertas</li>
              <li>Atoalhados</li>
              <li>Vestuário</li>
              <li>Panos</li>
              <li>Outros acessórios de moda</li>
            </ul>
          </div>
        </section>
        <section className="fringe-bottom-links">
          <div className="fringe-bottom-square-1">
            <img
              src="images/Conteudo/penachos.png"
              alt="Penachos multicoloridos"
            />
            <h2>Penachos</h2>
            <button>Ver Mais</button>
          </div>
          <div className="fringe-bottom-square-2">
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
