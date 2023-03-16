import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function OurVisionAndOurMission() {
  return (
    <>
      <Container className="py-5 my-4">
        <Row>
          <Col xs={12} md={6}>
            <h2
              className=" ff_rufina fw_bold fs_7xl textpr"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="100"
            >
              Our <span className=" text_secondary">Vision</span>
            </h2>
            <h3
              className=" ff_rufina fs_2xl fw_regular text_primary py-2 py-lg-4"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="300"
            >
              Lorem Ipsum is simply my text of the printing and Ipsum is the
              Ipsum is simply.
            </h3>
            <p
              className=" ff_opensans fw_regular fs_md text_dark"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="400"
            >
              Lorem Ipsum is simply my text of the printing and Ipsum is the
              Ipsum is simply.Lorem Ipsum is simply my text of the printing and
              Ipsum is the Ipsum is simply.
            </p>
          </Col>
          <Col xs={12} md={6} className="pt-4 pt-md-0">
            <h2
              className=" ff_rufina fw_bold fs_7xl textpr"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="100"
            >
              Our <span className=" text_secondary">Mission</span>
            </h2>
            <h3
              className=" ff_rufina fs_2xl fw_regular text_primary py-md-2 py-lg-4"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="300"
            >
              Lorem Ipsum is simply my text of the printing and Ipsum is the
              Ipsum is simply.
            </h3>
            <p
              className=" ff_opensans fw_regular fs_md text_dark"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="500"
            >
              Lorem Ipsum is simply my text of the printing and Ipsum is the
              Ipsum is simply.Lorem Ipsum is simply my text of the printing and
              Ipsum is the Ipsum is simply.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OurVisionAndOurMission;
