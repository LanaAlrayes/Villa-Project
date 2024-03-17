/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Buttons from "../Button/Button";

// import { NavLink } from "react-router-dom";

function NavBar({ title }) {
  return (
    <>
      <Navbar expand="lg" className="m-4">
        <Container>
          <Navbar.Brand href="#" className="text-uppercase fs-3 fw-bold">
            {title}
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Navbar.Brand>
                <Nav.Link className="fs-6 fw-medium m-4" href="/">Home</Nav.Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Nav.Link className="fs-6 fw-medium m-4" href="/properties">Properties</Nav.Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Nav.Link className="fs-6 fw-medium m-4" href="/propertyDetails">Property Details</Nav.Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Nav.Link className="fs-6 fw-medium m-4" href="/contactUS">Contact US</Nav.Link>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
          <Buttons title="Schedule a visit" />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
