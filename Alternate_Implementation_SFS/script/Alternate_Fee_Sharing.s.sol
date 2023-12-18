// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {Alternate_Fee_Sharing} from "../src/Alternate_Fee_Sharing.sol";
import {Event_factory} from "../src/contracts/Event_factory.sol";

contract Alternate_Fee_Sharing_Script is Script {
    function setUp() public {}

    function run() public {
        uint256 owner = vm.envUint("DEV_PRIVATE_KEY");

        address developer_fee_sharing = vm.addr(owner);
        console2.log("developer_fee_sharing", developer_fee_sharing);

        vm.startBroadcast(owner);
        Alternate_Fee_Sharing alternate = new Alternate_Fee_Sharing();
        console2.log("Alternate_Fee_Sharing", address(alternate));

        // //registering this contract on itself->
        // uint256 Person2_private_key = vm.envUint("Person2_private_key");
        // uint256 Person1_private_key = vm.envUint("Person1_private_key");

        // address Person1 = vm.addr(Person1_private_key);
        // address Person2 = vm.addr(Person2_private_key);
        // address Person3 = 0xEeD019c9827aaC1EF194A1D9e1A9655D49B365be;

        // console2.log("Person1", Person1);
        // console2.log("Person2", Person2);

        // address[] memory _owners = new address[](3);
        // _owners[0] = Person1;
        // _owners[1] = Person2;
        // _owners[2] = Person3;

        // uint256[] memory _share = new uint256[](3);
        // _share[0] = 20;
        // _share[1] = 50;
        // _share[2] = 30;

        // alternate.register(_owners, _share);
        Event_factory event_factory = new Event_factory();
        console2.log("Event_factory ", address(event_factory));

        vm.stopBroadcast();
    }
}
