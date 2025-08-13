import React, { useMemo, useRef, useState } from "react";
import Logo from "../Components/Logo";
import useTitle from "../Hooks/UseTitle";

const Footer = () => {
  const socialMedia = useMemo(
    () => [
      { title: "INSTAGRAM", link: "#" },
      { title: "TWITTER", link: "#" },
      { title: "LINKEDIN", link: "#" },
    ],
    []
  );
  const [hover, setHover] = useState(false);
  const titleRef = useRef();
  useTitle(titleRef, "[ CONTACT ]");

  return (
    <footer className="px-[5dvw] mt-[15vh] flex flex-col bg-[#afd93b] py-4">
      <h2 ref={titleRef} className="font-black text-[clamp(1rem,6vw,2.25rem)]">
        [ CONTACT ]
      </h2>

      <ul className="w-full flex justify-center items-center gap-[5dvw] h-[20vh]">
        {socialMedia.map((media, index) => (
          <li key={index}>
            <a
              href={media.link}
              className="flex items-center justify-center font-[Nippo] font-medium text-[clamp(0.6rem,3.5vw,1.5rem)]"
            >
              <span className="Underline">{media.title}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center text-center">
        <div className="w-[40%] sm:w-[35%] md:w-[28%]">
          <Logo hover={hover} setHover={setHover} />
        </div>
        <p className="mt-[3vh] font-black font-[Nippo] text-[clamp(1rem,4.5vw,2.5rem)]">
          VRTL WRLD Pty Ltd
        </p>
        <p className="text-[clamp(0.6rem,3.5vw,1.5rem)]">
          The Craft of Digital. Working worldwide
        </p>
      </div>

      <p className="font-black opacity-70 mt-[5vh] text-center text-[clamp(0.6rem,1vw,0.8rem)]">
        Made by VRTL WRLD © 2025 VRTL WRLD
      </p>
    </footer>
  );
};

export default Footer;
