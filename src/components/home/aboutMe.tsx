import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { about } from "../../assets/index";
import "./style/aboutMe.css";
import { socialLinks } from "../../utils/social";

const AboutMe: React.FC = () => {
  const handleRedirect = (social : string) => {
    if (social === "instagram") {
      window.open(socialLinks.instagram, '_blank'); // Opens the link in a new tab
    } else if (social === "spotify") {
      window.open(socialLinks.spotify, '_blank'); // Opens the link in a new tab
    }
  }
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
          <p className="heading">The journey of my music life starts here</p>
          <p className="text">
            Hey! I’m Chirag Choudary, but most people know me as CJChirag Beatz.
            I’m a music producer, composer, and beatboxer from India, and I’m
            all about creating music that feels real and connects. Even though
            I’m still young, I’ve had the chance to work with some awesome
            artists, and it’s been a crazy, inspiring journey. I’m always
            exploring new sounds and putting my own vibe into every beat and
            composition
          </p>

          <div className="button">
            <button className="button-1" onClick={() => handleRedirect("instagram")}>
              <FaInstagram className="i" /> Instagram
            </button>
            <button className="button-2" onClick={() => handleRedirect("spotify")}>
              <FaSpotify className="i" /> Spotify
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
