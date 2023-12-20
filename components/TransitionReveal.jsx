import React, { useEffect, useRef, useState } from "react";
import TextReveal from "./TextReveal";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TransitionReveal = () => {
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
    visible: { opacity: 1, x: -150 },
    hidden: { opacity: 0, x: -50 },
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
      <div className="w-screen flex items-center" style={{ height: "50vh" }}>
        <motion.div ref={ref} animate={controls} {...animationOptions}>
          <div className="ml-8 text-4xl w-[500px]">
            The platform's innovative edge lies in the utilization of the
            Sequencer Fee Sharing (SFS) module, fostering a distinctive
            ecosystem. Here, event organizers seamlessly wear the hat of
            developers, sculpting events with unprecedented flexibility.
          </div>
        </motion.div>
        <div className="flex flex-1 justify-end">
          <motion.div ref={ref} animate={controls} {...animationOptions2}>
            <div className="h-full w-full">
              <img src="/images/image.png" className="w-full h-full" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TransitionReveal;
