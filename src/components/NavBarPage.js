import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";

/* Componente presentacional */
const NavbarPage = () => (
  <Navbar bg="dark" variant="dark">
    <NavbarBrand>my-APP</NavbarBrand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/registro">Registro</Nav.Link>
    </Nav>
  </Navbar>
);
export default NavbarPage;
