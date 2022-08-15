//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract System{
    mapping(address=>bool) public voters;
    function addVoter() public {
        require(!voters[msg.sender],"You are already a voter");
        voters[msg.sender] = true;
    }
}