import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import TopNavBar from "src/components/TopNavBar/TopNavBar.jsx"



function NavBar() {
  return (
    <>
    {/* <TopNavBar /> */}
    <Navbar expand="lg">
      <Container style={{ height: '5rem' }}>
        <Navbar.Brand href="#">VILLA</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Nav className="">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Properties</Nav.Link>
            <Nav.Link href="#">Property Details</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary">Schedule a visit</Button>{' '}
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;