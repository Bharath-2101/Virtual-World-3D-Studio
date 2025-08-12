import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="absolute top-0 left-0 h-[15%] w-full flex justify-between items-center px-[5dvw]">
      <Logo />
      <div className="flex gap-[14px] font-[Space]">
        <span className="Underline text-[14px] font-black">LAUNCH</span>
        <span className="Underline text-[14px] font-black">CONTACT</span>
      </div>
    </div>
  );
};

export default NavBar;
