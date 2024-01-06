"use client";
import React, { useEffect, useRef, useState } from "react";
import Router, { useRouter } from "next/navigation";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  localWallet,
  trustWallet,
  zerionWallet,
  bloctoWallet,
  frameWallet,
  rainbowWallet,
  phantomWallet,
  darkTheme,
} from "@thirdweb-dev/react";
import { ModeTestnet } from "@thirdweb-dev/chains";

// import { ConnectWallet } from "@thirdweb-dev/react";
import "../styles/navbar.css";
const Navbar = () => {
  const router = useRouter();
  const refNav = useRef(null);
  const topNav = useRef(null);
  const iconRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ctRef = useRef(0);

  useEffect(() => {
    document.body.style.background = `linear-gradient(to right, rgb(5, 5, 30) ${
      30 + 0.1 * window.scrollY
    }%, indigo)`;
    window.addEventListener("scroll", handleScroll);
    console.log(window.innerHeight, "height");
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    document.body.style.background = `linear-gradient(to right, rgb(5, 5, 30) ${
      30 + 0.1 * window.scrollY
    }%, indigo)`;

    if (window.scrollY > 70) {
      refNav.current.classList.add("nav_blur");
    } else {
      refNav.current.classList.remove("nav_blur");
    }
  };

  const scrollToSection = () => {
    const section = document.getElementById("team");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  function navClick() {
    refNav.current.classList.add("nav_blur");
    ctRef.current++;

    if (ctRef.current % 2 !== 0) {
      topNav.current.style.display = "flex";
      ref1.current.style.display = "flex";
      ref2.current.style.display = "flex";
    } else {
      topNav.current.style.display = "none";
      ref1.current.style.display = "none";
      ref2.current.style.display = "none";
    }
  }

  return (
    <>
      <nav
        id="nav_bar"
        className="fixed top-[-40px] pb-4 lg:top-[-60px] lg:py-4 left-0 w-full mt-8 xl:pl-20 bg-transparent flex flex-col lg:flex-row items-start lg:items-center z-100"
        ref={refNav}
      >
        <div className="text-white ml-6 font-semibold no-underline cursor-default mt-[24px] hover:cursor-pointer">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
            <p
              className="glowing-name text-5xl"
              onClick={() => router.push("/")}
            >
              DefiForGe
            </p>
          </span>
        </div>
        <div
          ref={topNav}
          className="flex w-screen lg:flex-1 flex-col lg:flex-row lg:justify-around items-center relative"
        >
          <div
            className="items-center hidden flex-col lg:flex-row lg:flex lg:flex-1 lg:justify-center "
            ref={ref1}
          >
            <div
              className="hover-effect text-white text-xl xl:mr-9 cursor-pointer"
              onClick={() => {
                router.push("/");
                if (window.innerWidth < 1024) {
                  ctRef.current++;
                  topNav.current.style.display = "none";
                  ref1.current.style.display = "none";
                  ref2.current.style.display = "none";
                  refNav.current.classList.remove("nav_blur");
                }
              }}
            >
              <div className="hover-top">HOME</div>
              <div className="hover-bottom">HOME</div>
            </div>
            <div
              className="hover-effect text-white text-xl xl:mr-9 cursor-pointer"
              onClick={() => {
                router.push("/showlisting");
                if (window.innerWidth < 1024) {
                  ctRef.current++;
                  topNav.current.style.display = "none";
                  ref1.current.style.display = "none";
                  ref2.current.style.display = "none";
                  refNav.current.classList.remove("nav_blur");
                }
              }}
            >
              <div className="hover-top">TRADE NFT</div>
              <div className="hover-bottom">TRADE NFT</div>
            </div>
            <div
              className="hover-effect text-white text-xl xl:mr-9 cursor-pointer"
              onClick={() => {
                router.push("/register");
                if (window.innerWidth < 1024) {
                  ctRef.current++;
                  topNav.current.style.display = "none";
                  ref1.current.style.display = "none";
                  ref2.current.style.display = "none";
                  refNav.current.classList.remove("nav_blur");
                }
              }}
            >
              <div className="hover-top">CREATORS POINT</div>
              <div className="hover-bottom">CREATORS POINT</div>
            </div>

            <div
              href="#lineContainer"
              className="hover-effect text-white text-xl cursor-pointer"
              onClick={() => {
                scrollToSection();
                if (window.innerWidth < 1024) {
                  ctRef.current++;
                  topNav.current.style.display = "none";
                  ref1.current.style.display = "none";
                  ref2.current.style.display = "none";
                  refNav.current.classList.remove("nav_blur");
                }
              }}
            >
              <div className="hover-top">TEAM</div>
              <div className="hover-bottom">TEAM</div>
            </div>
          </div>
          <div ref={ref2} className="hidden lg:flex lg:justify-center lg:mr-6">
            <div>
              <div className="connect mt-[40px]">
                <ThirdwebProvider
                  activeChain="mumbai"
                  clientId="YOUR_CLIENT_ID"
                  supportedWallets={[
                    metamaskWallet({ recommended: true }),
                    coinbaseWallet(),
                    walletConnect(),
                    safeWallet({
                      personalWallets: [
                        metamaskWallet({ recommended: true }),
                        coinbaseWallet(),
                        walletConnect(),
                        localWallet(),
                        trustWallet(),
                        zerionWallet(),
                        bloctoWallet(),
                        frameWallet(),
                        rainbowWallet(),
                        phantomWallet(),
                      ],
                    }),
                    localWallet(),
                    trustWallet(),
                    zerionWallet(),
                    bloctoWallet(),
                    frameWallet(),
                    rainbowWallet(),
                    phantomWallet(),
                  ]}
                >
                  <ConnectWallet
                    theme={darkTheme({
                      colors: {
                        accentText: "#bb00ff",
                        accentButtonBg: "#bb00ff",
                        borderColor: "#a800e6",
                        separatorLine: "#f1e4e4",
                      },
                    })}
                    btnTitle={"Connect Web3"}
                    modalTitle={"Connect to Defi-Forge"}
                    modalSize={"wide"}
                    welcomeScreen={{
                      title: "Welcome to DefiForge",
                      subtitle: "",
                      img: {
                        src: "https://hopin-prod-fe-page-builder.imgix.net/events/page_builder/000/288/066/original/4764288e-0018-44ec-afc5-1b4e48d6c235.GIF?ixlib=rb-4.0.0&s=3b978bc503fed36297bf33b1b72e702c",
                        width: 350,
                        height: 250,
                      },
                    }}
                    modalTitleIconUrl={""}
                  />
                </ThirdwebProvider>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center lg:hidden items-center w-[80px] h-[50px] p-2 cursor-pointer absolute top-7 right-0"
          ref={iconRef}
        >
          <img
            src="/nav_icon.png"
            alt=""
            className="w-full h-full"
            onClick={navClick}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
