import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaUserPlus, FaChevronDown, FaMoon, FaSun, FaSearch, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
const toggleLogin = () => setShowLogin(!showLogin);
  // dropdowns
  const [showSupport, setShowSupport] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showMore, setShowMore] = useState(false);
const [showMobileMenu, setShowMobileMenu] = useState(false);
const [openCategory, setOpenCategory] = useState(false);
const [openMore, setOpenMore] = useState(false);
const [openSupport, setOpenSupport] = useState(false);

  const navigate = useNavigate();


  // refs لكل dropdown
  const supportRef = useRef(null);
  const categoryRef = useRef(null);
  const moreRef = useRef(null);

  // Close ALL dropdowns
  const closeAll = () => {
    setShowSupport(false);
    setShowCategory(false);
    setShowMore(false);
  };

  // Close on scroll (Option A)
  useEffect(() => {
    const handleScroll = () => closeAll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        supportRef.current &&
        !supportRef.current.contains(e.target) &&
        categoryRef.current &&
        !categoryRef.current.contains(e.target) &&
        moreRef.current &&
        !moreRef.current.contains(e.target)
      ) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdowns (مع إغلاق الباقي)
  const toggleSupport = () => {
    setShowSupport(!showSupport);
    setShowCategory(false);
    setShowMore(false);
  };

  const toggleCategory = () => {
    setShowCategory(!showCategory);
    setShowSupport(false);
    setShowMore(false);
  };

  const toggleMore = () => {
    setShowMore(!showMore);
    setShowSupport(false);
    setShowCategory(false);
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
          <img src="/imges/egypt/logo.png" alt="Logo" className="logo" />

          <div className="browse-group">
            
            {/* Support */}
            <div className="browse-dropdown" ref={supportRef}>
              <button className="browse-btn" onClick={toggleSupport}>
                Support <FaChevronDown />
              </button>

              {showSupport && (
                <ul className="category-menu">
                  <li><Link className="nn" to="/terms" onClick={closeAll}>Terms & Conditions</Link></li>
                  <li><Link className="nn" to="/privacy" onClick={closeAll}>Privacy Policy</Link></li>
                  <li><Link className="nn" to="/related-sites" onClick={closeAll}>Related Sites</Link></li>
                  <li><Link className="nn" to="/faq" onClick={closeAll}>FAQ</Link></li>
                </ul>
              )}
            </div>

            {/* Category */}
            <div className="browse-dropdown" ref={categoryRef}>
              <button className="browse-btn" onClick={toggleCategory}>
                Category <FaChevronDown />
              </button>

              {showCategory && (
                <ul className="category-menu">
                  <li><Link className="nn" to="/images" onClick={closeAll}>Images</Link></li>
                  <li><Link className="nn" to="/videos" onClick={closeAll}>Videos</Link></li>
                  <li><Link className="nn" to="/events" onClick={closeAll}>Events</Link></li>
                </ul>
              )}
            </div>

            {/* More */}
            <div className="browse-dropdown" ref={moreRef}>
              <button className="browse-btn" onClick={toggleMore}>
                More <FaChevronDown />
              </button>

              {showMore && (
                <ul className="category-menu">
                  <li><Link className="nn" to="/timeline" onClick={closeAll}>Timeline</Link></li>
                  <li><Link className="nn" to="/egypt-history" onClick={closeAll}>Egyptian History</Link></li>
                  <li><Link className="nn" to="/site-message" onClick={closeAll}>Site Message</Link></li>
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


        </div>

        {showLogin && (
          <div className="login-popup">
            <Login />
          </div>
        )}
        {/* Burger Icon (visible only on small screens) */}
        
<button
  className="burger-icon"
  onClick={() => setShowMobileMenu(!showMobileMenu)}
>
  <span></span>
  <span></span>
  <span></span>
</button>

{/* Mobile Side Menu */}

<div className={`mobile-menu ${showMobileMenu ? "open" : ""}`}>
  <button className="close-btn" onClick={() => setShowMobileMenu(false)}>×</button>

  <ul className="mobile-links">

    <li><Link  to="/" onClick={() => setShowMobileMenu(false)}>Home</Link></li>
    <li><a href="#places-section" onClick={() => setShowMobileMenu(false)}>Provinces</a></li>
    <li><Link to="/contact" onClick={() => setShowMobileMenu(false)}>Contact</Link></li>


    {/* CATEGORY DROPDOWN */}
    <li className="head" onClick={() => setOpenCategory(!openCategory)}>
      Category <span className="arrow">{openCategory ? "▲" : "▼"}</span>
    </li>

    {openCategory && (
      <ul className="dropdown">
        <li><Link className="nn" to="/images" onClick={() => setShowMobileMenu(false)}>Images</Link></li>
        <li><Link className="nn" to="/videos" onClick={() => setShowMobileMenu(false)}>Videos</Link></li>
        <li><Link className="nn" to="/events" onClick={() => setShowMobileMenu(false)}>Events</Link></li>
      </ul>
    )}


    {/* MORE DROPDOWN */}
    <li className="head" onClick={() => setOpenMore(!openMore)}>
      More <span className="arrow">{openMore ? "▲" : "▼"}</span>
    </li>

    {openMore && (
      <ul className="dropdown">
        <li><Link className="nn"  to="/timeline" onClick={() => setShowMobileMenu(false)}>Timeline</Link></li>
        <li><Link className="nn"  to="/egypt-history" onClick={() => setShowMobileMenu(false)}>Egyptian History</Link></li>
        <li><Link className="nn" to="/site-message" onClick={() => setShowMobileMenu(false)}>Site Message</Link></li>
      </ul>
    )}


    {/* SUPPORT DROPDOWN */}
    <li className="head" onClick={() => setOpenSupport(!openSupport)}>
      Support <span className="arrow">{openSupport ? "▲" : "▼"}</span>
    </li>

    {openSupport && (
      <ul className="dropdown">
        <li><Link className="nn" to="/terms" onClick={() => setShowMobileMenu(false)}>Terms & Conditions</Link></li>
        <li><Link className="nn" to="/privacy" onClick={() => setShowMobileMenu(false)}>Privacy Policy</Link></li>
        <li><Link className="nn"  to="/related-sites" onClick={() => setShowMobileMenu(false)}>Related Sites</Link></li>
        <li><Link className="nn"  to="/faq" onClick={() => setShowMobileMenu(false)}>FAQ</Link></li>
      </ul>
    )}

  </ul>
</div>

      </nav>
    </>
  );
}

export default Navbar;
