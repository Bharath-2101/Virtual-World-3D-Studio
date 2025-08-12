import React from "react";

const Works = () => {
  const works = [
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
  ];
  return (
    <div className="w-[100dvw] flex flex-col px-[5dvw] gap-[6vh] mt-[15vh]">
      <span className="font-black text-[clamp(1rem,6vw,2.25rem)]">
        [ CREATED WORKS ]
      </span>
      <div className="w-[100%] flex flex-col gap-[5vh] lg:grid lg:grid-cols-3 lg:gap-2">
        {works.map((work, index) => (
          <div key={index} className="w-[100%] flex flex-col gap-2">
            <img
              src={work.image}
              alt={`${work.title} image`}
              className="w-[100%]  aspect-[17/9] lg:aspect-square object-center object-cover"
            />
            <div className="w-[100%] flex flex-col">
              <span className="font-bold text-[clamp(1.2rem,5vw,2.25rem)] lg:text-[1.5rem]">
                {work.title}
              </span>
              <span className="text-[clamp(0.8rem,4vw,1.75rem)] lg:text-[1rem]">
                {work.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
