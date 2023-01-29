import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Catalog />} />
          <Route path="/product" element={<ProductDetail />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
