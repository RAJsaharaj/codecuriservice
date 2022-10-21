import React from 'react'
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import img from "../images/header-bg.jpg";



const Hero = () => {
  return (
    <>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">hii</h1>
          <p className="hero-para">
            I'm  A Full stack Developer, youtuber and freelancer. A Full
            stack Developer, youtuber and freelancer.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={img} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </>
  );
}

export default Hero