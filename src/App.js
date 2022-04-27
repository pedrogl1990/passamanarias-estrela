import "./components/Navbar.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContentHome from "./components/ContentHome";
import MissionValues from "./components//mission/MissionValues";
import History from "./components/history/History";
import Contact from "./components/contact/Contact";
import Products from "./components/products/Products";
import Fitas from "./components/products/ribbons/Fitas";
import Franjas from "./components/products/fringe/FranjasContent";
import Penachos from "./components/products/tassel/Penachos";
import Rendas from "./components/products/Rendas";
import Pompons from "./components/products/Pompons";
import Xailes from "./components/products/Xailes";
import Cookies from "./components/outros/Cookies";
import Politica from "./components/outros/Politica";
import Termos from "./components/outros/Termos";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route index path="/" element={<ContentHome />} />
          <Route path="/sobrenos" element={<History />} />
          <Route path="/missao" element={<MissionValues />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/fitas" element={<Fitas />} />
          <Route path="/franjas" element={<Franjas />} />
          <Route path="/penachos" element={<Penachos />} />
          <Route path="/produtos/rendas" element={<Rendas />} />
          <Route path="/produtos/pompons" element={<Pompons />} />
          <Route path="/produtos/xailes" element={<Xailes />} />
          <Route path="/politica-privacidade" element={<Politica />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/produtos" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
