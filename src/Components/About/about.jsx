import "./about.scss";
import { Link } from "react-router-dom";

function about() {
  return (
    <div className="about" id="about">
      <div className="headings">
        <p>About</p>
        <h1>SBS CASA HOSTELS</h1>
      </div>
      <div className="details">
        <p>
          The enterprise of SBS Casa adheres ardently to the maxim - ‘Vasudhaiva
          Kutumbakam’. This adage drives our passionate and relentless pursuit
          to provide affordable lodging with a multitude of services. We strive
          to make your stay with us feel like living with your extended family-
          a home away from home.The quaint and calm environs provided by us
          ensures alleviation of your stress after a hard day's work or
          fulfillfiling your need for peace and quite to focus on your studies.
        </p>
      </div>
      <div className="city">
        <h2>Here you can find us!</h2>
      </div>
      <div className="place">
        <ul>
          <li className="delhi wrap">
            <Link exact to="/delhi">
              <img src="/images/delhi.png" alt="" srcset="" />
              <p>Delhi</p>
            </Link>
          </li>
          <li className="noida wrap">
            <Link exact to="/noida">
              <img src="/images/noida.png" alt="" srcset="" />
              <p> Noida</p>
            </Link>
          </li>
          <li className="delhi wrap">
            <Link exact to="/gurgaon">
              <img src="/images/gurgaon.png" alt="" srcset="" />
              <p> Gurgaon</p>
            </Link>
          </li>
          <li className="delhi wrap">
            <Link exact to="/faridabad">
              <img src="/images/faridabad.png" alt="" srcset="" />
              <p>Faridabad</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default about;
