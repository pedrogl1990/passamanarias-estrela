import "./components/Navbar.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ContentHome from "./components/ContentHome";
import MissionValues from "./components//mission/MissionValues";
import History from "./components/history/History";
import Products from "./components/products/Products";
import Fitas from "./components/products/Fitas";
import Franjas from "./components/products/Franjas";
import Penachos from "./components/products/Penachos";
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
          <Route path="/produtos" element={<Products />} />
          <Route path="/produtos/fitas" element={<Fitas />} />
          <Route path="/produtos/franjas" element={<Franjas />} />
          <Route path="/produtos/penachos" element={<Penachos />} />
          <Route path="/produtos/rendas" element={<Rendas />} />
          <Route path="/produtos/pompons" element={<Pompons />} />
          <Route path="/produtos/xailes" element={<Xailes />} />
          <Route path="/politica-privacidade" element={<Politica />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/termos" element={<Termos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;