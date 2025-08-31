import React, { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/img1.png";
import { Context } from "../main";

const Hero = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="hero-image" />
        <h4>Hello, {user ? user.name : "Developer"}</h4>
        <h1>Welcome to my home page</h1>
        <p>
          This is a full stack authentication web page made using MERN stack with JWT
          authentication and cookies.
        </p>
      </div>
    </>
  );
};

export default Hero;
