import React from "react";
import NavBar from "../Components/NavBar";

const Hero = () => {
  return (
    <div className="relative h-[100dvh] w-[100dvw] ">
      <NavBar />
      <div className="h-[100dvh] flex flex-col justify-center items-center font-[Nippo] font-black gap-3">
        <div className="flex flex-col justify-center items-center">
          <span className="text-[clamp(6.9rem,35vw,15.5rem)] leading-[clamp(3rem,28vw,12rem)]">
            VRTL
          </span>
          <span className="text-[clamp(6.9rem,35vw,15.5rem)] leading-[clamp(3rem,28vw,12rem)]">
            WRLD
          </span>
        </div>
        <div className="flex justify-center font-[Space] text-[clamp(1rem,5dvw,1.875rem)]">
          [ VIRTUAL LAB DESIGN ]
        </div>
      </div>
    </div>
  );
};

export default Hero;
