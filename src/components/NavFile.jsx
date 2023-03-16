import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { ContextPage } from "./context/Pagecontext";
import PageLogo from "../assets/images/svg/PageLogo.svg";
import SearchIcon from "../assets/images/svg/SearchIcon.svg";
import close from "../assets/images/svg/close.svg";
import PhoneIcon from "../assets/images/svg/PhoneIcon.svg";
import { Link, NavLink } from "react-router-dom";

function NavFile() {
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
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.429 6.969H11.143V8.819C11.678 7.755 13.05 6.799 15.111 6.799C19.062 6.799 20 8.917 20 12.803V20H16V13.688C16 11.475 15.465 10.227 14.103 10.227C12.214 10.227 11.429 11.572 11.429 13.687V20H7.429V6.969ZM0.57 19.83H4.57V6.799H0.57V19.83ZM5.143 2.55C5.14315 2.88528 5.07666 3.21724 4.94739 3.52659C4.81812 3.83594 4.62865 4.11651 4.39 4.352C3.9064 4.83262 3.25181 5.10165 2.57 5.1C1.88939 5.09954 1.23631 4.8312 0.752 4.353C0.514211 4.11671 0.325386 3.83582 0.196344 3.52643C0.0673015 3.21704 0.000579132 2.88522 0 2.55C0 1.873 0.27 1.225 0.753 0.747C1.23689 0.268158 1.89024 -0.000299211 2.571 2.50265e-07C3.253 2.50265e-07 3.907 0.269 4.39 0.747C4.872 1.225 5.143 1.873 5.143 2.55Z"
                      fill="#888989"
                    />
                  </svg>
                </a>
                <a href="#" className="boder_left ps-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.0001 2.30698C23.1028 2.70671 22.1499 2.96769 21.1741 3.08097C22.202 2.46498 22.9715 1.49715 23.3401 0.356975C22.3734 0.929809 21.3164 1.33407 20.2141 1.55248C19.7529 1.0616 19.1958 0.670658 18.5773 0.403866C17.9589 0.137074 17.2922 0.000115313 16.6186 0.00147487C15.8767 0.000699154 15.1442 0.167728 14.476 0.490061C13.8077 0.812394 13.221 1.28168 12.7598 1.86281C12.2986 2.44394 11.9747 3.12186 11.8125 3.84584C11.6503 4.56981 11.6539 5.3211 11.8231 6.04347C9.8652 5.9451 7.94983 5.43607 6.20138 4.54944C4.45292 3.66281 2.91047 2.41839 1.67414 0.896975C1.04436 1.98049 0.851236 3.2633 1.1341 4.48421C1.41696 5.70512 2.15454 6.77231 3.19664 7.46848C2.41462 7.4432 1.64972 7.23295 0.964641 6.85498V6.91648C0.964368 8.05375 1.35774 9.15606 2.07795 10.0362C2.79816 10.9164 3.80081 11.5202 4.91564 11.745C4.18937 11.9429 3.42745 11.9722 2.68814 11.8305C3.00367 12.8083 3.61624 13.6633 4.44057 14.2766C5.26489 14.8898 6.25993 15.2308 7.28714 15.252C6.26532 16.0547 5.09517 16.648 3.84372 16.9978C2.59226 17.3476 1.2841 17.447 -0.00585938 17.2905C2.2462 18.7383 4.86781 19.5065 7.54514 19.503C16.6006 19.503 21.5566 11.9985 21.5566 5.49147C21.5566 5.27547 21.5521 5.06547 21.5431 4.85398C22.508 4.15999 23.3398 3.29769 23.9986 2.30848L24.0001 2.30698Z"
                      fill="#888989"
                    />
                  </svg>
                </a>
                <a href="#" className="boder_left ps-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 22 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 6H20V4H18V6H16V8H18V10H20V8H22M7 6V8.4H11C10.8 9.4 9.8 11.4 7 11.4C4.6 11.4 2.7 9.4 2.7 7C2.7 4.6 4.6 2.6 7 2.6C8.4 2.6 9.3 3.2 9.8 3.7L11.7 1.9C10.5 0.7 8.9 0 7 0C3.1 0 0 3.1 0 7C0 10.9 3.1 14 7 14C11 14 13.7 11.2 13.7 7.2C13.7 6.7 13.7 6.4 13.6 6H7Z"
                      fill="#888989"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Container>
        </div>
        <nav className="bg_semidark position-sticky top-0 zindex_2">
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
                <div className={navOpen ? "navopen ms-0" : "navopen mr_n_320"}>
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
