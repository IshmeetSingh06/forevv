import React from "react";
import "./Navbar.css";
import appIcon from "../../assets/appicon.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const switchAbout = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    navigate("/about");
  };
  const switchCareer = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    navigate("/careers");
  };

  const switchHome = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    navigate("/");
  };

  return (
    <header>
      <nav>
        <div className="headerContainer">
          <div className="navbar">
            {/* <img src={appIcon} alt="" /> */}
            <div className="navlink active" onClick={switchHome}>
              Home
            </div>
            <div className="navlink" onClick={switchCareer}>
              Careers
            </div>
            <div className="navlink" onClick={switchHome}>
              Get early access
            </div>
            <div className="navlink" onClick={switchAbout}>
              About us
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
