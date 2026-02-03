import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ServicesPage from "./pages/Services";
import ContactsPage from "./pages/Contacts";
import Livit from "./projects/livit";
import Solero from "./projects/solero";
import Newsman from "./projects/newsman";
import Spennd from "./projects/spennd";
import Reorder from "./projects/reorder";
import TMDB from "./projects/tmdb";
import Vision from "./projects/vision";
import Hoodeye from "./projects/hoodeye";
import Tripster from "./projects/tripster";
import Karigari from "./projects/karigari";
import Automate from "./projects/automate";
import Appdev from "./services/appdeveloper";
import Uiux from "./services/uiuxdesigner";
import Webdeveloper from "./services/webdeveloper";
import Superbill from "./projects/superbill";
import Blink from "./projects/blink";

export default function App() {
  const [isOpen, setIsOpen] = useState(false); // State variable for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state on click
  };

  return (
    <>
      <Router>
        <Header toggleMenu={toggleMenu} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<ProjectsPage />} />
          {/* <Route path="/services/appdeveloper" element={<Appdev />} />
          <Route path="/services/uiuxdesigner" element={<Uiux />} />
          <Route path="/services/webdeveloper" element={<Webdeveloper />} /> */}
          <Route path="/events" element={<ServicesPage />} />
          {/* <Route path="/contacts" element={<ContactsPage />} /> */}
        </Routes>
      </Router>
    </>
  );

  function Header({ toggleMenu, isOpen }) {
    return (
      <div className="header">
        <div className="headerlogo">
          <Link className="headerlogo" to={"/"}>
            <img src="/OREXIS-01.png" alt="logo" className="headerlogoimage" />
          </Link>
        </div>

        <div className="headerlinks">
          <Link to={"/about"} className="linkstyle">
            <div className="linkdiv">
              <div className="circlefill"></div>{" "}
              <div className="text">About</div>
            </div>
          </Link>
          <Link to={"/team"} className="linkstyle">
            <div className="linkdiv">
              <div className="circlefill"></div>{" "}
              <div className="text">Team</div>
            </div>
          </Link>
          <Link to={"/events"} className="linkstyle">
            <div className="linkdiv">
              <div className="circlefill"></div>{" "}
              <div className="text">Events</div>
            </div>
          </Link>
          <a
            href="https://www.instagram.com/team_faisal2k26?igsh=MWt3cnFsc2Z2Mzd5eA=="
            className="linkstyle"
          >
            <div className="linkdiv">
              <div className="circlefill"></div>{" "}
              <div className="text">Socials</div>
            </div>
          </a>
        </div>
        <div className="resumelink"></div>
        <div className="respmenu">
          <input
            id="checkbox"
            type="checkbox"
            checked={isOpen}
            onChange={toggleMenu}
          />
          <label className="toggle" htmlFor="checkbox">
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
          </label>
        </div>

        <div className={`responsivemenudiv ${isOpen ? "open" : ""}`}>
          <div className="closebutton" onClick={toggleMenu}>
            x
          </div>
          <div className="topheadrespmenu">
            <img
              src="/OREXIS-01.png"
              alt="headerlogo"
              className="respheaderimg"
            />
            <div className="respheadertag">Orexis</div>
          </div>
          <div className="respheaderlinksdiv">
            <Link to="/about" className="respheaderlink" onClick={toggleMenu}>
              About Team
              <div className="arrowicon">
                <img src="arror.png" alt="" className="arrowiconimg" />
              </div>
            </Link>
            <Link to="/team" className="respheaderlink" onClick={toggleMenu}>
              Team Members
              <div className="arrowicon">
                <img src="arror.png" alt="" className="arrowiconimg" />
              </div>
            </Link>
            <a
              href="https://www.instagram.com/team_faisal2k26?igsh=MWt3cnFsc2Z2Mzd5eA=="
              className="respheaderlink"
              onClick={toggleMenu}
            >
              Socials
              <div className="arrowicon">
                <img src="arror.png" alt="" className="arrowiconimg" />
              </div>
            </a>
            <Link to="/events" className="respheaderlink" onClick={toggleMenu}>
              Events
              <div className="arrowicon">
                <img src="arror.png" alt="" className="arrowiconimg" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
