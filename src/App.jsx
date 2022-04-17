import Favicon from "react-favicon";
import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import { useState } from "react";
import Menu from "./Components/menu/Menu";
import Team from "./Components/team/Team";
import Delhi from "./Components/Place/Delhi/Delhi";
import Noida from "./Components/Place/Noida/Noida";
import Gurgaon from "./Components/Place/Gurgaon/Gurgaon";
import Faridabad from "./Components/Place/Faridabad/Faridabad";
import Laxman from "./Components/Place/Delhi/laxman/Laxman";
import RamSheela from "./Components/Place/Delhi/ramSheela/RamSheela";
import Drona from "./Components/Place/Delhi/drona/Drona";
import Karana from "./Components/Place/Delhi/karana/Karana";
import Eklavaya from "./Components/Place/Delhi/eklavaya/Eklavaya";
import Vp from "./Components/Place/Noida/vp/Vp";
import Guru from "./Components/Place/Gurgaon/guru/Guru";
import Mansheel from "./Components/Place/Faridabad/mansheel/Mansheel";
import Akm from "./Components/Place/Faridabad/akm/Akm";
import Ashiyana from "./Components/Place/Faridabad/ashiyana/Ashiyana";
import "./app.scss";
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
                  <Favicon url="https://user-images.githubusercontent.com/75436573/158964722-6fdba310-fe94-4721-bf58-b8785e3e76ad.png" />
                  <Intro />
                  <About />
                  <Contact />
                  <Team />
                </div>
              }
            ></Route>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/delhi/" element={<Delhi />} />
            <Route exact path="/noida/" element={<Noida />} />
            <Route exact path="/gurgaon/" element={<Gurgaon />} />
            <Route exact path="/faridabad/" element={<Faridabad />} />
            <Route exact path="/delhi/1" element={<RamSheela />} />
            <Route exact path="/delhi/2" element={<Laxman />} />
            <Route exact path="/delhi/3" element={<Karana />} />
            <Route exact path="/delhi/4" element={<Drona />} />
            <Route exact path="/delhi/5" element={<Eklavaya />} />
            <Route exact path="/noida/SBS-VP" element={<Vp />} />
            <Route exact path="/gurgaon/SBS%20Guru" element={<Guru />} />
            <Route
              exact
              path="/faridabad/SBS%20Mansheel"
              element={<Mansheel />}
            />
            <Route exact path="/faridabad/SBS%20AKM" element={<Akm />} />
            <Route
              exact
              path="/faridabad/SBS%20Ashiyana"
              element={<Ashiyana />}
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
