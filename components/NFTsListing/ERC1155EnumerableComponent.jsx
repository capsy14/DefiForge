import React from 'react';
import {
    useContract,
    useNFTs,
    useTotalCirculatingSupply,
    useTotalCount,
    useActiveClaimCondition,
} from '@thirdweb-dev/react'; // Replace with the actual library you're using
import "./ERC.css";
import { BigNumber } from 'ethers';

const ERC1155EnumerableComponent = () => {
    // Replace the contract address with the actual address you're using
    const { contract } = useContract("0xa3aBB24C7CBb22E56AfFef3e4751163B0176dbDf");

    // Get all NFTs
    const { data: nfts, isLoading: isNFTsLoading, error: nftsError } = useNFTs(contract, { start: 0, count: 100 });

    // Get total minted supply count
    const { data: totalCirculatingSupply, isLoading: isCirculatingSupplyLoading, error: circulatingSupplyError } = useTotalCirculatingSupply(contract);

    // Get total supply count
    const { data: totalCount, isLoading: isTotalCountLoading, error: totalCountError } = useTotalCount(contract);

    // Get active claim condition
    const { data: activeClaimCondition, isLoading: isActiveClaimConditionLoading, error: activeClaimConditionError } = useActiveClaimCondition(contract);

    return (
        <div>
            {/* Get all NFTs */}
            {nftsError && <div className="error-message">Failed to fetch NFTs: {nftsError.message}</div>}

            {isNFTsLoading ? (
                <div className="loading-message">Loading NFTs...</div>
            ) : (
                <div>
                    <h2>All NFTs</h2>
                    {nfts.map((nft) => (
                        <div key={nft.tokenId} className="nft-item">
                            <p className="token-id">Token ID: {nft.metadata.id}</p>
                            <p className="name">Name: {nft.metadata.name}</p>
                            <p className="image">
                                <img src={nft.metadata.image} alt="NFT Image" />
                            </p>
                            <p className="description">Description: {nft.metadata.description}</p>
                            <button
                                onClick={async () => {
                                    try {
                                        await contract?.buyoutListing(BigNumber.from(nft.metadata.id), 1)
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}
                            >Buy Now</button>

                        </div>
                    ))}
                </div>
            )}

            {/* Get total minted supply count */}
            {circulatingSupplyError && <div className="error-message">Failed to fetch total circulating supply: {circulatingSupplyError.message}</div>}

            {isCirculatingSupplyLoading ? (
                <div className="loading-message">Loading total circulating supply...</div>
            ) : (
                <div>
                    <h2>Total Circulating Supply</h2>
                    <p className="circulating-supply">{totalCirculatingSupply}</p>
                </div>
            )}

            {/* Get total supply count */}
            {totalCountError && <div className="error-message">Failed to fetch total supply count: {totalCountError.message}</div>}

            {isTotalCountLoading ? (
                <div className="loading-message">Loading total supply count...</div>
            ) : (
                <div className="total-count-section">
                    {/* <h2>Total Supply Count</h2> */}
                </div>
            )}

            {/* Get active claim condition */}
            {activeClaimConditionError && <div className="error-message">Failed to fetch active claim condition: {activeClaimConditionError.message}</div>}

            {isActiveClaimConditionLoading ? (
                <div className="loading-message">Loading active claim condition...</div>
            ) : (
                <div>
                    <h2>Active Claim Condition</h2>
                    {/* Render active claim condition data */}
                    {/* Example: <p>Condition: {activeClaimCondition?.condition}</p> */}
                </div>
            )}
        </div>
    );
};

export default ERC1155EnumerableComponent;
