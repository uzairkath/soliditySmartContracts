const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("crud", function () {
  let Crud, crud;

    beforeEach(async () =>{
         Crud = await ethers.getContractFactory("Crud");
         crud = await Crud.deploy();
        await crud.deployed();    
    });

    it("Should check the initial id", async function () {
    expect(await crud.newId()).to.equal(1);
    })
    it("Should create new user", async function () {
    await crud.create('uzair');
    expect(await crud.newId()).to.equal(2);
    expect(await crud.read(1)).to.equal('uzair');
    })
    it("Should update the user", async function () {
        await crud.create('uzair');
        console.log(await crud.read(1));

        await crud.update(1, 'Ibad');
        console.log(await crud.read(1));
        expect(await crud.read(1)).to.equal('Ibad');
    })
    it("Should delete the existing user", async function () {
        await crud.create('uzair');
        console.log(await crud.read(1));
        await crud.destroy(1);
        try{
            await crud.read(1)
        } catch(e){
            expect(e.message.includes("this id does not exist"));
        }
    })
    it("Should not be able to delete the non existent user", async function(){
        try{
            await crud.delete(5);
        } catch(e){
            expect(e.message.includes("this id does not exist"));
        }
        expect(false);
    })

    //console.log(await crud.read(1));
});
