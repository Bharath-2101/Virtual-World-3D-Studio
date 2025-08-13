import React, { useEffect, useState } from "react";
import Hero from "./Sections/Hero";
import Desc from "./Sections/Desc";
import Works from "./Sections/Works";
import Working from "./Sections/Working";
import About from "./Sections/About";
import Footer from "./Sections/Footer";
import Loader from "./Sections/Loader";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, ScrambleTextPlugin, ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (loading) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) return;

    const scrollResetTimer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 4000);

    const loadingEndTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(scrollResetTimer);
      clearTimeout(loadingEndTimer);
    };
  }, [loading]);

  return (
    <div className="min-h-[100dvh] w-[100dvw] relative bg-[#c1ff30] text-[#242424]">
      {loading && <Loader />}
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
