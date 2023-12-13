// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./Event_contract.sol";

contract Event_factory {
    // array containing address of all the events contract->
    Event_contract[] public Event_array;

    // errors->
    error NotPaidEnough();

    //modifiers->
    modifier pay_for_function() {
        if (msg.value < 1000 wei) revert NotPaidEnough();
        _;
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
}
