import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Alexandria.css';

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

export default function Alexandria() {
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
      <div style={{ height: '80px' }} />
      {/* 3D Header with new image */}
      <motion.header 
        className="alex-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/4/43/Corniche_of_Alexandria.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `perspective(1500px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale3d(1.02, 1.02, 1.02)`,
          transition: 'transform 0.1s ease-out',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            transform: `translateZ(80px)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <motion.h1
            style={{
              transform: `translateZ(60px)`,
            }}
          >
            Alexandria
          </motion.h1>
          <motion.p
            style={{
              transform: `translateZ(40px)`,
            }}
          >
            Egypt's Pearl of the Mediterranean and Historical Coastal Gem
          </motion.p>
        </motion.div>
      </motion.header>
      
      <motion.div className="container"> 

      {/* Container */}
      <motion.div
        className="container"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {/* Description */}
        <motion.section id="desc" className="alex-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-info"></i>
          </div>
          <h2 className="section-title">Description</h2>
          <div className="section-content">
            <p>
              Alexandria is Egypt's second-largest city and main port on the Mediterranean, founded by Alexander the Great in 331 BC.
            </p>
            <p>
              Known for its beautiful beaches, historic libraries, and ancient monuments, Alexandria blends history, culture, and modern lifestyle along its coastal landscape.
            </p>
          </div>
        </motion.section>

        {/* Map */}
        <motion.section id="map" className="alex-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h2 className="section-title">Location on Map</h2>
          <motion.div
            className="map-container"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              title="alexandria-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345670.83122713685!2d29.85790722479969!3d31.200092201999183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4b3e6935cbd%3A0x6b80f7f0b7a1295e!2sAlexandria%2C%20Egypt!5e0!3m2!1sen!2seg!4v1696354980000"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </motion.section>

        {/* Images */}
        <motion.section id="images" className="alex-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-images"></i>
          </div>
          <h2 className="section-title">Alexandria Landmarks</h2>
          <motion.div className="images">
            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/18991528/pexels-photo-18991528.jpeg"
                alt="Bibliotheca Alexandrina"
              />
              <div className="image-info">
                <h3>Bibliotheca Alexandrina</h3>
                <p>Modern library commemorating the ancient Library of Alexandria.</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/18934668/pexels-photo-18934668.jpeg"
                alt="Qaitbay Citadel"
              />
              <div className="image-info">
                <h3>Qaitbay Citadel</h3>
                <p>Historic fortress on the Mediterranean coast built in the 15th century.</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/33854606/pexels-photo-33854606.jpeg"
                alt="Corniche"
              />
              <div className="image-info">
                <h3>Corniche</h3>
                <p>Scenic coastal road offering beautiful Mediterranean views.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Video */}
        <motion.section id="video" className="alex-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-film"></i>
          </div>
          <h2 className="section-title">Video about Alexandria</h2>
          <motion.div
            className="video-container"
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.98 }}
            viewport={{ once: true }}
          >
            <iframe
              title="alexandria-video"
              src="https://www.youtube.com/embed/wNfeYtX3vDE"
              allowFullScreen
            />
          </motion.div>
        </motion.section>

        {/* Type */}
        <motion.section id="type" className="alex-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-monument"></i>
          </div>
          <h2 className="section-title">Place Type</h2>
          <div className="section-content">
            <p style={{ textAlign: 'center', fontSize: '1.3rem' }}>
              <strong>Historical - Coastal - Cultural - Tourist - Mediterranean</strong>
            </p>
          </div>
        </motion.section>

        {/* Hotels */}
        <motion.section id="hotels" className="alex-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-concierge-bell"></i>
          </div>
          <h2 className="section-title">Popular Nearby Hotels</h2>
          <motion.div className="hotel-cards">
            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
                alt="Four Seasons Alexandria"
              />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h3>Four Seasons Alexandria</h3>
                <p>Luxury hotel with stunning Mediterranean views.</p>
                <p>
                  <i className="fas fa-map-marker-alt"></i> Corniche, Alexandria
                </p>
                <a
                  href="https://www.booking.com/hotel/eg/four-seasons-alexandria.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>

            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
              <img
                loading="lazy"
                src="https://assets.hrewards.com/assets/jpg.xxlarge_567_SHR_El_Lessan_exterior_Landscape_001_cd98e8ef6b.jpg?optimize"
                alt="Steigenberger Cecil Alexandria"
              />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Steigenberger Cecil Alexandria</h3>
                <p>Historic 5-star hotel in the heart of Alexandria.</p>
                <p>
                  <i className="fas fa-map-marker-alt"></i> Saad Zaghloul Square, Alexandria
                </p>
                <a
                  href="https://www.booking.com/hotel/eg/cecil-alexandria.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>

            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
  <img
    loading="lazy"
    src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg"
    alt="Hilton Alexandria Corniche"
  />
  <div className="hotel-content">
    <div className="hotel-rating">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star-half-alt"></i>
    </div>
    <h3>Hilton Alexandria Corniche</h3>
    <p>Luxury hotel with panoramic views of the Mediterranean Sea.</p>
    <p>
      <i className="fas fa-map-marker-alt"></i> Corniche, Alexandria
    </p>
    <a
      href="https://www.booking.com/hotel/eg/hilton-alexandria-corniche.html"
      target="_blank"
      rel="noreferrer"
    >
      <i className="fas fa-external-link-alt"></i> Book Now
    </a>
  </div>
</motion.article>

          </motion.div>
        </motion.section>
      </motion.div>

      {/* Scroll Up Button */}
      <button
        id="topBtn"
        onClick={scrollToTop}
        title="Back to Top"
        className="top-btn"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
</motion.div>
      <Footer />
    </>
  );
}
