import "./View.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
// import Badge from "react-bootstrap/Badge";

function View() {
  const title = [
    { title: "43", sub: "Buildings Finished now" },
    { title: "12", sub: " Years Experience " },
    { title: "24", sub: "Awwards Won 2023 " },
  ];
  return (
    <Container>
      <Row xs={1} md={2} className="justify-content-between m-5">
        {title.map((element, index) => (
          <Col key={index} className="w-25">
            <Card border="light" className="px-5 py-2 bg-danger-subtle">
              <Stack direction="horizontal" gap={1}>
                <h1 className="fw-bolder text-danger">{element.title}</h1>
                <Card.Body>
                  <Card.Subtitle>{element.sub}</Card.Subtitle>
                </Card.Body>
              </Stack>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default View;
