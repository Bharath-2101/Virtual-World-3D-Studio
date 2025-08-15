import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import React, { useRef } from "react";
import Logo from "../Components/Logo";

gsap.registerPlugin(DrawSVGPlugin);

const Loader = () => {
  const topSevenRef = useRef();
  const bottomSevenRef = useRef();
  const circleRef = useRef();
  const loaderRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "cubic-bezier(0.76, 0, 0.24, 1)" },
    });

    tl.from(topSevenRef.current, { drawSVG: "0%", duration: 2 }, 0)
      .from(bottomSevenRef.current, { drawSVG: "0%", duration: 2 }, 0)
      .from(circleRef.current, { drawSVG: "0%", duration: 1 })
      .to(loaderRef.current, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
        duration: 1,
        delay: 1,
      });
  }, []);

  return (
    <div
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      ref={loaderRef}
      className="h-screen w-screen fixed inset-0 z-50 bg-black flex justify-center items-center"
    >
      <svg viewBox="0 0 50 50" className="h-[40%]  aspect-square">
        <circle
          ref={circleRef}
          cx="25"
          cy="25"
          r="23"
          stroke={"#c1ff30"}
          strokeWidth="3"
          fill="none"
        />
        <path
          ref={topSevenRef}
          d="M25 8 L8 29 L27 29"
          stroke={"#c1ff30"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          ref={bottomSevenRef}
          d="M25 42 L42 21 L23 21"
          stroke={"#c1ff30"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Loader;
