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
         Learn more about my journey, passion, and dedication to<br  className="not-mob-br"/>
        creating beats and experiences
        
      
        </p>
      </div>

      <div className="main">
        <div className="child-1">
          <img src={about} alt="About Me" />
        </div>
        <div className="child-2">
          <p className="heading">The journey of my music life starts here</p>
          <p className="text">
          My name is Chirag Choudhary, also known as CJ Chirag, and I’m a music producer and beatboxer from India. Inspired by the energy and creativity of trap beats, I’m on a mission to revolutionize the sound of India’s hip-hop scene. Music is more than just a craft for me it’s a passion that drives everything I do. Through my work, I aim to create a unique sound that pushes boundaries and inspires others in the process.
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
