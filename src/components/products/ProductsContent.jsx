export default function ProductsContent() {
  return (
    <>
      <main>
        <section>
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
          <div className="product-grid-1">
            <p>Fitas</p>
            <img src="images/Ribbon/rolo-fita.png" alt="rolo de fita" />
            <button>Ver</button>
          </div>
          <div className="product-grid-2">
            <p>Franjas</p>
            <img src="images/Fringe/franja2.png" alt="franja esticada" />
            <button>Ver</button>
          </div>
          <div className="product-grid-3">
            <p>Penachos</p>
            <img
              src="images/Tassel/penacho.png"
              alt="penachos multicoloridos"
            />
            <button>Ver</button>
          </div>
          <div className="product-grid-4">
            <p>Rendas</p>
            <img src="images/Lace/renda.png" alt="renda branca" />
            <button>Ver</button>
          </div>
          <div className="product-grid-5">
            <p>Pompons</p>
            <img
              src="images/Pompons/pompons.png"
              alt="pompons multicoloridos"
            />
            <button>Ver</button>
          </div>
          <div className="product-grid-6">
            <p>Xailes</p>
            <img src="images/Xailes/xaile.png" alt="xaile minhoto vermelho" />
            <button>Ver</button>
          </div>
        </section>
        <div className="square-links-left">
          <img src="images/Conteudo/fita.png" alt="fita de algodão" />
          <h2>Produtos</h2>
          <button>Ver Mais</button>
        </div>
        <div className="square-links-right">
          <img src="images/Conteudo/tear.png" alt="tear" />
          <h2>A Empresa</h2>
          <button>Ver Mais</button>
        </div>
        <img src="images/Icones/tres-rolos-fita.png" alt="tres rolos de fita" />
      </main>
    </>
  );
}
