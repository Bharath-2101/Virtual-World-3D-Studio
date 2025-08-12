import React, { useState } from "react";
import Anchor from "../Components/Anchor";

const Working = () => {
  const builds = [
    {
      title: "AVATAR GARMENTS",
      desc: "High-fidelity clothing, textures and 3D assets - designed for virtual bodies.",
    },
    {
      title: "CHARACTERS & ACCESSORIES",
      desc: "From hero assets to culturally-aware avatars across all platforms.",
    },
    {
      title: "BRANDED WORLDS",
      desc: "Interactive spaces in Roblox, Fortnite, Zepeto and beyond.",
    },
    {
      title: "CINEMATICS CGI",
      desc: "Crafted 3D scenes and objects for games, OOH and film.",
    },
    {
      title: "ACTIVATION-READY PACKS",
      desc: "Assets built to drop into experiences, stores and socials.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-[5dvw] mt-[15dvh] flex flex-col gap-[5vh]">
      <span className="font-black text-[clamp(1rem,6vw,2.25rem)]">
        [ WHAT WE BUILD ]
      </span>
      <div className="w-full flex flex-col gap-2">
        {builds.map((build, index) => (
          <div
            key={index}
            className="w-full bg-[#afd93b] rounded-2xl overflow-hidden py-4"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="w-full flex flex-row justify-between items-center pr-[5dvw] py-[2vh] px-[4dvw] font-black text-[clamp(1rem,5vw,2.25rem)] cursor-pointer select-none"
            >
              <span>{build.title}</span>
              <div
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-225" : ""
                }`}
              >
                <Anchor />
              </div>
            </div>

            <span className="w-full h-[1px] bg-[#262627]" />

            <div
              className={`transition-all duration-300 text-[clamp(0.8rem,4.5vw,1.75rem)] ease-in-out px-[4dvw] ${
                openIndex === index ? "max-h-[200px] py-[2vh]" : "max-h-0"
              } overflow-hidden`}
            >
              <span>{build.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Working;
