import React from "react";
import googleImg from "../assets/svg/google.svg";
import starImg from "../assets/svg/Star.svg";
import greenStar from "../assets/svg/green_star.svg";
import Customers from "./Customers";

const CustomerReview = () => {
  return (
    <>
      <div class="container pt-0 pt-lg-5 mt-5">
        <div class="row mt-0 mt-sm-4 pt-0 pt-sm-3">
          <div class="col mt-0 mt-sm-1">
            <h2 class="font_xxg fw_600 text-center mb-0 mt-0 mt-sm-1">
              What Our Customers Say
            </h2>
            <p
              class="font_md mt-1 mt-sm-3 pt-1 pb-2 black line_28 why_choose_para text-center
                        m-auto"
            >
              Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
              Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
            </p>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-center mt-4 customer_review_card m-auto ms-sm-0">
          <div class="google_review_box cursur review_border d-inline-block me-0 me-sm-4 mb-4 mb-sm-0">
            <div class="d-flex align-items-center">
              <div class="me-2 pe-1">
                <img src={googleImg} alt="googleImg" />
              </div>

              <div>
                <p class="mb-0 manrope_font font_xsm dark_black text-start">
                  Google Review
                </p>

                <div class="d-flex">
                  <p class="mb-0 manrope_font font_lg dark_black me-1">4.6</p>
                  <div>
                    <img src={starImg} alt="starImg" />
                    <img className="mx-1" src={starImg} alt="starImg" />
                    <img src={starImg} alt="starImg" />
                    <img className="mx-1" src={starImg} alt="starImg" />
                    <img src={starImg} alt="starImg" />
                  </div>
                </div>

                <p class="mb-0 manrope_font font_xsm dark_black">
                  Based on 145 reviews
                </p>
              </div>
            </div>
          </div>
          <div class="google_review_box cursur review_border d-inline-block ">
            <div class="d-flex align-items-center">
              <div class="me-2 pe-1">
                <img src={greenStar} alt="greenStar" />
              </div>

              <div>
                <p class="mb-0 manrope_font font_xsm dark_black text-start">
                  Trust Pilot Review
                </p>

                <div class="d-flex">
                  <p class="mb-0 manrope_font font_lg dark_black me-1">4.6</p>
                  <div>
                    <img src={starImg} alt="starImg" />
                    <img className="mx-1" src={starImg} alt="starImg" />
                    <img src={starImg} alt="starImg" />
                    <img className="mx-1" src={starImg} alt="starImg" />
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
      </div>
      <Customers />
    </>
  );
};

export default CustomerReview;
