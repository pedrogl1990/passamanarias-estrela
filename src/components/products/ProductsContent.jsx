import "./ProductsContent.css";
import { NavLink } from "react-router-dom";

export default function ProductsContent() {
  return (
    <>
      <main>
        <section className="products-intro">
          <h1>Produtos</h1>
          <p>
            As nossas passamanarias estão presentes no mercado mundial em
            diversas linhas de produtos têxteis.
          </p>
          <p>
            Trazemos para o mercado uma vasta gama de passamarias e produtos
            têxteis na aérea dos acabamentos do home textile, do vestuário e
            acessórios. Fitas, franjas, penachos, pompons, rendas e acabamentos
            para xailes são apenas algumas das principais aplicações que temos
            para oferecer.
          </p>
        </section>
        <section className="products-grid">
          <div className="product-grid">
            <h2>Fitas</h2>
            <img src="images/Ribbon/rolo-fita.png" alt="rolo de fita" />
            <NavLink to="/fitas">
              <button>Ver</button>
            </NavLink>
          </div>
          <div className="product-grid">
            <h2>Franjas</h2>
            <img src="images/Fringe/franja2.png" alt="franja esticada" />
            <NavLink to="/franjas">
              <button>Ver</button>
            </NavLink>
          </div>
          <div className="product-grid">
            <h2>Penachos</h2>
            <img
              src="images/Tassel/penacho.png"
              alt="penachos multicoloridos"
            />
            <NavLink to="/penachos">
              <button>Ver</button>
            </NavLink>
          </div>
          <div className="product-grid">
            <h2>Rendas</h2>
            <img src="images/Lace/renda.png" alt="renda branca" />
            <NavLink to="/rendas">
              <button>Ver</button>
            </NavLink>
          </div>
          <div className="product-grid">
            <h2>Pompons</h2>
            <img
              src="images/Pompons/pompons.png"
              alt="pompons multicoloridos"
            />
            <NavLink to="/produtos/pompons">
              <button>Ver</button>
            </NavLink>
          </div>
          <div className="product-grid">
            <h2>Xailes</h2>
            <img src="images/Xailes/xaile.png" alt="xaile minhoto vermelho" />
            <NavLink to="/produtos/xailes">
              <button>Ver</button>
            </NavLink>
          </div>
        </section>
        <section className="products-bottom-links">
          <div className="products-bottom-square-1">
            <img src="images/Conteudo/fita.png" alt="fita de algodão" />
            <h2>Produtos</h2>
            <button>Ver Mais</button>
          </div>
          <div className="products-bottom-square-2">
            <img src="images/Conteudo/tear.png" alt="tear" />
            <h2>A Empresa</h2>
            <button>Ver Mais</button>
          </div>
        </section>
      </main>
    </>
  );
}
