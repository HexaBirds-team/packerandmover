import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import MapData from "./MapData";

export default function ClientSay() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg_semisecondary py-5">
      <Container className="py-5">
        <div className="text-center pb-5">
          <h2 className="ff_rufina fs_7xl fw_bold text_primary">
            What our <span className="text_secondary">client say</span>
          </h2>
          <p className="ff_opensans fs_lg fw_regular text_dark">
            Just Look What Our Clients Say.
          </p>
          <span className="span_line d-inline-block"></span>
        </div>

        <Slider {...settings}>
          {MapData.slice(6, 10).map((value) => {
            const { id, image, hadding, tittle, paragraph } = value;
            return (
              <div className="px-2" key={id}>
                <div className="bg_light p-2 p-lg-4 d-flex h-100">
                  <div className="text-center">
                    <img width={65} className=" rounded-circle" src={image} alt="Images" />
                    <span className="bottomspan d-inline-block"></span>
                  </div>
                  <div className="ps-3 ps-sm-4">
                    <h2 className="ff_rufina fs_xl fw_bold text_primary">
                      {hadding}
                    </h2>
                    <h3 className="ff_lato fs_lg fw_regular text_warning">
                      {tittle}
                    </h3>
                    <p className="ff_opensans fs_md fw_regular text_dark">
                      {paragraph}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
}
