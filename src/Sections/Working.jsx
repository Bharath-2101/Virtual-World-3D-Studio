import React, { useRef, useState, useCallback, useMemo } from "react";
import Anchor from "../Components/Anchor";
import useTitle from "../Hooks/UseTitle";

const Working = () => {
  const titleRef = useRef();

  // Memoized data so it’s not recreated on every render
  const builds = useMemo(
    () => [
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
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(null);

  // useCallback prevents unnecessary re-creations
  const toggleAccordion = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  useTitle(titleRef, "[ WHAT WE BUILD ]");

  return (
    <section className="px-[5dvw] mt-[15dvh] flex flex-col gap-[5vh]">
      <h2 ref={titleRef} className="font-black text-[clamp(1rem,6vw,2.25rem)]">
        [ WHAT WE BUILD ]
      </h2>

      <div className="w-full flex flex-col gap-2">
        {builds.map(({ title, desc }, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={title}
              className="w-full bg-[#afd93b] rounded-2xl overflow-hidden py-4"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center pr-[5dvw] py-[2vh] px-[4dvw] font-black text-[clamp(1rem,5vw,2.25rem)] cursor-pointer select-none"
              >
                <span>{title}</span>
                <div
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-225" : ""
                  }`}
                >
                  <Anchor />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out text-[clamp(0.8rem,4.5vw,1.75rem)] px-[4dvw] overflow-hidden ${
                  isOpen ? "max-h-[200px] py-[2vh]" : "max-h-0"
                }`}
              >
                {desc}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Working;
