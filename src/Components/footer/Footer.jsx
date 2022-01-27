import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div>
      <link
        href="https://use.fontawesome.com/releases/v5.0.1/css/all.css"
        rel="stylesheet"
      ></link>
      <footer>
        <div class="row-footer">
          <div class="site-logo">
            <img src="images/logo1.png" alt="" />
          </div>
          <div class="site-links">
            <span>Location</span>
            <ul class="list-links">
              <li>
                <a>Delhi</a>
              </li>
              <li>
                <a>Noida</a>
              </li>
              <li>
                <a>Gurgaon</a>
              </li>
              <li>
                <a>Faridabad</a>
              </li>
            </ul>
          </div>
          <div class="adr-email">
            <span>Address</span>
            <ul class="">
              <li class="location">
                <a>
                  <i class="fas fa-map-pin"></i>Malviya Nagar. New delhi, India
                </a>
              </li>
              <li class="email">
                <a href="mailto:barhoumi.meriem1@gmail.com?subject=subject text">
                  hello@sbscasa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="line"></div>

        <div class="row-footers">
          <div class="follow-icons">
            <li>
              <span>Follow Us Here - </span>
            </li>

            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
          </div>
        </div>
      </footer>
      ;
    </div>
  );
}

export default Footer;
