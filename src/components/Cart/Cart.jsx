import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import {FaTrashAlt} from "react-icons/fa"
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart, totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext (CartContext)

if (cart.length===0){
return (
    <div className="container my-5">
        <h2>Tu Carrito está Vacío</h2>
        <hr/>
        <p>Conocé nuestros Cursos y Productos!</p>
        <Link className="btn btn-primary" to="/"> Ir a la tienda</Link>
    </div>
)

}

    return (
        <div className="col-3 m-5 shadow p-3 mb-5 bg-white rounded">
            <h2>Detalle de Compra</h2>
            <hr/>
            {
                    cart.map ((prod) =>(
                    <div key={prod.id} >
                        <h4 >  {prod.nombre}</h4>
                        <img className="imagen-card"  src= {prod.img} alt={prod.nombre}/>
                        <p>Precio: ${prod.precio} </p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <button className="btn btn-danger p-2 m-1 mx-3" onClick= {() => eliminarDelCarrito (prod.id)}> <FaTrashAlt/> </button>
                        <hr/>
                    </div>
                ))
            }
            <div>
                <h5>Total: $ {totalCompra ()} </h5>
                <hr />
                <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
                <Link className="btn btn-success mx-2" to= "/checkout">Terminar mi Compra</Link>
                </div>  
                </div>  
    )
            }

export default Cart