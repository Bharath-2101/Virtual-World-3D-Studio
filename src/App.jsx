import React from "react";
import Hero from "./Sections/Hero";
import Desc from "./Sections/Desc";
import Works from "./Sections/Works";
import Working from "./Sections/Working";
import About from "./Sections/About";
import Footer from "./Sections/Footer";

const App = () => {
  // bg-[#e6f3fa]
  return (
    <div className="min-h-[100dvh] w-[100dvw] relative  bg-[#c1ff30] text-[#242424]">
      <Hero />
      <Desc />
      <Works />
      <Working />
      <About />
      <Footer />
    </div>
  );
};

export default App;
