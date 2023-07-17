


const ItemCount =({max, handleAgregar,cantidad, setCantidad}) => {

const handleSumar= ( ) =>{
    cantidad < max && setCantidad (cantidad + 1)

}
const handleRestar =()=>{
    cantidad > 1 && setCantidad (cantidad - 1)
}

    return  (  
        <>
        <div> 
        <button className =  {cantidad ===1? "my-2 btn btn-danger": " my-2 btn btn-light"} onClick={handleRestar} disabled= {cantidad===1} > - </button>
        <span className= "mx-3"> {cantidad} </span>
 
        <button className= {cantidad===max ? "btn btn-danger": "btn btn-light"} disabled= {cantidad===max}
        onClick={handleSumar} 
        > + </button>
    </div>
            <span className= "m-auto"><button className="btn btn-success my-4 mx-3" onClick={handleAgregar} > Comprar </button></span>

            </>
    )


}
export default ItemCount