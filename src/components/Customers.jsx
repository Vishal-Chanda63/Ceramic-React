import React from "react";
import starImg from "../assets/svg/Star.svg";
import greenStar from "../assets/svg/green_star.svg";
import googleImg from "../assets/svg/google.svg";
import markT from "../assets/svg/mark-t.svg";

const Customers = () => {
  return (
    <section id="portfolio" class="py-2 py-sm-4 py-lg-5 px-3 mt-4 mt-sm-5">
      <div class="container">
        <div class="row mt-0 mt-sm-4 pt-3">
          <div class="col mt-0 mt-sm-1">
            <h2 class="font_xxg fw_600 text-center mb-0">
              What Our Customers Say
            </h2>
            <p
              class="font_md mt-1 mt-sm-3 pt-1 pb-2 black line_height_paragraph why_choose_para text-center
                        m-auto"
            >
              Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
              Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade{" "}
            </p>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-center mt-4 customer_review_card m-auto ms-sm-0">
          <div class="google_review_box review_border cursur d-inline-block me-sm-4 mb-4 mb-sm-0 review_padding_right">
            <div class="d-flex align-items-center">
              <div class="me-2 pe-1">
                <img src={googleImg} alt="Google" />
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
          <div class="google_review_box review_border cursur d-inline-block me-0 me-sm-4 ">
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

      <div class="row slider_responsive mb-3 mt-2">
        <div class="slider_box d-flex flex-column p-4 my-5 me-4">
          <div class=" d-flex">
            <div class="me-2">
              <img src={markT} alt="markT" />
            </div>
            <div>
              <p class="font_m black manrope_font mb-0 fw_600">Mark T.</p>
              <p class="font_sm manrope_font black mb-0">Fitness enthusiast</p>
            </div>
          </div>

          <div class="my-3 d-flex slider_star_img">
            {/* <img src="./assets/image/svg/Star 1.svg" alt="Star">
                    <img src="./assets/image/svg/Star 1.svg" alt="Star">
                    <img src="./assets/image/svg/Star 1.svg" alt="Star">
                    <img src="./assets/image/svg/Star 1.svg" alt="Star">
                    <img src="./assets/image/svg/Star 1.svg" alt="Star"> */}
          </div>

          <p class="font_m manrope_font black line_height_para mb-0 slider_paras">
            "As a fitness enthusiast, I was skeptical about resistance bands at
            first. But after trying these, I'm a believer. The quality is
            top-notch, and they've become an integral part of my workout
            routine. I can't believe how versatile they are.”
          </p>
        </div>
        <div class="slider_box d-flex flex-column p-4 my-5 me-4">
          <div class=" d-flex">
            <div class="me-2">
              <img src={markT} alt="markT" />
            </div>
            <div>
              <p class="font_m black manrope_font mb-0 fw_600">Mark T.</p>
              <p class="font_sm manrope_font black mb-0">Fitness enthusiast</p>
            </div>
          </div>

          <div class="my-3 d-flex slider_star_img">
            {/* <img src="./assets/image/svg/Star 1.svg" alt="Star">
                    <img src="./assets/image/svg/Star 1.svg" alt="Star">
                    <img src="./assets/image/svg/Star 1.svg" alt="Star">
                    <img src="./assets/image/svg/Star 1.svg" alt="Star">
                    <img src="./assets/image/svg/Star 1.svg" alt="Star"> */}
          </div>

          <p class="font_m manrope_font black line_height_para mb-0 slider_paras">
            "As a fitness enthusiast, I was skeptical about resistance bands at
            first. But after trying these, I'm a believer. The quality is
            top-notch, and they've become an integral part of my workout
            routine. I can't believe how versatile they are.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Customers;
