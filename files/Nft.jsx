"use client";
import Compo from "@/components/NFTsListing/Compo";
import React from "react";
import { ModeTestnet } from "@thirdweb-dev/chains";

import { ThirdwebProvider } from "@thirdweb-dev/react";
const Nft = () => {
  return (
    <>
      <ThirdwebProvider
        activeChain={ModeTestnet}
        clientId="31aaf0696e03ffdca1c886b5b428b9a0"
      >
        <Compo />
      </ThirdwebProvider>
    </>
  );
};

export default Nft;
