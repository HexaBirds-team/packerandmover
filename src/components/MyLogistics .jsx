import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Workers from "../assets/images/webp/Workers.webp";
import Verified from "./Verified";

function MyLogistics() {
  return (
    <>
      <div className=" bg_light">
        <Container className="py-5 my-xl-5">
          <div className="text-center">
            <h2 className="ff_rufina fs_4xl fw_regular text_primary ">
              We provide the best suggestions for
              <span className="text_secondary">
                Logistics and Transposition
              </span>
              in town
              <span className="d-xl-block">
                Go beyond logistics, make the world go round and revolutionize
                business.
              </span>
            </h2>
            <span className="span_line d-inline-block"></span>
          </div>
          <Row className="pt-5 justify-content-between">
            <Col xs={12} lg={7} xl={6}>
              <h2 className="ff_rufina fs_5xl fw_bold text_primary">
                Welcome to the MyLogistics And Transportation
              </h2>
              <h3 className="ff_rufina fw_bold fs_3xl text_secondary">
                25+ Years of Experience in logistics services
              </h3>
              <p className="ff_opensans fs_md fw_regular text_dark mb-0 pt-3 pe-xl-5 me-xl-3">
                Mylogistics is a Leading Provider of Quality Packers And Movers
                in world. With our Experience of over 25+ Years in the Industry,
                the company is highly skilled and is equipped with the best of
                facilities to match all High Quality Moving Standards.
              </p>
              <p className="ff_opensans fs_md fw_regular text_dark pe-xl-5 me-xl-3">
                We constantly delivering the best is taken care of with the help
                of our Products Durability, Products Comfort and Products
                Attractiveness.We offer a wide range of Moving And Packing,
                logistics, transportation Upholestery Services in all over the
                world.
              </p>
            </Col>
            <Col xs={12} lg={5}>
              <img className="w-100 pt-4 pt-lg-0" src={Workers} alt="Workers" />
            </Col>
          </Row>
          <Verified />
        </Container>
      </div>
    </>
  );
}

export default MyLogistics;
