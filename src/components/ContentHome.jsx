import "./ContentHome.css";
import MainCarousel from "./carousels/MainCarousel";
import Footer from "./Footer";
import { MainCarouselData } from "./carousels/MainCarouselData";

export default function ContentHome() {
  return (
    <>
      <MainCarousel slides={MainCarouselData} />
      <section className="section-data">
        <h2>Dados sobe nós</h2>
        <div className="data-wrapper">
          <div className="data">
            <img src="images/Icones/malha.png" alt="Icone malha têxtil" />
            <p>+1000</p>
            <p>Produtos</p>
          </div>
          <div className="data">
            <img src="images/Icones/fio.png" alt="rolo de fio" />
            <p>+500</p>
            <p>Cores</p>
          </div>
          <div className="data">
            <img src="images/Icones/mundo.png" alt="icone de globo" />
            <p>+200</p>
            <p>Clientes</p>
          </div>
        </div>
      </section>
      <section className="section-square-links-top">
        <div className="square-links-top-left">
          <img src="images/Conteudo/tear.png" alt="tear" />
          <h2>A Empresa</h2>
          <button>Ver Mais</button>
        </div>
        <div className="square-links-top-right">
          <img src="images/Conteudo/fita.png" alt="fita de algodão" />
          <h2>Produtos</h2>
          <button>Ver Mais</button>
        </div>
      </section>
      <section className="section-square-links-bottom">
        <div className="square-links-bottom-left">
          <img
            src="images/Conteudo/algodao.png"
            alt="mão e pedaço de algodão"
          />
          <h2>Missão & Valores</h2>
          <button>Ver Mais</button>
        </div>
        <div className="square-links-bottom-right">
          <img src="images/Conteudo/contacto.png" alt="portátil e telemovel" />
          <h2>Contactos</h2>
          <button>Ver Mais</button>
        </div>
      </section>
      <section className="section-inspired-details-intro">
        <h3>Inspired by details</h3>
        <p>
          Nas Passamanarias Estrela acreditamos que grandes feitos são um
          conjunto de outros feitos mais pequenos. É por isso que somos
          apaixonados pelos detalhes e cuidamos de cada pormenor das nossas
          fitas e franjas de forma a que os produtos dos nossos clientes possam
          primar pela qualidade até ao mais ínfimo detalhe.
        </p>
      </section>
      <section className="section-inspired-details-top">
        <div className="section-inspired-details-top-sub">
          <img
            src="images/Icones/mapa-portugal.png"
            alt="icone mapa Portugal"
          />
          <h4>Fornecedores nacionais</h4>
          <p>
            Previligiamos o mercado nacional para a aquisição de todas
            matérias-primas
          </p>
        </div>
        <div className="section-inspired-details-top-sub">
          <img src="images/Icones/certificado.png" alt="icone de certificado" />
          <h4>Matérias-Primas OEKO-TEX</h4>
          <p>Porque a segurança e certificação são uma prioridade</p>
        </div>
        <div className="section-inspired-details-top-sub">
          <img src="images/Icones/verificado.png" alt="icone de verificado" />
          <h4>Controlo de Qualidade</h4>
          <p>Controlo rigoroso em cada fase do processo de produção</p>
        </div>
      </section>
      <section className="section-inspired-details-bottom">
        <div className="section-inspired-details-bottom-sub">
          <img src="images/Icones/lampada.png" alt="icone lâmpada acesa" />
          <h4>Design</h4>
          <p>Seguimos as tendências do mercado e ajudamos a criar novas</p>
        </div>
        <div className="section-inspired-details-bottom-sub">
          <img src="images/Icones/conexao.png" alt="icone conexão" />
          <h4>A nossa comunidade</h4>
          <p>
            Trabalhamos e ensinamos a nossa “arte” a pessoas da nossa comunidade
          </p>
        </div>
        <div className="section-inspired-details-bottom-sub">
          <img src="images/Icones/fair-trade.png" alt="icone aperto de mãos" />
          <h4>Friendly Trade</h4>
          <p>Acreditamos em relações comerciais duradouras</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
