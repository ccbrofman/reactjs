import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import {FaTrashAlt} from "react-icons/fa"

const Cart = () => {
    const {cart, totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext (CartContext)
    return (
        <div className="container my-5">
            <h2>Detalle de Compra</h2>
            <hr/>
            {
                cart.map ((prod) =>(
                    <div key={prod.id} >
                        <h4>{prod.nombre}</h4>
                        <img src= {prod.img} alt={prod.nombre}/>
                        <p>Precio: ${prod.precio} </p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <button className="btn btn-danger" onClick= {() => eliminarDelCarrito (prod.id)}> <FaTrashAlt/> </button>
                        <hr/>
                    </div>
                ))
            }
            <div>
                <h5>Total: $ {totalCompra ()} </h5>
                <hr />
                <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
            </div>
        </div>
    )
}


export default Cart