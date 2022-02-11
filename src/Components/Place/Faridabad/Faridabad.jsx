import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-reveal";

import "./faridabad.scss";
import { delhi, noida, gurgaon, faridabad } from "../../../data";

export default function Faridabad() {
  const [selected] = useState("content");
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case "web":
        setData(delhi);
        break;
      case "mobile":
        setData(noida);
        break;
      case "design":
        setData(gurgaon);
        break;
      case "content":
        setData(faridabad);
        break;
      default:
        setData(delhi);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="hostel">
      <Fade bottom>
        <h1>HOSTELS</h1>
        <h3>FARIDABAD</h3>
        <p>Please select the hostel to explore more!</p>
      </Fade>

      <div className="containers">
        {data.map((d) => (
          <div className="item">
            <div className="imgContainer">
              <Link to={`/faridabad/${d.title}`}>
                <Zoom clear>
                  <img src={d.img} alt="" />
                </Zoom>
              </Link>
            </div>

            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
