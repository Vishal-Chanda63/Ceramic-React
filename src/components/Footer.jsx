import React from "react";

import footerLogo from "../assets/svg/footer_logo.svg";
import messageIcon from "../assets/svg/message.svg";
import phoneIcon from "../assets/svg/phone-call.svg";
import facebookIcon from "../assets/svg/facebook.svg";
import instaIcon from "../assets/svg/instagram.svg";
import twitterIcon from "../assets/svg/twitter.svg";
import linkedinIcon from "../assets/svg/linkedin.svg";

const Footer = () => {
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

          <div class="col-4 col-sm-4 col-lg-1 mt-3 mt-md-0 p-0">
            <div class="footer_links ">
              <p class="font_lg fw_600 mb-1 mb-sm-3 pb-1 light_black">Links</p>
              <ul class="list-unstyled cursur font_m foter_para">
                <a
                  class="text-decoration-none light_black footer_link"
                  href="./index.html"
                >
                  <li>Home</li>
                </a>
                <a
                  class="text-decoration-none light_black footer_link"
                  href="#about"
                >
                  <li class="my-2 py-1">About Us</li>
                </a>
                <a
                  class="text-decoration-none light_black footer_link"
                  href="#services"
                >
                  <li>Services</li>
                </a>
                <a
                  class="text-decoration-none light_black footer_link"
                  href="#showcase"
                >
                  <li class="mt-2 pt-1">Showcase</li>
                </a>
              </ul>
            </div>
          </div>
          <div class="col-4 col-sm-4 col-lg-2 mt-3 mt-md-0 px-0 px-md-4">
            <div class="legal_parent">
              <p class="font_lg fw_600 mb-1 mb-sm-3 pb-1 light_black">Legal</p>
              <ul class="list-unstyled cursur font_m foter_para">
                <a
                  class="text-decoration-none light_black footer_link"
                  href="./index.html"
                >
                  <li>Terms Of Use</li>
                </a>
                <a
                  class="text-decoration-none light_black footer_link"
                  href="#about"
                >
                  <li class="my-2 py-1">Privacy Policy</li>
                </a>
                <a
                  class="text-decoration-none light_black footer_link"
                  href="#pricing"
                >
                  <li>Cookie Policy</li>
                </a>
              </ul>
            </div>
          </div>
          <div class="col-4 col-sm-4 col-lg-1 mt-3 mt-md-0 p-0">
            <div class="footer_product ps-4 ps-sm-5 ps-lg-0">
              <p class="font_lg fw_600 mb-1 mb-sm-3 pb-1 light_black">
                Product
              </p>
              <ul class="list-unstyled cursur font_m foter_para">
                <a
                  class="text-decoration-none light_black footer_link"
                  href="./index.html"
                >
                  <li>Take Tour</li>
                </a>
                <a
                  class="text-decoration-none light_black footer_link"
                  href="#about"
                >
                  <li class="my-2 py-1">Live Chat</li>
                </a>
                <a
                  class="text-decoration-none light_black footer_link"
                  href="#pricing"
                >
                  <li>Reveiws</li>
                </a>
              </ul>
            </div>
          </div>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
