import React from 'react';
import { useContract, useContractMetadata, useContractMetadataUpdate } from '@thirdweb-dev/react'; // Replace with the actual library you're using

const ContractComponent = () => {
  // Replace the contract address with the actual address you're using
  const { contract } = useContract("0xa3aBB24C7CBb22E56AfFef3e4751163B0176dbDf");
  const {
    data: contractMetadata,
    isLoading: isMetadataLoading,
    error: metadataError,
  } = useContractMetadata(contract);

  const {
    mutate: updateContractMetadata,
    isLoading: isUpdateLoading,
    error: updateError,
  } = useContractMetadataUpdate(contract);

  const handleUpdateMetadata = () => {
    const newMetadata = {
      name: "New name",
      description: "New description",
    };

    updateContractMetadata(newMetadata);
  };

  return (
    <div>
      {metadataError && (
        <div style={{ color: 'red' }}>Failed to fetch contract metadata: {metadataError.message}</div>
      )}

      {isMetadataLoading ? (
        <div>Loading metadata...</div>
      ) : (
        <div>
          <h2>Contract Metadata</h2>
          <p>Name: {contractMetadata?.name}</p>
          <p>Description: {contractMetadata?.description}</p>
        </div>
      )}

      {updateError && (
        <div style={{ color: 'red' }}>Failed to update contract metadata: {updateError.message}</div>
      )}

      <button disabled={isUpdateLoading} onClick={handleUpdateMetadata}>
        {isUpdateLoading ? 'Updating...' : 'Update contract metadata'}
      </button>
    </div>
  );
};

export default ContractComponent;
