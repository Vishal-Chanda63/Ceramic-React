import React from "react";
import googleImg from "../assets/svg/google.svg";
import starImg from "../assets/svg/Star.svg";
import greenStar from "../assets/svg/green_starr.svg";

const Hero = () => {
  return (
    <>
      <section className="hero_bg d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div>
                <h1 className="white fw_600 font_xxl lh-sm">
                  Transform Your Space with Precision and Quality:{" "}
                  <span className="d-block ">Get a Free Quote Today!</span>
                </h1>
                <p className="white my-3 pt-1 pb-3 font_md line_28 hero_para">
                  Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
                  Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
                  nyheter eurosamma sol: teroktig,
                </p>
                <button className="common_btn font_md fw-bold mt-1">
                  Get A Quote
                </button>

                <div class="mt-5 pt-0 pt-sm-3 d-flex flex-column flex-md-row">
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
                        <div class="me-2 pe-1"></div>
                        <img src={greenStar} alt="greenStar" />
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
                  </div>

                  <div class="d-flex justify-content-center justify-content-sm-start">
                    <div class="me-4 mb-4 mb-sm-0"></div>
                    <div class="me-0 me-sm-4"></div>
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
