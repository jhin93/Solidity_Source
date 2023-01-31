// these are the two main things you need to create a deploy function with hardhat deploy.
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from "hardhat";


const deployGovernanceToken: DeployFunction = async function (  hre: HardhatRuntimeEnvironment) { 
    const { getNamedAccounts, deployments, network } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    log("Deploying Governance Token...");
    const governanceToken = await deploy("GovernanceToken", {
        from: deployer,
        args: [],
        log: true,
        // waitConfirmations:
    })
    log(`Deployed governance token to address ${governanceToken.address}`);

    await delegate(governanceToken.address, deployer)
    log("Delegated!")
}

// Delegate my vote to other
const delegate = async (governanceTokenAddress: string, delegatedAccount: string) => {
    // governance token contract
    const governanceToken = await ethers.getContractAt(
        "GovernanceToken", 
        governanceTokenAddress
    );
    const tx = await governanceToken.delegate(delegatedAccount)
    await tx.wait(1);
    // ERC20Votes.sol - we look at number _checkpoints we can see how many checkpoints that account actually has.. numCheckpoints
    //                - _moveVotingPower - when do voting or delegate basically call this function. 
    console.log(`Checkpoints ${await governanceToken.numCheckpoints(delegatedAccount)}`) 
    // result : Checkpoints 1 
    // process : await tx.wait(1); -> This code make 1 checkpoint and console.log show it to us.
    // If you see zero checkpoints here it means you haven't delegated correctly.
}

export default deployGovernanceToken;