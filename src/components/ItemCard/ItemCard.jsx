import React from "react"

const ItemCard =({nombre, precio, categoria, img}) => {

    return (

            <div  className='col-3 m-2'> 
                <h4>{nombre} </h4>  
                <img src={img} alt={img}/>
                <p>Precio: $ {precio} </p>
                <p>Categoría:{categoria}</p>
                <button className='btn btn-primary'>Ver más</button>
                </div>
    )
}
export default ItemCard