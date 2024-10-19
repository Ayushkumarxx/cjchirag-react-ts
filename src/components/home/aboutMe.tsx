import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { about } from "../../assets/index";
import "./style/aboutMe.css";
import { Fade, Zoom, AttentionSeeker } from "react-awesome-reveal";
const AboutMe: React.FC = () => {
  return (
    <section className="about_me" id="about">
      <div className="gardient-1"></div>
      <div className="head">
        <h2>About Me</h2>
        <p className="text">
          Learn more about my journey, passion, and dedication to <br />
          creating exceptional music and experiences.
        </p>
      </div>

      <div className="main">
        <div className="child-1">
          <img src={about} alt="About Me" />
        </div>
        <div className="child-2">
          <Fade cascade damping={0.1} triggerOnce>
          <p className="heading">The journey of my music life starts here</p>
          <p className="text">
            Hi, I'm Chirag Choudary, known professionally as CJChirag Beatz. As
            a passionate music producer, composer, and beatboxer from India,
            I’ve had the privilege of working with leading names in the
            industry. Though young, my talent and dedication have helped me make
            a mark in the music world. I specialize in creating unique beats and
            compositions that resonate with listeners and elevate every project
            I undertake.
          </p>

          <div className="button">
            <button className="button-1">
              <FaInstagram className="i" /> Instagram
            </button>
            <button className="button-2">
              <FaSpotify className="i" /> Spotify
            </button>
          </div>

          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
