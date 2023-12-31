import React from "react"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from './assets/logo.png'
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
// import Buscador from "../../Buscador"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"





function BasicExample() {
const {user,logout} = useContext (AuthContext)


    return (
        <Navbar className="NavBar" >
            <Container>
                <div className="logo-container">
                    <img src={logo} alt="logopectu" className="logo"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link className="navlink" style={{ color: 'white'}}  href="/App">Inicio</Nav.Link>
                        <Nav.Link className="navlink"   style={{ color: 'white'}} href="/Nosotros">Nosotros</Nav.Link>
                        <Nav.Link  className="navlink"   style={{ color: 'white'}} href="/Cursos">Cursos</Nav.Link>
                        <NavDropdown className="dropmenu" title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item  href="/productos/Extricacion">Extricación</NavDropdown.Item>
                            <NavDropdown.Item   href="/productos/ControlDelSangrado"> Control del Sangrado</NavDropdown.Item>
                            <NavDropdown.Item  href="/productos/ViaAerea">Vía Aérea</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </div>
                {/* <Buscador/> */}
            </Container>
            <CartWidget />
            <div className="sesion"> 
            <p className="mensaje" > Bienvenid@: {user.email} </p>
            <button className="btn btn-danger my-2 mx-3" onClick={logout}>Salir</button>
            </div>

        </Navbar>


    );
}

export default BasicExample;