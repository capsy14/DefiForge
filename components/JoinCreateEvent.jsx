import React from "react";
// import TextSplitEffect from "./TextSplitEffect";

const JoinCreateEvent = () => {
  return (
    <div className="w-screen h-2/3 flex relative">
      {/* <TextSplitEffect /> */}
      <div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-center text-4xl">DefiForge</h1>
          <div className="text-2xl w-[300px]">
            It is a decentralized platform that revolutionizes event creation
            and participation using smart contracts and NFT tickets
          </div>
        </div>
        <div>
          <button>Join</button>
          <button>Create</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default JoinCreateEvent;
