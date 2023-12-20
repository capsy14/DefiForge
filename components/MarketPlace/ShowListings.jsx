import React from "react";
import { useDirectListings, useContract } from "@thirdweb-dev/react";

// Your smart contract address
const contractAddress = "0x289c0B67098dD5B94D883030e3609F53533Ae404";

function ShowListing() {
  // Fetch the contract using useContract
  const { contract } = useContract(contractAddress, "marketplace-v3");

  // Fetch direct listings using useDirectListings
  const {
    data: directListings,
    isLoading,
    error,
  } = useDirectListings(contract);

  return (
    <div className="mt-12 p-7">
      <h1 className="text-4xl font-bold text-center text-purple-500 glow mt-9 mb-10">
        NFT MarketPlace
      </h1>

      {/* Loading state */}
      {isLoading && <p className="text-white">Loading...</p>}

      {/* Error state */}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      {/* Display listings */}
      {directListings && (
        <div className="flex flex-wrap">
          {directListings.map((listing) => (
            <div
              key={listing.id}
              className="p-4 mr-4 rounded hover:scale-105 transition duration-700 "
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.13)"
              }}
            >
              <p className="text-white font-extrabold text-xl">
                Token ID: {listing.id }
              </p>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {listing.asset.name}
              </h3>
              <img
                src={listing.asset.image}
                alt={listing.asset.name}
                className="inline-block ml-2 my-2 w-[300px] h-[300px]"
              />
              <div className="w-full flex justify-between">
                <div className="text-purple-700 font-semibold">Owner: </div>
                <div className="text-white">{listing.creatorAddress}</div>
              </div>
              <div className="w-full flex">
                <div className="text-green-700 font-bold">Price Per Token:</div>
                <div className="text-white">{listing.pricePerToken}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowListing;
