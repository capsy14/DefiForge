import React from 'react';
import { useDirectListings, useContract } from "@thirdweb-dev/react";

// Your smart contract address
const contractAddress = "0x289c0B67098dD5B94D883030e3609F53533Ae404";

function YourNFTs() {
  // Fetch the contract using useContract
  const { contract } = useContract(contractAddress, "marketplace-v3");

  // Fetch direct listings using useDirectListings
  const {
    data: directListings,
    isLoading,
    error,
  } = useDirectListings(contract);

  return (
    <div className="bg-white p-4 rounded shadow-md">
  <h1 className="text-4xl font-bold text-center text-purple-500 glow mt-9 mb-10">NFT MarketPlace</h1>

  {/* Loading state */}
  {isLoading && <p className="text-gray-600">Loading...</p>}

  {/* Error state */}
  {error && <p className="text-red-500">Error: {error.message}</p>}

  {/* Display listings */}
  {directListings && (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {directListings.map((listing) => (
        <div key={listing.id} className="bg-gray-100 p-4 rounded">
<p className="text-gray-600 font-extrabold text-xl">Token ID: {listing.id}</p>
          <h3 className="text-lg font-semibold mb-2">{listing.asset.name}</h3>
          <img src={listing.asset.image} alt={listing.asset.name} className="inline-block ml-2" />
          <table className="w-full">
        <tbody>
          <tr>
            <td className="text-purple-700 font-semibold">Owner:</td>
            <td className="text-gray-600">{listing.creatorAddress}</td>
          </tr>
          <tr>
            <td className="text-green-700 font-bold">Price Per Token:</td>
            <td className="text-gray-600">{listing.pricePerToken}</td>
          </tr>
        </tbody>
      </table>
        </div>
      ))}
    </div>
  )}
</div>
  
  );
}

export default YourNFTs;
