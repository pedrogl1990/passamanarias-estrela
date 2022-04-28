import PomponsCarousel from "../../carousels/PomponsCarousel/PomponsCarousel";
import { PomponsCarouselData } from "../../carousels/PomponsCarousel/PomponsCarouselData";
import "./PomponsContent.css";
export default function PomponsContent() {
  return (
    <>
      <main>
        <section className="intro-pompons">
          <h1>Pompons</h1>
          <p>
            Produzimos e comercializamos pompons 100% hand-craft por
            profissionais locais. Tamanhos e com as mais diversas cores. Este
            tipo de de acabamento têxtil dá um toque requintado a qualquer peça.
          </p>
        </section>
        <section className="pompons-carousel">
          <PomponsCarousel slides={PomponsCarouselData} />
        </section>
        <section className="pompons-applications">
          <img src="images/Pompons/pompons2.png" alt="pompons em coberta" />
          <div>
            <h2>Aplicações:</h2>
            <ul>
              <li>Colchas</li>
              <li>Cobertas</li>
              <li>Cobertores</li>
              <li>Almofadas</li>
              <li>Vestuário</li>
              <li>Outros acessórios de moda</li>
            </ul>
          </div>
        </section>
        <section className="pompons-bottom-links">
          <div className="pompons-bottom-square-1">
            <img src="images/Conteudo/xailes.png" alt="dois xaile minhotos" />
            <h2>Xailes</h2>
            <button>Ver Mais</button>
          </div>
          <div className="pompons-bottom-square-2">
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
