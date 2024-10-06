import React from "react";
import homeImage from "../../assets/home.jpeg"; 
import './style/hero.css'

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="box-1">
            <div className="text text-gradient">Hey,</div>

            <div className="availabe">
              <div className="main-box">
                <div className="dot"></div>
                <div>available for new opportunities</div>
              </div>
            </div>

            <div className="details text-gradient">
              CJ <br />
              CHIRAGBEATZ
            </div>
          </div>
          <div className="box-2">
            <img src={homeImage} alt="Home" />

            <div className="name text-gradient">CJCHIRAGBEATZ</div>

            <div className="left text-gradient">Hey,</div>

            <div className="right text-gradient">there</div>
          </div>
          <div className="box-3">
            <div className="text text-gradient">there</div>

            <div className="details text-gradient">
              MUSIC <br />
              PRODUCER
            </div>
          </div>
        </div>

        <div className="gardient-1"></div>

        <div className="gardient-2"></div>
      </section>

      {/* Little Info Section */}
      <section className="some-info">
        <div className="box">
          <div className="heading">90+</div>
          <div className="text">Satisfied clients</div>
        </div>
        <div className="divider"></div>
        <div className="box">
          <div className="heading">120+</div>
          <div className="text">Projects completed</div>
        </div>
        <div className="divider"></div>
        <div className="box">
          <div className="heading">10,000+</div>
          <div className="text">Spotify plays</div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
