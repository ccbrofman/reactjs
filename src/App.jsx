
// import './App.css'


import  React  from "react";
import { CartProvider } from './context/CartContext';
import { AuthContextProvider } from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css'


// import ViaAerea from "./components/ViaAerea/ViaAerea"
// import ControlDelSangrado from "./components/ControlDelSangrado/ControlDelSangrado"
// import Extricacion from "./components/Extricacion/Extricacion"


function App() {



  return (
    <AuthContextProvider>
    <CartProvider>
      <AppRouter/>
    </CartProvider>
    </AuthContextProvider>

  )
}

export default App;
