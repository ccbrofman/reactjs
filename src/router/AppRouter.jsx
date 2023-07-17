import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemsListContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nosotros from "../components/Nosotros/Nosotros";
import Cursos from "../components/Cursos/Cursos";
// import Error404 from "../components/Error404/Error404";
import { useContext } from "react";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from "../components/Cart/Cart";
import LoginScreen from "../components/Auth/LoginScreen";
import RegisterScreen from '../components/Auth/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import Checkout from '../components/CheckOut/Checkout'



const AppRouter =() => {
    const {user} = useContext (AuthContext)
    
    return (

<BrowserRouter>
    {user.logged
    ? <> 


        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="*" element={<Navigate to={"/"} />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </>
    :
      <Routes>
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen />}/>
        <Route path='*' element= {<Navigate to = "/login"/>} />
      </Routes>
      }
      </BrowserRouter>

 


    )

}
export default AppRouter