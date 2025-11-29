import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Giza.css";

const containerVariant = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const cardHover = { scale: 1.05, transition: { duration: 0.3 } };

export default function Giza() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const topBtn = document.getElementById("topBtn");
    const handleScroll = () => { topBtn.style.display = window.scrollY > 300 ? "block" : "none"; };
    window.addEventListener("scroll", handleScroll);
    topBtn.style.display = "none";
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePosition({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

  return (
    <>
      <Navbar />
      <div style={{ height: "80px" }} />

      {/* Hero */}
      <motion.header
        className="giza-hero position-relative d-flex align-items-center justify-content-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1920px-All_Gizah_Pyramids.jpg")`,
          transform: `perspective(1500px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale3d(1.02,1.02,1.02)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out"
        }}
      >
        <div className="hero-overlay"></div>
        <motion.div className="hero-content">
          <motion.h1 className="display-3 fw-bold" style={{ transform: "translateZ(60px)" }}>
            Giza Governorate
          </motion.h1>
          <motion.p className="lead fs-3" style={{ transform: "translateZ(40px)" }}>
            Home to the Great Pyramids & the Sphinx – Where Ancient Wonders Meet Modern Life
          </motion.p>
        </motion.div>
      </motion.header>

      <div className="container my-5">
        <motion.div variants={containerVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>

          {/* Description */}
          <motion.section className="giza-section mb-5" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-info"></i></div>
            <h2 className="section-title">Description</h2>
            <div className="section-content text-light lh-lg">
              <p>Giza Governorate is one of Egypt’s most famous and historically significant regions, home to the Great Pyramids of Giza and the Great Sphinx – the last surviving wonder of the ancient world.</p>
              <p>Located on the west bank of the Nile, just minutes from downtown Cairo, Giza perfectly blends thousands of years of Pharaonic heritage with the energy of a modern megacity. It also hosts the Grand Egyptian Museum (GEM), one of the largest archaeological museums on Earth.</p>
            </div>
          </motion.section>

          {/* Map */}
          <motion.section className="giza-section mb-5" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-map-marker-alt"></i></div>
            <h2 className="section-title">Location on Map</h2>
            <div className="map-container ratio ratio-16x9 shadow-lg rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55256.39561209852!2d31.0941439699646!3d30.01305597139566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846c5b14f53c1%3A0x68c95ca2b5fbaec5!2sGiza%2C%20Egypt!5e0!3m2!1sen!2seg!4v1735660000000"
                allowFullScreen loading="lazy" title="Giza Map" className="border-0"></iframe>
            </div>
          </motion.section>

          {/* Landmarks */}
          <motion.section className="giza-section mb-5" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-images"></i></div>
            <h2 className="section-title">Giza Landmarks</h2>
            <div className="row g-4">
              {[
                { src: "https://images.pexels.com/photos/258131/pexels-photo-258131.jpeg", title: "Great Pyramid of Khufu", desc: "The largest and oldest pyramid" },
                { src: "https://images.pexels.com/photos/261105/pexels-photo-261105.jpeg", title: "Great Sphinx", desc: "Iconic guardian of the Giza Plateau" },
                { src: "https://images.pexels.com/photos/161686/pyramid-giza-egypt-161686.jpeg", title: "Pyramid of Khafre", desc: "Still retains its upper casing stones" },
                { src: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", title: "Grand Egyptian Museum", desc: "World's largest archaeological museum" },
                { src: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg", title: "Solar Boat Museum", desc: "Khufu’s restored ancient boat" },
                { src: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg", title: "Pyramid of Menkaure", desc: "The smallest of the three main pyramids" },
                { src: "https://images.pexels.com/photos/13669152/pexels-photo-13669152.jpeg", title: "Giza Plateau at Sunset", desc: "Magical golden hour views" },
                { src: "https://images.pexels.com/photos/739406/pexels-photo-739406.jpeg", title: "Sound & Light Show", desc: "Evening spectacle with historical narration" }
              ].map((item, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                  <motion.div className="image-card h-100" whileHover={cardHover} variants={fadeUp}>
                    <img src={item.src} className="card-img-top" alt={item.title} loading="lazy" />
                    <div className="image-info p-3">
                      <h3 className="h6 text-warning">{item.title}</h3>
                      <p className="small text-light">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Video */}
          <motion.section className="giza-section mb-5" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-film"></i></div>
            <h2 className="section-title">Video about Giza</h2>
            <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
              <iframe src="https://www.youtube.com/embed/PAHcY-1QnYs" title="Giza Pyramids" allowFullScreen></iframe>
            </div>
          </motion.section>

          {/* Place Type */}
          <motion.section className="giza-section mb-5 text-center" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-monument"></i></div>
            <h2 className="section-title">Place Type</h2>
            <p className="fw-bold fs-3 text-warning">
              Pharaonic • Archaeological • Historical • World Wonder • Tourist • Cultural
            </p>
          </motion.section>

          {/* Hotels */}
          <motion.section className="giza-section" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-concierge-bell"></i></div>
            <h2 className="section-title">Popular Nearby Hotels</h2>
            <div className="row g-4">
              {[
                { img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244292074.jpg", name: "Marriott Mena House", loc: "Pyramids View", link: "https://www.booking.com/hotel/eg/marriott-mena-house-cairo.en-gb.html" },
                { img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/483329155.jpg", name: "Le Méridien Pyramids", loc: "Giza", link: "https://www.booking.com/hotel/eg/le-meridien-pyramids-hotel-spa.en-gb.html" },
                { img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/319766463.jpg", name: "Pyramids View Inn", loc: "Direct View", link: "https://www.booking.com/hotel/eg/pyramids-view-inn.en-gb.html" },
                { img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/282103243.jpg", name: "Hilton Pyramids Golf", loc: "6th of October", link: "https://www.booking.com/hotel/eg/hilton-pyramids-golf.en-gb.html" },
                { img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/52461407.jpg", name: "Steigenberger Pyramids", loc: "New Opening", link: "https://www.booking.com/hotel/eg/steigenberger-pyramids-cairo.en-gb.html" },
                { img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/379966415.jpg", name: "Pyramids Resort by Jazz", loc: "Giza", link: "https://www.booking.com/hotel/eg/pyramids-resort-by-jazz.en-gb.html" }
              ].map((hotel, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <motion.article className="hotel-card h-100" whileHover={cardHover} variants={fadeUp}>
                    <img src={hotel.img} className="card-img-top" alt={hotel.name} loading="lazy" />
                    <div className="hotel-content p-4">
                      <div className="hotel-rating text-warning mb-2">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                      </div>
                      <h3 className="h5 text-warning">{hotel.name}</h3>
                      <p className="text-light small">Luxury stay with pyramid views</p>
                      <p className="small text-muted"><i className="fas fa-map-marker-alt"></i> {hotel.loc}</p>
                      <a href={hotel.link} target="_blank" rel="noreferrer" className="btn btn-warning mt-3 btn-sm">
                        Book Now
                      </a>
                    </div>
                  </motion.article>
                </div>
              ))}
            </div>
          </motion.section>

        </motion.div>
      </div>

      <button id="topBtn" onClick={scrollToTop} className="top-btn">
        <i className="fas fa-arrow-up"></i>
      </button>

      <Footer />
    </>
  );
}
