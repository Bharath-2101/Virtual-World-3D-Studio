import React, { useRef } from "react";
import useTitle from "../Hooks/UseTitle";

const About = () => {
  const titleRef = useRef();
  useTitle(titleRef, "[ WHO WE ARE ]");

  return (
    <section className="mt-[15vh] px-[5dvw] flex flex-col gap-[3vh] text-[14px]">
      <h2 ref={titleRef} className="font-black text-[clamp(1rem,6vw,2.25rem)]">
        [ WHO WE ARE ]
      </h2>

      <blockquote className="flex flex-col justify-center items-end gap-[2vh] text-left">
        <p className="text-[clamp(0.7rem,4.5vw,1.75rem)]">
          “VRTL WRLD is our first call for any creative project. They deliver
          world class artwork, on time and on budget with unmatched quality,
          speed, and support. The worldbuilding and community around their work
          is just next-level.”
        </p>
        <footer className="font-bold opacity-90 text-[clamp(0.5rem,3.5vw,0.8rem)]">
          <cite className="not-italic">Mike Gubman</cite> — VP of Partnerships,
          Bitski Inc.
        </footer>
      </blockquote>
    </section>
  );
};

export default About;
