import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About Us</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#hostel">Hostels</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact Us</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#">Our Team</a>
        </li>
      </ul>
    </div>
  );
}
