// these are the two main things you need to create a deploy function with hardhat deploy.
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from 'hardhat-deploy/types';


const deployGovernanceToken: DeployFunction = async function (  hre: HardhatRuntimeEnvironment
) { 
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
}

export default deployGovernanceToken;