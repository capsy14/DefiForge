"use client";
import React, { useEffect, useRef } from "react";
import Router, { useRouter } from "next/navigation";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import "../styles/navbar.css";
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
        className="fixed top-[-40px] left-0 w-full mt-8 px-20 py-2 bg-transparent flex justify-between items-center z-100"
        ref={refNav}
      >
        <div className="text-white text-5xl font-semibold no-underline cursor-default mt-[24px]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
            <p className="glowing-name text-5xl">DefiForGe</p>
          </span>
        </div>
        <div className="flex">
          <div
            className="hover-effect text-white text-xl transition duration-30 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="hover-top">Home</div>
            <div className="hover-bottom">Home</div>
          </div>
          <div
            href="#lineContainer"
            className="hover-effect text-white text-xl ml-9 transition duration-300 hover:text-purple-500 cursor-pointer"
            onClick={() => router.push("/about")}
          >
            <div className="hover-top">About</div>
            <div className="hover-bottom">About</div>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="connect mt-[40px]">
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
            className=" hover-effect text-white text-xl ml-9 transition duration-300 hover:text-purple-500 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
