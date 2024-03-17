/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Buttons from "../Button/Button";
import { NavData } from "../../tools/Json";

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
              {NavData.map((element, index) => {
                return (
                  <Navbar.Brand key={index}>
                    <Nav.Link className="fs-6 text-dark fw-medium m-4" href="#">
                      {element.desc}
                    </Nav.Link>
                  </Navbar.Brand>
                );
              })}
            </Nav>
          </Navbar.Collapse>
          <Buttons title="Schedule a visit" />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
