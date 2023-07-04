import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Product from "./views/Product";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="p/:productName" element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
