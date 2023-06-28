import React from "react"
import { useState } from 'react'
// import '.Itemlistcontainer.css'
import { useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const categoryId = useParams ()
    console.log (categoryId)

    useEffect(() => {
        pedirDatos()
            .then((res) => {
               if (!categoryId){
                setProductos(res)
               }  else {
                setProductos (res.filter ((item) => item.category === categoryId))
               }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryId])
    return (
        <div className='container my-5'>
            <ItemList items={productos} />
        </div>
    )

}


export default ItemListContainer