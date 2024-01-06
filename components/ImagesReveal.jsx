import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImagesReveal = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const [displayIt, setDisplayIt] = useState(false);
  const scrolleffectStart = useRef(1900);
  const howmuchScroll = useRef(600);
  const howmuchScroll2 = useRef(450);
  const leftDist = useRef(0);
  const rightDist = useRef(0);
  const translateDist = useRef(0);

  const [move, setMove] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // You can customize the animation properties
  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 0 },
  };

  const animationOptions = {
    variants: animationVariants,
    initial: "visible",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };

  useEffect(() => {
    leftDist.current = ref5.current.getBoundingClientRect().left - 55;

    if (window.innerWidth >= 1400) {
      scrolleffectStart.current = 1900;
      howmuchScroll.current = 600;
    } else if (window.innerWidth < 1400 && window.innerWidth >= 1024) {
      scrolleffectStart.current = 2250;
      howmuchScroll.current = 600;
    } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      scrolleffectStart.current = 2250;
      howmuchScroll.current = 500;
      leftDist.current = ref5.current.getBoundingClientRect().left + 120;
    } else if (window.innerWidth < 768 && window.innerWidth >= 500) {
      scrolleffectStart.current = 2150;
      howmuchScroll.current = 750;
      leftDist.current =
        ref5.current.getBoundingClientRect().left - window.innerWidth / 4;
    } else if (window.innerWidth < 500 && window.innerWidth >= 0) {
      scrolleffectStart.current = 2550;
      howmuchScroll.current = 800;
      leftDist.current = 0;
    }
  }, []);

  useEffect(() => {
    if (inView) {
      // controls.start("visible");
      // setDisplayIt(true);
      window.addEventListener("scroll", handleScroll);
    }
  }, [controls, inView]);
  useEffect(() => {
    if (
      ref1.current &&
      ref2.current &&
      ref3.current &&
      ref4.current &&
      ref5.current &&
      ref6.current &&
      displayIt
    ) {
      setTimeout(() => {
        ref1.current.style.opacity = 1;
        ref1.current.style.transform = "translateX(0px)";
        ref2.current.style.opacity = 1;
        ref2.current.style.transform = "translateX(0px)";
        ref3.current.style.opacity = 1;
        ref3.current.style.transform = "translateX(0px)";
        ref4.current.style.opacity = 1;
        ref4.current.style.transform = "translateX(0px)";
        setTimeout(() => {
          setMove(true);
          // scrolleffectStart.current = window.scrollY;
        }, 4400);
        // ref5.current.style.opacity = 1;
        // ref5.current.style.transform = "translateX(850px)";
        // ref6.current.style.opacity = 1;
        // ref6.current.style.transform = "translateX(850px)";
      }, 10);
    }
  }, [displayIt]);

  function handleScroll() {
    console.log("scrolled how much", window.scrollY);
    if (window.scrollY > 1580) setDisplayIt(true);
    if (
      displayIt &&
      ref1.current &&
      ref2.current &&
      ref3.current &&
      ref4.current &&
      ref5.current &&
      ref6.current
    ) {
      if (
        window.scrollY - 2.5 * (window.innerHeight - 720) <=
        scrolleffectStart.current
      ) {
        ref5.current.style.opacity = 0;
        ref6.current.style.opacity = 0;
        ref5.current.style.transform = `translateY(${0}px) translateX(${0}px)`;
        ref6.current.style.transform = `translateY(${0}px) translateX(${0}px)`;
      } else if (
        window.scrollY - 2.5 * (window.innerHeight - 720) >
          scrolleffectStart.current &&
        window.scrollY - 2.5 * (window.innerHeight - 720) <
          scrolleffectStart.current + howmuchScroll.current
      ) {
        ref5.current.style.opacity = 1;
        ref6.current.style.opacity = 0;
        // console.log("offset", ref5.current.getBoundingClientRect().left);
        ref5.current.style.transitionDelay = "0ms";
        ref5.current.style.transitionDuration = "50ms";
        ref5.current.style.transform = `translateY(${
          1.1 *
          (window.scrollY -
            2.5 * (window.innerHeight - 720) -
            scrolleffectStart.current)
        }px) translateX(${
          0 -
          (leftDist.current / 600) *
            1.1 *
            (window.scrollY -
              2.5 * (window.innerHeight - 720) -
              scrolleffectStart.current)
        }px)`;
        ref6.current.style.transitionDelay = "0ms";
        ref6.current.style.transitionDuration = "50ms";
        ref6.current.style.transform = `translateY(${
          1.1 *
          (window.scrollY -
            2.5 * (window.innerHeight - 720) -
            scrolleffectStart.current)
        }px) translateX(${
          0 -
          (leftDist.current / 600) *
            1.1 *
            (window.scrollY -
              scrolleffectStart.current -
              2.5 * (window.innerHeight - 720))
        }px)`;
        translateDist.current =
          (leftDist.current / 600) *
          1.1 *
          (window.scrollY -
            scrolleffectStart.current -
            2.5 * (window.innerHeight - 720));

        rightDist.current = ref6.current.getBoundingClientRect().right;

        if (window.innerWidth <= 1400 && window.innerWidth >= 1300) {
          rightDist.current = ref6.current.getBoundingClientRect().right - 150;
        } else if (window.innerWidth < 1300 && window.innerWidth >= 1024) {
          rightDist.current = ref6.current.getBoundingClientRect().right - 400;
        } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
          rightDist.current = ref6.current.getBoundingClientRect().right + 250;
          howmuchScroll2.current = 450;
        } else if (window.innerWidth < 768 && window.innerWidth >= 500) {
          rightDist.current = 0;
          howmuchScroll2.current = 450;
          translateDist.current -= 35;
        } else if (window.innerWidth < 500 && window.innerWidth >= 400) {
          rightDist.current = 0;
          howmuchScroll2.current = 450;
          translateDist.current -= 20;
        } else if (window.innerWidth < 400 && window.innerWidth >= 320) {
          rightDist.current = 0;
          howmuchScroll2.current = 600;
          translateDist.current -= 20;
        }
        // else{
        //   rightDist.current = 0
        // }
        // else if (window.innerWidth < 768 && window.innerWidth >= 500) {
        //   rightDist.current =0
        //   translateDist.current+=30;
        // }
        // else if (window.innerWidth < 500 && window.innerWidth >= 0) {
        //   scrolleffectStart.current = 2550;
        //   howmuchScroll.current = 800;
        //   leftDist.current = 0;
        // }
      } else if (
        window.scrollY - 2.5 * (window.innerHeight - 720) >
          scrolleffectStart.current + howmuchScroll.current &&
        window.scrollY - 2.5 * (window.innerHeight - 720) <
          scrolleffectStart.current + howmuchScroll.current + 5
      ) {
        ref6.current.style.opacity = 0;

        ref6.current.style.transform = `translateY(${
          -80 +
          1.2 *
            (window.scrollY -
              2.5 * (window.innerHeight - 720) -
              scrolleffectStart.current)
        }px) translateX(${
          -translateDist.current +
          (rightDist.current / 520) *
            1.2 *
            (window.scrollY -
              2.5 * (window.innerHeight - 720) -
              scrolleffectStart.current -
              howmuchScroll.current)
        }px)`;
      } else if (
        window.scrollY - 2.5 * (window.innerHeight - 720) >
          scrolleffectStart.current + howmuchScroll.current + 5 &&
        window.scrollY - 2.5 * (window.innerHeight - 720) <
          scrolleffectStart.current +
            howmuchScroll.current +
            howmuchScroll2.current
      ) {
        ref6.current.style.opacity = 1;
        ref6.current.style.transitionDelay = "0ms";
        ref6.current.style.transitionDuration = "50ms";
        ref6.current.style.transform = `translateY(${
          -80 +
          1.2 *
            (window.scrollY -
              2.5 * (window.innerHeight - 720) -
              scrolleffectStart.current)
        }px) translateX(${
          -translateDist.current +
          (rightDist.current / 520) *
            1.2 *
            (window.scrollY -
              2.5 * (window.innerHeight - 720) -
              scrolleffectStart.current -
              howmuchScroll.current)
        }px)`;
      }
    }
  }

  useEffect(() => {
    if (move) window.addEventListener("scroll", handleScroll);
  }, [move]);

  return (
    <div className="mt-28 w-screen min-h-screen ">
      <motion.div ref={ref} animate={controls} {...animationOptions}>
        {true && (
          <div className="w-screen relative flex justify-center items-center flex-wrap">
            <div
              ref={ref1}
              className=" p-9 bg-transparent lg:h-[350px] lg:w-[350px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] opacity-0 transition duration-1000 "
              style={{ transform: "translateX(-50px)" }}
            >
              <img
                src="/images/_extensible.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div
              ref={ref2}
              className=" p-9 bg-transparent lg:h-[350px] lg:w-[350px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] opacity-0 transition duration-1000 "
              style={{
                transitionDelay: "1100ms",
                transform: "translateX(-50px)",
                transitionDuration: "1100ms",
              }}
            >
              <img
                src="/images/3d-nft-network-illustration-free-png.webp"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div
              ref={ref3}
              className=" p-9 bg-transparent lg:h-[350px] lg:w-[350px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] opacity-0 transition duration-1000 "
              style={{
                transitionDelay: "2200ms",
                transform: "translateX(-50px)",
                transitionDuration: "1100ms",
              }}
            >
              <img
                src="/images/_modular.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div
              ref={ref4}
              className="relative p-9 bg-transparent lg:h-[350px] lg:w-[350px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] opacity-0 z-20"
              style={{
                transitionDelay: "3300ms",
                transform: "translateX(-50px)",
                transitionDuration: "1100ms",
                zIndex: 20,
              }}
            >
              <img
                src="/images/magic-ticket-nft.gif"
                alt=""
                className="w-full h-full"
              />
              <div
                ref={ref5}
                className="absolute bg-transparent lg:h-[300px] lg:w-[500px] md:w-[300px] md:h-[400px] opacity-0 z-0 top-0 left-0"
                style={{
                  // transitionDelay: "3300ms",
                  // transform: "translateX(850px)",
                  transitionDuration: "50ms",
                  zIndex: 0,
                }}
              >
                <img
                  src="/images/V4_LOW_ALPHA.gif"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div
                ref={ref6}
                className="absolute bg-transparent lg:h-[400px] lg:w-[700px] md:w-[300px] md:h-[500px] w-[300px] h-[400px] opacity-0 z-0 top-0 -left-8"
                style={{
                  // transitionDelay: "3300ms",
                  // transform: "translateX(850px)",
                  transitionDuration: "50ms",
                }}
              >
                <img
                  src="/images/crystal.gif"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </motion.div>
      <div
        className="w-screen flex justify-center md:justify-end items-start"
        style={{ marginTop: "290px" }}
      >
        <div className="text-2xl md:text-2xl lg:text-3xl text-center sm:text-left w-[500px] md:mr-8 translate-y-16">
          DefiForge's marketplace allows users to effortlessly trade NFTs,
          unlocking earning opportunities and enriching the overall user
          experience. This seamless feature encourages participants to engage
          beyond the event.{" "}
        </div>
      </div>
      <div
        className="w-screen flex justify-center md:justify-start items-start"
        style={{ marginTop: "365px" }}
      >
        <div className="text-2xl md:text-2xl lg:text-3xl text-center sm:text-left lg:w-[600px] w-[500px] md:ml-8">
          At DefiForge, users enjoy exclusive event access via NFT ownership,
          symbolizing participation and exclusivity. Our vibrant marketplace
          creates a dynamic secondary market, allowing strategic NFT trading.
          This not only adds depth to the user experience but also opens doors
          for asset leverage, providing potential for increased value and
          diverse financial opportunities.
        </div>
      </div>
    </div>
  );
};

export default ImagesReveal;
