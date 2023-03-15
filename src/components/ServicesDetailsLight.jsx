import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ArowWhite from "../assets/images/svg/ArowWhite.svg";

function ServicesDetailsLight() {
  return (
    <>
      <div className="bg_img_GreenAndRoad py-5">
        <Container className=" pt-5 mt-5">
          <h2 className=" ff_rufina fs_9xl fw_bold text_light">
            Services Details Light
          </h2>
          <p className=" ff_opensans fs_xsm fw_regular text_light">
            <NavLink to="/" className=" text_secondary footer_link">
              Home
            </NavLink>
            <img className="px-2" src={ArowWhite} alt="ArowWhite" /> Services{" "}
            <img className="px-2" src={ArowWhite} alt="ArowWhite" /> Services
            Details Light
          </p>
        </Container>
      </div>
    </>
  );
}

export default ServicesDetailsLight;
