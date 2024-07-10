import React from "react";

import worksImage from "../assets/png/works.png";
import tickImage from "../assets/svg/tick.svg";

const Works = () => {
  return (
    <section id="quote" class="py-4 my-3 px-3">
      <div class="container">
        <div class="row order-1 mt-1">
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

              <div class="d-flex mb-3 works_box p-3">
                <div>
                  <img src={tickImage} alt="tickImage" />
                </div>

                <div class="ms-1 ms-sm-3 ps-1">
                  <h4 class="font_lg fw_600 lh-base mb-0 mb-sm-2 pb-1 lh-base">
                    Contact us
                  </h4>
                  <p class="font_m  black line_height_para mb-0">
                    Lörem ipsum deligen vuprer diar faktigt på dehädiska att
                    sara. Persion. Repp löng blippbetalning. Megaliga fadat om
                    än dening
                  </p>
                </div>
              </div>
              <div class="d-flex mb-3 works_box p-3">
                <div>
                  <img src={tickImage} alt="tickImage" />
                </div>

                <div class="ms-1 ms-sm-3 ps-1">
                  <h4 class="font_lg fw_600 lh-base mb-0 mb-sm-2 pb-1 lh-base">
                    Get a Qoute
                  </h4>
                  <p class="font_m  black line_height_para mb-0">
                    Lörem ipsum deligen vuprer diar faktigt på dehädiska att
                    sara. Persion. Repp löng blippbetalning. Megaliga fadat om
                    än dening
                  </p>
                </div>
              </div>
              <div class="d-flex works_box p-3">
                <div>
                  <img src={tickImage} alt="tickImage" />
                </div>

                <div class="ms-1 ms-sm-3 ps-1">
                  <h4 class="font_lg fw_600 lh-base mb-0 mb-sm-2 pb-1 lh-base">
                    Get your Work Done
                  </h4>
                  <p class="font_m  black line_height_para mb-0">
                    Lörem ipsum deligen vuprer diar faktigt på dehädiska att
                    sara. Persion. Repp löng blippbetalning. Megaliga fadat om
                    än dening
                  </p>
                </div>
              </div>

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
