import { useRef, useState, useCallback } from "react";
import Logo from "./Logo";

const NavBar = () => {
  const [hover, setHover] = useState(false);

  const handleHoverOn = useCallback(() => setHover(true), []);
  const handleHoverOff = useCallback(() => setHover(false), []);

  const topSevenRef = useRef();
  const bottomSevenRef = useRef();
  const circleRef = useRef();

  return (
    <div className="absolute top-0 left-0 h-[15%] w-full flex justify-between items-center px-[5dvw] z-20">
      <div className="h-full flex items-center">
        <Logo
          hover={hover}
          setHover={(state) => setHover(state)}
          refs={{
            topSevenRef,
            bottomSevenRef,
            circleRef,
          }}
          onMouseEnter={handleHoverOn}
          onMouseLeave={handleHoverOff}
        />
      </div>
      <div className="flex gap-[14px] font-[Space]">
        <span className="Underline text-[14px] font-black">LAUNCH</span>
        <span className="Underline text-[14px] font-black">CONTACT</span>
      </div>
    </div>
  );
};

export default NavBar;
