// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Event_contract {
    // Event details->
    string public Event_name;
    string public Event_discription;
    string public Event_comapany_organiser;
    string public Event_manager;
    string public Event_location;
    string public Event_date;
    address public Event_manager_address;
    bool public Event_is_live;

    mapping(uint256 => uint256) public Total_tickets;
    mapping(uint256 => uint256) public Tickets_remaining;
    uint256[] public ticet_prices;

    constructor(
        string memory _event_name,
        string memory _event_discription,
        string memory _event_comapany_organiser,
        string memory _event_manager,
        string memory _event_location,
        string memory _event_date,
        address _event_manager_address
    ) {
        Event_name = _event_name;
        Event_discription = _event_discription;
        Event_comapany_organiser = _event_comapany_organiser;
        Event_manager = _event_manager;
        Event_location = _event_location;
        Event_date = _event_date;
        Event_manager_address = _event_manager_address;
        Event_is_live = true;
    }

    function change_event_status() {
        Event_is_live = false;
    }
}