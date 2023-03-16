import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CompanyStock from "../assets/images/webp/CompanyStock.webp";
import CompanyStock2 from "../assets/images/webp/CompanyStock2.webp";
import TATASIGNATruck from "../assets/images/webp/TATASIGNATruck.webp";
import DeliveryVan from "../assets/images/webp/DeliveryVan.webp";
import GridContainer from "../assets/images/webp/GridContainer.webp";
import Boxes from "../assets/images/webp/Boxes.webp";
import MaerskContainer from "../assets/images/webp/MaerskContainer.webp";

function OurProjects() {
  return (
    <>
      <div className="bg_dark py-5">
        <Container fluid>
          <h2
            className="ff_rufina fw_regular fs_7xl text_light pb-5 mb-0 text-center"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-offset="200"
          >
            Our Latest <span className="text_secondary">Projects</span>
          </h2>

          <div className="d-grid gap-2 gap-md-4">
            <div
              className="item_1 w-100 h-100 position-relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="100"
            >
              <img
                className="w-100 h-100"
                src={CompanyStock2}
                alt="CompanyStock2"
              />
              <div className="position-absolute top-50 start-50 translate-middle Hover_Icon w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="opacity-0 icon_opacity">
                  <h2 className="text_light zindex_1 ff_rufina fs_lg fw_regular text-center">
                    Warehouse
                  </h2>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="icons me-2">
                      <svg
                        className="SearchIcon"
                        width="16"
                        height="16"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.62498 8.5H9.03248L8.82248 8.2975C9.29119 7.75298 9.63375 7.11158 9.82564 6.41921C10.0175 5.72684 10.054 5.00062 9.93248 4.2925C9.57998 2.2075 7.83998 0.5425 5.73998 0.2875C5.00169 0.1941 4.25182 0.270829 3.54775 0.511817C2.84368 0.752805 2.20406 1.15166 1.67785 1.67787C1.15165 2.20408 0.752786 2.8437 0.511798 3.54777C0.27081 4.25184 0.19408 5.00171 0.287481 5.74C0.542481 7.84 2.20748 9.58 4.29248 9.9325C5.0006 10.054 5.72682 10.0176 6.41919 9.82566C7.11156 9.63377 7.75296 9.29121 8.29748 8.8225L8.49998 9.0325V9.625L11.6875 12.8125C11.995 13.12 12.4975 13.12 12.805 12.8125C13.1125 12.505 13.1125 12.0025 12.805 11.695L9.62498 8.5ZM5.12498 8.5C3.25748 8.5 1.74998 6.9925 1.74998 5.125C1.74998 3.2575 3.25748 1.75 5.12498 1.75C6.99248 1.75 8.49998 3.2575 8.49998 5.125C8.49998 6.9925 6.99248 8.5 5.12498 8.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="icons">
                      <svg
                        className="chainicon"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.158 7.842C9.54365 7.22792 8.71059 6.88296 7.84198 6.88296C6.97337 6.88296 6.14031 7.22792 5.52598 7.842L3.20923 10.158C2.59489 10.7723 2.24976 11.6056 2.24976 12.4744C2.24976 13.3432 2.59489 14.1764 3.20923 14.7907C3.82357 15.4051 4.6568 15.7502 5.5256 15.7502C6.39441 15.7502 7.22764 15.4051 7.84198 14.7907L8.99998 13.6327"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.84204 10.158C8.45637 10.7721 9.28943 11.117 10.158 11.117C11.0267 11.117 11.8597 10.7721 12.474 10.158L14.7908 7.842C15.4051 7.22766 15.7503 6.39443 15.7503 5.52562C15.7503 4.65681 15.4051 3.82359 14.7908 3.20925C14.1765 2.59491 13.3432 2.24977 12.4744 2.24977C11.6056 2.24977 10.7724 2.59491 10.158 3.20925L9.00004 4.36725"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item_2 w-100 h-100 position-relative overflow-hidden "
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="200"
            >
              <img
                className="w-100 h-100"
                src={TATASIGNATruck}
                alt="TATASIGNATruck"
              />
              <div className="position-absolute top-50 start-50 translate-middle Hover_Icon w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="opacity-0 icon_opacity">
                  <h2 className="text_light zindex_1 ff_rufina fs_lg fw_regular text-center">
                    Transportation
                  </h2>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="icons me-2">
                      <svg
                        className="SearchIcon"
                        width="16"
                        height="16"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.62498 8.5H9.03248L8.82248 8.2975C9.29119 7.75298 9.63375 7.11158 9.82564 6.41921C10.0175 5.72684 10.054 5.00062 9.93248 4.2925C9.57998 2.2075 7.83998 0.5425 5.73998 0.2875C5.00169 0.1941 4.25182 0.270829 3.54775 0.511817C2.84368 0.752805 2.20406 1.15166 1.67785 1.67787C1.15165 2.20408 0.752786 2.8437 0.511798 3.54777C0.27081 4.25184 0.19408 5.00171 0.287481 5.74C0.542481 7.84 2.20748 9.58 4.29248 9.9325C5.0006 10.054 5.72682 10.0176 6.41919 9.82566C7.11156 9.63377 7.75296 9.29121 8.29748 8.8225L8.49998 9.0325V9.625L11.6875 12.8125C11.995 13.12 12.4975 13.12 12.805 12.8125C13.1125 12.505 13.1125 12.0025 12.805 11.695L9.62498 8.5ZM5.12498 8.5C3.25748 8.5 1.74998 6.9925 1.74998 5.125C1.74998 3.2575 3.25748 1.75 5.12498 1.75C6.99248 1.75 8.49998 3.2575 8.49998 5.125C8.49998 6.9925 6.99248 8.5 5.12498 8.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="icons">
                      <svg
                        className="chainicon"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.158 7.842C9.54365 7.22792 8.71059 6.88296 7.84198 6.88296C6.97337 6.88296 6.14031 7.22792 5.52598 7.842L3.20923 10.158C2.59489 10.7723 2.24976 11.6056 2.24976 12.4744C2.24976 13.3432 2.59489 14.1764 3.20923 14.7907C3.82357 15.4051 4.6568 15.7502 5.5256 15.7502C6.39441 15.7502 7.22764 15.4051 7.84198 14.7907L8.99998 13.6327"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.84204 10.158C8.45637 10.7721 9.28943 11.117 10.158 11.117C11.0267 11.117 11.8597 10.7721 12.474 10.158L14.7908 7.842C15.4051 7.22766 15.7503 6.39443 15.7503 5.52562C15.7503 4.65681 15.4051 3.82359 14.7908 3.20925C14.1765 2.59491 13.3432 2.24977 12.4744 2.24977C11.6056 2.24977 10.7724 2.59491 10.158 3.20925L9.00004 4.36725"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item_3 w-100 h-100  position-relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="300"
            >
              <img
                className="w-100 h-100"
                src={DeliveryVan}
                alt="DeliveryVan"
              />{" "}
              <div className="position-absolute top-50 start-50 translate-middle Hover_Icon w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="opacity-0 icon_opacity">
                  <h2 className="text_light zindex_1 ff_rufina fs_lg fw_regular text-center">
                    Packaging
                  </h2>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="icons me-2">
                      <svg
                        className="SearchIcon"
                        width="16"
                        height="16"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.62498 8.5H9.03248L8.82248 8.2975C9.29119 7.75298 9.63375 7.11158 9.82564 6.41921C10.0175 5.72684 10.054 5.00062 9.93248 4.2925C9.57998 2.2075 7.83998 0.5425 5.73998 0.2875C5.00169 0.1941 4.25182 0.270829 3.54775 0.511817C2.84368 0.752805 2.20406 1.15166 1.67785 1.67787C1.15165 2.20408 0.752786 2.8437 0.511798 3.54777C0.27081 4.25184 0.19408 5.00171 0.287481 5.74C0.542481 7.84 2.20748 9.58 4.29248 9.9325C5.0006 10.054 5.72682 10.0176 6.41919 9.82566C7.11156 9.63377 7.75296 9.29121 8.29748 8.8225L8.49998 9.0325V9.625L11.6875 12.8125C11.995 13.12 12.4975 13.12 12.805 12.8125C13.1125 12.505 13.1125 12.0025 12.805 11.695L9.62498 8.5ZM5.12498 8.5C3.25748 8.5 1.74998 6.9925 1.74998 5.125C1.74998 3.2575 3.25748 1.75 5.12498 1.75C6.99248 1.75 8.49998 3.2575 8.49998 5.125C8.49998 6.9925 6.99248 8.5 5.12498 8.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="icons">
                      <svg
                        className="chainicon"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.158 7.842C9.54365 7.22792 8.71059 6.88296 7.84198 6.88296C6.97337 6.88296 6.14031 7.22792 5.52598 7.842L3.20923 10.158C2.59489 10.7723 2.24976 11.6056 2.24976 12.4744C2.24976 13.3432 2.59489 14.1764 3.20923 14.7907C3.82357 15.4051 4.6568 15.7502 5.5256 15.7502C6.39441 15.7502 7.22764 15.4051 7.84198 14.7907L8.99998 13.6327"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.84204 10.158C8.45637 10.7721 9.28943 11.117 10.158 11.117C11.0267 11.117 11.8597 10.7721 12.474 10.158L14.7908 7.842C15.4051 7.22766 15.7503 6.39443 15.7503 5.52562C15.7503 4.65681 15.4051 3.82359 14.7908 3.20925C14.1765 2.59491 13.3432 2.24977 12.4744 2.24977C11.6056 2.24977 10.7724 2.59491 10.158 3.20925L9.00004 4.36725"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item_4 w-100 h-100  position-relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="400"
            >
              <img
                className="w-100 h-100"
                src={GridContainer}
                alt="GridContainer"
              />
              <div className="position-absolute top-50 start-50 translate-middle Hover_Icon w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="opacity-0 icon_opacity">
                  <h2 className="text_light zindex_1 ff_rufina fs_lg fw_regular text-center">
                    Cargo
                  </h2>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="icons me-2">
                      <svg
                        className="SearchIcon"
                        width="16"
                        height="16"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.62498 8.5H9.03248L8.82248 8.2975C9.29119 7.75298 9.63375 7.11158 9.82564 6.41921C10.0175 5.72684 10.054 5.00062 9.93248 4.2925C9.57998 2.2075 7.83998 0.5425 5.73998 0.2875C5.00169 0.1941 4.25182 0.270829 3.54775 0.511817C2.84368 0.752805 2.20406 1.15166 1.67785 1.67787C1.15165 2.20408 0.752786 2.8437 0.511798 3.54777C0.27081 4.25184 0.19408 5.00171 0.287481 5.74C0.542481 7.84 2.20748 9.58 4.29248 9.9325C5.0006 10.054 5.72682 10.0176 6.41919 9.82566C7.11156 9.63377 7.75296 9.29121 8.29748 8.8225L8.49998 9.0325V9.625L11.6875 12.8125C11.995 13.12 12.4975 13.12 12.805 12.8125C13.1125 12.505 13.1125 12.0025 12.805 11.695L9.62498 8.5ZM5.12498 8.5C3.25748 8.5 1.74998 6.9925 1.74998 5.125C1.74998 3.2575 3.25748 1.75 5.12498 1.75C6.99248 1.75 8.49998 3.2575 8.49998 5.125C8.49998 6.9925 6.99248 8.5 5.12498 8.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="icons">
                      <svg
                        className="chainicon"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.158 7.842C9.54365 7.22792 8.71059 6.88296 7.84198 6.88296C6.97337 6.88296 6.14031 7.22792 5.52598 7.842L3.20923 10.158C2.59489 10.7723 2.24976 11.6056 2.24976 12.4744C2.24976 13.3432 2.59489 14.1764 3.20923 14.7907C3.82357 15.4051 4.6568 15.7502 5.5256 15.7502C6.39441 15.7502 7.22764 15.4051 7.84198 14.7907L8.99998 13.6327"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.84204 10.158C8.45637 10.7721 9.28943 11.117 10.158 11.117C11.0267 11.117 11.8597 10.7721 12.474 10.158L14.7908 7.842C15.4051 7.22766 15.7503 6.39443 15.7503 5.52562C15.7503 4.65681 15.4051 3.82359 14.7908 3.20925C14.1765 2.59491 13.3432 2.24977 12.4744 2.24977C11.6056 2.24977 10.7724 2.59491 10.158 3.20925L9.00004 4.36725"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item_5 w-100 h-100 position-relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="500"
            >
              <img className="w-100 h-100" src={Boxes} alt="Boxes" />
              <div className="position-absolute top-50 start-50 translate-middle Hover_Icon w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="opacity-0 icon_opacity">
                  <h2 className="text_light zindex_1 ff_rufina fs_lg fw_regular text-center">
                    Packaging
                  </h2>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="icons me-2">
                      <svg
                        className="SearchIcon"
                        width="16"
                        height="16"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.62498 8.5H9.03248L8.82248 8.2975C9.29119 7.75298 9.63375 7.11158 9.82564 6.41921C10.0175 5.72684 10.054 5.00062 9.93248 4.2925C9.57998 2.2075 7.83998 0.5425 5.73998 0.2875C5.00169 0.1941 4.25182 0.270829 3.54775 0.511817C2.84368 0.752805 2.20406 1.15166 1.67785 1.67787C1.15165 2.20408 0.752786 2.8437 0.511798 3.54777C0.27081 4.25184 0.19408 5.00171 0.287481 5.74C0.542481 7.84 2.20748 9.58 4.29248 9.9325C5.0006 10.054 5.72682 10.0176 6.41919 9.82566C7.11156 9.63377 7.75296 9.29121 8.29748 8.8225L8.49998 9.0325V9.625L11.6875 12.8125C11.995 13.12 12.4975 13.12 12.805 12.8125C13.1125 12.505 13.1125 12.0025 12.805 11.695L9.62498 8.5ZM5.12498 8.5C3.25748 8.5 1.74998 6.9925 1.74998 5.125C1.74998 3.2575 3.25748 1.75 5.12498 1.75C6.99248 1.75 8.49998 3.2575 8.49998 5.125C8.49998 6.9925 6.99248 8.5 5.12498 8.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="icons">
                      <svg
                        className="chainicon"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.158 7.842C9.54365 7.22792 8.71059 6.88296 7.84198 6.88296C6.97337 6.88296 6.14031 7.22792 5.52598 7.842L3.20923 10.158C2.59489 10.7723 2.24976 11.6056 2.24976 12.4744C2.24976 13.3432 2.59489 14.1764 3.20923 14.7907C3.82357 15.4051 4.6568 15.7502 5.5256 15.7502C6.39441 15.7502 7.22764 15.4051 7.84198 14.7907L8.99998 13.6327"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.84204 10.158C8.45637 10.7721 9.28943 11.117 10.158 11.117C11.0267 11.117 11.8597 10.7721 12.474 10.158L14.7908 7.842C15.4051 7.22766 15.7503 6.39443 15.7503 5.52562C15.7503 4.65681 15.4051 3.82359 14.7908 3.20925C14.1765 2.59491 13.3432 2.24977 12.4744 2.24977C11.6056 2.24977 10.7724 2.59491 10.158 3.20925L9.00004 4.36725"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item_6 w-100 h-100 position-relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="600"
            >
              <img
                className="w-100 h-100"
                src={CompanyStock}
                alt="CompanyStock"
              />
              <div className="position-absolute top-50 start-50 translate-middle Hover_Icon w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="opacity-0 icon_opacity">
                  <h2 className="text_light zindex_1 ff_rufina fs_lg fw_regular text-center">
                    Warehouse
                  </h2>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="icons me-2">
                      <svg
                        className="SearchIcon"
                        width="16"
                        height="16"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.62498 8.5H9.03248L8.82248 8.2975C9.29119 7.75298 9.63375 7.11158 9.82564 6.41921C10.0175 5.72684 10.054 5.00062 9.93248 4.2925C9.57998 2.2075 7.83998 0.5425 5.73998 0.2875C5.00169 0.1941 4.25182 0.270829 3.54775 0.511817C2.84368 0.752805 2.20406 1.15166 1.67785 1.67787C1.15165 2.20408 0.752786 2.8437 0.511798 3.54777C0.27081 4.25184 0.19408 5.00171 0.287481 5.74C0.542481 7.84 2.20748 9.58 4.29248 9.9325C5.0006 10.054 5.72682 10.0176 6.41919 9.82566C7.11156 9.63377 7.75296 9.29121 8.29748 8.8225L8.49998 9.0325V9.625L11.6875 12.8125C11.995 13.12 12.4975 13.12 12.805 12.8125C13.1125 12.505 13.1125 12.0025 12.805 11.695L9.62498 8.5ZM5.12498 8.5C3.25748 8.5 1.74998 6.9925 1.74998 5.125C1.74998 3.2575 3.25748 1.75 5.12498 1.75C6.99248 1.75 8.49998 3.2575 8.49998 5.125C8.49998 6.9925 6.99248 8.5 5.12498 8.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="icons">
                      <svg
                        className="chainicon"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.158 7.842C9.54365 7.22792 8.71059 6.88296 7.84198 6.88296C6.97337 6.88296 6.14031 7.22792 5.52598 7.842L3.20923 10.158C2.59489 10.7723 2.24976 11.6056 2.24976 12.4744C2.24976 13.3432 2.59489 14.1764 3.20923 14.7907C3.82357 15.4051 4.6568 15.7502 5.5256 15.7502C6.39441 15.7502 7.22764 15.4051 7.84198 14.7907L8.99998 13.6327"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.84204 10.158C8.45637 10.7721 9.28943 11.117 10.158 11.117C11.0267 11.117 11.8597 10.7721 12.474 10.158L14.7908 7.842C15.4051 7.22766 15.7503 6.39443 15.7503 5.52562C15.7503 4.65681 15.4051 3.82359 14.7908 3.20925C14.1765 2.59491 13.3432 2.24977 12.4744 2.24977C11.6056 2.24977 10.7724 2.59491 10.158 3.20925L9.00004 4.36725"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item_7 w-100 h-100 position-relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="700"
            >
              <img
                className="w-100 h-100"
                src={MaerskContainer}
                alt="MaerskContainer"
              />
              <div className="position-absolute top-50 start-50 translate-middle Hover_Icon w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="opacity-0 icon_opacity">
                  <h2 className="text_light zindex_1 ff_rufina fs_lg fw_regular text-center">
                    Logistics
                  </h2>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="icons me-2">
                      <svg
                        className="SearchIcon"
                        width="16"
                        height="16"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.62498 8.5H9.03248L8.82248 8.2975C9.29119 7.75298 9.63375 7.11158 9.82564 6.41921C10.0175 5.72684 10.054 5.00062 9.93248 4.2925C9.57998 2.2075 7.83998 0.5425 5.73998 0.2875C5.00169 0.1941 4.25182 0.270829 3.54775 0.511817C2.84368 0.752805 2.20406 1.15166 1.67785 1.67787C1.15165 2.20408 0.752786 2.8437 0.511798 3.54777C0.27081 4.25184 0.19408 5.00171 0.287481 5.74C0.542481 7.84 2.20748 9.58 4.29248 9.9325C5.0006 10.054 5.72682 10.0176 6.41919 9.82566C7.11156 9.63377 7.75296 9.29121 8.29748 8.8225L8.49998 9.0325V9.625L11.6875 12.8125C11.995 13.12 12.4975 13.12 12.805 12.8125C13.1125 12.505 13.1125 12.0025 12.805 11.695L9.62498 8.5ZM5.12498 8.5C3.25748 8.5 1.74998 6.9925 1.74998 5.125C1.74998 3.2575 3.25748 1.75 5.12498 1.75C6.99248 1.75 8.49998 3.2575 8.49998 5.125C8.49998 6.9925 6.99248 8.5 5.12498 8.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="icons">
                      <svg
                        className="chainicon"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.158 7.842C9.54365 7.22792 8.71059 6.88296 7.84198 6.88296C6.97337 6.88296 6.14031 7.22792 5.52598 7.842L3.20923 10.158C2.59489 10.7723 2.24976 11.6056 2.24976 12.4744C2.24976 13.3432 2.59489 14.1764 3.20923 14.7907C3.82357 15.4051 4.6568 15.7502 5.5256 15.7502C6.39441 15.7502 7.22764 15.4051 7.84198 14.7907L8.99998 13.6327"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.84204 10.158C8.45637 10.7721 9.28943 11.117 10.158 11.117C11.0267 11.117 11.8597 10.7721 12.474 10.158L14.7908 7.842C15.4051 7.22766 15.7503 6.39443 15.7503 5.52562C15.7503 4.65681 15.4051 3.82359 14.7908 3.20925C14.1765 2.59491 13.3432 2.24977 12.4744 2.24977C11.6056 2.24977 10.7724 2.59491 10.158 3.20925L9.00004 4.36725"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-5">
            <button
              className="border-0 py-2 px-4 ff_opensans fs_md fw_bold text_primary bg_secondary Know_button"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-offset="200"
              data-aos-delay="800"
            >
              View All Projects
            </button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default OurProjects;
