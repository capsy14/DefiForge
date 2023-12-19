import React, { useEffect, useRef, useState } from "react";
import TextReveal from "./TextReveal";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrolleffectDivs = () => {
  const scrollDiv = useRef(null);
  const [onlyOnce, setOnlyOnce] = useState(true);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  // You can customize the animation properties
  const animationVariants = {
    visible: { opacity: 1, x: 50 },
    hidden: { opacity: 0, x: 0 },
  };
  const animationVariants2 = {
    visible: { opacity: 1, x: -50 },
    hidden: { opacity: 0, x: 50 },
  };

  const animationOptions = {
    variants: animationVariants,
    initial: "hidden",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };
  const animationOptions2 = {
    variants: animationVariants2,
    initial: "hidden",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };

  // Trigger animation when the element comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // if(onlyOnce)scrollDiv.current.scrollTop = 0;
      // setOnlyOnce(false);
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
      <div className="w-screen flex justify-between items-center" style={{ height: "50vh" }}>
        <motion.div ref={ref} animate={controls} {...animationOptions}>
          <div className=" text-2xl w-[500px]">
          The platform's innovative edge lies in the utilization of the Sequencer Fee Sharing (SFS) module, fostering a distinctive ecosystem. Here, event organizers seamlessly wear the hat of developers, sculpting events with unprecedented flexibility.

          </div>
        </motion.div>
        <motion.div ref={ref} animate={controls} {...animationOptions2}>
          <div className=" w-72 h-72">
            <img src="/images/Group-1.png" alt="" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ScrolleffectDivs;
