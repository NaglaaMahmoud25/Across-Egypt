import React, { useState, useEffect } from "react";
import { FaUser, FaUserPlus, FaChevronDown, FaMoon, FaSun, FaSearch, FaGlobe, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMedia, setShowMedia] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showInfoDropdown, setShowInfoDropdown] = useState(false);
  const [language, setLanguage] = useState("en");

  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLogin = () => setShowLogin(!showLogin);
  const toggleMedia = () => setShowMedia(!showMedia);
  const toggleInfo = () => setShowInfo(!showInfo);
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="info-left">
          <span><FaPhone className="top-icon" /> +20 123 456 789</span>
          <span><FaEnvelope className="top-icon" /> info@acrossegy.com</span>
        </div>

        <div className="top-search-bar">
          <input type="text" placeholder="Search here..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>

        <div className="info-right">
          <a href="#">FB</a>
          <a href="#">TW</a>
          <a href="#">IG</a>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
        <div className="navbar-left">
          {/* Info Dropdown على الشمال */}
          <div className="info-dropdown">
            <button className="info-btn" onClick={() => setShowInfoDropdown(!showInfoDropdown)}>
              <div className="three-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {showInfoDropdown && (
              <ul className="info-menu">
                <li><Link to="/terms" onClick={() => setShowInfoDropdown(false)}>Terms & Conditions</Link></li>
                <li><Link to="/privacy" onClick={() => setShowInfoDropdown(false)}>Privacy Policy</Link></li>
                <li><Link to="/related-sites" onClick={() => setShowInfoDropdown(false)}>Related Sites</Link></li>
                <li><Link to="/faq" onClick={() => setShowInfoDropdown(false)}>FAQ</Link></li>
              </ul>
            )}
          </div>

          <img src="/imges/egypt/logo.png" alt="Logo" className="logo" />

          {/* Browse Buttons */}
          <div className="browse-group">
            {/* Media Button */}
            <div className="browse-dropdown">
              <button className="browse-btn" onClick={toggleMedia}>
                Category <FaChevronDown />
              </button>
              {showMedia && (
                <ul className="category-menu">
                  <li><Link to="/images" onClick={() => setShowMedia(false)}>Images</Link></li>
                  <li><Link to="/videos" onClick={() => setShowMedia(false)}>Videos</Link></li>
                  <li><Link to="/events" onClick={() => setShowMedia(false)}>Events</Link></li>
                </ul>
              )}
            </div>

            {/* Info Button */}
            <div className="browse-dropdown">
              <button className="browse-btn" onClick={toggleInfo}>
                More <FaChevronDown />
              </button>
              {showInfo && (
                <ul className="category-menu">
                  <li><Link to="/timeline" onClick={() => setShowInfo(false)}>Timeline</Link></li>
                  <li><Link to="/egypt-history" onClick={() => setShowInfo(false)}>Egyptian History</Link></li>
                  <li><Link to="/site-message" onClick={() => setShowInfo(false)}>Site Message</Link></li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Links Right */}
        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <Link className="home-links" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
            </li>
            <li><a href="#places-section">Provinces</a></li>
            <li><Link to="/contact" className="contact-link">Contact</Link></li>
          </ul>

          <button className="login-btn" onClick={toggleLogin}><FaUser /> Login</button>
          <Link to="/register">
            <button className="register-btn">
              <FaUserPlus /> Register
            </button>
          </Link>

          {/* Dark Mode */}
          <button className="mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Language Icon */}
          <button className="language-icon" onClick={toggleLanguage}>
            <FaGlobe />
          </button>
        </div>

        {showLogin && (
          <div className="login-popup">
            <Login />
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
