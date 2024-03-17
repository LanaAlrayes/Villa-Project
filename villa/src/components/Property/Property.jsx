import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Property() {
  return (
    <Container>
      <div className="mt-5 text-center">
        <span className="text-danger fw-bold text-uppercase ">
          | PROPERTIES
        </span>
        <h1 className="fs-1 fw-bold mt-4">
          We Provide The Best
          <br />
          Property You Like
        </h1>
      </div>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="property-01.jpg" />
        <Card.Body>
          <strong className="me-5">Bootstrap</strong>
          <small>11 mins ago</small>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card is content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Property;
