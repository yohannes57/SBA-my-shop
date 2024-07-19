import React, { useContext, useReducer, useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useStateFromContext } from "../../stateProvider/StateProvider";

function Header({state}) {
  // const [user,setUser]=useState('yonni');
  const {user,cart}=useStateFromContext;
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="brand-animation" href="/home">
            Yam-shope
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/admin">Dashboard</Nav.Link>
              <NavDropdown title="Clothes" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/women">women</NavDropdown.Item>
                <NavDropdown.Item href="/men">Men</NavDropdown.Item>
                <NavDropdown.Item href="/shifon">
                  Shifon
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/products">Products</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="profiles">
              <Nav.Link href="/signup">singUp</Nav.Link>
              <Nav.Link href="/user">{user}</Nav.Link>
              <Nav.Link href="/cart">cart:{cart}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;