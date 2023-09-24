import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./AboutPage.css";
import background from "./Background.png";

const AboutPage = (props) => {
  return (
    <>
      <NavBar className="NavBarAboutPage" setIsAuth={props.setIsAuth} />

      <div className="about-page">

        <div className="aboutContainer">
          <img src={background} alt="About Us" className="aboutUs" />
          <p>
            <span className="about-text">About Us</span>
          </p>
        </div>

        <p className="mainText">
          Welcome to our About Us page! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
        
        <div className="contactContainer">
          <img src={background} alt="Contact Us" className="contactUs" />

          <span className="contact-text">Contact Us</span>

          <div className="contact-icons">
            <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
            <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
            <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
