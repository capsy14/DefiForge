import React, { useState } from "react";
import {
  useCreateDirectListing,
  useContract,
  Web3Button,
} from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";

const contractAddress = "0x637f08e7Da6D9d6DbDDf348bd45C32004023EacF";

function CreateListing() {
  const { contract } = useContract(contractAddress, "marketplace-v3");
  const [formData, setFormData] = useState({
    assetContractAddress: "",
    tokenId: "",
    pricePerToken: "",
  });

  const {
    mutateAsync: createDirectListing,
    isLoading,
    error,
  } = useCreateDirectListing(contract);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-3xl font-semibold text-center mb-6 text-white py-2 px-4 rounded">
        List Your NFT's for Sale
      </h1>
      <div className="flex justify-center w-screen px-10 items-center">
      <div
        className="relative flex flex-col h-2/3 w-1/2 nav_blur p-12 rounded z-10 mb-10"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.13)", zIndex: 10 }}
      >
        <label className="block mb-2 text-white my-2">Asset Contract Address:</label>
        <input
          type="text"
          name="assetContractAddress"
          value={formData.assetContractAddress}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-2 rounded text-black"
        />

        <label className="block mb-2 text-white my-2">Token ID:</label>
        <input
          type="text"
          name="tokenId"
          value={formData.tokenId}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-2 rounded text-black"
        />

        <label className="block mb-2 text-white my-2">Price Per Token:</label>
        <input
          type="text"
          name="pricePerToken"
          value={formData.pricePerToken}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-2 rounded mb-4 text-black"
        />

        <Web3Button
          contractAddress={contractAddress}
          action={() =>
            createDirectListing({
              ...formData,
              currencyContractAddress: NATIVE_TOKEN_ADDRESS,
              isReservedListing: false,
              quantity: "1",
              startTimestamp: new Date(),
              endTimestamp: new Date(
                new Date().getTime() + 7 * 24 * 60 * 60 * 1000
              ),
            })
          }
          className="bg-blue-500 text-black p-2 rounded cursor-pointer hover:bg-blue-700"
        >
          Create Direct Listing
        </Web3Button>
      </div>
      <img src="/images/createlisting.png" alt="" />
      </div>
    </div>
  );
}

export default CreateListing;
