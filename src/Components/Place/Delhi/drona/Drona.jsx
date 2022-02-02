import React from "react";
import "./drona.scss";
import "../../../Intro/intro.scss";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/images/hostels/delhi/drona/image0.jpg" },
  { url: "/images/hostels/delhi/drona/image1.jpg" },
  { url: "/images/hostels/delhi/drona/image2.jpg" },
  { url: "/images/hostels/delhi/drona/image3.jpg" },
  { url: "/images/hostels/delhi/drona/image2.jpg" },
];

const demos = {
  plotly:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0810755487582!2d77.20580865062585!3d28.537282695050404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ef0280e6e7%3A0x5b5d9117cf370f23!2sSBS%20Casa%20(Boys%20PG)!5e0!3m2!1sen!2sin!4v1643828994460!5m2!1sen!2sin"  background-size: contain; width="800" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
};
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}
function drona() {
  return (
    <div>
      <div>
        <SimpleImageSlider
          width={"100vw"}
          height={"80vh"}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <div className="about" id="about">
        <div className="headingsss">
          <h1>SBS drona</h1>
        </div>
        <div className="detailss">
          <ul>
            <li>500m from Shri Aurobindo College</li>
            <li>700m from Made Easy</li>
            <li>700m from Fiitzee</li>
            <li>700m from Narayana IT Academy</li>
            <li>800m from Hauz Khas Metro Station</li>
            <li>1200m from Malviya Nagar Metro Station</li>
          </ul>
          <div className="map">
            <div className="address">
              <p>
                House no.-30 , Begampur, near Begampur Gurudwara, Malviya Nagar,
                New Delhi -110017
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

              <p>Bed with Matrress</p>
            </div>

            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\internat.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\internat.jpg" alt="" /> */}
              <p>Individual Almirah</p>
            </div>
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\internat.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\internat.jpg" alt="" /> */}
              <p>Refrigerator</p>
            </div>

            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\tech.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\tech.jpg" alt="" /> */}
              <p>Study Table</p>
            </div>
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\tech.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\tech.jpg" alt="" /> */}
              <p> Attached Washroom with Geyser</p>
            </div>
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\tech.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\tech.jpg" alt="" /> */}
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
              <p>Professional Housekeeping</p>
            </div>
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\internat.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\internat.jpg" alt="" /> */}
              <p>CCTV Camera</p>
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
                <img src="\images\New folder\internat.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\internat.jpg" alt="" /> */}
              <p>RO Drinking Water</p>
            </div>
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\internat.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\internat.jpg" alt="" /> */}
              <p>3 Time Delicious Meals</p>
            </div>
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\laundary.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\laundary.jpg" alt="" /> */}
              <p>Laundry and Ironing</p>
            </div>
            <div className="itm">
              <div className="imgg">
                <img src="\images\New folder\laundary.jpg" alt="" />
              </div>
              {/* <img src="\images\New folder\laundary.jpg" alt="" /> */}
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
                  <img src="images/logop.png" alt="" srcset="" />
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
  );
}

export default drona;
