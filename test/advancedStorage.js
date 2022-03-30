const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("advancedStorage", function () {
  it("Should return the data against the id", async function () {
    const Storage = await ethers.getContractFactory("advanceStorage");
    const storage = await Storage.deploy("Hello, uzair!");
    await storage.deployed();
    expect(await storage.getDataWithId(0)).to.equal("Hello, uzair!");

    await storage.set('Hello Jack!');

    expect(await storage.getDataWithId(1)).to.equal('Hello Jack!');
    console.log(await storage.totalData());
    expect(await storage.totalData()).to.equal(2);
    // expect(await greeter.get()).to.equal("Hello, mate!");

    // await greeter.set("Hola, uzair!");

    // expect(await greeter.get()).to.equal("Hola, uzair!");
  });
});
