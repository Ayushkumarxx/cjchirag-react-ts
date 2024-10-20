import React, { useEffect, useState } from "react";
import "./styles/home.css";
import {
  Navbar,
  HeroSection,
  MyWork,
  ArtistsWorkedWith,
  PricingSection,
  AboutMe,
  Testimonial,
  Fnq,
  Footer,
} from "../components";
import { voice } from "../assets/index";
import { Fade } from "react-awesome-reveal";
import { FaAngleUp } from "react-icons/fa6";
const HomePage: React.FC = () => {
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll events
  const scrollTop = () => {
    // 500px scroll threshold
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    scrollTop();

    const handleScroll = () => {
      scrollTop();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const playAudio = () => {
      if (!audioPlayed) {
        const audio = new Audio(voice);
        audio
          .play()
          .then(() => {
            setAudioPlayed(true); // Mark the audio as played
            console.log("Audio is playing");
          })
          .catch((error) => {
            console.error("Audio playback failed:", error);
          });
      }
    };

    // Listen for user interaction (scroll or click)
    document.addEventListener("scroll", playAudio);
    window.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("scroll", playAudio);
      window.removeEventListener("click", playAudio);
    };
  }, [audioPlayed]);
  return (
    <>
      <button
        className={`backToTopBtn ${isVisible ? "active" : ""}`} // Add 'active' class based on visibility
        onClick={handleScrollToTop}
       
      >
        <FaAngleUp /> {/* Using the imported icon */}
      </button>
      {/* nav section */}

      <Navbar />

      <Fade>
        {/* hero section  */}
        <HeroSection />
      </Fade>

      {/* my recent work */}
      <MyWork />

      {/* artist i worked with  */}
      <ArtistsWorkedWith />
      {/* pricing section 1 */}
      <PricingSection />

      {/* about me  */}
      <AboutMe />
      {/* testimonials */}
      <Testimonial />
      {/* fnq */}
      <Fnq />
      {/* footer */}
      <Footer />
    </>
  );
};

export default HomePage;
