// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./Event_contract.sol";
import "./Mode.sol";
import "../../Alternate_Implementation_SFS/Contracts/Alternate_Fee_Sharing.sol";

// import "./Mode.sol";

contract Event_factory is Mode_related {
    // Alternate_Fee_Sharing
    Alternate_Fee_Sharing alternate;

    address Alternate_contract_address;
    // Event_related modeContract;
    Event_contract _event;
    // developer of this contract->
    address developer;
    //tokenID->
    uint256 private tokenID_Developer;
    // array containing address of all the events contract->
    Event_contract[] public Event_array;

    //error->

    //mapping->

    // errors->
    error OnlyOwner();
    error NotPaidEnough();

    //modifiers->
    modifier pay_for_function() {
        if (msg.value < 1000 wei) revert NotPaidEnough();
        _;
    }

    modifier Owner_Check() {
        if (msg.sender != developer) revert OnlyOwner();
        _;
    }

    // modifier Owner_Check() {
    //     if (msg.sender != developer) revert OnlyOwner();
    //     _;
    // }

    constructor(address alternate_contract_address) {
        developer = msg.sender;
        Alternate_contract_address = alternate_contract_address;

        alternate = Alternate_Fee_Sharing(Alternate_contract_address);
        // register to SFS contract->
        // tokenID_Developer = registerThis(msg.sender);
        emit Successfully_registered_to_SFS(developer, address(this));
    }

    receive() external payable {}

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
        _event = Event_contract(_event_address);
        _event.Event_is_live;
    }

    // withdraw developer share ->
    function withdraw_developer_share(
        uint256 _tokenId_developer,
        uint256 _amount
    ) public Owner_Check returns (uint256) {
        withdraw_money(_tokenId_developer, payable(msg.sender), _amount);

        emit Successfully_withdraw_from_SFS(msg.sender, _amount);
    }

    // using Alternate_Implementation_SFS_contract->

    function register_to_alternate(
        address[] memory _recipient_array,
        uint256[] memory _share,
        address _smart_contract
    ) public {
        alternate.register(_recipient_array, _share, _smart_contract);
    }

    function assign_to_alternate(
        uint256 _tokenId,
        uint256 _share
    ) public returns (uint256) {
        uint256 inter = alternate.assign(_tokenId, _share);
        return (inter);
    }

    function withdraw_to_alternate(
        uint256 _tokenId,
        uint256 _amount
    ) public returns (uint256) {
        return (alternate.withdraw(_tokenId, _amount));
    }

    function distributeFees_to_alternate(
        address _smartContract,
        uint256 _blockNumber
    ) public payable {
        console2.log("value", msg.value);
        console2.log("balance", address(this).balance);

        (bool callSuccess, ) = address(alternate).call{value: msg.value}( // msg.value problem
            abi.encodeWithSignature(
                "distributeFees(address,uint256)",
                _smartContract,
                _blockNumber
            )
        );
        require(callSuccess, "Call failed");
        console2.log("balance", address(this).balance);
    }

    function show_balance_to_alternate(
        uint256 tokenID
    ) public view returns (uint256) {
        return (alternate.show_balance(tokenID));
    }
}
