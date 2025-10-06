import React from "react";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import EpicAdventures from "./components/EpicAdventures";
import "./index.css";
import PerfectStay from "./components/PerfectStay";

function App() {
  return (
    <div>
      
      <Hero />
      <Destinations />
      <EpicAdventures/>
      <PerfectStay/>
       <Testimonials />
      
     
      <Footer />
    </div>
  );
}

export default App;
//  className="max-w-7xl mx-auto"