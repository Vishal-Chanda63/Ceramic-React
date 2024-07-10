import React from "react";
import heroLogo from "../assets/svg/hero-logo.svg";

const Header = () => {
  return (
    <>
      <nav class="navbar-wrapper">
        <div id="overlay">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="left d-flex justify-content-center text-center flex-column align-items-center">
                  <ul class="list-unstyled pt-5">
                    <li class="py-lg-3 py-2 overflow-hidden">
                      <span class="d-inline-block section-1">
                        <a
                          href="https://ceramic-smoky.vercel.app/"
                          class="overlay-links white font_xl fw_600"
                        >
                          Home
                        </a>
                      </span>
                    </li>
                    <li class="py-lg-3 py-2 overflow-hidden">
                      <span class="d-inline-block section-2">
                        <a
                          href="#about"
                          class="overlay-links white font_xl fw_600"
                        >
                          About
                        </a>
                      </span>
                    </li>
                    <li class="py-lg-3 py-2 overflow-hidden">
                      <span class="d-inline-block section-3">
                        <a
                          href="#services"
                          class="overlay-links white font_xl fw_600"
                        >
                          Services
                        </a>
                      </span>
                    </li>
                    <li class="py-lg-3 py-2 overflow-hidden">
                      <span class="d-inline-block section-4">
                        <a
                          href="#portfolio"
                          class="overlay-links white font_xl fw_600"
                        >
                          Portfolio
                        </a>
                      </span>
                    </li>
                    <li class="py-lg-3 py-2 overflow-hidden">
                      <span class="d-inline-block section-5">
                        <a
                          href="#contact"
                          class="overlay-links white font_xl fw_600"
                        >
                          Contact us
                        </a>
                      </span>
                    </li>
                    <li class="py-lg-3 py-2 overflow-hidden">
                      <span class="d-inline-block section-5">
                        <a
                          href="#quote"
                          class="overlay-links white font_xl fw_600"
                        >
                          Request a Qoute
                        </a>
                      </span>
                    </li>

                    <li class="py-2 py-sm-0 py-lg-3 overflow-hidden">
                      <div class="d-block d-sm-none">
                        <a href="tel: (865) 621-1717">
                          <button class="get_quote_btn fw-bold font_md navbar_btn">
                            (865) 621-1717
                          </button>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container ">
          <div class="nav-quantum py-2 py-lg-3 px-3 d-flex justify-content-between align-items-center">
            <div>
              <a href="\https://ceramic-smoky.vercel.app/">
                <img src={heroLogo} alt="heroLogo" />
              </a>
            </div>
            <div class="d-flex align-items-center">
              <div class="nav-items-wrap d-none d-lg-block">
                <ul class="nav-items-list list-unstyled align-items-center d-flex align-items-center mb-0">
                  <li class="n-item pe-3 pe-xl-4">
                    <a
                      href="https://ceramic-smoky.vercel.app/"
                      class="nav-links font_xsd fw_600"
                    >
                      Home
                    </a>
                  </li>
                  <li class="n-item pe-3 pe-xl-4">
                    <a class="nav-links font_xsd fw_600" href="#about">
                      About
                    </a>
                  </li>
                  <li class="n-item pe-3 pe-xl-4">
                    <a href="#services" class="nav-links font_xsd fw_600">
                      Services
                    </a>
                  </li>
                  <li class="n-item pe-3 pe-xl-4">
                    <a href="#portfolio" class="nav-links font_xsd fw_600">
                      Portfolio
                    </a>
                  </li>
                  <li class="n-item pe-3 pe-xl-4">
                    <a href="#contact" class="nav-links font_xsd fw_600">
                      Contact us
                    </a>
                  </li>
                  <li class="n-item pe-3 pe-xl-4">
                    <a href="#quote" class="nav-links font_xsd fw_600">
                      Request a Qoute
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="d-flex align-items-center">
              <div class="d-none d-sm-block me-4">
                <a href="tel: (865) 621-1717">
                  <button class="common_btn navbar_btn_quote fw-bold font_m d-flex">
                    <svg
                      className="me-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z"
                        fill="white"
                      />
                      <path
                        d="M21.9701 18.33C21.9701 18.61 21.9201 18.9 21.8201 19.18C21.7901 19.26 21.7601 19.34 21.7201 19.42C21.5501 19.78 21.3301 20.12 21.0401 20.44C20.5501 20.98 20.0101 21.37 19.4001 21.62C19.3901 21.62 19.3801 21.63 19.3701 21.63C18.7801 21.87 18.1401 22 17.4501 22C16.4301 22 15.3401 21.76 14.1901 21.27C13.0401 20.78 11.8901 20.12 10.7501 19.29C10.3601 19 9.9701 18.71 9.6001 18.4L12.8701 15.13C13.1501 15.34 13.4001 15.5 13.6101 15.61C13.6601 15.63 13.7201 15.66 13.7901 15.69C13.8701 15.72 13.9501 15.73 14.0401 15.73C14.2101 15.73 14.3401 15.67 14.4501 15.56L15.2101 14.81C15.4601 14.56 15.7001 14.37 15.9301 14.25C16.1601 14.11 16.3901 14.04 16.6401 14.04C16.8301 14.04 17.0301 14.08 17.2501 14.17C17.4701 14.26 17.7001 14.39 17.9501 14.56L21.2601 16.91C21.5201 17.09 21.7001 17.3 21.8101 17.55C21.9101 17.8 21.9701 18.05 21.9701 18.33Z"
                        fill="white"
                      />
                    </svg>
                    (865) 621-1717
                  </button>
                </a>
              </div>

              <div
                id="main-menu"
                class="hamburger-menu d-inline-block d-lg-none"
              >
                <span class="first"></span>
                <span class="sec"></span>
                <span class="third"></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
