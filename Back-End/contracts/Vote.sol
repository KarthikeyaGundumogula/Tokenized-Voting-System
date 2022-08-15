//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract Vote is ERC20{
    constructor() ERC20("Vote","VOTE"){}
    mapping(address=>bool)public hasToken;
    function grantVote() public{
        require(!hasToken[msg.sender],"You already have a vote");
        hasToken[msg.sender]=true;
        _mint(msg.sender,1000000000000000000);
    }
}