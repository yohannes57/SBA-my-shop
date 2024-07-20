import React, { useContext, useReducer, useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useStateFromContext } from "../../stateProvider/StateProvider";
import { Link } from "react-router-dom";
function Header() {
  // const [user,setUser]=useState('yonni');
  const [{ user, cart }, dispatch] = useStateFromContext();
  // console.log(cart.length);
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="brand-animation">
            <Link to="/home">Yam-my-shop</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/admin">
                Dashboard
              </Nav.Link>
              <NavDropdown title="Clothes" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/women">
                  women
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/men">
                  Men
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shifon">
                  Shifon
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/products">
                  Products
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="profiles">
              <Nav.Link as={Link} to="/signup">
                singUp
              </Nav.Link>
              <Nav.Link as={Link} to="/user">
                {user}
              </Nav.Link>
              <Nav.Link as={Link} to="/orders">
                cart:{cart.length}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
