import React from "react";
import Logo from "../Components/Logo";

const Footer = () => {
  const socialMedia = [
    { title: "INSTAGRAM", link: "" },
    { title: "TWITTER", link: "" },
    { title: "LINKEDIN", link: "" },
  ];
  return (
    <div className="px-[5dvw] mt-[15vh] flex flex-col bg-[#afd93b] py-4">
      <span className="font-black text-[clamp(1rem,6vw,2.25rem)]">
        [ CONTACT ]
      </span>
      <div className="w-full flex flex-row justify-center items-center gap-[5dvw] h-[20vh]">
        {socialMedia.map((media, index) => (
          <a
            href={media.link}
            key={index}
            className="flex items-center justify-center font-[Nippo] font-medium text-[clamp(0.6rem,3.5vw,1.5rem)]"
          >
            <span className="Underline">{media.title}</span>
          </a>
        ))}
      </div>
      <div className="flex items-center flex-col ">
        <div className="w-[40%] sm:w-[35%] md:w-[28%]">
          <Logo />
        </div>
        <span className="text-center mt-[3vh] font-black font-[Nippo] text-[clamp(1rem,4.5vw,2.5rem)]">
          VRTL WRLD Pty Ltd
        </span>
        <span className=" text-center text-[clamp(0.6rem,3.5vw,1.5rem)]">
          The Craft of Digital. Working worldwide
        </span>
      </div>
      <span className="font-black opacity-70 mt-[5vh] text-center text-[clamp(0.6rem,1vw,0.8rem)]">
        Made by VRTL WRLD © 2025 VRTL WRLD
      </span>
    </div>
  );
};

export default Footer;
