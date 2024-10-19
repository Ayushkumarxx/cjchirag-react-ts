import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FaRegCircleCheck } from "react-icons/fa6";
import "./style/pricing.css";
import "./style/pricing_second.css";
import { Fade, Zoom, AttentionSeeker } from "react-awesome-reveal";

const PricingSection: React.FC = () => {
  return (
    <>
      {/* Pricing for Mix Mastering */}
      <section className="plans_container" id="services">
        <div className="gardient-1"></div>
        <div className="box-1">
          <Fade cascade damping={0.1} triggerOnce>
          <AttentionSeeker effect="tada" triggerOnce>
          <div className="ticker">Mixing Plans 🔥</div>
          </AttentionSeeker>
          <h2>
            Explore my pricing <br />
            plans
          </h2>
          <p className="text">
            Discover tailored pricing plans that fit your budget and <br />
            your needs, ensuring value and flexibility.
          </p>
          <div className="ticker-box">
            <div className="child-1">CJ Chirag</div>
            <div className="child-2">Beatz</div>
          </div>
          </Fade>
        </div>
      
        <div className="box-2">
          
          <div className="plans st-1">
            <div className="child-1">
              <div className="head">Growth</div>
              <div className="price">
                <p>
                  ₹45k<span>/project</span>
                </p>
              </div>
            </div>
            <div className="child-2">Perfect for small projects</div>
          </div>
        
          <div className="plans st-2">
            <div className="child-1">
              <div className="head">
                <div>Starter</div>
                <div className="ticker">Most popular</div>
              </div>
              <div className="price">
                <p>
                  ₹70k<span>/project</span>
                </p>
              </div>
            </div>
            <div className="child-2">Perfect for larger projects</div>
          </div>
          <div className="plans st-3">
            <div className="child-1">
              <div className="head">Premium</div>
              <div className="price">
                <p>
                  ₹55k<span>/project</span>
                </p>
              </div>
            </div>
            <div className="child-2">Perfect for medium projects</div>
          </div>
        </div>
        <div className="box-3">
          <div className="head">All plans include</div>
          <div className="details">
          <Zoom cascade damping={0.1} triggerOnce>
            <div className="child">
              
              <div className="inner-child">
                <div className="icon">
                  <FaRegCircleCheck className="i" />
                </div>
                <div className="text">
                  Access to a digital audio workstation (DAW)
                </div>
              </div>
              <div className="inner-child">
                <div className="icon">
                  <FaRegCircleCheck className="i" />
                </div>
                <div className="text">
                  A collection of essential and versatile plugins
                </div>
              </div>
            </div>
            <div className="child">
              <div className="inner-child">
                <div className="icon">
                  <FaRegCircleCheck className="i" />
                </div>
                <div className="text">
                  Regular updates and responsive customer support
                </div>
              </div>
              <div className="inner-child">
                <div className="icon">
                  <FaRegCircleCheck className="i" />
                </div>
                <div className="text">
                  A starter pack of royalty-free and high-quality sounds
                </div>
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
          <div className="ticker">Beats Pricing 🔥</div>

          <div className="content">
            <div className="child-1">
              Explore My Beat Collection: Affordable Pricing for Your Music
              Projects
            </div>
            <div className="child-2">
              Discover high-quality beats crafted for artists, producers, and
              content creators. Whether you're looking for exclusive rights or
              leasing options, I offer flexible pricing to suit your needs.
              Elevate your sound with professional beats that fit any budget.
              <div className="ticker-2">
                Check out <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="plan-1">
            <div className="head">
              <div className="ticker"></div>
              <div className="heading">Starter</div>
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
                <div className="text">Limited customization and extensions</div>
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
                  Continue <FontAwesomeIcon icon={faArrowRight} className="i" />
                </button>
              </div>
            </div>
          </div>
          <div className="plan-2">
            <div className="head">
              <div className="ticker">
                <div className="child">Most Popular</div>
              </div>
              <div className="heading">Premium</div>
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
                  Continue <FontAwesomeIcon icon={faArrowRight} className="i" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
