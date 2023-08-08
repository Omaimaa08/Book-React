import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';

const NavigationBar = (props) => {
  console.log(props)
  return (
    <Navbar expand="lg" variant="dark" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="#" >{props.companyname}</Navbar.Brand>
          Navigation Bar
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Information" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#Contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#Feedback">Feedback</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#more">More Services</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ minWidth: '200px' }}
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
