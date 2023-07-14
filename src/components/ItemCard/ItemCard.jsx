import React from "react"
import {Link} from "react-router-dom"
import './ItemCard.css'

const ItemCard =({id, nombre, precio, category, img}) => {

    return (

            <div  className='col-3 m-2'> 
                <h4>{nombre} </h4>  
                <img className='imagen-card' src={img} alt={img}/>
                <p>Precio: $ {precio} </p>
                <p>Categoría:{category}</p>
                <Link className='btn btn-primary' to= {`/detail/${ id }`} >Ver más</Link>
                </div>
    )
}
export default ItemCard