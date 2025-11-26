import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Terms.css";

function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span>{open ? "-" : "+"}</span>
      </div>
      {open && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function Terms() {
  const termsData = [
    {
      title: "Introduction",
      content: "Welcome to our website. By using it, you agree to our terms and conditions."
    },
    {
      title: "Intellectual Property",
      content: "All content, images, and materials on this website are created and maintained by the developers and are protected by applicable copyright laws."
    },
    {
      title: "User Responsibilities",
      content: "Users must not engage in illegal activities or misuse the site."
    },
    {
      title: "Limitation of Liability",
      content: "The developers are not liable for any damages resulting from the use or inability to use the website."
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to update these terms at any time; changes will be posted on this page."
    },
  ];

  return (
    <>
      <Navbar />

      <div className="terms-page">
        {/* Hero Section */}
        <div className="terms-hero">
          <h1>Terms & Conditions</h1>
          <p>Please read carefully the terms of use before using our website.</p>
        </div>

        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <span>Home</span> &gt; <span>Terms & Conditions</span>
        </nav>

        {/* Accordion Sections */}
        <main className="terms-content">
          {termsData.map((item, idx) => (
            <AccordionItem key={idx} title={item.title} content={item.content} />
          ))}
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Terms;
