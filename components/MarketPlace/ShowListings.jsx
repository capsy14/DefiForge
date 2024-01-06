import React from "react";
import { useValidDirectListings, useContract } from "@thirdweb-dev/react";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Your smart contract address
const contractAddress = "0x637f08e7Da6D9d6DbDDf348bd45C32004023EacF";

function ShowListing() {
  // Fetch the contract using useContract
  const { contract } = useContract(contractAddress, "marketplace-v3");
  const router = useRouter();

  // Fetch direct listings using useDirectListings
  const {
    data: directListings,
    isLoading,
    error,
  } = useValidDirectListings(contract);

  return (
    <div className="mt-12 p-7 w-screen min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-500 glow mt-9 mb-4">
        NFT MarketPlace
      </h1>
      <div className="flex justify-center items-center flex-wrap mb-4">
        <div className="scale-75 sm:scale-100">
          <div
            className="sm:font-semibold sm:text-lg text-lg nav_blur sm:mb-4 md:mb-0 sm:flex-1 p-2 sm:p-4 text-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.13)", zIndex: 10 }}
          >
            Note : After buying the NFT you can import it from
            "0x637f08e7Da6D9d6DbDDf348bd45C32004023EacF"
          </div>
        </div>
        <div className=" containerBtn">
          <button
            className="btn mb-4 sm:mb-0 mr-5 ml-5"
            onClick={() => router.push("/createlisting")}
            style={{ zIndex: 50, width: "200px", height: "40px" }}
          >
            <span>List Your NFT</span>
          </button>
        </div>
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
        <div className="flex flex-wrap justify-center mb-10">
          {directListings.map((listing) => (
            <div className="scale-90 sm:scale-100">
              <Tilt>
                <div
                  key={listing.id}
                  className="p-4 sm:mr-4 scale-x-75 sm:scale-100 sm:mb-4 lg:mb-0 rounded  transition duration-700"
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
                      className="inline-block ml-2 my-2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded"
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
                  <div className="w-full flex justify-center items-center">
                    <div className="containerBtn">
                      <button
                        className="text-2xl btn mt-4"
                        style={{ zIndex: 50, width: "200px", height: "40px" }}
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
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowListing;
