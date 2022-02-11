import React from "react";
import "../../hostel.scss";
import "../../../Intro/intro.scss";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152702167-f5d7f6d6-bd5e-4a45-9364-9904c1f5fb20.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152702167-f5d7f6d6-bd5e-4a45-9364-9904c1f5fb20.jpg",
  },
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152702141-91b2abcd-6b61-4327-a56d-2464df9b45f5.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152702141-91b2abcd-6b61-4327-a56d-2464df9b45f5.jpg",
  },
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152702142-06257744-8ff8-4dc0-a0bd-b41eb1472aac.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152702142-06257744-8ff8-4dc0-a0bd-b41eb1472aac.jpg",
  },
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152702152-d2663398-6406-41c0-975a-22bd741952ad.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152702152-d2663398-6406-41c0-975a-22bd741952ad.jpg",
  },
];

const demos = {
  plotly:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.9551265210507!2d77.40557951507989!3d28.51099778246595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49429811707cfb9a!2zMjjCsDMwJzM5LjYiTiA3N8KwMjQnMjguMCJF!5e0!3m2!1sen!2sin!4v1643997376977!5m2!1sen!2sin"  background-size: contain; width="800" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
};
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}
function Vp() {
  return (
    <div>
      <div>
        <ImageGallery items={images} autoPlay={true} />
      </div>
      <div className="about" id="about">
        <div className="headingsss">
          <h1>SBS VP</h1>
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
            <li>
              9 minutes drive/4 Kms from Candor corporate area <br />
              (Genpact,Accenture office)
            </li>
            <li>1.3 kms from Aqua line metro station</li>
            <li>
              20 minutes/14 km from botanicalgarden <br /> metro station{" "}
            </li>
            <li>10 minutes/3.7 kms from Felix hospital</li>
          </ul>
          <div className="map">
            <div className="address">
              <p>B1- 506, Purvanchal royal park, sector 137, Noida 201305</p>
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

export default Vp;
