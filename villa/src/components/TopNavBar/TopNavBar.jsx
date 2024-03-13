/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';

import {
  FaMap,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function NavBar({email , location}) {
  return (
    <>
      <Navbar expand="lg" className="">
        <Container style={{ height: "3rem" }}>
          <Navbar.Brand href="#">
            {" "}
            <IoMdMail /> {email}
          </Navbar.Brand>
          <Navbar.Brand href="#">
            {" "}
            <FaMap /> {location}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="">
              <Nav.Link xs={6} md={4}>
                <FaFacebook roundedCircle />
              </Nav.Link>
              <Nav.Link xs={6} md={4}>
                <FaTwitter roundedCircle />
              </Nav.Link>
              <Nav.Link xs={6} md={4}>
                <FaLinkedin roundedCircle />
              </Nav.Link>
              <Nav.Link xs={6} md={4}>
                <FaInstagram roundedCircle />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavDropdown.Divider  style={{ height: "0.1rem", width: "98%", background:"#999999" }} />
    </>
  );
}

export default NavBar;
