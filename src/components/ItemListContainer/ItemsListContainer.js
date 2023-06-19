const ItemListContainer = ({ greeting }) => {
    return (

        <div>
            <h1 className="saludo">
                {greeting}
            </h1>
            <p className="leyenda"> 
                Inscripciones abiertas para los cursos!!!
            </p>
            <ul className="lista">
                <li className="cursosLista">@ATPS: Atención en Trauma y Urgencias para Profesionales de la Salud</li>
                <li className="cursosLista">@ATC: Atención en Trauma y Urgencias para la Comunidad</li>
                <li className="cursosLista">@ATAL: Atención en Trauma y Urgencias para Alumnos</li>
            </ul>
        </div>

    )


}
export default ItemListContainer