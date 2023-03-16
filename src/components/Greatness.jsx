import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Greatness() {
  return (
    <>
      <div className="Greatness_Section py-5">
        <Container className="py-5 ">
          <Row className=" align-items-center">
            <Col xs={12} lg={9}>
              <h2
                className=" ff_rufina fs_8xl fw_bold text_light"
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="200"
              >
                Let us move you with honesty and greatness.
              </h2>
            </Col>
            <Col xs={12} lg={3}>
              <button
                className="border-0 py-2 px-4 ff_opensans fs_md fw_bold text_primary bg_secondary Know_button mt-4 m-lg-0"
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-offset="200"
              >
                Contact Us
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Greatness;
