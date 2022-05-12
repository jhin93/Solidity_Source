require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("./secrets")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: secrets.url,
      accounts: [secrets.key]
    }
  },
  etherscan : {
    // https://etherscan.io/myapikey 에서 확인 가능
    apiKey: "1KTW7D2SXJS1H7QYTAV418DB38INZI6BNH"
  }
};
