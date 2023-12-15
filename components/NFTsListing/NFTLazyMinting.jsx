import React, { useState } from "react";
import { useContract, useLazyMint, Web3Button } from "@thirdweb-dev/react";

const contractAddress = "0xa3aBB24C7CBb22E56AfFef3e4751163B0176dbDf";

function LazyMint() {
  const { contract } = useContract(contractAddress);
  const { mutateAsync: lazyMint, isLoading, error } = useLazyMint(contract);

  const [metadataInput, setMetadataInput] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMetadataInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  return (
    <div className="p-20 pt-24 flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold text-indigo-700 text-center">
        Create an Event
      </h1>
      <div
        className="flex flex-col h-2/3 w-2/3 nav_blur p-8 mt-5 rounded"
        style={{ backgroundColor: "rgba(255,255,255,0.13)" }}
      >
        <label htmlFor="name">NFT Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={metadataInput.name}
          onChange={handleInputChange}
          placeholder="NFT Name"
          className="border rounded-md p-2 mt-5 mb-4 text-black"
        />
        <label htmlFor="name">NFT Description</label>
        <input
          type="text"
          name="description"
          value={metadataInput.description}
          onChange={handleInputChange}
          placeholder="NFT Description"
          className="border rounded-md p-2 mt-5 mb-4 text-black"
        />
        <label htmlFor="name">Image Url</label>
        <input
          type="text"
          name="image"
          value={metadataInput.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="border rounded-md p-2 mt-5 mb-8 text-black"
        />

        
          <Web3Button
            contractAddress={contractAddress}
            action={() =>
              lazyMint({
                metadatas: [
                  {
                    name: metadataInput.name,
                    description: metadataInput.description,
                    image: metadataInput.image,
                  },
                ],
              })
            }
          >
            Lazy Mint NFTs
          </Web3Button>
      </div>
    </div>
  );
}

export default LazyMint;
