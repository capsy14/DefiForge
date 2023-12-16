// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC1155Base.sol";
import "./Mode.sol";

contract MyContract is ERC1155Base, Mode_related {
    
    //errors->
    error Onlyowner12();

    // modifiers->
    modifier owner12_Check() {
        if (msg.sender != owner12) revert Onlyowner12();
        _;
    }
      
      uint256 tokenID;
      address owner12;


      constructor(
        address _defaultAdmin,
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps
    )
        ERC1155Base(
            _defaultAdmin,
            _name,
            _symbol,
            _royaltyRecipient,
            _royaltyBps
        )
    {
        
        owner12 = msg.sender;

        // register to SFS contract->
        tokenID= registerThis(owner12);
        emit Successfully_registered_to_SFS(owner12, address(this));

    }

    // withdraw share from SFS contract ->
    function withdraw_share(
        uint256 tokenID_,
        uint256 _amount
    ) public owner12_Check returns (uint256) {
        withdraw_money(tokenID_, payable(msg.sender), _amount);

        emit Successfully_withdraw_from_SFS(msg.sender, _amount);
    }

}