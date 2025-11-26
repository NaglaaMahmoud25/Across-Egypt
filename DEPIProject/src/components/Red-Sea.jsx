import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Red-Sea.css";

/* Variants */
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

const cardHover = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

export default function RedSea() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const topBtn = document.getElementById("topBtn");
    function onScroll() {
      const show = window.scrollY > 300;
      if (topBtn) topBtn.style.display = show ? "block" : "none";
    }
    window.addEventListener("scroll", onScroll);
    if (topBtn) topBtn.style.display = "none";
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setMousePosition({
      x: ((x - centerX) / centerX) * 20,
      y: ((y - centerY) / centerY) * 20
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <>
      <Navbar />
      <div style={{ height: "80px" }} />

      {/* 3D Header */}
      <motion.header
        className="redsea-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1500px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="hero-overlay" />

        <motion.div
          className="hero-content"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transform: "translateZ(80px)" }}
        >
          <motion.h1 style={{ transform: "translateZ(60px)" }}>
            Red Sea Governorate
          </motion.h1>

          <motion.p style={{ transform: "translateZ(40px)" }}>
            Egypt's Diving Paradise and One of the World's Top Coastal Destinations
          </motion.p>
        </motion.div>
      </motion.header>

      {/* Container */}
      <motion.div
        className="container"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >

        {/* Description */}
        <motion.section id="desc" className="redsea-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-info"></i>
          </div>
          <h2 className="section-title">Description</h2>

          <div className="section-content">
            <p>
              The Red Sea Governorate is one of Egypt's most famous coastal tourism
              destinations, stretching along more than 1080 km of beaches. It is
              globally known for diving, snorkeling, coral reefs, and rare marine life.
            </p>

            <p>
              Major cities include Hurghada, Marsa Alam, and El Gouna — each offering
              breathtaking nature, luxury resorts, and top diving spots.
            </p>
          </div>
        </motion.section>

        {/* Map */}
        <motion.section id="map" className="redsea-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h2 className="section-title">Location on Map</h2>

          <motion.div className="map-container" whileHover={{ scale: 1.01 }}>
            <iframe
              title="redsea-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1121930.8!2d32.0!3d26.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzAwLjAiTiAzMsKwMDAnMDAuMCJF!5e0!3m2!1sen!2seg!4v1700000000000%22"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </motion.section>

        {/* Images */}
        <motion.section id="images" className="redsea-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-images"></i>
          </div>
          <h2 className="section-title">Red Sea Landmarks</h2>

          <motion.div className="images">
            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img
                src="https://media-cdn.holidaycheck.com/w_1280,h_720,c_fit,q_auto,f_auto/ugc/images/d1659921-362e-488e-89d1-d158c9146510"
                alt="Hurghada Beach"
              />
              <div className="image-info">
                <h3>Hurghada Beaches</h3>
                <p>Crystal-clear water and perfect sandy beaches.</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img
                src="https://cdn.audleytravel.com/-/-/79/498831-red-sea-egypt.jpg"
                alt="Diving"
              />
              <div className="image-info">
                <h3>Diving Sites</h3>
                <p>World-class coral reefs and marine biodiversity.</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/03/de/03/da/marsa-alam.jpg"
                alt="Marsa Alam"
              />
              <div className="image-info">
                <h3>Marsa Alam</h3>
                <p>A paradise for swimmers and underwater photographers.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Video */}
        <motion.section id="video" className="redsea-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-film"></i>
          </div>

          <h2 className="section-title">Video about Red Sea</h2>

          <motion.div className="video-container">
            <iframe
              title="redsea-video"
              src="https://www.youtube.com/embed/7WWGaiTCOJQ"
              allowFullScreen
            />
          </motion.div>
        </motion.section>

        {/* Type */}
        <motion.section id="type" className="redsea-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-water"></i>
          </div>
          <h2 className="section-title">Place Type</h2>

          <div className="section-content">
            <p style={{ textAlign: "center", fontSize: "1.3rem" }}>
              <strong>Coastal - Tourist - Marine - Diving - Natural Beauty</strong>
            </p>
          </div>
        </motion.section>

        {/* Hotels */}
        <motion.section id="hotels" className="redsea-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-concierge-bell"></i>
          </div>

          <h2 className="section-title">Popular Hotels</h2>

          <motion.div className="hotel-cards">

            <motion.article className="hotel-card" whileHover={cardHover}>
              <img src="https://assets.hrewards.com/assets/jpg.medium_111_SHR_Bad_Homburg_public_7806_61ea5c1053.jpg?optimize%22" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Steigenberger Al Dau Beach Hotel</h3>
                <p>Adults-only resort in Marsa Alam offering luxury, tranquility, and top-notch service</p>
                <p><i className="fas fa-map-marker-alt"></i> Hurghada</p>
              </div>
            </motion.article>

            <motion.article className="hotel-card" whileHover={cardHover}>
              <img src="https://www.ghmhotels.com/wp-content/uploads/Chedi-andermatt1-645x360.jpg.webp" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h3>The Chedi El Gouna</h3>
                <p>Boutique luxury resort in El Gouna with Nubian-inspired design, spa, and modern facilities</p>
                <p><i className="fas fa-map-marker-alt"></i> Hurghada</p>
              </div>
            </motion.article>

            <motion.article className="hotel-card" whileHover={cardHover}>
              <img src="data:image/jpeg;base64,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" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i>
                  <i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <h3>Baron Palace Sahl Hasheesh</h3>
                <p>Luxury 5-star resort in Sahl Hasheesh with infinity pools and breathtaking sea views</p>
                <p><i className="fas fa-map-marker-alt"></i> Marsa Alam</p>
              </div>
            </motion.article>

          </motion.div>
        </motion.section>
      </motion.div>

      <button id="topBtn" onClick={scrollToTop} className="top-btn">
        <i className="fas fa-arrow-up"></i>
      </button>

      <Footer />
    </>
  );
}
