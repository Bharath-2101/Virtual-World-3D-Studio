import React from "react";

const About = () => {
  return (
    <div className="mt-[15vh] px-[5dvw] flex flex-col gap-[3vh] text-[14px]">
      <span className="font-black text-[clamp(1rem,6vw,2.25rem)]">
        [ WHO WE ARE ]
      </span>

      <div className="flex flex-col justify-center items-end gap-[2vh]">
        <span className="text-[clamp(0.7rem,4.5vw,1.75rem)]">
          “VRTL WRLD is our first call for any creative project. They deliver
          world class artwork, on time and on budget with unmatched quality,
          speed, and support. The worldbuilding and community around their work
          is just next-level.”
        </span>
        <span className="font-bold opacity-90 text-[clamp(0.5rem,3.5vw,0.8rem)]">
          - Mike Gubman
        </span>
        <span className="font-bold opacity-90 -mt-[2vh] text-[clamp(0.5rem,3.5vw,0.8rem)]">
          VP of Partnerships, Bitski Inc.
        </span>
      </div>
    </div>
  );
};

export default About;
