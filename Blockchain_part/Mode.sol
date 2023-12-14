// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Register {
    function register(address _addr) external returns (uint256 tokenId) {}

    function withdraw(
        uint256 _tokenId,
        address payable _recipient,
        uint256 _amount
    ) external returns (uint256) {}
}

contract Mode_related {
    // address of SFS contract ->
    address SFS_Contract_Address = 0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6;

    function registerThis(address owner) public returns (uint256 tokenId) {
        Register sfsContract = Register(SFS_Contract_Address);
        return sfsContract.register(owner);
    }

    function withdraw_money(
        uint256 _tokenId,
        address payable _recipient,
        uint256 _amount
    ) public returns (uint256) {
        Register sfsContract = Register(SFS_Contract_Address);
        return sfsContract.withdraw(_tokenId, _recipient, _amount);
    }
}
