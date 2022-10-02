import React from "react";
import "./Navbar.css";
import appIcon from "../../assets/appicon.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const setActive = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  };
  const switchAbout = () => {
    navigate("/about");
  };
  const switchCareer = () => {
    navigate("/careers");
  };
  return (
    <header>
      <nav>
        <div className="headerContainer">
          <div className="navbar">
            {/* <img src={appIcon} alt="" /> */}
            <div className="navlink active" onClick={setActive}>
              Home
            </div>
            <div className="navlink" onClick={setActive}>
              Careers
            </div>
            <div className="navlink" onClick={setActive && switchCareer}>
              Get early access
            </div>
            <div className="navlink" onClick={setActive && switchAbout}>
              About us
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
