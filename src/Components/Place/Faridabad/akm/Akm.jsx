import React from "react";
import "../../hostel.scss";
import "../../../Intro/intro.scss";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152702566-66a12934-cdc4-4aba-9791-09a7de1602ee.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152702566-66a12934-cdc4-4aba-9791-09a7de1602ee.jpg",
  },
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152702582-39fdaf95-0152-47b8-98d2-4cb4bf776e35.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152702582-39fdaf95-0152-47b8-98d2-4cb4bf776e35.jpg",
  },
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152702585-1a3229d1-fa1a-454d-bde7-753e81853395.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152702585-1a3229d1-fa1a-454d-bde7-753e81853395.jpg",
  },
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152702573-af8a86c4-eee6-47c8-b383-6fb1d0557400.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152702573-af8a86c4-eee6-47c8-b383-6fb1d0557400.jpg",
  },
];

const demos = {
  plotly:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.4798734443093!2d77.28011421507748!3d28.404773682508214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x573d7a8e8883ed3e!2zMjjCsDI0JzE3LjIiTiA3N8KwMTYnNTYuMyJF!5e0!3m2!1sen!2sin!4v1643998371522!5m2!1sen!2sin"  background-size: contain; width="800" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
};
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}
function Akm() {
  return (
    <div>
      <div>
        <ImageGallery items={images} autoPlay={true} />
      </div>
      <div className="about" id="about">
        <div className="headingsss">
          <h1>SBS AKM</h1>
        </div>

        <div className="detailss">
          <li className="pricee">
            Pricing starting from <br />
            <span className="pr">
              <b> Full House Rs-25000/- </b>
              <span className="prc">
                <b> Single Room Rs-10000/-</b>
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
            <li>1500m from Old Faridabad metro station</li>
            <li>800m from Sainik colony market</li>
            <li>300m from Lalit Suri Hospitality School</li>
            <li>300m from National Institute of finance management</li>
          </ul>
          <div className="map">
            <div className="address">
              <p>
                House No. - 103, Everwell Society, CGHS Plot No. - 7, Faridabad
                - 121001
              </p>
              <div id="btnMain">
                <div id="sold">SOLD OUT</div>
                <div id="btnBottom"></div>
              </div>
            </div>
            <div class="google-maps">
              <Iframe iframe={demos["plotly"]} />,
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
  );
}

export default Akm;
