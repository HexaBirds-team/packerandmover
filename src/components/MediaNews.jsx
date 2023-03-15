import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MaerskContainer from "../assets/images/webp/MaerskContainer.webp";
import MapData from "./MapData";
function MediaNews() {
  return (
    <>
      <div className="bg_dark py-5">
        <Container className="py-5">
          <h2 className="ff_rufina fs_7xl fw_bold text_light">
            Media / <span className="text_secondary">Newsp</span>
          </h2>
          <Row className="pt-1">
            {MapData.slice(10, 13).map((value) => {
              const { image, tittle, paragraph, id, hadding } = value;
              return (
                <Col xs={12} md={6} lg={4} key={id} className="pt-4">
                  <div className="bg_light hover_scale h-100">
                    <div className="overflow-hidden">
                      <div className="img_overlay position-relative"><img className="w-100" src={image} alt="images" /></div>
                    </div>
                    <div className="p-3">
                      <div className="d-flex pb-2">
                        <h4 className="ff_opensans fs_sm fw_regular text_dark pe-4 mb-0">
                          {hadding}
                        </h4>
                        <span className="right_spanline d-inline-block"></span>
                        <h4 className="ff_opensans fs_sm fw_regular text_dark ps-4 mb-0">
                          {tittle}
                        </h4>
                      </div>
                      <a
                        href="#"
                        className="ff_rufina fs_xl fw_regular text_primary hoverchange_color"
                      >
                        {paragraph}
                      </a>
                      <div className="pt-1">
                        <button className="border-0 bg-transparent ff_rufina fs_sm fw_regular text_primary hoverchange_color">
                          Read more
                          <span className="ms-2">
                            <svg
                              width="37"
                              height="24"
                              viewBox="0 0 37 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M23.3625 24C22.9825 24 22.6024 23.8768 22.3023 23.6128C21.7222 23.1025 21.7222 22.2577 22.3023 21.7474L33.3844 11.9978L22.3023 2.24822C21.7222 1.73786 21.7222 0.893127 22.3023 0.382769C22.8824 -0.12759 23.8426 -0.12759 24.4227 0.382769L36.5649 11.0651C37.1451 11.5754 37.1451 12.4201 36.5649 12.9305L24.4227 23.6128C24.1227 23.8768 23.7426 24 23.3625 24Z"
                                fill="#292D32"
                              />
                              <path
                                d="M35.1665 13.3175H1.50028C0.680125 13.3175 0 12.7192 0 11.9976C0 11.2761 0.680125 10.6777 1.50028 10.6777H35.1665C35.9866 10.6777 36.6667 11.2761 36.6667 11.9976C36.6667 12.7192 35.9866 13.3175 35.1665 13.3175Z"
                                fill="#292D32"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MediaNews;
