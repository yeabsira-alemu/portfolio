import React, { useState, useEffect } from "react";
import "./Home.css";
import LandingPageImage from "../assets/image-removebg-preview.png";
import Dots from "../assets/Dots.png"
import { Link } from "react-router-dom"
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

export default function HomePage() {
  const [textChanger, setTextChanger] = useState(true);

  useEffect(() => {
    const intervalChanger = setInterval(() => {
      setTextChanger((prev) => !prev);
    }, 6000);

    return () => {
      clearInterval(intervalChanger);
    };
  }, [1]);

  const animStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: textChanger ? "100%" : 0,
    animation: "typeAnimation 6s linear infinite",
  };

const github = <CIcon className="github-extension" icon={icon.cibGithub} style={{width: "25px", color: "#fff"}}/>
const linkedIn = <CIcon className="linkedin-extension" icon={icon.cibLinkedin} style={{width: "25px", color:"#fff"}}/>
const instagram = <CIcon className="ig-extension" icon={icon.cibInstagram} style={{width: "25px"}}/>

  return (
  <>
  <div className="home-page-ver-line-and-social-media">
    <div className="home-page-ver-line"></div>
    <div className="social-media-links">{github}{linkedIn}{instagram}</div>
  </div>
    <div className="home-page-container">
      <div className="home-page">
        <div className="home-head-description-button">
          <h1 className="header-text-home">
            Hey there! I am Yeabsira,
            <div className="job-description-animation" style={animStyle}>
              {textChanger ? "AWS solution architect" : "Full stack developer"}
            </div>
          </h1>
          <p className="description-text-home">Hey, I'm Yeabsira, an AWS Certified Solution Architect and Full Stack Developer. Explore my portfolio to see my work</p>
          <button className="contact-me-button-home-page">Contact me</button>
        </div>
        <div className="home-image-and-effect"><img className="the-home-page-img" src={LandingPageImage} alt="cool-img"/>
        <img className="dot-picture" src={Dots}/> <div className="circle"></div><div className="rectangle"></div>
        <div className="status-container"><div className="status-icon"></div><div className="status-text">Currently working on portfolio</div></div>
        </div>
      </div>
    </div>
  </>  
  );
}
