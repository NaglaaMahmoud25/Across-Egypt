import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './sinaa.css';   // ← نفس ملف الأقصر 100%

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardHover = { scale: 1.05, transition: { duration: 0.3 } };

export default function Sinai() {
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

      {/* 3D Hero – صورة من عندك */}
      <motion.header
        className="sinai-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url("/imges/egypt/sinai/sinai_hero.jpeg")`,
          transform: `perspective(1500px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale3d(1.02,1.02,1.02)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out"
        }}
      >
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
        >
          <motion.h1 style={{ transform: "translateZ(60px)" }}>
             Sinai 
          </motion.h1>
          <motion.p style={{ transform: "translateZ(40px)" }}>
            The Land of Turquoise Beaches, Sacred Mountains and Eternal Desert Beauty
          </motion.p>
        </motion.div>
      </motion.header>

      <motion.div
        className="container"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {/* Description */}
        <motion.section className="sinai-section" variants={fadeUp}>
          <div className="section-icon-circle"><i className="fas fa-info"></i></div>
          <h2 className="section-title">Description</h2>
          <div className="section-content">
            <p>South Sinai Peninsula is one of the most breathtaking and spiritually rich regions in the world, connecting Africa and Asia through a land of dramatic contrasts: turquoise waters, coral reefs, golden deserts, and towering granite mountains.</p>
            <p>Known as the "Land of the Prophets", it is where Prophet Moses received the Ten Commandments on Mount Sinai. It is home to Saint Catherine's Monastery (UNESCO World Heritage), the Colored Canyon, the Blue Hole in Dahab, and Ras Mohammed National Park – one of the best diving spots on Earth.</p>
            <p>From the luxury resorts of Sharm El Sheikh to the bohemian vibes of Dahab, from the serenity of Nuweiba to the adventure of Taba and Saint Catherine, Sinai offers everything: diving, hiking, safari, yoga retreats, and Bedouin culture under the clearest starry sky in Egypt.</p>
          </div>
        </motion.section>

        {/* Map */}
        <motion.section className="sinai-section" variants={fadeUp}>
          <div className="section-icon-circle"><i className="fas fa-map-marker-alt"></i></div>
          <h2 className="section-title">Location on Map</h2>
          <motion.div className="map-container" whileHover={{ scale: 1.01 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d356451.968571183!2d33.908354!3d29.498784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1436a0a9a9a9a9a9:0x9c9e9e9e9e9e9e9e!2sSinai%20Peninsula!5e0!3m2!1sen!2seg!4v1735660000000"
              allowFullScreen
              loading="lazy"
              title="Sinai Map"
            ></iframe>
          </motion.div>
        </motion.section>

        {/* Sinai Landmarks */}
        <motion.section className="sinai-section" variants={fadeUp}>
          <div className="section-icon-circle"><i className="fas fa-images"></i></div>
          <h2 className="section-title">Sinai Landmarks</h2>
          <motion.div className="images">   {/* ← هنا كان imges، دلوقتي images */}
            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_catherine.jpg" alt="Saint Catherine" loading="lazy" />
              <div className="image-info">
                <h3>Saint Catherine Monastery</h3>
                <p>UNESCO World Heritage Site</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_bluehole.jpg" alt="Blue Hole" loading="lazy" />
              <div className="image-info">
                <h3>Blue Hole - Dahab</h3>
                <p>World-famous diving spot</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_colored.jpg" alt="Colored Canyon" loading="lazy" />
              <div className="image-info">
                <h3>Colored Canyon</h3>
                <p>Natural colorful rock formations</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_ras.jpg" alt="Ras Mohammed" loading="lazy" />
              <div className="image-info">
                <h3>Ras Mohammed National Park</h3>
                <p>Amazing coral reefs</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_sharm..jpg" alt="Sharm El Sheikh" loading="lazy" /> {/* عدلت الاسم من sinai_sharm..jpg */}
              <div className="image-info">
                <h3>Sharm El Sheikh Beaches</h3>
                <p>Red Sea paradise</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_white.jpg" alt="White Canyon" loading="lazy" />
              <div className="image-info">
                <h3>White Canyon</h3>
                <p>Stunning desert adventure</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_taba.jpg" alt="Taba" loading="lazy" />
              <div className="image-info">
                <h3>Taba Heights</h3>
                <p>Gulf of Aqaba beauty</p>
              </div>
            </motion.div>

            <motion.div className="image-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_albatros.jpg" alt="Albatros" loading="lazy" />
              <div className="image-info">
                <h3>Albatros Laguna Vista</h3>
                <p>Luxury in Dahab</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>


        {/* Video – معدّل بالفيديو الجديد */}
        <motion.section className="sinai-section" variants={fadeUp}>
          <div className="section-icon-circle"><i className="fas fa-film"></i></div>
          <h2 className="section-title">Video about Sinai</h2>
          <motion.div className="video-container" whileInView={{ scale: 1 }} initial={{ scale: 0.98 }} viewport={{ once: true }}>
            <iframe
              title="Sinai: The Holy Mountain 4K"
              src="https://www.youtube.com/embed/nvP9-ZC6zOU"
              allowFullScreen
            />
          </motion.div>
        </motion.section>

        {/* Place Type */}
        <motion.section className="sinai-section" variants={fadeUp}>
          <div className="section-icon-circle"><i className="fas fa-monument"></i></div>
          <h2 className="section-title">Place Type</h2>
          <div className="section-content">
            <p style={{ textAlign: 'center', fontSize: '1.3rem' }}>
              <strong>Desert • Coastal • Spiritual • Diving Paradise • Adventure • Bedouin • Luxury • Nature</strong>
            </p>
          </div>
          <div className="hieroglyph">𓏤𓆣𓋹𓇳</div>
        </motion.section>

        {/* 6 Hotels – صور من عندك */}
        <motion.section className="sinai-section" variants={fadeUp}>
          <div className="section-icon-circle"><i className="fas fa-concierge-bell"></i></div>
          <h2 className="section-title">Popular Hotels in Sinai</h2>
          <motion.div className="hotel-cards">
            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_four.jpg" alt="Four Seasons" loading="lazy" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <h3>Four Seasons Sharm El Sheikh</h3>
                <p>Luxury stay with Red Sea views</p>
                <p><i className="fas fa-map-marker-alt"></i> Sharm El Sheikh</p>
                <a href="https://www.booking.com/hotel/eg/four-seasons-resort-sharm-el-sheikh.en-gb.html" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>

            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_albatros.jpg" alt="Albatros" loading="lazy" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <h3>Albatros Laguna Vista</h3>
                <p>Luxury stay with Red Sea views</p>
                <p><i className="fas fa-map-marker-alt"></i> Dahab</p>
                <a href="https://www.booking.com/hotel/eg/laguna-vista-beach-resort-dahab.en-gb.html" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>

            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_movenpick.jpg" alt="Movenpick" loading="lazy" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <h3>Movenpick Resort Taba</h3>
                <p>Luxury stay with Red Sea views</p>
                <p><i className="fas fa-map-marker-alt"></i> Taba</p>
                <a href="https://www.booking.com/hotel/eg/moevenpick-resort-taba.en-gb.html" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>

            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_swiss.jpg" alt="Swiss Inn" loading="lazy" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <h3>Swiss Inn Resort Dahab</h3>
                <p>Luxury stay with Red Sea views</p>
                <p><i className="fas fa-map-marker-alt"></i> Dahab</p>
                <a href="https://www.booking.com/hotel/eg/swiss-inn-resort-dahab.en-gb.html" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>

            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_stella.jpg" alt="Stella Di Mare" loading="lazy" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <h3>Stella Di Mare Beach Hotel</h3>
                <p>Luxury stay with Red Sea views</p>
                <p><i className="fas fa-map-marker-alt"></i> Sharm El Maya</p>
                <a href="https://www.booking.com/hotel/eg/stella-di-mare-beach-hotel-spa-sharm-el-sheikh.en-gb.html" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>

            <motion.article className="hotel-card" whileHover={cardHover} variants={fadeUp}>
              <img src="/imges/egypt/sinai/sinai_rixos.jpg" alt="Rixos" loading="lazy" />
              <div className="hotel-content">
                <div className="hotel-rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <h3>Rixos Premium Seagate</h3>
                <p>Luxury stay with Red Sea views</p>
                <p><i className="fas fa-map-marker-alt"></i> Nabq Bay</p>
                <a href="https://www.booking.com/hotel/eg/rixos-seagate-sharm.en-gb.html" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i> Book Now
                </a>
              </div>
            </motion.article>
          </motion.div>
        </motion.section>

        {/* خطة السفر */}
        <motion.section className="sinai-section" variants={fadeUp}>
          <div className="section-icon-circle"><i className="fas fa-route"></i></div>
          <h2 className="section-title">Suggested 7-Day Itinerary in Sinai</h2>
          <div className="section-content">
            <div className="table-responsive">
              <table className="table table-dark table-striped table-hover align-middle">
                <thead className="table-warning">
                  <tr><th>Day</th><th>Location</th><th>Main Activities</th><th>Recommended Stay</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Sharm El Sheikh</td><td>Arrival + Naama Bay + Relax</td><td>Four Seasons or Rixos</td></tr>
                  <tr><td>2</td><td>Ras Mohammed</td><td>Snorkeling/Diving + Boat Trip</td><td>Sharm El Sheikh</td></tr>
                  <tr><td>3</td><td>Dahab</td><td>Blue Hole + Canyon Dive + Lagoon</td><td>Dahab (Swiss Inn)</td></tr>
                  <tr><td>4</td><td>Colored & White Canyon</td><td>Jeep Safari + Hiking</td><td>Dahab or Nuweiba</td></tr>
                  <tr><td>5</td><td>Saint Catherine</td><td>Mount Sinai Sunrise Hike + Monastery</td><td>Saint Catherine</td></tr>
                  <tr><td>6</td><td>Nuweiba or Taba</td><td>Beach Day + Bedouin Dinner</td><td>Movenpick Taba</td></tr>
                  <tr><td>7</td><td>Sharm El Sheikh</td><td>Shopping + Departure</td><td>Sharm El Sheikh</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

      </motion.div>

      <button id="topBtn" onClick={scrollToTop} className="top-btn">
        <i className="fas fa-arrow-up"></i>
      </button>

      <Footer />
    </>
  );
}
