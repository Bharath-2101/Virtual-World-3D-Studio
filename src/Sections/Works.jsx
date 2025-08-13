import React, { useRef, useMemo } from "react";
import useTitle from "../Hooks/UseTitle";

const Works = () => {
  const titleRef = useRef();

  const works = useMemo(
    () => [
      {
        title: "DKNY",
        desc: "DKNY’s seasonal collections, rebuilt in 3D for Zepeto.",
        image: "/images/DKNY.avif",
      },
      {
        title: "RTFKT",
        desc: "Sci-fi Staple Pigeon, crafted with RTFKT and Jeff Staple.",
        image: "/images/RTFTY.avif",
      },
      {
        title: "Wrangler Jeans",
        desc: "VRTL WRLD brings its iconic denim into the digital world.",
        image: "/images/Wrangler.avif",
      },
    ],
    []
  );

  useTitle(titleRef, "[ CREATED WORKS ]");

  return (
    <section className="w-screen flex flex-col px-[5vw] gap-[6vh] mt-[15vh]">
      <span
        ref={titleRef}
        className="font-black text-[clamp(1rem,6vw,2.25rem)]"
      >
        [ CREATED WORKS ]
      </span>

      <div className="flex flex-col gap-[5vh] lg:grid lg:grid-cols-3 lg:gap-2">
        {works.map(({ title, desc, image }, index) => (
          <article key={title} className="flex flex-col gap-2">
            <img
              src={image}
              alt={`${title} showcase`}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[17/9] lg:aspect-square object-center object-cover"
            />
            <div>
              <h3 className="font-bold text-[clamp(1.2rem,5vw,2.25rem)] lg:text-[1.5rem]">
                {title}
              </h3>
              <p className="text-[clamp(0.8rem,4vw,1.75rem)] lg:text-[1rem]">
                {desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Works;
