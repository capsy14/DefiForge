"use client";
import React, { useEffect, useRef, useState } from "react";
import { useContract, useLazyMint, Web3Button } from "@thirdweb-dev/react";
import Select from "react-select";

const contractAddress = "0xBD9a9bdd900b641F15A0f35CF0F6882a32233AD4";
// const targetAudienceOptions = [
//   { value: "web3Developers", label: "Web3 Developers" },
//   { value: "blockchainEnthusiasts", label: "Blockchain Enthusiasts" },
//   { value: "cryptocurrencyInvestors", label: "Cryptocurrency Investors" },
//   {
//     value: "defiEnthusiasts",
//     label: "Decentralized Finance (DeFi) Enthusiasts",
//   },
//   { value: "nftCollectors", label: "NFT Collectors" },
//   { value: "smartContractDevelopers", label: "Smart Contract Developers" },
//   { value: "ethereumCommunity", label: "Ethereum Community" },
//   { value: "web3Innovators", label: "Web3 Innovators" },
//   { value: "arDevelopers", label: "Augmented Reality (AR) Developers" },
//   { value: "vrDevelopers", label: "Virtual Reality (VR) Developers" },
//   { value: "aiEnthusiasts", label: "Artificial Intelligence (AI) Enthusiasts" },
//   { value: "techEntrepreneurs", label: "Tech Entrepreneurs" },
//   { value: "cryptoTraders", label: "Crypto Traders" },
//   { value: "cryptoEducators", label: "Crypto Educators" },
//   { value: "digitalArtists", label: "Digital Artists" },
// ];

function LazyMint() {
  const [updown,setUpdown] = useState(true)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
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
    coordinatorImage: "",
    eventTime: "",
    numberOfTickets: 0,
    targetAudience: [],
    promotionalMaterials: "",
  });

  const handleMetadataInputChange = (e) => {
    const { name, value } = e.target;
    setMetadataInput((prevInput) => ({ ...prevInput, [name]: value }));
  };
  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    setMetadataInput((prevInput) => ({ ...prevInput, image: file }));
  };
  const handleCoordiImageFileChange = (e) => {
    const file = e.target.files[0];
    setMetadataInput((prevInput) => ({ ...prevInput, image: file }));
  };

  const handleEventInputChange = (name, value) => {
    setEventDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleTargetAudienceChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    handleEventInputChange("targetAudience", selectedValues);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setUpdown((prevUpdown) => !prevUpdown);
      if (updown) {
        ref1.current.style.transition = "top 1s";
        ref2.current.style.transition = "bottom 1s";
        ref1.current.style.top = "-70px";
        ref2.current.style.bottom = "-70px";
      } else {
        ref1.current.style.transition = "top 1s";
        ref2.current.style.transition = "bottom 1s";
        ref1.current.style.top = "-80px";
        ref2.current.style.bottom = "-80px";
      }
    }, 1000);
  
    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  
  }, [updown]);
  // Include updown in the dependency array to avoid potential issues
  
  const [text, setText] = useState('');
  const originalText = 'orge individualized NFTs for your dedicated supporterss';
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      // Type characters
      setText(originalText.slice(0, index));

      // Increment index
      index++;

      // Reset if index exceeds the length of the original text
      if (index > originalText.length) {
        index = 0;
        setText('');
      }
    }, 180); // Adjust the speed of typing

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [originalText]);
  return (
    <div className="p-20 pt-24 flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-bold text-white-700 text-center mt-24 mb-9 ">
F{text}|   </h1>
      <div
        className="relative flex flex-col h-2/3 w-2/3 nav_blur p-12  rounded z-10 mb-10"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.13)", zIndex: 10 }}
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
        <label htmlFor="image">Image File</label>
      <input
        type="file"
        name="image"
        onChange={handleImageFileChange}
        className="mt-2 mb-10 text-black "
      />
        {/* <label htmlFor="eventName">Coordintor's Name</label>
        <input
          type="text"
          name="eventName"
          value={eventDetails.eventName}
          onChange={(e) => handleEventInputChange("eventName", e.target.value)}
          placeholder="Event Name"
          className="border rounded-md p-2 mt-5 mb-4 text-black"
        />
        <label htmlFor="coordinatorsImage">Coordinators Image</label>
        <input
        type="file"
        name="image"
        onChange={handleCoordiImageFileChange}
        className="mt-2 text-black"
      />
        <label htmlFor="eventDescription">Event Description</label>
        <input
          type="text"
          name="eventDescription"
          value={eventDetails.eventDescription}
          onChange={(e) =>
            handleEventInputChange("eventDescription", e.target.value)
          }
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
          className="mb-5"
        /> */}

        <Web3Button
                  className="text-4xl sm:text-2xl btn mr-5 ml-5"

          contractAddress={contractAddress}
          action={() =>
            lazyMint({
              metadatas: [
                {
                  name: metadataInput.name,
                  description: metadataInput.description,
                  image: metadataInput.image
                },
              ],
              eventDetails,
            })
          }
        >
          Lazy Mint NFTs
        </Web3Button>
        <img
          ref={ref1}
          src="/images/graphic1.png"
          alt=""
          className="absolute -top-20 -left-40 h-52 w-72 -z-10 transition duration-1000"
        />
        <img
          ref={ref2}
          src="/images/graphic2.png"
          alt=""
          className="absolute -bottom-20 -right-44 h-52 w-72 -z-10 transition duration-1000"
        />
      </div>
    </div>
  );
}

export default LazyMint;
