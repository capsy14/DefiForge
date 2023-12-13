// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Event_contract {
    // Event details->
    string Event_name;
    string Event_discription;
    string Event_comapany_organiser;
    string Event_manager;
    string Event_location;
    string Event_date;
    address Event_manager_address;
    bool Event_is_live;

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
    
}
