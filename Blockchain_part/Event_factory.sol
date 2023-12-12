// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Event_factory {
    //data types->
    struct Event {
        string Event_name;
        string Event_discription;
        string Event_comapany_organiser;
        string Event_manager;
        string Event_location;
        string Event_date;
        address Event_manager_address;
        bool Event_is_live;
    }

    // array containing address of all the events contract->
    Event[] Event_array;

    mapping(address => Event) address_to_event;

    // errors->
    error NotPaidEnough();


    //modifiers->
    modifier pay_for_function(){
        if( msg.value < 1000 wei ) revert NotPaidEnough();
        _;
    }
    
    

    function register_event(
        string memory _event_name,
        string memory _event_discription,
        string memory _event_comapany_organiser,
        string memory _event_manager,
        string memory _event_location,
        string memory _event_date
    ) external  pay_for_function payable {
        Event memory _event = Event(
            _event_name,
            _event_discription,
            _event_comapany_organiser,
            _event_manager,
            _event_location,
            _event_date,
            msg.sender,
            true
        );
        Event_array.push(_event);
        // address_to_event[address(_event)]= _event;
    }
}
