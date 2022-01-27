import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrappers">
        <div className="lefts">
          <div href="#intro" className="logos">
            <img src="images/logo.png" alt="" />
          </div>

          <div className="itemContainers">
            <span className="items"></span>
          </div>
          <div className="itemContainers">
            <span className="items"></span>
          </div>
          <div className="itemContainers">
            <span className="items"></span>
          </div>
          <div className="itemContainers">
            <span className="items"></span>
          </div>
          <div className="itemContainers">
            <span className="items"></span>
          </div>
        </div>
        <div className="rights">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
