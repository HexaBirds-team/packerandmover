import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WanHaiContainer from "../assets/images/webp/WanHaiContainer.webp";

function AboutLogistics() {
  return (
    <>
      <div className="linear_gradient_white_gray">
        <Container className="py-5">
          <Row className=" bg_dark justify-content-between align-items-center ">
            <Col xs={12} md={4} className="ps-0 pe-0 pe-md-2">
              <img
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="200"
                data-aos-delay="100"
                className=" w-100 mb-3"
                src={WanHaiContainer}
                alt="WanHaiContainer"
              />
            </Col>
            <Col xs={12} md={8} xl={7}>
              <h2
                className="ff_rufina fs_5xl fw_bold text_light pe-xl-5"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-offset="200"
                data-aos-delay="100"
              >
                Welcome to the{" "}
                <span className=" text_secondary">MyLogistics</span> And{" "}
                <span className="text_secondary">Transportation</span>
              </h2>
              <p
                className=" ff_opensans fs_md fw_regular text_light pt-3 pe-xl-5"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-offset="200"
                data-aos-delay="300"
              >
                Mylogistics is a Leading Provider of Quality Packers And Movers
                in world. With our Experience of over 25+ Years in the Industry,
                the company is highly skilled and is equipped with the best of
                facilities to match all High Quality Moving Standards. We
                constantly delivering the best is taken care of with the help of
                our Products Durability, Products Comfort and Products
                Attractiveness.We offer a wide range of Moving And Packing,
                logistics, transportation Upholestery Services in all over the
                world.
              </p>
              <div className="d-flex justify-content-around pt-lg-5 mt-lg-5 pe-xl-5">
                <p
                  className=" ff_opensans fs_md fw_regular text_light"
                  data-aos="fade-down"
                  data-aos-duration="700"
                  data-aos-offset="200"
                  data-aos-delay="500"
                >
                  Professional Team
                </p>
                <p
                  className=" ff_opensans fs_md fw_regular text_light"
                  data-aos="fade-down"
                  data-aos-duration="700"
                  data-aos-offset="200"
                  data-aos-delay="700"
                >
                  Assure Quality
                </p>
                <p
                  className=" ff_opensans fs_md fw_regular text_light"
                  data-aos="fade-down"
                  data-aos-duration="700"
                  data-aos-offset="200"
                  data-aos-delay="900"
                >
                  24/7 Support
                </p>
              </div>
            </Col>
          </Row>
          <Row className=" pt-3">
            <Col xs={12} sm={6} lg={3} className="pt-4">
              <div
                className="text-center"
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-offset="200"
                data-aos-delay="100"
              >
                <h2 className=" ff_opensans fw_bold fs_8xl text_primary">
                  25 Year's
                </h2>
                <p className=" ff_rufina fs_lg fw_regular text_primary">
                  Material Warranty
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={3} className="pt-4">
              <div
                className="text-center"
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-offset="200"
                data-aos-delay="300"
              >
                <h2 className=" ff_opensans fw_bold fs_8xl text_primary">
                  2200+
                </h2>
                <p className=" ff_rufina fs_lg fw_regular text_primary">
                  Order Completed
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={3} className="pt-4">
              <div
                className="text-center"
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-offset="200"
                data-aos-delay="500"
              >
                <h2 className=" ff_opensans fw_bold fs_8xl text_primary">
                  300+
                </h2>
                <p className=" ff_rufina fs_lg fw_regular text_primary">
                  Team Members
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={3} className="pt-4">
              <div
                className="text-center"
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-offset="200"
                data-aos-delay="700"
              >
                <h2 className=" ff_opensans fw_bold fs_8xl text_primary">
                  20 Days
                </h2>
                <p className=" ff_rufina fs_lg fw_regular text_primary">
                  Delivery
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutLogistics;
