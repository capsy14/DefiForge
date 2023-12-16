import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const TextSplitEffect = () => {
  const [val, setVal] = useState(false);
  const [displayIt, setDisplayIt] = useState(false);
  const scrolleffectStart = useRef(0);
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
    if (
      window.scrollY - 700 < 0.028 * window.innerWidth &&
      window.scrollY - 700 > 0
    ) {
      document.getElementById("hello").style.height = `${
        18 + 1 * (window.scrollY - 700)
      }vw`;
    } else if (window.scrollY - 700 <= 0) {
      document.getElementById("hello").style.height = "18vw";
    }
    // if (window.scrollY - scrolleffectStart.current > 20) setVal(true);
    // else setVal(false);
  }
  return (
    <>
      <motion.div ref={ref} animate={controls} {...animationOptions}>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            position: "relative",
          }}
        >
          {displayIt && (
            <>
              {val && <div style={{ fontSize: "24vw" }}>hi</div>}
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
                >
                  <div style={{ fontSize: "14vw", height: "100%" }}>
                    What'sDefiForge
                  </div>
                </div>
                <div style={{ overflow: "hidden", height: "6vw" }}>
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
        </div>
      </motion.div>
    </>
  );
};

export default TextSplitEffect;
