import "./Products.css";
import { NavLink } from "react-router-dom";
import BottomLinks1 from "../bottomLinks/BottomLinks1";

export default function Products() {
  const products = [
    { id: 1, name: "Fitas", image: "/images/Ribbon/rolo-fita.png" },
    { id: 2, name: "Franjas", image: "/images/Fringe/franja2.png" },
    { id: 3, name: "Penachos", image: "/images/Tassel/penacho.png" },
    { id: 4, name: "Rendas", image: "/images/Lace/renda.png" },
    { id: 5, name: "Pompons", image: "/images/Pompons/pompons.png" },
    { id: 6, name: "Xailes", image: "/images/Xailes/xaile.png" },
  ];

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
          {products.map((product) => (
            <div className="product-grid" key={product.id}>
              <div className="card">
                <h2>{product.name}</h2>
              </div>
              <div className="card">
                <img src={product.image} />
              </div>
              <div className="card">
                <NavLink to={"/produtos/" + product.id}>
                  <button>Ver</button>
                </NavLink>
              </div>
            </div>
          ))}
        </section>
        <BottomLinks1 />
      </main>
    </>
  );
}
