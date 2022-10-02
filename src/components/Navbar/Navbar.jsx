import React from "react";
import "./Navbar.css";
import appIcon from "../../assets/appicon.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const setActive = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  };

  return (
    <header>
      <nav>
        <div className="headerContainer">
          <div className="navbar">
            {/* <img src={appIcon} alt="" /> */}
            <div className="navlink active" onClick={setActive}>
              <a href="/">Home</a>
            </div>
            <div className="navlink" onClick={setActive}>
              <a href="/careers">Careers</a>
            </div>
            <div className="navlink" onClick={setActive}>
              <a href="/about">Get early access</a>
            </div>
            <div className="navlink" onClick={setActive}>
              <a href="/about">About us</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
