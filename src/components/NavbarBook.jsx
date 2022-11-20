import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

const NavbarBook = () => {

    return (
        <Navbar expand="lg" variant="dark">
            <Container style={{ backgroundColor: '#000' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Navbar.Brand class="h3 text-white" style={{ backgroundColor: '#000' }}>Lista de Livros</Navbar.Brand>
                </Link>
                <Link to="/favorites" style={{ textDecoration: 'none' }}>
                    <Navbar.Brand>Seus Favoritos</Navbar.Brand>
                </Link>
            </Container>
        </Navbar >
    );
}

export default NavbarBook;
