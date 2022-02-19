import "./menu.scss";
import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  function myFunction() {
    var x = document.getElementById("list");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/about">
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <p onClick={() => myFunction()}>Hostels</p>
          <div id="list">
            <ul>
              <Link exact to="/delhi">
                <li onClick={() => setMenuOpen(false)}>Delhi</li>
              </Link>
              <Link exact to="/noida">
                <li onClick={() => setMenuOpen(false)}>Noida</li>
              </Link>
              <Link exact to="/gurgaon">
                <li onClick={() => setMenuOpen(false)}>Gurgaon</li>
              </Link>
              <Link exact to="/faridabad">
                <li onClick={() => setMenuOpen(false)}>Faridabad</li>
              </Link>
            </ul>
          </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/contact">
            <p>Contact Us</p>
          </Link>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="/team">
            <p>Our Team</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
