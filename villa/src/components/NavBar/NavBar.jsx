/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Buttons from "../Button/Button";

function NavBar({title}) {
  const json = [
    { desc: "Home" },
    { desc: "Properties" },
    { desc: "Property Details" },
    { desc: "Contact Us" },
  ];
  return (
    <>
      <Navbar expand="lg" className="m-2">
        <Container>
          <Navbar.Brand href="#" className="text-uppercase fs-3 fw-bold">
            {title}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end mx-4">
            <Nav>
              {json.map((element, index) => {
                return (
                  <din key={index}>
                    <Nav.Link className="mx-4" href="#">
                      {element.desc}
                    </Nav.Link>
                  </din>
                );
              })}
            </Nav>
          </Navbar.Collapse>
          <Buttons />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
