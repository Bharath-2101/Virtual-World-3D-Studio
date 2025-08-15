import React, { useRef } from "react";
import useTitle from "../Hooks/UseTitle";

const Desc = () => {
  const titleRef = useRef();

  useTitle(titleRef, "[ The Craft of Digital ]");

  return (
    <section className="h-screen w-screen grid grid-rows-[3fr_9fr_1fr] px-[5vw] font-[Space] lg:mt-[20vh] gap-3">
      <div className="flex flex-col gap-1 justify-center">
        <span
          ref={titleRef}
          className="font-black text-[clamp(1rem,5vw,2.25rem)]"
        >
          [ The Craft of Digital ]
        </span>
        <span className="font-light text-[clamp(0.8rem,4vw,1.75rem)] opacity-70">
          We help brands stand out through crafted digital fashion, cinematic
          CGI, and immersive virtual experiences — designed with precision.
        </span>
      </div>

      <div className="flex justify-center items-center overflow-hidden rounded-2xl bg-red-200">
        <div
          className="h-[100%] w-[100%] rounded-md bg-cover bg-center bg-no-repeat hover:scale-110 ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-500 rounded-2xl"
          style={{ backgroundImage: `url("/images/Robot.png")` }}
        />
      </div>

      <div className="flex justify-center font-medium text-[14px]">
        [ ACROSS FASHION, CULTURE & TECH ]
      </div>
    </section>
  );
};

export default Desc;
