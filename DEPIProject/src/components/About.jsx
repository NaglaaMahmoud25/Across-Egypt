import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { FaGlobe, FaUsers, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About <span>AcrossEgy</span></h1>
        <p>Connecting Egypt — one idea at a time </p>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="about-section">
          <FaGlobe className="about-icon" />
          <h2>Our Vision</h2>
          <p>
            To build a digital bridge across Egypt, empowering innovation,
            collaboration, and accessibility for all.
          </p>
        </div>

        <div className="about-section">
          <FaUsers className="about-icon" />
          <h2>Our Team</h2>
          <p>
            A diverse group of creative developers, designers, and dreamers
            working together to shape the future.
          </p>
        </div>

        <div className="about-section">
          <FaRocket className="about-icon" />
          <h2>Our Mission</h2>
          <p>
            To launch cutting-edge solutions that make life simpler, smarter,
            and more connected for everyone in Egypt.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
