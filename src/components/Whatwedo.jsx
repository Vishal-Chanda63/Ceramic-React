import React, { useState } from "react";
import KitchenBacksplash from "../assets/png/Kitchen Backsplash.png";
import CustomShowers from "../assets/png/Custom Showers.png";
import CustomFlooring from "../assets/png/Custom Flooring.png";
import LargeFormatTiling from "../assets/png/Large Format Tiling.png";
import WallTiling from "../assets/png/Wall Tiling.png";
import ADACompliantShowers from "../assets/png/ADA Compliant Showers.png";
import FireplaceTiling from "../assets/png/Wall Tiling.png";
import ArrowIcon from "../assets/svg/Arrow.svg";

const Dummy = () => {
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
      img: CustomShowers,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 3,
      img: CustomFlooring,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 4,
      img: LargeFormatTiling,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 5,
      img: WallTiling,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 6,
      img: ADACompliantShowers,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 7,
      img: FireplaceTiling,
    },
  ];
  return (
    <div id="about" className="my-5 py-0 py-lg-4 py-xl-5">
      <div className="container mt-4 py-3">
        <div class="col mt-0 mt-sm-1">
          <h2 class="font_xxg fw_600 text-center mb-0 black text-capitalize">
            What we do
          </h2>
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
                    <h4 className="mt-4 mb-2 fw_600 black font_xl">
                      {" "}
                      {obj.title}
                    </h4>
                    <p className="mt-1 mb-2 mb-sm-3 mb-md-4 black font_m what_we_do_para">
                      Lörem ipsum koda astrobel: sutaveligen. Rodod bänera
                      viliga.
                      {obj.Discription}
                    </p>
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
  );
};

export default Dummy;
