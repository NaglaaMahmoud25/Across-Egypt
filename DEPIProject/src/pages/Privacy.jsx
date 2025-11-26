import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUserShield, FaDatabase, FaLock, FaHandsHelping, FaNetworkWired } from "react-icons/fa";
import "./Privacy.css";

const privacyData = [
  {
    icon: <FaUserShield />,
    title: "Introduction",
    content: "This Privacy Policy explains how we collect, use, and protect your personal information when using our website."
  },
  {
    icon: <FaDatabase />,
    title: "Data Collection",
    content: "We may collect personal information such as name, email, and usage data when you interact with our site."
  },
  {
    icon: <FaLock />,
    title: "Data Usage",
    content: "The data collected is used to improve website performance, customize user experience, and communicate updates or offers."
  },
  {
    icon: <FaHandsHelping />,
    title: "User Rights",
    content: "Users have the right to request access, correction, or deletion of their personal data. You can contact us anytime for such requests."
  },
  {
    icon: <FaNetworkWired />,
    title: "Third-Party Services",
    content: "We may use third-party services like analytics tools or hosting platforms. These services comply with their own privacy policies."
  },
];

function PrivacyCard({ icon, title, content }) {
  return (
    <div className="privacy-card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function Privacy() {
  return (
    <>
      <Navbar />

      <div className="privacy-page">
        {/* Hero Section */}
        <div className="privacy-hero">
          <h1>Privacy Policy</h1>
          <p>Your privacy is our priority. Learn how we handle and protect your data.</p>
        </div>

        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <span>Home</span> &gt; <span>Privacy Policy</span>
        </nav>

        {/* Grid Cards */}
        <main className="privacy-content">
          {privacyData.map((item, idx) => (
            <PrivacyCard
              key={idx}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Privacy;
