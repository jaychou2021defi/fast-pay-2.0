const FastPay = artifacts.require("FastPay");
const ProxyAdmin = artifacts.require("ProxyAdmin");
const FastPayProxy = artifacts.require("FastPayProxy");

module.exports = function (deployer) {
  deployer.deploy(FastPay);
  // deployer.deploy(FastPay,"0xd8BC56701BFCb572EF381d8C4f7d9dFb66F0f2E6","0xfa2281934a0f7d1398478cf1edd35677b37716c8");
  // deployer.deploy(ProxyAdmin);
  // deployer.deploy(FastPayProxy,"0x25Cd94A4ac4211f8B91298f5A066D70d27F5C1EF","0x9558C0D9C42d045bEda9c6547564D4dC8A80Afa0","0x8129fc1c");
};
