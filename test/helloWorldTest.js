const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("helloWorld");
    const greeter = await Greeter.deploy("Hello, mate!");
    await greeter.deployed();

    expect(await greeter.get()).to.equal("Hello, mate!");

    await greeter.set("Hola, uzair!");

    expect(await greeter.get()).to.equal("Hola, uzair!");
  });
});
