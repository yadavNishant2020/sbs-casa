import { useEffect, useState } from "react";
import "./delhi.scss";
import { delhi, noida, gurgaon, faridabad } from "../../../data";
import { Link } from "react-router-dom";

export default function Delhi() {
  const [selected] = useState("web");
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
      <h1>HOSTELS</h1>
      <h3>Delhi</h3>
      <div className="containers">
        {data.map((d) => (
          <div className="item">
            <div className="imgContainer">
              <img src={d.img} alt="" />
            </div>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
