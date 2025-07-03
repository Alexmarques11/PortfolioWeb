import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />

      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          classname="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          classname="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Whatch Trailer <i className="far-fa-play" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
