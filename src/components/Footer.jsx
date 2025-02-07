import React, { useState } from "react";

import footerLogo from "../assets/svg/footer_logo.svg";
import messageIcon from "../assets/svg/message.svg";
import phoneIcon from "../assets/svg/phone-call.svg";
import facebookIcon from "../assets/svg/facebook.svg";
import instaIcon from "../assets/svg/instagram.svg";
import twitterIcon from "../assets/svg/twitter.svg";
import linkedinIcon from "../assets/svg/linkedin.svg";

const Footer = () => {
  const [isVisible, setisVisible] = useState(false);

  const myArr = [
    {
      title: "Links",
      list: ["Home", "About Us", "Services", "Showcase"],
    },
    {
      title: "Legal",
      list: ["Terms Of Use", "Pivacy Plicy", "Cookie Policy"],
    },
    {
      title: "Product",
      list: ["Take Tour", "Live Chat", "Reveiws"],
    },
  ];

  return (
    <div class="section pt-4 pt-5 foter_section">
      <div class="container">
        <div class="row py-5 justify-content-between align-items-baseline px-3 px-md-0">
          <div class="col-12 col-lg-3 mb-4 mb-md-5 mb-lg-0 p-0">
            <div class="mb-3 pb-1">
              <a href="https://ceramic-solution.vercel.app/">
                <img
                  class="cursur foter_logo"
                  src={footerLogo}
                  alt="footerLogo"
                />
              </a>
            </div>

            <div class="d-inline-block mb-4">
              <a class="d-flex mb-3" href="mailto:help@Dealzip.com">
                <img src={messageIcon} alt="messageIcon" />

                <p class="ms-2 mb-0 font_m light_black mail_hover">
                  help@Dealzip.com
                </p>
              </a>
              <a class="d-flex" href="tel:+1 234 456 678 89">
                <img src={phoneIcon} alt="phoneIcon" />

                <p class="ms-2 mb-0 font_m light_black mail_hover">
                  +1 234 456 678 89
                </p>
              </a>
            </div>

            <div class="d-flex cursur">
              <span class="hover_icon me-2">
                <a href="https://www.facebook.com/" target="_blank">
                  <img src={facebookIcon} alt="facebookIcon" />
                </a>
              </span>
              <span class="hover_icon me-2">
                <a href="https://www.instagram.com/" target="_blank">
                  <img src={instaIcon} alt="instaIcon" />
                </a>
              </span>
              <span class="hover_icon me-2">
                <a href="https://twitter.com/" target="_blank">
                  <img src={twitterIcon} alt="twitterIcon" />
                </a>
              </span>
              <span class="hover_icon">
                <a href="https://linkedin.com/" target="_blank">
                  <img src={linkedinIcon} alt="linkedinIcon" />
                </a>
              </span>
            </div>
          </div>

          {myArr.map((obj, index) => {
            return (
              <div class="col-4 col-sm-4 col-lg-1 mt-3 mt-md-0 p-0">
                <div class="footer_links">
                  <p class="font_lg fw_600 mb-1 mb-sm-3 pb-1 light_black">
                    {obj.title}
                  </p>
                  <ul class="list-unstyled cursur font_m foter_para">
                    {obj.list &&
                      obj.list.map((value, i) => (
                        <li className="mt-3 font_m" key={i}>
                          <a
                            className="light_black"
                            href={`${value.toLowerCase().replace(/ /g, "-")}`}
                          >
                            {value}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            );
          })}

          <div class="col-12 col-lg-4 mt-3 mt-md-0 px-0 d-flex justify-content-sm-start justify-content-lg-end">
            <div class="foter_newslater">
              <p class="font_lg fw_600 mb-1 mb-sm-3 pb-1 light_black">
                Newsletter
              </p>
              <ul class="list-unstyled cursur font_m foter_para">
                <a
                  class="text-decoration-none light_black footer_link "
                  href="./index.html"
                >
                  <li>Stay up to date</li>
                </a>

                <div class="mt-2 pt-1">
                  <div class="d-flex align-items-center justify-content-between main_box ps-4">
                    <a class=" light_pink" href="">
                      Your email{" "}
                    </a>
                    <a class=" common_btn subscribe_btn font_m fw_600" href="">
                      Subscribe
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright_border">
        <div class=" px-3 py-3">
          <p class="text-center mb-0 font_m light_black text text-capitalize">
            Copyright 2024 ceramicsolutions.com all rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
