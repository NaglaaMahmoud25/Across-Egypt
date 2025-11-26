import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./RelatedSites.css";

const relatedSitesData = [
  {
    name: "Egypt Tourism Authority",
    description: "Official tourism site for Egypt, discover the wonders of the country.",
    url: "https://www.egypt.travel/",
  },
  {
    name: "UNESCO World Heritage",
    description: "Explore UNESCO world heritage sites and cultural landmarks in Egypt.",
    url: "https://whc.unesco.org/en/statesparties/eg",
  },
  {
    name: "National Geographic Egypt",
    description: "Photography, travel guides, and stories about Egypt's history and nature.",
    url: "https://www.nationalgeographic.com/travel/destinations/africa/egypt/",
  },
  {
    name: "Lonely Planet Egypt",
    description: "Travel guides, tips, and inspiration for visiting Egypt.",
    url: "https://www.lonelyplanet.com/egypt",
  },
  {
    name: "Travel + Leisure",
    description: "Insights, tips, and articles about Egypt travel and culture.",
    url: "https://www.travelandleisure.com/travel-guide/egypt",
  },
];

function RelatedSiteCard({ name, description, url }) {
  return (
    <div className="related-card">
      <div className="card-icon">
        <FaExternalLinkAlt />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="visit-btn">
        Visit
      </a>
    </div>
  );
}

function RelatedSites() {
  return (
    <>
      <Navbar />
      <div className="related-page">
        {/* Hero Section */}
        <div className="related-hero">
          <h1>Related Sites</h1>
          <p>Explore these websites for more information and resources about Egypt.</p>
        </div>

        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <span>Home</span> &gt; <span>Related Sites</span>
        </nav>

        {/* Grid Cards */}
        <main className="related-content">
          {relatedSitesData.map((site, idx) => (
            <RelatedSiteCard
              key={idx}
              name={site.name}
              description={site.description}
              url={site.url}
            />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default RelatedSites;
