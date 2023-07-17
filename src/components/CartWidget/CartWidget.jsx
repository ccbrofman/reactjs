import React from "react"
import cart from './assets/carrito.png'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartWidget = () => {
    const  {totalCantidad} = useContext (CartContext)



    return (
        <Link to="/cart " className="my-2 mx-4" style={{color: 'white'}}>
            <img className="carrito" src= {cart} alt="cart-w"/>
            {totalCantidad ()}
        </Link>

    )


}
export default CartWidget