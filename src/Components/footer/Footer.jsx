import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
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
            <img src="/images/logo1.png" alt="" />
          </div>
          <div class="site-links">
            <span>Location</span>
            <ul class="list-links">
              <Link to="/delhi">
                <li>
                  <a>Delhi</a>
                </li>
              </Link>
              <Link to="/noida">
                <li>
                  <a>Noida</a>
                </li>
              </Link>
              <Link to="/gurgaon">
                <li>
                  <a>Gurgaon</a>
                </li>
              </Link>
              <Link to="/faridabad">
                <li>
                  <a>Faridabad</a>
                </li>
              </Link>
            </ul>
          </div>
          <div class="adr-email">
            <span>Address</span>
            <ul class="">
              <li class="location">
                <a>
                  <i class="fas fa-map-pin"></i>Malviya Nagar, New delhi, India
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
