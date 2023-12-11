"use client";
import React, { useEffect } from "react";

const MouseTrail = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
      "aqua",
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX + 10;
      coords.y = e.clientY + 14;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return (
    <>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
      <div className="circle fixed top-0 left-0 h-2 w-2 rounded-full bg-black pointer-events-none z-50"></div>
    </>
  );
};

export default MouseTrail;
