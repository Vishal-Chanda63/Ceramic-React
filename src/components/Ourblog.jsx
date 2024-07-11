import React, { useState } from "react";
import KitchenBacksplash from "../assets/png/Kitchen Backsplash.png";
import ArrowIcon from "../assets/svg/Arrow.svg";

const Ourblog = () => {
  const [isVisible, setisVisible] = useState(false);
  const myArr = [
    {
      title:
        " Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.     ",
      Discription: 1,
      img: KitchenBacksplash,
    },
    {
      title: " Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
      Discription: 2,
      img: KitchenBacksplash,
    },
    {
      title: " Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
      Discription: 3,
      img: KitchenBacksplash,
    },
  ];

  return (
    <section class="py-4 pb-lg-5">
      <div class="container mt-3">
        <div class="row justify-content-center">
          <div class="col">
            <h2 class="font_xxg fw_600 text-center mb-0 black">Our Blog</h2>
            <p
              class="font_md mt-1 mt-sm-3 pt-1 dark_black_second line_28 why_choose_para
                        text-center m-auto"
            >
              Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
              Pregigt primasofi dede facebooka: förutom tivaligt.
            </p>
          </div>

          <div className="row mb-0 mb-md-4 mt-4 mt-md-5 pt-2">
            {myArr.map((obj, index) => {
              return (
                <>
                  <div
                    className={` col-12 col-md-6 col-lg-4
                }`}
                  >
                    <div className="what_we_do_card p-3 p-sm-4 mb-4">
                      <img className="w-100" src={obj.img} alt="Cards_img" />
                      <h4 className="my-3 my-sm-4 fw_600 black font_xl">
                        {obj.title}
                      </h4>

                      <button className="learn_more_btn red fw_600 font_m">
                        Learn more
                        <span className="ms-1 ms-sm-2 ms-md-3">
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
