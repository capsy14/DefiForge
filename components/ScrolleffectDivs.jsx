import React, { useEffect, useRef, useState } from "react";
import TextReveal from "./TextReveal";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrolleffectDivs = () => {
  const scrollDiv = useRef(null);
  const [onlyOnce,setOnlyOnce] = useState(true)

  const controls = useAnimation();
  const [ref, inView] = useInView();

  // You can customize the animation properties
  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const animationOptions = {
    variants: animationVariants,
    initial: "hidden",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };

  // Trigger animation when the element comes into view
  useEffect(() => {
    if (inView) {
      // controls.start("visible");
      if(onlyOnce)scrollDiv.current.scrollTop = 0;
      setOnlyOnce(false);
    }
  }, [controls, inView]);

  // useEffect(() => {
  //   if (scrollDiv.current) {
  //     scrollDiv.current.scrollTop = 0;
  //     console.log("scrollDiv", scrollDiv);
  //   }
  // }, [scrollDiv]);
  return (
    <>
    <motion.div ref={ref} animate={controls} {...animationOptions}>
      <div
        className="w-screen flex flex-col relative overflow-y-hidden"
        style={{ height: "100vh" }}
      >
        <div className="flex justify-center items-center ">
          <TextReveal customText={"Savor The Expirience"} val={false} />
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-snap" ref={scrollDiv}>
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
      </motion.div>
    </>
  );
};

export default ScrolleffectDivs;
