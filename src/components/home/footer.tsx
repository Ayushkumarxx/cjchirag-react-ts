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
import { socialLinks } from "../../utils/social";

const Footer: React.FC = () => {
  const quickLinks = [
    { text: "Home", url: "/" },
    { text: "Work", url: "#work" },
    { text: "About", url: "#about" },
    { text: "Contact", url: "https://forms.gle/ELfkDbexrvDj3DsB9" },
  ];

  const recentWork = [
    { text: "Kalam Ink", url: "" },
    { text: "Loca", url: "" },
    { text: "Killshot", url: "" },
    { text: "D Evil", url: "" },
    { text: "Naezy", url: "" },
  ];

  const platforms = [
    {
      text: "Spotify",
      url: "https://open.spotify.com/artist/5FcuZLglRfOZQMF0tDPxDV",
    },
    {
      text: "Wynk",
      url: "https://wynk.in/music/artist/cj-chirag/wa_420yc8WOgg",
    },
    {
      text: "Savan",
      url: "https://www.jiosaavn.com/artist/cj-chirag-songs/kgCIEA,xtC0_",
    },
    {
      text: "Apple",
      url: "https://music.apple.com/ae/artist/cj-chirag/1743285468",
    },
    {
      text: "YouTube",
      url: "https://www.youtube.com/channel/UCSdJtejPwxulSLZM-vQdDJA",
    },
  ];

  const myWorks = [
    {
      text: "Drill beats",
      url: "https://www.youtube.com/channel/UCSdJtejPwxulSLZM-vQdDJA",
    },
    {
      text: "Hard trap beats",
      url: "https://www.youtube.com/channel/UCSdJtejPwxulSLZM-vQdDJA",
    },
    {
      text: "Remix beats",
      url: "https://www.youtube.com/channel/UCSdJtejPwxulSLZM-vQdDJA",
    },
    {
      text: "Playlist",
      url: "https://www.youtube.com/channel/UCSdJtejPwxulSLZM-vQdDJA",
    },
  ];

  const handleRedirect = (social: string) => {
    if (social === "instagram") {
      window.open(socialLinks.instagram, "_blank"); // Opens the link in a new tab
    } else if (social === "spotify") {
      window.open(socialLinks.spotify, "_blank"); // Opens the link in a new tab
    }
  };

  return (
    <section className="footer-details">
      {/* First box showing big heading */}
      <div className="child-1">
        <h2>Let's Stay in Touch</h2>
        <div className="button">
          <button
            className="button-1"
            onClick={() => handleRedirect("instagram")}
          >
            <FaInstagram className="i" />
            Instagram
          </button>
          <button
            className="button-2"
            onClick={() => handleRedirect("spotify")}
          >
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
            <a
              href={socialLinks.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaSpotify className="i" />
            </a>
            <a
              href={socialLinks.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaApple className="i" />
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaYoutube className="i" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaTwitter className="i" />
            </a>
          </div>
        </div>

        <div className="box-2">
          <p className="head">Quick Links</p>
          <ol>
            {quickLinks.map(({ text, url }) => (
              <li key={text}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ol>
        </div>

        <div className="box-3">
          <p className="head">Recent Work</p>
          <ol>
            {recentWork.map(({ text, url }) => (
              <li key={text}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="box-4">
          <p className="head">Platforms</p>
          <ol>
            {platforms.map(({ text, url }) => (
              <li key={text}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="box-5">
          <p className="head">My Works</p>
          <ol>
            {myWorks.map(({ text, url }) => (
              <li key={text}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <footer>
        <hr />
        <div className="box">
          <div className="text">CJCHIRAG © 2024. All rights reserved</div>
          <div className="social">
            <a
              href={socialLinks.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaSpotify className="i" />
            </a>
            <a
              href={socialLinks.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaApple className="i" />
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaYoutube className="i" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaLinkedin className="i" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaTwitter className="i" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
