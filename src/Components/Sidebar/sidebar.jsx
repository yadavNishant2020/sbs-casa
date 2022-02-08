import "./sidebar.scss";
import { Link } from "react-router-dom";
export default function menu({ menuOpen, setMenuOpen }) {
  return (
    //
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
