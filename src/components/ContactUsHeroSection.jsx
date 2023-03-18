import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ArowWhite from "../assets/images/svg/ArowWhite.svg";

function ContactUsHeroSection() {
  return (
    <>
      <div className="bg_img_GreenAndRoad py-5">
        <Container className=" pt-5 mt-5">
          <h2
            className=" ff_rufina fs_9xl fw_bold text_light pt-5 mt-3"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-offset="0"
            data-aos-delay="00"
          >
            Contact Us
          </h2>
          <p
            className=" ff_opensans fs_xsm fw_regular text_light"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="00"
            data-aos-delay="0"
          >
            <NavLink to="/" className=" text_secondary footer_link">
              Home
            </NavLink>
            <img className="px-2" src={ArowWhite} alt="ArowWhite" /> Contact Us
          </p>
        </Container>
      </div>
    </>
  );
}

export default ContactUsHeroSection;
