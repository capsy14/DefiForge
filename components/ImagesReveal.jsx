import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImagesReveal = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
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
    if (
      ref1.current &&
      ref2.current &&
      ref3.current &&
      ref4.current &&
      ref5.current &&
      ref6.current
    ) {
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
        ref6.current.style.opacity = 1;
        ref6.current.style.transform = "translateX(1050px)";
      }, 10);
    }
  }, [displayIt]);

  function handleScroll() {
    console.log("scrolled how much", window.scrollY - 1300);
    if (window.scrollY > 1300 && window.scrollY < 1745) {
      ref5.current.style.transitionDelay = "0ms";
      ref5.current.style.transitionDuration = "50ms";
      ref5.current.style.transform = `translateY(${
        1.2 * (window.scrollY - 1300)
      }px) translateX(${1050 - 1.8 * (window.scrollY - 1300)}px)`;
      ref6.current.style.transitionDelay = "0ms";
      ref6.current.style.transitionDuration = "50ms";
      ref6.current.style.transform = `translateY(${
        1.2 * (window.scrollY - 1300)
      }px) translateX(${1050 - 1.8 * (window.scrollY - 1300)}px)`;
    } else if (window.scrollY > 1845 && window.scrollY < 2290) {
      ref6.current.style.transitionDelay = "0ms";
      ref6.current.style.transitionDuration = "50ms";
      ref6.current.style.transform = `translateY(${
        1.2 * (window.scrollY - 1845 + 434)
      }px) translateX(${249 + 1.8 * (window.scrollY - 1845)}px)`;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 4400);
  }, []);

  return (
    <>
      <motion.div ref={ref} animate={controls} {...animationOptions}>
        {displayIt && (
          <div className=" mt-20 w-screen relative">
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
              className="absolute bg-white h-[200px] w-[200px] opacity-0 z-10"
              style={{
                transitionDelay: "3300ms",
                transform: "translateX(900px)",
                transitionDuration: "1100ms",
              }}
            ></div>
            <div
              ref={ref6}
              className="absolute bg-white h-[200px] w-[200px] opacity-0 z-0"
              style={{
                transitionDelay: "3300ms",
                transform: "translateX(900px)",
                transitionDuration: "1100ms",
              }}
            ></div>
          </div>
        )}
      </motion.div>
      <div className="w-screen h-screen flex flex-col-reverse items-end">
        <div className="m-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          <br />
          aspernatur laboriosam dolor dolorem, aliquid rerum consequatur,
          <br />
          natus laudantium eveniet ex ipsam velit fugiat. Cum alias eum, quod
          <br />
          magni obcaecati cumque!
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col-reverse items-start justify-center">
        <div className="m-8 mt-16">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          <br />
          aspernatur laboriosam dolor dolorem, aliquid rerum consequatur,
          <br />
          natus laudantium eveniet ex ipsam velit fugiat. Cum alias eum, quod
          <br />
          magni obcaecati cumque!
        </div>
      </div>
    </>
  );
};

export default ImagesReveal;
