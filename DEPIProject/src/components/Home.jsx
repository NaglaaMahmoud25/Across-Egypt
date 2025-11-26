import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Tourist from "../components/Tourist";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Tourist />
      <Footer />

   
    </>
  );
}
