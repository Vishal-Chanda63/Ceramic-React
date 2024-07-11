import React from "react";
import LocationImg from "../assets/svg/Location.svg";

const Services = () => {
  return (
    <section id="services" class="mt-0 mt-sm-5 mb-0 mb-sm-4 pt-0 pt-sm-5 px-3">
      <div class="container mt-4 pt-3">
        <div class="row mt-1">
          <div class="col-12 col-lg-7 px-0">
            <h2 class="font_xxg fw_600 mb-0 text-capitalize">
              <span class="d-inline-block d-sm-block">We provide services</span>{" "}
              in these areas
            </h2>
            <p class="font_md my-1 my-sm-3 pt-1 pb-3 black line_height_paragraph why_choose_para">
              Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
              Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
            </p>
          </div>
        </div>

        <div class="row mt-0 mt-sm-4 justify-content-center">
          <div class="col-6 col-md-4 px-2 px-lg-3">
            <div class="d-flex mb-3 mb-sm-4 services_box cursur p-2 p-sm-3 p-lg-4">
              <div>
                {/* <img src="./assets/image/svg/service-circle.svg" alt="service-circle"> */}
              </div>

              <div class="ms-2 ps-1 d-flex align-items-center">
                <h4 class="font_xl fw_600 mb-0">Knoxville</h4>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4 px-2 px-lg-3">
            <div class="d-flex mb-3 mb-sm-4 services_box cursur p-2 p-sm-3 p-lg-4">
              <div>
                {/* <img src="./assets/image/svg/location.svg" alt="location"> */}
              </div>

              <div class="ms-2 ps-1 d-flex align-items-center">
                <h4 class="font_xl fw_600 mb-0">Sevierville</h4>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4 px-2 px-lg-3">
            <div class="d-flex mb-3 mb-sm-4 services_box cursur p-2 p-sm-3 p-lg-4">
              <div>
                {/* <img src="./assets/image/svg/service-circle.svg" alt="service-circle"> */}
              </div>

              <div class="ms-2 ps-1 d-flex align-items-center">
                <h4 class="font_xl fw_600 mb-0">Maynardville</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
