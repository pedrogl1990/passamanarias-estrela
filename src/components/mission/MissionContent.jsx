export default function MissionContent() {
  return (
    <main>
      <h1>Missão & Valores</h1>
      <p id="intro-mission">
        A Passamanarias Estrela é uma empresa têxtil inovadora. Dedicados à
        criação, desenvolvimento e comercialização de passamanarias, estamos
        empenhados em contribuir para uma melhoria constante da área de “Home
        Textile” e na qualidade dos acabamentos que estes produtos incorporam.
        Inspired by details.
      </p>
      <section className="section-mission-1">
        <div>
          <h2>
            A Missão da Passamarias Estrela é encontrar, desenvolver e fornecer
            soluções têxteis na área das Passamanarias Têxteis
          </h2>
          <p>
            Apostamos numa estratégia empresarial assente desenvolvimento da
            qualidade dos nossos produtos, a constante procura das melhores
            matérias Primas, desenvolvimento de novas ideias e a
            internacionalização da nossa marca.
          </p>
          <p>
            Queremos dar resposta às necessidades do mercado, desempenhando um
            papel ativo na economia global. Queremos também contribuir para a
            construção de uma industria têxtil cada vez mais sustentável,
            competitiva, íntegra e dinâmica, assente no desenvolvimento e na
            inovação.
          </p>
        </div>
        <img
          src="images/Conteudo/missao.png"
          alt="rolos de fita em prateleira"
        />
      </section>
      <section className="section-mission-2">
        <div>
          <h2>Os Valores que nos orientam refletem a nossa identidade:</h2>
          <div className="section-mission-2-list">
            <ul>
              <li>Ao Serviço do Têxtil nacional</li>
              <li>Aposta na qualidade dos produtos e matérias-primas</li>
              <li>Sustentabilidade na produção</li>
              <li>Atenção constante às necessidades do mercado</li>
              <li>Rigor, responsabilidade e trabalho em equipa</li>
              <li>Orgulho na filosofia “Made in Portugal”</li>
            </ul>
          </div>
        </div>
        <img
          src="images/Conteudo/valores.png"
          alt="rolos de fita em prateleira"
        />
      </section>
      <section className="mission-bottom-links">
        <div className="mission-bottom-square-1">
          <img src="images/Conteudo/fita.png" alt="fita de algodão" />
          <h2>Produtos</h2>
          <button>Ver Mais</button>
        </div>
        <div className="mission-bottom-square-2">
          <img src="images/Conteudo/tear.png" alt="tear" />
          <h2>A Empresa</h2>
          <button>Ver Mais</button>
        </div>
      </section>
    </main>
  );
}
