import React from "react";
// import TextSplitEffect from "./TextSplitEffect";

const JoinCreateEvent = () => {
  return (
    <div className="w-screen h-2/3 flex relative justify-around">
      {/* <TextSplitEffect /> */}
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center p-4">
          <h1 className="text-center text-7xl mb-4">DefiForge</h1>
          <div className="text-4xl w-[500px] mb-4 p-6 text-center">
            is a decentralized platform that revolutionizes event creation
            and participation using smart contracts and NFT tickets
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-4xl mr-4">Join</button>
          <button className="text-4xl ml-4-4">Create</button>
        </div>
      </div>
      <div>
        <img src="/images/DefiForge_gif.gif" alt="" />
      </div>
    </div>
  );
};

export default JoinCreateEvent;
