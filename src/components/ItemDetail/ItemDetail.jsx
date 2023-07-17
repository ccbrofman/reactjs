
import {useState,useContext} from "react"
import ItemCount from '../ItemCount/ItemCount'
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({ id, nombre, precio, category, descripcion, img, stock }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleAgregar = () => { 
        const item = {
            id,
            nombre,
            precio,
            category, 
            descripcion, 
            img,
            stock,
            cantidad
        }

        agregarAlCarrito(item)

    }

    const handleVolver = () => {
        navigate(-1)
    }

    return (

        <div className='col-3 m-2 shadow p-3 mb-5 bg-white rounded'>
            <h2>{nombre}</h2> 
            <img className='imagen-card' src={img} alt={nombre} />
            <p> {descripcion} </p>
            <h4>Precio: $ {precio} </h4>
            <br />
            <small>Categoría:{category} </small>

            { 
                isInCart(id) 
                    ? <Link className=' my-3 mx-3 btn btn-success' to="/cart"> Terminar mi compra </Link>
                    : <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        handleAgregar={handleAgregar}
                    />
                }
            <hr/>
            <button onClick={handleVolver} className=" my-3 mx-5 btn btn-primary"> Volver </button>

        </div>

    )


}
export default ItemDetail