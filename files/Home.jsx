"use client";
import ImagesReveal from "@/components/ImagesReveal";
import WebsiteLoadUp from "@/components/WebsiteLoadUp";
import React, { Suspense, lazy, useEffect, useState } from "react";

import TextSplitEffect from "@/components/TextSplitEffect";
import Team from "@/components/Team";
import TransitionReveal from "@/components/TransitionReveal";
const Home = () => {
  const [val, setVal] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    //   setVal(true);
    // }, 7000);
    const growingCircle = document.querySelector(".growing-circle");
    const loadUp = document.getElementById("loadUp");

    // growingCircle.addEventListener("animationend", (event) => {
    //   console.log("ended");
    //   if (event.animationName === "growCircle") {
    //     loadUp.style.opacity = 0;
    //     setTimeout(() => {
    //       setVal(true);
    //     }, 1010);
    //   }
    // });
    // setTimeout(() => {
    //   loadUp.style.opacity = 0;
    //   setTimeout(() => {
    //     setVal(true);
    //   }, 700);
    // }, 4750);
  }, []);
  const DefiForge = lazy(() => import("@/components/DefiForge"));
  return (
    <>
      {!val && <WebsiteLoadUp />}
      {val && (
        <div>
          <Suspense fallback={<div className="text-white"></div>}>
            <DefiForge />
            <TextSplitEffect />
            <TransitionReveal />
            <ImagesReveal />
            <Team />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Home;
