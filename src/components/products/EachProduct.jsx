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
      image1: "/images/Ribbon/fitas4.png",
      aplications: [
        "Cobertores",
        "Mantas",
        "Atoalhados",
        "Vestuário",
        "Panos",
        "Outros acessórios de moda",
      ],
      image2: "/images/Ribbon/cobertor-fita.png",
    },
    {
      id: 2,
      name: "Franjas",
      description:
        "Produzimos um vasto leque de franjas têxteis ornamentativas. Somos uma referência neste tipo de produtos e oferecemos uma vasta gama de modelos e cores.",
      image1: "/images/Fringe/franja9.png",
      aplications: [
        "Colchas",
        "Cobertas",
        "Atoalhados",
        "Vestuário",
        "Panos",
        "Outros acessórios de moda",
      ],
      image2: "/images/Fringe/franja7.png",
    },
    {
      id: 3,
      name: "Penachos",
      description:
        "Elegantes e totalmente “handcrafted”, os penachos que fabricamos são feitos e sujeitos a um elevado controlo de qualidade.",
      image1: "/images/Tassel/penachos5.png",
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
    },
    {
      id: 4,
      name: "Rendas",
      description:
        "Comercializamos rendas de diferentes tipos de materiais e com os mais diversos designs. Consulte-nos para obter mais informações acerca dos diversos modelos.",
      image1: "/images/Lace/renda4.png",
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
    },
    {
      id: 5,
      name: "Pompons",
      description:
        "Produzimos e comercializamos pompons 100% hand-craft por profissionais locais. Tamanhos e com as mais diversas cores. Este tipo de de acabamento têxtil dá um toque requintado a qualquer peça.",
      image1: "/images/Pompons/pompons8.png",
      aplications: [
        "Colchas",
        "Cobertas",
        "Cobertores",
        "Almofadas",
        "Vestuário",
        "Outros acessórios de moda",
      ],
      image2: "/images/Pompons/pompons2.png",
    },
    {
      id: 6,
      name: "Xailes",
      description:
        "É com orgulho que fabricamos o acabamento tradicional para xailes, um acessório de vestuário que tanto define a cultura portugues. Somos especializados nos acabamento dos típicos lenços minhotos.",
      image1: "/images/Xailes/xaile4.png",
      aplications: ["Vestuário", "Outros acessórios de moda"],
      image2: "/images/Xailes/xailes.png",
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
        <img src={product.image1} alt="" />
      </section>
      <section className="product-applications">
        <img src={product.image2} alt="" />
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
