import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegHandPointRight } from "react-icons/fa";
import "./style/pricing.css";
import "./style/pricing_second.css";
import "./style/newpricing.css";
import { Fade, Zoom } from "react-awesome-reveal";
import { socialLinks } from "../../utils/social";

const PricingSection: React.FC = () => {
  const tickRef = useRef<HTMLDivElement>(null);
  const leaseRef = useRef<HTMLDivElement>(null);
  const exclusiveRef = useRef<HTMLDivElement>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [priceList, setPriceList] = useState<string[]>(["₹5k", "₹15k", "₹20k"]);
  const [details, setDetails] = useState([
    "Non-exclusive rights for affordable beats",
    "Quality production suitable for various projects",
    "WAV and MP3 formats included for versatile usage",
    "Renewal options available to extend access as needed",
  ]); //
  const handleClick = (direction: "left" | "right") => {
    if (tickRef.current) {
      const tickElement = tickRef.current;

      // Use translateX to move the tick smoothly
      if (direction === "left") {
        setIsFadingOut(true);
        tickElement.style.transform = "translateX(0)";
        tickElement.style.width = "100px";
        setTimeout(() => {
          setPriceList(["₹5k", "₹15k", "₹20k"]);
          setDetails([
            "Non-exclusive rights for affordable entry into quality production",
            "Quality production suitable for various projects",
            "WAV and MP3 formats included for versatile usage",
            "Renewal options available to extend access as needed",
          ]);

          setIsFadingOut(false);
        }, 500);
      } else {
        setIsFadingOut(true);
        tickElement.style.transform = "translateX(90px)"; // Move tick to the right (100px offset for Exclusive)
        tickElement.style.width = "110px";
        setTimeout(() => {
          setPriceList(["₹45k", "₹55k", "₹70k"]);
          setDetails([
            "Exclusive rights to the beat, granting full ownership",
            "Unlimited revisions to tailor the beat to your needs",
            "Professional-grade production ensuring high-quality sound",
            "Access to a library of unique sounds that elevate",
          ]);

          setIsFadingOut(false);
        }, 500);
      }
    }
  };

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
      <section className="plans_container" id="services">
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
              <div
                className="child-1"
                ref={leaseRef}
                onClick={() => handleClick("left")}
              >
                Lease
              </div>
              <div
                className="child-2"
                ref={exclusiveRef}
                onClick={() => handleClick("right")}
              >
                Exclusive{" "}
              </div>
            </div>
          </Fade>
        </div>
        <Fade cascade triggerOnce>
          <div className="box-2">
            <div className="plans st-1">
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

            <div className="plans st-2">
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
            <div className="plans st-3">
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
          <div className="head">All plans include</div>
          <div className="details">
            <Zoom cascade damping={0.1} triggerOnce>
              <div className="child">
                <div
                  className={`inner-child  ${
                    isFadingOut ? "fade-out" : "fade-in"
                  }`}
                >
                  <div className="icon">
                    <FaRegCircleCheck className="i" />
                  </div>
                  <div className="text">{details[0]}</div>
                </div>
                <div
                  className={`inner-child  ${
                    isFadingOut ? "fade-out" : "fade-in"
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
                    isFadingOut ? "fade-out" : "fade-in"
                  }`}
                >
                  <div className="icon">
                    <FaRegCircleCheck className="i" />
                  </div>
                  <div className="text">{details[2]}</div>
                </div>
                <div
                  className={`inner-child  ${
                    isFadingOut ? "fade-out" : "fade-in"
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
      </section>

      {/* Pricing for Beats */}
      <section className="plans_container_sec" id="services_2">
        <div className="gardient-1"></div>

        <div className="box-1">
          <Fade cascade damping={0.1} triggerOnce>
            <div className="ticker">Mixing Pricing 🔥</div>

            <div className="content">
              <div className="child-1">
                Explore My Mixing Matering: Affordable Pricing for Your Music
                Projects
              </div>
              <div className="child-2">
                Discover high-quality mixing and mastering services tailored for
                artists, producers, and content creators. Whether you're seeking
                a polished sound for your tracks or need assistance with final
                touches, I offer flexible pricing to suit your needs.
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

              <p className="price">₹1500-₹5000</p>
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

             
              </div>
              <button className="button-mob" onClick={() => handleRedirect("instagram")}>
                Connect with me <IoIosArrowForward className="i" />
              </button>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
