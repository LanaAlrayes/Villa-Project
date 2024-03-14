/* eslint-disable react/prop-types */
import CardView from "../CardView/CardView";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Question from "../Question/Question";

function Featured({ title, decs, decs1 }) {
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
          <Question
            question1="Best useful links ?"
            question2="How does this work ?"
            question3="Why is Villa Agency the best ?"
          />

        </Col>
        <CardView
          title1="250 m2"
          sub="Total Flat Space"
          title2="Contract"
          sub1="Contract Ready"
          title3="Payment"
          sub2="Payment Process"
          title4="Safety"
          sub3=" 24/7 Under control"
        />
      </Row>
    </Container>
  );
}

export default Featured;
