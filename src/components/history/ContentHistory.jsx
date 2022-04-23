import "./ContentHistory.css";
import Footer from "../Footer";

export default function ContentHistory() {
  return (
    <main>
      <h1>História</h1>
      <article className="article-history-1">
        <div>
          <h2>Fundação da empresa</h2>
          <p>
            Somos uma empresa de raizes familiares profundas, fundada por uma
            mulher empreendedora e muito à frente do seu tempo, a senhora
            Margarida de Oliveira Maia. Da sua determinação e engenho nasceu a
            empresa Margarida de Oliveira Maia Lda em 1970, mais conhecida no
            mercado têxtil como “Passamarias Estrela”.
          </p>
          <p>
            O seu foco neste nicho de mercado surgiu na necessidade de produção
            de novos modelos de acabamento têxteis que primassem pela qualidade
            da matéria-prima e excelência nos detalhes.
          </p>
          <p>
            É este legado que procuramos manter sempre vivo por várias gerações.
          </p>
        </div>
        <div>
          <img
            src="images/Conteudo/margarida.png"
            alt="A fundadora Margarida de Oliveira Maia"
          />
          <figcaption>
            A fundadora da empresa, Margarida de Oliveira Maia
          </figcaption>
        </div>
      </article>
      <article className="article-history-2">
        <div>
          <h2>Uma empresa 100% familiar</h2>
          <p>
            Atualmente na sua 2ª geração, a empresa Margarida de Oliveira Maia
            Lda segue orgulhosamente os passos iniciados pela sua fundadora e
            mantém-se uma empresa totalmente familiar e a funcionar nas mesmas
            instalações onde se iniciou esta aventura há mais de 50 anos atrás.
          </p>
          <p>
            As raízes que nos prendem a este chão são as mesmas que nos
            continuam a inspirar nos dias que correm e é por isso que fazemos
            questão de as manter.
          </p>
          <p>
            Por mantermos sólidas as raízes do nosso passado, a nossa geração e
            as gerações vindouras saberão sempre de onde vimos mas sobretudo
            para onde vamos.
          </p>
        </div>
        <img src="images/Conteudo/uniao.png" alt="mãos unidas" />
      </article>
      <article className="article-history-3">
        <div>
          <h2>Introdução de novos produtos</h2>
          <p>
            Iniciamos a nossa produção em 1970 com o fabrico de franjas e fitas
            rendadas, e uma frota de equipamentos inferior a 10 equipamentos.
            Hoje contamos com mais de 50 equipamentos industrais mo dernos e
            clássicos que nos permitem não só fabricar as passamanarias mais
            recentes do mercado como igualmente manter vivo o mercado “vintage”.
          </p>
          <p>
            Hoje temos mais de 20 tipos diferentes de passamarias têxteis e
            dentro de cada um centenas de modelos disponiveis.
          </p>
          <p>
            Em 2000 iniciamos a produção manual e tradicional de pompons, uma
            arte que temos o orgulho de fomentar. Recentemente em 2018 iniciamos
            ainda o comércio de rendas.
          </p>
        </div>
        <img src="images/Conteudo/franja.png" alt="Franja rendada" />
      </article>
      <section className="history-bottom-links">
        <div className="history-bottom-square-1">
          <img src="images/Conteudo/fita.png" alt="fita de algodão" />
          <h2>Produtos</h2>
          <button>Ver Mais</button>
        </div>
        <div className="history-bottom-square-2">
          <img src="images/Conteudo/contacto.png" alt="portátil e telemovel" />
          <h2>Contactos</h2>
          <button>Ver Mais</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
