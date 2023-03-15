import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GridContainer from "../assets/images/webp/GridContainer.webp";
import Verified from "./Verified";

function PackingAndTransportation() {
  return (
    <>
      <Container className="py-5 my-4">
        <Row className=" justify-content-between">
          <Col xs={12} xl={8}>
            <h2 className=" ff_rufina fs_7xl fw_bold text_primary">
              Packing And
              <span className=" text_secondary">Transportation</span>
            </h2>
            <h3 className=" ff_rufina fs_xl fw_regular text_primary pt-5">
              Packing And Transportation
            </h3>
            <p className=" ff_opensans fs_md fw_regular text_dark py-3">
              Mylogistics Packers And Movers provides services for packing and
              moving your goods from one place to another place whenever you
              want to shift your goods. With the 25+ years of Packing and Moving
              and industrial experience, we are Commited to offering a quality
              range of packing & moving services to our clients.
            </p>
            <p className=" ff_opensans fs_md fw_regular text_dark">
              We Packers And Movers Also Provide a Residential relocation
              services in all over countries in world. Residential relocation is
              most difficult and involves a lot of risk and work in it. It is
              not possible for a one person to handle the entire Residential
              relocation process we Packers And Movers can make it possible.
            </p>
            <Row className=" pt-4">
              <Col xs={12} lg={3}>
                <img
                  className=" w-100 "
                  src={GridContainer}
                  alt="GridContainer"
                />
              </Col>
              <Col xs={12} lg={8} className="pt-4 pt-lg-0">
                <h2 className=" ff_rufina fs_3xl fw_bold text_dark">
                  Why Choose Us for Logistics & Transportation ?
                </h2>
                <p className=" ff_opensans fs_md fw_regular text_dark pt-3">
                  Mylogistics is a Leading Provider of Quality Packers And
                  Movers in world. With our Experience of over 25+ Years in the
                  Industry, the company is highly skilled and is equipped with
                  the best of facilities to match all High Quality Moving
                  Standards.
                </p>
                <p className=" ff_opensans fs_md fw_regular text_dark py-lg-3">
                  We constantly delivering the best is taken care of with the
                  help of our Products Durability, Products Comfort and Products
                  Attractiveness.We offer a wide range of Moving And Packing,
                  logistics, transportation Upholestery Services in all over the
                  world.
                </p>
                <p className=" ff_opensans fs_md fw_regular text_dark">
                  We provides our clients excellent, trustworthy and safe
                  logistics services, having all you need to insure your freight
                  without depending where the destination is or how big is the
                  shipment
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} xl={4} xxl={3} className="pt-5 pt-xl-0">
            <div className="bg_danger ">
              <a
                className=" ff_rufina fs_xl fw_regular text_primary bg_secondary w-100 d-inline-block px-3 py-3"
                href="#"
              >
                Packing & Transportation
              </a>
              <a
                className=" ff_rufina fs_xl fw_regular text_light  w-100 d-inline-block px-3 py-3 border_top Packinglink_hover"
                href="#"
              >
                Cargo
              </a>
              <a
                className=" ff_rufina fs_xl fw_regular text_light  w-100 d-inline-block px-3 py-3 border_top Packinglink_hover"
                href="#"
              >
                Commercial Relocation
              </a>
              <a
                className=" ff_rufina fs_xl fw_regular text_light  w-100 d-inline-block px-3 py-3 border_top Packinglink_hover"
                href="#"
              >
                Transportation
              </a>
              <a
                className=" ff_rufina fs_xl fw_regular text_light  w-100 d-inline-block px-3 py-3 border_top Packinglink_hover"
                href="#"
              >
                Residential Relocation
              </a>
              <a
                className=" ff_rufina fs_xl fw_regular text_light  w-100 d-inline-block px-3 py-3 border_top Packinglink_hover"
                href="#"
              >
                Warehouse
              </a>
              <a
                className=" ff_rufina fs_xl fw_regular text_light  w-100 d-inline-block px-3 py-3 border_top Packinglink_hover"
                href="#"
              >
                Multimodal Transportation
              </a>
              <a
                className=" ff_rufina fs_xl fw_regular text_light  w-100 d-inline-block px-3 py-3 border_top Packinglink_hover"
                href="#"
              >
                Machinery Relocation
              </a>
            </div>
            <div className="bgimage_Book_Appointment py-5 text-center mt-5">
              <h2 className=" ff_rufina fw_bold fs_4xl text_light">
                Book <span className=" d-block">Appointment</span>
              </h2>
              <button className="border-0 py-2 px-4 ff_opensans fs_md fw_bold text_primary bg_secondary Know_button mt-3">
                Contact Us
              </button>
            </div>
          </Col>
        </Row>
        <Verified />
      </Container>
    </>
  );
}

export default PackingAndTransportation;
