import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma Designs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web App Designs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile App Designs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframes</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototypes</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Designs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Visualization</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-Commerce Platform</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Event Booking System</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Email Newsletter</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile-Optimized Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Map Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Learning Management System</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO Management</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Voice Over Work</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Video Editing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
