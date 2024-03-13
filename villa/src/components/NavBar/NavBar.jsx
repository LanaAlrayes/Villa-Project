import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// import { IoMdMail } from "react-icons/io";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import TopNavBar from "src/components/TopNavBar/TopNavBar.jsx"

function NavBar() {
  
  return (
    <>
      {/* <TopNavBar /> */}
      <Navbar expand="lg" className="m-2">
        <Container>
          <Navbar.Brand href="#" className="text-uppercase fs-3 fw-bold">
            villa
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end mx-4">
            <Nav>
              <Nav.Link className="mx-4" href="#">
                Home
              </Nav.Link>
              <Nav.Link className="mx-4" href="#">
                Properties
              </Nav.Link>
              <Nav.Link className="mx-4" href="#">
                Property Details
              </Nav.Link>
              <Nav.Link className="mx-4" href="#">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button
            variant="dark"
            className="mt-2"
            style={{ borderRadius: "50px" }}
          >
             {/* <Button
              variant="danger"
              className="justify-content-start"
              style={{ borderRadius: "50px" }}
            >
              <IoMdMail />
            </Button>{" "} */}
            Schedule a visit
          </Button>{" "}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
