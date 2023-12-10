import React from "react";
import sohan from "../assets/images/sohanImage.png";

const Hero = () => {
  return (
    <div className="hero min-h-screen p-20">
      <div className="hero-content lg:flex-row">
        <img src={sohan} alt="sohan" className="max-w-sm rounded-3xl shadow-2xl" />
        <div>
          <h1 className="text-2xl font-bold">MD SHAFIKUL ISLAM</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
