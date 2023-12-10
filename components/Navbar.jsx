"use client";
import React, { useEffect, useRef } from "react";
import Router, { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const refNav = useRef(null);

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    // if (document.body.scrollTop > 70) {
    //   console.log("nav_blur added");
    //   refNav.current.classList.add("nav_blur");
    // } else {
    //   console.log("nav_blur removed");
    //   refNav.current.classList.remove("nav_blur");
    // }
  };

  return (
    <>
      <nav
        id="nav_bar"
        className=" fixed top-0 left-0 w-full px-20 py-8 bg-transparent flex justify-between items-center z-100"
        ref={refNav}
      >
        <div className="text-white text-7xl font-semibold no-underline cursor-default mt-[24px]">
          DefiForge
        </div>
        <div className="flex">
          <div
            className="hover-effect text-white text-xl transition duration-30 hover:text-red-600 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="hover-top">Home</div>
            <div className="hover-bottom">Home</div>
          </div>
          <div
            href="#lineContainer"
            className="hover-effect text-white text-xl ml-9 transition duration-30 hover:text-red-600 cursor-pointer"
            onClick={() => router.push("/about")}
          >
            <div className="hover-top">About</div>
            <div className="hover-bottom">About</div>
          </div>
        </div>
        <div className="flex">
          <div
            href="#"
            className="hover-effect text-white text-xl ml-9 transition duration-30 hover:text-red-600 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            <div className="hover-top">Login</div>
            <div className="hover-bottom">Login</div>
          </div>
          <div
            href="#"
            className="hover-effect text-white text-xl ml-9 transition duration-30 hover:text-red-600 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            <div className="hover-top">Sign Up</div>
            <div className="hover-bottom">Sign Up</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
