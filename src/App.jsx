import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Portfolio from "./Components/portfolio/Portfolio";
import "./app.scss";
import { useState } from "react";
import Menu from "./Components/menu/Menu";
import Team from "./Components/team/Team";
import Footer from "./Components/footer/Footer";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* <Route path="/" component={Team} /> */}

      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <About />
          <Portfolio />
          <Contact />
          <Team />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
