import RendasCarousel from "./../../carousels/RendasCarousel/RendasCarousel";
import { RendasCarouselData } from "./../../carousels/RendasCarousel/RendasCarouselData";
import "./RendasContent.css";

export default function RendasContent() {
  return (
    <>
      <main>
        <section className="intro-lace">
          <h1>Rendas</h1>
          <p>
            Comercializamos rendas de diferentes tipos de materiais e com os
            mais diversos designs. Consulte-nos para obter mais informações
            acerca dos diversos modelos.
          </p>
        </section>
        <section className="lace-carousel">
          <RendasCarousel slides={RendasCarouselData} />
        </section>
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
        <section className="lace-bottom-links">
          <div className="lace-bottom-square-1">
            <img
              src="images/Conteudo/pompons.png"
              alt="rolo com diferentes pompons"
            />
            <h2>Pompons</h2>
            <button>Ver Mais</button>
          </div>
          <div className="lace-bottom-square-2">
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
