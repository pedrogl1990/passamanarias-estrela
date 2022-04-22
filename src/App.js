import "./components/Navbar.css";
import "./App.css";

import Navbar from "./components/Navbar";
import ContentHome from "./components/ContentHome";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <ContentHome />
      </main>
      <Footer />
    </div>
  );
}

export default App;
