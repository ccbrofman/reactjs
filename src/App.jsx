
import './App.css'
import React from "react"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemsListContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Nosotros from "./components/Nosotros/Nosotros"
import Cursos from "./components/Cursos/Cursos"
import viaaerea from "./components/Via Aerea/viaaerea"
import controlsangrado from './components/Control del sangrado/controlsangrado'
import extricacion from './components/Extricacion/extricacion'


function App() {
  return (

    <BrowserRouter>

    <NavBar />

    <Routes>
      <Route path="" element={<ItemListContainer  />}/>
      <Route path="/Cursos" element={<Cursos/>}/>
      <Route path="/Nosotros" element={<Nosotros/>}/>
      {/* <Route path="" element= {<Extricacion/>}/>
      <Route path="" element= {<Controlsangrado/>}/>
      <Route path="" element= {<Viaaerea/>}/> */}
      <Route path="*" element = { <Navigate to ={"/"}/>}/>



    </Routes>


    </BrowserRouter>
 
   
  );
}

export default App;
