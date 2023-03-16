import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PeopleCarry from "../assets/images/svg/PeopleCarry.svg";
import HandleWithCare from "../assets/images/svg/HandleWithCare.svg";
import OpenBox from "../assets/images/svg/OpenBox.svg";
import CourierLorry from "../assets/images/svg/CourierLorry.svg";
import Slider from "react-slick";

export default function HeroSlickSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" overflow-hidden  OurWorking_Section">
      <Container className="py-5 zindex_1">
        <h2 className="ff_rufina fs_6xl fw_bold text_light text-center">
          How we <span className="text_secondary">work</span>, our working
          <span className="text_secondary"> process</span>
        </h2>
        <Slider {...settings} className="movedots">
          <div
            className="text-center pt-4 pt-lg-5 mt-lg-4 hover_color px-3"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <div className="working_icon d-flex justify-content-center mx-auto position-relative transition_200ms">
              <img width={60} src={PeopleCarry} alt="PeopleCarry" />
              <span className="count ff_opensans fw_semibold fs_xl d-flex justify-content-center align-items-center transition_200ms">
                1
              </span>
            </div>
            <h2 className="ff_rufina fw_bold fs_xl text_secondary pt-4 mt-2 transition_200ms">
              Materials handling
            </h2>
            <p className="ff_opensans fs_md fw_regular text_semitertiary pt-2">
              Our manpower is a fair blend of experience, knowledge to
              imagination. They have impeccable skill-sets to project management
              ability.
            </p>
          </div>
          <div
            className="text-center pt-4 pt-lg-5 mt-lg-4 hover_color px-3"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            <div className="working_icon d-flex justify-content-center mx-auto position-relative transition_200ms">
              <img width={60} src={HandleWithCare} alt="HandleWithCare" />

              <span className="count ff_opensans fw_semibold fs_xl d-flex justify-content-center align-items-center transition_200ms">
                02
              </span>
            </div>
            <h2 className="ff_rufina fw_bold fs_xl text_secondary pt-4 mt-2 transition_200ms">
              Packaging & unitisation
            </h2>
            <p className="ff_opensans fs_md fw_regular text_semitertiary pt-2">
              Our manpower is a fair blend of experience, knowledge to
              imagination. They have impeccable skill-sets to project management
              ability.
            </p>
          </div>
          <div
            className="text-center pt-4 pt-lg-5 mt-lg-4 hover_color px-3"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-offset="200"
            data-aos-delay="500"
          >
            <div className="working_icon d-flex justify-content-center mx-auto position-relative transition_200ms">
              <img width={60} src={OpenBox} alt="OpenBox" />
              <span className="count ff_opensans fw_semibold fs_xl d-flex justify-content-center align-items-center transition_200ms">
                03
              </span>
            </div>
            <h2 className="ff_rufina fw_bold fs_xl text_secondary pt-4 mt-2 transition_200ms">
              Inventory
            </h2>
            <p className="ff_opensans fs_md fw_regular text_semitertiary pt-2">
              Our manpower is a fair blend of experience, knowledge to
              imagination. They have impeccable skill-sets to project management
              ability.
            </p>
          </div>
          <div
            className="text-center pt-4 pt-lg-5 mt-lg-4 hover_color px-3"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-offset="200"
            data-aos-delay="700"
          >
            <div className="working_icon d-flex justify-content-center mx-auto position-relative transition_200ms">
              <img width={60} src={CourierLorry} alt="CourierLorry" />
              <span className="count ff_opensans fw_semibold fs_xl d-flex justify-content-center align-items-center transition_200ms">
                04
              </span>
            </div>
            <h2 className="ff_rufina fw_bold fs_xl text_secondary pt-4 mt-2 transition_200ms">
              Transport
            </h2>
            <p className="ff_opensans fs_md fw_regular text_semitertiary pt-2">
              Our manpower is a fair blend of experience, knowledge to
              imagination. They have impeccable skill-sets to project management
              ability.
            </p>
          </div>
        </Slider>
      </Container>
    </div>
  );
}
