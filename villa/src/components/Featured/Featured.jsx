/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

function Featured({
  title,
  title1,
  title2,
  title3,
  title4,
  decs,
  decs1,
  question1,
  question2,
  question3,
  sub,
  sub1,
  sub2,
  sub3,
}) {
  return (
    <Container>
      <Row className="my-5">
        <Col xs={4}>
          <Image src="featured.jpg" />
          <Badge
            className="bg-danger w-25 z-2 translate-middle"
            style={{ borderRadius: "50%", height: "100px" }}
          >
            <Image className="pt-3" src="featured-icon.png" />
          </Badge>
        </Col>
        <Col xs={5}>
          <din className="text-danger fw-bolder text-uppercase d-inline-flex">
            <span
              className="vr mx-2"
              style={{ width: "3px", height: "20px" }}
            />
            <span>{title}</span>
          </din>
          <h1 className="my-5 fw-bold">
            {decs} <br /> {decs1}
          </h1>
          <Accordion className="my-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{question1}</Accordion.Header>
              <Accordion.Body>
                Get <span className="fw-bolder">the best villa</span> website
                template in HTML CSS and
                <br /> Bootstrap for your business. TemplateMo provides you the{" "}
                <br />
                <Card.Link className="text-decoration-none">
                  best free CSS templates
                </Card.Link>{" "}
                in the world. Please tell your <br /> friends about it.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>{question2}</Accordion.Header>
              <Accordion.Body>
                Dolor <span className="fw-bolder">almesit amet</span>,
                consectetur adipiscing elit, sed <br /> does not eiusmod tempor
                incididunt ut labore consectetur <br />{" "}
                <span className="text-danger">adipiscing</span> elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>{question3}</Accordion.Header>
              <Accordion.Body>
                Dolor <span className="fw-bolder">almesit amet</span>,
                consectetur adipiscing elit, sed <br /> does not eiusmod tempor
                incididunt ut labore consectetur <br />{" "}
                <span className="text-danger">adipiscing</span> elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col xs={3}>
          <Card style={{ width: "20rem" }} className="shadow px-4 py-4">
            <Stack direction="horizontal" gap={3}>
              <Image src="info-icon-01.png" />
              <Card.Body>
                <Card.Title className="fw-bolder">{title1}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-normal">
                  {sub}
                </Card.Subtitle>
              </Card.Body>
            </Stack>
            <hr />
            <Stack direction="horizontal" gap={3}>
              <Image src="info-icon-02.png" />
              <Card.Body>
                <Card.Title className="fw-bolder">{title2}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-normal">
                  {sub1}
                </Card.Subtitle>
              </Card.Body>
            </Stack>
            <hr />
            <Stack direction="horizontal" gap={3}>
              <Image src="info-icon-03.png" />
              <Card.Body>
                <Card.Title className="fw-bolder">{title3}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-normal">
                  {sub2}
                </Card.Subtitle>
              </Card.Body>
            </Stack>
            <hr />
            <Stack direction="horizontal" gap={3}>
              <Image src="info-icon-04.png" />
              <Card.Body>
                <Card.Title className="fw-bolder">{title4}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-normal">
                  {sub3}
                </Card.Subtitle>
              </Card.Body>
            </Stack>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Featured;
