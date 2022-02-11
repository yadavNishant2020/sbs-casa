import React from "react";
import "../../hostel.scss";
import "../../../Intro/intro.scss";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

function Ramsheela() {
  const images = [
    {
      original:
        "https://user-images.githubusercontent.com/75436573/152689359-f8e11d2c-413e-4805-853d-7a00d07c8c8c.jpg",
      thumbnail:
        "https://user-images.githubusercontent.com/75436573/152689359-f8e11d2c-413e-4805-853d-7a00d07c8c8c.jpg",
    },
    {
      original:
        "https://user-images.githubusercontent.com/75436573/152689314-c6b6fafa-f0f0-47c3-a9e2-1bc1af16440a.jpg",
      thumbnail:
        "https://user-images.githubusercontent.com/75436573/152689314-c6b6fafa-f0f0-47c3-a9e2-1bc1af16440a.jpg",
    },
    {
      original:
        "https://user-images.githubusercontent.com/75436573/152689317-3fc058b6-6cca-4c2f-8538-12ebba163495.jpg",
      thumbnail:
        "https://user-images.githubusercontent.com/75436573/152689317-3fc058b6-6cca-4c2f-8538-12ebba163495.jpg",
    },
    {
      original:
        "https://user-images.githubusercontent.com/75436573/152689364-650e95c1-34a7-4cc8-8a2d-5c69654d5565.jpg",
      thumbnail:
        "https://user-images.githubusercontent.com/75436573/152689364-650e95c1-34a7-4cc8-8a2d-5c69654d5565.jpg",
    },
    {
      original:
        "https://user-images.githubusercontent.com/75436573/152689399-9b1b06e4-402d-4704-a06a-0bfb4c1edbfa.jpg",
      thumbnail:
        "https://user-images.githubusercontent.com/75436573/152689399-9b1b06e4-402d-4704-a06a-0bfb4c1edbfa.jpg",
    },
  ];

  const demos = {
    plotly:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0641262993854!2d77.20578861508046!3d28.537792182455316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5bf87115d1a75b71!2zMjjCsDMyJzE2LjEiTiA3N8KwMTInMjguNyJF!5e0!3m2!1sen!2sin!4v1643996572584!5m2!1sen!2sin"   background-size: contain; width="800" height="250" style="border:0; bottom:0px;" allowfullscreen="" loading="lazy"></iframe>',
  };
  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }
  return (
    <div>
      <div>
        <div>
          <ImageGallery items={images} autoPlay={true} />
        </div>
        <div className="about" id="about">
          <div className="headingsss">
            <h1>SBS Ramsheela</h1>
          </div>
          <div className="detailss">
            <li className="pricee">
              Pricing starting from <br />
              <span className="pr">
                <b> Twin Rs-10000/-</b>
                <span className="prc">
                  <b> Single Rs-16000/-</b>
                </span>
              </span>
            </li>
            <ul>
              <li className="priceee">
                Pricing starting from <br />
                <span className="pr">
                  (Twin 10000/-)
                  <span className="prc">(Single 16000/-)</span>
                </span>
              </li>
              <li>500m from Shri Aurobindo College</li>
              <li>700m from Made Easy</li>
              <li>700m from Fiitjee</li>
              <li>700m from Narayana IT Academy</li>
              <li>800m from Hauz Khas Metro Station</li>
              <li>1200m from Malviya Nagar Metro Station</li>
            </ul>
            <div className="map">
              <div className="address">
                <p>
                  House no.-30 , Begampur, near Begampur Gurudwara, Malviya
                  Nagar, New Delhi -110017
                </p>
                <Link to="/contact">
                  <div id="btnMain">
                    <div id="btnBox">BOOK NOW</div>
                    <div id="btnBottom"></div>
                  </div>
                </Link>
              </div>
              <div class="google-maps">
                <Iframe iframe={demos["plotly"]} />
              </div>
            </div>
          </div>
          <div className="ameties">
            <div className="heading">
              <h1>A ROOM AS SPECIAL AS YOU</h1>
            </div>
            <div className="items-wrap">
              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\furniture.png" alt="" />
                </div>
                <p>Bed with Matrress</p>
              </div>

              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\almirah.png" alt="" />
                </div>
                <p>Individual Almirah</p>
              </div>
              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\refrigerator.png" alt="" />
                </div>
                <p>Refrigerator</p>
              </div>

              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\study-desk.png" alt="" />
                </div>
                <p>Study Table</p>
              </div>
              <div className="itm">
                <div className="imgg">
                  <img
                    src="\images\hostels\washroom-shower-bathroom.png"
                    alt=""
                  />
                </div>
                <p> Attached Washroom with Geyser</p>
              </div>
              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\ac.png" alt="" />
                </div>
                <p>Fully Air Conditioned</p>
              </div>
            </div>
          </div>
          <div className="ameties">
            <div className="heading">
              <h1>Common Amenities</h1>
            </div>
            <div className="items-wrap">
              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\sustainable-energy.png" alt="" />
                </div>
                <p>24/7 Power Backup</p>
              </div>
              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\mop.png" alt="" />
                </div>
                <p> Housekeeping</p>
              </div>
              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\cctv-camera.png" alt="" />
                </div>
                <p>CCTV Camera</p>
              </div>
              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\internet.png" alt="" />
                </div>
                <p>High Speed Internet</p>
              </div>
              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\drink-water.png" alt="" />
                </div>
                <p>RO Drinking Water</p>
              </div>
              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\restaurant.png" alt="" />
                </div>
                <p>3 Time Delicious Meals</p>
              </div>
              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\laundry.png" alt="" />
                </div>
                <p>Laundry and Ironing</p>
              </div>
              <div className="itm">
                <div className="imgg">
                  <img src="\images\hostels\lock.png" alt="" />
                </div>
                <p>Hightech Lock</p>
              </div>
            </div>
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
                    <img src="/images/logop.png" alt="" srcset="" />
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
                <tr>
                  <td>Hot Delicious Meals </td>
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
                  <td>Laundry and Ironing </td>
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
    </div>
  );
}

export default Ramsheela;
