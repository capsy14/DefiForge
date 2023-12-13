import React from "react";
import TextReveal from "./TextReveal";

const ScrolleffectDivs = () => {
  return (
    <>
      <div
        className="w-screen flex flex-col relative overflow-y-hidden"
        style={{ height: "100vh" }}
      >
        <div className="flex justify-center items-center">
          <TextReveal customText={"Savor The Expirience"} val={false} />
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-snap">
          <div className=" h-full w-screen scroll-snap-align  ml-8">
            <TextReveal customText={"Savor The Expirience"} val={false} />
          </div>
          <div className="h-full w-screen scroll-snap-align ml-8">
            <TextReveal customText={"Savor The Expirience"} val={false} />
          </div>
          <div className="h-full w-screen scroll-snap-align ml-8">
            <TextReveal customText={"Savor The Expirience"} val={false} />
          </div>
        </div>
        <div className=" h-1/3"></div>
        <div className="absolute top-36 right-12 bg-cyan-400 h-[300px] w-[300px]"></div>
      </div>
    </>
  );
};

export default ScrolleffectDivs;
