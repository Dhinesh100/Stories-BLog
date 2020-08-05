import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" fixed="top" variant="dark">
                <Navbar.Brand href="#">Stories Blog</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Genres" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#comic">Comic</NavDropdown.Item>
                        <NavDropdown.Item href="#romance">Romance</NavDropdown.Item>
                        <NavDropdown.Item href="#horror">Horror</NavDropdown.Item>
                        <NavDropdown.Item href="#thriller">Thriller</NavDropdown.Item>
                        <NavDropdown.Item href="#mystery">Crime/Mystery</NavDropdown.Item>
                        <NavDropdown.Item href="#fiction">Science Fiction</NavDropdown.Item>
                        <NavDropdown.Item href="#fantasy">Fantasy</NavDropdown.Item>
                        <NavDropdown.Item href="#young">Young Adult</NavDropdown.Item>
                        <NavDropdown.Item href="#historical">Historical</NavDropdown.Item>
                        <NavDropdown.Item href="#family">Family Saga</NavDropdown.Item>
                        <NavDropdown.Item href="#magic">Magic</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#aboutus">About Us</Nav.Link>
                    <Nav.Link href="#contactus">Contact Us</Nav.Link>
                    <Nav.Link href="#publish">Publish</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 justifycontent-right" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
}

export default Header;