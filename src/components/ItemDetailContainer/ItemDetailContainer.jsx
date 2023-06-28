import React from "react"
import { useState } from 'react'
// import '.Itemlistcontainer.css'
import { useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const  [loading, setLoading] = useState (true)
    const {itemId} = useParams ()
    console.log (item)
    console.log(itemId)

    useEffect(() => {
        setLoading (true)
        pedirDatos()
            .then((res) => {
            setItem (res.find ((prod)=> prod.id === Number (itemId)))
            })
            .catch((err) =>  console.log(err))
            .finally (() => setLoading (false))
            }, [itemId])

    return (
        <div className='container my-5'>
            <ItemList items={productos} />
        </div>
    )

}


export default ItemDetailContainer