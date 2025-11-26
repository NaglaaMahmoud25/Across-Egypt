import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";
import Swal from "sweetalert2";

// Import react-icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const text = await res.text();

      if (res.ok) {
        Swal.fire({
          title: "Message Sent!",
          text: text,
          icon: "success",
          confirmButtonColor: "#d4af37",
          background: "#1a1a1a",
          color: "#f8f8f8",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          title: "Error",
          text: text,
          icon: "error",
          confirmButtonColor: "#d4af37",
          background: "#1a1a1a",
          color: "#f8f8f8",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "error",
        confirmButtonColor: "#d4af37",
        background: "#1a1a1a",
        color: "#f8f8f8",
      });
    }
  };

  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="contact-header">
          <h1>Contact Us ✨</h1>
          <p>We’re here to make your travel dreams come true.</p>
        </div>

        <div className="contact-content">
          {/* Info Box */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Let’s design your perfect getaway experience together.
              Reach us anytime — we’d love to assist you.
            </p>

            <div className="info-item">
              <FaPhoneAlt className="cg-icon" /> +20 123 456 789
            </div>
            <div className="info-item">
              <FaEnvelope className="cg-icon" /> info@luxtravel.com
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="cg-icon" /> Cairo, Egypt
            </div>

            <div className="floating-icons">
              <FaLinkedin />
              <FaTwitter />
              <FaInstagram />
              <FaFacebook />
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
