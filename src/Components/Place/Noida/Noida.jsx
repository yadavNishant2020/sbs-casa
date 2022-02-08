import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./noida.scss";
import { delhi, noida, gurgaon, faridabad } from "../../../data";

export default function Noida() {
  const [selected] = useState("mobile");
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
    <div className="gurgaon" id="hostel">
      <h1>HOSTELS</h1>

      <h3>NOIDA</h3>
      <p>Please select the hostel to explore more!</p>

      <div className="containers">
        {data.map((d) => (
          <div className="item">
            <div className="imgContainer">
              <Link to={`/noida/${d.title}`}>
                <img src={d.img} alt="" />
              </Link>
            </div>

            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
