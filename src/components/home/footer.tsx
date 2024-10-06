import React from "react";
import {
  FaInstagram,
  FaSpotify,
  FaApple,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6"; //
import "../home/style/footer.css";

const Footer: React.FC = () => {
  const quickLinks: string[] = ["Home", "Course", "About", "Contact"];
  const recentWork: string[] = [
    "Kalam Ink",
    "Loca",
    "Killshot",
    "D Evil",
    "Naezy",
  ];
  const resources: string[] = [
    "Books",
    "Course Link",
    "Udemy Course",
    "LinkedIn",
    "YouTube",
  ];
  const myWorks: string[] = [
    "Top 10",
    "Spotify Playlist",
    "YouTube Playlist",
    "Playlist",
  ];

  return (
    <section className="footer-details">
      {/* First box showing big heading */}
      <div className="child-1">
        <h2>Let's Stay in Touch</h2>
        <div className="button">
          <button className="button-1">
            <FaInstagram className="i" />
            Instagram
          </button>
          <button className="button-2">
            <FaSpotify className="i" />
            Spotify
          </button>
        </div>
      </div>
      <hr />

      {/* Main box with all the links and sections */}
      <div className="child-2">
        <div className="box-1">
          <p className="head">CJCHIRAG BEATZ</p>
          <p className="sub-head">
            The journey of my music life starts here with my beatz
          </p>

          <p className="follow-text">Follow me on</p>

          <div className="follow-button">
            <div className="icon">
              <FaSpotify className="i" />
            </div>
            <div className="icon">
              <FaApple className="i" />
            </div>
            <div className="icon">
              <FaYoutube className="i" />
            </div>
            <div className="icon">
              <FaTwitter className="i" />
            </div>
          </div>
        </div>

        <div className="box-2">
          <p className="head">Quick Links</p>
          <ol>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ol>
        </div>

        <div className="box-3">
          <p className="head">Recent Work</p>
          <ol>
            {recentWork.map((work) => (
              <li key={work}>{work}</li>
            ))}
          </ol>
        </div>

        <div className="box-4">
          <p className="head">Resources</p>
          <ol>
            {resources.map((resource) => (
              <li key={resource}>{resource}</li>
            ))}
          </ol>
        </div>

        <div className="box-5">
          <p className="head">My Works</p>
          <ol>
            {myWorks.map((work) => (
              <li key={work}>{work}</li>
            ))}
          </ol>
        </div>
      </div>

      <footer>
        <hr />
        <div className="box">
          <div className="text">CJCHIRAG © 2024. All rights reserved</div>
          <div className="social">
            <div className="icon">
              <FaSpotify className="i" />
            </div>
            <div className="icon">
              <FaApple className="i" />
            </div>
            <div className="icon">
              <FaYoutube className="i" />
            </div>
            <div className="icon">
              <FaLinkedin className="i" />
            </div>
            <div className="icon">
              <FaTwitter className="i" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
