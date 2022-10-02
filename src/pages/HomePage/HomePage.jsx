import React from "react";
import "./HomePage.css";
import images from "../../assets/pictures.jpg";
import phones from "../../assets/phoens.jpg";
import videobg from "../../assets/videobg.png";
import person from "../../assets/personkey.png";
import Points from "../../components/Points/Points";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="topPage">
        <div className="text1">
          A platfrom To visualise your life's <span>memory lanes</span>
        </div>
        <div className="text2">
          Capture memories in an ever more inclusive, immersive & innovative
          style.
        </div>
      </div>
      <div className="page-middle">
        <img src={images} alt="" />
        <img src={images} alt="" />
      </div>
      <div className="page-bottom1">
        <div className="text-fields">
          <div className="text1-small">
            Create cool visual <span>memory lanes!</span>
          </div>
          <div className="text2-small">
            'A walk down the memory lane' is no longer just in your head. You
            can now actually go on a vitual walk down your memory lanes.
          </div>
        </div>
        <div className="images-fields"></div>
      </div>
      <div className="page-bottom-2">
        <div className="images-phone"></div>
        <div className="points"></div>
      </div>
      <div className="page-end">
        <div className="bar" />
        <div className="video-title">Overview of what it will be</div>
        <div className="video-Container"></div>
      </div>
      <div className="page-end2">
        <div className="person-img">
          <img src={person} alt="" />
        </div>
        <div className="formArea">
          <div className="formtitle">
            <p>Get Early Access</p>
            <input className="input1" placeholder="Your Name" type="text" />
            <div className="idphoneholder">
              <input type="number" placeholder="+91" />
              <input type="email" placeholder="" />
            </div>
            <input className="submitbtn" type="submit" />
          </div>
        </div>
        <div className="pointsArea">
          {/* <div className="shareyourstory">Share your story</div>
          <Points title={"Lorem IPsum"} emoji="X" info="LOREMIPSUM" />
          <Points title={"Lorem IPsum"} emoji="X" info="LOREMIPSUM" />
          <Points title={"Lorem IPsum"} emoji="X" info="LOREMIPSUM" />
          <img src={device} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
