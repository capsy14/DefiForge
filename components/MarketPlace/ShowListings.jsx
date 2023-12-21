import React from "react";
import { useDirectListings, useContract } from "@thirdweb-dev/react";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

// Your smart contract address
const contractAddress = "0x637f08e7Da6D9d6DbDDf348bd45C32004023EacF";

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
      <h1 className="text-4xl font-bold text-center text-purple-500 glow mt-9 mb-4">
        NFT MarketPlace
      </h1>

      <div
        className="w-full mb-4 text-center font-bold nav_blur p-4"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.13)", zIndex: 10 }}
      >
        Note : After buying the NFT you can import it from
        "0x637f08e7Da6D9d6DbDDf348bd45C32004023EacF"
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="text-white flex justify-center">
          <div class="loader">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div class="bar4"></div>
            <div class="bar5"></div>
            <div class="bar6"></div>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      {/* Display listings */}
      {directListings && (
        <div className="flex justify-center w-screen">
          <div className="flex flex-wrap">
            {directListings.map((listing) => (
              <Tilt>
                <div
                  key={listing.id}
                  className="p-4 mr-4 mb-4 rounded  transition duration-700 "
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.13)",
                  }}
                >
                  <p className="text-white font-extrabold text-xl text-center">
                    Token ID: {listing.id}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 text-white text-center">
                    {listing.asset.name}
                  </h3>
                  <div className="w-full flex justify-center">
                    <img
                      src={listing.asset.image}
                      alt={listing.asset.name}
                      className="inline-block ml-2 my-2 w-[300px] h-[300px] rounded"
                    />
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="text-purple-700 font-semibold">Owner: </div>
                    <div className="text-white">{listing.creatorAddress}</div>
                  </div>
                  <div className="w-full flex">
                    <div className="text-green-700 font-bold">
                      Price Per Token:
                    </div>
                    <div className="text-white">{listing.pricePerToken}</div>
                  </div>
                  <div className="w-full flex justify-center items-center containerBtn">
                    <button
                      className="text-2xl btn mt-4"
                      style={{ zIndex: 50 }}
                    >
                      <Link
                        href={{
                          pathname: "/buynft",
                          query: {
                            tokenid: listing.id,
                          },
                        }}
                      >
                        <span>BUY NOW</span>
                      </Link>
                    </button>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowListing;
