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
        <section className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3730793608283!2d-8.599350683874773!3d41.0608369241365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247bbf79f9e1f1%3A0x9878be07b2f1427b!2sR.%20Nossa%20Sra.%20do%20Al%C3%ADvio%20169%2C%204415-051%20Perosinho!5e0!3m2!1spt-PT!2spt!4v1650122546066!5m2!1spt-PT!2spt"
            width="800"
            height="600"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
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
