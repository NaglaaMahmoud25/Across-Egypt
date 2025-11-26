import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FAQ.css"; // استخدمي نفس CSS السابق

const faqData = {
  General: [
    {
      question: "What is your company about?",
      answer: "We provide curated tours and travel information about Egypt, including cultural sites and travel guidance."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact us via the Contact page, email, or phone. Our team responds within 24 hours."
    },
  ],
  Booking: [
    {
      question: "How do I book a tour?",
      answer: "You can book tours directly from the website by selecting your desired location and dates."
    },
    {
      question: "Can I cancel or reschedule a booking?",
      answer: "Yes, bookings can be modified according to our cancellation policy. Please refer to the policy section."
    },
  ],
  Sites: [
    {
      question: "Are all tourist sites included in the packages?",
      answer: "Our packages include major historical and cultural sites, and optional additional sites depending on the package."
    },
    {
      question: "Do you provide transportation?",
      answer: "Yes, transportation is included for most of our guided tours."
    },
  ],
};

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
      <div className="accordion-question">
        <h3>{question}</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <div className="accordion-answer">{answer}</div>
    </div>
  );
}

function FAQ() {
  const [activeTab, setActiveTab] = useState("General");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = faqData[activeTab].filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="advanced-faq-page">
        <div className="faq-hero">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers quickly by using the tabs or search bar.</p>
        </div>

        {/* Tabs */}
        <div className="faq-tabs">
          {Object.keys(faqData).map(tab => (
            <button
              key={tab}
              className={`faq-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="faq-search">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Accordion Section */}
        <div className="faq-accordion">
          {filteredData.length > 0 ? (
            filteredData.map((item, idx) => (
              <AccordionItem
                key={idx}
                question={item.question}
                answer={item.answer}
              />
            ))
          ) : (
            <p className="no-results">No matching questions found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
