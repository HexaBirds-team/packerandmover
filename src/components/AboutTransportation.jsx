import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ConsterContainer from "../assets/images/webp/ConsterContainer.webp";
import Verified from "./Verified";

function AboutTransportation() {
  return (
    <>
      <Container className="py-5 my-lg-4">
        <Row className=" align-items-center justify-content-lg-between flex-column-reverse flex-lg-row">
          <Col xs={12} lg={7} className="pt-5">
            <h2 className=" ff_rufina fs_4xl fw_bold text_dark">
              Welcome to the{" "}
              <span className=" text_secondary">MyLogistics</span> And{" "}
              <span className=" text_secondary">Transportation</span>
            </h2>
            <h3 className=" ff_rufina fs_2xl fw_regular text_primary pt-3">
              We provide the best suggestions for Logistics and Transposition in
              town Go beyond logistics, make the world go round and
              revolutionize business.
            </h3>
            <p className=" ff_opensans fs_md fw_regular text_dark py-3">
              Mylogistics is a Leading Provider of Quality Packers And Movers in
              world. With our Experience of over 25+ Years in the Industry, the
              company is highly skilled and is equipped with the best of
              facilities to match all High Quality Moving Standards.
            </p>
            <p className=" ff_opensans fs_md fw_regular text_dark">
              We constantly delivering the best is taken care of with the help
              of our Products Durability, Products Comfort and Products
              Attractiveness.We offer a wide range of Moving And Packing,
              logistics, transportation Upholestery Services in all over the
              world.
            </p>
          </Col>
          <Col xs={12} sm={8} lg={3} className="zindex_n_1 position-relative">
            <div className="after_secondary me-4 pe-2 ">
              <img
                className="w-100"
                src={ConsterContainer}
                alt="ConsterContainer"
              />
            </div>
          </Col>
        </Row>
        <Verified />
      </Container>
    </>
  );
}

export default AboutTransportation;
