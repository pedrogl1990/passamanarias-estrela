import FitasCarousel from "./../../carousels/FitasCarousel/FitasCarousel";
import { FitasCarouselData } from "./../../carousels/FitasCarousel/FitasCarouselData";
import "./Fitas.css";

export default function FitasContent() {
  return (
    <>
      <main>
        <section className="intro-ribbon">
          <h1>Fitas</h1>
          <p>
            Fabricamos uma grande variedade de fitas textêis em algodão, sarja,
            nastro e poliéster e em todo o expectro de cores. Aceitamos
            projectos com designs personalizados de fitas.
          </p>
        </section>
        <section className="ribbon-carousel">
          <FitasCarousel slides={FitasCarouselData} />
        </section>
        <section className="ribbon-applications">
          <div>
            <h2>Aplicações:</h2>
            <ul>
              <li>Cobertores</li>
              <li>Mantas</li>
              <li>Atoalhados</li>
              <li>Vestuário</li>
              <li>Panos</li>
              <li>Outros acessórios de moda</li>
            </ul>
          </div>
          <img src="/images/Ribbon/cobertor-fita.png" alt="" />
        </section>
        <section
          className="
        ribbon-bottom-links"
        >
          <div className="ribbon-bottom-square-1">
            <img src="images/Conteudo/franja2.png" alt="franja esticada" />
            <h2>Franjas</h2>
            <button>Ver Mais</button>
          </div>
          <div className="ribbon-bottom-square-2">
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
