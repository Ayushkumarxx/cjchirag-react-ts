import React from "react";
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
const HomePage: React.FC = () => {
  return (
    <>
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
