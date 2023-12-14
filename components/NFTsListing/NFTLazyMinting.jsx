import React, { useState } from 'react';
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
        <div>
            <h1 class="text-4xl font-bold text-indigo-700">Create a Event</h1>
            <input
        type="text"
        name="name"
        value={metadataInput.name}
        onChange={handleInputChange}
        placeholder="NFT Name"
        className="border rounded-md p-2 mb-4"
      />
      <input
        type="text"
        name="description"
        value={metadataInput.description}
        onChange={handleInputChange}
        placeholder="NFT Description"
        className="border rounded-md p-2 mb-4"
      />
      <input
        type="text"
        name="image"
        value={metadataInput.image}
        onChange={handleInputChange}
        placeholder="Image URL"
        className="border rounded-md p-2 mb-4"
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
    );
}

export default LazyMint;
