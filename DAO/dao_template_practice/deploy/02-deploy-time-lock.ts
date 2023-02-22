import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from 'hardhat-deploy/types';
import { MIN_DELAY } from "../helper-hardhat-config";

const deployTimeLock: DeployFunction = async function (
      hre: HardhatRuntimeEnvironment
  ) {
      // @ts-ignore
      const { getNamedAccounts, deployments } = hre
      const { deploy, log } = deployments
      const { deployer } = await getNamedAccounts()
      log("----------------------------------------------------")
      log("Deploying TimeLock...")
      const timeLock = await deploy("TimeLock", {
        from: deployer,
        /**
         * Here we can set any address in admin role also zero address.
         * previously In tutorial deployer has given admin role then
         * renounced as well. in later section so we are doing the same by giving admin role to
         * deployer and then renounced to keep the tutorial same.
         */
        args: [MIN_DELAY, [], [], deployer],
        log: true,
      })
  };
  
  export default deployTimeLock
