import React, { useEffect, useState, useRef } from "react";
import "./styles/home.css";
import "./styles/loder.css";
import { gsap } from "gsap";
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

import { FaAngleUp } from "react-icons/fa6";
const HomePage: React.FC = () => {
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

  //animation
  const loderRef = useRef<HTMLDivElement | null>(null);
  const mainTextRef = useRef<HTMLDivElement | null>(null);
  const firstContainerRef = useRef<HTMLDivElement | null>(null);
  const secondContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      firstContainerRef.current?.children ?? [],
      {
        y: "100%", // Start from 100% below the container
      },
      {
        y: "0%", // Animate to 0% (its original position)
        duration: 0.6,
        stagger: 0.15, // Fixed stagger for each element
      },
      0.5
    );

    timeline.fromTo(
      secondContainerRef.current?.children ?? [],
      {
        y: "100%",
      },
      {
        y: "0%",
        duration: 0.6,
        stagger: 0.15,
      },
      "-=0.4"
    );

    timeline.fromTo(
      mainTextRef.current?.children ?? [],
      {
        opacity: 0,
        y: 50,
        rotate: "90deg",
      },
      {
        duration: 0.8,
        color: "white",
        stagger: {
          amount: 0.8,
        },
        rotate: "0deg",
        y: 0,
        opacity: 1,
        ease: "power3.inOut",
      },
      "<"
    );

    // timeline.to(
    //   mainTextRef.current?.children ?? [],
    //   {
    //     duration: 0.4,
    //     rotate: "-90deg",
    //     y: -50,
    //     stagger: {
    //       amount: 0.4,
         
    //     },
    //     opacity: 0,
    //     ease: "power3.inOut",
    //   },
    //   "+=0.1"
    // );

    // timeline.to(
    //   secondContainerRef.current?.children ?? [],
    //   {
    //     y: "-100%",
    //     duration: 0.5, 
    //     stagger: 0.15, 
    //   },
    //   "-=0.2"
    // );


    // timeline.to(
    //   firstContainerRef.current?.children ?? [],
    //   {
    //     y: "-100%", 
    //     duration: 0.5,
    //     stagger: 0.15, 
    //   },
    //   "-=0.2"
    // );

    if (window.innerWidth < 600) {
      timeline.to(
        loderRef.current,
        {
          opacity: 0,
          scale: 1.5,
          duration: 1,
          display: "none",
        },
        
      );
    } else {
      timeline.to(
        loderRef.current,
        {
          opacity: 0,
          scale: 3,
          duration: 1,
          display: "none",
        },
        
      );
    }

   
  }, []);

  return (
    <>
      <button
        className={`backToTopBtn ${isVisible ? "active" : ""}`} // Add 'active' class based on visibility
        onClick={handleScrollToTop}
      >
        <FaAngleUp /> {/* Using the imported icon */}
      </button>

      {/* loder */}

      <div className="loder-overlay" ref={loderRef}>
        <div className="second-container" ref={secondContainerRef}>
          <div className="second-type"></div>
          <div className="second-type"></div>
          <div className="second-type"></div>
          <div className="second-type"></div>
        </div>

        <div className="first-container" ref={firstContainerRef}>
          <div className="first-type"></div>
          <div className="first-type"></div>
          <div className="first-type"></div>
          <div className="first-type"></div>
        </div>

        <div className="main-text" ref={mainTextRef}>
          <span>C</span>
          <span>J</span>
         
          <span>C</span>
          <span>H</span>
          <span>I</span>
          <span>R</span>
          <span>A</span>
          <span>G</span>
        </div>
      </div>

      {/* nav section */}

      <Navbar />
      {/* hero section  */}

      <HeroSection />

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
