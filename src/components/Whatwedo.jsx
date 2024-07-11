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
      Discription: 3,
      img: LargeFormatTiling,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 3,
      img: WallTiling,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 3,
      img: ADACompliantShowers,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 3,
      img: FireplaceTiling,
    },
  ];
  return (
    <div className="my-5 py-5">
      <div className="container my-4 py-3">
        <div className="mb-4 row">
          {myArr.map((obj, index) => {
            return (
              <>
                <div
                  className={`p-3 what_we_do_card col-4
                }`}
                >
                  <img src={obj.img} alt="Cards_img" />
                  <h4 className="mt-4 mb-2 fw_600 black">Tit; {obj.title}</h4>
                  <p className="mt-1 mb-4 black font_m">
                    Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
                    {obj.number}
                  </p>
                  <button className="learn_more_btn red">
                    Learn more
                    <span className="ms-3 ">
                      <img src={ArrowIcon} alt="ArrowIcon" />
                    </span>
                  </button>
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
