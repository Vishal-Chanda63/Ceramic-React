import React, { useState } from "react";

import worksImage from "../assets/png/works.png";
import tickImage from "../assets/svg/tick.svg";

const Works = () => {
  const [isVisible, setisVisible] = useState(false);

  const myArr = [
    {
      img: tickImage,
      title: "Contact us",
      discription:
        "Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening",
    },
    {
      img: tickImage,
      title: "Get a Qoute",
      discription:
        "Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening",
    },
    {
      img: tickImage,
      title: "Get your Work Done",
      discription:
        "Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening",
    },
  ];

  return (
    <section id="quote" class="py-0 py-sm-4 my-3 px-3 mt-5">
      <div class="container">
        <div class="row order-1 mt-0 mt-sm-1">
          <div class="col-12 col-lg-6 order-1 order-lg-0 pt-5 pt-lg-0">
            <div class="position-relative main_red_box pt-0 pt-sm-3 pt-lg-0">
              <div class="d-flex justify-content-center img_box position-relative">
                <img class="works_img" src={worksImage} alt="worksImage" />
              </div>
              <div class="red_box_second position-absolute d-none d-lg-block"></div>
            </div>
          </div>
          <div class="col-12 col-lg-6 px-0 pt-0 pt-lg-0">
            <div className="works_boxs">
              <h2 class="font_xxg fw_600 mb-0 text-capitalize">
                How it works?
              </h2>
              <p class="font_md my-2 my-sm-3 pt-0 pt-sm-1 pb-3 black line_height_paragraph">
                Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
                Pregigt primasofi dede facebooka: förutom tivaligt.{" "}
              </p>

              {myArr.map((obj, index) => {
                return (
                  <>
                    <div className="works_box mb-3 p-3 d-flex">
                      <div>
                        <img src={obj.img} alt="why choose images" />
                      </div>
                      <div class="ms-1 ms-sm-3 ps-1">
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

              <div class="mt-4 pt-1">
                <button class="common_btn works_quote_btn fw-bold font_md mt-2 text-capitalize">
                  Get a Quote
                </button>
                <button class="common_btn view_tile_quote_btn fw-bold font_md mt-2 ms-2 ms-sm-4 text-capitalize">
                  View Tile Visualizer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
