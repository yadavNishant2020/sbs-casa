import React from "react";
import "../../hostel.scss";
import "../../../Intro/intro.scss";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const images = [
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152701121-06f77f92-b48e-4124-affd-2ca896d71928.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152701121-06f77f92-b48e-4124-affd-2ca896d71928.jpg",
  },
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152701107-25bc7712-f56a-4312-8fe5-54eb720ff528.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152701107-25bc7712-f56a-4312-8fe5-54eb720ff528.jpg",
  },
  // {
  //   original:
  //     "https://user-images.githubusercontent.com/75436573/152701110-c6bea5f0-517f-4d12-b81f-18cf82a2b077.jpeg",
  //   thumbnail:
  //     "https://user-images.githubusercontent.com/75436573/152701110-c6bea5f0-517f-4d12-b81f-18cf82a2b077.jpeg",
  // },
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152701114-bc1d6d86-218e-4b50-95ac-000819cf6962.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152701114-bc1d6d86-218e-4b50-95ac-000819cf6962.jpg",
  },
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152701116-b9a5e22b-3fcb-43d4-bb07-1c75e138ba19.jpg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152701116-b9a5e22b-3fcb-43d4-bb07-1c75e138ba19.jpg",
  },
  {
    original:
      "https://user-images.githubusercontent.com/75436573/152701117-22a138a8-92ec-48b2-8400-1da9165862d9.jpeg",
    thumbnail:
      "https://user-images.githubusercontent.com/75436573/152701117-22a138a8-92ec-48b2-8400-1da9165862d9.jpeg",
  },
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
function Eklavaya() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div>
        <ImageGallery items={images} autoPlay={true} />
      </div>
      <div className="about" id="about">
        <div className="headingsss">
          <h1>SBS Eklavaya</h1>
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
                House no.-33 , Begampur, near Begampur Gurudwara, Malviya Nagar,
                New Delhi -110017
              </p>
              <Link to="/contact">
                <div id="btnMain">
                  <div id="btnBox">BOOK NOW</div>
                  <div id="btnBottom"></div>
                </div>
              </Link>
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

export default Eklavaya;
