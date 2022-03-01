require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/-mAthU03LtPKcGD6lylu4rqXVwvPhyWO",
      accounts: ["436e2e40d4c0d59099b5e371d85fb58da9a156d93b50831787fb7a48c144cf3f"]
    },
  },
};
