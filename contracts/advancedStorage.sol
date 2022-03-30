//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract advanceStorage {
    string[] private data;

    constructor(string memory _data) {
        console.log("Deploying a Greeter with greeting:", _data);
        data.push(_data);
    }

    function getDataWithId(uint8 _id) public view returns (string memory) {
        console.log("looking for data against %s", _id);
        return data[_id];
    }

    function set(string memory _newData) public {
        data.push(_newData);
    }

    function totalData() view public returns(uint){
        return data.length;
    }
}
