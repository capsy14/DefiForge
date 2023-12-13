"use client";
import ImagesReveal from "@/components/ImagesReveal";
import ScrolleffectDivs from "@/components/ScrolleffectDivs";
import TextReveal from "@/components/TextReveal";
import WebsiteLoadUp from "@/components/WebsiteLoadUp";
import React, { Suspense, lazy, useEffect, useState } from "react";

const Home = () => {
  const [val, setVal] = useState(false);
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
    setTimeout(() => {
      loadUp.style.opacity = 0;
      setTimeout(() => {
        setVal(true);
      }, 700);
    }, 4750);
  }, []);
  const DefiForge = lazy(() => import("@/components/DefiForge"));
  return (
    <>
      {!val && <WebsiteLoadUp />}
      {val && (
        <Suspense fallback={<div className="text-white"></div>}>
          <DefiForge />
          {/* <TextReveal customText={"Savor The Expirience"} val={false} /> */}
          <ScrolleffectDivs />
          <ImagesReveal />
          <div className="w-screen h-screen "></div>
          <div className="w-screen h-screen "></div>
        </Suspense>
      )}
    </>
  );
};

export default Home;
