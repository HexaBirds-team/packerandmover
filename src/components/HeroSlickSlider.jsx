import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

export default function HeroSlickSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" overflow-hidden">
      <Slider {...settings}>
        <div className="header-wrapper">
          <div className="zoominheader bg_img_Containers">
            <div className="zoomoutheader d-flex flex-column justify-content-center pt-sm-5 ">
              <Container className=" pt-sm-5 mt-sm-5">
                <h3
                  className="ff_rufina fw_bold fs_9xl text_light "
                  data-aos="fade-down"
                  data-aos-duration="700"
                  data-aos-delay="2400"
                >
                  Moving every customer
                  <span className="d-lg-block"> with care.</span>
                </h3>
                <p
                  className="ff_opensans fs_lg fw_light text_light py-sm-4 my-3  "
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="2400"
                >
                  We constantly delivering the best is taken care of with the
                  help of
                  <span className="d-lg-block">
                    our Products Durability, Products Comfort and Products
                  </span>
                  Attractiveness.
                </p>
                <button
                  className="border-0 py-2 px-4 ff_opensans fs_md fw_bold text_primary bg_secondary Know_button "
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="2400"
                >
                  Know more
                </button>
              </Container>
            </div>
          </div>
        </div>
        <div className="header-wrapper">
          <div className="zoominheader bg_img_ProtOf">
            <div className="zoomoutheader d-flex flex-column justify-content-center pt-sm-5 ">
              <Container className=" pt-sm-5 mt-sm-5">
                <h3 className="ff_rufina fw_bold fs_9xl text_light">
                  We Preferred Safety,
                  <span className="d-lg-block"> Quality, Professionalism</span>
                </h3>
                <p
                  className="ff_opensans fs_lg fw_light text_light py-sm-4 my-3  "
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="2400"
                >
                  We constantly delivering the best is taken care of with the
                  help of
                  <span className="d-lg-block">
                    our Products Durability, Products Comfort and Products
                  </span>
                  Attractiveness.
                </p>
                <button
                  className="border-0 py-2 px-4 ff_opensans fs_md fw_bold text_primary bg_secondary Know_button "
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="2400"
                >
                  Know more
                </button>
              </Container>
            </div>
          </div>
        </div>
        <div className="header-wrapper">
          <div className="zoominheader bg_img_Evergreen">
            <div className="zoomoutheader d-flex flex-column justify-content-center pt-sm-5 ">
              <Container className=" pt-sm-5 mt-sm-5">
                <h3 className="ff_rufina fw_bold fs_9xl text_light">
                  From here You’re
                  <span className="d-lg-block"> Almost There.</span>
                </h3>
                <p
                  className="ff_opensans fs_lg fw_light text_light py-sm-4 my-3  "
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="2400"
                >
                  We constantly delivering the best is taken care of with the
                  help of
                  <span className="d-lg-block">
                    our Products Durability, Products Comfort and Products
                  </span>
                  Attractiveness.
                </p>
                <button
                  className="border-0 py-2 px-4 ff_opensans fs_md fw_bold text_primary bg_secondary Know_button "
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="2400"
                >
                  Know more
                </button>
              </Container>
            </div>
          </div>
        </div>
        <div className="header-wrapper activeclass">
          <div className="zoominheader bg_img_truck">
            <div className="zoomoutheader d-flex flex-column justify-content-center pt-sm-5">
              <Container className=" pt-sm-5 mt-sm-5">
                <h3 className="ff_rufina fw_bold fs_9xl text_light">
                  Let Us Move You With
                  <span className="d-lg-block"> Honesty And Greatness.</span>
                </h3>
                <p
                  className="ff_opensans fs_lg fw_light text_light py-sm-4 my-3  "
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="2400"
                >
                  We constantly delivering the best is taken care of with the
                  help of
                  <span className="d-lg-block">
                    our Products Durability, Products Comfort and Products
                  </span>
                  Attractiveness.
                </p>
                <button
                  className="border-0 py-2 px-4 ff_opensans fs_md fw_bold text_primary bg_secondary Know_button "
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="2400"
                >
                  Know more
                </button>
              </Container>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
