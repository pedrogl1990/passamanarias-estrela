import MapPage from "../map/MapPage";
import "./ContactContent.css";

export default function ContactContent() {
  return (
    <>
      <main>
        <section className="contact-intro">
          <h1>Contactos</h1>
          <p>
            Nas Passamarias Estrela tratamos cada cliente como sendo parte
            familia e por isso encontramo-nos ao seu inteiro dispor para fazer
            parte dos seus projetos com as nossos produtos.
          </p>
        </section>
        <section className="contact-map">
          <MapPage />
        </section>
        <section className="contact-section-form">
          <form>
            <div className="contact-input">
              <label htmlFor="name">
                <input
                  style={{ width: 500, height: 40 }}
                  className="input-decoration"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Nome / Empresa:*"
                />
              </label>
            </div>
            <div className="contact-input">
              <label htmlFor="email">
                <input
                  style={{ width: 500, height: 40 }}
                  className="input-decoration"
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Email:*"
                />
              </label>
            </div>
            <div className="contact-input">
              <label htmlFor="tel">
                <input
                  style={{ width: 500, height: 40 }}
                  className="input-decoration"
                  name="tel"
                  id="tel"
                  type="text"
                  placeholder="Telefone:*"
                />
              </label>
            </div>
            <div className="contact-input">
              <label htmlFor="assunto">
                <input
                  style={{ width: 500, height: 40 }}
                  className="input-decoration"
                  name="assunto"
                  id="assunto"
                  type="text"
                  placeholder="Assunto:*"
                />
              </label>
            </div>
            <div className="contact-input">
              <textarea
                style={{ width: 500, height: 250 }}
                className="input-decoration"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Mensagem:*"
                required
              ></textarea>
            </div>
            <button className="contact-button" type="submit">
              Enviar
            </button>
          </form>
        </section>
        <section className="contact-map"></section>
        <section className="contact-bottom-links">
          <div className="contact-bottom-square-1">
            <img src="images/Conteudo/fita.png" alt="fita de algodão" />
            <h2>Produtos</h2>
            <button>Ver Mais</button>
          </div>
          <div className="contact-bottom-square-2">
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
