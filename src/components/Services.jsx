import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MapData from "./MapData";

function Services() {
  return (
    <>
      <section className="bg_semiprimary py-4">
        <Container className="py-5">
          <h2
            className=" ff_rufina fs_7xl fw_bold text_primary"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-offset="200"
          >
            Our Excellent <span className=" text_secondary">Services</span>
          </h2>
          <p
            className=" ff_opensans fs_md fw_regular text_dark"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="200"
          >
            We provides our clients excellent, trustworthy and safe logistics
            services, having all you need to insure your freight without
            depending where the destination is or how big is the shipment.
          </p>
          <Row>
            {MapData.slice(0, 6).map((value) => {
              const { image, tittle, paragraph, id } = value;
              return (
                <Col xs={12} md={6} lg={4} className="pt-4" key={id}>
                  <div
                    className="bg_light d-flex py-4 px-4 hover_overlay h-100"
                    data-aos="zoom-in"
                    data-aos-duration="700"
                    data-aos-offset="200"
                  >
                    <img
                      height={60}
                      width={60}
                      className="Robot"
                      src={image}
                      alt="Robot"
                    />
                    <div className="ps-3">
                      <h2 className=" ff_rufina fs_2xl fw_bold text_primary">
                        {tittle}
                      </h2>
                      <p className=" ff_opensans fw_regular fs_xsm text_dark py-1">
                        {paragraph}
                      </p>
                      <button className="py-2 px-4 bg_primary border-0 text_secondary fs_xsm fw_bold ff_opensans d-inline-block">
                        Read More
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Services;
