import React, { useState } from "react";
import whyChooseImg from "../assets/png/why-choose-img.png";
import whyCHooseStar from "../assets/svg/why_choose_star.svg";
import LikeICons from "../assets/svg/like.svg";
import callIcon from "../assets/svg/phone-call.svg";

const Whychoose = () => {
  const [isVisible, setisVisible] = useState(false);
  const myArr = [
    {
      img: whyCHooseStar,
      title: "High Quality Materials",
      discription:
        "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.",
    },
    {
      img: LikeICons,
      title: "Durability with Warranty",
      discription:
        "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.",
    },
    {
      img: callIcon,
      title: "24/7 Support",
      discription:
        "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.",
    },
  ];

  return (
    <section class="why_choose_section py-0 py-sm-2 py-lg-5 px-3">
      <div class="container py-5 my-0 my-sm-1">
        <div class="row">
          <div class="col-12 col-lg-6 px-0 px-md-2">
            <h2 class="font_xxg fw_600 mb-0 text-capitalize black">
              Why Choose us?
            </h2>
            <p class="font_md my-1 my-sm-3 pt-1 pb-3 black line_height_paragraph why_choose_para">
              Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
              Pregigt primasofi dede facebooka: förutom tivaligt.
            </p>

            <div className="mb-4">
              {myArr.map((obj, index) => {
                return (
                  <>
                    <div class="d-flex mb-4">
                      <div class="star_box d-flex justify-content-center align-items-center">
                        <img src={obj.img} alt="why choose images" />
                      </div>
                      <div class="ms-3 ps-1 why_choose_material">
                        <h4 class="font_lg fw_600 lh-base mb-0 mb-sm-2 pb-1 dark_black_second">
                          {obj.title}
                        </h4>
                        <p class="black line_height_para mb-0 font_m choose_para">
                          {obj.discription}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div class="mt-4 pt-1">
              <button class="common_btn chose_quote_btn fw-bold font_md mt-2 text-capitalize">
                Get a Quote
              </button>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="position-relative main_red_box mt-5 mt-lg-0 pt-0 pt-sm-3 pt-lg-0">
              <div class="d-flex justify-content-center justify-content-lg-end img_box position-relative">
                <img class="choose_img" src={whyChooseImg} alt="whyChooseImg" />
              </div>
              <div class=" d-none d-lg-block red_box position-absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
