import React, { useRef, useState } from "react";
import googleImg from "../assets/svg/google.svg";
import starImg from "../assets/svg/Star.svg";
import greenStar from "../assets/svg/green_star.svg";
import certifiedLogo from "../assets/svg/certified-logo.svg";
import awardLogo from "../assets/svg/award_logo.svg";

const Hero = () => {
  const [circleStyle, setCircleStyle] = useState({ left: 0, top: 0 });
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const handleMouseEnter = (e) => {
    const parentOffset = buttonRef.current.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.pageY - parentOffset.top;
    setCircleStyle({ left: relX, top: relY });
    circleRef.current.classList.remove("desplode-circle");
    circleRef.current.classList.add("explode-circle");
  };
  const handleMouseLeave = (e) => {
    const parentOffset = buttonRef.current.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.pageY - parentOffset.top;
    setCircleStyle({ left: relX, top: relY });
    circleRef.current.classList.remove("explode-circle");
    circleRef.current.classList.add("desplode-circle");
  };

  return (
    <>
      <section className="mt-5 pt-0 pt-lg-4">
        <div className="container">
          <div className="row mt-0 mt-sm-2">
            <div className="col-12 col-lg-10 col-xl-9">
              <div className="text-center text-md-start">
                <h1 className="white fw_600 font_xxl lh-sm text-center text-md-start hero_text">
                  Transform Your Space with Precision and Quality:{" "}
                  <span className="d-inline d-lg-block ">
                    Get a Free Quote Today!
                  </span>
                </h1>
                <p className="white my-3 pt-1 pb-0 pb-sm-3 font_md line_28 hero_para">
                  Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
                  Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
                  nyheter eurosamma sol: teroktig,
                </p>
                <div
                  className="button_su_inner font_md fw-bold cursur position-relative overflow-hidden"
                  ref={buttonRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="su_button_circle white"
                    ref={circleRef}
                    style={circleStyle}
                  ></div>
                  Get a Quote
                </div>

                <div class="mt-4 mt-sm-5 pt-0 pt-sm-3 d-flex flex-column flex-md-row">
                  <div class="d-inline d-md-flex  mb-4">
                    <div class="google_review_box cursur d-inline-block me-sm-4 mb-4 mb-sm-0 review_padding_right">
                      <div class="d-flex align-items-center">
                        <div class="me-2 pe-1">
                          <img src={googleImg} alt="Google" />
                        </div>

                        <div>
                          <p class="mb-0 manrope_font font_xsm dark_black text-start">
                            Google Review
                          </p>

                          <div class="d-flex">
                            <p class="mb-0 manrope_font font_lg dark_black me-1">
                              4.6
                            </p>
                            <div>
                              <img src={starImg} alt="starImg" />
                              <img
                                className="mx-1"
                                src={starImg}
                                alt="starImg"
                              />
                              <img src={starImg} alt="starImg" />
                              <img
                                className="mx-1"
                                src={starImg}
                                alt="starImg"
                              />
                              <img src={starImg} alt="starImg" />
                            </div>
                          </div>

                          <p class="mb-0 manrope_font font_xsm dark_black">
                            Based on 145 reviews
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="google_review_box cursur d-inline-block me-0 me-sm-4 ">
                      <div class="d-flex align-items-center">
                        <div class="me-2 pe-1">
                          <img src={greenStar} alt="greenStar" />
                        </div>

                        <div>
                          <p class="mb-0 manrope_font font_xsm dark_black text-start">
                            Trust Pilot Review
                          </p>

                          <div class="d-flex">
                            <p class="mb-0 manrope_font font_lg dark_black me-1">
                              4.6
                            </p>
                            <div>
                              <img src={starImg} alt="starImg" />
                              <img
                                className="mx-1"
                                src={starImg}
                                alt="starImg"
                              />
                              <img src={starImg} alt="starImg" />
                              <img
                                className="mx-1"
                                src={starImg}
                                alt="starImg"
                              />
                              <img src={starImg} alt="starImg" />
                            </div>
                          </div>

                          <p class="mb-0 manrope_font font_xsm dark_black">
                            Based on 145 reviews
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 mt-md-0 d-flex justify-content-center">
                      <img
                        className="cursur me-4"
                        src={certifiedLogo}
                        alt="certifiedLogo"
                      />
                      <img className="cursur" src={awardLogo} alt="awardLogo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
