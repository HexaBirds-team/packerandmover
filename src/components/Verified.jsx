import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function Verified() {
  return (
    <>
      <Container>
        <Row className="pt-xl-5 mt-sm-5 pt-4">
          <Col xs={12} lg={4}>
            <ul>
              <li className="ff_rufina fw_regular fs_xl text_primary list_image_done">
                4 years material warranty.
              </li>
              <li className="ff_rufina fw_regular fs_xl text_primary list_image_done py-3">
                1000+ projects has been completed.
              </li>
              <li className="ff_rufina fw_regular fs_xl text_primary list_image_done">
                499+ professinals are available.
              </li>
            </ul>
          </Col>
          <Col xs={12} lg={4}>
            <ul>
              <li className="ff_rufina fw_regular fs_xl text_primary list_image_done">
                15+ awards.
              </li>
              <li className="ff_rufina fw_regular fs_xl text_primary list_image_done py-3">
                Available on 10+ countries.
              </li>
              <li className="ff_rufina fw_regular fs_xl text_primary list_image_done">
                Borderless logistics.
              </li>
            </ul>
          </Col>
          <Col xs={12} lg={4}>
            <ul>
              <li className="ff_rufina fw_regular fs_xl text_primary list_image_done">
                A world-class port.
              </li>
              <li className="ff_rufina fw_regular fs_xl text_primary list_image_done py-3">
                Endless possibilities.
              </li>
              <li className="ff_rufina fw_regular fs_xl text_primary list_image_done">
                Happiness delivered.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Verified;
