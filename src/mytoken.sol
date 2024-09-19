// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

contract JkuatToken{
    // state variables
    string _name;
    uint256 _totalSupply;
    mapping (address => uint256) balances;

    constructor(string memory _newName){
        _name = _newName;
    }

    // WRITING FUNCTIONS
    // mint()
    function mint10tokens() external{
        // update the balance of the address who is receiving the tokens
        balances[msg.sender] += 10;

        // update the total supply
        _totalSupply += 10;
    }

    // burn()
    function burn10tokens() external{
        // update the balance of the msg.sender
        balances[msg.sender] -= 10;

        // update totalsupply
        _totalSupply -= 10;
    }

    // transfer()
    // update balance from account A to B
    function transfer10tokens(address _receiver) external{
        // update the balance of the sender
        balances[msg.sender] -= 10;

        // update balance of the receiver
        balances[_receiver] += 10;
    }

    // READING FUCNTIONS
    // totalSupply()
    // return tokens minted so far
    function totalSupply() external view returns(uint256){
        return _totalSupply;
    }

    // balanceOf()
    // return the balance of a given account
    function balanceOf(address _address) external view returns(uint256){
        return balances[_address];
    }

    function name() external view returns(string memory){
        return _name;
    }




}