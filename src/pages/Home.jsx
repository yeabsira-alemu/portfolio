import React, { useState, useEffect } from "react";
import "./Home.css";
import LandingPageImage from "../assets/image-removebg-preview.png";

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

  return (
    <div className="home-page-container">
      <div className="home-page">
        <div className="home-head-description-button">
          <div className="header-text-home">
            Hey there! I am Yeabsira,
            <div className="job-description-animation" style={animStyle}>
              {textChanger ? "AWS certified solution architect" : "Full stack developer"}
            </div>
          </div>
          <p className="description-text-home">Hey, I'm Yeabsira, an AWS Certified Solution Architect and Full Stack Developer. Explore my portfolio to see my work</p>
          <button className="contact-me-button-home-page">Contact me</button>
        </div>
        <div className="home-image-and-effect"><img src={LandingPageImage} alt="cool-img"/></div>
      </div>
    </div>
  );
}
