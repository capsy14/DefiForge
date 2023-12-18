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
  const scrolleffectStart = useRef(0);
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
    initial: "visible",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };

  // Trigger animation when the element comes into view
  useEffect(() => {
    if (inView) {
      // controls.start("visible");
      // setDisplayIt(true);
      window.addEventListener("scroll", handleScroll);
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
        ref1.current.style.transform = "translateX(0px)";
        ref2.current.style.opacity = 1;
        ref2.current.style.transform = "translateX(0px)";
        ref3.current.style.opacity = 1;
        ref3.current.style.transform = "translateX(0px)";
        ref4.current.style.opacity = 1;
        ref4.current.style.transform = "translateX(0px)";
        setTimeout(() => {
          setMove(true);
          scrolleffectStart.current = window.scrollY + 50;
        }, 4400);
        // ref5.current.style.opacity = 1;
        // ref5.current.style.transform = "translateX(850px)";
        // ref6.current.style.opacity = 1;
        // ref6.current.style.transform = "translateX(850px)";
      }, 10);
    }
  }, [displayIt]);

  function handleScroll() {
    console.log("scrolled how much", window.scrollY);
    if (window.scrollY > 1580) setDisplayIt(true);
    if (
      displayIt &&
      ref1.current &&
      ref2.current &&
      ref3.current &&
      ref4.current &&
      ref5.current &&
      ref6.current
    ) {
      if (window.scrollY <= 1960) {
        ref5.current.style.opacity = 0;
        ref6.current.style.opacity = 0;
        ref5.current.style.transform = `translateY(${0}px) translateX(${0}px)`;
        ref6.current.style.transform = `translateY(${0}px) translateX(${0}px)`;
      } else if (window.scrollY > 1960 && window.scrollY < 1960 + 800) {
        ref5.current.style.opacity = 1;
        ref6.current.style.opacity = 0;
        ref5.current.style.transitionDelay = "0ms";
        ref5.current.style.transitionDuration = "50ms";
        ref5.current.style.transform = `translateY(${
          1 * (window.scrollY - 1960)
        }px) translateX(${0 - 1.5 * (window.scrollY - 1960)}px)`;
        ref6.current.style.transitionDelay = "0ms";
        ref6.current.style.transitionDuration = "50ms";
        ref6.current.style.transform = `translateY(${
          1.2 * (window.scrollY - 1960)
        }px) translateX(${0 - 1.8 * (window.scrollY - 1960)}px)`;
      } else if (window.scrollY > 1960 + 800 && window.scrollY < 1960 + 805) {
        ref6.current.style.opacity = 0;
      } else if (window.scrollY > 1960 + 805 && window.scrollY < 1960 + 1530) {
        ref6.current.style.opacity = 1;
        ref6.current.style.transitionDelay = "0ms";
        ref6.current.style.transitionDuration = "50ms";
        ref6.current.style.transform = `translateY(${
          0 + 1.1 * (window.scrollY - 1960)
        }px) translateX(${-1370 + 1.2 * (window.scrollY - 1960 - 505)}px)`;
      }
    }
  }

  useEffect(() => {
    if (move) window.addEventListener("scroll", handleScroll);
  }, [move]);

  return (
    <div className="mt-28">
      <motion.div ref={ref} animate={controls} {...animationOptions}>
        {displayIt && (
          <div className="w-screen relative flex justify-center items-center flex-wrap">
            <div
              ref={ref1}
              className=" p-9 bg-transparent h-[350px] w-[350px] opacity-0 transition duration-1000 "
              style={{ transform: "translateX(-50px)" }}
            >
              <img
                src="/images/_extensible.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div
              ref={ref2}
              className=" p-9 bg-transparent h-[350px] w-[350px] opacity-0 transition duration-1000 "
              style={{
                transitionDelay: "1100ms",
                transform: "translateX(-50px)",
                transitionDuration: "1100ms",
              }}
            >
              <img src="/images/gr3.png" alt="" className="w-full h-full" />
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
            <div
              ref={ref4}
              className="relative p-9 bg-transparent h-[350px] w-[350px] opacity-0 z-20"
              style={{
                transitionDelay: "3300ms",
                transform: "translateX(-50px)",
                transitionDuration: "1100ms",
              }}
            >
              <img
                src="/images/banner-img.webp"
                alt=""
                className="w-full h-full"
              />
              <div
                ref={ref5}
                className="absolute bg-transparent h-[450px] w-[600px] opacity-0 z-10 top-0 left-0"
                style={{
                  transitionDelay: "3300ms",
                  // transform: "translateX(850px)",
                  transitionDuration: "1100ms",
                }}
              >
                <img
                  src="/images/sphere.gif"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div
                ref={ref6}
                className="absolute bg-transparent h-full w-full opacity-0 z-0 top-0 left-0"
                style={{
                  transitionDelay: "3300ms",
                  // transform: "translateX(850px)",
                  transitionDuration: "1100ms",
                }}
              >
                <img
                  src="/images/crystal.gif"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </motion.div>
      <div className="w-screen h-screen flex flex-col-reverse items-end translate-y-24">
        <div className=" text-3xl w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          <br />
          aspernatur laboriosam dolor dolorem, aliquid rerum consequatur,
          <br />
          natus laudantium eveniet ex ipsam velit fugiat. Cum alias eum, quod
          <br />
          magni obcaecati cumque!
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col-reverse items-start justify-center mt-96">
        <div className="text-3xl w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          <br />
          aspernatur laboriosam dolor dolorem, aliquid rerum consequatur,
          <br />
          natus laudantium eveniet ex ipsam velit fugiat. Cum alias eum, quod
          <br />
          magni obcaecati cumque!
        </div>
      </div>
    </div>
  );
};

export default ImagesReveal;
