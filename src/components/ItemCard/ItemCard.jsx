import React from "react"
import {Link} from "react-router-dom"
import './ItemCard.css'

const ItemCard =({id, stock, nombre, precio, category, img}) => {

    return (

            <div  className='col-3 m-2 shadow p-3 mb-5 bg-white rounded' > 
                <h4>{nombre} </h4>  
                <img className='imagen-card' src={img} alt={img}/>
                {stock<= 5 && <p style= {{fontWeight:700, color:'red' }}  >Quedan sólo {stock} unidades! </p> }
                <p>Precio: $ {precio} </p>
                <p>Categoría:{category}</p>
                <Link className='btn btn-primary my-2 mx-1' to= {`/detail/${ id }`} >Ver más</Link>
                </div>
    )
}
export default ItemCard