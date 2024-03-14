/* eslint-disable react/prop-types */
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function CardView({ title1, title2, title3, title4, sub, sub1, sub2, sub3 }) {
  return (
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
  );
}

export default CardView;
