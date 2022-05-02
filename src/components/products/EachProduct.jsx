import { useParams } from "react-router-dom";
import BottomLinks1 from "../bottomLinks/BottomLinks2";
import "./EachProduct.css";

export default function EachProduct() {
  const params = useParams();

  const products = [
    {
      id: 1,
      name: "Fitas",
      description:
        "Fabricamos uma grande variedade de fitas textêis em algodão, sarja, nastro e poliéster e em todo o expectro de cores. Aceitamos projectos com designs personalizados de fitas.",
      image1: "/images/Ribbon/fitas3.png",
      alt1: "fitas variadas",
      aplications: [
        "Cobertores",
        "Mantas",
        "Atoalhados",
        "Vestuário",
        "Panos",
        "Outros acessórios de moda",
      ],
      image2: "/images/Ribbon/cobertor-fita.png",
      alt2: "cobertores com fitas",
    },
    {
      id: 2,
      name: "Franjas",
      description:
        "Produzimos um vasto leque de franjas têxteis ornamentativas. Somos uma referência neste tipo de produtos e oferecemos uma vasta gama de modelos e cores.",
      image1: "/images/Fringe/franja8.png",
      alt1: "franja cru esticada",
      aplications: [
        "Colchas",
        "Cobertas",
        "Atoalhados",
        "Vestuário",
        "Panos",
        "Outros acessórios de moda",
      ],
      image2: "/images/Fringe/franja7.png",
      alt2: "frajas aplciada em toalha",
    },
    {
      id: 3,
      name: "Penachos",
      description:
        "Elegantes e totalmente “handcrafted”, os penachos que fabricamos são feitos e sujeitos a um elevado controlo de qualidade.",
      image1: "/images/Tassel/penachos4.png",
      alt1: "muitos penachos beges",
      aplications: [
        "Colchas",
        "Cobertas",
        "Cobertores",
        "Almofadas",
        "Vestuário",
        "Bijuteria",
        "Outros acessórios de moda",
      ],
      image2: "/images/Tassel/penachos.png",
      alt2: "franja com penachos coloridos aplicados",
    },
    {
      id: 4,
      name: "Rendas",
      description:
        "Comercializamos rendas de diferentes tipos de materiais e com os mais diversos designs. Consulte-nos para obter mais informações acerca dos diversos modelos.",
      image1: "/images/Lace/renda3.png",
      alt1: "renda florida bege",
      aplications: [
        "Colchas",
        "Cobertas",
        "Cobertores",
        "Almofadas",
        "Vestuário",
        "Atoalhados",
        "Outros acessórios de moda",
      ],
      image2: "/images/Lace/renda2.png",
      alt2: "renda aplicada em atoalhado",
    },
    {
      id: 5,
      name: "Pompons",
      description:
        "Produzimos e comercializamos pompons 100% hand-craft por profissionais locais. Tamanhos e com as mais diversas cores. Este tipo de de acabamento têxtil dá um toque requintado a qualquer peça.",
      image1: "/images/Pompons/pompons8.png",
      alt1: "almofada com pompons",
      aplications: [
        "Colchas",
        "Cobertas",
        "Cobertores",
        "Almofadas",
        "Vestuário",
        "Outros acessórios de moda",
      ],
      image2: "/images/Pompons/pompons2.png",
      alt2: "coberta cinza com pompons aplicados",
    },
    {
      id: 6,
      name: "Xailes",
      description:
        "É com orgulho que fabricamos o acabamento tradicional para xailes, um acessório de vestuário que tanto define a cultura portugues. Somos especializados nos acabamento dos típicos lenços minhotos.",
      image1: "/images/Xailes/xaile3.png",
      alt1: "xaile minhoto vermelho",
      aplications: ["Vestuário", "Outros acessórios de moda"],
      image2: "/images/Xailes/xaile2.png",
      alt2: "xaile minhoto azul",
    },
  ];

  const product = products.find((product) => product.id === Number(params.id));

  return (
    <main>
      <section className="product-intro">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </section>
      <section className="product-main-image">
        <img src={product.image1} alt={product.alt1} />
      </section>
      <section className="product-applications">
        <img src={product.image2} alt={product.alt2} />
        <div>
          <h2>Aplicações:</h2>
          <ul>
            {product.aplications.map((application, i) => (
              <li key={i}>{application}</li>
            ))}
          </ul>
        </div>
      </section>
      <BottomLinks1 />
    </main>
  );
}
