import BottomLinks2 from "../bottomLinks/BottomLinks2";
import "./Contact.css";

export default function Contact() {
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
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.373079365466!2d-8.59935604842887!3d41.060836924035115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247bbf79f9e1f1%3A0x9878be07b2f1427b!2sR.%20Nossa%20Sra.%20do%20Al%C3%ADvio%20169%2C%204415-051%20Perosinho!5e0!3m2!1spt-PT!2spt!4v1651529362885!5m2!1spt-PT!2spt"
            width="1440"
            height="600"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
        <BottomLinks2 />
      </main>
    </>
  );
}
