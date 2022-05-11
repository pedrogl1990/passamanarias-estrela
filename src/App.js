import "./components/navbar/Navbar.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import MissionValues from "./components//mission/MissionValues";
import History from "./components/history/History";
import Contact from "./components/contact/Contact";
import Products from "./components/products/Products";
import EachProduct from "./components/products/EachProduct";
import Cookies from "./components/outros/Cookies";
import Politica from "./components/outros/Politica";
import Termos from "./components/outros/Termos";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/sobrenos" element={<History />} />
          <Route path="/missao" element={<MissionValues />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/politica-privacidade" element={<Politica />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produtos/:id" element={<EachProduct />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
