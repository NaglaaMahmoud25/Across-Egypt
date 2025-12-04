import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import "./FAQ.css";

const faqData = {
  General: [
    { q: "What is Egypt Best Tours about?", a: "We are a specialized travel agency offering curated private and group tours across Egypt, focusing on history, culture, adventure, and authentic experiences." },
    { q: "Is Egypt safe for tourists in 2025?", a: "Yes, Egypt is very safe for tourists. Tourist areas (Cairo, Luxor, Aswan, Red Sea, Alexandria) are heavily protected. We only use licensed guides and trusted transportation." },
    { q: "When is the best time to visit Egypt?", a: "October to April is ideal (mild weather 20-28°C). May-September is hot (35-45°C) but cheaper and less crowded." },
    { q: "Do I need a visa to visit Egypt?", a: "Most nationalities can get a visa on arrival ($25 USD) or e-Visa online. Some countries (EU, USA, UK, Canada, Australia) are eligible." },
    { q: "What currency is used and can I pay by card?", a: "Egyptian Pound (EGP). Cards are widely accepted in hotels and big shops, but cash is king in markets and small places. ATMs are everywhere." },
    { q: "What should I wear in Egypt?", a: "Light, breathable clothes. Women: shoulders and knees covered when visiting mosques or conservative areas. Comfortable walking shoes are a must." },
    { q: "Can I drink tap water in Egypt?", a: "No, drink only bottled water (very cheap and available everywhere). Ice in drinks at reputable places is safe." },
  ],
  Booking: [
    { q: "How can I book a tour with you?", a: "Choose your tour → fill the inquiry form → we reply within 12-24 hours with itinerary & price → pay a small deposit → done!" },
    { q: "Do you require a deposit and is it refundable?", a: "Yes, usually 20-30% deposit. Fully refundable up to 30 days before the tour (except flights/cruises)." },
    { q: "Can I customize or build my own itinerary?", a: "Absolutely! 90% of our clients customize their trips. Just tell us your interests, budget, and dates." },
    { q: "What is included in the tour price?", a: "Domestic flights, 4-5 star hotels, private A/C vehicle, licensed Egyptologist guide, all entrance fees, most meals, and airport transfers." },
    { q: "Can I pay the remaining balance on arrival?", a: "Yes! You can pay the rest in cash (USD/EUR/GBP) or card upon arrival in Cairo." },
    { q: "Do you offer payment in installments?", a: "Yes, we can split the balance into 2-3 payments before the trip." },
    { q: "What is your cancellation policy?", a: "Free cancellation up to 30 days before arrival. 50% refund 15-29 days. No refund less than 14 days (except in medical emergencies)." },
    { q: "Do you offer travel insurance?", a: "We highly recommend it. We can include comprehensive insurance starting from $45 per person." },
  ],
  Tours: [
    { q: "Are your tours private or group?", a: "We specialize in private tours by default. Small-group tours (max 12) are available on selected dates with lower prices." },
    { q: "Do you offer Nile cruises?", a: "Yes! 3, 4, and 7-night luxury Nile cruises from Luxor to Aswan (or reverse) with full board and guided excursions." },
    { q: "Can solo travelers join your tours?", a: "Yes! Solo travelers pay a small single supplement or we can try to match you with another solo traveler." },
    { q: "Are children allowed and is there a discount?", a: "Yes, children under 12 get 30-50% discount depending on age and hotel policy." },
    { q: "Do you organize honeymoon or anniversary trips?", a: "Definitely! We add special touches: private candle-light dinner on the Nile, flowers, cake, and romantic felucca rides." },
    { q: "Can people with limited mobility join?", a: "Many of our tours are wheelchair-friendly. Please inform us in advance so we choose suitable hotels and vehicles." },
    { q: "Do you offer day trips from Hurghada or Sharm El Sheikh?", a: "Yes! Cairo by flight, Luxor, snorkeling trips, desert safaris, and more." },
  ],
  Sites: [
    { q: "Will I enter inside the Great Pyramid?", a: "Yes, entrance ticket to go inside is extra (~$20). Only 300 tickets daily, so we book early." },
    { q: "Can I see Tutankhamun's mask and treasures?", a: "Yes, they are displayed in the Grand Egyptian Museum (GEM) which opened fully in 2025." },
    { q: "Is Abu Simbel included in standard tours?", a: "It can be added as a day trip by flight from Aswan (highly recommended!)." },
    { q: "Are the Valley of the Kings tombs open every day?", a: "Most are open, but 1-2 tombs rotate for restoration. Tutankhamun & Seti I have extra tickets." },
    { q: "Can I take photos inside temples and tombs?", a: "Photography is allowed in most places without flash. Some tombs require a separate camera ticket." },
    { q: "Do you visit the Sphinx and is the nose really broken by Napoleon?", a: "Yes we visit! The nose was damaged centuries before Napoleon (probably in the 14th century)." },
    { q: "Is the new Grand Egyptian Museum open now?", a: "Yes, fully open since early 2025 and it's spectacular – the new home of most treasures." },
  ],
  Transportation: [
    { q: "What kind of vehicles do you use?", a: "Modern air-conditioned minivans, minibuses, or coaster buses (Toyota, Mercedes) depending on group size." },
    { q: "Are domestic flights included?", a: "Yes, Cairo-Luxor, Aswan-Cairo, or Sharm-Cairo flights are included in multi-city packages." },
    { q: "Do you provide airport transfers?", a: "Free arrival and departure transfers from Cairo Airport (or any hotel) are always included." },
    { q: "Is the sleeper train between Cairo and Luxor good?", a: "It's an experience! We usually recommend the 1-hour flight instead, but train is available on request." },
  ]
};

const ITEMS_PER_PAGE = 6;

function AccordionItem({ question, answer, isOpen, toggle }) {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`} onClick={toggle}>
      <div className="accordion-question">
        <h3>{question}</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && <div className="accordion-answer">{answer}</div>}
    </div>
  );
}

function FAQ() {
  const [activeTab, setActiveTab] = useState("General");
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const currentData = faqData[activeTab];

  // Smart search in both question and answer
  const filteredAndSearched = useMemo(() => {
    if (!searchTerm.trim()) return currentData;

    const term = searchTerm.toLowerCase();
    return currentData.filter(item =>
      item.q.toLowerCase().includes(term) ||
      item.a.toLowerCase().includes(term)
    );
  }, [currentData, searchTerm]);

  // Show only limited items when no search
  const displayedItems = searchTerm.trim() ? filteredAndSearched : filteredAndSearched.slice(0, ITEMS_PER_PAGE);

  const hasMore = !searchTerm.trim() && filteredAndSearched.length > ITEMS_PER_PAGE;

  const handleLoadMore = () => {
    window.scrollTo({ top: document.querySelector(".faq-accordion").offsetTop - 100, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="advanced-faq-page">
        <div className="faq-hero">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know before traveling to Egypt</p>
        </div>

        {/* Tabs */}
        <div className="faq-tabs">
          {Object.keys(faqData).map(tab => (
            <button
              key={tab}
              className={`faq-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                setSearchTerm("");
                setOpenIndex(null);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="faq-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={`Search in ${activeTab.toLowerCase()} FAQs...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Results Counter */}
        {searchTerm && (
          <p className="search-results-count">
            Found {filteredAndSearched.length} result{filteredAndSearched.length !== 1 ? "s" : ""}{" "}
            {searchTerm && `for "${searchTerm}"`}
          </p>
        )}

        {/* Accordion */}
        <div className="faq-accordion">
          {displayedItems.length > 0 ? (
            displayedItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === idx}
                toggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))
          ) : (
            <p className="no-results">No questions found matching your search.</p>
          )}
        </div>

        {/* Load More Button - only when not searching */}
        {!searchTerm.trim() && currentData.length > ITEMS_PER_PAGE && displayedItems.length < currentData.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={() => alert("In production: load next 6 items")}>
              Load More Questions
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
