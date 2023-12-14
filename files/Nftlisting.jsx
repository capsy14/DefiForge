"use client";
import React from "react";
import { ModeTestnet } from "@thirdweb-dev/chains";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import LazyMint from "@/components/NFTsListing/NFTLazyMinting";
const Nftlisting = () => {
  return (
    <>
      <ThirdwebProvider
        activeChain={ModeTestnet}
        clientId="31aaf0696e03ffdca1c886b5b428b9a0"
      >
        <LazyMint />
      </ThirdwebProvider>
    </>
  );
};

export default Nftlisting;
