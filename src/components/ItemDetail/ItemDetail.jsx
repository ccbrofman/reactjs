import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({id, nombre, precio, category, descripcion, img, stock}) => {

    return (

        <div className="container my-5">
            <h2>
                {nombre}
            </h2>
            <img src={img} alt= {nombre}/>
            <p> {descripcion} </p>
            <h4>Precio: $ {precio} </h4>
            <br/>
            <small>Categoría: {category} </small>

            <ItemCount
            max={stock} />


        </div>

    )


}
export default ItemDetail