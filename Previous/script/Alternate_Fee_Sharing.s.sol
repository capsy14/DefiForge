// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {Alternate_Fee_Sharing} from "../src/Alternate_Fee_Sharing.sol";
import {Event_factory} from "../src/contracts/Event_factory.sol";

contract Alternate_Fee_Sharing_Script is Script {
    function setUp() public {}

    function run() public returns (Alternate_Fee_Sharing, Event_factory) {
        uint256 owner = vm.envUint("DEV_PRIVATE_KEY");

        address developer_fee_sharing = vm.addr(owner);
        console2.log("developer_fee_sharing", developer_fee_sharing);

        vm.startBroadcast(developer_fee_sharing);
        Alternate_Fee_Sharing alternate = new Alternate_Fee_Sharing();
        console2.log("Alternate_Fee_Sharing", address(alternate));

        Event_factory event_factory = new Event_factory(address(alternate));
        console2.log("Event factory", address(event_factory));

        return (alternate, event_factory);
        vm.stopBroadcast();
    }
}
