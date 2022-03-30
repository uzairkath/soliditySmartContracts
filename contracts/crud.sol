//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

contract Crud{
    struct User{
        uint id;
        string name;
    }

    User[] private users;
    uint public newId = 1;

    function create(string memory _name) external{
        users.push(User(newId, _name));
        newId++;
    }

    function read(uint id) view public returns(string memory){
       // console.log('reading %i', id);
        uint i = find(id);
        return users[i].name;
    }

    function update(uint id, string memory _name) public{
       // console.log('changing name of %i to %s', id, _name);
        uint i = find(id);
        users[i].name = _name;

    }

    function destroy(uint id) public{
        uint i = find(id);
        delete users[i];

    }


    function find(uint id) view public returns(uint){
        for(uint i = 0; i<users.length; i++){
            if(users[i].id == id){
                return i;
            }
        }
        revert("this id does not exist");
    }


}