import React, { useState } from "react";
import {
  useNFTs,
  useContract,
  Web3Button,
  useActiveClaimConditionForWallet,
  useAddress,
} from "@thirdweb-dev/react";
import Tilt from "react-parallax-tilt";

function Compo() {
  const [quantity, setQuantity] = useState(1);

  const { contract: editionDrop } = useContract(
    "0xBD9a9bdd900b641F15A0f35CF0F6882a32233AD4"
  );
  //   const [tokenId, setTokenId] = useState(1);
  const address = useAddress();

  // Fetch all NFTs for the contract
  const {
    data: nfts,
    isLoading,
    error,
  } = useNFTs(editionDrop, { start: 0, count: 100 });

  if (isLoading) {
    return (
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
    );
  }
  const maxClaimable = 50;

  if (error) {
    return <div>Error fetching NFTs: {error.message}</div>;
  }

  return (
    <div className="flex items-center justify-center flex-col mt-28 ">
      <h1 className="w-screen sm:text-6xl text-4xl font-bold  text-center">
        All Events
      </h1>
      {nfts.map((nft, index) => (
        <div
          className="mt-5 w-screen p-3 sm:p-16 hover:scale-105 transition duration-1000"
          key={index}
        >
          <div className="flex flex-col md:flex-row justify-between lg:justify-normal ">
            <div className="info-side flex flex-col ">
              <h1 className="collection-title text-center sm:text-left font-bold text-4xl mb-7 mt-7">{`${
                index + 1
              }) ${nft.metadata.name}`}</h1>
              <p className="collection-description mb-7 text-center sm:text-left font-sans text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl md:w-2/3">
                {nft.metadata.description}
              </p>
            </div>
            <div className="image mt-4 md:mt-14 sm:min-w-[400px] xl:min-w-[500px]">
              <img
                className="collection-image mb-4 md:mb-0 h-2/3 w-full lg:h-full lg:w-full"
                src={nft.metadata.image}
                // alt={`${contractMetadata?.name} preview image`}
              />
            </div>
          </div>

          <p className="mb-2 text-left text-lg">
            Total Minted: {nft.supply}/{maxClaimable}
          </p>

          <div className="quantity-container flex items-center">
            <button
              className="quantity-control-button p-2 text-4xl"
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity <= 1}
            >
              -
            </button>

            <span className="text-xl mx-2">{quantity}</span>

            <button
              className="quantity-control-button p-2 text-3xl"
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity >= 6} // Update with your actual max value
            >
              +
            </button>
          </div>

          <Web3Button
            contractAddress={editionDrop?.getAddress() || ""}
            action={(cntr) => {
              cntr.erc1155
                .claim(nft.metadata.id, quantity)
                .then((response) => {
                  // Handle the response if needed
                  console.log("Claim response:", response);
                  alert(
                    `Congratulations! You've successfully claimed your NFTs. To import them into your MetaMask account, click on "Import NFTs" and use the following details: Contract Address: 0xBD9a9bdd900b641F15A0f35CF0F6882a32233AD4, TokenID: ${nft.metadata.id}.`
                  );
                })
                .catch((error) => {
                  // Handle the error
                  console.error("Claim error:", error);
                  alert("Error claiming NFTs");
                });
            }}
            onError={(err) => {
              console.error(err);
              alert("Error claiming NFTs");
            }}
          >
            Mint your Ticket
          </Web3Button>
        </div>
      ))}
    </div>
  );
}

export default Compo;
