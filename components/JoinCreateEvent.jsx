import { useRouter } from "next/navigation";
import React from "react";
// import TextSplitEffect from "./TextSplitEffect";

const JoinCreateEvent = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-2/3 flex relative justify-around mt-10 flex-col splitCont">
      {/* <TextSplitEffect /> */}
      <div className="flex justify-between contentCont">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center p-4 ml-6">
            <h1 className="text-center lg:text-7xl sm:text-6xl mb-4 headText">DefiForge</h1>
            <div className="lg:text-4xl sm:text-2xl w-[500px] mb-4 p-6 text-center textContainer">
              is a decentralized platform that revolutionizes event creation and
              participation using smart contracts and NFT tickets
            </div>
          </div>
        </div>
        <div className="flex items-center gifCont mr-6">
          <img src="/images/DefiForge_gif.gif" alt="" className="w-full gif" />
        </div>
      </div>
      <div className="flex justify-start items-center containerBtn flex-wrap">
        <button
          className="text-4xl sm:text-2xl btn mr-5 ml-5"
          onClick={() => router.push("/nft")}
          style={{ zIndex: 50 }}
        >
          <a>Join</a>
        </button>
        <button
          className="text-4xl sm:text-2xl btn"
          onClick={() => router.push("/register")}
          style={{ zIndex: 50 }}
        >
          <a>
            Create
            </a>
        </button>
      </div>
    </div>
  );
};

export default JoinCreateEvent;
