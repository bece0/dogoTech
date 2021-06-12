import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Navi() {
    return (
        <div>
          <Navbar bg="light">
                    <Navbar.Brand href="#home"> 
                    <img src="dogo_logo.png" className="d-inline-block align-top" />
                    </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>              
                        <Nav.Link href="#sepet">Sepetim</Nav.Link>
                        <NavDropdown title="Hesabım" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#siparisler">Siparişler</NavDropdown.Item>
                            <NavDropdown.Item href="#">Çıkış</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>           
        </div>
    )
}
