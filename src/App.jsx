import React from "react";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <Highlights />
    </main>
  );
};

export default App;
