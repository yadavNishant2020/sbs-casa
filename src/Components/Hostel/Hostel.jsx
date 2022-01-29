import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./hostel.scss";
import { delhi, noida, gurgaon, faridabad } from "../../data";

export default function Hostel() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Delhi",
    },
    {
      id: "mobile",
      title: "Noida",
    },
    {
      id: "design",
      title: "Gurgaon",
    },
    {
      id: "content",
      title: "Faridabad",
    },
  ];

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
      <ul className="list">
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
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
