import CartWidget from "../CartWidget/CartWidget";
import pectu from './assets/logo_FINAL_para registro-02.png';

const NavBar = () => {

    return (
        <nav >
            <div className="header">
            <img className="pectulogo" src= {pectu} alt="logopectu"/>
            <h3 className="header__titulo" >
                Programa de Educación Contínua en Trauma y Urgencias </h3>

            </div>


            <div className="header__container">
                <button className="header__list">@ATPS</button>
                <button className="header__list" >@ATC</button>
                <button className="header__list" >@ATAL</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;