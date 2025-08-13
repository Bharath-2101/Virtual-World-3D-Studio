import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function useTitle(titleRef, text) {
  useGSAP(
    () => {
      if (!titleRef.current) return;

      const ctx = gsap.context(() => {
        gsap.from(titleRef.current, {
          scrambleText: {
            text: text,
            chars: "+--+--+",
            rightToLeft: true,
          },
          duration: 0.5,
          ease: "cubic-bezier(0.76, 0, 0.24, 1)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }, titleRef);

      return () => ctx.revert();
    },
    { dependencies: [text] }
  );
}
