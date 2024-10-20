import React, { useEffect, useState } from "react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa"; // Import react-icons
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
} from "../../assets/index";
import "./style/mywork.css";
import "./style/hero.css";
import { Fade, AttentionSeeker } from "react-awesome-reveal";

// Define the types for the items
interface Item {
  image: string;
  title: string;
  year: string;
  links: {
    spotify: string;
    apple: string;
    youtube: string;
  };
}
const MyWork: React.FC = () => {
  const [musicItems, setMusicItems] = useState<Item[]>([]);

  // Simulate componentDidMount (DOMContentLoaded equivalent)
  useEffect(() => {
    const items = [
      {
        image: gallery2,
        title: "Rockstar blood",
        year: "2023",
        links: {
          spotify: "https://spotify.com",
          apple: "https://apple.com",
          youtube: "https://youtube.com",
        },
      },
      {
        image: gallery1,
        title: "isha",
        year: "2024",
        links: {
          spotify: "https://spotify.com",
          apple: "https://apple.com",
          youtube: "https://youtube.com",
        },
      },
      {
        image: gallery3,
        title: "Tapstar",
        year: "2023",
        links: {
          spotify: "https://spotify.com",
          apple: "https://apple.com",
          youtube: "https://youtube.com",
        },
      },
      {
        image: gallery4,
        title: "Fame",
        year: "2023",
        links: {
          spotify: "https://spotify.com",
          apple: "https://apple.com",
          youtube: "https://youtube.com",
        },
      },
      {
        image: gallery5,
        title: "Balenciaga",
        year: "2023",
        links: {
          spotify: "https://spotify.com",
          apple: "https://apple.com",
          youtube: "https://youtube.com",
        },
      },
    ];

    setMusicItems(items);
  }, []);

  return (
    <>
      {/* My recent work heading section */}
      <section className="mywork" id="work">
        <div className="gardient-1"></div>

        <div className="heading">
          <Fade cascade damping={0.1} triggerOnce>
            <AttentionSeeker effect="tada" triggerOnce>
              <div className="ticker">recent work 🔥</div>
            </AttentionSeeker>
            <h2>
              My Recent Work <br />
              Gallery
            </h2>
            <p className="text">
              Check out my latest music releases, tailored for versatility and
              impact. <br /> Every track brings a fresh blend of sound.
            </p>
          </Fade>
        </div>
      </section>

      {/* My works grid section */}

      <section className="grid-wrapper-parent">
        <div className="gardient-1"></div>
        <div className="grid-wrapper">
          {musicItems.map((item, index) => (
            <div className={`box item${index + 1}`} key={index}>
              
              <img src={item.image} alt={item.title} className="image" />

              <div className="overlay">
                <div className="overlay-content">
                  <Fade cascade damping={0.1} triggerOnce>

              
                  <h3>{item.title}</h3>
                  <p>{item.year}</p>
                  </Fade>
                  <div className="social">
                  <Fade cascade damping={0.1} triggerOnce>
                    <div
                      className="icon"
                      onClick={() => window.open(item.links.spotify, "_blank")}
                    >
                      <FaSpotify className="i" />
                    </div>
                    <div
                      className="icon"
                      onClick={() => window.open(item.links.apple, "_blank")}
                    >
                      <FaApple className="i" />
                    </div>
                    <div
                      className="icon"
                      onClick={() => window.open(item.links.youtube, "_blank")}
                    >
                      <FaYoutube className="i" />
                    </div>
                    </Fade>
                  </div>
             
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MyWork;
