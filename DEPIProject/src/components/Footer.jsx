import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact-section">
      <div className="footer-wrapper">

        {/* ==== About Section ==== */}
        <div className="footer-column about">
          <h2>Ataraxis</h2> {/* النص فوق اللوجو */}
          <div className="footer-logo">
            <img src="/imges/egypt/logo.png" alt="Ataraxis Logo" />
          </div>
          <p>
            Discover Egypt like never before — from timeless temples to desert adventures.  
            Our mission is to bring culture, history, and travel experiences to life.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://linkedin.com"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://youtube.com"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        {/* ==== Quick Links ==== */}
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/tours">Tours</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* ==== Support Links ==== */}
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/contact">Contact Support</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* ==== Contact Info ==== */}
        <div className="footer-column contact">
          <h3>Get in Touch</h3>
          <ul>
            <li><i className="fa-solid fa-location-dot"></i> Cairo, Egypt</li>
            <li><i className="fa-solid fa-phone"></i> +20 100 555 7890</li>
            <li><i className="fa-solid fa-envelope"></i> support@ataraxis.com</li>
            <li><i className="fa-brands fa-whatsapp"></i> +20 122 333 4444</li>
          </ul>
          <iframe
            title="map"
            className="footer-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110542.44774942736!2d31.1303!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c9d77c06c3%3A0xb5d6ee70a01b9a1a!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1692282827067"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Ataraxis. All rights reserved.</p>
        <button
          className="back-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}