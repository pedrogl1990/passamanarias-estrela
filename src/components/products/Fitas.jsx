import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Fitas() {
  return (
    <>
      <Navbar />
      <main>
        <section className="intro-ribbon">
          <h1>Fitas</h1>
          <p>
            Fabricamos uma grande variedade de fitas textêis em algodão, sarja,
            nastro e poliéster e em todo o expectro de cores. Aceitamos
            projectos com designs personalizados de fitas.
          </p>
        </section>
        <section className="ribbon-carousel"></section>
        <section className="ribbon-applications">
          <img src="images/Ribbon/cobertor-fita.png" alt="cobertor com fita" />
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
        </section>
        <div className="square-links-left">
          <img src="images/Conteudo/franja2.png" alt="franja esticada" />
          <h2>Franjas</h2>
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
