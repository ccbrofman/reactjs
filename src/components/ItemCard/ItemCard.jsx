import React from "react"
import {Link} from "react-router-dom"

const ItemCard =({nombre, precio, categoria, img}) => {

    return (

            <div  className='col-3 m-2'> 
                <h4>{nombre} </h4>  
                <img src={img} alt={img}/>
                <p>Precio: $ {precio} </p>
                <p>Categoría:{categoria}</p>
                <Link className='btn btn-primary' to= {'/detail/${id}'} >Ver más</Link>
                </div>
    )
}
export default ItemCard