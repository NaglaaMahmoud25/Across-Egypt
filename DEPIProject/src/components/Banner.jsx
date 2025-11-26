import React from "react";
import "./Banner.css";

function Banner() {
  return (
     <>
    <div className="banner">
             <img src="/imges/egypt/egypt1.jpg" alt="Egypt" className="banner-image" />

      <div className="banner-content">
        <h1>Explore the Beauty of Egypt</h1>
        <p>Discover amazing places, hotels, and cultural destinations.</p>
        <button className="banner-btn">Start Your Journey</button>
      </div>
    </div>

      <div className="scrolling-text">
        <span>🌟 Welcome to Egypt — Discover the land of history and beauty 🌟</span>
      </div>
  </>

  );
}

export default Banner; 