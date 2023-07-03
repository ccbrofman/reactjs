import {React} from "react"
import useMobile from "../hooks/useMobile";
import { useProductos } from "../hooks/UseProductos";
import { useEffect } from "react";

const Nosotros = () => {
const isMobile = useMobile ()

const clickear = () => {
    console.log ("click")
}
useEffect (() => {
    window.addEventListener  ('Click ', clickear )

    return () => {
        window.removeEventListener ('click', clickear)

    }
},[] )
return (
    <div ClassName= "container my-5">
        <h2>
            Nosotros
        </h2>
        <hr/>
    {
        isMobile ? <h3>Estamos en Mobile</h3> : <p>Estamos en Desk </p>
    }
    </div>
)


}
export default Nosotros