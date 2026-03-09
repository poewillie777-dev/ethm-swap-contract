// Hardhat configuration for BSC mainnet and testnet deployment

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.4",
  networks: {
    bsc: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: [process.env.PRIVATE_KEY]
    },
    bscTestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};