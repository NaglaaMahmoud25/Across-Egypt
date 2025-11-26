import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState(""); // الرسائل للمستخدم
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // تأكد من مطابقة الباسورد
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.text();

      if (response.ok) {
        setMessage("Registration Successful!");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      } else {
        setMessage(data); // الخطأ من السيرفر
      }
    } catch (err) {
      setMessage("Server error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="register-page">
        <div className="register-header">
          <h1>Create Your Account</h1>
          <p>Join us and explore Egypt’s beauty!</p>
        </div>

        <div className="register-content">
          <div className="register-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
              {message && <p className="success">{message}</p>}
            </form>
          </div>

          <div className="register-image">
            <img src="/imges/egypt/Register 1.jfif" alt="Egypt" />
            <div className="image-texts">
              <h3>Start your journey across Egypt's wonders</h3>
              <p>Explore the Nile, the Pyramids, and the hidden gems of Egypt right from your first visit.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
