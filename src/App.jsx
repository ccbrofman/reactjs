
import './App.css'
import React from "react"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemsListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nosotros from "./components/Nosotros/Nosotros"
import Cursos from "./components/Cursos/Cursos"


function App() {
  return (

    <BrowserRouter>

    <NavBar />

    <Routes>
      <Route path="" element={    <ItemListContainer greeting = {'Bienvenidos a PECTU'} />}/>
      <Route path="/Cursos" element={    <Cursos />}/>
      <Route path="/Nosotros" element={    <Nosotros />}/>

    </Routes>


    </BrowserRouter>
 
   
  );
}

export default App;
