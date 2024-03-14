/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

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
      <Navbar expand="lg" style={{ height: "3rem" }}>
        <Container>
          <Navbar.Brand>
            {" "}
            <IoMdMail className="link-danger" />
            <span className="fs-6 fw-semibold text-black-50 m-2">{email}</span>
          </Navbar.Brand>
          <div className="vr mt-3 mx-4" />
          <Navbar.Brand>
            {" "}
            <FaMap className="link-danger" />
            <span className="fs-6 fw-semibold text-black-50 m-2">
              {location}
            </span>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link>
                <Badge
                  className="fs-6 p-1 bg-secondary"
                  style={{ borderRadius: "50%", height: "30px", width: "30px" }}
                >
                  <FaFacebook />
                </Badge>
              </Nav.Link>
              <Nav.Link>
                <Badge
                  className="fs-6 p-1 bg-secondary"
                  style={{ borderRadius: "50%", height: "30px", width: "30px" }}
                >
                  <FaTwitter />
                </Badge>
              </Nav.Link>
              <Nav.Link>
                <Badge
                  className="fs-6 p-1 bg-secondary"
                  style={{ borderRadius: "50%", height: "30px", width: "30px" }}
                >
                  <FaLinkedin />
                </Badge>
              </Nav.Link>
              <Nav.Link>
                <Badge
                  className="fs-6 p-1 bg-secondary"
                  style={{ borderRadius: "50%", height: "30px", width: "30px" }}
                >
                  <FaInstagram />
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
}

export default NavBar;
