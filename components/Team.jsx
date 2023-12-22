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
    hidden: { opacity: 0, y: 0 },
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
    <div className="mt-96 w-screen h-screen">
      <motion.div ref={ref} animate={controls} {...animationOptions}>
        <div id="team" className="flex justify-center">
          <TextReveal customText={"Meet Our Team"} fontSize={window.innerWidth<500?"40px":"64px"} val={false} />
        </div>
        <h1 className="text-center text-xl">
          Innovation Unleashed: Pioneering Excellence, Crafted by Our Trio of
          Developers.
        </h1>
        {displayIt && (
          <div className="w-screen relative flex justify-center items-center flex-wrap">
            <div
              ref={ref1}
              className=" p-9 bg-transparent h-[450px] w-[450px] opacity-0 transition duration-1000 mb-20"
              style={{ transform: "translateX(-50px)" }}
            >
              <img
                src="/images/asim2.jpg"
                alt=""
                className="w-full h-full rounded-full"
              />
              <h1 className="text-xl mt-5 text-center font-bold">
                Mohammed Asim Ahmed
              </h1>
              <h1 className="text-2xl mt-5 text-center">
                Full Stack Web Developer
              </h1>
              <div className="flex justify-center items-center">
                <a href="https://twitter.com/asimahm74244695" target="blank">
                  <img
                    src="/images/twitter.png"
                    className="w-[50px] h-[50px] mr-3"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-asim-ahmed-773852258/"
                  target="blank"
                >
                  <img
                    src="/images/linkedin.png"
                    className="w-[35px] h-[35px] mr-3"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div
              ref={ref2}
              className=" p-9 bg-transparent h-[450px] w-[450px] opacity-0 transition duration-1000 mb-20 "
              style={{
                transitionDelay: "1100ms",
                transform: "translateX(-50px)",
                transitionDuration: "1100ms",
              }}
            >
              <img
                src="/images/kartik2.jpg"
                alt=""
                className="w-full h-full rounded-full"
              />
              <h1 className="text-xl mt-5 text-center font-bold">
                Kartik Bhatt
              </h1>
              <h1 className="text-2xl mt-5 text-center">
                Blockchain Developer
              </h1>
              <div className="flex justify-center items-center mb-20">
                <a href="https://twitter.com/0xkartik14" target="blank">
                  <img
                    src="/images/twitter.png"
                    className="w-[50px] h-[50px] mr-3"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/kartik-bhatt-2b9b2b256/"
                  target="blank"
                >
                  <img
                    src="/images/linkedin.png"
                    className="w-[35px] h-[35px] mr-3"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div
              ref={ref3}
              className=" p-9 bg-transparent h-[450px] w-[450px] opacity-0 transition duration-1000 mb-20"
              style={{
                transitionDelay: "2200ms",
                transform: "translateX(-50px)",
                transitionDuration: "1100ms",
              }}
            >
              <img
                src="/images/divyansh.jpg"
                alt=""
                className="w-full h-full rounded-full text-center"
              />
              <h1 className="text-xl mt-5 text-center font-bold">
                Divyansh Gupta
              </h1>
              <h1 className="text-2xl mt-5 text-center">
                Blockchain Developer
              </h1>
              <div className="flex justify-center items-center mb-20">
                <a href="https://twitter.com/DivyanshGu15258" target="blank">
                  <img
                    src="/images/twitter.png"
                    className="w-[50px] h-[50px] mr-3"
                    alt=""
                  />
                </a>
                <a href="https://www.linkedin.com/in/divyansh-gupta-147ab2259/" target="blank">
                  <img
                    src="/images/linkedin.png"
                    className="w-[35px] h-[35px] mr-3"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Team;
