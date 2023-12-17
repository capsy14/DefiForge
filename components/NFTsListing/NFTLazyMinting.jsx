"use client"
import React, { useState } from "react";
import { useContract, useLazyMint, Web3Button } from "@thirdweb-dev/react";
import Select from "react-select";

const contractAddress = "0xa3aBB24C7CBb22E56AfFef3e4751163B0176dbDf";
const targetAudienceOptions = [
  { value: "web3Developers", label: "Web3 Developers" },
  { value: "blockchainEnthusiasts", label: "Blockchain Enthusiasts" },
  { value: "cryptocurrencyInvestors", label: "Cryptocurrency Investors" },
  { value: "defiEnthusiasts", label: "Decentralized Finance (DeFi) Enthusiasts" },
  { value: "nftCollectors", label: "NFT Collectors" },
  { value: "smartContractDevelopers", label: "Smart Contract Developers" },
  { value: "ethereumCommunity", label: "Ethereum Community" },
  { value: "web3Innovators", label: "Web3 Innovators" },
  { value: "arDevelopers", label: "Augmented Reality (AR) Developers" },
  { value: "vrDevelopers", label: "Virtual Reality (VR) Developers" },
  { value: "aiEnthusiasts", label: "Artificial Intelligence (AI) Enthusiasts" },
  { value: "techEntrepreneurs", label: "Tech Entrepreneurs" },
  { value: "cryptoTraders", label: "Crypto Traders" },
  { value: "cryptoEducators", label: "Crypto Educators" },
  { value: "digitalArtists", label: "Digital Artists" },
];


function LazyMint() {
  const { contract } = useContract(contractAddress);
  const { mutateAsync: lazyMint, isLoading, error } = useLazyMint(contract);

  const [metadataInput, setMetadataInput] = useState({
    name: "",
    description: "",
    image: "",
  });

  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    eventDescription: "",
    eventImage: "",
    eventCoordinator: "",
    eventLocation: "",
    eventDate: "",
    coordinatorImage:"",
    eventTime: "",
    numberOfTickets: 0,
    targetAudience: [], 
    promotionalMaterials: "",
  });

  const handleMetadataInputChange = (e) => {
    const { name, value } = e.target;
    setMetadataInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleEventInputChange = (name, value) => {
    setEventDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleTargetAudienceChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    handleEventInputChange("targetAudience", selectedValues);
  };

  return (
    <div className="p-20 pt-24 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-indigo-700 text-center">
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
          onChange={handleMetadataInputChange}
          placeholder="NFT Name"
          className="border rounded-md p-2 mt-5 mb-4 text-black"
        />
        <label htmlFor="name">NFT Description</label>
        <input
          type="text"
          name="description"
          value={metadataInput.description}
          onChange={handleMetadataInputChange}
          placeholder="NFT Description"
          className="border rounded-md p-2 mt-5 mb-4 text-black"
        />
        <label htmlFor="name">Image Url</label>
        <input
          type="text"
          name="image"
          value={metadataInput.image}
          onChange={handleMetadataInputChange}
          placeholder="Image URL"
          className="border rounded-md p-2 mt-5 mb-8 text-black"
        />

        <label htmlFor="eventName">Coordintor's Name</label>
        <input
          type="text"
          name="eventName"
          value={eventDetails.eventName}
          onChange={(e) => handleEventInputChange("eventName", e.target.value)}
          placeholder="Event Name"
          className="border rounded-md p-2 mt-5 mb-4 text-black"
        />
        <label htmlFor="coordinatorsImage">Coordinators Image Url</label>
        <input
          type="text"
          name="image"
          value={eventDetails.coordinatorImage}
          onChange={(e) => handleEventInputChange("coordinatorsImage", e.target.value)}
          placeholder="Image URL"
          className="border rounded-md p-2 mt-5 mb-8 text-black"
        />
        <label htmlFor="eventDescription">Event Description</label>
        <input
          type="text"
          name="eventDescription"
          value={eventDetails.eventDescription}
          onChange={(e) => handleEventInputChange("eventDescription", e.target.value)}
          placeholder="Event Description"
          className="border rounded-md p-2 mt-5 mb-4 text-black"
        />

        <label htmlFor="eventDate">Event Date</label>
        <input
          type="date"
          name="eventDate"
          value={eventDetails.eventDate}
          onChange={(e) => handleEventInputChange("eventDate", e.target.value)}
          className="border rounded-md p-2 mt-5 mb-4 text-black"
        />

        <label htmlFor="eventTime">Event Time</label>
        <input
          type="time"
          name="eventTime"
          value={eventDetails.eventTime}
          onChange={(e) => handleEventInputChange("eventTime", e.target.value)}
          className="border rounded-md p-2 mt-5 mb-4 text-black"
        />

        <label htmlFor="targetAudience">Target Audience</label>
        <Select
          isMulti
          options={targetAudienceOptions}
          value={targetAudienceOptions.filter((option) =>
            eventDetails.targetAudience.includes(option.value)
          )}
          onChange={handleTargetAudienceChange}
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
              eventDetails,
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
