import React from "react";
import "./About.css";
import roadmap from "../../assets/roadmap.jpg";
import polaroid from "../../assets/polaroids.jpg";
const About = () => {
  return (
    <div className="aboutContainer">
      <div className="bannerArea">
        <div className="whatwedo">
          <div className="title">
            WHAT WE <span>DO</span>
          </div>
          <div className="description">
            Forevv enables users to create digital timelines of their lives for
            both their professional and personal needs. We envision to provide
            the necessary emotional course correction and EQ enhancement
            assistance to help people with better mental health and more
            sustainable bonds.
          </div>
        </div>
        <div className="whoweare">
          <div className="description">
            We are a team of 9 youngsters with a strong hustle game. Coming from
            diverse backgrounds, we all bring various much needed values and
            skills onto the table that help us in revolutionizing the way
            emotions and memories are handled altogether. We are the Hustlers of
            Forevv.
          </div>
          <div className="title">
            WHO WE <span>ARE</span>
          </div>
        </div>
      </div>
      <div className="aboutbottom" />
      <div className="roadMap">
        {/* <img src={roadmap} alt="" />
        <img src={polaroid} alt="" /> */}
      </div>
      <div className="aboutend">
        <div className="para">
          Memories and emotions are the core to a person's life. They define to
          a large extent, not just the elements of our personal lives, but also
          our professional lives. Though everybody acknowledges the need for a
          good EQ, how often do we see any products or services that help us
          develop our EQ? We, at Forevv, have picked up this rather difficult,
          but super important problem statement. We are on a grand mission of
          improving the global EQ. And on this long haul of ours, we look
          forward to some exciting challenges and more amazing milestones, and
          we really appreciate your support in this journey.
        </div>
        <div className="ceoarea">
          <div className="bar"></div>
          <div className="ceotext">Letter from the CEO's office</div>
        </div>
        <div className="community">Join out community</div>
        <div className="communitydesc">
          Be the first to experience the magic of Forevv. Co-build Forevv with
          us by joining our limited group of Forevv Premium Users.
        </div>
        <div className="communityend">Get Early Access</div>
      </div>
    </div>
  );
};

export default About;
