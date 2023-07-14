
// import './App.css'
import  React  from "react";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nosotros from "./components/Nosotros/Nosotros";
import Cursos from "./components/Cursos/Cursos";
import Error404 from "./components/Error404/Error404";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from "./components/Cart/Cart";


// import ViaAerea from "./components/ViaAerea/ViaAerea"
// import ControlDelSangrado from "./components/ControlDelSangrado/ControlDelSangrado"
// import Extricacion from "./components/Extricacion/Extricacion"


function App() {


  return (
    <CartProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
