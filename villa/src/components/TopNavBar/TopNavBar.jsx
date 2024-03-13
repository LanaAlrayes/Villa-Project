/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import {
  FaMap,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function NavBar({ email, location }) {
  return (
    <>
      <Navbar expand="lg" style={{ height: "2rem"}}>
        <Container>
          <Navbar.Brand>
            {" "}
            <IoMdMail style={{ color: "#ff0000" }} />
            <span className="fs-6 fw-semibold text-body-secondary m-2">
              {email}
            </span>
          </Navbar.Brand>
          <div className="vr mt-3 mx-4" />
          <Navbar.Brand>
            {" "}
            <FaMap style={{ color: "#ff0000" }} />
            <span className="fs-6 fw-semibold text-body-secondary m-2">
              {location}
            </span>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link>
                <FaFacebook />
              </Nav.Link>
              <Nav.Link>
                <FaTwitter />
              </Nav.Link>
              <Nav.Link>
                <FaLinkedin />
              </Nav.Link>
              <Nav.Link>
                <FaInstagram />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavDropdown.Divider
        className="m-3"
        style={{ height: "1px", width: "98%", background: "#999999" }}
      />
    </>
  );
}

export default NavBar;
