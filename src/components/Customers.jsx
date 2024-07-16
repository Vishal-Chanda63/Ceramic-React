import React from "react";
import starImg from "../assets/svg/Star.svg";
import greenStar from "../assets/svg/green_star.svg";
import googleImg from "../assets/svg/google.svg";
import markT from "../assets/svg/mark-t.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Customers = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 300,
    speed: 4000,
    cssEase: "linear",
    slidesToShow: 3.7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 0,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 0,
          dots: false,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
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
          <img className="star_img" src={starImg} alt="starImg" />
          <img className="star_img mx-2" src={starImg} alt="starImg" />
          <img className="star_img" src={starImg} alt="starImg" />
          <img className="star_img mx-2" src={starImg} alt="starImg" />
          <img className="star_img" src={starImg} alt="starImg" />
        </div>

        <p class="font_m manrope_font black line_height_para mb-0 slider_paras">
          "As a fitness enthusiast, I was skeptical about resistance bands at
          first. But after trying these, I'm a believer. The quality is
          top-notch, and they've become an integral part of my workout routine.
          I can't believe how versatile they are.”
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
          <img className="star_img" src={starImg} alt="starImg" />
          <img className="star_img mx-2" src={starImg} alt="starImg" />
          <img className="star_img" src={starImg} alt="starImg" />
          <img className="star_img mx-2" src={starImg} alt="starImg" />
          <img className="star_img" src={starImg} alt="starImg" />
        </div>

        <p class="font_m manrope_font black line_height_para mb-0 slider_paras">
          "As a fitness enthusiast, I was skeptical about resistance bands at
          first. But after trying these, I'm a believer. The quality is
          top-notch, and they've become an integral part of my workout routine.
          I can't believe how versatile they are.”
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
          <img className="star_img" src={starImg} alt="starImg" />
          <img className="star_img mx-2" src={starImg} alt="starImg" />
          <img className="star_img" src={starImg} alt="starImg" />
          <img className="star_img mx-2" src={starImg} alt="starImg" />
          <img className="star_img" src={starImg} alt="starImg" />
        </div>

        <p class="font_m manrope_font black line_height_para mb-0 slider_paras">
          "As a fitness enthusiast, I was skeptical about resistance bands at
          first. But after trying these, I'm a believer. The quality is
          top-notch, and they've become an integral part of my workout routine.
          I can't believe how versatile they are.”
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
          <img className="star_img" src={starImg} alt="starImg" />
          <img className="star_img mx-2" src={starImg} alt="starImg" />
          <img className="star_img" src={starImg} alt="starImg" />
          <img className="star_img mx-2" src={starImg} alt="starImg" />
          <img className="star_img" src={starImg} alt="starImg" />
        </div>

        <p class="font_m manrope_font black line_height_para mb-0 slider_paras">
          "As a fitness enthusiast, I was skeptical about resistance bands at
          first. But after trying these, I'm a believer. The quality is
          top-notch, and they've become an integral part of my workout routine.
          I can't believe how versatile they are.”
        </p>
      </div>
    </Slider>
  );
};

export default Customers;
