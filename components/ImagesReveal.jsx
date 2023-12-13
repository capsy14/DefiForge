import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImagesReveal = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const [displayIt, setDisplayIt] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // You can customize the animation properties
  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const animationOptions = {
    variants: animationVariants,
    initial: "visible",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };

  // Trigger animation when the element comes into view
  useEffect(() => {
    if (inView) {
      // controls.start("visible");
      setDisplayIt(true);
    }
  }, [controls, inView]);
  useEffect(() => {
    if (ref1.current && ref2.current && ref3.current && ref4.current && ref5.current) {
      setTimeout(() => {
        ref1.current.style.opacity = 1;
        ref1.current.style.transform = "translateX(300px)";
        ref2.current.style.opacity = 1;
        ref2.current.style.transform = "translateX(550px)";
        ref3.current.style.opacity = 1;
        ref3.current.style.transform = "translateX(800px)";
        ref4.current.style.opacity = 1;
        ref4.current.style.transform = "translateX(1050px)";
        ref5.current.style.opacity = 1;
        ref5.current.style.transform = "translateX(1050px)";
      }, 10);
    }
  }, [displayIt]);
  return (
    <>
      <motion.div ref={ref} animate={controls} {...animationOptions}>
        {displayIt && (
          <div className=" mt-20 w-screen h-screen relative">
            <div
              ref={ref1}
              className="absolute bg-white h-[200px] w-[200px] opacity-0 translate-x-40 transition duration-1000 "
            ></div>
            <div
              ref={ref2}
              className="absolute bg-white h-[200px] w-[200px] opacity-0 transition translate-x-72 duration-1000 "
              style={{
                transitionDelay: "1100ms",
                transform: "translateX(400px)",
                transitionDuration: "1100ms",
              }}
            ></div>
            <div
              ref={ref3}
              className="absolute bg-white h-[200px] w-[200px] opacity-0 transition duration-1000 "
              style={{
                transitionDelay: "2200ms",
                transform: "translateX(650px)",
                transitionDuration: "1100ms",
              }}
            ></div>
            <div
              ref={ref4}
              className="absolute bg-white h-[200px] w-[200px] opacity-0 "
              style={{
                transitionDelay: "3300ms",
                transform: "translateX(900px)",
                transitionDuration: "1100ms",
              }}
            ></div>
            <div
              ref={ref5}
              className="absolute bg-white h-[200px] w-[200px] opacity-0 "
              style={{
                transitionDelay: "3300ms",
                transform: "translateX(900px)",
                transitionDuration: "1100ms",
              }}
            ></div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default ImagesReveal;
