import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Product from "./views/Product";
import Profile from "./views/Profile";
import Footer from "./components/Footer";
import AuthGuard from "./components/AuthGuard";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="p/:productName" element={<Product />} />
        <Route
          path="profile/*"
          element={<AuthGuard component={Profile}/>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
