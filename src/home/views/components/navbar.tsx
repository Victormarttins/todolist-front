import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Avatar from './avatar-button';


export default function NavApp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">ToDo List</Navbar.Brand>
           <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Pesquisar" className="me-2" aria-label="Search"/>
                            <Avatar />
                    </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );
}

