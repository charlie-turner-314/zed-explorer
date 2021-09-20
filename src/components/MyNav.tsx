import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Home from "../views/Home";
import Horses from "../views/Horses";
import Races from "../views/Races";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Stable from "../views/Stable";

const MyNav = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ZΞD Explorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/horses">
                <Nav.Link>Horses</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/races">
                <Nav.Link>Races</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/stable">
                <Nav.Link>Stable</Nav.Link>
              </LinkContainer>
              {/* <NavLink href="#link">Stables</NavLink> */}
              <NavDropdown title="Deep Dive" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Odds</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Classes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  'U' Shaped Vs 'A' Shaped Horses
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Breeding</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="name, id, stable"
                className="mr-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/horses">
          <Horses />
        </Route>
        <Route path="/races">
          <Races />
        </Route>
        <Route path="/stable/:stable?">
          <Stable />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default MyNav;
