import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Tourist from './components/Tourist';
import Footer from "./components/Footer";
// import CityPage from './components/CityPage';
import { useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Luxor from './components/Luxor';
import Giza from './components/Giza';
import Home from './components/Home';
import Sharm from './components/Sharm';
import Red from './components/Red-Sea';
import Alexandria from './components/Alexandria';
import Aswan from './components/Aswan';
import Contact from './components/Contact';
import ImagesPage from "./pages/ImagesPage";
import EgyptTimeline from "./pages/EgyptTimeline"; 
import EgyptMessage from "./pages/EgyptMessage"; 
import Events from "./pages/Events";
import Videos from "./pages/Videos";
import History from "./pages/History";
import Intro from './components/Intro';
import Register from './components/Register';
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import RelatedSites from "./pages/RelatedSites";
import FAQ from "./pages/FAQ";
import Sinaa from "./component/Sinaa";
function App() {

  // هنا تعريف الـ state قبل أي استخدام
  const [showIntro, setShowIntro] = useState(true);

  // إذا Intro ظاهر، أرجعها فورًا
  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }


  return (

     
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/luxor" element={<Luxor />} />
        <Route path="/giza" element={<Giza />} />
        <Route path="/aswan" element={<Aswan />} />
          <Route path="/Alexandria" element={<Alexandria />} />
<Route path="/red-sea" element={<Red />} />

                <Route path="/sharm" element={<Sharm />} />
    <Route path="/sina" element={<Sinaa />} />
                  <Route path="/Contact" element={<Contact />} />
  <Route path="/images" element={<ImagesPage />} />
        <Route path="/timeline" element={<EgyptTimeline />} />
        <Route path="/site-message" element={<EgyptMessage />} /> 
<Route path="/Events" element={<Events />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/egypt-history" element={<History />} />
  <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/related-sites" element={<RelatedSites />} />
 <Route path="/faq" element={<FAQ />} />

      </Routes>
        
  
  )
}






export default App
