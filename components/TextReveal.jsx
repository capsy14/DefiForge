"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TextReveal = ({ customText, val, fontSize }) => {
  const [text, setText] = useState("");
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
    setText(customText);
    if (val) {
      setTimeout(() => {
        for (let i = 1; i <= 9; i++) {
          const spanElement = document.getElementById(`span ${i}`);
          if (spanElement) {
            let letterGap;
            if(window.innerWidth>=725)letterGap=10;
            else if(window.innerWidth>=450&&window.innerWidth<725)letterGap=6.2;
            else if(window.innerWidth>=320&&window.innerWidth<450)letterGap=4
            spanElement.style.marginRight = `${letterGap*i}px`;
          }
        }
        setTimeout(() => {
          for (let i = 1; i <= 9; i++) {
            if (i !== 6) {
              document.getElementById(`span ${i}`).style.opacity = 0;
            }
          }
          setTimeout(() => {
            document.getElementById("span 6").innerText = "";
            document.getElementById("span 6").style.width = "100vw";
            document.getElementById("span 6").style.height = "100vh";
            const CircleDiv = document.createElement("div");
            CircleDiv.id = "circleGrowing";
            CircleDiv.classList.add("opacity_transition");
            //   CircleDiv.classList.add("growing-circle");
            //   CircleDiv.classList.add("opacity_transition");
            document.getElementById("span 6").appendChild(CircleDiv);
            setTimeout(() => {
              CircleDiv.style.opacity = 1;
              setTimeout(() => {
                CircleDiv.classList.add("growing-circle");
              }, 1000);
            }, 300);
            //   document
            //     .querySelector("#circleGrowing")
            //     .classList.add("opacity_transition");
          }, 1000);
        }, 1000);
      }, 1100);
    }
  }, []);

  return (
    <motion.div ref={ref} animate={controls} {...animationOptions}>
      <div className={`reveal-text `} style={{fontSize:fontSize?fontSize:"64px"}}>
        {displayIt && (
          <>
            {text.split("").map((char, index) => (
              <span
                key={index}
                id={"span " + (index + 1)}
                style={{ "--index": index + 1 }}
              >
                {char === " " ? <>&nbsp;</> : char}
              </span>
            ))}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TextReveal;
