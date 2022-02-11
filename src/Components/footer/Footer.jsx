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
              <Link to="/delhi/">
                <li>
                  <a>Delhi</a>
                </li>
              </Link>
              <Link to="/noida/">
                <li>
                  <a>Noida</a>
                </li>
              </Link>
              <Link to="/gurgaon/">
                <li>
                  <a>Gurgaon</a>
                </li>
              </Link>
              <Link to="/faridabad/">
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
                <a href="mailto:sbscasahostel@gmail.com?subject=subject text">
                  sbscasahostel@gmail.com
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
              <a
                target="_blank"
                href="https://www.instagram.com/sbscasa/"
                rel="noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/sbscasa/"
                rel="noreferrer"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/sbscasa/"
                rel="noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
          </div>
          <div className="dev">
            <p>
              Design and Developed By
              <a
                target="_blank"
                href="https://personal-react-portfolio.web.app/"
                rel="noreferrer"
              >
                Nishant Yadav
              </a>
            </p>
          </div>
          <div className="copyright">
            <p>© Copyright 2022 SBS Casa All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
