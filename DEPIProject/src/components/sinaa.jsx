import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sinaa.css";

const containerVariant = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
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

      {/* Hero */}
      <motion.header
        className="sinaa-hero position-relative d-flex align-items-center justify-content-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url("/imges/egypt/sinai/sinai_hero.jpg")`,

          transform: `perspective(1500px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale3d(1.02,1.02,1.02)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out"
        }}
      >
        <div className="hero-overlay"></div>
        <motion.div className="hero-content">
          <motion.h1 className="display-3 fw-bold" style={{ transform: "translateZ(60px)" }}>
            Sinai
          </motion.h1>
          <motion.p className="lead fs-3" style={{ transform: "translateZ(40px)" }}>
            The Land of Turquoise Beaches, Sacred Mountains and Eternal Desert Beauty
          </motion.p>
        </motion.div>
      </motion.header>

      <div className="container my-5">
        <motion.div variants={containerVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>

          {/* Description */}
          <motion.section className="sinaa-section mb-5" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-info"></i></div>
            <h2 className="section-title">Description</h2>
            <div className="section-content text-light lh-lg">
              <p>Sinai Peninsula is one of the most breathtaking and spiritually rich regions in the world, connecting Africa and Asia through a land of dramatic contrasts: turquoise waters, coral reefs, golden deserts, and towering granite mountains.</p>
              <p>Known as the "Land of the Prophets", it is where Prophet Moses received the Ten Commandments on Mount Sinai. It is home to Saint Catherine’s Monastery (UNESCO World Heritage), the Colored Canyon, the Blue Hole in Dahab, and Ras Mohammed National Park – one of the best diving spots on Earth.</p>
              <p>From the luxury resorts of Sharm El Sheikh to the bohemian vibes of Dahab, from the serenity of Nuweiba to the adventure of Taba and Saint Catherine, Sinai offers everything: diving, hiking, safari, yoga retreats, and Bedouin culture under the clearest starry sky in Egypt.</p>
            </div>
          </motion.section>

          {/* Map */}
          <motion.section className="sinaa-section mb-5" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-map-marker-alt"></i></div>
            <h2 className="section-title">Location on Map</h2>
            <div className="map-container ratio ratio-16x9 shadow-lg rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d356451.968571183!2d33.908354!3d29.498784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1436a0a9a9a9a9a9:0x9c9e9e9e9e9e9e9e!2sSinai%20Peninsula!5e0!3m2!1sen!2seg!4v1735660000000"
                allowFullScreen loading="lazy" title="Sinai Map" className="border-0">
              </iframe>
            </div>
          </motion.section>

          {/* Landmarks */}
          <motion.section className="sinaa-section mb-5" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-images"></i></div>
            <h2 className="section-title">Sinai Landmarks</h2>
            <div className="row g-4">
              {[
                { src: "/imges/egypt/sinai/sinai_mount.jpg",       title: "Mount Sinai (Jabal Musa)", desc: "Sacred mountain of divine revelation" },
                { src: "/imges/egypt/sinai/sinai_sharm..jpg",       title: "Sharm El Sheikh Beaches", desc: "Crystal waters and world-class diving" },
                { src: "/imges/egypt/sinai/sinai_catherine.jpg",   title: "Saint Catherine's Monastery", desc: "UNESCO site and oldest Christian monastery" },
                { src: "/imges/egypt/sinai/sinai_bluehole.jpg",    title: "Blue Hole - Dahab", desc: "One of the most dangerous and beautiful dive sites" },
                { src: "/imges/egypt/sinai/sinai_colored.jpg",     title: "Colored Canyon", desc: "Natural masterpiece of colorful rock formations" },
                { src: "/imges/egypt/sinai/sinai_ras.jpg",         title: "Ras Mohammed National Park", desc: "Protected marine paradise with magical coral" },
                { src: "/imges/egypt/sinai/sinai_white.jpg",       title: "White Canyon", desc: "Stunning white limestone canyon adventure" },
                { src: "/imges/egypt/sinai/sinai_taba.jpg",        title: "Taba Heights", desc: "Luxury and tranquility on the Gulf of Aqaba" }
              ].map((item, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                  <motion.div className="image-card h-100" whileHover={cardHover} variants={fadeUp}>
                    <img src={item.src} className="card-img-top" alt={item.title} loading="lazy" />
                    <div className="image-info p-3">
                      <h3 className="h6 text-info">{item.title}</h3>
                      <p className="small text-light">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Video */}
          <motion.section className="sinaa-section mb-5" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-film"></i></div>
            <h2 className="section-title">Video about Sinai</h2>
            <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
              <iframe src="https://www.youtube.com/embed/nvP9-ZC6zOU" title="Sinai 2024" allowFullScreen></iframe>
            </div>
          </motion.section>

          {/* Place Type */}
          <motion.section className="sinaa-section mb-5 text-center" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-monument"></i></div>
            <h2 className="section-title">Place Type</h2>
            <p className="fw-bold fs-3 text-info">
              Desert • Coastal • Spiritual • Diving Paradise • Adventure • Bedouin • Luxury • Nature
            </p>
          </motion.section>

          {/* Hotels */}
          <motion.section className="sinaa-section mb-5" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-concierge-bell"></i></div>
            <h2 className="section-title">Popular Hotels in Sinai</h2>
            <div className="row g-4">
              {[
                { img: "/imges/egypt/sinai/sinai_four.jpg",      name: "Four Seasons Sharm El Sheikh", loc: "Sharm El Sheikh", link: "https://www.booking.com/hotel/eg/four-seasons-resort-sharm-el-sheikh.en-gb.html" },
                { img: "/imges/egypt/sinai/sinai_rixos.jpg",     name: "Rixos Premium Seagate", loc: "Nabq Bay", link: "https://www.booking.com/hotel/eg/rixos-seagate-sharm.en-gb.html" },
                { img: "/imges/egypt/sinai/sinai_stella.jpg",    name: "Stella Di Mare Beach Hotel & Spa", loc: "Sharm El Maya", link: "https://www.booking.com/hotel/eg/stella-di-mare-beach-hotel-spa-sharm-el-sheikh.en-gb.html" },
                { img: "/imges/egypt/sinai/sinai_albatros.jpg",  name: "Albatros Laguna Vista - Dahab", loc: "Dahab", link: "https://www.booking.com/hotel/eg/laguna-vista-beach-resort-dahab.en-gb.html" },
                { img: "/imges/egypt/sinai/sinai_movenpick.jpg", name: "Movenpick Resort Taba", loc: "Taba", link: "https://www.booking.com/hotel/eg/moevenpick-resort-taba.en-gb.html" },
                { img: "/imges/egypt/sinai/sinai_swiss.jpg",     name: "Swiss Inn Resort Dahab", loc: "Dahab", link: "https://www.booking.com/hotel/eg/swiss-inn-resort-dahab.en-gb.html" }
              ].map((hotel, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <motion.article className="hotel-card h-100" whileHover={cardHover} variants={fadeUp}>
                    <img src={hotel.img} className="card-img-top" alt={hotel.name} loading="lazy" />
                    <div className="hotel-content p-4">
                      <div className="hotel-rating text-warning mb-2">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                      </div>
                      <h3 className="h5 text-info">{hotel.name}</h3>
                      <p className="text-light small">Luxury stay with Red Sea views</p>
                      <p className="small text-muted"><i className="fas fa-map-marker-alt"></i> {hotel.loc}</p>
                      <a href={hotel.link} target="_blank" rel="noreferrer" className="btn btn-info mt-3 btn-sm">
                        Book Now
                      </a>
                    </div>
                  </motion.article>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 7-Day Itinerary */}
          <motion.section className="sinaa-section mb-5" variants={fadeUp}>
            <div className="section-icon-circle"><i className="fas fa-route"></i></div>
            <h2 className="section-title">Suggested 7-Day Itinerary in Sinai</h2>
            <div className="table-responsive">
              <table className="table table-dark table-striped table-hover align-middle">
                <thead className="table-info">
                  <tr>
                    <th>Day</th>
                    <th>Location</th>
                    <th>Main Activities</th>
                    <th>Recommended Stay</th>
                  </tr>
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
