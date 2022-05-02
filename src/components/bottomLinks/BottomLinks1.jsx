import "./BottomLinks.css";
import { NavLink } from "react-router-dom";

export default function BottomLinks1() {
  return (
    <main>
      <section className="bottom-links">
        <div className="bottom-square-1">
          <img src="/images/Conteudo/fita.png" alt="fita de algodão" />
          <h2>Produtos</h2>

          <NavLink to={"/produtos"}>
            <button>Ver</button>
          </NavLink>
        </div>
        <div className="bottom-square-2">
          <img src="/images/Conteudo/contacto.png" alt="portátil e telemovel" />
          <h2>Contactos</h2>

          <NavLink to={"/contacto"}>
            <button>Ver</button>
          </NavLink>
        </div>
      </section>
    </main>
  );
}
