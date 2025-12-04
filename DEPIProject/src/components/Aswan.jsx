import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Aswan.css';

/* Variants */
const containerVariant = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardHover = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

export default function Aswan() {
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

        {/* Hero */}
        <motion.header 
          className="asw-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/f/f4/AswanHighDamSouth.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `perspective(1500px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale3d(1.02,1.02,1.02)`,
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
            style={{ transform: `translateZ(80px)`, transformStyle: 'preserve-3d' }}
          >
            <motion.h1 style={{ transform: `translateZ(60px)` }}>Aswan</motion.h1>
            <motion.p style={{ transform: `translateZ(40px)` }}>
              The Jewel of Upper Egypt along the Nile River
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
          <motion.section id="desc" className="asw-section" variants={fadeUp}>
            <div className="section-icon-circle">
              <i className="fas fa-info"></i>
            </div>
            <h2 className="section-title">Description</h2>
            <div className="section-content">
              <p>
                Aswan is a picturesque city in southern Egypt, famous for its Nile vistas, ancient temples, and Nubian culture.
              </p>
              <p>
                Known for the Philae Temple, Aswan High Dam, and vibrant local markets, it is a cultural and historical hub along the Nile.
              </p>
            </div>
          </motion.section>

          {/* Map */}
          <motion.section id="map" className="asw-section" variants={fadeUp}>
            <div className="section-icon-circle">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h2 className="section-title">Location on Map</h2>
            <motion.div className="map-container" whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
              <iframe
                title="aswan-map"
                src="https://www.google.com/maps?q=Aswan,Egypt&hl=en&gl=US&z=12&output=embed"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </motion.section>

          {/* Images */}
          <motion.section id="images" className="asw-section" variants={fadeUp}>
            <div className="section-icon-circle">
              <i className="fas fa-images"></i>
            </div>
            <h2 className="section-title">Aswan Landmarks</h2>
            <motion.div className="images">
              <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
                <img
                  loading="lazy"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0T9WKERDBEIbWHKoWIUQxGJD8M3QdgtjZw&s"
                  alt="Philae Temple"
                />
                <div className="image-info">
                  <h3>Philae Temple</h3>
                  <p>Ancient temple complex dedicated to the goddess Isis.</p>
                </div>
              </motion.div>


             
             <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
  <img
    loading="lazy"
    src="https://www.youregypttours.com/storage/914/1673526614.jpg"
    alt="Nubian Museum"
  />
  <div className="image-info">
    <h3>Nubian Museum</h3>
    <p>
      A cultural museum in Aswan showcasing Nubian heritage, artifacts, and history. Perfect for exploring local traditions and ancient culture.
    </p>
  </div>
</motion.div>


        <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
  <img
    loading="lazy"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Elephantine%2C_Oberoi_Hotel_by_Night%2C_Aswan%2C_Egypt%2C_Oct_2004.jpg/1200px-Elephantine%2C_Oberoi_Hotel_by_Night%2C_Aswan%2C_Egypt%2C_Oct_2004.jpg"
    alt="Philae Temple, Aswan"
  />
  <div className="image-info">
    <h3>Philae Temple (Felucca Island, Aswan)</h3>
    <p>
      An ancient temple dedicated to the goddess Isis, located on an island in the Nile — rich in history and stunning architectural beauty. A must‑visit for history lovers and photography enthusiasts.  
    </p>
  </div>
</motion.div>



            </motion.div>
          </motion.section>

          {/* Video */}
          <motion.section id="video" className="asw-section" variants={fadeUp}>
            <div className="section-icon-circle">
              <i className="fas fa-film"></i>
            </div>
            <h2 className="section-title">Video about Aswan</h2>
            <motion.div
              className="video-container"
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.98 }}
              viewport={{ once: true }}
            >
              <iframe
                title="aswan-video"
                src="https://www.youtube.com/embed/vYCoz9AQEtg"
                allowFullScreen
              />
            </motion.div>
          </motion.section>

          {/* Type */}
          <motion.section id="type" className="asw-section" variants={fadeUp}>
            <div className="section-icon-circle">
              <i className="fas fa-monument"></i>
            </div>
            <h2 className="section-title">Place Type</h2>
            <div className="section-content">
              <p style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                <strong>Historical - Cultural - Tourist - Nile - Nubian</strong>
              </p>
            </div>
          </motion.section>

          {/* Hotels */}
          <motion.section id="hotels" className="asw-section" variants={fadeUp}>
            <div className="section-icon-circle">
              <i className="fas fa-concierge-bell"></i>
            </div>
            <h2 className="section-title">Popular Hotels in Aswan</h2>

            <motion.div className="hotel-cards">

              {/* Hotel 1 */}
              <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
                <img
                  loading="lazy"
                  src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
                  alt="Sofitel Legend Old Cataract"
                />
                <div className="hotel-content">
                  <div className="hotel-rating">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h3>Sofitel Legend Old Cataract</h3>
                  <p>Luxury historic hotel overlooking the Nile.</p>
                  <p><i className="fas fa-map-marker-alt"></i> Nile Corniche, Aswan</p>
                  <a
                    href="https://www.booking.com/hotel/eg/sohitel-legend-old-cataract.ar.html?aid=356980&label=gog235jc-10CAsoQ0Ibc29oaXRlbC1sZWdlbmQtb2xkLWNhdGFyYWN0SDNYA2hDiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuALHnsLJBsACAdICJDhlNDg3MTViLTVkYTItNDllYy1iMmE5LTU5OTVmZjU5YTEyM9gCAeACAQ&sid=7b6bbb069a219390206c04956ac07533&dest_id=-291535&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1764790105&srpvid=97a988e4e4fb0c90&type=total&ucfs=1&"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Book Now
                  </a>
                </div>
              </motion.article>

               {/* Hotel 2 */}
    <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
      <img
        loading="lazy"
        src="https://lh3.googleusercontent.com/p/AF1QipO8g7Cj67Kg_RtJOQJgZvVCz0cLIuPoCgnnEHnZ=s680-w680-h510-rw"
        alt="Mövenpick Resort Aswan"
      />
      <div className="hotel-content">
        <div className="hotel-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <h3>Mövenpick Resort Aswan</h3>
        <p>Luxurious resort with Nile views and excellent amenities.</p>
        <p>
          <i className="fas fa-map-marker-alt"></i> Nile Corniche, Aswan
        </p>
        <a
          href="https://www.booking.com/hotel/eg/movenpick-resort-aswan.html"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-external-link-alt"></i> Book Now
        </a>
      </div>
    </motion.article>

              {/* Hotel 3 */}
              <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
                <img
                  loading="lazy"
                  src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg"
                  alt="Tolip Aswan Hotel"
                />
                <div className="hotel-content">
                  <div className="hotel-rating">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <h3>Tolip Aswan Hotel</h3>
                  <p>Comfortable hotel with panoramic Nile views.</p>
                  <p><i className="fas fa-map-marker-alt"></i> Aswan Corniche</p>
                  <a
                    href="10CAsoQ0ILdG9saXAtYXN3YW5IM1gEaEOIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AvGlwskGwAIB0gIkNWFkZDIzMmUtNjYyOC00OWUyLWIwMzUtODhkMDJlNmI2ODE52AIB4AIB"
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
