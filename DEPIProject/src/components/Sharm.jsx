import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Luxor.css';

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

export default function Luxor() {
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

      {/* 3D Header */}
      <motion.header 
        className="luxor-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
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
            Luxor Governorate
          </motion.h1>
          <motion.p
            style={{
              transform: `translateZ(40px)`,
            }}
          >
            Egypt's Pharaonic Jewel and the World's Greatest Open-Air Museum
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
        <motion.section id="desc" className="luxor-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-info"></i>
          </div>
          <h2 className="section-title">Description</h2>
          <div className="section-content">
            <p>
              Luxor is considered one of the most prestigious tourist cities in Egypt and the world, containing approximately one-third of the world's monuments. It was formerly known as "Thebes" and served as Egypt's capital during the Pharaonic era.
            </p>
            <p>
              Luxor extends along both banks of the eternal Nile River, where temples and monuments are located on the eastern bank in the City of the Living, while tombs and funerary temples are situated on the western bank in the City of the Dead.
            </p>
          </div>
        </motion.section>

        {/* Map */}
        <motion.section id="map" className="luxor-section" variants={fadeUp}>
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
              title="luxor-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55977.15385915144!2d32.597116739550784!3d25.687243442753993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1449156dbfc75b4f%3A0x5a6d3792d1b6cf2!2z2KfZhNiq2K_Yp9iz2Kkg2KfZhNi52LHYp9mG!5e0!3m2!1sar!2seg!4v1696354980000"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </motion.section>

        {/* Images */}
        <motion.section id="images" className="luxor-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-images"></i>
          </div>
          <h2 className="section-title">Luxor Landmarks</h2>
          <motion.div className="images">
            <motion.div
              className="image-card"
              whileHover={cardHover}
              variants={fadeUp}
            >
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/18991528/pexels-photo-18991528.jpeg"
                alt="Karnak Temple"
              />
              <div className="image-info">
                <h3>Karnak Temple</h3>
                <p>The largest temple in the world, built over 2000 years.</p>
              </div>
            </motion.div>

            <motion.div
              className="image-card"
              whileHover={cardHover}
              variants={fadeUp}
            >
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/18934668/pexels-photo-18934668.jpeg"
                alt="Luxor Temple"
              />
              <div className="image-info">
                <h3>Luxor Temple</h3>
                <p>Built during the reign of Amenhotep III and Ramesses II.</p>
              </div>
            </motion.div>

            <motion.div
              className="image-card"
              whileHover={cardHover}
              variants={fadeUp}
            >
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/33854606/pexels-photo-33854606.jpeg"
                alt="Valley of the Kings"
              />
              <div className="image-info">
                <h3>Valley of the Kings</h3>
                <p>Pharaonic cemetery containing 63 royal tombs, including King Tutankhamun's tomb.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Video */}
        <motion.section id="video" className="luxor-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-film"></i>
          </div>
          <h2 className="section-title">Video about Luxor</h2>
          <motion.div
            className="video-container"
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.98 }}
            viewport={{ once: true }}
          >
            <iframe
              title="luxor-video"
              src="https://www.youtube.com/embed/A7FB_aQcssA"
              allowFullScreen
            />
          </motion.div>
        </motion.section>

        {/* Type */}
        <motion.section id="type" className="luxor-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-monument"></i>
          </div>
          <h2 className="section-title">Place Type</h2>
          <div className="section-content">
            <p style={{ textAlign: 'center', fontSize: '1.3rem' }}>
              <strong>Pharaonic - Archaeological - Historical - Tourist - World Heritage</strong>
            </p>
          </div>
          <div className="hieroglyph">𓂀</div>
        </motion.section>

        {/* Hotels */}
        <motion.section id="hotels" className="luxor-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-concierge-bell"></i>
          </div>
          <h2 className="section-title">Popular Nearby Hotels</h2>
          <motion.div className="hotel-cards">
            <motion.article
              className="hotel-card"
              whileHover={cardHover}
              variants={fadeUp}
            >
              <img
                loading="lazy"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/765681398.jpg?k=4ec84ac1d50a5dbe0b7d990e7e7c1f2a13e3e02513214f4aadbbd74c9c6ef187&o="
                alt="Sofitel Winter Palace Luxor"
              />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h3>Sofitel Winter Palace Luxor</h3>
                <p>Luxurious historic hotel overlooking the Nile River.</p>
                <p>
                  <i className="fas fa-map-marker-alt"></i> Corniche Street, Luxor
                </p>
                <a
                  href="https://www.booking.com/hotel/eg/winter-palace-luxor.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>

            <motion.article
              className="hotel-card"
              whileHover={cardHover}
              variants={fadeUp}
            >
              <img
                loading="lazy"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/520473784.jpg?k=183c0863529ab6a6fcc707a1b473722c404da45c1e7ce02f0af421cc3707c882&o="
                alt="Steigenberger Nile Palace"
              />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Steigenberger Nile Palace</h3>
                <p>5-star hotel with stunning Nile views.</p>
                <p>
                  <i className="fas fa-map-marker-alt"></i> Mohamed Abdallah Street, Luxor
                </p>
                <a
                  href="https://www.booking.com/hotel/eg/steigenberger-nile-palace-luxor.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>

            <motion.article
              className="hotel-card"
              whileHover={cardHover}
              variants={fadeUp}
            >
              <img
                loading="lazy"
                src="https://www.hilton.com/im/en/LUXHITW/3038696/twin-hilton-room-plus.jpg?impolicy=crop&cw=5463&ch=3058&gravity=NorthWest&xposition=0&yposition=291&rw=768&rh=430"
                alt="Hilton Luxor Resort & Spa"
              />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h3>Hilton Luxor Resort & Spa</h3>
                <p>Luxury resort on the Nile with private beach.</p>
                <p>
                  <i className="fas fa-map-marker-alt"></i> Corniche El Nile, Luxor
                </p>
                <a
                  href="https://www.booking.com/hotel/eg/hilton-luxor-resort-spa.en-gb.html"
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

      <Footer />
    </>
  );
}