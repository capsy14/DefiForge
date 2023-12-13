// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Register {
    function register(address _addr) private returns (uint256 tokenId) {}

    function withdraw(
        uint256 _tokenId,
        address payable _recipient,
        uint256 _amount
    ) private returns (uint256) {}
}

contract Mode_related {
    // address of SFS contract ->
    address SFS_Contract_Address;

    constructor(address _sfs_contract_address) {
        SFS_Contract_Address = _sfs_contract_address;
    }

    function registerThis() external returns (uint256 tokenId) {
        Register sfsContract = Register(SFS_Contract_Address);
        return sfsContract.register(owner);
    }

    function withdraw_money(
        uint256 _tokenId,
        address payable _recipient,
        uint256 _amount
    ) external returns (uint256) {
        Register sfsContract = Register(SFS_Contract_Address);
        return sfsContract.withdraw(_tokenId, _recipient, _amount);
    }
}
