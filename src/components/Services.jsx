import React, { useState } from "react";
import LocationImg from "../assets/svg/Location.svg";

const Services = () => {
  const [isVisible, setisVisible] = useState(false);
  const myArr = [
    {
      title: "Knoxville",
      img: LocationImg,
    },
    {
      title: "Sevierville",
      img: LocationImg,
    },
    {
      title: "Maynardville",
      img: LocationImg,
    },
    {
      title: "Knoxville",
      img: LocationImg,
    },
    {
      title: "Sevierville",
      img: LocationImg,
    },
    {
      title: "Maynardville",
      img: LocationImg,
    },
    {
      title: "Knoxville",
      img: LocationImg,
    },
    {
      title: "Sevierville",
      img: LocationImg,
    },
    {
      title: "Maynardville",
      img: LocationImg,
    },
    {
      title: "Knoxville",
      img: LocationImg,
    },
    {
      title: "Sevierville",
      img: LocationImg,
    },
    {
      title: "Maynardville",
      img: LocationImg,
    },
    {
      title: "Knoxville",
      img: LocationImg,
    },
    {
      title: "Sevierville",
      img: LocationImg,
    },
    {
      title: "Maynardville",
      img: LocationImg,
    },
    {
      title: "Knoxville",
      img: LocationImg,
    },
    {
      title: "Sevierville",
      img: LocationImg,
    },
    {
      title: "Maynardville",
      img: LocationImg,
    },
    {
      title: "Knoxville",
      img: LocationImg,
    },
    {
      title: "Sevierville",
      img: LocationImg,
    },
  ];

  return (
    <section id="services" class=" mb-0 mb-sm-4 mt-5 pt-0 pt-sm-5 px-3">
      <div class="container">
        <div
          class="row mt-3 pt-1 justify-content-center justify-content-lg-start
        "
        >
          <div class="col-12 col-lg-7 px-0">
            <h2 class="font_xxg fw_600 mb-0 text-capitalize">
              <span class="d-inline-block d-sm-block">We provide services</span>
              in these areas
            </h2>
            <p class="font_md my-1 my-sm-3 pt-1 pb-3 black line_28 why_choose_para">
              Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
              Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
            </p>
          </div>

          <div className="row justify-content-center p-0">
            {myArr.map((obj, index) => {
              return (
                <>
                  <div
                    className={` col-6 col-lg-4
                }`}
                  >
                    <div className="d-flex align-items-center services_box cursur p-2 p-md-4 mb-3 mb-sm-4">
                      <img src={obj.img} alt="Location Image" />
                      <h4 className="fw_600 black font_xl ms-2 ps-0 ps-sm-1">
                        {obj.title}
                      </h4>
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

export default Services;
