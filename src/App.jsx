
import './App.css'
import {React} from "react"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemsListContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Nosotros from "./components/Nosotros/Nosotros"
import Cursos from "./components/Cursos/Cursos"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import ViaAerea from "./components/ViaAerea/ViaAerea"
// import ControlDelSangrado from "./components/ControlDelSangrado/ControlDelSangrado"
// import Extricacion from "./components/Extricacion/Extricacion"


function App() {
  return (

    <BrowserRouter> 

    <NavBar />

    <Routes>
      <Route path="" element={<ItemListContainer />}/>
      <Route path="/detail/:itemId" element= {<ItemDetailContainer/>}/>
      <Route path="/Cursos" element={<Cursos/>}/>
      <Route path="/Nosotros" element={<Nosotros/>}/>
      <Route path="/productos/:categoryId" element= {<ItemListContainer/>} />
      <Route path="*" element = { <Navigate to ={"/"}/>}/>



    </Routes>


    </BrowserRouter>
 
   
  );
}

export default App;
