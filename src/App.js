import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import { GlobalStyle } from "./components/styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ProductList" element={<ProductsList />} />
        </Routes>
        <Footer />
      </GlobalStyle>
    </>
  );
}

export default App;
