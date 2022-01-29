import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Portfolio from "./Components/Hostel/Hostel";
import "./app.scss";
import { useState } from "react";
import Menu from "./Components/menu/Menu";
import Team from "./Components/team/Team";
import Delhi from "./Components/Place/Delhi/Delhi";
import Noida from "./Components/Place/Noida/Noida";
import Footer from "./Components/footer/Footer";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Intro />
                  <About />
                  <Contact />
                  <Team />
                </div>
              }
            ></Route>
            <Route exact path="/delhi" element={<Delhi />} />
            <Route exact path="/noida" element={<Noida />} />
          </Routes>

          {/* <Portfolio /> */}

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
