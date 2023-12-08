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
    if (document.body.scrollTop > 70) {
      console.log("nav_blur added");
      refNav.current.classList.add("nav_blur");
    } else {
      console.log("nav_blur removed");
      refNav.current.classList.remove("nav_blur");
    }
  };

  return (
    <>
      <nav
        id="nav_bar"
        className="fixed top-0 left-0 w-full px-20 py-8 bg-transparent flex justify-between items-center z-100"
        ref={refNav}
      >
        <div className="text-white text-4xl font-semibold no-underline cursor-default">
          DefiForge
        </div>
        <div className="flex">
          <div
            className="text-white text-xl transition duration-300 hover:text-red-500 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </div>
          <div
            href="#lineContainer"
            className="text-white text-xl ml-9 transition duration-300 hover:text-red-500 cursor-pointer"
            onClick={() => router.push("/about")}
          >
            About
          </div>
        </div>
        <div className="flex">
          <div
            href="#"
            className="text-white text-xl ml-9 transition duration-300 hover:text-red-500 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </div>
          <div
            href="#"
            className="text-white text-xl ml-9 transition duration-300 hover:text-red-500 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Sign up
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
