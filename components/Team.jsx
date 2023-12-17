import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextReveal from "./TextReveal";

const Team = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const [displayIt, setDisplayIt] = useState(false);
  const [move, setMove] = useState(false);
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
      setDisplayIt(true);
    }
  }, [controls, inView]);
  useEffect(() => {
    if (ref1.current && ref2.current && ref3.current) {
      setTimeout(() => {
        ref1.current.style.opacity = 1;
        ref1.current.style.transform = "translateX(0px)";
        ref2.current.style.opacity = 1;
        ref2.current.style.transform = "translateX(0px)";
        ref3.current.style.opacity = 1;
        ref3.current.style.transform = "translateX(0px)";
      }, 10);
    }
  }, [displayIt]);

  return (
    <div className="mt-28">
      <motion.div ref={ref} animate={controls} {...animationOptions}>
        <div className="flex justify-center">
          <TextReveal customText={"Our Team"} val={false} />
        </div>
        {displayIt && (
          <div className="w-screen relative flex justify-center items-center flex-wrap">
            <div
              ref={ref1}
              className=" p-9 bg-transparent h-[550px] w-[550px] opacity-0 transition duration-1000 "
              style={{ transform: "translateX(-50px)" }}
            >
              <img
                src="/images/asim2.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div
              ref={ref2}
              className=" p-9 bg-transparent h-[550px] w-[550px] opacity-0 transition duration-1000 "
              style={{
                transitionDelay: "1100ms",
                transform: "translateX(-50px)",
                transitionDuration: "1100ms",
              }}
            >
              <img src="/images/kartik1.jpg" alt="" className="w-full h-full" />
            </div>
            <div
              ref={ref3}
              className=" p-9 bg-transparent h-[350px] w-[350px] opacity-0 transition duration-1000 "
              style={{
                transitionDelay: "2200ms",
                transform: "translateX(-50px)",
                transitionDuration: "1100ms",
              }}
            >
              <img
                src="/images/_modular.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Team;
