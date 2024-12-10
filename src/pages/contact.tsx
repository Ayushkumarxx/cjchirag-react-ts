import React, { useState } from "react";
import { Footer, Navbar } from "../components/index";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TbSend } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import "./styles/contact.css";
import { db } from "../utils/firebase"; // Import the Firestore instance
import { addDoc, collection } from "firebase/firestore"; // Firestore functions

const ContactPage: React.FC = () => {
  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    countryCode: string;
    services: string[];
  }
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "IN",
    services: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status
  const [isLoding, setIsLoding] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      if (checked) {
        return { ...prevState, services: [...prevState.services, value] };
      } else {
        return {
          ...prevState,
          services: prevState.services.filter((service) => service !== value),
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoding(true);
    try {
      // Save formData to Firestore
      await addDoc(collection(db, "contacts"), formData);
      setIsSubmitted(true); // Show success message
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        countryCode: "US",
        services: [],
      }); // Reset form
      setIsLoding(false);
    } catch (error) {
      setIsLoding(false);
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="gardient-1"></div>
        <div className="contact-head">
          <div className="circle"></div>
          <h1 className="head">Get in touch with me</h1>
          <p className="text">
            Got any questions? Fill out the form below and I'll get back to you
            as soon as I can. <br />
            I'm always open to new opportunities and collaborations.
          </p>
        </div>
        {isSubmitted ? (
          <div className="submitted">
            <h2>Thank you for contacting me!</h2>
            <p>We'll get back to you as soon as possible.</p>
            <button>Go to Home</button>
          </div>
        ) : (
          <div className="mainbox">
            <div className="subbox-1">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-row-child">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-row-child">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone number</label>
                  <div className="phone-input">
                    <select name="countryCode" onChange={handleChange}>
                      <option value="US">IN</option>
                      <option value="CA">Other</option>
                      {/* Add more country codes as needed */}
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 90987 99999"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Leave us a message..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Services</label>
                  <div className="checkbox-group">
                    {[
                      "Website design",
                      "Content creation",
                      "UX design",
                      "Strategy & consulting",
                      "User research",
                      "Other",
                    ].map((service) => (
                      <label key={service} className="checkbox-label">
                        <input
                          type="checkbox"
                          value={service}
                          checked={formData.services.includes(service)}
                          onChange={handleCheckboxChange}
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  {isLoding ? (
                    <div className="loder">
                      <div className="ring"></div> Loding..
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
            <div className="subbox-2">
              <h2 className="head">Chat with me</h2>
              <p className="text">Speak to me via email or social media.</p>

              <div className="social-icons">
                <div className="child">
                  <IoChatbubblesOutline className="i" />
                  <a href="">Chat with me</a>
                </div>
                <div className="child">
                  <TbSend className="i" />
                  <a href="">Shoot a message</a>
                </div>
                <div className="child">
                  <BsInstagram className="i" />
                  <a href="">Message me on Instagram</a>
                </div>
              </div>

              <h2 className="head">Call me</h2>
              <p className="text">Call me from Mon-Fri at 9am to 5pm.</p>

              <div className="mob-no">+1 (555) 000-0000</div>

              <h2 className="head">Visit me</h2>
              <p className="text">Chat in person with me in jharkhand.</p>

              <div className="address">
                <FiMapPin className="i" />
                <a href="">123 Main St, Anytown, USA</a>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
