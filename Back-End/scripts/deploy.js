const {ethers}=require("hardhat");

async function main(){
  const voteFactory = await ethers.getContractFactory("Vote");
  const vote = await voteFactory.deploy();
  await vote.deployed();
  console.log(`vote address is: ${vote.address}`);
  const systemFactory = await ethers.getContractFactory("System");
  const system = await systemFactory.deploy();
  await system.deployed();
  console.log(`system address is: ${system.address}`);
}

main().then().catch(error=>{
  console.error(error);
})