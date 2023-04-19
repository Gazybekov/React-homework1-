import React from "react";
import "../components/footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer__top">
          <div class="footer1">
            <a href="#">Company</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
          </div>
          <div class="footer2">
            <a href="#">Support</a>
            <a href="#">Help Center</a>
            <a href="#">Safety Center</a>
            <a href="#">Community</a>
          </div>
          <div class="footer3">
            <a href="#">Legal</a>
            <a href="#">Cookies Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div class="footer4">
            <a class="inta" href="#">
              Install App
            </a>
            <img src="./assets/images/footer1.svg" alt="" />
            <img src="./assets/images/footer2.svg" alt="" />
          </div>
        </div>
        <hr />
        <div class="footer__bottom">
          <div class="footer_left">
            <p>© 2020 - All rights reserved</p>
          </div>
          <div class="footer_right">
            <img src="./assets/images/Group 27.svg" alt="" />
            <img src="./assets/images/Group 28.svg" alt="" />
            <img src="./assets/images/Group 29.svg" alt="" />
            <img src="./assets/images/Group 30.svg" alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
