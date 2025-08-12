import React from "react";

const Desc = () => {
  return (
    <div className="h-[100dvh] w-[100dvw] grid grid-rows-[3fr_9fr_1fr] px-[5dvw] font-[Space] lg:mt-[20vh]">
      <div className="flex flex-col gap-1 justify-center">
        <span className="font-black text-[clamp(1rem,5vw,2.25rem)]">
          The Craft of Digital
        </span>
        <span className="font-light text-[clamp(0.8rem,4vw,1.75rem)] opacity-70">
          We help brands stand out through crafted digital fashion, cinematic
          CGI, and immersive virtual experiences - designed with precision.
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div
          style={{
            backgroundImage: `url("/images/Robot.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[90%] w-[90%] rounded-md"
        />
      </div>
      <div className="flex justify-center font-medium text-[14px]">
        [ ACROSS FASHION, CULTURE & TECH ]
      </div>
    </div>
  );
};

export default Desc;
