import {useRef} from "react"
import { useSearchParams } from "react-router-dom"


const Buscador = () => {

    const [searchParams, setSearchParams]= useSearchParams ()

    const ref = useRef() 

    const handleSubmit = (e) => {
        e.preventDefault ()
        const value = ref.current.value

        if (value===''){
            setSearchParams({})
            return
        }
        searchParams ({
            search: value
        })
    } 

    const handleReset =() =>{
        setSearchParams ({})
    }



    return (
        <form className="p-3" onSubmit={handleSubmit}>
            <input ref={ref} className="form-control" type= "text" />
            <button  type="submit" className="btn  btn-success">Buscar</button>
            <button onClick={handleReset} type="reset" className="btn  btn-light">Borrar</button>
        </form>
    )
}

export default Buscador