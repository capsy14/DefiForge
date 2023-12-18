import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import JoinCreateEvent from "./JoinCreateEvent";
const TextSplitEffect = () => {
  const [val, setVal] = useState(false);
  const [displayIt, setDisplayIt] = useState(true);
  const scrolleffectStart = useRef(0);
  const controls = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
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
      setDisplayIt(true);
      controls.start("visible");
    }
  }, [controls, inView]);
  useEffect(() => {
    if (displayIt) {
      setTimeout(() => {
        window.addEventListener("scroll", handleScroll);
        scrolleffectStart.current = window.scrollY;
        console.log("scrolleffectStart.current", scrolleffectStart.current);
      }, 10);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [displayIt]);
  function handleScroll() {
    if (document.getElementById("hello") && ref1.current && ref2.current) {
      if (
        window.scrollY - 610 - window.innerHeight + 700 <= 80 &&
        window.scrollY - 610 - window.innerHeight + 700 > 0
      ) {
        // document.getElementById("hello").style.height = `${
        //   18 + 0.4 * (window.scrollY - 630)
        // }vw`;
        ref1.current.style.transform = `translateY(${-Math.max(
          0,
          2.2 * (window.scrollY - 610 - window.innerHeight + 700)
        )}px)`;
        ref2.current.style.transform = `translateY(${Math.max(
          0,
          3.55 * (window.scrollY - 610 - window.innerHeight + 700)
        )}px)`;
      } else if (window.scrollY - 610 - window.innerHeight + 700 <= 0) {
        // document.getElementById("hello").style.height = "18vw";
        ref1.current.style.transform = `translateY(${-Math.max(0, 0)}px)`;
        ref2.current.style.transform = `translateY(${Math.max(0, 0)}px)`;
      } else if (window.scrollY - 610 - window.innerHeight + 700 > 80) {
        ref1.current.style.transform = `translateY(${-Math.max(0, 2.2 * 80)}px)`;
        ref2.current.style.transform = `translateY(${Math.max(
          0,
          3.55 * 80
        )}px)`;
      }
      if (
        window.scrollY - 670 - window.innerHeight + 700 > 0 &&
        ref1.current.style.transform !== "transform translateY(0px)"
      )
        setVal(true);
      else setVal(false);
    }
    // console.log(document.getElementById("hello").style.height)
  }
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          position: "relative",
        }}
      >
        <motion.div ref={ref}>
          {displayIt && (
            <>
              {val && (
                <motion.div ref={ref} animate={controls} {...animationOptions}>
                  <JoinCreateEvent />
                </motion.div>
              )}
              <div
                id="hello"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // margin: "100px",
                  justifyContent: "space-between",
                  alignContent: "center",
                  height: "18vw",
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transitionDuration: "0.05s",
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    height: "12vw",
                    marginBottom: "0px",
                  }}
                  ref={ref1}
                >
                  <div style={{ fontSize: "14vw", height: "100%" }}>
                    What'sDefiForge
                  </div>
                </div>
                <div style={{ overflow: "hidden", height: "6vw" }} ref={ref2}>
                  <div
                    style={{
                      fontSize: "14vw",
                      transform: "translateY(-12vw)",
                      height: "100%",
                    }}
                  >
                    What'sDefiForge
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default TextSplitEffect;
