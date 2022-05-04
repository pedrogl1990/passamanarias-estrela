import "./BottomLinks.css";
import { NavLink } from "react-router-dom";

export default function BottomLinks2() {
  return (
    <section className="bottom-links">
      <div className="bottom-square-1">
        <img src="/images/Conteudo/fita.png" alt="fita de algodão" />
        <h2>Produtos</h2>

        <NavLink to={"/produtos"}>
          <button>Ver</button>
        </NavLink>
      </div>
      <div className="bottom-square-2">
        <img src="/images/Conteudo/tear.png" alt="tear" />
        <h2>A Empresa</h2>

        <NavLink to={"/sobrenos"}>
          <button>Ver</button>
        </NavLink>
      </div>
    </section>
  );
}
