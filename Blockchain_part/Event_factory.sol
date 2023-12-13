// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./Event_contract.sol";
import "./Mode_related.sol";

contract Event_factory {
    // developer of this contract->
    address developer;
    //tokenID->
    uint256 private tokenID_Developer;
    // array containing address of all the events contract->
    Event_contract[] public Event_array;

    // errors->
    error NotPaidEnough();
    error OnlyOwner();

    //modifiers->
    modifier pay_for_function() {
        if (msg.value < 1000 wei) revert NotPaidEnough();
        _;
    }

    modifier Owner_Check() {
        if (msg.sender != developer) revert OnlyOwner();
        _;
    }

    constructor() {
        developer = msg.sender;
        // register to SFS contract->
        tokenID_Developer = registerThis(msg.sender);
    }

    function register_event(
        string memory _event_name,
        string memory _event_discription,
        string memory _event_comapany_organiser,
        string memory _event_manager,
        string memory _event_location,
        string memory _event_date
    ) external payable pay_for_function {
        Event_contract event_contract = new Event_contract(
            _event_name,
            _event_discription,
            _event_comapany_organiser,
            _event_manager,
            _event_location,
            _event_date,
            msg.sender
        );

        Event_array.push(event_contract);
    }

    function get_event_status(address _event_address) private returns (bool) {
        Event_contract _event = Event_contract(_event_address);
        return (_event.Event_is_live);
    }

    // withdraw developer share ->
    function withdraw_developer_share(
        uint256 _tokenId_developer,
        uint256 _amount
    ) private Owner_Check returns (uint256 _amount) {
        withdraw_money(_tokenId_developer, msg.sender, _amount);
    }
}
