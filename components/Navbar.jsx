"use client";
import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    document.body.style.background = `linear-gradient(to right, rgb(5, 5, 30) ${
      30 + 0.1 * window.scrollY
    }%, indigo)`;
    window.addEventListener("scroll", handleScroll);
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
            className="hover-effect text-white text-xl cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="hover-top">Home</div>
            <div className="hover-bottom">Home</div>
          </div>
          <div
            href="#lineContainer"
            className="hover-effect text-white text-xl ml-9 cursor-pointer"
            onClick={() => router.push("/about")}
          >
            <div className="hover-top">About</div>
            <div className="hover-bottom">About</div>
          </div>
        </div>
        <div className="flex">
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
          <div
            href="#"
            className=" hover-effect text-white text-xl ml-9 transition duration-300 hover:text-purple-500 cursor-pointer"
            onClick={() => router.push("/signup")}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
