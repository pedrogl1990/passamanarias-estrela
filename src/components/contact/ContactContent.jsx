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
        <section className="contact-section-form">
          <form action="">
            <imput
              nome="name"
              id="name"
              type="text"
              placeholder="Nome / Empresa:*"
              required
            ></imput>
            <imput
              name="email"
              id="email"
              type="email"
              placeholder="Email:*"
              required
            ></imput>
            <imput
              name="tel"
              id="tel"
              type="tel"
              placeholder="Telefone:*"
              required
            ></imput>
            <imput
              name="assunto"
              id="assunto"
              type="text"
              placeholder="Assunto:*"
              required
            ></imput>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Mensagem:*"
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
        <section className="contact-map"></section>
        <div className="square-links-left">
          <img src="images/Conteudo/fita.png" alt="fita de algodão" />
          <h2>Produtos</h2>
          <button>Ver Mais</button>
        </div>
        <div className="square-links-right">
          <img src="images/Conteudo/contacto.png" alt="portátil e telemovel" />
          <h2>Contactos</h2>
          <button>Ver Mais</button>
        </div>
        <img src="images/Icones/tres-rolos-fita.png" alt="tres rolos de fita" />
      </main>
    </>
  );
}
