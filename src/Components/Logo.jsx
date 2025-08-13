import React, { useEffect, useCallback } from "react";
import gsap from "gsap";

const Logo = ({ color = "black", refs = {}, hover, setHover }) => {
  useEffect(() => {
    if (hover === undefined) return;

    gsap.to("#topSeven", {
      drawSVG: hover ? "0%" : "100%",
      ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      duration: 0.5,
    });

    gsap.to("#bottomSeven", {
      drawSVG: hover ? "0%" : "100%",
      ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      duration: 0.5,
    });
  }, [hover]);

  const handleMouseEnter = useCallback(() => setHover(true), [setHover]);
  const handleMouseLeave = useCallback(() => setHover(false), [setHover]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[40%] aspect-square"
      style={{ willChange: "transform" }}
    >
      <svg viewBox="0 0 50 50" className="h-full w-full">
        <circle
          ref={refs.circleRef}
          cx="25"
          cy="25"
          r="23"
          stroke={color}
          strokeWidth="3"
          fill="none"
        />
        <path
          ref={refs.topSevenRef}
          id="topSeven"
          d="M25 8 L8 29 L27 29"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          ref={refs.bottomSevenRef}
          id="bottomSeven"
          d="M25 42 L42 21 L23 21"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Logo;
