import React from "react"
import { useState } from 'react'
// import '.Itemlistcontainer.css'
import { useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
// import {image} from "image.js"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const  [loading, setLoading] = useState (true)
    const [searchParams] = useSearchParams ()
    console.log (searchParams.get ("search"))

    const {categoryId} = useParams ()
    console.log (categoryId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
               if (!categoryId){
                setProductos(res)
               }  else {
                setProductos (res.filter ((item) => item.category === categoryId))
               }
            })
            .catch((err) => console.log(err))
            .finally (()=> setLoading (false))
            },[categoryId])
    return (
        <div className='container my-5'>
            {
            loading
            ? <h2> Cargando </h2>
            :<ItemList items={productos} />
            }

        </div>
    )

}


export default ItemListContainer