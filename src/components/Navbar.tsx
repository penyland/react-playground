import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { SignOutButton } from "./SignOutButton";

export const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Singapore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <SignOutButton />
      </Container>
    </Navbar>
  );
}

export default NavBar;