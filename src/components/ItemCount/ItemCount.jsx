import { useState } from "react"



const ItemCount =({max}) => {
const [cantidad, setCantidad] = useState (1)
const handleSumar= ( ) =>{
    cantidad < max && setCantidad (cantidad + 1)

}
const handleRestar =()=>{
    cantidad > 1 && setCantidad (cantidad - 1)
}

    return  (  
        <div>
        <button className = "btn btn-outline.primary" onClick={handleRestar}  > - </button>
        <span className= "mx-3"> {cantidad} </span>

        <button className="btn btn-primary" onClick={handleSumar} > + </button>
    </div>
    )


}
export default ItemCount