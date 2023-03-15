import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageLogo from "../assets/images/svg/PageLogo.svg";

function FooterSection() {
  const [formsubmit, setFormsubmit] = useState({
    YourName: "",
    YourEmail: "",
    Message: "",
  });
  const SubmitForm = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormsubmit({ ...formsubmit, [name]: value });
  };
  const FormSubmitNow = (e) => {
    e.preventDefault();
    setFormsubmit({
      YourName: "",
      YourEmail: "",
      Message: "",
    });
  };

  return (
    <div className=" bg_primary py-5">
      <Container>
        <Row>
          <Col xs={12} lg={3}>
            <img src={PageLogo} alt="img" />
            <p className=" ff_opensans fs_xsm fw_regular text_tertiary">
              With our Experience of over 25+ Years in the Industry, the company
              is highly skilled and is equipped with the best of facilities to
              match all High Quality Moving Standards.
            </p>
            <div className=" d-flex gap-3 py-2">
              <div className="footer_icon d-flex align-items-center justify-content-center">
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 10H16V13H13V20H10V13H7V10H10V8.745C10 7.556 10.374 6.054 11.118 5.233C11.862 4.41 12.791 4 13.904 4H16V7H13.9C13.402 7 13 7.402 13 7.899V10Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="footer_icon d-flex align-items-center justify-content-center">
                <a href="#">
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
                      d="M9.429 8.969H13.143V10.819C13.678 9.755 15.05 8.799 17.111 8.799C21.062 8.799 22 10.917 22 14.803V22H18V15.688C18 13.475 17.465 12.227 16.103 12.227C14.214 12.227 13.429 13.572 13.429 15.687V22H9.429V8.969ZM2.57 21.83H6.57V8.799H2.57V21.83ZM7.143 4.55C7.14315 4.88528 7.07666 5.21724 6.94739 5.52659C6.81812 5.83594 6.62865 6.11651 6.39 6.352C5.9064 6.83262 5.25181 7.10165 4.57 7.1C3.88939 7.09954 3.23631 6.8312 2.752 6.353C2.51421 6.11671 2.32539 5.83582 2.19634 5.52643C2.0673 5.21704 2.00058 4.88522 2 4.55C2 3.873 2.27 3.225 2.753 2.747C3.23689 2.26816 3.89024 1.9997 4.571 2C5.253 2 5.907 2.269 6.39 2.747C6.872 3.225 7.143 3.873 7.143 4.55Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="footer_icon d-flex align-items-center justify-content-center">
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_52_6)">
                      <path
                        d="M24.0001 5.30698C23.1028 5.70671 22.1499 5.96769 21.1741 6.08097C22.202 5.46498 22.9715 4.49715 23.3401 3.35697C22.3734 3.92981 21.3164 4.33407 20.2141 4.55248C19.7529 4.0616 19.1958 3.67066 18.5773 3.40387C17.9589 3.13707 17.2922 3.00012 16.6186 3.00147C15.8767 3.0007 15.1442 3.16773 14.476 3.49006C13.8077 3.81239 13.221 4.28168 12.7598 4.86281C12.2986 5.44394 11.9747 6.12186 11.8125 6.84584C11.6503 7.56981 11.6539 8.3211 11.8231 9.04347C9.8652 8.9451 7.94983 8.43607 6.20138 7.54944C4.45292 6.66281 2.91047 5.41839 1.67414 3.89698C1.04436 4.98049 0.851236 6.2633 1.1341 7.48421C1.41696 8.70512 2.15454 9.77231 3.19664 10.4685C2.41462 10.4432 1.64972 10.233 0.964641 9.85498V9.91648C0.964368 11.0537 1.35774 12.1561 2.07795 13.0362C2.79816 13.9164 3.80081 14.5202 4.91564 14.745C4.18937 14.9429 3.42745 14.9722 2.68814 14.8305C3.00367 15.8083 3.61624 16.6633 4.44057 17.2766C5.26489 17.8898 6.25993 18.2308 7.28714 18.252C6.26532 19.0547 5.09517 19.648 3.84372 19.9978C2.59226 20.3476 1.2841 20.447 -0.00585938 20.2905C2.2462 21.7383 4.86781 22.5065 7.54514 22.503C16.6006 22.503 21.5566 14.9985 21.5566 8.49147C21.5566 8.27547 21.5521 8.06548 21.5431 7.85398C22.508 7.15999 23.3398 6.29769 23.9986 5.30848L24.0001 5.30698Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_52_6">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="footer_icon d-flex align-items-center justify-content-center">
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 11H21V9H19V11H17V13H19V15H21V13H23M8 11V13.4H12C11.8 14.4 10.8 16.4 8 16.4C5.6 16.4 3.7 14.4 3.7 12C3.7 9.6 5.6 7.6 8 7.6C9.4 7.6 10.3 8.2 10.8 8.7L12.7 6.9C11.5 5.7 9.9 5 8 5C4.1 5 1 8.1 1 12C1 15.9 4.1 19 8 19C12 19 14.7 16.2 14.7 12.2C14.7 11.7 14.7 11.4 14.6 11H8Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={9}>
            <Row>
              <Col xs={12} sm={6} md={4} className="pt-4 pt-lg-0">
                <ul className="ps-0 ps-lg-5">
                  <li className=" ff_rufina fs_xl fw_regular text_light">
                    Our Services
                  </li>
                  <span className="spanbottom d-inline-block my-3"></span>
                  <li>
                    <a
                      className=" ff_opensans fs_xsm fw_regular text_tertiary footer_link"
                      href="#"
                    >
                      Warehousing
                    </a>
                  </li>
                  <li>
                    <a
                      className=" ff_opensans fs_xsm fw_regular text_tertiary footer_link mt-2 d-inline-block"
                      href="#"
                    >
                      Machinery Transport
                    </a>
                  </li>
                  <li>
                    <a
                      className=" ff_opensans fs_xsm fw_regular text_tertiary footer_link mt-2 d-inline-block"
                      href="#"
                    >
                      Transportation
                    </a>
                  </li>
                  <li>
                    <a
                      className=" ff_opensans fs_xsm fw_regular text_tertiary footer_link mt-2 d-inline-block"
                      href="#"
                    >
                      Multimodal Transportation
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={4} className="pt-4 pt-lg-0">
                <ul className="ps-0">
                  <li className=" ff_rufina fs_xl fw_regular text_light">
                    Contact Details
                  </li>
                  <span className="spanbottom d-inline-block my-3"></span>
                  <li>
                    <a
                      className=" ff_opensans fs_xsm fw_regular text_tertiary footer_link"
                      href="#"
                    >
                      (1234) 567 8910
                    </a>
                  </li>
                  <li>
                    <a
                      className=" ff_opensans fs_xsm fw_regular text_tertiary footer_link mt-2 d-inline-block"
                      href="#"
                    >
                      000, hisar, India
                    </a>
                  </li>
                  <li>
                    <a
                      className=" ff_opensans fs_xsm fw_regular text_tertiary footer_link mt-2 d-inline-block"
                      href="#"
                    >
                      hexabirdspvtltd@gmail.com
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={4} className="pt-4 pt-lg-0">
                <ul className="ps-0">
                  <li className=" ff_rufina fs_xl fw_regular text_light">
                    Quick Inquiry
                  </li>
                  <span className="spanbottom d-inline-block my-3"></span>
                  <form onSubmit={FormSubmitNow}>
                    <input
                      className="w-100 bg-transparent form_input my-2 py-2 ps-4 ff_opensans fs_xsm fw_regular text_light"
                      type="text"
                      placeholder="Your Name"
                      name="YourName"
                      id="YourName"
                      onChange={SubmitForm}
                      value={formsubmit.YourName}
                      required
                    />
                    <input
                      className="w-100 bg-transparent form_input my-2 py-2 ps-4 ff_opensans fs_xsm fw_regular text_light"
                      type="text"
                      placeholder="Your Email"
                      name="YourEmail"
                      id="YourEmail"
                      onChange={SubmitForm}
                      value={formsubmit.YourEmail}
                      required
                    />
                    <input
                      className="w-100 bg-transparent form_input my-2 py-2 ps-4 ff_opensans fs_xsm fw_regular text_light"
                      type="text"
                      placeholder="Message"
                      name="Message"
                      id="Message"
                      onChange={SubmitForm}
                      value={formsubmit.Message}
                      required
                    />
                    <button className="border-0 py-2 px-4 ff_opensans fs_md fw_bold text_primary bg_secondary Know_button mt-3">
                      submit
                    </button>
                  </form>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className=" d-md-flex align-items-center justify-content-between pt-4 mt-5 border_top">
          <h2 className=" ff_opensans fs_xsm fw_regular text_light">
            © Yoursite 2021 All Right Reserved.
          </h2>
          <p className="ff_opensans fs_xsm fw_regular text_light pt-3 pt-md-0">
            Terms & Conditions | Privacy Policy | Disclaimer
          </p>
        </div>
      </Container>
    </div>
  );
}

export default FooterSection;
