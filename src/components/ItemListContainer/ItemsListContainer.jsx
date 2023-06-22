import { useState } from 'react'
// import '.Itemlistcontainer.css'
import { useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div className='container my-5'>
            <ItemList items={productos} />
        </div>
    )

}


export default ItemListContainer