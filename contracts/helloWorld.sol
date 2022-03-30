//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract helloWorld {
    string private data;

    constructor(string memory _data) {
        console.log("Deploying a Greeter with greeting:", _data);
        data = _data;
    }

    function get() public view returns (string memory) {
        return data;
    }

    function set(string memory _newData) public {
        console.log("Changing greeting from '%s' to '%s'", data, _newData);
        data = _newData;
    }
}
