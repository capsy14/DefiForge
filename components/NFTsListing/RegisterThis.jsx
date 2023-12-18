import React, { useState } from 'react';
import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from 'ethers';
import Select from "react-select";

const Register = () => {
    const [_eventName, setEventName] = useState('');
    const [_eventDescription, setEventDescription] = useState('');
    const [_eventCompanyOrganizer, setEventCompanyOrganizer] = useState('');
    const [_eventManager, setEventManager] = useState('');
    const [_eventLocation, setEventLocation] = useState('');
    const [_eventDate, setEventDate] = useState('');

    const [eventDetails, setEventDetails] = useState({

        targetAudience: []

    });


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
    const handleTargetAudienceChange = (selectedOptions) => {
        const selectedValues = selectedOptions.map((option) => option.value);
        handleEventInputChange("targetAudience", selectedValues);
    };
    return (
        <div className='mt-9'>


            <h1 className="text-2xl font-semibold mb-4 text-center">Let the SFS Magic Begin!</h1>
            <div className="max-w-md mx-auto bg-white p-8 border rounded-md shadow-md mb-14">

                <h2 className="text-2xl font-semibold mb-6">Event Registration Form</h2>

                <div className="mb-4">
                    <label htmlFor="eventName" className="block text-gray-600 text-sm font-medium mb-2">Event Name</label>
                    <input
                        type="text"
                        id="eventName"
                        placeholder="Event Name"
                        value={_eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="eventDescription" className="block text-gray-600 text-sm font-medium mb-2">Event Description</label>
                    <input
                        type="text"
                        id="eventDescription"
                        placeholder="Event Description"
                        value={_eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="eventCompanyOrganizer" className="block text-gray-600 text-sm font-medium mb-2">Event Company/Organizer</label>
                    <input
                        type="text"
                        id="eventCompanyOrganizer"
                        placeholder="Event Company/Organizer"
                        value={_eventCompanyOrganizer}
                        onChange={(e) => setEventCompanyOrganizer(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="eventManager" className="block text-gray-600 text-sm font-medium mb-2">Event Manager</label>
                    <input
                        type="text"
                        id="eventManager"
                        placeholder="Event Manager"
                        value={_eventManager}
                        onChange={(e) => setEventManager(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="eventLocation" className="block text-gray-600 text-sm font-medium mb-2">Event Location</label>
                    <input
                        type="text"
                        id="eventLocation"
                        placeholder="Event Location"
                        value={_eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="eventDate" className="block text-gray-600 text-sm font-medium mb-2">Event Date</label>
                    <input
                        type="text"
                        id="eventDate"
                        placeholder="Event Date"
                        value={_eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <label htmlFor="targetAudience">Target Audience</label>
                <Select
                    isMulti
                    options={targetAudienceOptions}
                    value={targetAudienceOptions.filter((option) =>
                        eventDetails.targetAudience.includes(option.value)
                    )}
                    onChange={handleTargetAudienceChange}
                    className="mt-4 mb-6"
                />
                <p className="text-gray-600 mb-6">
                    By registering an event, a smart contract from the contract factory will get deployed. This makes you registered in the SFS contract.
                </p>
                <Web3Button
                    contractAddress="0xDfbe05D092f82c97215f0928A1176A2F71b9F700"
                    action={(contract) => {
                        contract.call("register_event", [_eventName, _eventDescription, _eventCompanyOrganizer, _eventManager, _eventLocation, _eventDate], { value: ethers.utils.parseEther("0.00000001") })
                            .then((result) => {
                                console.log("Event registration success:", result);

                                alert("Great news! You're now part of SFS, unlocking a pathway to extra income through Mode's SFS contract. Congratulations on seizing this opportunity!");
                            })
                            .catch((error) => {
                                console.error("Event registration failure:", error);
                            });
                    }}
                    className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white py-3 px-6 rounded-md transition duration-300 ease-in-out"
                >
                    Register Event
                </Web3Button>


            </div>
        </div>
    );
}

export default Register;