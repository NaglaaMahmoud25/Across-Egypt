import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import "./FAQ.css";

const faqData = {
  General: [
    { q: "What is Egypt Best Tours about?", a: "We are a licensed Egyptian travel agency specializing in private & small-group tours across Egypt with expert Egyptologist guides." },
    { q: "Is Egypt safe for tourists in 2025-2026?", a: "Yes, Egypt remains one of the safest tourist destinations. All tourist areas are heavily secured by tourist police. We have a 100% safety record with thousands of clients." },
    { q: "When is the best time to visit Egypt?", a: "October to April offers perfect weather (20-28°C). December–February is peak season. May–September is very hot but much cheaper and less crowded." },
    { q: "Do I need a visa to visit Egypt?", a: "Most nationalities get visa on arrival ($25 USD cash) or e-Visa online. Citizens of 74 countries are eligible." },
    { q: "What is the currency and can I use credit cards?", a: "Egyptian Pound (EGP). Cards are accepted in hotels and large shops, but cash (especially small bills) is essential for markets, tips, and small purchases." },
    { q: "What should I wear in Egypt as a tourist?", a: "Light cotton clothes, comfortable walking shoes, hat, sunglasses. Women should cover shoulders and knees in mosques and conservative areas." },
    { q: "Can I drink tap water in Egypt?", a: "No. Only bottled water (very cheap, 5-10 EGP). Ice in hotels and reputable restaurants is safe." },
    { q: "Is it customary to tip in Egypt (baksheesh)?", a: "Yes, tipping is part of the culture. $5–10 per day for guide/driver is normal. Small tips (10-20 EGP) for toilet attendants, porters, etc." },
    { q: "Do you provide Egyptian SIM cards or Wi-Fi?", a: "Yes, we can provide a local SIM with data on arrival or most hotels have free Wi-Fi." },
    { q: "Can I use Uber in Cairo?", a: "Yes, Uber and Careem work perfectly in Cairo, Alexandria, and Hurghada." },
    { q: "What languages do your guides speak?", a: "All our guides are fluent in English. Many also speak Spanish, French, German, Italian, Russian, or Arabic." },
    { q: "Do I need any vaccinations for Egypt?", a: "No mandatory vaccines, but Hepatitis A, Typhoid, and routine vaccines are recommended." },
  ],

  Booking: [
    { q: "How do I book a tour with you?", a: "Choose your tour → fill the inquiry form → we send customized itinerary & quote within 12-24 hours → pay 20-30% deposit → confirmed!" },
    { q: "What payment methods do you accept?", a: "Bank transfer, credit/debit card (3% fee), PayPal, Wise, or cash on arrival (USD/EUR/GBP)." },
    { q: "Is the deposit refundable?", a: "Fully refundable up to 30 days before arrival. After that, cancellation policy applies." },
    { q: "Can I pay the balance when I arrive in Egypt?", a: "Yes! Most clients pay the remaining balance in cash on the first day in Cairo." },
    { q: "Do you offer flexible payment plans?", a: "Yes, we can split the balance into 2-3 installments before the trip." },
    { q: "Can I customize my own itinerary?", a: "100% yes! Most of our tours are fully customized according to your interests, budget, and travel dates." },
    { q: "What is included in the tour price?", a: "Domestic flights, 4-5 star hotels, private A/C vehicle, licensed Egyptologist guide, all entrance fees, most meals, airport transfers." },
    { q: "What is NOT included?", a: "International flights, travel insurance, tips, drinks, and optional activities." },
    { q: "What is your cancellation policy?", a: "Free cancellation 30+ days before arrival. 50% refund 15-29 days. No refund less than 14 days (except medical emergencies with proof)." },
    { q: "Do you offer travel insurance?", a: "Yes, we can add comprehensive insurance starting from $45–$90 depending on trip length." },
    { q: "Can I book just hotels or transfers without a full tour?", a: "Yes, we provide hotel bookings, airport transfers, and day trips separately." },
    { q: "How far in advance should I book?", a: "3-6 months for peak season (Oct-Apr), 1-2 months is usually fine for other periods." },
  ],

  Tours: [
    { q: "Are your tours private or group?", a: "We specialize in private tours (you + your party only). Small-group tours (max 10-12) are available on fixed dates at lower prices." },
    { q: "Do you offer Nile cruises?", a: "Yes! 3-night (Aswan-Luxor), 4-night (Luxor-Aswan), or 7-night luxury cruises with full board and excursions." },
    { q: "What is the difference between Dahabiya and regular cruise?", a: "Dahabiya is a traditional sailing boat (6-12 cabins), much more intimate, quieter, and visits smaller sites." },
    { q: "Can solo travelers join?", a: "Yes! Solo travelers pay a single supplement or we can pair you with another solo traveler when possible." },
    { q: "Do you have family-friendly tours?", a: "Yes, many families travel with us. Children under 12 get 30-50% discount." },
    { q: "Do you organize honeymoon packages?", a: "Yes! With romantic extras: private felucca dinner, flowers, cake, suite upgrades, and Red Sea beach extension." },
    { q: "Are wheelchair-accessible tours available?", a: "Yes, many sites and vehicles are accessible. Please inform us in advance." },
    { q: "Can I combine Egypt with Jordan or Dubai?", a: "Absolutely! Very popular combinations: Cairo + Petra or Cairo + Dubai stopover." },
    { q: "Do you offer photography tours?", a: "Yes, we have special itineraries for photographers with early sunrise access and professional guides." },
    { q: "Do you offer desert camping or White Desert tours?", a: "Yes! Overnight camping in the White Desert and Bahariya Oasis is one of our most popular adventures." },
    { q: "What about Red Sea diving or snorkeling packages?", a: "We offer Hurghada, Sharm El Sheikh, Marsa Alam packages with diving, snorkeling, and submarine trips." },
    { q: "Can I visit Siwa Oasis?", a: "Yes! 2-3 day trips from Cairo or as part of a longer Western Desert tour." },
  ],

  Sites: [
    { q: "Can we go inside the Great Pyramid?", a: "Yes! Interior ticket is extra (~$20-25 USD). Only 300 tickets sold daily, so we book in advance." },
    { q: "Is the Grand Egyptian Museum (GEM) open now?", a: "Yes, fully open since 2025. It houses Tutankhamun’s complete collection and 100,000+ artifacts." },
    { q: "Do you visit the new National Museum of Egyptian Civilization (NMEC)?", a: "Yes, it’s included in most Cairo itineraries, especially to see the Royal Mummies Hall." },
    { q: "Can we see Tutankhamun’s mask?", a: "Yes, it’s permanently displayed in the Grand Egyptian Museum." },
    { q: "Is Abu Simbel included in standard tours?", a: "It can be added as a day trip by flight from Aswan (highly recommended!)." },
    { q: "Which tombs are open in the Valley of the Kings?", a: "Usually 8-10 tombs are open, rotating for preservation. Tutankhamun, Ramses VI, and Seti I require extra tickets." },
    { q: "Can I take photos inside tombs and temples?", a: "Allowed without flash in most places. Some tombs require a separate photography ticket (300-500 EGP)." },
    { q: "Do we ride camels at the pyramids?", a: "Optional! You can ride camel or horse around the Giza plateau (we arrange trusted handlers)." },
    { q: "Is the Sound & Light show at the Pyramids worth it?", a: "It’s fun once, especially for first-time visitors. English shows daily." },
    { q: "Can we visit the Bent Pyramid and Red Pyramid in Dahshur?", a: "Yes! Less crowded than Giza and you can actually enter the Red Pyramid." },
    { q: "Do you visit Alexandria from Cairo?", a: "Yes, full-day or overnight trips including the new Bibliotheca Alexandrina, Catacombs, and Qaitbay Citadel." },
    { q: "Is the Solar Boat Museum open?", a: "Yes, the original Khufu ship is now displayed beside the Great Pyramid in a new museum." },
  ],

  Transportation: [
    { q: "What vehicles do you use?", a: "Modern air-conditioned Toyota Hiace, Mercedes vans, or minibuses depending on group size." },
    { q: "Are domestic flights included?", a: "Yes, Cairo–Luxor, Aswan–Cairo, Luxor–Sharm, etc. are included in multi-city packages." },
    { q: "Which airline do you use for domestic flights?", a: "EgyptAir or Nile Air – both reliable with good safety records." },
    { q: "Do you provide airport meet-and-assist service?", a: "Yes! Our representative meets you before immigration, helps with visa, luggage, and escorts you to the driver." },
    { q: "Is the overnight train from Cairo to Luxor recommended?", a: "Only for the experience. We usually recommend the 1-hour flight instead." },
    { q: "Can we travel by felucca (traditional sailboat)?", a: "Yes! 1-2 hour sunset felucca ride in Cairo or Aswan is included in most tours." },
    { q: "How do we travel between Luxor and Aswan?", a: "By private vehicle (3-4 hours) or Nile cruise (most popular)." },
  ],

  Money_Tips: [
    { q: "How much should I tip the guide and driver?", a: "Standard is $10-15 per person per day for the guide, $5-8 for the driver. More if you’re very happy!" },
    { q: "Do I need Egyptian pounds or can I use USD?", a: "USD/EUR are widely accepted in tourist areas, but small EGP notes are needed for tips and markets." },
    { q: "Are ATMs widely available?", a: "Yes, everywhere in cities and airports. Most accept international cards." },
    { q: "Is haggling expected in markets?", a: "Yes! Start at 40-50% of the quoted price and have fun." },
    { q: "Can I use Revolut/Wise cards in Egypt?", a: "Yes, they work perfectly in ATMs and many shops." },
  ]
};

const ITEMS_PER_LOAD = 6;

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
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const currentData = faqData[activeTab];

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return currentData;
    const term = searchTerm.toLowerCase();
    return currentData.filter(item =>
      item.q.toLowerCase().includes(term) || item.a.toLowerCase().includes(term)
    );
  }, [currentData, searchTerm]);

  const displayedItems = searchTerm.trim()
    ? filteredData
    : filteredData.slice(0, visibleCount);

  const hasMore = !searchTerm.trim() && visibleCount < currentData.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_LOAD);
    setTimeout(() => {
      window.scrollBy({ top: 400, behavior: "smooth" });
    }, 150);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchTerm("");
    setVisibleCount(ITEMS_PER_LOAD);
    setOpenIndex(null);
  };

  return (
    <>
      <Navbar />
      <div className="advanced-faq-page">
        <div className="faq-hero">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know before traveling to Egypt</p>
        </div>

        <div className="faq-tabs">
          {Object.keys(faqData).map(tab => (
            <button
              key={tab}
              className={`faq-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="faq-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={`Search in ${activeTab.toLowerCase()} FAQs...`}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (e.target.value) setVisibleCount(ITEMS_PER_LOAD);
            }}
          />
        </div>

        {searchTerm && (
          <p className="search-results-count">
            Found {filteredData.length} result{filteredData.length !== 1 ? "s" : ""} for "{searchTerm}"
          </p>
        )}

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

        {hasMore && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={handleLoadMore}>
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
