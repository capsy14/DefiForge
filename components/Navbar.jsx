"use client";
import React, { useEffect, useRef } from "react";
import Router, { useRouter } from "next/navigation";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import "../styles/navbar.css"
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
        className="fixed top-0 left-0 w-full mt-8 px-20 py-4 bg-transparent flex justify-between items-center z-100"
        ref={refNav}
      >
        <div className="text-white text-6xl font-semibold no-underline cursor-default">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
              <p className="glowing-name">
          DefiForGe
              </p>
            </span>
        </div>
        <div className="flex">
          <div
            className="text-white text-xl transition duration-300 hover:text-purple-500 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </div>
          <div
            href="#lineContainer"
            className="text-white text-xl ml-9 transition duration-300 hover:text-purple-500 cursor-pointer"
            onClick={() => router.push("/about")}
          >
            About
          </div>
        </div>
        <div className="flex">
          <div
>
            <div className="connect mt-0">
              <ThirdwebProvider>
                {/* Your component using useWalletContext */}
                <ConnectWallet
                  dropdownPosition={{
                    side: "bottom",
                    align: "center",
                  }}
                />
              </ThirdwebProvider>
            </div>
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
