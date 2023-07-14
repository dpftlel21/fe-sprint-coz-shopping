import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ProductList" element = {<ProductsList/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
