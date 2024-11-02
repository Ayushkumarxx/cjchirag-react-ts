import React, { useState, useRef, useEffect } from "react";
import "./style/fnq.css";
import { question } from "../../assets/index";
import { Fade } from "react-awesome-reveal";

const accordionItems: { heading: string; description: string }[] = [
  {
    heading: "Who is CJChirag Beatz?",
    description:
      "CJChirag Beatz, also known as Chirag Choudary, is a talented music producer and composer from India. With experience in beatboxing and a track record of working with prominent figures in the industry, he brings a unique and creative touch to every project.",
  },
  {
    heading: "What is the cost of my production?",
    description:
      "The cost of production varies based on the project’s scope and requirements. For specific pricing details, please contact me directly to discuss your needs and receive a personalized quote.",
  },
  {
    heading: "Why would one choose me?",
    description:
      "You should choose me for my innovative approach, extensive industry experience, and youthful energy. My ability to blend creativity with professional production ensures a unique outcome that sets your project apart.",
  },
  {
    heading: "What type of software do I use?",
    description:
      "I work with industry-standard software, primarily FL Studio, along with an extensive collection of plugins and sound libraries. This setup allows me to craft high-quality, polished music tailored to meet your project's unique needs.",
  },
];

const Fnq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    bodyRefs.current.forEach((ref: HTMLDivElement | null, index: number) => {
      if (ref) {
        ref.style.maxHeight =
          activeIndex === index ? `${ref.scrollHeight}px` : "0";
      }
    });
  }, [activeIndex]);

  return (
    <div className="accordion" id="accordion">
      <div className="head">
        <div className="image">
          <img src={question} alt="" className="img-1" />
          <img src={question} alt="" className="img-2" />
          <img src={question} alt="" className="img-3" />
        </div>
        <h2>
          Frequently Asked <br />
          Questions
        </h2>
        <p className="text">
          Answers to common questions about my services, and policies.
          <br />
          Find the information you need quickly and easily.
        </p>
      </div>
      <Fade cascade damping={0.1} triggerOnce>
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-item-header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            {item.heading}
          </div>
          <div
            className="accordion-item-body"
            ref={(el) => (bodyRefs.current[index] = el)}
          >
            <div className="accordion-item-body-content">
              {item.description}
            </div>
          </div>
        </div>
      ))}
      </Fade>
    </div>
  );
};

export default Fnq;
