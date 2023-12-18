// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {Fee_Sharing} from "../src/Fee_Sharing.sol";

contract Fee_Sharing_Script is Script {
    function setUp() public {}

    function run() public {
        uint256 owner = vm.envUint("DEV_PRIVATE_KEY");

        address developer_fee_sharing = vm.addr(owner);
        console2.log("developer_fee_sharing", developer_fee_sharing);

        vm.startBroadcast(owner);
        Fee_Sharing fee_sharing = new Fee_Sharing();
        console2.log("fee sharing", address(fee_sharing));

        //registering this contract on itself->
        uint256 Person2_private_key = vm.envUint("Person2_private_key");
        uint256 Person1_private_key = vm.envUint("Person1_private_key");

        address Person1 = vm.addr(Person1_private_key);
        address Person2 = vm.addr(Person2_private_key);
        address Person3 = 0xEeD019c9827aaC1EF194A1D9e1A9655D49B365be;

        console2.log("Person1", Person1);
        console2.log("Person2", Person2);

        address[] memory _owners = new address[](3);
        _owners[0] = Person1;
        _owners[1] = Person2;
        _owners[2] = Person3;

        uint256[] memory _share = new uint256[](3);
        _share[0] = 20;
        _share[1] = 50;
        _share[2] = 30;

        fee_sharing.register(_owners, _share);

        vm.stopBroadcast();
    }
}
