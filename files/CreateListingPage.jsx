"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { ModeTestnet } from "@thirdweb-dev/chains";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import CreateListing from "@/components/MarketPlace/CreateListing";
const CreateListingPage = () => {

  return (
    <>
      <ThirdwebProvider
        activeChain={ModeTestnet}
        clientId="31aaf0696e03ffdca1c886b5b428b9a0"
      >
        <CreateListing />
      </ThirdwebProvider>
    </>
  );
};

export default CreateListingPage;
