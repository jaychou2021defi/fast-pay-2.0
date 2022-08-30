const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const privateKey = fs.readFileSync('/Users/shuzhen/wallet/wallet-privatekey-agent');

module.exports = {

  networks: {
    bscTest: {
      gas: 5500000, // 部署花费Gas限制
      provider: new HDWalletProvider(String(privateKey), "https://data-seed-prebsc-2-s1.binance.org:8545"),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    polygon: {
      gas: 10000000, // 部署花费Gas限制
      gasPrice: 65000000001,
      provider: new HDWalletProvider(String(privateKey), "https://polygon-rpc.com"),
      network_id: 137,
      timeoutBlocks: 20,
      confirmations:2,
      skipDryRun: true
    },
    mumbai: {
      gas: 10000000, // 部署花费Gas限制
      gasPrice: 50186209889,
      provider: new HDWalletProvider(String(privateKey), "https://rpc-mumbai.maticvigil.com"),
      network_id: 80001,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 20,
      skipDryRun: true
    },
    ethereum: {
      gas: 10000000, // 部署花费Gas限制
      gasPrice: 10536783643,
      provider: new HDWalletProvider(String(privateKey), "wss://mainnet.infura.io/ws/v3/61a2d8714d8942eb854af3b2ac2c02da"),
      network_id: 1,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200
    },
    rinkeby: {
      gas: 24712388, // 部署花费Gas限制
      gasPrice: 5290000452,
      provider: new HDWalletProvider(String(privateKey), "wss://rinkeby.infura.io/ws/v3/61a2d8714d8942eb854af3b2ac2c02da"),
      network_id: 4,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 20,
      skipDryRun: true
    },
  },
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.11",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
