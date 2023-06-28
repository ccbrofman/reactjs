import React from "react"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from './assets/logo.png'
import NavBar from './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"



function BasicExample() {
    return (
        <Navbar className="NavBar" expand="lg">
            <Container>
                <div className="logo-container">
                    <img src={logo} alt="logopectu" className="logo"/>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link  style={{ color: 'white'}}  href="/App">Inicio</Nav.Link>
                        <Nav.Link   style={{ color: 'white'}} href="/Nosotros">Nosotros</Nav.Link>
                        <Nav.Link   style={{ color: 'white'}} href="/Cursos">Cursos</Nav.Link>
                        <NavDropdown  style={{ color: 'white'}}  title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item   href="/productos/extricacion">Extricación</NavDropdown.Item>
                            <NavDropdown.Item   href="/productos/controlsangrado">
                                Control del Sangrado
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/productos/viaaerea">Vía Aérea</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>
    );
}

export default BasicExample;