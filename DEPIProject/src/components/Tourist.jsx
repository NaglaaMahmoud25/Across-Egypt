import React, { useState } from "react";
import { cities } from "./Tourism";
import "./Tourist.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "./Tourist.css";
import QuickFacts from "./QuickFacts";
import { Link } from "react-router-dom";



export default function Tourist() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <div className="tourism-container" id="places-section">

      {/* Quick Facts */}

      <div className="quick-facts">
       
        
        <div className="quick-facts-section">
        <QuickFacts facts={selectedCity.facts} />
      </div>

      </div>

      {/* Slider */}
      <div className="attractions">
        <h2>TOURIST <span>ATTRACTIONS</span></h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
    0: {
      slidesPerView: 1, // Mobile 👈 كارت واحد
    },
    770: {
      slidesPerView: 2, // Tablet
    },
    1024: {
      slidesPerView: 3, // Desktop
    },
  }}
        >
          {cities.map((city, index) => (
            <SwiperSlide key={index}>
              <div 
                className="city-card"
                 onMouseEnter={() => setSelectedCity(city)}
              >
                <Link to={city.link}>
  <img src={city.image} alt={city.name} />
</Link>
                
                <h2>{city.name}</h2>
            <p>{city.description}</p>

               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}
