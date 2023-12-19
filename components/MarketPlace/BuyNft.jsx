import React, { useState } from "react";
import { useBuyDirectListing, useContract, Web3Button } from "@thirdweb-dev/react";
import { ListingType } from "@thirdweb-dev/sdk";

const contractAddress = "0x289c0B67098dD5B94D883030e3609F53533Ae404";

function BuyListing() {
  const { contract } = useContract(contractAddress, "marketplace-v3");
  const {
    mutateAsync: buyDirectListing,
    isLoading,
    error,
  } = useBuyDirectListing(contract);

  const [listingId, setListingId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [buyer, setBuyer] = useState("");

  const handleBuyNow = async () => {
    try {
      const result = await buyDirectListing({
        listingId: parseInt(listingId),
        quantity: parseInt(quantity),
        buyer,
      });

      // Handle successful transaction result
      console.log("Transaction successful", result);
    } catch (error) {
      // Handle transaction error
      console.error("Transaction error", error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-purple-500 glow mt-9">Buy your favorite NFT's</h1>
        
    <div className="p-4 max-w-md mx-auto bg-white rounded-md shadow-md">
  <label className="block mb-2">
    Listing ID:
    <input
      type="number"
      value={listingId}
      onChange={(e) => setListingId(e.target.value)}
      className="border border-gray-300 p-2 w-full rounded-md"
      />
  </label>

  <label className="block mb-2">
    Quantity:
    <input
      type="number"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      className="border border-gray-300 p-2 w-full rounded-md"
      />
  </label>

  <label className="block mb-2">
    Buyer Wallet:
    <input
      type="text"
      value={buyer}
      onChange={(e) => setBuyer(e.target.value)}
      className="border border-gray-300 p-2 w-full rounded-md"
      />
  </label>

  <Web3Button
    contractAddress={contractAddress}
    action={handleBuyNow}
    className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
    >
    Buy Now
  </Web3Button>
      </div>
</div>

  );
}

export default BuyListing;
