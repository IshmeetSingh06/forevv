import React from "react";
import appStore from "../../assets/appStore.png";
import playStore from "../../assets/playStore.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import mail from "../../assets/mail.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footer-top">
          <div className="comingSoon">
            <h2>Coming Soon on</h2>
            <div className="footer-list">
              <a
                href="https://play.google.com/store/games"
                target="_blank"
                rel="noreferrer"
              >
                <img className="store" src={playStore} alt="" />
              </a>
              <a
                href="https://www.apple.com/in/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="store" src={appStore} alt="" />
              </a>
            </div>
          </div>
          <div className="moreForevv">
            <h2>More Forevv</h2>
            <div className="footer-list">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="list-item"
              >
                Home
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="list-item"
              >
                About Us
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="list-item"
              >
                Elevator Pitch
              </a>
            </div>
          </div>
          <div>
            <h2>Get in Touch</h2>
            <div className="footer-list">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="list-item"
              >
                Get Early Access
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="list-item"
              >
                Careers
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="list-item"
              >
                Share Your Story
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="socials">
            <img className="social" src={mail} alt="mail" />
            <img className="social" src={linkedin} alt="linkedin" />
            <img className="social" src={insta} alt="insta" />
          </div>
          <div>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-terms"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-terms"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
