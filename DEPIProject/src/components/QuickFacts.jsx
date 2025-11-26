import { FaUserFriends, FaMapMarkedAlt, FaIndustry, FaChartArea, FaCalendar } from "react-icons/fa";
import "./QuickFacts.css";

const QuickFacts = ({ facts }) => {
  return (
    <div className="quick-facts-container">
      <h2><span>QUICK </span>
         FACTS</h2>
      
      <div className="fact-item">
        <FaChartArea className="fact-icon" />
        <div>
          <h4>Area</h4>
          <p>{facts.area}</p>
        </div>
      </div>

      <div className="fact-item">
        <FaUserFriends className="fact-icon" />
        <div>
          <h4>Population</h4>
          <p>{facts.population}</p>
        </div>
      </div>

      <div className="fact-item">
        <FaCalendar className="fact-icon" />
        <div>
          <h4>Founded</h4>
          <p>{facts.founded}</p>
        </div>
      </div>

<div className="fact-item">
        <FaMapMarkedAlt className="fact-icon" />
        <div>
          <h4>Location</h4>
          <p>{facts.location}</p>
        </div>
      </div>
      
      <div className="fact-item">
        <FaIndustry className="fact-icon" />
        <div>
          <h4>Main Industries</h4>
          <p>{facts.industries}</p>
        </div>
      </div>

      

    </div>
  );
};

export default QuickFacts;
