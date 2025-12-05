import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Giza.css'; // نفس الـ CSS بتاع الأقصر (هيشتغل 100% مع الجيزة)

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

export default function Giza() {
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
        className="Giza-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1500px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale3d(1.02, 1.02, 1.02)`,
          transition: 'transform 0.1s ease-out',
          transformStyle: 'preserve-3d',
          backgroundImage: `url("/imges/egypt/giza/giza_hero.jpg")`, // صورة الهيرو الجديدة
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
          <motion.h1 style={{ transform: `translateZ(60px)` }}>
            Giza Governorate
          </motion.h1>
          <motion.p style={{ transform: `translateZ(40px)` }}>
            Home to the Great Pyramids & the Sphinx – The Last Remaining Wonder of the Ancient World
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
        <motion.section id="desc" className="Giza-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-info"></i>
          </div>
          <h2 className="section-title">Description</h2>
          <div className="section-content">
            <p>
              Giza Governorate is one of Egypt’s most famous and historically significant regions, home to the Great Pyramids of Giza and the Great Sphinx – the last surviving wonder of the ancient world.
            </p>
            <p>
              Located on the west bank of the Nile, just minutes from downtown Cairo, Giza perfectly blends thousands of years of Pharaonic heritage with the energy of a modern megacity. It also hosts the Grand Egyptian Museum (GEM), one of the largest archaeological museums on Earth.
            </p>
          </div>
        </motion.section>

        {/* Map */}
        <motion.section id="map" className="Giza-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h2 className="section-title">Location on Map</h2>
          <motion.div className="map-container" whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
            <iframe
              title="giza-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55256.39561209852!2d31.0941439699646!3d30.01305597139566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846c5b14f53c1%3A0x68c95ca2b5fbaec5!2sGiza%2C%20Egypt!5e0!3m2!1sen!2seg!4v1735660000000"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </motion.section>

        {/* Images */}
        <motion.section id="images" className="Giza-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-images"></i>
          </div>
          <h2 className="section-title">Giza Landmarks</h2>
          <motion.div className="images">
            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img loading="lazy" src="/imges/egypt/giza/giza_khufu.jpg" alt="Great Pyramid of Khufu" />
              <div className="image-info">
                <h3>Great Pyramid of Khufu</h3>
                <p>The largest and oldest pyramid, built ~2580 BC.</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img loading="lazy" src="/imges/egypt/giza/giza_sphinx.jpg" alt="Great Sphinx" />
              <div className="image-info">
                <h3>The Great Sphinx</h3>
                <p>Iconic guardian with the body of a lion and head of a pharaoh.</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img loading="lazy" src="/imges/egypt/giza/giza_gem.jpg" alt="Grand Egyptian Museum" />
              <div className="image-info">
                <h3>Grand Egyptian Museum</h3>
                <p>The world's largest archaeological museum, located beside the pyramids.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Video */}
        <motion.section id="video" className="Giza-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-film"></i>
          </div>
          <h2 className="section-title">Video about Giza</h2>
          <motion.div className="video-container" whileInView={{ scale: 1 }} initial={{ scale: 0.98 }} viewport={{ once: true }}>
            <iframe
              title="giza-video"
              src="https://www.youtube.com/embed/PAHcY-1QnYs"
              allowFullScreen
            />
          </motion.div>
        </motion.section>

        {/* Type */}
        <motion.section id="type" className="Giza-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-monument"></i>
          </div>
          <h2 className="section-title">Place Type</h2>
          <div className="section-content">
            <p style={{ textAlign: 'center', fontSize: '1.3rem' }}>
              <strong>Pharaonic • One of the Seven Wonders • World Heritage • Archaeological • Historical • Global Icon</strong>
            </p>
          </div>
          <div className="hieroglyph">𓄿𓇋𓈖𓋹𓍱</div>
        </motion.section>

        {/* Hotels */}
        <motion.section id="hotels" className="Giza-section" variants={fadeUp}>
          <div className="section-icon-circle">
            <i className="fas fa-concierge-bell"></i>
          </div>
          <h2 className="section-title">Popular Nearby Hotels</h2>
          <motion.div className="hotel-cards">
            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
              <img loading="lazy" src="/imges/egypt/giza/giza_mena.jpg" alt="Marriott Mena House" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <h3>Marriott Mena House</h3>
                <p>Historic luxury hotel with direct pyramid views</p>
                <p><i className="fas fa-map-marker-alt"></i> Pyramids Road, Giza</p>
                <a href="https://www.booking.com/hotel/eg/marriott-mena-house-cairo.en-gb.html" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>

            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
              <img loading="lazy" src="/imges/egypt/giza/giza_meridien.jpg" alt="Le Méridien Pyramids" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <h3>Le Méridien Pyramids</h3>
                <p>Modern 5-star hotel with stunning views</p>
                <p><i className="fas fa-map-marker-alt"></i> Al Haram, Giza</p>
                <a href="https://www.booking.com/hotel/eg/le-meridien-pyramids-hotel-spa.en-gb.html" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>

            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
              <img loading="lazy" src="/imges/egypt/giza/giza_pyramidsview.jpg" alt="Pyramids View Inn" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Pyramids View Inn</h3>
                <p>Amazing rooftop terrace overlooking the pyramids</p>
                <p><i className="fas fa-map-marker-alt"></i> Nazlet El-Samman</p>
                <a href="https://www.booking.com/hotel/eg/pyramids-view-inn.en-gb.html" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>
          </motion.div>
        </motion.section>
      </motion.div>

      {/* Scroll Up Button */}
      <button id="topBtn" onClick={scrollToTop} title="Back to Top" className="top-btn">
        <i className="fas fa-arrow-up"></i>
      </button>

      <Footer />
    </>
  );
}
