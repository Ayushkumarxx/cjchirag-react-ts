import React, { useEffect, useState } from "react";
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
const HomePage: React.FC = () => { 

 
    const [audioPlayed, setAudioPlayed] = useState(false);

    useEffect(() => {
      const playAudio = () => {
        if (!audioPlayed) {
          const audio = new Audio(voice);
          audio.play().then(() => {
            setAudioPlayed(true);  // Mark the audio as played
            console.log('Audio is playing');
          }).catch((error) => {
            console.error('Audio playback failed:', error);
          });
        }
      };
  
      // Listen for user interaction (scroll or click)
      document.addEventListener('scroll', playAudio);
      window.addEventListener('click', playAudio);

      return () => {
        document.removeEventListener('scroll', playAudio);
        window.removeEventListener('click', playAudio);
      };
    }, [audioPlayed]);
  return (
    <>
      {/* nav section */}
    
      <Navbar />
 
      <Fade >
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
