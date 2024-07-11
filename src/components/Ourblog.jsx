import React, { useState } from "react";
import KitchenBacksplash from "../assets/png/Kitchen Backsplash.png";
import ArrowIcon from "../assets/svg/Arrow.svg";

const Ourblog = () => {
  const [isVisible, setisVisible] = useState(false);
  const myArr = [
    {
      title: " Kitchen Backsplash",
      Discription: 1,
      img: KitchenBacksplash,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 2,
      img: KitchenBacksplash,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 3,
      img: KitchenBacksplash,
    },
  ];

  return (
    <section class="py-4 pb-lg-5 px-3">
      <div class="container mt-3">
        <div class="row">
          <div class="col">
            <h2
              class="font_xxg fw_600 text-center mb-0 black"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Our Blog
            </h2>
            <p
              class="font_md mt-1 mt-sm-3 pt-1 pb-2 dark_black_second line_height_paragraph why_choose_para
                        text-center m-auto"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
              Pregigt primasofi dede facebooka: förutom tivaligt.{" "}
            </p>
          </div>

          <div className="mb-0 mb-md-4 row mt-4 mt-md-5 pt-2">
            {myArr.map((obj, index) => {
              return (
                <>
                  <div
                    className={` col-12 col-md-6 col-lg-4
                }`}
                  >
                    <div className="what_we_do_card p-3 p-sm-4 mb-4">
                      <img className="w-100" src={obj.img} alt="Cards_img" />
                      <h4 className="mt-4 mb-2 fw_600 black">
                        Tit; {obj.title}
                      </h4>
                      <p className="mt-1 mb-2 mb-sm-3 mb-md-4 black font_m what_we_do_para">
                        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera
                        viliga.
                        {obj.number}
                      </p>
                      <button className="learn_more_btn red fw_600 ">
                        Learn more
                        <span className="ms-3 ">
                          <img src={ArrowIcon} alt="ArrowIcon" />
                        </span>
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourblog;
