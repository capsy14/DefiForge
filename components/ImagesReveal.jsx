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
  const scrolleffectStart = useRef(0)
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
        ref1.current.style.transform = "translateX(50px)";
        ref2.current.style.opacity = 1;
        ref2.current.style.transform = "translateX(350px)";
        ref3.current.style.opacity = 1;
        ref3.current.style.transform = "translateX(700px)";
        ref4.current.style.opacity = 1;
        ref4.current.style.transform = "translateX(1060px)";
        setTimeout(() => {
          setMove(true);
          scrolleffectStart.current = (window.scrollY + 50)
        }, 4400);
        // ref5.current.style.opacity = 1;
        // ref5.current.style.transform = "translateX(850px)";
        // ref6.current.style.opacity = 1;
        // ref6.current.style.transform = "translateX(850px)";
      }, 10);
    }
  }, [displayIt]);

  function handleScroll() {
    console.log("scrolled how much", window.scrollY );
    if (window.scrollY <= 1960) {
      ref5.current.style.opacity = 0;
      ref6.current.style.opacity = 0;
      ref5.current.style.transform = `translateY(${0}px) translateX(${850}px)`;
      ref6.current.style.transform = `translateY(${0}px) translateX(${850}px)`;
    } else if (window.scrollY > 1960 && window.scrollY < 1960 + 430) {
      ref5.current.style.opacity = 1;
      ref6.current.style.opacity = 0;
      ref5.current.style.transitionDelay = "0ms";
      ref5.current.style.transitionDuration = "50ms";
      ref5.current.style.transform = `translateY(${
        1.4 * (window.scrollY - 1960)
      }px) translateX(${850 - 2.1 * (window.scrollY - 1960)}px)`;
      ref6.current.style.transitionDelay = "0ms";
      ref6.current.style.transitionDuration = "50ms";
      ref6.current.style.transform = `translateY(${
        1.4 * (window.scrollY - 1960)
      }px) translateX(${850 - 2.1 * (window.scrollY - 1960)}px)`;
    } else if (window.scrollY > 1960 + 500 && window.scrollY < 1960+505) {
      ref6.current.style.opacity = 0;
    } else if (window.scrollY > 1960 + 505 && window.scrollY < 1960 + 1070) {
      ref6.current.style.opacity = 1;
      ref6.current.style.transitionDelay = "0ms";
      ref6.current.style.transitionDuration = "50ms";
      ref6.current.style.transform = `translateY(${
        1.2 * (window.scrollY - 1960 )
      }px) translateX(${120 + 1.3 * (window.scrollY - 1960 - 505)}px)`;
    }
  }

  useEffect(() => {
    if (move) window.addEventListener("scroll", handleScroll);
  }, [move]);

  return (
    <div className="mt-28">
      <motion.div ref={ref} animate={controls} {...animationOptions}>
        {displayIt && (
          <div className="w-screen relative">
            <div
              ref={ref1}
              className="absolute p-9 bg-transparent h-[350px] w-[350px] opacity-0 transition duration-1000 "
              style={{transform:"translateX(-50px)"}}
            >
              <img
                src="/images/_extensible.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div
              ref={ref2}
              className="absolute p-9 bg-transparent h-[350px] w-[350px] opacity-0 transition translate-x-72 duration-1000 "
              style={{
                transitionDelay: "1100ms",
                transform: "translateX(150px)",
                transitionDuration: "1100ms",
              }}
            >
              <img src="/images/gr3.png" alt="" className="w-full h-full" />
            </div>
            <div
              ref={ref3}
              className="absolute p-9 bg-transparent h-[350px] w-[350px] opacity-0 transition duration-1000 "
              style={{
                transitionDelay: "2200ms",
                transform: "translateX(500px)",
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
              className="absolute p-9 bg-transparent h-[350px] w-[350px] opacity-0 z-20"
              style={{
                transitionDelay: "3300ms",
                transform: "translateX(900px)",
                transitionDuration: "1100ms",
              }}
            >
              <img
                src="/images/banner-img.webp"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div
              ref={ref5}
              className="absolute bg-transparent h-[450px] w-[750px] opacity-0 z-10"
              style={{
                transitionDelay: "3300ms",
                transform: "translateX(850px)",
                transitionDuration: "1100ms",
              }}
            >
              <img src="/images/sphere.gif" alt="" className="w-full h-full" />
            </div>
            <div
              ref={ref6}
              className="absolute p-9 bg-transparent h-[450px] w-[450px] opacity-0 z-0"
              style={{
                transitionDelay: "3300ms",
                transform: "translateX(850px)",
                transitionDuration: "1100ms",
              }}
            >
              <img src="/images/crystal.gif" alt="" className="w-full h-full" />
            </div>
          </div>
        )}
      </motion.div>
      <div className="w-screen h-screen flex flex-col-reverse items-end translate-y-56">
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
