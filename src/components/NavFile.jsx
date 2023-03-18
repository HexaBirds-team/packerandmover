import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ContextPage } from "./context/Pagecontext";
import PageLogo from "../assets/images/svg/PageLogo.svg";
import SearchIcon from "../assets/images/svg/SearchIcon.svg";
import close from "../assets/images/svg/close.svg";
import PhoneIcon from "../assets/images/svg/PhoneIcon.svg";
import { Link, NavLink } from "react-router-dom";

function NavFile() {
  const [scrollPosition, setScrollPosition] = useState(0);
  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { searchOpen, setSearchOpen, navOpen, setNavOpen } =
    useContext(ContextPage);
  return (
    <>
      <div className=" position-relative overflow-hi dden ">
        <div className="bg_dark py-3">
          <Container>
            <div className="  d-flex align-items-center justify-content-center justify-content-md-between">
              <h2 className=" ff_poppins fs_sm fw_regular text_tertiary mb-0 justify-content-between d-none d-md-flex ">
                <img src={PhoneIcon} alt="PhoneIcon" /> Need help? Call Us Now :
                <span className=" text_secondary hover_color">
                  1234 567 8910
                </span>
              </h2>
              <div className=" d-flex align-items-center   gap-4">
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6H9V9H6V16H3V9H0V6H3V4.745C3 3.556 3.374 2.054 4.118 1.233C4.862 0.41 5.791 0 6.904 0H9V3H6.9C6.402 3 6 3.402 6 3.899V6Z"
                      fill="#888989"
                    />
                  </svg>
                </a>

                <a href="#" className="boder_left ps-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.986 21.9842C22.5878 21.3805 23.0604 20.655 23.3687 19.8594C23.664 19.0951 23.8671 18.2238 23.9262 16.9464C23.9852 15.6671 24 15.2573 24 11.9991C24 8.74087 23.9852 8.33105 23.9262 7.05177C23.8671 5.77433 23.664 4.90301 23.3687 4.13876C23.0672 3.33822 22.5947 2.6131 21.9842 2.014C21.385 1.40352 20.6599 0.93104 19.8594 0.62949C19.0951 0.334128 18.2238 0.131067 16.9464 0.0719945C15.6671 0.0129221 15.2573 0 11.9991 0C8.74087 0 8.33105 0.012922 7.05177 0.0738404C5.77433 0.129221 4.90301 0.332282 4.13876 0.62949C3.33863 0.931728 2.61367 1.40412 2.014 2.014C1.40412 2.61367 0.931728 3.33863 0.62949 4.13876C0.334128 4.90301 0.131067 5.77433 0.0719945 7.05177C0.0129221 8.33105 0 8.74087 0 11.9991C0 15.2573 0.012922 15.6671 0.0738404 16.9464C0.129221 18.2238 0.332282 19.0951 0.62949 19.8594C0.932236 20.6606 1.40482 21.3842 2.014 21.9842C2.61395 22.5933 3.33944 23.0659 4.13876 23.3687C4.90301 23.664 5.77433 23.8671 7.05177 23.9262C8.33105 23.9834 8.74087 23.9982 11.9991 23.9982C15.2573 23.9982 15.6671 23.9834 16.9464 23.9243C18.2238 23.8689 19.0951 23.6659 19.8594 23.3687C20.6564 23.0602 21.3819 22.5886 21.986 21.9842ZM1.84601 10.5869V13.4113C1.84232 14.9269 1.84232 15.3201 1.88293 16.1803C1.93093 17.2621 1.99 18.0558 2.17091 18.6539C2.34444 19.2299 2.53827 19.8169 3.17329 20.5221C3.80832 21.2291 4.41935 21.5485 5.19837 21.7848C5.97923 22.0192 6.95946 22.0691 7.81048 22.1078C8.77409 22.1521 9.15806 22.1521 11.1813 22.1521H13.3651C14.9195 22.154 15.3108 22.1558 16.1821 22.1152C17.2621 22.0654 18.0558 22.0063 18.6558 21.8272C19.2299 21.6537 19.8169 21.458 20.5221 20.8249C21.2291 20.1898 21.5485 19.577 21.7848 18.7979C22.0192 18.0189 22.0709 17.0387 22.1097 16.1877C22.1521 15.2241 22.1521 14.8419 22.1521 12.8242V11.1813C22.1521 9.15807 22.1521 8.77594 22.1097 7.81048C22.0709 6.95946 22.0192 5.97923 21.7848 5.20022C21.5503 4.41935 21.231 3.80832 20.5221 3.17329C19.8151 2.53827 19.2299 2.34444 18.6558 2.17091C18.0558 1.99185 17.2621 1.93093 16.1821 1.88293C15.2437 1.84437 14.3043 1.83206 13.3651 1.84601H11.1813C9.15806 1.84601 8.77409 1.84601 7.81048 1.88847C6.95946 1.92724 5.97923 1.97892 5.19837 2.21337C4.41935 2.44966 3.80832 2.76902 3.17329 3.47604C2.53827 4.18306 2.34259 4.76825 2.17091 5.3442C1.99 5.94231 1.93093 6.7361 1.88293 7.81786C1.84232 8.6781 1.84232 9.0713 1.84601 10.5869ZM11.9991 7.84555C10.8975 7.84555 9.84103 8.28315 9.06209 9.06209C8.28315 9.84103 7.84555 10.8975 7.84555 11.9991C7.84555 13.1007 8.28315 14.1571 9.06209 14.9361C9.84103 15.715 10.8975 16.1526 11.9991 16.1526C13.1007 16.1526 14.1571 15.715 14.9361 14.9361C15.715 14.1571 16.1526 13.1007 16.1526 11.9991C16.1526 10.8975 15.715 9.84103 14.9361 9.06209C14.1571 8.28315 13.1007 7.84555 11.9991 7.84555ZM5.99954 11.9991C5.99954 10.4079 6.63163 8.88189 7.75676 7.75676C8.88189 6.63163 10.4079 5.99954 11.9991 5.99954C13.5903 5.99954 15.1163 6.63163 16.2414 7.75676C17.3665 8.88189 17.9986 10.4079 17.9986 11.9991C17.9986 13.5903 17.3665 15.1163 16.2414 16.2414C15.1163 17.3665 13.5903 17.9986 11.9991 17.9986C10.4079 17.9986 8.88189 17.3665 7.75676 16.2414C6.63163 15.1163 5.99954 13.5903 5.99954 11.9991ZM18.4047 6.97793C18.7719 6.97793 19.1241 6.83206 19.3837 6.57241C19.6434 6.31277 19.7892 5.96061 19.7892 5.59342C19.7892 5.22622 19.6434 4.87407 19.3837 4.61442C19.1241 4.35477 18.7719 4.20891 18.4047 4.20891C18.0375 4.20891 17.6854 4.35477 17.4257 4.61442C17.1661 4.87407 17.0202 5.22622 17.0202 5.59342C17.0202 5.96061 17.1661 6.31277 17.4257 6.57241C17.6854 6.83206 18.0375 6.97793 18.4047 6.97793Z"
                      fill="#888989"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Container>
        </div>
        {scrollPosition > 58.4 ? (
          <nav className="bg_semidark fixed-top zindex_2">
            <Container>
              <div className=" d-lg-flex align-items-center justify-content-between ">
                <div className="d-flex align-items-center justify-content-between">
                  <img src={PageLogo} alt="PageaLogo" />
                  <div
                    className="w_35 d-flex align-items-end flex-column  d-lg-none"
                    onClick={() => setNavOpen(true)}
                  >
                    <span className="line w-100"></span>
                    <span className="line my-1 w-75"></span>
                    <span className="line w-50"></span>
                  </div>
                </div>
                <div
                  className={navOpen ? "openblueoverlay " : "closeblueoverlay "}
                >
                  <div
                    className={navOpen ? "navopen ms-0" : "navopen mr_n_320"}
                  >
                    <ul className="d-flex flex-column flex-lg-row mb-0 ps-lg-0">
                      <li className=" d-lg-none py-4 my-3">
                        <img src={PageLogo} alt="PageaLogo" />
                        <img
                          className="closeicon"
                          width={25}
                          onClick={() => setNavOpen(false)}
                          src={close}
                          alt="close"
                        />
                      </li>
                      <li className="linkopen position-relative py-lg-4">
                        <Link
                          className="navlinkl d-inline-block"
                          to="/"
                          onClick={() => setNavOpen(false)}
                        >
                          Home
                        </Link>

                        <ul className="dropdown ps-0">
                          <li>
                            <Link
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              to="/"
                              onClick={() => setNavOpen(false)}
                            >
                              Home page 01
                            </Link>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Home page 02
                            </a>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Home page 03
                            </a>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Home page 04
                            </a>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover border-bottom-0"
                              href="#"
                            >
                              Home page 05(New)
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="linkopen position-relative  py-lg-4">
                        <a
                          className="navlinkl d-inline-block mt-4 mt-lg-0"
                          href="#"
                        >
                          About us
                        </a>
                        <ul className="dropdown about_dropdown ps-0">
                          <li>
                            <Link
                              to="/CompanyProfile"
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              onClick={() => setNavOpen(false)}
                            >
                              Company Profile
                            </Link>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Our Team
                            </a>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover border-bottom-0"
                              href="#"
                            >
                              Testimonials
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="linkopen position-relative  py-lg-4">
                        <a
                          className="navlinkl d-inline-block mt-4 mt-lg-0"
                          href="#"
                        >
                          Our Services
                        </a>
                        <ul className="dropdown Services_dropdown ps-0">
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Services Style1 Dark
                            </a>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Services Style2 Light
                            </a>
                          </li>
                          <li>
                            <NavLink
                              to="/OurServicesPage"
                              onClick={() => setNavOpen(false)}
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                            >
                              Services Details 1
                            </NavLink>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover border-bottom-0 "
                              href="#"
                            >
                              Services Details 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="linkopen position-relative  py-lg-4">
                        <Link
                          className="navlinkl d-inline-block mt-4 mt-lg-0"
                          to="/ContactUsPage"
                          onClick={() => setNavOpen(false)}
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li className=" d-none d-lg-flex py-lg-4">
                        <a
                          className="navli nkl ps-3 ms-3 boder_left"
                          onClick={() => setSearchOpen(true)}
                          href="#"
                        >
                          <img width={20} src={SearchIcon} alt="SearchIcon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </nav>
        ) : (
          <nav className="bg_semidark zindex_2 position-absolute w-100">
            <Container>
              <div className=" d-lg-flex align-items-center justify-content-between ">
                <div className="d-flex align-items-center justify-content-between">
                  <img src={PageLogo} alt="PageaLogo" />
                  <div
                    className="w_35 d-flex align-items-end flex-column  d-lg-none"
                    onClick={() => setNavOpen(true)}
                  >
                    <span className="line w-100"></span>
                    <span className="line my-1 w-75"></span>
                    <span className="line w-50"></span>
                  </div>
                </div>
                <div
                  className={navOpen ? "openblueoverlay " : "closeblueoverlay "}
                >
                  <div
                    className={navOpen ? "navopen ms-0" : "navopen mr_n_320"}
                  >
                    <ul className="d-flex flex-column flex-lg-row mb-0 ps-lg-0">
                      <li className=" d-lg-none py-4 my-3">
                        <img src={PageLogo} alt="PageaLogo" />
                        <img
                          className="closeicon"
                          width={25}
                          onClick={() => setNavOpen(false)}
                          src={close}
                          alt="close"
                        />
                      </li>
                      <li className="linkopen position-relative py-lg-4">
                        <Link
                          className="navlinkl d-inline-block"
                          to="/"
                          onClick={() => setNavOpen(false)}
                        >
                          Home
                        </Link>

                        <ul className="dropdown ps-0">
                          <li>
                            <Link
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              to="/"
                              onClick={() => setNavOpen(false)}
                            >
                              Home page 01
                            </Link>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Home page 02
                            </a>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Home page 03
                            </a>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Home page 04
                            </a>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover border-bottom-0"
                              href="#"
                            >
                              Home page 05(New)
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="linkopen position-relative  py-lg-4">
                        <a
                          className="navlinkl d-inline-block mt-4 mt-lg-0"
                          href="#"
                        >
                          About us
                        </a>
                        <ul className="dropdown about_dropdown ps-0">
                          <li>
                            <Link
                              to="/CompanyProfile"
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              onClick={() => setNavOpen(false)}
                            >
                              Company Profile
                            </Link>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Our Team
                            </a>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover border-bottom-0"
                              href="#"
                            >
                              Testimonials
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="linkopen position-relative  py-lg-4">
                        <a
                          className="navlinkl d-inline-block mt-4 mt-lg-0"
                          href="#"
                        >
                          Our Services
                        </a>
                        <ul className="dropdown Services_dropdown ps-0">
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Services Style1 Dark
                            </a>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                              href="#"
                            >
                              Services Style2 Light
                            </a>
                          </li>
                          <li>
                            <NavLink
                              to="/OurServicesPage"
                              onClick={() => setNavOpen(false)}
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover "
                            >
                              Services Details 1
                            </NavLink>
                          </li>
                          <li>
                            <a
                              className=" text-nowrap py-2 d-inline-block hoverlink w-100 linkhover border-bottom-0 "
                              href="#"
                            >
                              Services Details 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="linkopen position-relative  py-lg-4">
                        <Link
                          className="navlinkl d-inline-block mt-4 mt-lg-0"
                          to="/ContactUsPage"
                          onClick={() => setNavOpen(false)}
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li className=" d-none d-lg-flex py-lg-4">
                        <a
                          className="navli nkl ps-3 ms-3 boder_left"
                          onClick={() => setSearchOpen(true)}
                          href="#"
                        >
                          <img width={20} src={SearchIcon} alt="SearchIcon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </nav>
        )}
        <div
          className={`${
            searchOpen
              ? "SearchBar d-flex align-items-center ms-0"
              : "SearchBar d-flex align-items-center ml"
          }`}
        >
          <div className="forminput h-1 00 mx-auto d-flex align-items-center w-100">
            <form className="w-100 ">
              <input
                type="text"
                placeholder="Search Here"
                className="p-3 w-100"
              />
            </form>
            <button className="fs-xl fw_regular text_light bg_secondary px-4 py-3 border-0 text-uppercase text-nowrap py-2 d-inline-block hoverlink">
              Search Now!
            </button>
            <img
              className="closeicon"
              onClick={() => setSearchOpen(false)}
              src={close}
              alt="close"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavFile;
