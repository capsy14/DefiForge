"use client";
import React, { useEffect, useState } from "react";

const RevealTextAnimation = ({ customText }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(customText);
    setTimeout(() => {
      for (let i = 1; i <= 9; i++) {
        const spanElement = document.getElementById(`span ${i}`);
        if (spanElement) {
          spanElement.style.marginRight = `${10 * i}px`;
        }
      }
      setTimeout(() => {
        for (let i = 1; i <= 9; i++) {
          if (i !== 6) {
            document.getElementById(`span ${i}`).style.opacity = 0;
          }
        }
        setTimeout(() => {
          // document.getElementById("span 6").innerText = "";
          const CircleDiv = document.createElement("div");
          CircleDiv.classList.add("growing-circle");
          document.getElementById("span 6").appendChild(CircleDiv);
          document.getElementById("span 6").classList.add("growing-circle");
        }, 1000);
      }, 1000);
    }, 1100);
  }, []);

  return (
    <div className="reveal-text">
      {text.split("").map((char, index) => (
        <span
          key={index}
          id={"span " + (index + 1)}
          style={{ "--index": index + 1 }}
        >
          {char === " " ? <>&nbsp;</> : char}
        </span>
      ))}
    </div>
  );
};

export default RevealTextAnimation;
