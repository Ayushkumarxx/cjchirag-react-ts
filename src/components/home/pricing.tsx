// import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {  FaCheck } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
// import { RiSpeakerFill } from "react-icons/ri";
// import { FaSignature } from "react-icons/fa6";
import { PiSignatureBold } from "react-icons/pi";
// import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegHandPointRight } from "react-icons/fa";
import "./style/pricing.css";
import "./style/pricing_second.css";
import "./style/newpricing.css";
import "./style/new_pricing.css";
import { Fade, Zoom } from "react-awesome-reveal";
import { socialLinks } from "../../utils/social";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
// import { EffectCards } from "swiper/modules";

const PricingSection: React.FC = () => {
  // const tickRef = useRef<HTMLDivElement>(null);
  // const [tickDirection, setTickDirection] = useState<"left" | "right">("left");
  // const [isFadingOut, setIsFadingOut] = useState(false);
  // const [onlyDFade, setOnlyDFade] = useState(false);
  // const [priceList, setPriceList] = useState<string[]>(["₹5k", "₹15k", "₹20k"]);
  // const [allOrThis, setAllOrThis] = useState<String>("All plans include");
  // const detailsOptions = {
  //   basicEx: [
  //     "Exclusive rights, granting full ownership of the beat",
  //     "3-4 revisions to tailor the beat to your liking",
  //     "Quality production with WAV, MP3, and trackouts included",
  //     "Unlimited usage rights for YouTube and other platforms",
  //   ],
  //   standardEx: [
  //     "Exclusive rights, giving you full control over the beat",
  //     "4-5 revisions for a refined, polished sound",
  //     "Good production with WAV, MP3, and trackouts included",
  //     "Usage rights for streaming, radio, and various platforms",
  //   ],
  //   premiumEx: [
  //     "Exclusive rights to the beat, granting full ownership",
  //     "Unlimited revisions to tailor the beat to your needs",
  //     "Professional-grade production ensuring high-quality sound",
  //     "Suitable for commercial use on radio, TV, and YouTube",
  //   ],

  //   basicL: [
  //     "Non-exclusive rights with an affordable lease option",
  //     "3-4 revisions to shape the beat to your preference",
  //     "Decent beat with WAV format included",
  //     "Limited rights for streaming and radio; renews annually",
  //   ],
  //   standardL: [
  //     "Non-exclusive rights for versatile usage and enhanced quality",
  //     "4-5 revisions for a more refined and customized sound",
  //     "Good beat with WAV, MP3, and trackouts included",
  //     "Unlimited rights for streaming and radio; renews biennially",
  //   ],
  //   premiumL: [
  //     "Non-exclusive rights with a premium lease experience",
  //     "Unlimited revisions for complete customization",
  //     "Professional production with high-quality WAV, MP3, trackouts",
  //     "Usage rights for all commercial platforms; renews every 3 years",
  //   ],
  //   allEx: [
  //     "Exclusive rights to the beat, granting full ownership",
  //     "Unlimited revisions to tailor the beat to your needs",
  //     "Professional-grade production ensuring high-quality sound",
  //     "Access to a library of unique sounds that elevate",
  //   ],
  //   allL: [
  //     "Non-exclusive rights for affordable beats",
  //     "Quality production suitable for various projects",
  //     "WAV and MP3 formats included for versatile usage",
  //     "Renewal options available to extend access as needed",
  //   ],
  // };

  // const [details, setDetails] = useState<String[]>(detailsOptions.allL); //
  // const handleClick = (direction: "left" | "right") => {
  //   if (tickRef.current) {
  //     const tickElement = tickRef.current;
  //     setTickDirection(direction);

  //     // Use translateX to move the tick smoothly
  //     if (direction === "left") {
  //       setIsFadingOut(true);
  //       setOnlyDFade(true);
  //       tickElement.style.transform = "translateX(0)";
  //       tickElement.style.width = "100px";
  //       setTimeout(() => {
  //         setAllOrThis("All plans include");
  //         setPriceList(["₹5k", "₹15k", "₹20k"]);
  //         setDetails(detailsOptions.allL);
  //         setOnlyDFade(false);
  //         setIsFadingOut(false);
  //       }, 500);
  //     } else {
  //       setIsFadingOut(true);
  //       setOnlyDFade(true);
  //       tickElement.style.transform = "translateX(90px)"; // Move tick to the right (100px offset for Exclusive)
  //       tickElement.style.width = "110px";
  //       setTimeout(() => {
  //         setAllOrThis("All plans include");
  //         setPriceList(["₹45k", "₹55k", "₹70k"]);
  //         setDetails(detailsOptions.allEx);

  //         setIsFadingOut(false);
  //         setOnlyDFade(false);
  //       }, 500);
  //     }
  //   }
  // };

  // const handelPricingDetails = (whichCard: string) => {
  //   if (tickDirection === "left") {
  //     setOnlyDFade(true);

  //     setTimeout(() => {
  //       if (whichCard === "basic") {
  //         setDetails(detailsOptions.basicL);
  //         setAllOrThis("Basic plans include");
  //       }
  //       if (whichCard === "standard") {
  //         setDetails(detailsOptions.standardL);
  //         setAllOrThis("Standard plans include");
  //       }
  //       if (whichCard === "premium") {
  //         setDetails(detailsOptions.premiumL);
  //         setAllOrThis("Premium plans include");
  //       }

  //       setOnlyDFade(false);
  //     }, 500);
  //   }
  //   if (tickDirection === "right") {
  //     setOnlyDFade(true);

  //     setTimeout(() => {
  //       if (whichCard === "basic") {
  //         setDetails(detailsOptions.basicEx);
  //         setAllOrThis("Basic plans include");
  //       }
  //       if (whichCard === "standard") {
  //         setDetails(detailsOptions.standardEx);
  //         setAllOrThis("Standard plans include");
  //       }
  //       if (whichCard === "premium") {
  //         setDetails(detailsOptions.premiumEx);
  //         setAllOrThis("Premium plans include");
  //       }

  //       setOnlyDFade(false);
  //     }, 500);
  //   }
  // };

  const handleRedirect = (where: string) => {
    if (where === "contact") {
      window.open("https://forms.gle/ELfkDbexrvDj3DsB9", "_blank"); // Opens the link in a new tab
    } else if (where === "instagram") {
      window.open(socialLinks.instagram, "_blank"); // Opens the link in a new tab
    }
  };
  return (
    <>
      {/* Pricing for Mix Mastering */}
      {/*  <section className="plans_container" id="services">
        <div className="gardient-1"></div>
        <div className="box-1">
          <Fade cascade damping={0.1} triggerOnce>
            <div className="ticker">Beats Plans 🔥</div>

            <h2>
              Explore my pricing <br />
              plans
            </h2>
            <p className="text">
              Discover tailored pricing plans that fit your budget and <br />
              your needs, *t&c applicable.
            </p>
            <div className="ticker-box">
              <div className="tick" ref={tickRef}></div>
              <div className="child-1" onClick={() => handleClick("left")}>
                Lease
              </div>
              <div className="child-2" onClick={() => handleClick("right")}>
                Exclusive{" "}
              </div>
            </div>
          </Fade>
        </div>

        <div className="box-2 box-2-mob">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            centeredSlides={true} 
            initialSlide={1} 
            
          >
            <SwiperSlide>
              <div
                className="plans st-1"
                onClick={() => handelPricingDetails("basic")}
              >
                <div className="child-1">
                  <div className="head">Basic</div>
                  <div
                    className={`price ${isFadingOut ? "fade-out" : "fade-in"}`}
                  >
                    <p>
                      {priceList[0]}
                      <span>/project</span>
                    </p>
                  </div>
                </div>
                <div className="child-2">Perfect for small projects</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="plans st-2"
                onClick={() => handelPricingDetails("standard")}
              >
                <div className="child-1">
                  <div className="head">
                    <div>Standard</div>
                    <div className="ticker">Most popular</div>
                  </div>
                  <div
                    className={`price ${isFadingOut ? "fade-out" : "fade-in"}`}
                  >
                    <p>
                      {priceList[1]}
                      <span>/project</span>
                    </p>
                  </div>
                </div>
                <div className="child-2">Perfect for any projects</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="plans st-3"
                onClick={() => handelPricingDetails("premium")}
              >
                <div className="child-1">
                  <div className="head">Premium</div>
                  <div
                    className={`price ${isFadingOut ? "fade-out" : "fade-in"}`}
                  >
                    <p>
                      {priceList[2]}
                      <span>/project</span>
                    </p>
                  </div>
                </div>
                <div className="child-2">Perfect for large projects</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <Fade cascade triggerOnce>
          <div className="box-2 box-2-pc">
            <div
              className="plans st-1"
              onClick={() => handelPricingDetails("basic")}
            >
              <div className="child-1">
                <div className="head">Basic</div>
                <div
                  className={`price ${isFadingOut ? "fade-out" : "fade-in"}`}
                >
                  <p>
                    {priceList[0]}
                    <span>/project</span>
                  </p>
                </div>
              </div>
              <div className="child-2">Perfect for small projects</div>
            </div>

            <div
              className="plans st-2"
              onClick={() => handelPricingDetails("standard")}
            >
              <div className="child-1">
                <div className="head">
                  <div>Standard</div>
                  <div className="ticker">Most popular</div>
                </div>
                <div
                  className={`price ${isFadingOut ? "fade-out" : "fade-in"}`}
                >
                  <p>
                    {priceList[1]}
                    <span>/project</span>
                  </p>
                </div>
              </div>
              <div className="child-2">Perfect for any projects</div>
            </div>
            <div
              className="plans st-3"
              onClick={() => handelPricingDetails("premium")}
            >
              <div className="child-1">
                <div className="head">Premium</div>
                <div
                  className={`price ${isFadingOut ? "fade-out" : "fade-in"}`}
                >
                  <p>
                    {priceList[2]}
                    <span>/project</span>
                  </p>
                </div>
              </div>
              <div className="child-2">Perfect for large projects</div>
            </div>
          </div>
        </Fade>
        <div className="box-3">
          <div className={`head ${onlyDFade ? "fade-out" : "fade-in"}`}>
            {allOrThis}
          </div>
          <div className="details">
            <Zoom cascade damping={0.1} triggerOnce>
              <div className="child">
                <div
                  className={`inner-child  ${
                    onlyDFade ? "fade-out" : "fade-in"
                  }`}
                >
                  <div className="icon">
                    <FaRegCircleCheck className="i" />
                  </div>
                  <div className="text">{details[0]}</div>
                </div>
                <div
                  className={`inner-child ${
                    onlyDFade ? "fade-out" : "fade-in"
                  }`}
                >
                  <div className="icon">
                    <FaRegCircleCheck className="i" />
                  </div>
                  <div className="text">{details[1]}</div>
                </div>
              </div>
              <div className="child">
                <div
                  className={`inner-child  ${
                    onlyDFade ? "fade-out" : "fade-in"
                  }`}
                >
                  <div className="icon">
                    <FaRegCircleCheck className="i" />
                  </div>
                  <div className="text">{details[2]}</div>
                </div>
                <div
                  className={`inner-child  ${
                    onlyDFade ? "fade-out" : "fade-in"
                  }`}
                >
                  <div className="icon">
                    <FaRegCircleCheck className="i" />
                  </div>
                  <div className="text">{details[3]}</div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </section>  */}

      <section className="beats_pricing">
        <div className="gardient-1"></div>
        <div className="box-1">
          <Fade cascade damping={0.1} triggerOnce>
            <div className="ticker">Beats Pricings 🔥</div>

            <h2>
              My Custom Beat <br />
              Pricing
            </h2>
            <p className="text">
              Get custom beat rights with pricing designed to fit your budget{" "}
              <br  className="not-mob-br"/> and needs. *Terms and conditions apply.
            </p>
          </Fade>
        </div>

        <div className="box-2">
          <div className="top_line"></div>
      

          <div className="main-content">
            <div className="child-1">
              <div className="main-text">
                <button>Get Started</button>{" "}
                <span className="light">
                  Get custom beats with a unique and fresh sound{" "}
                  <span className="brace">{"{"}</span>every time
                  <span className="brace">{"}"}</span>.
                </span>{" "}
                <span className="dark">
                  Perfect for you and your team, with flexible pricing to match
                  your budget. High-quality beats, made just for you.
                </span>
              </div>

              <div className="main-words">
                <div className="icon">
                  <PiSignatureBold className="i" />
                </div>

                <div className="texts">
                  <div className="text-1">Get Your Exclusive Beats</div>
                  <div className="text-2">From me CJ Chirag Beatz</div>
                </div>
              </div>
            </div>
            <div className="child-2">
              <div className="pricing">
                <div className="icon">
                  <PiSignatureBold className="i" />
                </div>
                <h2 className="head">Custom Beats</h2>
                <p className="text">
                  Contact me for more details and pricing for the beats.
                </p>

                <div className="priceNtick">
                  <div className="price">₹ 15,000-25,000</div>
                  <div className="tick">lifetime</div>
                </div>

                <div className="details-box">
                  <Zoom cascade damping={0.1} triggerOnce>
                    <div className="details">
                      <div className="details-icon">
                        <FaCheck className="i" />
                      </div>
                      <div className="details-text">
                        Exclusive rights to the beat
                      </div>
                    </div>
                    <div className="details">
                      <div className="details-icon">
                        <FaCheck className="i" />
                      </div>
                      <div className="details-text">
                        get revisions until you're fully satisfied
                      </div>
                    </div>
                    <div className="details">
                      <div className="details-icon">
                        <FaCheck className="i" />
                      </div>
                      <div className="details-text">
                        Professional-grade production
                      </div>
                    </div>
                    <div className="details">
                      <div className="details-icon">
                        <FaCheck className="i" />
                      </div>
                      <div className="details-text">
                        Suitable for commercial
                      </div>
                    </div>
                    <div className="details">
                      <div className="details-icon">
                        <FaCheck className="i" />
                      </div>
                      <div className="details-text">
                        {" "}
                        connect directly with me{" "}
                      </div>
                    </div>
                  </Zoom>
                </div>

                <button onClick={() => handleRedirect("contact")}>
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing for Beats */}
      <section className="plans_container_sec" id="services_2">
        <div className="gardient-1"></div>

        <div className="box-1">
          <Fade cascade damping={0.1} triggerOnce>
            <div className="ticker">  Mixing/Mastering pricing 🔥</div>

            <div className="content">
              <div className="child-1">
              Explore My Mixing Matering pirces Affordable for Your Music Projects
              </div>
              <div className="child-2">
              I offer top-notch mixing and mastering services for artists, producers, and content creators. Whether you need your tracks polished or just those final touches, I've got you covered with flexible pricing to fit your need
                <div className="ticker-2">
                  Check out <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        {/* <div className="box-2">
          <div className="plan-1">
            <div className="head">
              <div className="ticker"></div>
              <div className="heading">Lease</div>
            </div>
            <div className="hr-1"></div>
            <div className="content">
              <Zoom cascade damping={0.1} triggerOnce>
                <div className="child">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCheck} className="i" />
                  </div>
                  <div className="text">All basic features included</div>
                </div>
                <div className="child">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCheck} className="i" />
                  </div>
                  <div className="text">Few additional plugins</div>
                </div>
                <div className="child">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCheck} className="i" />
                  </div>
                  <div className="text">Limited changes per call</div>
                </div>
                <div className="child">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCheck} className="i" />
                  </div>
                  <div className="text">Limited support and maintenance</div>
                </div>
                <div className="child">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCheck} className="i" />
                  </div>
                  <div className="text">
                    Limited customization and extensions
                  </div>
                </div>
              </Zoom>
            </div>
            <div className="hr-2"></div>
            <div className="price">
              <div className="text">
                ₹40k-50k <span>/project</span>
              </div>
              <div className="button">
                <button>
                Connect <FontAwesomeIcon icon={faArrowRight} className="i" />
                </button>
              </div>
            </div>
          </div>
          <div className="plan-2">
            <div className="head">
              <div className="ticker">
                <div className="child">Most Popular</div>
              </div>
              <div className="heading">Exclusive</div>
            </div>
            <div className="hr-1"></div>
            <div className="contents">
              <div className="content">
                <Zoom cascade damping={0.1} triggerOnce>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">All basic features included</div>
                  </div>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">Few additional plugins</div>
                  </div>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">Limited changes per call</div>
                  </div>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">Limited support and maintenance</div>
                  </div>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">
                      Limited customization and extensions
                    </div>
                  </div>
                </Zoom>
              </div>

              <div className="content">
                <Zoom cascade damping={0.1} triggerOnce>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">All basic features included</div>
                  </div>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">Few additional plugins</div>
                  </div>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">Limited changes per call</div>
                  </div>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">Limited support and maintenance</div>
                  </div>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">
                      Limited customization and extensions
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>
            <div className="hr-2"></div>
            <div className="price">
              <div className="text">
                ₹50k-90k <span>/project</span>
              </div>
              <div className="button">
                <button>
                  Connect <FontAwesomeIcon icon={faArrowRight} className="i" />
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="newpricing">
          <div className="child-1">
            <div className="details">
              <h1 className="heading">Mixing Pricing</h1>
              <p className="text">
                {" "}
                Discover the best pricing for your project{" "}
              </p>

              <p className="price">
                <del>₹7000</del> ₹5000
              </p>
              <p className="pricetext">
                Track/Vocal and <br />
                Mastering with revisions*
              </p>

              <button
                className="button-1"
                onClick={() => handleRedirect("instagram")}
              >
                Connect with me <IoIosArrowForward className="i" />
              </button>
              <button
                className="button-2"
                onClick={() => handleRedirect("contact")}
              >
                Contact
              </button>
            </div>
          </div>
          <hr />
          <div className="child-2">
            <div className="details">
              <p className="heading">Mixing And Mastering Prices</p>

              <div className="prices">
                <Zoom cascade damping={0.1} triggerOnce>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">
                      ONLY MASTERING:- ₹2000rs (2 revisions only)
                    </div>
                  </div>

                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">
                      Only Vocal Mixing - ₹1500rs (2 revisions only)
                    </div>
                  </div>

                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">
                      Only Track Mixing - ₹3000 (2 revisions only)
                    </div>
                  </div>
                  <div className="child">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} className="i" />
                    </div>
                    <div className="text">
                      FULL TRACK MIXING AND MASTERING:- ₹5000 (includes 3
                      revisions only)
                    </div>
                  </div>
                  <div className="child">
                    <div className="icon">
                      <FaRegHandPointRight className="i" />
                    </div>
                    <div className="text">
                      Note 1: <br />
                      <span className="notBold">
                        FOR ADDITIONAL REVISION - ₹200
                      </span>
                    </div>
                  </div>

                  <div className="child">
                    <div className="icon">
                      <FaRegHandPointRight className="i" />
                    </div>
                    <div className="text">
                      Note 1: <br />
                      <span className="notBold">MIXED TRACKOUTS - ₹1000</span>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
