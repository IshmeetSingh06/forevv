import React from "react";
import "./Navbar.css";
import appIcon from "../../assets/appicon.jpg";

const Navbar = () => {
  return (
    <header>
      <div className="headerContainer">
        <div className="navbar">
          <div>Home</div>
          <div>Carrers</div>
          <div>Get Early Access</div>
          <div>About Us</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
