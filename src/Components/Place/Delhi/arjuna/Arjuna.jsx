import React from "react";
import "./arjuna.scss";
import "../../../Intro/intro.scss";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const demos = {
  plotly:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.4984241029615!2d77.2081497758807!3d28.539814451874694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21a50f66b47%3A0xfe6b1c3a045b1a65!2sFLAT%2057-60%2C%20Bhavishya%20Nidhi%20Enclave%2C%2030%2F1%2C%20Bhavishya%20Nidhi%20Enclave%2C%20Begumpur%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1643649897042!5m2!1sen!2sin" width="800" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
};
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}
function Delhi() {
  return (
    <div>
      {/* <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="\images\hostels\delhi\image0.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="\images\hostels\delhi\image1.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="\images\hostels\delhi\image2.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="\images\hostels\delhi\image3.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="\images\hostels\delhi\image4.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="\images\hostels\delhi\image5.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel> */}
      <div className="about" id="about">
        <div className="headingsss">
          <h1>SBS Arjuna</h1>
        </div>
        <div className="detailss">
          <ul>
            <li>500m from Made Easy</li>
            <li>500m from Made Easy</li>
            <li>500m from Made Easy</li>
            <li>500m from Made Easy</li>
            <li>500m from Made Easy</li>
          </ul>
          <div className="map">
            <div className="address">
              <p>
                Shiv Prisha, Juhu Lane, Above Vodafone Store, Near Naturals
                Ice-cream, Juhu, Andheri West Mumbai , Maharashtra - 400056
              </p>
              <div id="btnMain">
                <div id="btnBox">BOOK NOW</div>
                <div id="btnBottom"></div>
              </div>
            </div>
            <Iframe iframe={demos["plotly"]} />,
          </div>
        </div>
        <div className="ameties">
          <div className="heading">
            <h1>A ROOM AS SPECIAL AS YOU</h1>
          </div>
          <div className="items-wrap">
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\sofa.jpg" alt="" />
              </div>

              <p>Fully Furnished</p>
            </div>
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\power.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\power.jpg" alt="" /> */}
              <p>24/7 Power Backup</p>
            </div>
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\clean.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\clean.jpg" alt="" /> */}
              <p>Regular Cleaning</p>
            </div>
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\internat.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\internat.jpg" alt="" /> */}
              <p>High Speed Internet</p>
            </div>
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\laundary.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\laundary.jpg" alt="" /> */}
              <p>On-Site Laundry</p>
            </div>

            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\tech.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\tech.jpg" alt="" /> */}
              <p> 24/7 security</p>
            </div>
          </div>
          {/* <div className="price">
            <p>1 RK Private Room</p>
            <p className="rate">Rs.24,000</p>{" "}
          </div> */}
        </div>
        <div className="heading">
          <h1>THE QUINTESSENTIAL LIVING</h1>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Flat share and Private</th>
                <th>Service Apartment</th>
                <th>
                  <img src="images/logo.png" alt="" srcset="" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Flexibility</td>
                <td>
                  <img src="\images\cross.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\tick.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\tick.jpg" alt="" />
                </td>
              </tr>
              <tr>
                <td>Fully Furnished</td>
                <td>
                  <img src="\images\cross.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\tick.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\tick.jpg" alt="" />
                </td>
              </tr>
              <tr>
                <td>Utilities</td>
                <td>
                  <img src="\images\cross.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\tick.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\tick.jpg" alt="" />
                </td>
              </tr>
              <tr>
                <td>Regular Cleaning </td>
                <td>
                  <img src="\images\cross.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\cross.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\tick.jpg" alt="" />
                </td>
              </tr>
              <tr>
                <td>High Speed Wi-Fi </td>
                <td>
                  <img src="\images\cross.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\cross.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\tick.jpg" alt="" />
                </td>
              </tr>
              <tr>
                <td>Tech Enabled security systems </td>
                <td>
                  <img src="\images\cross.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\cross.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\tick.jpg" alt="" />
                </td>
              </tr>
              <tr>
                <td>Common Spaces </td>
                <td>
                  <img src="\images\cross.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\cross.jpg" alt="" />
                </td>
                <td>
                  <img src="\images\tick.jpg" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Delhi;
